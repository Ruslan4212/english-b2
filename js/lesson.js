// Плеер урока: шаги по одному, прогресс-бар, мини-повтор в начале, итог в конце.
import { S, update, addError, addCard, logTime } from "./store.js?v=20261020a";
import { LESSONS, lessonById } from "../data/index.js";
import { renderStep, bindSay } from "./exercises.js?v=20261020a";
import { esc, today, shuffle, md, pz } from "./util.js?v=20261020a";
import { openHelper } from "./helper.js?v=20261020a";
import { markToday, currentPhase, currentDay } from "./progress.js?v=20261020a";
import { dayInfo, tasksForDay } from "./plan.js?v=20261020a";
import { generate } from "./ai.js?v=20261020a";
import { stopSpeak } from "./speech.js?v=20261020a";

const DRILLS = ["choice", "fill", "order", "translate"];

export const nextLesson = () => LESSONS.find((l) => !S().lessons[l.id]?.done) || null;

/**
 * Урок для сегодняшнего слота плана. План задаёт темп «юнит за 1–1,5 недели»,
 * поэтому новые уроки фазы распределяются равномерно по её слотам Пн/Ср/Пт,
 * а свободные слоты становятся днями повторения. Отстающий ученик всегда
 * получает следующий урок — догонять важнее, чем повторять.
 */
export function lessonForToday() {
  const nl = nextLesson();
  const day = currentDay();
  const { week } = dayInfo(day);
  const ph = currentPhase();
  if (!nl) return "review";
  if (week === 1 || nl.phase < ph.n) return nl.id;
  if (nl.phase > ph.n) return "review";
  const slots = [];
  for (let i = (ph.from - 1) * 7; i < ph.to * 7; i++) if (dayInfo(i).week > 1 && tasksForDay(i).some((t) => t.id === "lesson")) slots.push(i);
  const k = Math.max(0, slots.filter((i) => i <= day).length - 1);
  const inPhase = LESSONS.filter((l) => l.phase === ph.n && l.unit.id !== "u_ph");
  const done = inPhase.filter((l) => S().lessons[l.id]?.done).length;
  const allowed = Math.ceil(((k + 1) * inPhase.length) / Math.max(1, slots.length));
  return done < allowed ? nl.id : "review";
}

/** Мини-повтор: 4 задания из прошлых уроков (интервальное повторение). */
function warmup(lesson) {
  const idx = LESSONS.findIndex((l) => l.id === lesson.id);
  const prev = LESSONS.slice(Math.max(0, idx - 4), idx).filter((l) => S().lessons[l.id]?.done);
  const pool = [];
  for (const l of prev) for (const s of l.steps) if (DRILLS.includes(s.t) && !s.listen) for (const it of s.items) pool.push({ t: s.t, it: pz(it) });
  if (pool.length < 3) return null;
  const pick = shuffle(pool).slice(0, 4);
  // группируем по типу, чтобы каждый шаг был однородным
  const t = pick[0].t;
  const items = pick.filter((p) => p.t === t).map((p) => p.it);
  return { t, h: "🔁 Разминка: повторим прошлый урок", intro: "Пара заданий из прошлых уроков — так знания переходят в долгую память.", items };
}

/** Урок-повторение из пройденного материала фазы — для свободных слотов плана. */
export function reviewLesson() {
  const phase = currentPhase().n;
  const done = LESSONS.filter((l) => S().lessons[l.id]?.done && l.phase <= phase);
  const recent = done.slice(-12);
  const byType = {};
  for (const l of recent) for (const s of l.steps) if (DRILLS.includes(s.t) && !s.listen) (byType[s.t] ||= []).push(...s.items);
  const steps = [
    { t: "text", h: "Урок-повторение", md: "Сегодня новых правил нет: закрепляем пройденное. Задания взяты из последних уроков вперемешку. Если что-то забылось — нажмите «🤖 Непонятно» или вернитесь к уроку в разделе «Уроки».\n\n>i По плану темы идут в своём темпе (1 юнит за 1–1,5 недели), поэтому между новыми темами есть такие дни закрепления." },
  ];
  for (const t of DRILLS) if (byType[t]?.length) steps.push({ t, h: { choice: "Выберите вариант", fill: "Вставьте пропуск", order: "Порядок слов", translate: "Переведите" }[t], items: shuffle(byType[t]).slice(0, 6) });
  return { id: "review", title: "Повторение пройденного", goal: "Закрепить последние темы без новых правил.", steps, review: true, level: currentPhase().level };
}

export function renderLesson(app, id) {
  const base0 = id === "review" ? reviewLesson() : lessonById(id);
  const base = base0 && pz(base0); // имя ученика в заголовке, целях, шагах и карточках Anki
  if (!base) {
    app.innerHTML = `<div class="card">Урок не найден. <a href="#/grammar">К списку уроков</a></div>`;
    return;
  }
  const level = base.level || "A1";
  // незаконченный урок продолжаем с того же шага (разминку при этом не добавляем — индексы шагов не съезжают)
  const posKey = "english_b2_pos_" + base.id;
  let saved = null;
  if (!base.review) {
    try { saved = JSON.parse(localStorage.getItem(posKey) || "null"); } catch { saved = null; }
    if (saved && (saved.n !== base.steps.length + (saved.w ? 1 : 0) || saved.k <= 0)) saved = null;
  }
  const w = base.review || saved ? null : warmup(base);
  const hasWarm = saved ? false : !!w;
  const steps = [...(w ? [w] : []), ...base.steps];
  // шаг сохранён с учётом разминки; без неё сдвигаем на 1
  let k = saved ? Math.min(steps.length - 1, saved.k - (saved.w ? 1 : 0)) : 0;
  let stats = saved?.stats || { total: 0, firstTry: 0 };
  const started = Date.now() - (saved?.ms || 0);
  const savePos = () => {
    if (base.review) return;
    try {
      localStorage.setItem(posKey, JSON.stringify({ k, n: steps.length, w: hasWarm, stats, ms: Date.now() - started, passed: [...passed] }));
    } catch { /* нет хранилища */ }
  };

  app.innerHTML = `<div class="card">
    <div class="player-head"><a href="#/grammar" class="btn sm ghost">✕</a><div class="bar"><i data-bar style="width:0"></i></div><span class="small muted" data-pos></span></div>
    <h1 style="margin-bottom:0">${esc(base.title)}</h1>
    ${saved ? `<div class="banner info small" data-resume>Продолжаем с шага ${k + 1} из ${steps.length}. <button class="btn sm ghost" data-restart>Начать урок заново</button></div>` : ""}
    ${base.goal ? `<p class="muted" style="margin-top:4px">🎯 ${esc(base.goal)}</p>` : ""}
    <div class="step" data-step></div>
    <div class="player-nav"><button class="btn" data-prev>← Назад</button><span class="spacer"></span><button class="btn primary" data-next disabled>Дальше →</button></div>
  </div>`;
  const stepBox = app.querySelector("[data-step]");
  bindSay(stepBox);
  const nextBtn = app.querySelector("[data-next]");
  const prevBtn = app.querySelector("[data-prev]");
  const passed = new Set();
  if (saved) for (let i = 0; i < k; i++) passed.add(i);
  app.querySelector("[data-restart]")?.addEventListener("click", () => {
    try { localStorage.removeItem(posKey); } catch { /* нет хранилища */ }
    renderLesson(app, id);
  });

  const ctx = {
    level,
    done: (s) => {
      if (!passed.has(k)) {
        passed.add(k);
        stats.total += s.total;
        stats.firstTry += s.firstTry;
        savePos();
      }
      nextBtn.disabled = false;
    },
    mistake: (wrong, right, why) => addError(`Урок «${base.title}»`, wrong, right, why),
    explain: (topic, context, attempt) => openHelper({ mode: "explain", lesson: base.title, topic, context, attempt, level }),
    listened: () => {},
  };

  const show = () => {
    stopSpeak();
    nextBtn.disabled = !passed.has(k);
    prevBtn.disabled = k === 0;
    app.querySelector("[data-bar]").style.width = `${(k / steps.length) * 100}%`;
    app.querySelector("[data-pos]").textContent = `${k + 1} / ${steps.length}`;
    nextBtn.textContent = k === steps.length - 1 ? "Завершить урок ✓" : "Дальше →";
    window.__ctx = { lesson: base.title, step: steps[k].h || "", level };
    renderStep(steps[k], stepBox, ctx);
    if (passed.has(k)) nextBtn.disabled = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    savePos();
  };
  prevBtn.onclick = () => { if (k > 0) { k--; show(); } };
  nextBtn.onclick = () => {
    if (k < steps.length - 1) { k++; show(); return; }
    finish();
  };

  const finish = () => {
    try { localStorage.removeItem(posKey); } catch { /* нет хранилища */ }
    const min = Math.max(5, Math.min(60, Math.round((Date.now() - started) / 60000)));
    const pct = stats.total ? Math.round((stats.firstTry / stats.total) * 100) : 100;
    let added = 0;
    if (!base.review) {
      // фразы урока → колода «Основа» (план: слова только во фразах)
      const phrases = [];
      for (const s of base0.steps) { // сырые данные: карточки хранят метку {N}, имя подставляется при показе
        if (s.t === "examples") for (const [en, ru] of s.items) if (/\s/.test(en) && !/ — /.test(en) && en.length < 90) phrases.push([en, ru]);
        if (s.t === "dialog") for (const [, en, ru] of s.lines) if (en.split(" ").length >= 3 && en.length < 80) phrases.push([en, ru]);
      }
      for (const [en, ru] of (base0.cards || phrases).slice(0, 14)) if (addCard(en, ru, "base", base.id)) added++;
      update((s) => (s.lessons[base.id] = { done: true, score: pct, date: today() }));
    }
    logTime("course", min, base.title);
    markToday("lesson");
    const nl = nextLesson();
    app.innerHTML = `<div class="card" style="text-align:center">
      <h1>🎉 Урок пройден!</h1>
      <p style="font-size:1.1rem">${esc(base.title)}</p>
      <div class="grid" style="max-width:520px;margin:16px auto">
        <div class="card stat"><b>${pct}%</b><span class="muted small">с первого раза</span></div>
        <div class="card stat"><b>${min}</b><span class="muted small">минут в журнал</span></div>
        <div class="card stat"><b>+${added}</b><span class="muted small">фраз в Anki</span></div>
      </div>
      ${pct < 70 && stats.total ? `<div class="banner">Результат ниже 70% — это нормально для новой темы. Завтра в разминке задания вернутся, а ошибки уже в «Мои ошибки». Можно пройти урок ещё раз или попросить наставника объяснить тему иначе.</div>` : ""}
      <div class="row" style="justify-content:center;margin-top:10px">
        <a class="btn primary" href="#/today">К плану на сегодня</a>
        <button class="btn" data-more>🤖 Ещё 8 упражнений ${base.review ? "на повторение" : "по теме"}</button>
        ${nl ? `<a class="btn ghost" href="#/lesson/${nl.id}">Следующий урок →</a>` : ""}
      </div><div data-extra style="text-align:left"></div></div>`;
    const more = app.querySelector("[data-more]");
    const topic = base.review ? "повторение тем: " + LESSONS.filter((l) => S().lessons[l.id]?.done).slice(-6).map((l) => l.title).join("; ") : base.title;
    if (more) more.onclick = () => extraPractice(app.querySelector("[data-extra]"), topic, level, more);
  };
  show();
}

/** Дополнительные упражнения от ИИ по теме урока или по ошибкам. */
export async function extraPractice(box, topic, level, btn, errorsText) {
  if (btn) { btn.disabled = true; btn.textContent = "🤖 Составляю упражнения…"; }
  const items = await generate("exercises", { topic, level, count: 8, errors: errorsText });
  if (btn) { btn.disabled = false; btn.textContent = "🤖 Ещё упражнения"; }
  if (!items) {
    box.innerHTML = `<div class="banner">ИИ-наставник недоступен. Подключите его в ⚙️ Настройках (бесплатный ключ Groq — 2 минуты).</div>`;
    return;
  }
  const steps = [];
  const group = (type, map) => {
    const it = items.filter((x) => x.type === type).map(map).filter(Boolean);
    if (it.length) steps.push({ t: type, h: { fill: "Вставьте пропуск", choice: "Выберите вариант", translate: "Переведите" }[type], items: it });
  };
  group("fill", (x) => (x.q && x.a && /_{2,}/.test(x.q) ? [x.q, String(x.a), x.why || ""] : null));
  group("choice", (x) => (x.q && Array.isArray(x.opts) && Number.isInteger(+x.a) ? [x.q, x.opts, +x.a, x.why || ""] : null));
  group("translate", (x) => (x.q && x.a ? [x.q, String(x.a), x.why || ""] : null));
  box.innerHTML = `<div class="card"><h2>🤖 Дополнительная практика</h2><div data-s></div></div>`;
  const s = box.querySelector("[data-s]");
  bindSay(s);
  let i = 0;
  const run = () => {
    if (i >= steps.length) { s.insertAdjacentHTML("beforeend", md("✅ Дополнительная практика пройдена.")); return; }
    const div = document.createElement("div");
    s.append(div);
    renderStep(steps[i], div, {
      level,
      done: () => { i++; run(); },
      mistake: (w, r, y) => addError(errorsText ? "Тренировка ошибок" : `Практика: ${topic}`, w, r, y),
      explain: (t, c, a) => openHelper({ mode: "explain", lesson: topic, topic: t, context: c, attempt: a, level }),
    });
  };
  run();
}
