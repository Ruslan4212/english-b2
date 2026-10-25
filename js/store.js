// Весь прогресс ученика — один объект в localStorage. Можно выгрузить/загрузить файлом.
import { today, uid } from "./util.js?v=20261026b";
import { stable } from "./merge.js?v=20261026b";

export const GUEST_KEY = "english_b2_path_v1";
let KEY = GUEST_KEY; // ключ текущего пользователя: гость — общий, вошедший — english_b2_path_u_<uid>

export const fresh = () => ({
  v: 1,
  profile: null, // { started, hoursPerWeek, startWeek, accent, rate, name }
  day: 0, // индекс текущего учебного дня (0 = неделя 1, понедельник)
  days: {}, // { [dayIndex]: { tasks: { [taskId]: true }, finished: "2026-10-18" } }
  lessons: {}, // { [lessonId]: { done, score, date } }
  cards: {}, // { [id]: { en, ru, deck, src, due, ivl, ease, reps, lapses, added } }
  newLog: {}, // { [date]: сколько новых карточек введено }
  reviewDays: {}, // { [date]: сколько повторено }
  log: [], // [{ id, date, min, block, note }]
  errors: [], // [{ id, date, src, wrong, right, why, fixed }]
  writings: [], // [{ id, date, task, text, result }]
  speaking: [], // [{ id, date, topic, turns }]
  checks: {}, // чек-листы: { [id]: { [item]: true } }
  tests: [], // [{ id, date, kind, result, note }]
  listened: {}, // { [dialogId]: { plays, shadowed, date } }
  read: {}, // { [textId]: { date, score } }
  setup: {}, // выбор учебника, репетитора и т.п.
  duo: { p: {}, xp: {}, goal: 30 }, // тренажёр «Фразы»: p[phraseId] = { s сила 0..5, due, n показов, w ошибок, mod }, xp[date], goal — цель XP в день
  lastActive: null,
  deletedCards: {}, // { [cardId]: ts } — надгробия удалённых карточек (чтобы удаление не «воскресало» при слиянии)
  epoch: 0, // метка сброса/импорта: сторона с меньшим epoch при слиянии отбрасывается целиком
  meta: {}, // { editedAt, profileAt, setupAt } — время правки; profile/setup сливаются по своим меткам
});

const LISTS = ["log", "errors", "writings", "speaking", "tests"];
const fnv = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
};
/** Старым записям без id выдаём ДЕТЕРМИНИРОВАННЫЙ id (хэш содержимого + номер среди одинаковых): на двух устройствах совпадёт. */
export function ensureIds(st) {
  for (const k of LISTS) {
    const seen = {};
    for (const e of st[k] || []) {
      if (!e || typeof e !== "object" || e.id != null) continue;
      const h = fnv(stable(e));
      seen[h] = (seen[h] || 0) + 1;
      e.id = `h_${h}_${seen[h]}`;
    }
  }
  return st;
}

export function readState(key) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return ensureIds({ ...fresh(), ...JSON.parse(raw) });
  } catch {
    /* пустое хранилище или приватный режим */
  }
  return fresh();
}
export function removeKey(key) {
  try { localStorage.removeItem(key); } catch { /* нет хранилища */ }
}
export const currentKey = () => KEY;

let state = readState(KEY);
const subs = new Set();
const notify = (reason) => subs.forEach((f) => { try { f(reason); } catch (e) { console.error(e); } });
/** Подписка на изменения: reason = "update" | "replace" | "switch" | "storage". Возвращает отписку. */
export function onChange(cb) {
  subs.add(cb);
  return () => subs.delete(cb);
}

export const S = () => state;

/** Переключить хранилище на пользователя (uid) или на гостя (null). */
export function switchUser(uid) {
  KEY = uid ? `english_b2_path_u_${uid}` : GUEST_KEY;
  state = readState(KEY);
  notify("switch");
}

/** Подменить состояние целиком (после слияния с облаком). */
export function replaceState(obj) {
  state = ensureIds({ ...fresh(), ...obj });
  save();
  notify("replace");
}

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* хранилище недоступно: прогресс живёт до перезагрузки */
  }
}

export function update(fn) {
  const before = LISTS.map((k) => (state[k] || []).length);
  const pBefore = JSON.stringify(state.profile ?? null), sBefore = JSON.stringify(state.setup ?? {});
  const gBefore = state.duo?.goal;
  fn(state);
  // новым записям (добавленным в конец) выдаём id — по нему записи сливаются между устройствами
  LISTS.forEach((k, i) => {
    const list = state[k] || [];
    for (let j = before[i]; j < list.length; j++) if (list[j] && typeof list[j] === "object" && list[j].id == null) list[j].id = uid();
  });
  state.lastActive = today();
  if (!state.meta) state.meta = {};
  const now = Date.now();
  state.meta.editedAt = now;
  if (JSON.stringify(state.profile ?? null) !== pBefore) state.meta.profileAt = now;
  if (JSON.stringify(state.setup ?? {}) !== sBefore) state.meta.setupAt = now;
  if (state.duo?.goal !== gBefore) state.meta.duoGoalAt = now;
  save();
  notify("update");
}

export function deleteCard(id) {
  update((s) => {
    delete s.cards[id];
    if (!s.deletedCards) s.deletedCards = {};
    s.deletedCards[id] = Date.now();
  });
}

export function reset() {
  state = fresh();
  state.epoch = Date.now();
  state.meta.editedAt = state.meta.profileAt = state.meta.setupAt = state.epoch;
  save();
  notify("update");
}

export function exportJson() {
  return JSON.stringify(state, null, 1);
}

export function importJson(text) {
  const o = JSON.parse(text);
  if (!o || typeof o !== "object" || o.v !== 1) throw new Error("Это не файл прогресса English B2 Path");
  state = { ...fresh(), ...o };
  state.epoch = Date.now();
  state.meta = { ...(o.meta || {}), editedAt: state.epoch, profileAt: state.epoch, setupAt: state.epoch };
  ensureIds(state);
  save();
  notify("update");
}

// другая вкладка записала прогресс — перечитываем
window.addEventListener("storage", (e) => {
  if (e.key === KEY) {
    state = readState(KEY);
    notify("storage");
  }
});

/* ---------------- журнал часов ---------------- */
export const BLOCKS = {
  course: "Курс (грамматика)",
  words: "Слова",
  listen: "Слушание",
  read: "Чтение",
  speak: "Говорение",
  write: "Письмо",
};

export function logTime(block, min, note = "") {
  if (!min || min <= 0) return;
  update((s) => s.log.push({ date: today(), min: Math.round(min), block, note }));
}

export function totalHours() {
  return state.log.reduce((a, r) => a + r.min, 0) / 60;
}

/* ---------------- ошибки ---------------- */
export function addError(src, wrong, right, why = "") {
  if (!wrong && !right) return;
  update((s) => {
    const dup = s.errors.find((e) => e.right === right && e.wrong === wrong && !e.fixed);
    if (dup) dup.count = (dup.count || 1) + 1;
    else s.errors.push({ id: uid(), date: today(), src, wrong, right, why, fixed: false, count: 1 });
  });
}

/* ---------------- карточки ---------------- */
export function addCard(en, ru, deck = "base", src = "") {
  const id = "c_" + en.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 60);
  if (state.cards[id]) return false;
  update((s) => {
    s.cards[id] = { en, ru, deck, src, due: null, ivl: 0, ease: 2.5, reps: 0, lapses: 0, added: today(), mod: Date.now() };
  });
  return true;
}
