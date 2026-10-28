// Тренажёр «Фразы» в духе Duolingo: путь по темам, сессии из заданий разных типов, повторения по силе фразы.
import { S, update, logTime } from "./store.js?v=20261028b";
import { esc, shuffle, today, addDays, toast, lev, norm } from "./util.js?v=20261028b";
import { speak } from "./speech.js?v=20261028b";
import { sayBoth } from "./exercises.js?v=20261028b";
import { markToday } from "./progress.js?v=20261028b";
import { streakInfo, xpToday } from "./gamify.js?v=20261028b";
import { TOPICS, PHRASES } from "../data/phrases/index.js";

const INTERVALS = [1, 2, 4, 8, 16, 32]; // дней до следующего показа для силы 1..5 (индекс s-1)
const ALL_KEY = "english_b2_duo_all";
const BY_TOPIC = new Map(TOPICS.map((t) => [t.id, PHRASES.filter((p) => p.topic === t.id)]));
const TOPIC = new Map(TOPICS.map((t) => [t.id, t]));
const BY_ID = new Map(PHRASES.map((p) => [p.id, p]));

/* ------------------------------ состояние ------------------------------ */
const D = () => S().duo || { p: {}, xp: {}, goal: 30 };
const ensure = (s) => {
  const d = (s.duo ||= {});
  d.p ||= {};
  d.xp ||= {};
  if (!(d.goal > 0)) d.goal = 30;
  return d;
};
const openAll = () => { try { return localStorage.getItem(ALL_KEY) === "1"; } catch { return false; } };

export function topicStat(t) {
  const ph = BY_TOPIC.get(t.id) || [], p = D().p || {};
  let shown = 0, sum = 0;
  for (const x of ph) {
    const r = p[x.id];
    if (r && r.n > 0) { shown++; sum += r.s || 0; }
  }
  const avg = ph.length ? sum / ph.length : 0;
  let lvl = 0;
  if (ph.length && shown === ph.length) for (let k = 1; k <= 5; k++) if (avg >= k) lvl = k;
  return { shown, total: ph.length, avg, lvl, pct: Math.round((avg / 5) * 100) };
}
const isOpen = (i) => i === 0 || openAll() || topicStat(TOPICS[i - 1]).lvl >= 1;

function reviewList() {
  const t = today(), p = D().p || {};
  return PHRASES.filter((x) => {
    const r = p[x.id];
    return r && r.n > 0 && (r.due <= t || (r.w >= 2 && r.s <= 2));
  }).sort((a, b) => (p[a.id].due < p[b.id].due ? -1 : p[a.id].due > p[b.id].due ? 1 : p[a.id].s - p[b.id].s));
}
const streak = () => streakInfo().n;

/* ------------------------------ проверка ответов ------------------------------ */
/** "ok" | "typo" (одна опечатка в длинном слове) | "bad". Регистр, пунктуация, ’ и сокращения — через norm(). */
export function judge(answer, target) {
  const loose = (x) => norm(String(x).replace(/['’‘`´]/g, ""));
  if (norm(answer) && loose(answer) === loose(target)) return "ok"; // «Whats your name» = «What's your name?»
  const a = norm(answer), t = norm(target);
  if (!a) return "bad";
  if (a === t) return "ok";
  const aw = a.split(" "), tw = t.split(" ");
  if (aw.length === tw.length) {
    let diff = 0, fine = true;
    for (let i = 0; i < tw.length; i++) {
      if (aw[i] === tw[i]) continue;
      diff++;
      if (tw[i].length < 5 || lev(aw[i], tw[i]) !== 1) fine = false;
    }
    if (diff === 1 && fine) return "typo";
  }
  return "bad";
}
const normRu = (s) => String(s).toLowerCase().replace(/ё/g, "е").replace(/[.,!?;:"“”«»()]/g, " ").replace(/\s+/g, " ").trim();
const stripP = (w) => {
  const x = w.replace(/^[.,!?;:"“”«»—-]+|[.,!?;:"“”«»]+$/g, "");
  return x.includes("(") && x.includes(")") ? x : x.replace(/^[()]+|[()]+$/g, "");
};
const tokens = (txt) => String(txt).split(/\s+/).map(stripP).filter(Boolean);

/* ------------------------------ сборка сессии ------------------------------ */
const topicLevel = (id) => (TOPIC.get(id) ? topicStat(TOPIC.get(id)).lvl : 0);
const strength = (ph) => D().p?.[ph.id]?.s || 0;
const wordsN = (ph) => tokens(ph.en).length;

function pickPhrases(topicId) {
  const ph = BY_TOPIC.get(topicId) || [], p = D().p || {};
  const need = Math.min(ph.length, 6 + (Math.random() < 0.4 ? 1 : 0));
  const familiar = ph.filter((x) => p[x.id]?.n > 0).sort((a, b) => (p[a.id].due < p[b.id].due ? -1 : p[a.id].due > p[b.id].due ? 1 : p[a.id].s - p[b.id].s));
  const fresh = ph.filter((x) => !(p[x.id]?.n > 0));
  const fam = familiar.slice(0, Math.min(3, need));
  const out = [...fam, ...fresh.slice(0, need - fam.length)];
  for (const x of familiar.slice(fam.length)) { if (out.length >= need) break; out.push(x); }
  return out;
}

function pickReview() {
  const list = reviewList().slice(0, 14);
  return shuffle(list).slice(0, 6 + (Math.random() < 0.4 ? 1 : 0));
}

/** Тип задания для фразы: stage 1 — «узнать», stage 2 — «вспомнить». Сложность растёт с силой фразы и уровнем темы. */
function pickType(ph, stage, used) {
  const s = strength(ph), L = topicLevel(ph.topic), n = wordsN(ph);
  let pool;
  if (stage === 1) pool = s < 2 ? ["choose", "choose", "tilesRu"] : s < 4 ? ["choose", "tilesRu", "tilesEn"] : ["choose", "tilesEn"];
  else if (s <= 1) pool = ["tilesEn", "tilesRu", "tilesEn"];
  else if (s === 2) pool = ["tilesEn", "listen"];
  else pool = L >= 3 ? ["listen", "typeEn", "typeEn"] : ["listen", "tilesEn"];
  if (L >= 3 && s >= 2 && stage === 2 && !pool.includes("typeEn")) pool = [...pool, "typeEn"];
  if (n < 2) pool = pool.filter((x) => x !== "tilesEn" && x !== "tilesRu"); // однословные фразы плитками не собрать
  const alt = pool.filter((x) => x !== used);
  if (alt.length) pool = alt;
  if (!pool.length) pool = ["choose"];
  return pool[Math.floor(Math.random() * pool.length)];
}

function buildSession(phrases, title, kind, topicId) {
  const stage1 = shuffle(phrases.map((ph) => ({ type: pickType(ph, 1), ph })));
  const stage2 = shuffle(phrases.map((ph) => ({ type: pickType(ph, 2, stage1.find((t) => t.ph === ph)?.type), ph })));
  const queue = [...stage1, ...stage2];
  const pairPh = [...phrases].sort((a, b) => wordsN(a) - wordsN(b)).slice(0, 5); // короткие
  if (pairPh.length >= 3) queue.splice(Math.floor(queue.length / 2), 0, { type: "pairs", ph: pairPh[0], group: pairPh });
  return {
    kind, topicId, title, phrases, queue, total: queue.length, done: 0, retries: 0, attempts: 0, firstOk: 0, errs: 0, xp: 0,
    t0: Date.now(), seen: new Set(), pen: new Set(), bump: new Set(), cur: null, locked: false, canCheck: null, checkNow: null,
  };
}

/* ------------------------------ экран-путь ------------------------------ */
let ses = null;
let keyHandler = null;
const removeKey = () => { if (keyHandler) { document.removeEventListener("keydown", keyHandler, true); keyHandler = null; } };

window.addEventListener("hashchange", () => {
  document.body.classList.toggle("duo-run", /^#\/duo\/./.test(location.hash));
});

export function renderDuo(root, arg) {
  removeKey();
  document.body.classList.remove("duo-run");
  if (arg === "review") {
    const list = pickReview();
    if (!list.length) { toast("Пока нечего повторять — все фразы в срок"); location.hash = "#/duo"; return; }
    return startSession(root, buildSession(list, "Повторение", "review"));
  }
  const t = arg && TOPIC.get(arg);
  if (t) {
    if (isOpen(TOPICS.indexOf(t))) return startSession(root, buildSession(pickPhrases(t.id), t.title, "topic", t.id));
    toast("Сначала пройдите предыдущую тему");
    history.replaceState(null, "", "#/duo");
  }
  ses = null;
  renderPath(root);
}

const ring = (pct, inner) => `<span class="duo-ring" style="--p:${pct}"><span>${inner}</span></span>`;

function renderPath(root) {
  const d = D(), goal = d.goal > 0 ? d.goal : 30, xp = xpToday(), st = streak(), due = reviewList().length;
  const levels = [...new Set(TOPICS.map((t) => t.level))];
  let html = `<h1>🦉 Фразы</h1>
  <div class="card duo-top">
    <div class="duo-stats">
      <div><b>🔥 ${st}</b><span class="small muted">${st ? "дн. подряд" : "серия"}</span></div>
      <div><b>⚡ ${xp}</b><span class="small muted">XP сегодня</span></div>
      <div><b>🎯 ${goal}</b><span class="small muted">цель XP</span></div>
    </div>
    <div class="bar ${xp >= goal ? "ok" : ""}" style="margin:10px 0 6px"><i style="width:${Math.min(100, Math.round((xp / goal) * 100))}%"></i></div>
    <div class="small muted">${xp >= goal ? "Цель на сегодня выполнена! 🎉" : `До цели ещё ${goal - xp} XP`}</div>
    <div class="row duo-goals" style="margin-top:10px;gap:6px;flex-wrap:wrap"><span class="small muted">Цель в день:</span>
      ${[10, 20, 30, 50].map((g) => `<button class="btn sm ${g === goal ? "primary" : "ghost"}" data-goal="${g}">${g}</button>`).join("")}</div>
    <div class="row" style="margin-top:12px;gap:8px;flex-wrap:wrap">
      <a class="btn ${due ? "primary" : "ghost"}" href="#/duo/review" ${due ? "" : 'aria-disabled="true" data-nodue="1"'}>💪 Повторение${due ? ` · ${due}` : ""}</a>
      <button class="btn ghost" data-openall>${openAll() ? "Скрыть замки обратно" : "Открыть все темы"}</button>
    </div>
  </div>`;
  for (const lv of levels) {
    html += `<h2 style="margin-top:20px"><span class="pill ${lv.toLowerCase()}">${esc(lv)}</span></h2><div class="duo-grid">`;
    TOPICS.forEach((t, i) => {
      if (t.level !== lv) return;
      const s = topicStat(t), open = isOpen(i);
      const crowns = Array.from({ length: 5 }, (_, k) => `<i class="${k < s.lvl ? "on" : ""}"></i>`).join("");
      const inner = `${ring(open ? s.pct : 0, open ? esc(t.icon || "📘") : "🔒")}
        <span class="duo-tx"><b>${esc(t.title)}</b><span class="small muted">${s.shown}/${s.total} фраз · ур. ${s.lvl}/5</span><span class="duo-crowns" title="Уровень темы ${s.lvl} из 5">${crowns}</span></span>`;
      html += open ? `<a class="duo-topic" href="#/duo/${esc(t.id)}">${inner}</a>` : `<div class="duo-topic locked" aria-disabled="true" title="Пройдите предыдущую тему хотя бы на уровень 1">${inner}</div>`;
    });
    html += `</div>`;
  }
  root.innerHTML = html;
  root.querySelectorAll("[data-goal]").forEach((b) => (b.onclick = () => { update((s) => { ensure(s).goal = +b.dataset.goal; }); renderPath(root); }));
  root.querySelector("[data-openall]").onclick = () => {
    try { localStorage.setItem(ALL_KEY, openAll() ? "0" : "1"); } catch { /* нет хранилища */ }
    renderPath(root);
  };
  const nd = root.querySelector("[data-nodue]");
  if (nd) nd.onclick = (e) => { e.preventDefault(); toast("Пока нечего повторять — все фразы в срок"); };
}

/* ------------------------------ сессия ------------------------------ */
function startSession(root, s) {
  ses = s;
  document.body.classList.add("duo-run");
  root.innerHTML = `<div class="duo" id="duoRoot">
    <div class="duo-head"><a class="duo-x" href="#/duo" title="Выйти (прогресс сохранён)">✕</a><div class="bar" style="flex:1"><i id="duoBar" style="width:0"></i></div><span class="small muted" id="duoCnt"></span></div>
    <div id="duoStage"></div>
    <div class="duo-foot hide" id="duoFoot"></div>
  </div>`;
  keyHandler = (e) => {
    if (e.key !== "Enter") return;
    if (!document.getElementById("duoRoot")) return removeKey();
    e.preventDefault(); // Enter никогда не отправляет форму и не «нажимает» сфокусированную кнопку второй раз
    if (e.repeat) return;
    if (ses.locked) next();
    else if (ses.canCheck?.()) ses.checkNow();
  };
  document.addEventListener("keydown", keyHandler, true);
  next();
}

function bar() {
  const tot = ses.total + ses.retries;
  const b = document.getElementById("duoBar");
  if (b) b.style.width = Math.round((ses.done / tot) * 100) + "%";
  const c = document.getElementById("duoCnt");
  if (c) c.textContent = `${ses.done}/${tot}`;
}

function next() {
  const foot = document.getElementById("duoFoot");
  if (!foot) return;
  foot.className = "duo-foot hide";
  ses.locked = false;
  ses.checkNow = null;
  ses.canCheck = null;
  bar();
  if (!ses.queue.length) return finish();
  ses.cur = ses.queue.shift();
  const t = ses.cur, stage = document.getElementById("duoStage");
  stage.innerHTML = "";
  const draw = { choose: drawChoose, tilesEn: (a, b) => drawTiles(a, b, "en"), tilesRu: (a, b) => drawTiles(a, b, "ru"), listen: (a, b) => drawInput(a, b, true), typeEn: (a, b) => drawInput(a, b, false), pairs: drawPairs };
  draw[t.type](stage, t);
  window.scrollTo(0, 0);
}

function addPhraseStat(id, good) {
  update((s) => {
    const d = ensure(s);
    const r = (d.p[id] ||= { s: 0, due: today(), n: 0, w: 0, mod: 0 });
    if (!ses.seen.has(id)) { r.n = (r.n || 0) + 1; ses.seen.add(id); }
    if (good) {
      if (!ses.pen.has(id) && !ses.bump.has(id)) {
        r.s = Math.min(5, (r.s || 0) + 1);
        r.due = addDays(today(), INTERVALS[r.s - 1]);
        ses.bump.add(id);
      }
    } else if (!ses.pen.has(id)) {
      r.s = Math.max(0, (r.s || 0) - 1);
      r.due = today();
      r.w = (r.w || 0) + 1;
      ses.pen.add(id);
    }
    r.mod = Date.now();
  });
}
const addXp = (n) => update((s) => { const d = ensure(s); d.xp[today()] = (d.xp[today()] || 0) + n; });

/** Итог задания: res "ok" | "typo" | "bad"; correctText показывается при ошибке/опечатке; say — что озвучить. */
function answer(res, correctText, say) {
  if (ses.locked) return;
  ses.locked = true;
  document.querySelectorAll("#duoCheck, #duoSkip").forEach((b) => (b.disabled = true));
  const t = ses.cur, good = res !== "bad", pairs = t.type === "pairs";
  if (!t.retry) {
    ses.attempts++;
    if (good) { ses.firstOk++; ses.xp++; addXp(1); } else ses.errs++;
    if (!pairs) addPhraseStat(t.ph.id, good);
  }
  if (good || pairs) ses.done++;
  else {
    ses.retries++; // ошибка: задание вернётся в конец сессии, пока не будет решено
    ses.queue.push({ ...t, retry: true });
  }
  const foot = document.getElementById("duoFoot");
  foot.className = `duo-foot ${good ? "ok" : "bad"}`;
  const head = pairs ? (good ? "Верно!" : "Пары собраны, но были промахи") : res === "ok" ? "Верно!" : res === "typo" ? "Почти, опечатка." : "Правильный ответ:";
  const showText = res === "ok" ? "" : correctText || "";
  foot.innerHTML = `<div class="duo-foot-in"><div class="duo-msg"><b>${head}</b>${showText ? `<div class="duo-right">${esc(showText)}</div>` : ""}</div>
    <button class="btn ${good ? "ok" : "primary"} duo-next" id="duoNext">Дальше</button></div>`;
  document.getElementById("duoNext").onclick = next;
  bar();
  if (say) speak(say);
}

const speakRow = (ph) => `<div class="duo-say">${sayBoth(ph.en)}</div>`;

/* a) выбери перевод */
function drawChoose(stage, t) {
  const words = (x) => new Set(normRu(x).split(" ").filter((w) => w.length > 2));
  const mine = words(t.ph.ru);
  const close = (x) => { const w = words(x.ru); let k = 0; w.forEach((v) => mine.has(v) && k++); return k >= Math.max(2, Math.ceil(Math.min(w.size, mine.size) * 0.6)); };
  const ph0 = t.ph, all = (BY_TOPIC.get(ph0.topic) || []).filter((x) => x.id !== ph0.id && x.ru !== ph0.ru);
  const far = all.filter((x) => !close(x));
  const ph = ph0, same = far.length >= 3 ? far : all;
  const opts = shuffle([ph, ...shuffle(same).slice(0, 3)]);
  stage.innerHTML = `<p class="duo-q">Выберите перевод</p><div class="duo-prompt">${speakRow(ph)}<span class="duo-en">${esc(ph.en)}</span></div>
    <div class="duo-opts">${opts.map((o, i) => `<button class="opt duo-opt" data-i="${i}">${esc(o.ru)}</button>`).join("")}</div>`;
  speak(ph.en);
  stage.querySelectorAll(".duo-opt").forEach((b) => (b.onclick = () => {
    if (ses.locked) return;
    const good = opts[+b.dataset.i].id === ph.id;
    b.classList.add(good ? "right" : "wrong");
    stage.querySelectorAll(".duo-opt").forEach((x) => { if (opts[+x.dataset.i].id === ph.id) x.classList.add("right"); x.disabled = true; });
    answer(good ? "ok" : "bad", ph.ru, ph.en);
  }));
}

/* b, c) плитки: собрать английскую или русскую фразу */
function drawTiles(stage, t, lang) {
  const ph = t.ph, en = lang === "en";
  const target = tokens(en ? ph.en : ph.ru);
  const pool = (BY_TOPIC.get(ph.topic) || []).filter((x) => x.id !== ph.id).flatMap((x) => tokens(en ? x.en : x.ru));
  const have = new Set(target.map((w) => w.toLowerCase()));
  const extraN = Math.min(4, 2 + (strength(ph) >= 2 ? 1 : 0) + (topicLevel(ph.topic) >= 2 ? 1 : 0));
  const extra = [];
  for (const w of shuffle([...new Set(pool)])) {
    if (extra.length >= extraN) break;
    if (!have.has(w.toLowerCase())) { extra.push(en && w === "I" ? w : w.toLowerCase()); have.add(w.toLowerCase()); }
  }
  const bank = shuffle([...target, ...extra].map((w, i) => ({ w, i })));
  let chosen = [];
  stage.innerHTML = `<p class="duo-q">${en ? "Переведите на английский" : "Переведите на русский"}</p>
    <div class="duo-prompt">${en ? "" : speakRow(ph)}<span class="duo-en">${esc(en ? ph.ru : ph.en)}</span></div>
    <div class="duo-ans" id="duoAns"></div><div class="duo-bank" id="duoBank"></div>
    <div class="row duo-actions"><button class="btn primary" id="duoCheck" disabled>Проверить</button><button class="btn ghost" id="duoSkip">Не знаю</button></div>`;
  if (!en) speak(ph.en);
  const ans = stage.querySelector("#duoAns"), bk = stage.querySelector("#duoBank"), chk = stage.querySelector("#duoCheck");
  const draw = () => {
    ans.innerHTML = chosen.map((c) => `<button class="duo-tile" data-a="${c.i}">${esc(c.w)}</button>`).join("");
    bk.innerHTML = bank.map((c) => `<button class="duo-tile ${chosen.includes(c) ? "used" : ""}" data-b="${c.i}" ${chosen.includes(c) ? "disabled" : ""}>${esc(c.w)}</button>`).join("");
    chk.disabled = !chosen.length;
    ans.querySelectorAll("[data-a]").forEach((b) => (b.onclick = () => { if (ses.locked) return; chosen = chosen.filter((c) => c.i !== +b.dataset.a); draw(); }));
    bk.querySelectorAll("[data-b]").forEach((b) => (b.onclick = () => { if (ses.locked) return; chosen.push(bank.find((c) => c.i === +b.dataset.b)); draw(); }));
  };
  draw();
  const done = (skip) => {
    if (ses.locked) return;
    const got = chosen.map((c) => c.w).join(" ");
    const good = !skip && (en ? judge(got, ph.en) === "ok" : normRu(got) === normRu(target.join(" ")));
    stage.querySelectorAll(".duo-tile").forEach((b) => (b.disabled = true));
    ans.classList.add(good ? "right" : "wrong");
    answer(good ? "ok" : "bad", en ? ph.en : ph.ru, ph.en);
  };
  chk.onclick = () => done(false);
  stage.querySelector("#duoSkip").onclick = () => done(true);
  ses.canCheck = () => chosen.length > 0;
  ses.checkNow = () => done(false);
}

/* d, e) ввод с клавиатуры: на слух или перевод с русского */
function drawInput(stage, t, listen) {
  const ph = t.ph;
  stage.innerHTML = `<p class="duo-q">${listen ? "Прослушайте и напишите по-английски" : "Напишите перевод на английском"}</p>
    <div class="duo-prompt">${listen ? `<span class="say-pair"><button class="say duo-big" data-say="${esc(ph.en)}" title="Послушать">🔊</button><button class="say slow duo-big" data-say="${esc(ph.en)}" data-slow="1" title="Очень медленно">🐢</button></span>` : `<span class="duo-en">${esc(ph.ru)}</span>`}</div>
    <input type="text" class="duo-input" id="duoIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Английский текст…">
    <div class="row duo-actions"><button class="btn primary" id="duoCheck" disabled>Проверить</button><button class="btn ghost" id="duoSkip">Не знаю</button></div>`;
  const inp = stage.querySelector("#duoIn"), chk = stage.querySelector("#duoCheck");
  if (listen) speak(ph.en);
  inp.focus({ preventScroll: true });
  inp.addEventListener("input", () => (chk.disabled = !inp.value.trim()));
  inp.addEventListener("keydown", (e) => { if (e.key === "Enter") e.preventDefault(); });
  const done = (skip) => {
    if (ses.locked) return;
    const res = skip ? "bad" : judge(inp.value, ph.en);
    inp.disabled = true;
    inp.classList.add(res === "bad" ? "wrong" : "right");
    answer(res, ph.en, ph.en);
  };
  chk.onclick = () => done(false);
  stage.querySelector("#duoSkip").onclick = () => done(true);
  ses.canCheck = () => !!inp.value.trim();
  ses.checkNow = () => done(false);
}

/* f) пары: английские слева, русские справа */
function drawPairs(stage, t) {
  const group = t.group, wrongIds = new Set();
  let selL = null, selR = null, left = group.length;
  stage.innerHTML = `<p class="duo-q">Найдите пары</p><div class="duo-pairs"><div class="duo-col" id="pL"></div><div class="duo-col" id="pR"></div></div>`;
  const mk = (id, key) => {
    const col = stage.querySelector(id);
    col.innerHTML = shuffle(group).map((p) => `<button class="opt duo-pair" data-id="${esc(p.id)}">${esc(p[key])}</button>`).join("");
    return [...col.querySelectorAll(".duo-pair")];
  };
  const bl = mk("#pL", "en"), br = mk("#pR", "ru");
  const test = () => {
    if (!selL || !selR) return;
    const x = selL, y = selR;
    selL = selR = null;
    if (x.dataset.id === y.dataset.id) {
      for (const b of [x, y]) { b.classList.remove("sel"); b.classList.add("right"); b.disabled = true; }
      if (!wrongIds.has(x.dataset.id)) addPhraseStat(x.dataset.id, true);
      if (!--left) answer(wrongIds.size ? "bad" : "ok", "", BY_ID.get(x.dataset.id).en);
    } else {
      for (const id of [x.dataset.id, y.dataset.id]) { wrongIds.add(id); addPhraseStat(id, false); }
      x.classList.add("wrong"); y.classList.add("wrong");
      setTimeout(() => { x.classList.remove("wrong", "sel"); y.classList.remove("wrong", "sel"); }, 450);
    }
  };
  bl.forEach((b) => (b.onclick = () => {
    if (b.disabled || ses.locked) return;
    bl.forEach((o) => o.classList.remove("sel"));
    b.classList.add("sel"); selL = b;
    speak(BY_ID.get(b.dataset.id).en);
    test();
  }));
  br.forEach((b) => (b.onclick = () => {
    if (b.disabled || ses.locked) return;
    br.forEach((o) => o.classList.remove("sel"));
    b.classList.add("sel"); selR = b;
    test();
  }));
}

/* ------------------------------ итог ------------------------------ */
function finish() {
  document.getElementById("duoFoot")?.classList.add("hide");
  removeKey();
  const s = ses;
  const bonus = s.errs === 0 ? 5 : 0;
  const mins = Math.max(1, Math.round((Date.now() - s.t0) / 60000));
  if (bonus) addXp(bonus);
  logTime("words", mins, `Фразы: ${s.title}`, false); // XP уже начислен за ответы
  markToday("duo");
  const acc = s.attempts ? Math.round((s.firstOk / s.attempts) * 100) : 100;
  const goal = D().goal || 30, xp = xpToday();
  const topic = s.topicId && TOPIC.get(s.topicId);
  const lvl = topic ? topicStat(topic).lvl : null;
  const root = document.getElementById("duoRoot");
  root.innerHTML = `<div class="card duo-done"><div class="duo-owl">🦉</div><h2>${s.errs === 0 ? "Без единой ошибки!" : "Сессия пройдена!"}</h2>
    <div class="duo-stats"><div><b>⚡ +${s.xp + bonus}</b><span class="small muted">XP${bonus ? " (бонус +5)" : ""}</span></div><div><b>🎯 ${acc}%</b><span class="small muted">точность</span></div><div><b>⏱ ${mins}</b><span class="small muted">мин</span></div></div>
    <div class="bar ${xp >= goal ? "ok" : ""}" style="margin:12px 0 4px"><i style="width:${Math.min(100, Math.round((xp / goal) * 100))}%"></i></div>
    <p class="small muted">Сегодня ${xp} из ${goal} XP${lvl != null ? ` · уровень темы «${esc(topic.title)}»: ${lvl}/5` : ""}</p>
    <div class="row" style="gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn primary" data-again>Ещё раз</button><a class="btn" href="#/duo">К темам</a></div></div>`;
  root.querySelector("[data-again]").onclick = () => renderDuo(document.getElementById("app"), s.kind === "review" ? "review" : s.topicId);
}
