// Экраны практики: слова, слушание, чтение, говорение, письмо, рабочий английский,
// ошибки, ресурсы, контрольные точки, обзор недели, старт, тест уровня, запись голоса.
import { S, update, addCard, addError, logTime } from "./store.js";
import { $$, esc, md, today, toast, shuffle, uid, fmtDate } from "./util.js";
import { queue, grade, preview, stats as srsStats } from "./srs.js";
import { speak, hasASR, listen as asr, startRecording, saveRecording, listRecordings, deleteRecording } from "./speech.js";
import { chatTurn, correctText, generate, story, NO_AI } from "./ai.js";
import { markToday, currentPhase, currentLevel, currentDay } from "./progress.js";
import { dialog, renderStep, bindSay } from "./exercises.js";
import { openHelper } from "./helper.js";
import { extraPractice } from "./lesson.js";
import { LESSONS } from "../data/index.js";
import { dayInfo, PHASES } from "./plan.js";
import VOCAB from "../data/vocab.js";
import LIBRARY from "../data/listening.js";
import READING from "../data/reading.js";
import SPEAKING from "../data/speaking.js";
import WRITING from "../data/writing.js";
import WORK from "../data/work.js";
import CHECKPOINTS from "../data/checkpoints.js";
import RESOURCES from "../data/resources.js";

const lvlOrder = ["A1", "A2", "B1", "B2"];
const upTo = (lvl) => lvlOrder.slice(0, lvlOrder.indexOf(lvl) + 1);
const curWeek = () => dayInfo(currentDay()).week;

/* =============================== СЛОВА =============================== */
export function renderWords(app) {
  const ph = currentPhase();
  const q = queue(ph.n);
  const st = srsStats();
  const s = S();
  const mineToday = Object.values(s.cards).filter((c) => c.deck === "mine" && c.added === today()).length;
  app.innerHTML = `<h1>🃏 Слова: карточки как в Anki</h1>
    ${md("Правило плана: **слова только во фразах**. Каждая карточка — целое предложение. Фразы с уроков попадают в колоду **«Основа»** сами, а то, что вы встретили в сериалах, книгах и подкастах, добавляйте в **«Мои фразы»**.")}
    <div class="grid">
      <div class="card stat"><b>${q.due.length}</b><span class="muted small">к повторению</span></div>
      <div class="card stat"><b>${q.fresh.length}</b><span class="muted small">новых сегодня (лимит ${ph.n === 1 ? 10 : ph.n === 2 ? 12 : 15})</span></div>
      <div class="card stat"><b>${st.total}</b><span class="muted small">фраз всего · ${st.mature} выучено прочно</span></div>
      <div class="card stat"><b>${st.accuracy ?? "—"}${st.accuracy != null ? "%" : ""}</b><span class="muted small">верных за неделю (цель ≥ 85%)</span></div>
    </div>
    <div class="row"><button class="btn primary" data-start ${q.due.length + q.fresh.length ? "" : "disabled"}>▶ Начать повторение</button><span class="muted small">${q.due.length + q.fresh.length ? "" : "На сегодня всё повторено 🎉"}</span></div>
    <div data-review></div>
    <div class="card"><h2>➕ Мои фразы</h2><p class="muted small">Сегодня добавлено: ${mineToday}. План: в субботу 15 минут выписывать полезные фразы из того, что слушали и читали.</p>
      <div class="grid"><label>Фраза по-английски<input type="text" data-en placeholder="I'm looking forward to it."></label><label>Перевод<input type="text" data-ru placeholder="Жду с нетерпением."></label></div>
      <div class="row" style="margin-top:8px"><button class="btn primary" data-add>Добавить</button></div></div>
    <div class="card"><h2>📚 Тематические наборы фраз</h2><p class="muted small">Добавьте набор — фразы будут вводиться постепенно, по дневному лимиту.</p>
      <div class="grid">${VOCAB.filter((v) => upTo(ph.level).includes(v.level)).map((v) => {
        const added = v.items.filter(([en]) => s.cards["c_" + en.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 60)]).length;
        return `<div class="card" style="margin:0"><b>${esc(v.title)}</b> <span class="pill ${v.level.toLowerCase()}">${v.level}</span><div class="muted small">${v.items.length} фраз · добавлено ${added}</div>
          <div class="row" style="margin-top:6px"><button class="btn sm" data-set="${v.id}" ${added === v.items.length ? "disabled" : ""}>${added === v.items.length ? "✓ В колоде" : "Добавить набор"}</button><button class="btn sm ghost" data-peek="${v.id}">Посмотреть</button></div></div>`;
      }).join("")}</div>
      <div data-peekbox></div></div>
    <div class="card"><h2>🤖 Сгенерировать фразы по своей теме</h2><p class="muted small">Например: «моя работа — бухгалтер», «путешествие в Турцию», «футбол». План A2: добавьте 100–150 слов вашей рабочей области.</p>
      <div class="row"><input type="text" data-topic placeholder="Тема" style="flex:1;min-width:180px"><button class="btn" data-gen>Сгенерировать 10 фраз</button></div><div data-genbox></div></div>
    <div class="card"><h2>Все карточки</h2><details><summary>Показать список (${st.total})</summary><div class="tbl-wrap"><table><tr><th>Фраза</th><th>Перевод</th><th>Колода</th><th>Следующий показ</th><th></th></tr>
      ${Object.entries(s.cards).slice(-300).reverse().map(([id, c]) => `<tr><td>${esc(c.en)}</td><td>${esc(c.ru)}</td><td>${c.deck === "mine" ? "Мои" : "Основа"}</td><td>${c.due || "новая"}</td><td><button class="icon-btn" data-delc="${id}">🗑</button></td></tr>`).join("")}
    </table></div></details></div>`;

  app.querySelector("[data-start]").onclick = () => review(app.querySelector("[data-review]"), ph);
  app.querySelector("[data-add]").onclick = () => {
    const en = app.querySelector("[data-en]").value.trim();
    const ru = app.querySelector("[data-ru]").value.trim();
    if (!en || !ru) return toast("Заполните фразу и перевод");
    if (!/\s/.test(en)) toast("Совет: добавляйте целую фразу, а не одно слово — так запоминается лучше.");
    if (addCard(en, ru, "mine", "own")) {
      if (Object.values(S().cards).filter((c) => c.deck === "mine" && c.added === today()).length >= 3) markToday("phrases");
      renderWords(app);
    } else toast("Такая фраза уже есть");
  };
  $$("[data-set]", app).forEach((b) => (b.onclick = () => {
    const v = VOCAB.find((x) => x.id === b.dataset.set);
    let n = 0;
    for (const [en, ru] of v.items) if (addCard(en, ru, "base", v.id)) n++;
    toast(`Добавлено ${n} фраз`);
    renderWords(app);
  }));
  $$("[data-peek]", app).forEach((b) => (b.onclick = () => {
    const v = VOCAB.find((x) => x.id === b.dataset.peek);
    app.querySelector("[data-peekbox]").innerHTML = `<h3>${esc(v.title)}</h3>` + v.items.map(([en, ru]) => `<div class="ex-line"><button class="say" data-say="${esc(en)}">🔊</button><div><div class="en">${esc(en)}</div><div class="ru">${esc(ru)}</div></div></div>`).join("");
  }));
  $$("[data-delc]", app).forEach((b) => (b.onclick = () => { update((s) => delete s.cards[b.dataset.delc]); renderWords(app); }));
  app.querySelector("[data-gen]").onclick = async () => {
    const topic = app.querySelector("[data-topic]").value.trim();
    if (!topic) return toast("Напишите тему");
    const box = app.querySelector("[data-genbox]");
    box.innerHTML = `<p class="typing">🤖 Составляю фразы</p>`;
    const items = await generate("cards", { topic, level: ph.level, count: 10 });
    if (!items) return (box.innerHTML = `<div class="banner">${NO_AI}</div>`);
    box.innerHTML = items.map((it, k) => `<label class="ex-line"><input type="checkbox" checked data-k="${k}"><button class="say" data-say="${esc(it.en)}">🔊</button><div><div class="en">${esc(it.en)}</div><div class="ru">${esc(it.ru)}</div></div></label>`).join("") + `<button class="btn primary" data-addgen>Добавить отмеченные в «Мои фразы»</button>`;
    box.querySelector("[data-addgen]").onclick = () => {
      let n = 0;
      $$("[data-k]", box).forEach((c) => c.checked && addCard(items[+c.dataset.k].en, items[+c.dataset.k].ru, "mine", "ai:" + topic) && n++);
      if (n >= 3) markToday("phrases");
      toast(`Добавлено ${n}`);
      renderWords(app);
    };
  };
}

function review(box, ph) {
  const started = Date.now();
  let shown = 0;
  const next = () => {
    const q = queue(ph.n);
    const list = [...q.due, ...q.fresh];
    if (!list.length) {
      box.innerHTML = `<div class="card"><div class="feedback ok">🎉 Повторение на сегодня закончено! Карточек: ${shown}.</div></div>`;
      logTime("words", Math.max(1, Math.round((Date.now() - started) / 60000)), `Anki: ${shown} карточек`);
      markToday("srs");
      return;
    }
    const [id, c] = list[0];
    // направление: новые и молодые — с английского; зрелые чередуем с русского (активный словарь)
    const reverse = c.reps >= 2 && Math.random() < 0.5;
    box.innerHTML = `<div class="card flash">
      <div class="muted small">${c.due ? "повторение" : "🆕 новая фраза"} · осталось ${list.length}</div>
      <div class="front">${esc(reverse ? c.ru : c.en)} ${reverse ? "" : `<button class="say" data-say="${esc(c.en)}">🔊</button>`}</div>
      <div class="muted small">${reverse ? "Скажите вслух по-английски, потом проверьте" : "Вспомните перевод и произнесите фразу вслух"}</div>
      <div data-back class="hide"><div class="back">${esc(reverse ? c.en : c.ru)} ${reverse ? `<button class="say" data-say="${esc(c.en)}">🔊</button>` : ""}</div></div>
      <div><button class="btn primary" data-show>Показать ответ (пробел)</button></div>
      <div class="grade-btns hide" data-grades>
        ${[["Снова", 0], ["Трудно", 1], ["Хорошо", 2], ["Легко", 3]].map(([n, g]) => `<button class="btn ${g === 2 ? "primary" : ""}" data-g="${g}">${n}<small>${g === 0 ? "сегодня" : preview(c, g) + " дн."}</small></button>`).join("")}
      </div>
      <div><button class="btn sm ghost" data-why>🤖 Объясни эту фразу</button></div></div>`;
    if (!reverse) speak(c.en);
    const show = () => {
      box.querySelector("[data-back]").classList.remove("hide");
      box.querySelector("[data-grades]").classList.remove("hide");
      box.querySelector("[data-show]").remove();
      if (reverse) speak(c.en);
    };
    box.querySelector("[data-show]").onclick = show;
    document.onkeydown = (e) => {
      if (!box.isConnected) return (document.onkeydown = null);
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.code === "Space" && box.querySelector("[data-show]")) { e.preventDefault(); show(); }
      else if (["Digit1", "Digit2", "Digit3", "Digit4"].includes(e.code) && !box.querySelector("[data-show]")) box.querySelector(`[data-g="${+e.code.slice(-1) - 1}"]`)?.click();
    };
    $$("[data-g]", box).forEach((b) => (b.onclick = () => { grade(id, +b.dataset.g); shown++; next(); }));
    box.querySelector("[data-why]").onclick = () => openHelper({ mode: "explain", topic: `Фраза «${c.en}» (${c.ru}): разбери грамматику и слова, как её использовать`, level: currentLevel() });
  };
  next();
}

/* ============================== СЛУШАНИЕ ============================== */
function allDialogs() {
  const s = S();
  const fromLessons = [];
  for (const l of LESSONS) {
    if (!s.lessons[l.id]?.done || s.lessons[l.id]?.skipped) continue;
    l.steps.forEach((st, k) => st.t === "dialog" && fromLessons.push({ id: `${l.id}_${k}`, level: l.level, title: `${st.h.replace(/^Диалог:\s*/i, "")}`, src: l.title, ...st }));
  }
  const lib = LIBRARY.filter((d) => upTo(currentPhase().level).includes(d.level));
  return { fromLessons, lib };
}

export function renderListen(app, arg) {
  const { fromLessons, lib } = allDialogs();
  const s = S();
  const all = [...fromLessons, ...lib];
  if (arg === "next" || arg === "aloud") {
    // самый свежий диалог, который ещё не прослушан 3 раза; иначе — из библиотеки по уровню
    const pick = arg === "aloud" ? [...fromLessons].reverse()[0] || lib[0]
      : [...fromLessons].reverse().find((d) => (s.listened[d.id]?.plays || 0) < 3) || lib.find((d) => (s.listened[d.id]?.plays || 0) < 3) || all[all.length - 1];
    if (pick) return listenOne(app, pick, arg === "aloud");
  }
  const one = all.find((d) => d.id === arg);
  if (one) return listenOne(app, one);
  const ph = PHASES.find((p) => p.level === currentPhase().level);
  app.innerHTML = `<h1>🎧 Слушание</h1>
    ${md(`**Как слушать по плану:** каждый диалог — **3 раза**: 1) просто слушать, 2) следить по тексту, 3) повторять за диктором (**shadowing**). Слушайте то, что понимаете на **90–95%**: меньше — слишком сложно, полностью — слишком легко.

**Внешние материалы фазы ${ph.level}:** ${ph.listen}`)}
    <div class="row"><a class="btn primary" href="#/listen/next">▶ Следующий диалог по плану</a><a class="btn" href="#/resources">🔗 Подкасты и каналы</a></div>
    <h2>Диалоги из пройденных уроков</h2>
    ${fromLessons.length ? fromLessons.map((d) => row(d)).join("") : `<p class="muted">Появятся после первых уроков.</p>`}
    <h2>Библиотека аудио-диалогов</h2>
    ${lib.map((d) => row(d)).join("")}`;
  function row(d) {
    const p = s.listened[d.id]?.plays || 0;
    return `<div class="ex-line"><span>${p >= 3 ? "✅" : "🎧"}</span><div style="flex:1"><a href="#/listen/${d.id}">${esc(d.title)}</a> <span class="pill ${d.level.toLowerCase()}">${d.level}</span>${d.src ? ` <span class="muted small">из урока «${esc(d.src)}»</span>` : ""}</div><span class="small muted">${p}/3</span></div>`;
  }
}

function listenOne(app, d, aloud) {
  const started = Date.now();
  app.innerHTML = `<a class="btn sm ghost" href="#/listen">← Все диалоги</a><div class="card" data-box></div>
    <div class="card small muted">${aloud ? "Задача: повторить диалог вслух. Нажмите «Shadowing» — после каждой фразы будет пауза, повторите фразу за диктором, копируя мелодию." : "Порядок: ▶ слушать без текста (поставьте «скрыть текст») → ▶ с текстом → 🗣 Shadowing. После третьего прослушивания задача дня закроется."}</div>`;
  const box = app.querySelector("[data-box]");
  bindSay(box);
  window.__ctx = { lesson: "Слушание", step: d.title, level: d.level };
  dialog({ ...d, h: d.title, intro: d.intro }, box, {
    level: d.level,
    done: () => {},
    mistake: (w, r, y) => addError(`Слушание «${d.title}»`, w, r, y),
    explain: (topic, context, attempt) => openHelper({ mode: "explain", lesson: d.title, topic, context, attempt, level: d.level }),
    listened: (plays, shadowed) => {
      update((s) => {
        const L = (s.listened[d.id] ||= { plays: 0 });
        L.plays = Math.max(L.plays + (shadowed ? 0 : 1), plays);
        if (shadowed) L.shadowed = true;
        L.date = today();
      });
      const L = S().listened[d.id];
      if ((aloud && L.shadowed) || (L.plays >= 3 && L.shadowed) || L.plays >= 3) {
        if (markToday("listen", aloud ? "aloud" : "listen")) logTime("listen", Math.max(5, Math.round((Date.now() - started) / 60000)), d.title);
      }
    },
  });
}

/* =============================== ЧТЕНИЕ =============================== */
export function renderRead(app, id) {
  const lvl = currentPhase().level;
  const texts = READING.filter((t) => upTo(lvl).includes(t.level));
  const s = S();
  const t = texts.find((x) => x.id === id) || (id === "ai" ? window.__aiStory : null);
  if (t) return readOne(app, t);
  const ph = PHASES.find((p) => p.level === lvl);
  app.innerHTML = `<h1>📖 Чтение</h1>
    ${md(`**План фазы ${lvl}:** ${ph.read}

Здесь — короткие тексты уровня с озвучкой, глоссарием и вопросами. Книги (Graded Readers) читайте отдельно и отмечайте время в «Прогрессе».

>i Как читать: 1) прочитайте целиком, не останавливаясь на незнакомых словах; 2) ответьте на вопросы; 3) прослушайте текст; 4) выпишите 3–5 полезных фраз в «Мои фразы».`)}
    ${texts.map((x) => `<div class="ex-line"><span>${s.read[x.id] ? "✅" : "📄"}</span><div style="flex:1"><a href="#/read/${x.id}">${esc(x.title)}</a> <span class="pill ${x.level.toLowerCase()}">${x.level}</span></div></div>`).join("")}
    <div class="card"><h2>🤖 Текст на интересную вам тему</h2><p class="muted small">План: тема, которая вам интересна, даёт больше часов, чем «правильная», но скучная.</p>
      <div class="row"><input type="text" data-topic placeholder="например: космос, футбол, история Рима" style="flex:1;min-width:180px"><button class="btn" data-gen>Написать текст уровня ${lvl}</button></div><div data-genbox></div></div>`;
  app.querySelector("[data-gen]").onclick = async () => {
    const topic = app.querySelector("[data-topic]").value.trim() || "интересный факт о мире";
    const b = app.querySelector("[data-genbox]");
    b.innerHTML = `<p class="typing">🤖 Пишу текст</p>`;
    const r = await story(topic, lvl);
    if (!r) return (b.innerHTML = `<div class="banner">${NO_AI}</div>`);
    window.__aiStory = {
      id: "ai", level: lvl, title: r.title || topic, text: r.text,
      glossary: (r.glossary || []).map((g) => [g.en, g.ru]),
      qs: (r.questions || []).filter((q) => Array.isArray(q.opts)).map((q) => [q.q, q.opts, +q.a, ""]),
    };
    location.hash = "#/read/ai";
  };
}

function readOne(app, t) {
  const started = Date.now();
  app.innerHTML = `<a class="btn sm ghost" href="#/read">← Все тексты</a>
    <div class="card"><h1>${esc(t.title)}</h1><div class="row"><button class="btn sm" data-play>▶ Прослушать текст</button><button class="btn sm ghost" data-stop>■ Стоп</button><span class="pill ${t.level.toLowerCase()}">${t.level}</span></div>
      <div style="font-size:1.08rem;margin-top:10px">${t.text.split(/\n\n+/).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <p class="muted small">Выделите непонятное слово или фразу мышкой и нажмите «🤖 Объясни выделенное».</p><button class="btn sm" data-sel>🤖 Объясни выделенное</button></div>
    ${t.glossary?.length ? `<div class="card"><h3>Глоссарий</h3>${t.glossary.map(([en, ru]) => `<div class="ex-line"><button class="say" data-say="${esc(en)}">🔊</button><div><span class="en">${esc(en)}</span> — <span class="ru">${esc(ru)}</span></div><button class="btn sm ghost" data-card="${esc(en)}|${esc(ru)}">+ в Anki</button></div>`).join("")}</div>` : ""}
    <div class="card" data-qs></div>`;
  bindSay(app);
  app.querySelector("[data-play]").onclick = async () => { for (const p of t.text.split(/(?<=[.!?])\s+/)) { if (app.dataset.stop === "1") break; await speak(p); } app.dataset.stop = ""; };
  app.querySelector("[data-stop]").onclick = () => { app.dataset.stop = "1"; speechSynthesis.cancel(); };
  app.querySelector("[data-sel]").onclick = () => {
    const sel = String(getSelection()).trim();
    if (!sel) return toast("Сначала выделите слово или фразу в тексте");
    openHelper({ mode: "explain", lesson: t.title, topic: `Что значит «${sel}» в этом тексте и как это употреблять`, context: t.text.slice(0, 2000), level: t.level });
  };
  $$("[data-card]", app).forEach((b) => (b.onclick = () => { const [en, ru] = b.dataset.card.split("|"); addCard(en, ru, "mine", t.id) ? toast("Добавлено в «Мои фразы»") : toast("Уже есть"); }));
  const qs = app.querySelector("[data-qs]");
  bindSay(qs);
  renderStep({ t: "choice", h: "Вопросы на понимание", items: t.qs }, qs, {
    level: t.level,
    done: (st) => {
      update((s) => (s.read[t.id] = { date: today(), score: st.firstTry }));
      logTime("read", Math.max(5, Math.round((Date.now() - started) / 60000)), t.title);
    },
    mistake: () => {},
    explain: (topic, context, attempt) => openHelper({ mode: "explain", lesson: t.title, topic, context: t.text.slice(0, 1500), attempt, level: t.level }),
  });
}

/* ============================== ГОВОРЕНИЕ ============================== */
export function renderSpeak(app, arg) {
  const ph = currentPhase();
  const topics = SPEAKING.topics.filter((t) => upTo(ph.level).includes(t.level));
  const week = curWeek();
  const weekTopic = topics.filter((t) => t.level === ph.level)[week % Math.max(1, topics.filter((t) => t.level === ph.level).length)] || topics[0];
  if (arg === "week") return chat(app, weekTopic);
  if (arg?.startsWith("work_")) {
    const w = WORK.find((x) => x.id === arg.slice(5));
    if (w) return chat(app, { id: arg, level: ph.level, title: w.title, ru: w.ru, prompt: w.title, role: w.role, useful: w.phrases });
  }
  const t = topics.find((x) => x.id === arg);
  if (t) return chat(app, t);
  app.innerHTML = `<h1>🗣️ Говорение</h1>
    ${md(`**Говорить — с первого месяца.** Даже на A1 нужен живой собеседник: репетитор исправляет ошибки, которых не видит приложение. Ищите преподавателя, который **исправляет и объясняет причину**.

Когда репетитора нет, тренируйтесь с ИИ-партнёром: он говорит на вашем уровне, задаёт вопросы и после каждой вашей реплики показывает ошибки с объяснением. Можно говорить голосом (🎤) — в Chrome/Edge.

>i Страх говорить, пока не выучена грамматика, — частая проблема. План советует: говорите на упрощённом английском с первых недель, ошибки разбирайте после.

**Фаза ${ph.level}:** ${ph.speak}`)}
    <div class="row"><a class="btn primary" href="#/speak/week">▶ Тема этой недели: ${esc(weekTopic.title)}</a><a class="btn" href="#/record">🎙 Ежемесячная запись голоса</a><a class="btn" href="#/work">💼 Рабочие сценарии</a></div>
    <div class="card"><label class="row"><input type="checkbox" data-real> Сегодня был урок с <b>живым репетитором</b> — отметить задачу дня</label><textarea data-notes rows="3" placeholder="Ошибки, которые исправил репетитор (по одной на строку: неправильно -> правильно)" style="margin-top:8px"></textarea><button class="btn sm" data-savereal style="margin-top:6px">Сохранить</button></div>
    <h2>Все темы</h2><div class="grid">${topics.map((x) => `<a class="card" style="margin:0;text-decoration:none;color:inherit" href="#/speak/${x.id}"><b>${esc(x.title)}</b> <span class="pill ${x.level.toLowerCase()}">${x.level}</span><div class="muted small">${esc(x.ru)}</div></a>`).join("")}</div>`;
  app.querySelector("[data-savereal]").onclick = () => {
    const lines = app.querySelector("[data-notes]").value.split("\n").map((l) => l.trim()).filter(Boolean);
    for (const l of lines) {
      const [w, r] = l.split(/->|→|—/).map((x) => x?.trim());
      addError("Урок с репетитором", w || l, r || "", "");
    }
    if (app.querySelector("[data-real]").checked && (markToday("speak", "tutor") || markToday("speak"))) logTime("speak", 50, "Урок с репетитором");
    if (lines.length) markToday("errors");
    toast("Сохранено");
  };
}

function chat(app, topic) {
  const level = currentPhase().level;
  const msgs = [];
  let turns = 0;
  const started = Date.now();
  window.__ctx = { lesson: "Разговорная практика", step: topic.title, level };
  app.innerHTML = `<a class="btn sm ghost" href="#/speak">← Темы</a>
    <div class="card"><h1>🗣️ ${esc(topic.title)}</h1><p class="muted">${esc(topic.ru)}</p>
      ${topic.useful?.length ? `<details><summary>Полезные фразы для этой темы</summary>${topic.useful.map(([en, ru]) => `<div class="ex-line"><button class="say" data-say="${esc(en)}">🔊</button><div><span class="en">${esc(en)}</span> — <span class="ru">${esc(ru)}</span></div></div>`).join("")}</details>` : ""}
      <div class="chat" data-chat style="margin-top:10px"></div>
      <div class="row" style="margin-top:10px"><textarea data-in rows="2" style="flex:1" placeholder="Ответьте по-английски. Не знаете слово — напишите его по-русски, партнёр подскажет."></textarea>
        ${hasASR() ? `<button class="btn" data-mic title="Сказать голосом">🎤</button>` : ""}<button class="btn primary" data-send>➤</button></div>
      <div class="row small muted" style="margin-top:6px"><label><input type="checkbox" data-voice checked> озвучивать ответы</label><span data-turns></span><span class="spacer"></span><button class="btn sm" data-end>Завершить разговор</button></div></div>`;
  bindSay(app);
  const box = app.querySelector("[data-chat]");
  const input = app.querySelector("[data-in]");
  const add = (cls, html) => { const d = document.createElement("div"); d.className = "msg " + cls; d.innerHTML = html; box.append(d); box.scrollTop = box.scrollHeight; return d; };
  const turn = async (text) => {
    if (text) { msgs.push({ role: "user", content: text }); add("me", esc(text)); turns++; }
    const w = add("ai typing", "…");
    const r = await chatTurn(topic.prompt, level, msgs, topic.role);
    w.remove();
    if (!r) return add("sys", esc(NO_AI));
    msgs.push({ role: "assistant", content: r.reply });
    if (r.corrections?.length || r.better) {
      add("fix", "✏️ <b>Исправления:</b><br>" + (r.corrections || []).map((c) => `<s>${esc(c.wrong)}</s> → <b>${esc(c.right)}</b> — ${esc(c.why)}`).join("<br>") + (r.better ? `<br>💡 Естественнее: <i>${esc(r.better)}</i>` : ""));
      for (const c of r.corrections || []) addError(`Разговор: ${topic.title}`, c.wrong, c.right, c.why);
    }
    add("ai", `${esc(r.reply)} <button class="say" data-say="${esc(r.reply)}">🔊</button>`);
    if (app.querySelector("[data-voice]").checked) speak(r.reply);
    app.querySelector("[data-turns]").textContent = `реплик: ${turns} (для зачёта занятия — от 8)`;
  };
  const send = () => { const v = input.value.trim(); if (!v) return; input.value = ""; turn(v); };
  app.querySelector("[data-send]").onclick = send;
  input.onkeydown = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };
  const mic = app.querySelector("[data-mic]");
  if (mic) mic.onclick = async () => {
    mic.textContent = "🔴";
    const alts = await asr();
    mic.textContent = "🎤";
    if (alts?.[0]) { input.value = alts[0]; send(); } else toast("Не расслышал, попробуйте ещё раз");
  };
  app.querySelector("[data-end]").onclick = () => {
    const min = Math.round((Date.now() - started) / 60000);
    update((s) => s.speaking.push({ date: today(), topic: topic.title, turns }));
    if (turns >= 8) {
      logTime("speak", Math.max(10, min), `ИИ-разговор: ${topic.title}`);
      markToday("speak");
      toast("Занятие засчитано. Ошибки — в «Мои ошибки».");
    } else toast(`Реплик ${turns} — для зачёта задачи нужно от 8. Время всё равно записано.`), logTime("speak", Math.max(1, min), topic.title);
    location.hash = "#/errors";
  };
  turn("");
}

/* ============================== ЗАПИСЬ ГОЛОСА ============================== */
export async function renderRecord(app) {
  const recs = await listRecordings();
  const topic = SPEAKING.monthly;
  app.innerHTML = `<h1>🎙 Ежемесячная запись голоса</h1>
    ${md(`План: **раз в месяц** запишите 2–3 минуты на **одну и ту же тему** и сравните с прошлым месяцем. Критерий роста — меньше пауз и подсказок, больше связных предложений.

**Тема (всегда одна):** ${topic}`)}
    <div class="card"><div class="row"><button class="btn primary" data-rec>⏺ Начать запись</button><span data-t class="rec"></span></div></div>
    <h2>Мои записи</h2>${recs.length ? recs.map((r) => `<div class="card"><b>${fmtDate(r.date)}</b> · ${Math.round(r.sec)} сек<br><audio controls src="${URL.createObjectURL(r.blob)}" style="width:100%;margin-top:6px"></audio><button class="btn sm ghost" data-del="${r.id}">Удалить</button></div>`).join("") : `<p class="muted">Записей пока нет.</p>`}`;
  let rec = null, t0 = 0, timer = 0;
  const btn = app.querySelector("[data-rec]");
  btn.onclick = async () => {
    if (!rec) {
      try { rec = await startRecording(); } catch { return toast("Нет доступа к микрофону"); }
      t0 = Date.now();
      btn.textContent = "⏹ Остановить";
      timer = setInterval(() => (app.querySelector("[data-t]").textContent = `● ${Math.round((Date.now() - t0) / 1000)} сек`), 500);
    } else {
      clearInterval(timer);
      const blob = await rec.stop();
      const sec = (Date.now() - t0) / 1000;
      rec = null;
      await saveRecording({ id: uid(), date: today(), sec, blob });
      logTime("speak", Math.max(2, Math.round(sec / 60)), "Ежемесячная запись голоса");
      markToday("record");
      renderRecord(app);
    }
  };
  $$("[data-del]", app).forEach((b) => (b.onclick = async () => { if (confirm("Удалить запись?")) { await deleteRecording(b.dataset.del); renderRecord(app); } }));
}

/* =============================== ПИСЬМО =============================== */
export function renderWrite(app, arg) {
  const ph = currentPhase();
  const tasks = WRITING.filter((w) => w.level === ph.level);
  const s = S();
  const week = curWeek();
  const t = arg === "week" ? tasks[(week - ph.from) % tasks.length] || tasks[0] : WRITING.find((w) => w.id === arg);
  if (t) return writeOne(app, t);
  app.innerHTML = `<h1>✍️ Письмо</h1>${md(`**Фаза ${ph.level}:** ${ph.write}

ИИ-наставник проверяет текст как репетитор: показывает исправленный вариант и объясняет **каждую** ошибку. Ошибки сохраняются в ваш список — раз в неделю по ним будут упражнения.`)}
    <a class="btn primary" href="#/write/week">▶ Задание этой недели</a>
    <h2>Задания</h2>${WRITING.filter((w) => upTo(ph.level).includes(w.level)).map((w) => `<div class="ex-line"><span>${s.writings.some((x) => x.task === w.id) ? "✅" : "📝"}</span><div style="flex:1"><a href="#/write/${w.id}">${esc(w.title)}</a> <span class="pill ${w.level.toLowerCase()}">${w.level}</span></div></div>`).join("")}
    <h2>Мои тексты</h2>${s.writings.slice().reverse().map((w) => `<details class="card"><summary><b>${esc(w.title || w.task)}</b> · ${w.date}${w.result?.score != null ? ` · ${w.result.score}/10` : ""}</summary><p style="white-space:pre-wrap">${esc(w.text)}</p>${w.result ? `<h4>Исправлено</h4><p style="white-space:pre-wrap">${esc(w.result.corrected)}</p><p class="muted">${esc(w.result.feedback || "")}</p>` : ""}</details>`).join("") || `<p class="muted">Пока нет.</p>`}`;
}

function writeOne(app, t) {
  const draftKey = "english_b2_draft_" + t.id;
  let draft = "";
  try { draft = localStorage.getItem(draftKey) || ""; } catch { /* нет хранилища */ }
  const started = Date.now();
  window.__ctx = { lesson: "Письмо", step: t.title, level: t.level };
  app.innerHTML = `<a class="btn sm ghost" href="#/write">← Все задания</a>
    <div class="card"><h1>✍️ ${esc(t.title)}</h1>${md(t.task)}
      ${t.plan ? `<details open><summary><b>План текста и полезные фразы</b></summary>${md(t.plan)}</details>` : ""}
      ${t.example ? `<details><summary>Пример (посмотрите после своей попытки)</summary>${md(t.example)}</details>` : ""}
      <textarea data-text rows="10" style="margin-top:10px" placeholder="Пишите здесь по-английски…">${esc(draft)}</textarea>
      <div class="row" style="margin-top:6px"><span class="small muted" data-wc></span><span class="spacer"></span><button class="btn primary" data-check>🤖 Проверить текст</button></div></div>
    <div data-res></div>`;
  const ta = app.querySelector("[data-text]");
  const wc = () => (app.querySelector("[data-wc]").textContent = `слов: ${ta.value.trim().split(/\s+/).filter(Boolean).length}${t.words ? ` (нужно ${t.words})` : ""}`);
  wc();
  ta.oninput = () => { wc(); try { localStorage.setItem(draftKey, ta.value); } catch { /* нет хранилища */ } };
  app.querySelector("[data-check]").onclick = async () => {
    const text = ta.value.trim();
    if (text.split(/\s+/).length < 3) return toast("Напишите хотя бы пару предложений");
    const b = app.querySelector("[data-check]");
    b.disabled = true;
    b.textContent = "🤖 Проверяю…";
    const r = await correctText(t.task.replace(/\*\*/g, ""), text, t.level);
    b.disabled = false;
    b.textContent = "🤖 Проверить ещё раз";
    const res = app.querySelector("[data-res]");
    update((s) => s.writings.push({ id: uid(), date: today(), task: t.id, title: t.title, text, result: r }));
    logTime("write", Math.max(10, Math.round((Date.now() - started) / 60000)), t.title);
    markToday("write");
    if (!r) return (res.innerHTML = `<div class="banner">${NO_AI}<br>Текст сохранён. Покажите его репетитору — план предлагает правку репетитором или ИИ.</div>`);
    for (const e of r.errors || []) addError(`Письмо: ${t.title}`, e.wrong, e.right, e.why);
    try { localStorage.removeItem(draftKey); } catch { /* нет хранилища */ }
    res.innerHTML = `<div class="card"><h2>Результат${r.score != null ? `: ${r.score}/10` : ""}</h2><p>${esc(r.feedback || "")}</p>
      ${r.task_done === false ? `<div class="banner">Задание выполнено не полностью — проверьте тему и объём.</div>` : ""}
      <h3>Ошибки (${(r.errors || []).length})</h3>${(r.errors || []).map((e) => `<div class="ex-line"><div><s style="color:var(--bad)">${esc(e.wrong)}</s> → <b style="color:var(--ok)">${esc(e.right)}</b><div class="muted small">${esc(e.why)}</div></div></div>`).join("") || "<p>Ошибок не найдено 🎉</p>"}
      <h3>Исправленный текст</h3><p style="white-space:pre-wrap">${esc(r.corrected)}</p><button class="btn sm" data-say="${esc(r.corrected)}">🔊 Прослушать</button>
      <p class="muted small">Совет: перепишите исправленный текст от руки или прочитайте вслух — так правильные формы запоминаются.</p></div>`;
  };
}

/* =========================== РАБОЧИЙ АНГЛИЙСКИЙ =========================== */
export function renderWork(app, id) {
  const month = dayInfo(currentDay()).month;
  const sc = WORK.find((w) => w.id === id);
  if (sc) {
    app.innerHTML = `<a class="btn sm ghost" href="#/work">← Сценарии</a><div class="card"><h1>💼 ${esc(sc.title)}</h1><p class="muted">${esc(sc.ru)}</p>
      <h3>Шаблонные фразы (${sc.phrases.length})</h3><p class="muted small">План: подготовьте 10–15 шаблонных фраз для сценария и отработайте их вслух.</p>
      ${sc.phrases.map(([en, ru]) => `<div class="ex-line"><button class="say" data-say="${esc(en)}">🔊</button><div style="flex:1"><div class="en">${esc(en)}</div><div class="ru">${esc(ru)}</div></div></div>`).join("")}
      <div class="row" style="margin-top:10px"><button class="btn" data-cards>+ Все фразы в Anki (рабочая колода)</button><a class="btn primary" href="#/speak/work_${sc.id}">▶ Ролевая игра с ИИ</a></div></div>`;
    bindSay(app);
    app.querySelector("[data-cards]").onclick = () => { let n = 0; for (const [en, ru] of sc.phrases) addCard(en, ru, "base", "work") && n++; toast(`Добавлено ${n}`); };
    return;
  }
  app.innerHTML = `<h1>💼 Рабочий английский</h1>${md(`Рабочая ветка плана:
- **С месяца 5** — один урок говорения в неделю на рабочие ситуации: знакомство с коллегами, телефонный звонок, простые письма, описание своей роли.
- **С месяца 9** — встреча, обсуждение задачи, короткий созвон, презентация своей зоны ответственности. 10–15 шаблонных фраз на сценарий.
- **С месяца 13** — половина говорения: ведение встречи, презентация, переговоры, объяснение сложного простыми словами, ответы на вопросы. 2–3 реальные рабочие ситуации в формате ролевой игры.

Сейчас у вас месяц **${month}**.`)}
    <div class="grid">${WORK.map((w) => `<a class="card" style="margin:0;text-decoration:none;color:inherit;${w.month > month ? "opacity:.6" : ""}" href="#/work/${w.id}"><b>${esc(w.title)}</b><div class="muted small">${esc(w.ru)}</div><span class="pill">с месяца ${w.month}</span></a>`).join("")}</div>`;
}

/* ================================ ОШИБКИ ================================ */
export function renderErrors(app) {
  const s = S();
  const open = s.errors.filter((e) => !e.fixed);
  app.innerHTML = `<h1>🐞 Мои ошибки</h1>${md("Правило плана: **ошибки записывайте**. Ведите список повторяющихся ошибок и **раз в неделю** делайте по нему упражнения. Сюда автоматически попадают ошибки из уроков, письма и разговоров.")}
    <div class="row"><button class="btn primary" data-drill ${open.length ? "" : "disabled"}>🤖 Упражнения по моим ошибкам</button><button class="btn" data-seen>Я разобрал(а) ошибки сегодня ✓</button><span class="muted small">Открытых: ${open.length}</span></div>
    <div data-ex></div>
    <div class="card"><div class="tbl-wrap"><table><tr><th>Было</th><th>Правильно</th><th>Почему</th><th>Где</th><th></th></tr>
      ${open.slice().reverse().map((e) => `<tr><td><s>${esc(e.wrong)}</s>${e.count > 1 ? ` <span class="pill">×${e.count}</span>` : ""}</td><td><b>${esc(e.right)}</b></td><td class="small">${esc(e.why || "")}</td><td class="small muted">${esc(e.src)}<br>${e.date}</td><td><button class="btn sm" data-fix="${e.id}" title="Больше не ошибаюсь">✓</button> <button class="btn sm ghost" data-ask="${e.id}" title="Объясни">🤖</button></td></tr>`).join("") || `<tr><td colspan="5" class="muted">Открытых ошибок нет 🎉</td></tr>`}
    </table></div></div>
    <details class="card"><summary>Исправленные (${s.errors.length - open.length})</summary>${s.errors.filter((e) => e.fixed).map((e) => `<div class="small">✓ ${esc(e.wrong)} → ${esc(e.right)}</div>`).join("")}</details>`;
  app.querySelector("[data-seen]").onclick = () => { markToday("errors"); toast("Отмечено"); };
  $$("[data-fix]", app).forEach((b) => (b.onclick = () => { update((s) => (s.errors.find((e) => e.id === b.dataset.fix).fixed = true)); renderErrors(app); }));
  $$("[data-ask]", app).forEach((b) => (b.onclick = () => { const e = s.errors.find((x) => x.id === b.dataset.ask); openHelper({ mode: "explain", topic: `Моя ошибка: «${e.wrong}», правильно «${e.right}». Объясни правило.`, context: e.why, level: currentLevel() }); }));
  app.querySelector("[data-drill]").onclick = (ev) => {
    const list = open.sort((a, b) => (b.count || 1) - (a.count || 1)).slice(0, 15).map((e) => `${e.wrong} → ${e.right}${e.why ? " — " + e.why : ""}`).join("\n");
    extraPractice(app.querySelector("[data-ex]"), "мои ошибки", currentPhase().level, ev.target, list);
    markToday("errors");
  };
}

/* =============================== РЕСУРСЫ =============================== */
export function renderResources(app) {
  const ph = currentPhase();
  app.innerHTML = `<h1>🔗 Ресурсы по навыкам</h1>${md("Не берите всё сразу: достаточно **одного ресурса на каждую строку**. Названия приведены по общему знанию и могли измениться — проверьте актуальность перед покупкой.")}
    <div class="card"><div class="tbl-wrap"><table><tr><th>Навык</th><th>Основной ресурс</th><th>Дополнительно</th></tr>${RESOURCES.table.map((r) => `<tr><th>${esc(r[0])}</th><td>${md(r[1])}</td><td>${md(r[2])}</td></tr>`).join("")}</table></div></div>
    <div class="card"><h2>Для фазы ${ph.level}</h2>${md(RESOURCES.byLevel[ph.level])}</div>
    <div class="card"><h2>Сегодня: свободное слушание и чтение</h2>${md("Выберите материал по интересам, который понимаете на 90–95%. После занятия отметьте время — и выпишите 3–7 фраз в «Мои фразы».")}
      <div class="row"><input type="number" data-min value="60" style="width:100px"><select data-b style="width:auto"><option value="listen">Слушание</option><option value="read">Чтение</option></select><input type="text" data-note placeholder="что слушали/читали" style="flex:1"><button class="btn primary" data-log>Записать и отметить задачу</button></div></div>
    <div class="card"><h2>Как выбирать репетитора</h2>${md(RESOURCES.tutor)}</div>
    <div class="card"><h2>Типичные проблемы и что делать при застое</h2><div class="tbl-wrap"><table><tr><th>Проблема</th><th>Что делать</th></tr>${RESOURCES.problems.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join("")}</table></div>
      ${md("Если за 2–3 месяца заметного прогресса нет, проверьте три вещи: **сколько часов вы реально занимались**, **сколько из них говорили и писали** (а не только слушали и читали) и **разбираете ли ошибки** после занятий. Всё это видно в «📊 Прогресс».")}</div>`;
  app.querySelector("[data-log]").onclick = () => {
    logTime(app.querySelector("[data-b]").value, +app.querySelector("[data-min]").value, app.querySelector("[data-note]").value);
    markToday("free");
    toast("Записано");
  };
}

/* ============================ КОНТРОЛЬНЫЕ ТОЧКИ ============================ */
export function renderCheckpoint(app, id) {
  const cp = CHECKPOINTS[id] || CHECKPOINTS.cp1;
  const s = S();
  const st = s.checks[cp.id] || {};
  const lessons = LESSONS.filter((l) => l.phase === cp.phase);
  const notDone = lessons.filter((l) => !s.lessons[l.id]?.done).length;
  app.innerHTML = `<h1>🏁 ${esc(cp.title)}</h1>${md(cp.intro)}
    ${notDone ? `<div class="banner">Не пройдено уроков фазы: ${notDone}. Их стоит закончить до перехода.</div>` : ""}
    <div class="card"><h2>Критерии плана</h2><p class="muted small">Отмечайте честно — по фактам, а не по ощущениям. Где можно, приложение проверяет само.</p>
      ${cp.criteria.map((c, k) => `<label class="task ${st[k] ? "done" : ""}" style="cursor:pointer"><input type="checkbox" data-k="${k}" ${st[k] ? "checked" : ""}><div class="body"><div class="ttl">${esc(c.text)}</div>${c.how ? `<div class="desc">${md(c.how)}</div>` : ""}${c.auto ? `<div class="desc"><b>${esc(autoCheck(c.auto))}</b></div>` : ""}</div></label>`).join("")}</div>
    <div class="card"><h2>Встроенный тест по грамматике фазы</h2><p class="muted small">20 заданий из уроков фазы вперемешку. Ориентир — не меньше 70–75%.</p><button class="btn primary" data-test>Начать тест</button><div data-tbox></div></div>
    <div class="card"><h2>Решение</h2><div class="row"><button class="btn ok" data-pass>Фаза пройдена → дальше</button><button class="btn" data-extend>Добавить месяц на этой фазе</button></div>
    <p class="muted small">План: если тест показывает меньше ожидаемого, не торопитесь — добавьте 1–2 месяца и усильте просевший навык. Так пробелы не накапливаются.</p></div>`;
  $$("[data-k]", app).forEach((c) => (c.onchange = () => { update((s) => ((s.checks[cp.id] ||= {})[c.dataset.k] = c.checked)); renderCheckpoint(app, id); }));
  app.querySelector("[data-test]").onclick = () => phaseTest(app.querySelector("[data-tbox]"), cp.phase, `Контрольная точка ${cp.level}`);
  app.querySelector("[data-pass]").onclick = () => { markToday("checkpoint"); update((s) => s.tests.push({ date: today(), kind: cp.title, result: "пройдена" })); toast("🎉 Поздравляем! Переходим к следующей фазе."); location.hash = "#/today"; };
  app.querySelector("[data-extend]").onclick = () => {
    if (!confirm("Повторить последние 4 недели фазы? Учебный день сдвинется на месяц назад, пройденные уроки сохранятся.")) return;
    update((s) => { s.day = Math.max(0, s.day - 28 + 6); });
    toast("Месяц добавлен. Сосредоточьтесь на навыке, который просел.");
    location.hash = "#/today";
  };
}

function autoCheck(kind) {
  const s = S();
  const st = srsStats();
  if (kind === "cards") return `Сейчас в Anki: ${st.learned} фраз изучается, точность за неделю: ${st.accuracy ?? "—"}%`;
  if (kind === "hours") return `Накоплено часов: ${(s.log.reduce((a, r) => a + r.min, 0) / 60).toFixed(1)}`;
  if (kind === "writing") { const w = s.writings.filter((x) => x.result).slice(-1)[0]; return w ? `Последний текст: ${w.result.score}/10, ошибок ${w.result.errors?.length ?? "?"}` : "Проверенных текстов пока нет"; }
  if (kind === "read") return `Прочитано текстов в приложении: ${Object.keys(s.read).length}`;
  return "";
}

/** Тест из заданий уроков фазы (используется в контрольных точках и тестах уровня). */
export function phaseTest(box, phaseN, kind) {
  const items = [];
  for (const l of LESSONS.filter((x) => x.phase <= phaseN && (phaseN === 1 || x.phase >= phaseN - 1)))
    for (const st of l.steps) if (st.t === "choice" && !st.listen) for (const it of st.items) items.push(it);
  const pick = shuffle(items).slice(0, 20);
  if (pick.length < 5) return (box.innerHTML = `<p class="muted">Недостаточно заданий: сначала пройдите уроки фазы.</p>`);
  bindSay(box);
  renderStep({ t: "choice", h: "", items: pick }, box, {
    level: currentPhase().level,
    done: (st) => {
      const pct = Math.round((st.firstTry / st.total) * 100);
      update((s) => s.tests.push({ date: today(), kind, result: `${pct}% (${st.firstTry}/${st.total})` }));
      box.insertAdjacentHTML("beforeend", `<div class="banner ${pct >= 70 ? "ok" : ""}">Результат: <b>${pct}%</b>. ${pct >= 75 ? "Отлично, уровень фазы подтверждён." : pct >= 70 ? "Порог пройден, но есть пробелы — посмотрите «Мои ошибки»." : "Ниже 70%: план советует добавить 1–2 месяца на фазе и повторить слабые темы."}</div>`);
    },
    mistake: (w, r, y) => addError(kind, w, r, y),
    explain: (topic, context, attempt) => openHelper({ mode: "explain", topic, context, attempt, level: currentPhase().level }),
  });
}

/* ============================== ОБЗОР НЕДЕЛИ ============================== */
export function renderWeekly(app) {
  const s = S();
  const info = dayInfo(currentDay());
  const from = (info.week - 1) * 7;
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
  const min = s.log.filter((r) => r.date >= weekAgo).reduce((a, r) => a + r.min, 0);
  const srsDays = Object.keys(s.reviewDays).filter((d) => d >= weekAgo).length;
  const texts = s.writings.filter((w) => w.date >= weekAgo).length;
  const speakMin = s.log.filter((r) => r.date >= weekAgo && (r.block === "speak" || r.block === "write")).reduce((a, r) => a + r.min, 0);
  const target = (s.profile.hoursPerWeek || 7) * 60;
  const open = s.errors.filter((e) => !e.fixed).length;
  let done = 0, total = 0;
  for (let d = from; d < from + 7; d++) { const st = s.days[d]?.tasks || {}; total++; if (s.days[d]?.finished) done++; void st; }
  app.innerHTML = `<h1>🗓 Обзор недели ${info.week}</h1>${md("Проверяйте прогресс **по фактам, а не по ощущениям**. Критерии недели из плана:")}
    <div class="card"><table>
      <tr><th>Что проверяем</th><th>Факт</th><th>Норма плана</th><th></th></tr>
      <tr><td>Часы занятий</td><td>${(min / 60).toFixed(1)} ч</td><td>не менее ${((target * 6) / 7 / 60).toFixed(1)} из ${(target / 60).toFixed(0)} ч</td><td>${min >= (target * 6) / 7 ? "✅" : "⚠️"}</td></tr>
      <tr><td>Дни с Anki</td><td>${srsDays}</td><td>больше 5 дней</td><td>${srsDays > 5 ? "✅" : "⚠️"}</td></tr>
      <tr><td>Написано текстов</td><td>${texts}</td><td>хотя бы 1</td><td>${texts ? "✅" : "⚠️"}</td></tr>
      <tr><td>Говорение + письмо</td><td>${(speakMin / 60).toFixed(1)} ч</td><td>не только слушать и читать</td><td>${speakMin >= 60 ? "✅" : "⚠️"}</td></tr>
      <tr><td>Учебных дней закрыто</td><td>${done} из 7</td><td>регулярность важнее длительности</td><td></td></tr>
    </table>
    ${min < (target * 6) / 7 ? md("> Часов меньше нормы. Не страшно: на следующей неделе ставьте короткие сессии по 15–20 минут каждый день — регулярность важнее длительности.") : ""}</div>
    <div class="card"><h2>Упражнения по ошибкам недели</h2><p class="muted small">Открытых ошибок: ${open}.</p><button class="btn" data-drill ${open ? "" : "disabled"}>🤖 Сделать упражнения</button><div data-ex></div></div>
    <div class="card"><h2>Заметка и план на следующую неделю</h2><textarea data-note rows="3" placeholder="Что получилось, что было трудно, что усилить">${esc(s.setup["week" + info.week] || "")}</textarea>
      <div class="row" style="margin-top:8px"><button class="btn primary" data-save>Сохранить и закрыть обзор ✓</button></div></div>`;
  app.querySelector("[data-drill]").onclick = (ev) => {
    const list = s.errors.filter((e) => !e.fixed).slice(-15).map((e) => `${e.wrong} → ${e.right}${e.why ? " — " + e.why : ""}`).join("\n");
    extraPractice(app.querySelector("[data-ex]"), "мои ошибки", currentPhase().level, ev.target, list);
  };
  app.querySelector("[data-save]").onclick = () => {
    update((s) => (s.setup["week" + info.week] = app.querySelector("[data-note]").value));
    markToday("weekly");
    logTime("words", 15, "Обзор недели");
    toast("Обзор сохранён");
    location.hash = "#/today";
  };
}

/* ================================ СТАРТ ================================ */
export function renderSetup(app) {
  const s = S();
  const v = (k) => esc(s.setup[k] || "");
  app.innerHTML = `<h1>🚀 Старт: неделя подготовки</h1>
    <div class="card"><h2>1. Тест уровня</h2>${md("Если школьная база осталась — пройдите бесплатный тест **EF SET** (efset.org, ~50 минут) и запишите результат. Если начинаете с нуля — просто отметьте «с нуля»: тест пригодится через 3 месяца.")}
      <div class="row"><a class="btn" href="https://www.efset.org/" target="_blank" rel="noopener">Открыть EF SET ↗</a><input type="text" data-test placeholder="результат, например A1 / 35 баллов / с нуля" value="${v("efset")}" style="flex:1"></div></div>
    <div class="card"><h2>2. Основной учебник</h2>${md("Выберите один: **English File Beginner** или **Headway Beginner**. Уроки в приложении покрывают те же темы и объясняют их подробнее — учебник даёт дополнительные упражнения и аудио.")}
      <input type="text" data-book placeholder="какой учебник выбрали" value="${v("book")}"></div>
    <div class="card"><h2>3. Репетитор</h2>${md(RESOURCES.tutor)}<input type="text" data-tutor placeholder="имя/ссылка репетитора, день и время урока" value="${v("tutor")}"></div>
    <div class="card"><h2>4. Колоды «Основа» и «Мои фразы»</h2>${md("Уже созданы во вкладке **🃏 Слова** — это встроенная замена Anki с тем же алгоритмом. Если хотите, можно параллельно поставить и сам Anki.")}</div>
    <div class="card"><h2>5. Звуки</h2>${md("Дальше на неделе — 4 урока фонетики: транскрипция и звуки, которых нет в русском (th, w, ɪ/iː, ʊ/uː). Видео по постановке звуков — канал **Rachel's English**, словарь с озвучкой — **Cambridge Dictionary**.")}</div>
    <button class="btn primary" data-save>Сохранить и отметить задачу ✓</button>`;
  app.querySelector("[data-save]").onclick = () => {
    update((s) => Object.assign(s.setup, { efset: app.querySelector("[data-test]").value, book: app.querySelector("[data-book]").value, tutor: app.querySelector("[data-tutor]").value }));
    if (s.setup.efset) update((s) => s.tests.push({ date: today(), kind: "EF SET (старт)", result: s.setup.efset }));
    markToday("setup");
    logTime("course", 30, "Подготовка");
    location.hash = "#/today";
  };
}

/* ============================== ТЕСТ УРОВНЯ ============================== */
export function renderLevelTest(app) {
  app.innerHTML = `<h1>📝 Тест уровня (раз в 3 месяца)</h1>${md("План: раз в 3 месяца — тест уровня (**EF SET** или пробный **Cambridge**). Результат должен расти, иначе пересмотрите план. Запишите результат внешнего теста и пройдите встроенный тест по грамматике.")}
    <div class="card"><div class="row"><a class="btn" href="https://www.efset.org/" target="_blank" rel="noopener">EF SET ↗</a><a class="btn" href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener">Cambridge: Test your English ↗</a></div>
      <div class="row" style="margin-top:8px"><input type="text" data-res placeholder="результат внешнего теста" style="flex:1"><button class="btn primary" data-save>Записать</button></div></div>
    <div class="card"><h2>Встроенный тест</h2><div data-t></div></div>`;
  phaseTest(app.querySelector("[data-t]"), currentPhase().n, "Тест уровня (встроенный)");
  app.querySelector("[data-save]").onclick = () => {
    update((s) => s.tests.push({ date: today(), kind: "Внешний тест уровня", result: app.querySelector("[data-res]").value }));
    markToday("test");
    logTime("course", 40, "Тест уровня");
    toast("Записано");
  };
}
