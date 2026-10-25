// Облачная синхронизация прогресса: таблица public.eb2_progress + RPC eb2_push (оптимистичная блокировка по rev).
// Принцип: локальное состояние всегда главное для работы (офлайн ничего не ломается),
// облако — копия. Любое расхождение разрешается слиянием mergeState (js/merge.js).
import { S, fresh, GUEST_KEY, switchUser, replaceState, onChange, readState, removeKey } from "./store.js?v=20261026b";
import { mergeState, isEmptyState, stable } from "./merge.js?v=20261026b";
import { client, ruError } from "./auth.js?v=20261026b";
import { toast } from "./util.js?v=20261026b";

const MAX_BYTES = 900 * 1024;
const BACKUP_PREFIX = "english_b2_backup_";
const DEVICE_KEY = "english_b2_device";

let user = null;
let status = "off"; // off | idle | pending | syncing | offline | error
let lastSync = 0;
let lastError = "";
let baseRev = 0;
let dirty = false;
let pendingSince = 0;
let timer = 0;
let lastPull = 0;
let gen = 0; // поколение: ++ при входе/выходе; после каждого await устаревшие операции молча прекращаются
let running = Promise.resolve(); // текущий цикл синхронизации (stopSync дожидается его)
let choice = null; // { resolve } — ждём ответа «объединить или заменить облачный прогресс?»
let unsub = [];
const statusSubs = new Set();
const appliedSubs = new Set();
const choiceSubs = new Set();

const metaKey = (uid) => `english_b2_sync_${uid}`;

function loadMeta(uid) {
  try {
    const m = JSON.parse(localStorage.getItem(metaKey(uid)) || "{}");
    baseRev = +m.baseRev || 0;
    dirty = !!m.dirty;
    lastSync = +m.lastSync || 0;
  } catch {
    baseRev = 0; dirty = false; lastSync = 0;
  }
}
function saveMeta() {
  if (!user) return;
  try { localStorage.setItem(metaKey(user.id), JSON.stringify({ baseRev, dirty, lastSync })); } catch { /* нет хранилища */ }
}

function setStatus(s, err = "") {
  status = s;
  lastError = err;
  statusSubs.forEach((f) => { try { f(syncStatus()); } catch (e) { console.error(e); } });
}
export const syncStatus = () => ({ status, user, lastSync, error: lastError, dirty, choice: !!choice });
export function onStatus(cb) {
  statusSubs.add(cb);
  return () => statusSubs.delete(cb);
}
/** Колбэк «из облака пришли изменения» — приложение перерисовывает экран. */
export function onApplied(cb) {
  appliedSubs.add(cb);
  return () => appliedSubs.delete(cb);
}
/** Колбэк «нужен выбор»: передаётся ({ guestEpoch, serverEpoch }). Ответ — answerChoice(true|false). */
export function onChoice(cb) {
  choiceSubs.add(cb);
  return () => choiceSubs.delete(cb);
}
/** mode: "merge" (по умолчанию) | "replace" — заменить облачный прогресс прогрессом с этого устройства. */
export function answerChoice(mode) {
  const c = choice;
  choice = null;
  if (c) c.resolve(mode === "replace" ? "replace" : "merge");
  setStatus(status);
}

/** Только известные поля верхнего уровня (белый список fresh()); внутри — вычищаем лишь значения, похожие на секреты. */
const SECRET = /^(sk-|gsk_|AIza|sb_secret|eyJ)/;
export function sanitize(state) {
  const out = {};
  for (const k of Object.keys(fresh())) if (state[k] !== undefined) out[k] = state[k];
  const strip = (x) => {
    if (typeof x === "string") return SECRET.test(x) ? "" : x;
    if (Array.isArray(x)) return x.map(strip);
    if (x && typeof x === "object") {
      const o = {};
      for (const [k, v] of Object.entries(x)) o[k] = strip(v);
      return o;
    }
    return x;
  };
  const res = strip(out);
  if (JSON.stringify(res).length > MAX_BYTES) throw new Error("Прогресс слишком большой для облака (больше 900 КБ)");
  return res;
}

const deviceId = () => {
  try {
    let d = localStorage.getItem(DEVICE_KEY);
    if (!d) { d = Math.random().toString(36).slice(2, 10); localStorage.setItem(DEVICE_KEY, d); }
    return d;
  } catch {
    return "dev";
  }
};

const locked = (fn) => (navigator.locks ? navigator.locks.request("eb2_sync", fn) : fn());

const ABORT = new Error("aborted");
const check = (g) => { if (g !== gen) throw ABORT; };

async function pull(g) {
  const c = await client();
  check(g);
  const { data, error } = await c.from("eb2_progress").select("state, rev").maybeSingle();
  check(g);
  if (error) throw error;
  lastPull = Date.now();
  return data ? { state: data.state || {}, rev: +data.rev || 0 } : null;
}

/** Отправка с разрешением конфликтов: до 3 повторов. Все записи — только после проверки поколения. */
async function push(g) {
  const c = await client();
  check(g);
  for (let i = 0; i < 3; i++) {
    const body = sanitize(S());
    const stamp = stable(body);
    const { data, error } = await c.rpc("eb2_push", { p_state: body, p_base_rev: baseRev, p_device: deviceId() });
    check(g);
    if (error) throw error;
    if (data?.ok) {
      baseRev = +data.rev;
      lastSync = Date.now();
      // если за время отправки прогресс изменился — остаёмся «грязными»
      dirty = stable(sanitize(S())) !== stamp;
      saveMeta();
      return true;
    }
    if (data?.conflict) {
      baseRev = +data.rev;
      replaceState(mergeState(S(), data.state || {}));
      continue;
    }
    throw new Error("Сервер вернул неожиданный ответ");
  }
  throw new Error("Не удалось согласовать прогресс с облаком, попробуйте позже");
}

/** Резервная копия гостевого прогресса: english_b2_backup_<ts>, хранятся 2 последние; одинаковую не дублируем. */
function backupGuest(g) {
  try {
    const json = JSON.stringify(g);
    const keys = Object.keys(localStorage).filter((k) => k.startsWith(BACKUP_PREFIX)).sort();
    if (keys.length && localStorage.getItem(keys[keys.length - 1]) === json) return;
    localStorage.setItem(BACKUP_PREFIX + Date.now(), json);
    const all = Object.keys(localStorage).filter((k) => k.startsWith(BACKUP_PREFIX)).sort();
    all.slice(0, Math.max(0, all.length - 2)).forEach((k) => localStorage.removeItem(k));
  } catch {
    /* нет места — не критично, гость остаётся в своём ключе до успешной отправки */
  }
}

/** Один цикл: pull → merge → при необходимости push. Возвращает { needChoice }, если нужен ответ пользователя (до любых записей). */
async function cycle(g, { guest = false, decision } = {}) {
  const server = await pull(g);
  const local = S();
  let merged = local;
  if (server) {
    baseRev = server.rev;
    merged = mergeState(local, server.state);
  } else {
    baseRev = 0;
  }
  let guestUsed = false;
  if (guest) {
    const gs = readState(GUEST_KEY);
    if (!isEmptyState(gs)) {
      const serverEpoch = +merged.epoch || 0;
      if (server && (+gs.epoch || 0) > serverEpoch && !decision) return { needChoice: { guestEpoch: +gs.epoch, serverEpoch } };
      backupGuest(gs);
      // гостевой прогресс сливаем БЕЗ учёта epoch (иначе чужой сброс в облаке выбросил бы гостя целиком)
      merged = decision === "replace"
        ? { ...gs, epoch: Math.max(Date.now(), serverEpoch + 1) }
        : mergeState({ ...gs, epoch: serverEpoch }, merged);
      guestUsed = true;
    }
  }
  check(g);
  const changed = stable(merged) !== stable(local);
  const needPush = !server || guestUsed || dirty || stable(sanitize(merged)) !== stable(sanitize(server.state));
  if (changed) {
    if (needPush) { dirty = true; saveMeta(); }
    replaceState(merged);
    appliedSubs.forEach((f) => { try { f(); } catch (e) { console.error(e); } });
  }
  if (needPush) await push(g);
  else { lastSync = Date.now(); dirty = false; saveMeta(); }
  if (guestUsed) {
    removeKey(GUEST_KEY);
    toast(decision === "replace" ? "Облачный прогресс заменён прогрессом с этого устройства" : "Прогресс с этого устройства объединён с аккаунтом", 4500);
  }
  return {};
}

/** Спросить пользователя ВНЕ блокировки; без ответа за 2 минуты — «Объединить». */
function askChoice(info) {
  return new Promise((resolve) => {
    const t = setTimeout(() => { if (choice) answerChoice("merge"); }, 120000);
    choice = { resolve: (m) => { clearTimeout(t); resolve(m); } };
    setStatus("pending");
    choiceSubs.forEach((f) => { try { f(info); } catch (e) { console.error(e); } });
  });
}

function run(opts = {}) {
  const g = gen;
  if (!user) return Promise.resolve();
  clearTimeout(timer);
  timer = 0;
  pendingSince = 0;
  const p = (async () => {
    setStatus("syncing");
    try {
      let res = await locked(() => cycle(g, opts));
      if (res?.needChoice) {
        const decision = await askChoice(res.needChoice);
        check(g);
        res = await locked(() => cycle(g, { ...opts, decision }));
      }
      check(g);
      setStatus(dirty ? "pending" : "idle");
    } catch (e) {
      if (e === ABORT || g !== gen) return; // пользователь сменился — молча выходим, ничего не пишем
      const offline = !navigator.onLine || /Failed to fetch|NetworkError|Load failed|dynamically imported|Importing a module/i.test(String(e?.message));
      setStatus(offline ? "offline" : "error", ruError(e));
    }
  })();
  running = p;
  return p;
}

export function syncNow() {
  return run({});
}

function schedulePush() {
  if (!user) return;
  dirty = true;
  saveMeta();
  const now = Date.now();
  if (!pendingSince) pendingSince = now;
  clearTimeout(timer);
  // debounce 3 с, но не реже чем раз в 30 с при непрерывной активности
  timer = setTimeout(() => { run({}); }, Math.max(0, Math.min(3000, pendingSince + 30000 - now)));
  if (status !== "offline" && status !== "error") setStatus("pending");
}

/** Немедленно отправить, если есть что (вызывается при сворачивании/закрытии/выходе). */
export async function flush() {
  if (!user) return true;
  if (!dirty && !timer) return true;
  await run({});
  return status === "idle";
}

function onVisibility() {
  if (!user) return;
  if (document.visibilityState === "hidden") {
    if (dirty || timer) run({});
  } else if (Date.now() - lastPull > 60000) {
    run({});
  }
}
const onPageHide = () => { if (user && (dirty || timer)) run({}); };
const onOnline = () => { if (user) run({}); };
const onOffline = () => { if (user) setStatus("offline"); };

export async function startSync(u) {
  if (user && user.id === u.id) return;
  if (user) await stopSync(false);
  ++gen;
  user = u;
  loadMeta(u.id);
  switchUser(u.id);
  unsub.push(onChange((reason) => { if (reason === "update") schedulePush(); }));
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", onPageHide);
  window.addEventListener("online", onOnline);
  window.addEventListener("offline", onOffline);
  unsub.push(() => {
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pagehide", onPageHide);
    window.removeEventListener("online", onOnline);
    window.removeEventListener("offline", onOffline);
  });
  setStatus("syncing");
  await run({ guest: true });
}

/**
 * Остановить синхронизацию. cleanup=true — ещё и удалить локальные данные пользователя (при выходе).
 * Сначала поколение инкрементируется (текущий цикл больше ничего не запишет), затем ждём его завершения
 * (не дольше 5 с), и только потом трогаем ключи — после этого вызывающий может безопасно делать switchUser().
 */
export async function stopSync(cleanup = true) {
  gen++;
  clearTimeout(timer);
  timer = 0;
  unsub.forEach((f) => f());
  unsub = [];
  const old = user;
  user = null;
  if (choice) answerChoice("merge");
  await Promise.race([running.catch(() => {}), new Promise((r) => setTimeout(r, 5000))]);
  if (cleanup && old) {
    removeKey(`english_b2_path_u_${old.id}`);
    removeKey(metaKey(old.id));
  }
  dirty = false;
  baseRev = 0;
  setStatus("off");
}
