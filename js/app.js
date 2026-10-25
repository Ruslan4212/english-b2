// Точка входа: роутер по hash, шапка, онбординг, «Сегодня», карта, уроки, прогресс, настройки.
import { S, update, save, exportJson, importJson, reset, BLOCKS, logTime, totalHours } from "./store.js?v=20261025a";
import { $, $$, esc, md, today, fmtDate, daysBetween, toast, plural, translit, studentName } from "./util.js?v=20261025a";
import { PHASES, DOW, TOTAL_WEEKS, dayInfo, tasksForDay, projectedFinish, CHECKPOINT_WEEKS, monthOfWeek } from "./plan.js?v=20261025a";
import { UNITS, LESSONS, lessonById } from "../data/index.js";
import { renderLesson, nextLesson, lessonForToday } from "./lesson.js?v=20261025a";
import { initHelper } from "./helper.js?v=20261025a";
import { currentDay, currentPhase, dayState, toggleTask, dayComplete, finishDay } from "./progress.js?v=20261025a";
import { queue, stats as srsStats } from "./srs.js?v=20261025a";
import { aiConfig, saveAiConfig, providerList, aiPing } from "./ai.js?v=20261025a";
import { voiceName, speak } from "./speech.js?v=20261025a";
import * as P from "./practice.js?v=20261025a";
import { bindSay } from "./exercises.js?v=20261025a";
import { renderAccount, initAccount, statusChanged, authNag, bindAuthNag } from "./account.js?v=20261025a";
import { hasStoredSession, currentUser, onAuth } from "./auth.js?v=20261025a";
import { startSync, stopSync, onApplied, onStatus, syncStatus } from "./sync.js?v=20261025a";
import { switchUser } from "./store.js?v=20261025a";
import { renderPlacement } from "./placement.js?v=20261025a";

const app = $("#app");
bindSay(app);

/* ------------------------------ тема ------------------------------ */
function applyTheme() {
  const t = localStorage.getItem("english_b2_theme");
  if (t) document.documentElement.dataset.theme = t;
}
applyTheme();
$("#themeBtn").onclick = () => {
  const dark = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const t = dark ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("english_b2_theme", t); } catch { /* нет хранилища */ }
};
$("#burger").onclick = () => $("#side").classList.toggle("open");

/* ------------------------------ шапка ------------------------------ */
function topStats() {
  const s = S();
  if (!s.profile) return ($("#topStats").innerHTML = "");
  const d = dayInfo(currentDay());
  const h = totalHours();
  $("#topStats").innerHTML = `<span>Неделя <b>${d.week}</b>/${TOTAL_WEEKS}</span><span>Фаза <b>${d.phase.level}</b></span><span>Часов <b>${h.toFixed(1)}</b>/550</span><span>Фраз <b>${Object.keys(s.cards).length}</b></span>`;
}

/* ------------------------------ роутер ------------------------------ */
const routes = {
  today: renderToday,
  map: renderMap,
  grammar: renderGrammar,
  lesson: (id) => renderLesson(app, id),
  words: () => P.renderWords(app),
  listen: (id) => P.renderListen(app, id),
  read: (id) => P.renderRead(app, id),
  speak: (id) => P.renderSpeak(app, id),
  write: (id) => P.renderWrite(app, id),
  work: (id) => P.renderWork(app, id),
  errors: () => P.renderErrors(app),
  progress: renderProgress,
  resources: () => P.renderResources(app),
  settings: renderSettings,
  checkpoint: (id) => P.renderCheckpoint(app, id),
  weekly: () => P.renderWeekly(app),
  setup: () => P.renderSetup(app),
  test: () => P.renderLevelTest(app),
  record: () => P.renderRecord(app),
  day: (i) => renderToday(+i),
  account: () => renderAccount(app),
  placement: () => renderPlacement(app),
};

function route() {
  const s = S();
  window.__ctx = null;
  const [name, arg] = location.hash.replace(/^#\/?/, "").split("/");
  // экран входа доступен и без профиля (новое устройство)
  if (name === "account") {
    $$(".side a").forEach((a) => a.classList.toggle("active", a.dataset.r === "account"));
    $("#side").classList.remove("open");
    topStats();
    routes[name](arg ? decodeURIComponent(arg) : undefined);
    return;
  }
  if (!s.profile) return renderOnboarding();
  // существующий ученик без имени: один раз за сессию уводим на «Сегодня», где висит карточка-вопрос
  if (!s.profile.name && !sessionStorage.getItem("english_b2_name_shown") && name !== "today") {
    try { sessionStorage.setItem("english_b2_name_shown", "1"); } catch { /* нет хранилища */ }
    if (name && name !== "day") { location.hash = "#/today"; return; }
  }
  const r = routes[name] ? name : "today";
  $$(".side a").forEach((a) => a.classList.toggle("active", a.dataset.r === r || (r === "lesson" && a.dataset.r === "grammar")));
  $("#side").classList.remove("open");
  topStats();
  routes[r](arg ? decodeURIComponent(arg) : undefined);
  if (name !== "lesson") window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
window.addEventListener("taskdone", (e) => {
  toast(`✅ Задача дня выполнена: ${e.detail.title}`);
  topStats();
});

/* ------------------------------ имя ученика ------------------------------ */
/** Два поля (по-русски и латиницей). Латиница заполняется по translit, пока её не правили руками. */
function nameFields(root, ru = "", en = "", onChange = () => {}) {
  let manual = !!en && en !== translit(ru);
  const fRu = root.querySelector("[data-name-ru]");
  const fEn = root.querySelector("[data-name-en]");
  fRu.value = ru;
  fEn.value = en;
  fRu.addEventListener("input", () => {
    if (!manual) fEn.value = translit(fRu.value);
    onChange();
  });
  fEn.addEventListener("input", () => {
    manual = true;
    onChange();
  });
  return () => ({ name: fRu.value.trim(), nameEn: fEn.value.trim() || translit(fRu.value) });
}
const nameFieldsHtml = () => `<div class="grid">
    <label>Имя по-русски<input type="text" data-name-ru maxlength="30" placeholder="Руслан" autocomplete="given-name"></label>
    <label>Как пишется латиницей<input type="text" data-name-en maxlength="30" placeholder="Ruslan"></label>
  </div>`;

/** Карточка-вопрос для учеников, у которых профиль есть, а имени нет. */
function nameAsk() {
  const s = S();
  if (!s.profile || s.profile.name) return "";
  return `<div class="card" data-nameask><h2>👋 Как вас зовут?</h2><p class="muted">Приложение подставит ваше имя в диалоги и упражнения, а Мия будет обращаться по имени.</p>
    ${nameFieldsHtml()}<div class="row" style="margin-top:10px"><button class="btn primary" data-namesave disabled>Сохранить</button></div></div>`;
}
function bindNameAsk() {
  const box = app.querySelector("[data-nameask]");
  if (!box) return;
  const btn = box.querySelector("[data-namesave]");
  const get = nameFields(box, "", "", () => { btn.disabled = !box.querySelector("[data-name-ru]").value.trim(); });
  btn.onclick = () => {
    const v = get();
    if (!v.name) return;
    update((s) => { s.profile.name = v.name; s.profile.nameEn = v.nameEn; });
    toast("Приятно познакомиться, " + v.name + "!");
    route();
  };
}

/* ---------------------------- онбординг ---------------------------- */
function renderOnboarding() {
  $("#topStats").innerHTML = "";
  app.innerHTML = `<div class="card">
    <h1>👋 Добро пожаловать в English B2 Path</h1>
    ${md(`Это курс, который ведёт **от полного нуля до уровня B2** по плану на 18 месяцев: каждый день вы открываете раздел **«Сегодня»** и делаете то, что там написано. Ничего не нужно планировать самому.

**Как устроено обучение:**
- **4 фазы**: A1 «Основа» (месяцы 1–3) → A2 «Базовое общение» (4–6) → B1 «Самостоятельность» (7–12) → B2 «Уверенное владение» (13–18).
- **Неделя ≈ 7 часов**: Пн/Ср/Пт — урок грамматики + карточки + слушание; Вт — говорение; Чт — письмо; Сб — свободное слушание и чтение; Вс — повторение и обзор недели.
- Каждое правило объяснено **по-русски, подробно, с примерами и озвучкой**. Если что-то непонятно — кнопка **🤖 «Непонятно — объясни подробнее»** вызывает ИИ-наставника.
- Фразы с уроков сами попадают в карточки (как Anki), ошибки — в ваш личный список для отработки.

>i Говорить нужно с первого месяца. Ваш собеседник — AI-репетитор **Мия**: живой звонок голосом, исправления и объяснения. Всё обучение — внутри приложения, ничего искать не нужно.`)}
    <p class="small">Уже занимались на другом устройстве? <a href="#/account">Войти в аккаунт</a> — прогресс подтянется из облака.</p>
  </div>
  <div class="card">
    <h2>1. Как вас зовут?</h2>
    <p class="muted">Имя нужно, чтобы диалоги и упражнения были про вас, а Мия обращалась к вам по имени. Хранится только в этом браузере.</p>
    ${nameFieldsHtml()}
  </div>
  <div class="card">
    <h2>2. Ваш уровень сейчас</h2>
    <p class="muted">Не уверены? Выберите «Определить тестом»: после настройки будет короткий тест, и приложение само подберёт урок, с которого начать.</p>
    <div class="grid">
      ${[["test", "Определить тестом", "5–15 минут, подберём стартовый урок"], ["1", "С полного нуля", "Неделя 1: звуки и чтение"], ["14", "У меня A1", "Начать с фазы A2, месяц 4"], ["27", "У меня A2", "Начать с фазы B1, месяц 7"], ["53", "У меня B1", "Начать с фазы B2, месяц 13"]]
        .map(([w, t, d], i) => `<label class="card" style="cursor:pointer;margin:0"><input type="radio" name="start" value="${w}" ${i === 0 ? "checked" : ""}> <b>${t}</b><div class="muted small">${d}</div></label>`).join("")}
    </div>
    <h2>3. Сколько часов в неделю готовы заниматься?</h2>
    <p class="muted">Считаются только осознанные занятия, не фоновое прослушивание. B2 требует около 550 часов.</p>
    <div class="grid">
      ${[[5, "Минимум", "≈25 месяцев"], [7, "Базовый (план)", "≈18 месяцев"], [10, "Усиленный", "≈13 месяцев"], [15, "Интенсив", "≈8,5 месяца"]]
        .map(([h, t, d]) => `<label class="card" style="cursor:pointer;margin:0"><input type="radio" name="hours" value="${h}" ${h === 7 ? "checked" : ""}> <b>${h} ч/нед — ${t}</b><div class="muted small">до B2 ${d}</div></label>`).join("")}
    </div>
    <h2>4. Какое произношение учить?</h2>
    <div class="row"><label><input type="radio" name="accent" value="us" checked> 🇺🇸 Американское</label><label><input type="radio" name="accent" value="gb"> 🇬🇧 Британское</label><button class="btn sm" data-test>🔊 Проверить голос</button></div>
    <div class="row" style="margin-top:18px"><button class="btn primary" data-go>Начать обучение →</button></div>
  </div>`;
  const goBtn = app.querySelector("[data-go]");
  goBtn.disabled = true;
  const getName = nameFields(app, "", "", () => { goBtn.disabled = !app.querySelector("[data-name-ru]").value.trim(); });
  app.querySelector("[data-test]").onclick = () => {
    // временно подставляем акцент, не сохраняя профиль: онбординг ещё не завершён
    S().profile = { accent: app.querySelector("[name=accent]:checked").value };
    speak("Hello! Nice to meet you. Let's learn English together.");
    S().profile = null;
  };
  goBtn.onclick = () => {
    const nm = getName();
    if (!nm.name) return toast("Сначала напишите, как вас зовут");
    const startRaw = app.querySelector("[name=start]:checked").value;
    const startWeek = startRaw === "test" ? 1 : +startRaw;
    update((s) => {
      s.profile = {
        started: today(),
        hoursPerWeek: +app.querySelector("[name=hours]:checked").value,
        accent: app.querySelector("[name=accent]:checked").value,
        rate: 0.92,
        name: nm.name,
        nameEn: nm.nameEn,
        startWeek: startWeek > 1 ? startWeek : 0,
      };
      s.day = (startWeek - 1) * 7;
      // уроки пропущенных фаз считаем пройденными, чтобы курс начался с нужной фазы
      if (startWeek > 1) {
        const ph = PHASES.find((p) => p.from === startWeek).n;
        for (const l of LESSONS) if (l.phase < ph) s.lessons[l.id] = { done: true, skipped: true, date: today() };
      }
    });
    location.hash = startRaw === "test" ? "#/placement" : "#/today";
    route();
  };
}

/* ------------------------------ сегодня ------------------------------ */
function taskLink(t) {
  switch (t.kind) {
    case "lesson": {
      const id = lessonForToday();
      if (id === "review") return { href: "#/lesson/review", label: "Повторение пройденного", sub: "День закрепления: план даёт на юнит 1–1,5 недели" };
      const nl = lessonById(id);
      return { href: `#/lesson/${nl.id}`, label: nl.title, sub: `${nl.unit.icon || "📘"} ${nl.unit.title}` };
    }
    case "srs": {
      const q = queue(currentPhase().n);
      return { href: "#/words", label: `${q.due.length} к повторению, ${q.fresh.length} новых`, sub: "" };
    }
    case "listen": return { href: t.aloud ? "#/listen/aloud" : "#/listen/next", label: "", sub: "" };
    case "speak": return { href: t.work ? "#/speak/call_work_colleagues" : "#/speak/call_week", label: "📞 Позвонить Мии", sub: "" };
    case "write": return { href: "#/write/week", label: "", sub: "" };
    case "errors": return { href: "#/errors", label: "", sub: "" };
    case "free": return { href: "#/read", label: "", sub: "" };
    case "phrases": return { href: "#/words", label: "", sub: "" };
    case "weekly": return { href: "#/weekly", label: "", sub: "" };
    case "checkpoint": return { href: `#/checkpoint/${t.cp}`, label: "", sub: "" };
    case "record": return { href: "#/record", label: "", sub: "" };
    case "setup": return { href: "#/setup", label: "", sub: "" };
    case "test": return { href: "#/test", label: "", sub: "" };
    default: return { href: "", label: "", sub: "" };
  }
}

function renderToday(viewDay) {
  const s = S();
  const i = viewDay ?? currentDay();
  const info = dayInfo(i);
  const tasks = tasksForDay(i);
  const st = dayState(i);
  const isCur = i === currentDay();
  const doneN = tasks.filter((t) => st.tasks[t.id]).length;
  const totalMin = tasks.reduce((a, t) => a + t.min, 0);
  const gap = s.lastActive ? daysBetween(s.lastActive, today()) : 0;
  const ph = info.phase;

  let banners = "";
  if (isCur && gap >= 3)
    banners += `<div class="banner">⏸ Перерыв ${gap} ${plural(gap, "день", "дня", "дней")}. План советует: вернуть <b>минимальный режим 15–20 минут в день</b> на неделю, затем наращивать. Сегодня достаточно Anki + один короткий пункт — это уже не пропуск.</div>`;
  else if (isCur && gap === 2)
    banners += `<div class="banner">Правило плана: пропуск двух дней подряд нужно закрыть сегодня хотя бы <b>15 минутами</b>. Начните с карточек.</div>`;
  if (info.week === 1 && info.dow === 0 && isCur) banners += `<div class="banner info">Неделя 1 — подготовка: 2–3 часа вместо обычных 7. Знакомимся со звуками, настраиваем инструменты.</div>`;
  if (CHECKPOINT_WEEKS[info.week]) banners += `<div class="banner info">🏁 Это последняя неделя фазы ${ph.level}. В воскресенье — контрольная точка.</div>`;

  app.innerHTML = nameAsk() + `
    <span class="pill">Персональный план · день ${i + 1}</span>
    <div class="row"><h1 style="margin:6px 0 0">${isCur ? 'Твой план <span class="hl-blue">на сегодня</span>' : 'День <span class="hl-blue">плана</span>'}</h1><span class="spacer"></span>
      ${i > 0 ? `<a class="btn sm ghost" href="#/day/${i - 1}">←</a>` : ""}<a class="btn sm ghost" href="#/day/${i + 1}">→</a>${!isCur ? `<a class="btn sm" href="#/today">К текущему дню</a>` : ""}</div>
    <p class="muted" style="margin-top:4px">Неделя <b>${info.week}</b> · ${DOW[info.dow]} по плану · месяц ${info.month} · <span class="pill ${ph.level.toLowerCase()}">Фаза ${ph.n}: ${ph.level} «${ph.title}»</span> · ≈${totalMin} мин</p>
    ${banners}${authNag()}
    <div class="bar ok" style="margin:10px 0"><i style="width:${tasks.length ? (doneN / tasks.length) * 100 : 0}%"></i></div>
    <div data-tasks>${tasks
      .map((t) => {
        const l = taskLink(t);
        const done = !!st.tasks[t.id];
        return `<div class="task ${done ? "done" : ""}">
          <div class="chk" data-chk="${t.id}" title="${done ? "Снять отметку" : "Отметить выполненным"}">${done ? "✓" : ""}</div>
          <div class="body"><div class="ttl">${esc(t.title)} <span class="muted small">· ${t.min} мин</span></div>
          ${l.label ? `<div class="small"><b>${esc(l.label)}</b> ${l.sub ? `<span class="muted">${esc(l.sub)}</span>` : ""}</div>` : ""}
          <div class="desc">${esc(t.desc)}</div></div>
          ${l.href && isCur ? `<a class="btn ${done ? "" : "primary"} sm" href="${l.href}">${done ? "Ещё раз" : "Начать"}</a>` : ""}
        </div>`;
      })
      .join("")}</div>
    ${isCur ? `<div class="row" style="margin-top:14px"><button class="btn ${dayComplete(i) ? "ok" : ""}" data-finish>${dayComplete(i) ? "✅ День выполнен — перейти к следующему" : "Завершить день (не всё сделано)"}</button>
      <span class="muted small">Учебный день не привязан к календарю: делайте его, когда удобно. Темп ${s.profile.hoursPerWeek} ч/нед → финиш ≈ ${fmtDate(projectedFinish(i))}.</span></div>` : ""}
    <div class="card" style="margin-top:18px"><h3>Фаза ${ph.n}: ${ph.level} — к концу фазы</h3><p>${esc(ph.goal)}</p><p class="muted small">Словарь: ${ph.vocab}. Ориентир накопленных часов: ${ph.hoursMark}.</p></div>`;

  bindNameAsk();
  bindAuthNag(app);
  if (!isCur) return;
  $$("[data-chk]", app).forEach((el) =>
    (el.onclick = () => {
      const t = tasks.find((x) => x.id === el.dataset.chk);
      const on = !st.tasks[t.id];
      if (on && ["manual", "free", "phrases", "errors", "speak"].includes(t.kind)) logTime(t.block, t.min, t.title);
      toggleTask(t.id, on);
      renderToday();
      topStats();
    }),
  );
  app.querySelector("[data-finish]").onclick = () => {
    if (!dayComplete(i) && !confirm("Не все задачи отмечены. Перейти к следующему дню всё равно? (Регулярность важнее идеальности.)")) return;
    finishDay();
    toast("🎉 День засчитан! Следующий учебный день открыт.");
    renderToday();
    topStats();
  };
}

/* ------------------------------ карта ------------------------------ */
function renderMap() {
  const cur = dayInfo(currentDay());
  const s = S();
  const weekDone = (w) => {
    for (let d = (w - 1) * 7; d < w * 7; d++) if (!s.days[d]?.finished) return false;
    return true;
  };
  app.innerHTML = `<span class="pill">Путь к B2</span><h1><span class="hl-blue">18 месяцев</span>, 78 недель</h1>
    <p class="muted">Нажмите на неделю, чтобы посмотреть её дни. Жёлтая рамка — контрольная точка фазы.</p>
    ${PHASES.map((p) => {
      const units = UNITS.filter((u) => u.phase === p.n);
      const ls = LESSONS.filter((l) => l.phase === p.n);
      const dn = ls.filter((l) => s.lessons[l.id]?.done).length;
      return `<div class="card phase p${p.n}">
        <div class="row"><h2 style="margin:0">Фаза ${p.n}: ${p.level} «${p.title}»</h2><span class="pill">месяцы ${p.months}</span><span class="pill">≈${p.hours} ч</span><span class="spacer"></span><span class="small muted">уроков ${dn}/${ls.length}</span></div>
        <p>${esc(p.goal)}</p>
        <div class="weeks">${Array.from({ length: p.to - p.from + 1 }, (_, k) => p.from + k)
          .map((w) => `<a class="wk ${weekDone(w) ? "done" : ""} ${w === cur.week ? "cur" : ""} ${CHECKPOINT_WEEKS[w] ? "cp" : ""}" href="#/day/${(w - 1) * 7}" title="Неделя ${w}, месяц ${monthOfWeek(w)}">${w}</a>`).join("")}</div>
        <details style="margin-top:10px"><summary>Что делать в фазе по блокам</summary>
          <div class="tbl-wrap"><table>
          ${[["Основной курс", p.course], ["Слова", p.words], ["Слушание", p.listen], ["Чтение", p.read], ["Говорение", p.speak], ["Письмо", p.write]].map(([a, b]) => `<tr><th style="width:150px;max-width:40%">${a}</th><td>${esc(b)}</td></tr>`).join("")}
          </table></div>
          <p><b>Юниты:</b> ${units.map((u) => esc(u.title)).join(" · ") || "—"}</p>
        </details>
      </div>`;
    }).join("")}`;
}

/* ------------------------------ уроки ------------------------------ */
function renderGrammar() {
  const s = S();
  const nl = nextLesson();
  app.innerHTML = `<span class="pill">Основной курс</span><h1>Уроки <span class="hl-blue">шаг за шагом</span></h1>
    <p class="muted">Уроки идут по порядку — каждый опирается на предыдущие. Любой пройденный урок можно открыть снова.</p>
    ${nl ? `<div class="banner info">Следующий урок: <b>${esc(nl.title)}</b> <a class="btn primary sm" href="#/lesson/${nl.id}">Открыть</a></div>` : `<div class="banner ok">Все уроки пройдены! 🎉</div>`}
    ${PHASES.map((p) => `<h2>Фаза ${p.n}: ${p.level} «${p.title}»</h2>` +
      UNITS.filter((u) => u.phase === p.n).map((u) => `<div class="card"><h3>${u.icon || "📘"} ${esc(u.title)}</h3><p class="muted small">${esc(u.about || "")}</p>
        ${u.lessons.map((l) => {
          const st = s.lessons[l.id];
          const open = st?.done || (nl && nl.id === l.id);
          return `<div class="ex-line"><span>${st?.done ? (st.skipped ? "⏭" : "✅") : nl && nl.id === l.id ? "▶️" : "🔒"}</span><div style="flex:1">${open ? `<a href="#/lesson/${l.id}">${esc(l.title)}</a>` : `<span class="muted">${esc(l.title)}</span>`}${st?.score != null ? ` <span class="pill">${st.score}%</span>` : ""}</div>${!open ? `<a class="small muted" href="#/lesson/${l.id}" title="Открыть досрочно">заглянуть</a>` : ""}</div>`;
        }).join("")}</div>`).join("")).join("")}`;
}

/* ------------------------------ прогресс ------------------------------ */
function renderProgress() {
  const s = S();
  const h = totalHours();
  const byBlock = {};
  for (const r of s.log) byBlock[r.block] = (byBlock[r.block] || 0) + r.min;
  const marks = [["A1", 100], ["A2", 200], ["B1", 370], ["B2", 550]];
  const st = srsStats();
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
  const weekMin = s.log.filter((r) => r.date >= weekAgo).reduce((a, r) => a + r.min, 0);
  const srsDays = Object.keys(s.reviewDays).filter((d) => d >= weekAgo).length;
  const maxBlock = Math.max(1, ...Object.values(byBlock));
  app.innerHTML = `<h1>📊 Прогресс и часы</h1>
    <div class="grid">
      <div class="card stat"><b>${h.toFixed(1)}</b><span class="muted small">часов всего (цель B2 ≈ 550)</span></div>
      <div class="card stat"><b>${(weekMin / 60).toFixed(1)}</b><span class="muted small">часов за 7 дней (норма ≥ 6 из 7)</span></div>
      <div class="card stat"><b>${srsDays}/7</b><span class="muted small">дней с Anki (норма > 5)</span></div>
      <div class="card stat"><b>${st.learned}</b><span class="muted small">фраз изучается${st.accuracy != null ? `, точность ${st.accuracy}%` : ""}</span></div>
    </div>
    <div class="card"><h3>Путь по накопленным часам</h3>
      <div class="bar"><i style="width:${Math.min(100, (h / 550) * 100)}%"></i></div>
      <div class="levels">${marks.map(([l, m]) => `<div>${h >= m ? "✅" : "⬜"} ${l} ≈ ${m} ч</div>`).join("")}</div></div>
    <div class="card"><h3>Часы по блокам</h3><p class="muted small">План: раз в неделю смотрите итоги по блокам — так видно, какой навык «недоедает».</p>
      ${Object.entries(BLOCKS).map(([k, n]) => `<div class="row" style="margin:6px 0"><span style="width:170px;max-width:100%">${n}</span><div class="bar" style="flex:1"><i style="width:${((byBlock[k] || 0) / maxBlock) * 100}%"></i></div><span class="small" style="width:60px;text-align:right">${((byBlock[k] || 0) / 60).toFixed(1)} ч</span></div>`).join("")}
    </div>
    <div class="card"><h3>Добавить занятие вручную</h3><p class="muted small">Урок с репетитором, сериал, книга — всё осознанное считается.</p>
      <div class="row"><input type="number" data-min placeholder="минуты" style="width:110px" min="1"><select data-block style="width:auto">${Object.entries(BLOCKS).map(([k, n]) => `<option value="${k}">${n}</option>`).join("")}</select><input type="text" data-note placeholder="заметка" style="flex:1;min-width:150px"><button class="btn primary" data-add>Добавить</button></div></div>
    <div class="card"><h3>Журнал (дата, минуты, блок, заметка)</h3><div class="tbl-wrap"><table><tr><th>Дата</th><th>Мин</th><th>Блок</th><th>Заметка</th><th></th></tr>
      ${s.log.slice(-60).reverse().map((r, k) => `<tr><td>${r.date}</td><td>${r.min}</td><td>${BLOCKS[r.block] || r.block}</td><td>${esc(r.note || "")}</td><td><button class="icon-btn" data-del="${s.log.length - 1 - k}">🗑</button></td></tr>`).join("") || `<tr><td colspan="5" class="muted">Пока пусто</td></tr>`}
    </table></div></div>
    <div class="card"><h3>Тесты уровня</h3>${s.tests.length ? `<table><tr><th>Дата</th><th>Тест</th><th>Результат</th></tr>${s.tests.map((t) => `<tr><td>${t.date}</td><td>${esc(t.kind)}</td><td>${esc(t.result)}</td></tr>`).join("")}</table>` : `<p class="muted">Ещё не было. Тест — раз в 3 месяца, он появится в плане дня.</p>`}</div>`;
  app.querySelector("[data-add]").onclick = () => {
    const m = +app.querySelector("[data-min]").value;
    if (!m) return toast("Укажите минуты");
    logTime(app.querySelector("[data-block]").value, m, app.querySelector("[data-note]").value);
    renderProgress();
    topStats();
  };
  $$("[data-del]", app).forEach((b) => (b.onclick = () => { update((s) => s.log.splice(+b.dataset.del, 1)); renderProgress(); topStats(); }));
}

/* ------------------------------ настройки ------------------------------ */
function renderSettings() {
  const s = S();
  const c = aiConfig();
  app.innerHTML = `<h1>⚙️ Настройки</h1>
  <div class="card"><h2>🤖 ИИ-наставник</h2>
    ${md(`Наставник объясняет непонятные темы, проверяет переводы и письма, ведёт разговор. Работает так же, как в DevOps-игре:

1. **Серверная функция Supabase** «english-tutor» — ключ ИИ хранится на сервере, ничего настраивать не нужно. Включается один раз владельцем (инструкция в README проекта).
2. **Личный бесплатный ключ** — если функция не отвечает. Ключ хранится **только в этом браузере** и уходит только выбранному провайдеру.

**Как получить бесплатный ключ Groq (2 минуты):** откройте console.groq.com/keys → войдите через Google → Create API Key → скопируйте ключ (начинается с gsk_) и вставьте ниже.`)}
    <label class="row" style="margin:8px 0"><input type="checkbox" data-srv ${c.useServer ? "checked" : ""}> Использовать серверную функцию Supabase</label>
    <div class="grid">
      <label>Провайдер для личного ключа<select data-prov>${providerList().map((p) => `<option value="${p.id}" ${p.id === c.provider ? "selected" : ""}>${p.label}</option>`).join("")}</select></label>
      <label>API-ключ<input type="password" data-key value="${esc(c.key)}" placeholder="gsk_…"></label>
      <label>Модель (необязательно)<input type="text" data-model value="${esc(c.model)}" placeholder="по умолчанию"></label>
    </div>
    <details><summary class="small">Адрес Supabase (для своего проекта)</summary><div class="grid"><label>URL<input type="text" data-url value="${esc(c.url)}"></label><label>Publishable key<input type="text" data-anon value="${esc(c.anon)}"></label></div></details>
    <div class="row" style="margin-top:10px"><button class="btn primary" data-save>Сохранить</button><button class="btn" data-ping>Проверить связь</button><span data-pingres class="small"></span></div>
  </div>
  <div class="card"><h2>Обучение</h2>
    ${nameFieldsHtml()}
    <div class="grid">
      <label>Часов в неделю<select data-hours>${[5, 7, 10, 15].map((h) => `<option ${h === s.profile.hoursPerWeek ? "selected" : ""}>${h}</option>`).join("")}</select></label>
      <label>Произношение<select data-accent><option value="us" ${s.profile.accent === "us" ? "selected" : ""}>🇺🇸 Американское</option><option value="gb" ${s.profile.accent === "gb" ? "selected" : ""}>🇬🇧 Британское</option></select></label>
      <label>Скорость речи диктора<select data-rate>${[[0.75, "медленно"], [0.92, "обычно"], [1.05, "быстро"]].map(([r, n]) => `<option value="${r}" ${r === s.profile.rate ? "selected" : ""}>${n}</option>`).join("")}</select></label>
      <label>Текущий учебный день (для перехода)<input type="number" data-day value="${currentDay() + 1}" min="1" max="${TOTAL_WEEKS * 7}"></label>
    </div>
    <p class="muted small">Голос: ${esc(voiceName())}. Лучше всего звучат «Natural»/«Online» голоса в браузере Microsoft Edge.</p>
    <div class="row"><button class="btn primary" data-save2>Сохранить</button><button class="btn sm" data-voice>🔊 Проверить голос</button></div>
  </div>
  <div class="card"><h2>☁️ Аккаунт и синхронизация</h2><p class="muted small">Войдите по email, чтобы прогресс хранился в облаке и был на всех устройствах. ${syncStatus().user ? `Вы вошли как <b>${esc(syncStatus().user.email || "")}</b>.` : "Без входа прогресс хранится только в этом браузере."}</p><a class="btn" href="#/account">${syncStatus().user ? "Открыть аккаунт" : "Войти или зарегистрироваться"}</a></div>
  <div class="card"><h2>Данные</h2><p class="muted small">Прогресс хранится в этом браузере. Сделайте резервную копию файлом, чтобы перенести на другое устройство.</p>
    <div class="row"><button class="btn" data-exp>⬇ Скачать копию прогресса</button><label class="btn">⬆ Загрузить копию<input type="file" accept=".json" data-imp hidden></label><span class="spacer"></span><button class="btn" data-reset style="color:var(--bad)">Сбросить всё</button></div></div>`;

  const val = (sel) => app.querySelector(sel).value;
  app.querySelector("[data-save]").onclick = () => {
    saveAiConfig({ useServer: app.querySelector("[data-srv]").checked, provider: val("[data-prov]"), key: val("[data-key]").trim(), model: val("[data-model]").trim(), url: val("[data-url]").trim(), anon: val("[data-anon]").trim() });
    toast("Сохранено");
  };
  app.querySelector("[data-ping]").onclick = async () => {
    app.querySelector("[data-save]").click();
    const r = app.querySelector("[data-pingres]");
    r.textContent = "Проверяю…";
    const ans = await aiPing();
    r.textContent = ans ? `✅ Наставник на связи: «${ans}»` : "❌ Нет ответа. Проверьте ключ или включите серверную функцию.";
  };
  const getName = nameFields(app, s.profile.name || "", s.profile.nameEn || "");
  app.querySelector("[data-save2]").onclick = () => {
    const nm = getName();
    if (!nm.name) return toast("Имя не должно быть пустым");
    update((s) => {
      s.profile.name = nm.name;
      s.profile.nameEn = nm.nameEn;
      s.profile.hoursPerWeek = +val("[data-hours]");
      s.profile.accent = val("[data-accent]");
      s.profile.rate = +val("[data-rate]");
      const d = Math.max(1, Math.min(TOTAL_WEEKS * 7, +val("[data-day]"))) - 1;
      s.day = d;
    });
    toast("Сохранено");
    topStats();
  };
  app.querySelector("[data-voice]").onclick = () => speak("This is how I sound. The weather is nice today, isn't it?");
  app.querySelector("[data-exp]").onclick = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([exportJson()], { type: "application/json" }));
    a.download = `english-b2-progress-${today()}.json`;
    a.click();
  };
  app.querySelector("[data-imp]").onchange = async (e) => {
    try {
      importJson(await e.target.files[0].text());
      toast("Прогресс загружен");
      route();
    } catch (err) {
      toast("Ошибка: " + err.message);
    }
  };
  app.querySelector("[data-reset]").onclick = () => {
    if (confirm("Удалить весь прогресс? Это нельзя отменить. Сначала можно скачать копию.")) {
      reset();
      route();
    }
  };
}

/* ------------------------------ аккаунт и синхронизация ------------------------------ */
const LAST_UID = "english_b2_last_uid";
const setLastUid = (v) => { try { if (v) localStorage.setItem(LAST_UID, v); else localStorage.removeItem(LAST_UID); } catch { /* нет хранилища */ } };
let syncUid = null;
initAccount({ rerender: () => route(), afterSignOut: () => { syncUid = null; setLastUid(null); switchUser(null); route(); } });

// экраны, которые безопасно перерисовать, когда из облака пришли изменения (не посреди упражнения)
const SAFE_SCREENS = ["", "today", "day", "map", "grammar", "progress", "settings", "errors", "account"];
function refreshAfterRemote() {
  const name = location.hash.replace(/^#\/?/, "").split("/")[0];
  topStats();
  if (SAFE_SCREENS.includes(name)) route();
}
onApplied(refreshAfterRemote);
onStatus(() => { statusChanged(app); });

async function enterUser(u) {
  if (!u || syncUid === u.id) return;
  syncUid = u.id;
  setLastUid(u.id);
  await startSync(u);
  refreshAfterRemote();
}
onAuth((event, session) => {
  if ((event === "SIGNED_IN" || event === "INITIAL_SESSION" || event === "TOKEN_REFRESHED") && session?.user) {
    enterUser(session.user);
  } else if (event === "SIGNED_OUT" && syncUid) {
    syncUid = null;
    setLastUid(null);
    stopSync(true).then(() => { switchUser(null); route(); });
  }
});

// офлайн-запуск вошедшего пользователя: сразу показываем его локальный прогресс, не дожидаясь библиотеки
if (hasStoredSession()) {
  try {
    const last = localStorage.getItem(LAST_UID);
    if (last) switchUser(last);
  } catch { /* нет хранилища */ }
}
initHelper();
save();
route();

// есть сохранённая сессия или вернулись по ссылке с ?code= — поднимаем клиент и синхронизацию
if (hasStoredSession() || new URLSearchParams(location.search).has("code")) {
  currentUser()
    .then((u) => {
      if (u) return enterUser(u);
      setLastUid(null); // сессия недействительна — возвращаемся к гостю
      switchUser(null);
    })
    .then(() => { route(); })
    .catch(() => { /* нет сети: работаем локально, при следующем запуске попробуем снова */ });
}
