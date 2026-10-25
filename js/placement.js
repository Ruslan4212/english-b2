// Стартовый тест: определяет, с какого урока начинать. Идём по темам (юнитам) курса по порядку,
// по 3 вопроса на тему; тема «знакома», если верно ≥ 2 из 3. Две незнакомые темы подряд — тест закончен.
// Старт — первый урок первой незнакомой темы; всё до неё отмечается как пропущенное (skipped).
import { S, update, logTime } from "./store.js?v=20261025a";
import { $$, esc, today, shuffle, pz, toast } from "./util.js?v=20261025a";
import { PHASES, dayInfo, tasksForDay } from "./plan.js?v=20261025a";
import { UNITS, LESSONS } from "../data/index.js";
import { markToday } from "./progress.js?v=20261025a";

const PER_UNIT = 3;
const PASS = 2;
const STOP_AFTER = 2;

function unitQuestions(u) {
  const items = [];
  for (const l of u.lessons) for (const st of l.steps) if (st.t === "choice" && !st.listen) for (const it of st.items) if (it[0] && Array.isArray(it[1])) items.push(pz(it));
  return shuffle(items).slice(0, PER_UNIT);
}

const inlineQ = (q) => esc(q).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

/** День плана, с которого урок первой незнакомой темы открывается по графику фазы. */
function dayFor(unit) {
  const ph = PHASES.find((p) => p.n === unit.phase);
  const inPhase = LESSONS.filter((l) => l.phase === ph.n && l.unit.id !== "u_ph");
  const before = inPhase.findIndex((l) => l.unit.id === unit.id);
  const slots = [];
  for (let i = (ph.from - 1) * 7; i < ph.to * 7; i++) if (dayInfo(i).week > 1 && tasksForDay(i).some((t) => t.id === "lesson")) slots.push(i);
  if (unit.id === "u_ph" || !slots.length) return (ph.from - 1) * 7;
  return slots[Math.min(slots.length - 1, Math.floor((Math.max(0, before) * slots.length) / inPhase.length))];
}

/** Применить результат: уроки до стартовой темы — пропущены, день плана — по графику. */
export function applyStart(unitId) {
  const idx = UNITS.findIndex((u) => u.id === unitId);
  const unit = UNITS[idx];
  const day = dayFor(unit);
  update((s) => {
    for (const u of UNITS.slice(0, idx)) for (const l of u.lessons) if (!s.lessons[l.id]?.done) s.lessons[l.id] = { done: true, skipped: true, date: today() };
    // повторный тест на более низкий уровень: снимаем прежние «пропущено» (настоящие прохождения не трогаем)
    for (const u of UNITS.slice(idx)) for (const l of u.lessons) if (s.lessons[l.id]?.skipped) delete s.lessons[l.id];
    s.day = day;
    if (s.profile) s.profile.startWeek = day >= 7 ? dayInfo(day).week : 0;
  });
  markToday("setup"); // тест и есть задача «Старт» первого дня
}

function knownLevels(results, startUnit) {
  const lv = [...new Set(results.filter((r) => r.ok && UNITS.indexOf(r.unit) < UNITS.indexOf(startUnit) && r.unit.id !== "u_ph" && r.unit.level !== startUnit.level).map((r) => r.unit.level))];
  return lv.length ? `Темы уровня <b>${lv.join("–")}</b> вы знаете уверенно. ` : "";
}

export function renderPlacement(app) {
  const units = UNITS.filter((u) => unitQuestions(u).length >= PER_UNIT || u.id === "u_ph");
  app.innerHTML = `<span class="pill">≈ 5–15 минут</span><h1>Тест: <span class="hl-blue">с чего начать</span></h1>
    <div class="card"><p>Вопросы идут от самых простых тем к сложным. Отвечайте честно: если не знаете — жмите <b>«Не знаю»</b>, угадывание только навредит. Тест сам остановится, когда темы станут незнакомыми, и подскажет, с какого урока начать.</p>
    <div data-box></div></div>`;
  const box = app.querySelector("[data-box]");
  const results = []; // { unit, ok }
  let u = 0, misses = 0, qs = [], q = 0, right = 0, asked = 0;

  const nextUnit = () => {
    if (u >= units.length || misses >= STOP_AFTER) return finish();
    qs = unitQuestions(units[u]);
    q = 0; right = 0;
    if (!qs.length) { results.push({ unit: units[u], ok: true }); u++; return nextUnit(); }
    ask();
  };
  const ask = () => {
    if (q >= qs.length) {
      const ok = right >= Math.min(PASS, qs.length);
      results.push({ unit: units[u], ok });
      misses = ok ? 0 : misses + 1;
      u++;
      return nextUnit();
    }
    const [text, opts, a] = qs[q];
    const order = shuffle(opts.map((_, k) => k));
    const lvl = units[u].level;
    box.innerHTML = `<div class="muted small">Вопрос ${asked + 1} · уровень ${lvl} · тема «${esc(units[u].title)}»</div>
      <div class="bar" style="margin:8px 0"><i style="width:${Math.round((u / units.length) * 100)}%"></i></div>
      <div class="ex-q">${inlineQ(text)}</div>
      <div class="opts">${order.map((k) => `<button class="opt" data-k="${k}">${esc(opts[k])}</button>`).join("")}<button class="opt" data-k="-1">Не знаю</button></div>`;
    $$(".opt", box).forEach((b) => (b.onclick = () => { if (+b.dataset.k === a) right++; q++; asked++; ask(); }));
  };
  const finish = () => {
    // «Звуки и чтение» не блокирует старт, если грамматика A1 дальше знакома: фонетику подтянем по ходу
    const failed = results.filter((r) => !r.ok);
    const phFail = failed[0]?.unit.id === "u_ph" && results[1]?.ok;
    const start = (phFail ? failed[1] : failed[0])?.unit || null;
    const known = results.filter((r) => r.ok).length;
    const gaps = start ? results.filter((r) => r.ok && UNITS.indexOf(r.unit) > UNITS.indexOf(start)) : [];
    const startUnit = start || UNITS[UNITS.length - 1];
    const first = startUnit.lessons[0];
    const res = start ? `старт: ${startUnit.level}, «${startUnit.title}» (знакомых тем: ${known})` : `все темы знакомы (${known})`;
    update((s) => s.tests.push({ date: today(), kind: "Стартовый тест", result: res }));
    logTime("course", Math.max(5, Math.round(asked / 2)), "Стартовый тест");
    const zero = startUnit.id === "u_ph";
    box.innerHTML = `<div class="banner ok">${zero ? "Начнём с самого начала — со звуков и чтения. Так надёжнее всего." : start ? `${knownLevels(results, startUnit)}Начинаем с темы <b>«${esc(startUnit.title)}»</b>, урок <b>«${esc(pz(first.title))}»</b>.` : "Вы ответили на все темы! Начнём с последнего блока B2 — закрепим и подготовимся к финалу."}</div>
      ${gaps.length ? `<p class="muted small">Дальше вы угадали и несколько более сложных тем (${gaps.map((g) => esc(g.unit.title)).join(", ")}), но пропускать пробелы нельзя: дойдёте до них быстро.</p>` : ""}
      <p class="muted small">Все уроки до стартового отмечаются как пропущенные — вернуться к любому можно на «Карте курса».</p>
      <div class="row"><button class="btn primary" data-go>Начать с этого урока →</button><button class="btn" data-zero>Начать с нуля</button></div>`;
    box.querySelector("[data-go]").onclick = () => { applyStart(startUnit.id); toast("План настроен под ваш уровень"); location.hash = "#/today"; };
    box.querySelector("[data-zero]").onclick = () => { applyStart(UNITS[0].id); location.hash = "#/today"; };
  };
  nextUnit();
}
