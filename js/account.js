// Экраны входа и аккаунта, значок статуса в шапке, плашка для гостя.
import { S } from "./store.js?v=20261028a";
import { esc, toast } from "./util.js?v=20261028a";
import { hasStoredSession, signUp, signIn, signOut, ruError } from "./auth.js?v=20261028a";
import { syncStatus, onStatus, syncNow, flush, stopSync, answerChoice, onChoice } from "./sync.js?v=20261028a";

const NAG_KEY = "english_b2_auth_nag";
let tab = "login"; // login | signup
let busy = false;
let confirmOut = false; // карточка «выйти несмотря на несохранённое»
let choiceInfo = null; // запрос «заменить облачный прогресс?»
let hooks = { rerender: () => {}, afterSignOut: () => {} };

export function initAccount(h) {
  hooks = { ...hooks, ...h };
  // вопрос задаётся вне блокировки синхронизации: сразу ведём пользователя на экран аккаунта
  onChoice((info) => {
    choiceInfo = info;
    if (location.hash.startsWith("#/account")) hooks.rerender();
    else location.hash = "#/account";
  });
  onStatus(() => { paintBadge(); });
  paintBadge();
}

const LABEL = { off: "", idle: "☁️✓", pending: "⏳", syncing: "🔄", offline: "📴", error: "⚠️" };
const TITLE = {
  off: "Войти в аккаунт", idle: "Прогресс синхронизирован", pending: "Есть несохранённые изменения",
  syncing: "Синхронизация…", offline: "Нет сети — прогресс сохранится позже", error: "Ошибка синхронизации",
};

/** Значок в шапке и пункт меню. */
export function paintBadge() {
  const st = syncStatus();
  const b = document.getElementById("authBadge");
  if (b) {
    b.textContent = st.user ? LABEL[st.status] || "👤" : "👤";
    b.title = st.user ? TITLE[st.status] : TITLE.off;
  }
  const side = document.getElementById("sideAuth");
  if (side) side.textContent = st.user ? "👤 Аккаунт" : "👤 Войти";
}

const hhmm = (t) => new Date(t).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
function statusLine(st) {
  switch (st.status) {
    case "idle": return st.lastSync ? `✅ Синхронизировано ${hhmm(st.lastSync)}` : "✅ Синхронизировано";
    case "syncing": return "🔄 Синхронизация…";
    case "pending": return "⏳ Изменения скоро отправятся";
    case "offline": return "📴 Нет сети — сохранится позже";
    case "error": return `⚠️ ${esc(st.error || "Ошибка синхронизации")}`;
    default: return "";
  }
}

/* ------------------------------ экран #/account ------------------------------ */
export function renderAccount(app) {
  const st = syncStatus();
  if (st.user) return renderProfile(app, st);
  if (hasStoredSession()) {
    app.innerHTML = `<h1>👤 Аккаунт</h1><div class="card"><p class="muted">Проверяю вход… Если сети нет, прогресс всё равно сохраняется на этом устройстве и отправится позже.</p></div>`;
    return;
  }
  const su = tab === "signup";
  app.innerHTML = `<h1>👤 Аккаунт</h1>
  <div class="card">
    <div class="row" style="margin-bottom:12px">
      <button class="btn ${su ? "" : "primary"}" data-tab="login">Вход</button>
      <button class="btn ${su ? "primary" : ""}" data-tab="signup">Регистрация</button>
    </div>
    <p class="muted small" style="margin-top:0">${su ? "Создайте аккаунт, чтобы прогресс сохранялся в облаке и был на всех ваших устройствах." : "Войдите, чтобы загрузить прогресс с другого устройства."} Без аккаунта приложение тоже работает — прогресс хранится только в этом браузере.</p>
    <form data-form autocomplete="on">
      <div class="grid">
        <label>Email<input type="email" data-email required autocomplete="email" placeholder="you@example.com"></label>
        <label>Пароль${su ? " (не короче 6 символов)" : ""}<input type="password" data-pw required minlength="6" autocomplete="${su ? "new-password" : "current-password"}"></label>
      </div>
      <div class="row" style="margin-top:12px"><button class="btn primary" type="submit" data-go>${su ? "Зарегистрироваться" : "Войти"}</button></div>
      <p class="small" data-err style="color:var(--bad);margin:10px 0 0" role="alert"></p>
    </form>
    ${su ? "" : `<p class="muted small">Если забыли пароль — напишите автору курса.</p>`}
    <p class="muted small">Аккаунт общий с DevOps-игрой автора: если вы там уже регистрировались, подойдут тот же email и пароль.</p>
  </div>`;
  app.querySelectorAll("[data-tab]").forEach((b) => {
    b.onclick = () => { tab = b.dataset.tab; renderAccount(app); };
  });
  const form = app.querySelector("[data-form]");
  const err = app.querySelector("[data-err]");
  const go = app.querySelector("[data-go]");
  form.onsubmit = async (e) => {
    e.preventDefault();
    if (busy) return;
    const email = app.querySelector("[data-email]").value.trim();
    const pw = app.querySelector("[data-pw]").value;
    busy = true;
    go.disabled = true;
    err.textContent = "";
    go.textContent = "Подождите…";
    try {
      if (su) {
        const r = await signUp(email, pw);
        // подтверждение почты отключено: сессия приходит сразу; если нет — пробуем войти
        if (!r?.session) await signIn(email, pw);
      } else {
        await signIn(email, pw);
      }
      toast(su ? "Аккаунт создан. Синхронизирую прогресс…" : "Вы вошли. Синхронизирую прогресс…");
    } catch (ex) {
      err.textContent = ruError(ex);
      go.textContent = su ? "Зарегистрироваться" : "Войти";
      go.disabled = false;
    } finally {
      busy = false;
    }
  };
}

function renderProfile(app, st) {
  const choiceCard = choiceInfo || st.choice
    ? `<div class="card" style="border-color:var(--warn)"><h3>Как поступить с прогрессом этого устройства?</h3>
        <p>На этом устройстве вы недавно сбросили прогресс или загрузили его из файла, и эта отметка новее облачной. Можно объединить оба прогресса или полностью заменить облачный прогрессом с этого устройства.</p>
        <div class="row"><button class="btn primary" data-choice="merge">Объединить</button><button class="btn" data-choice="replace" style="color:var(--bad)">Заменить облачный прогресс моим</button></div>
        <p class="muted small">Если не ответить, через 2 минуты будет выбрано «Объединить». Копия прогресса с этого устройства сохраняется в браузере (english_b2_backup_…).</p></div>`
    : "";
  const outCard = confirmOut
    ? `<div class="card" style="border-color:var(--warn)"><h3>Есть несохранённые изменения</h3>
        <p>Прогресс ещё не ушёл в облако (нет сети или ошибка). Если выйти сейчас, эти изменения будут потеряны.</p>
        <div class="row"><button class="btn" data-out-cancel>Остаться</button><button class="btn" data-out-force style="color:var(--bad)">Выйти и потерять</button></div></div>`
    : "";
  app.innerHTML = `<h1>👤 Аккаунт</h1>${choiceCard}${outCard}
  <div class="card">
    <p style="margin-top:0">Вы вошли как <b>${esc(st.user.email || "")}</b></p>
    <p data-status>${statusLine(st)}</p>
    <div class="row"><button class="btn primary" data-sync ${st.status === "syncing" ? "disabled" : ""}>Синхронизировать сейчас</button><button class="btn" data-out>Выйти</button></div>
    <p class="muted small">Тема, настройки ИИ-наставника и аудио остаются только на этом устройстве и в облако не попадают. Аккаунт общий с DevOps-игрой автора.</p>
  </div>`;
  app.querySelectorAll("[data-choice]").forEach((b) => {
    b.onclick = () => { choiceInfo = null; answerChoice(b.dataset.choice); renderAccount(app); };
  });
  app.querySelector("[data-sync]").onclick = () => { syncNow(); };
  app.querySelector("[data-out]").onclick = async () => {
    await flush();
    const s2 = syncStatus();
    if (s2.status === "idle") return doSignOut();
    confirmOut = true;
    renderAccount(app);
  };
  const c = app.querySelector("[data-out-cancel]");
  if (c) c.onclick = () => { confirmOut = false; renderAccount(app); };
  const f = app.querySelector("[data-out-force]");
  if (f) f.onclick = () => { doSignOut(); };
}

export async function doSignOut() {
  confirmOut = false;
  try { await signOut(); } catch { /* локальный выход всё равно выполняем ниже */ }
  await stopSync(true); // дожидается текущего цикла и только потом чистит ключи
  hooks.afterSignOut();
}

/** Перерисовать экран аккаунта при смене статуса, не трогая форму ввода у гостя. */
export function statusChanged(app) {
  paintBadge();
  const h = location.hash;
  if (!h.startsWith("#/account")) return;
  const st = syncStatus();
  if (st.user) renderAccount(app);
  else if (!app.querySelector("[data-form]")) renderAccount(app);
}

/* ------------------------------ плашка для гостя ------------------------------ */
export function authNag() {
  try { if (localStorage.getItem(NAG_KEY)) return ""; } catch { /* нет хранилища */ }
  if (syncStatus().user || hasStoredSession()) return "";
  const s = S();
  const lessons = Object.values(s.lessons || {}).filter((l) => l.done && !l.skipped).length;
  if (lessons < 1 && Object.keys(s.cards || {}).length < 20) return "";
  return `<div class="banner info" data-authnag><div class="row"><span style="flex:1;min-width:200px">☁️ Прогресс хранится только в этом браузере. <a href="#/account">Создайте аккаунт</a> — и он сохранится в облаке и будет на всех устройствах.</span><button class="btn sm ghost" data-nag-close>Скрыть</button></div></div>`;
}
export function bindAuthNag(root) {
  const b = root.querySelector("[data-nag-close]");
  if (b) b.onclick = () => {
    try { localStorage.setItem(NAG_KEY, "1"); } catch { /* нет хранилища */ }
    root.querySelector("[data-authnag]")?.remove();
  };
}
