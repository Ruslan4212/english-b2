// Рендер шагов урока и упражнений. Каждый шаг получает ctx:
//  ctx.done(stat)  — шаг пройден ({ total, firstTry }), можно идти дальше
//  ctx.mistake(wrong, right, why) — записать ошибку в «Мои ошибки»
//  ctx.explain(topic, context, attempt) — открыть ИИ-наставника с объяснением
//  ctx.level — уровень ученика для ИИ-проверки
import { esc, md, inline, matches, closeness, shuffle, norm, pz } from "./util.js";
import { speak, hasASR, listen, similarity } from "./speech.js";
import { checkAnswer } from "./ai.js";

const sayBtn = (text, slow = false) => `<button class="say" data-say="${esc(text)}" ${slow ? 'data-slow="1"' : ""} title="Послушать">🔊</button>`;
/** 🔊 обычная скорость + 🐢 очень медленно, по словам. */
const sayBoth = (text) => `<span class="say-pair">${sayBtn(text)}<button class="say slow" data-say="${esc(text)}" data-slow="1" title="Очень медленно, по словам">🐢</button></span>`;

/** Любая кнопка data-say внутри root озвучивает свой текст. */
export function bindSay(root) {
  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) {
      e.preventDefault();
      speak(b.dataset.say, { slow: !!b.dataset.slow });
    }
  });
}

const helpBtn = `<button class="btn sm ghost" data-help>🤖 Непонятно — объясни подробнее</button>`;

function head(step) {
  return (step.h ? `<h2>${inline(step.h)}</h2>` : "") + (step.intro ? `<p class="muted">${inline(step.intro)}</p>` : "");
}

function stepText(step) {
  // текст шага для ИИ-контекста
  const items = (step.items || []).map((x) => (Array.isArray(x) ? x.filter((y) => typeof y === "string").join(" — ") : "")).join("\n");
  return [step.h, step.md, items, (step.lines || []).map((l) => l[1]).join("\n")].filter(Boolean).join("\n").slice(0, 2400);
}

export function renderStep(step, root, ctx) {
  step = pz(step); // метки {N}/{NR}/{NS} → имя ученика, до рендера и сверки ответов
  const kinds = { text, examples, choice, fill, order, translate, dictation, speakStep, dialog };
  const fn = kinds[step.t === "speak" ? "speakStep" : step.t];
  root.innerHTML = "";
  if (!fn) {
    root.innerHTML = `<p>Неизвестный шаг: ${esc(step.t)}</p>`;
    ctx.done({ total: 0, firstTry: 0 });
    return;
  }
  fn(step, root, ctx);
  root.querySelectorAll("[data-help]").forEach((b) =>
    b.addEventListener("click", () => ctx.explain(step.h || "этот шаг урока", stepText(step), root.dataset.lastAttempt || "")),
  );
}

/* ------------------------------ теория ------------------------------ */
function text(step, root, ctx) {
  root.innerHTML = head(step) + md(step.md) + `<div class="row" style="margin-top:12px">${helpBtn}</div>`;
  ctx.done({ total: 0, firstTry: 0 });
}

function examples(step, root, ctx) {
  root.innerHTML =
    head(step) +
    `<div class="row" style="margin:6px 0 10px"><button class="btn sm" data-all>▶ Прослушать все подряд</button></div>` +
    step.items
      .map(
        ([en, ru, note]) =>
          `<div class="ex-line">${sayBoth(en.replace(/ — /g, ", "))}<div><div class="en">${esc(en)}</div><div class="ru">${esc(ru || "")}</div>${note ? `<div class="note">${esc(note)}</div>` : ""}</div></div>`,
      )
      .join("") +
    `<div class="row" style="margin-top:12px">${helpBtn}</div>`;
  root.querySelector("[data-all]").onclick = async () => {
    for (const [en] of step.items) await speak(en.replace(/ — /g, ", "));
  };
  ctx.done({ total: 0, firstTry: 0 });
}

/* --------------------------- движок заданий --------------------------- */
/**
 * Общая логика: задания по очереди; ошибка → объяснение и правильный ответ,
 * а задание возвращается в конец очереди. Шаг пройден, когда всё решено.
 */
function drill(step, root, ctx, renderItem) {
  const items = step.items.map((it, i) => ({ it, i }));
  let queue = [...items];
  const firstWrong = new Set();
  const total = items.length;
  // вложенный блок (вопросы к диалогу) не дублирует кнопку помощи родительского шага
  root.innerHTML = head(step) + `<div class="muted small" data-count></div><div data-item></div>${step.noHelp ? "" : `<div class="row" style="margin-top:10px">${helpBtn}</div>`}`;
  const box = root.querySelector("[data-item]");
  const count = root.querySelector("[data-count]");

  const nextItem = () => {
    if (!queue.length) {
      const firstTry = total - firstWrong.size;
      box.innerHTML = `<div class="feedback ok">✅ Готово! С первого раза: ${firstTry} из ${total}.${firstWrong.size ? " Ошибки записаны в «Мои ошибки» — вернёмся к ним на неделе." : ""}</div>`;
      ctx.done({ total, firstTry });
      return;
    }
    const cur = queue[0];
    count.textContent = `Задание ${total - queue.length + 1} из ${total}${firstWrong.has(cur.i) ? " · повтор" : ""}`;
    renderItem(cur.it, box, (ok, info = {}) => {
      if (!ok && !firstWrong.has(cur.i)) {
        firstWrong.add(cur.i);
        ctx.mistake(info.wrong ?? "", info.right ?? "", info.why ?? "");
      }
      root.dataset.lastAttempt = ok ? "" : info.attempt || "";
      const fb = document.createElement("div");
      fb.className = "feedback " + (ok ? "ok" : "bad");
      fb.innerHTML = (ok ? "✅ " + (info.okMsg || "Верно!") : "❌ " + (info.badMsg || "Пока нет.")) + (info.why ? `<div style="margin-top:4px">${inline(info.why)}</div>` : "");
      const nav = document.createElement("div");
      nav.className = "row";
      nav.style.marginTop = "8px";
      nav.innerHTML = `<button class="btn primary sm" data-next>${ok ? "Дальше →" : "Понятно, дальше →"}</button>` +
        (!ok ? `<button class="btn sm ghost" data-why>🤖 Почему так?</button>` : "");
      box.append(fb, nav);
      queue.shift();
      if (!ok) queue.push(cur);
      nav.querySelector("[data-next]").onclick = nextItem;
      nav.querySelector("[data-next]").focus();
      const why = nav.querySelector("[data-why]");
      if (why) why.onclick = () => ctx.explain(step.h || "упражнение", `${info.task || ""}\nПравильный ответ: ${info.right || ""}\n${info.why || ""}`, info.attempt || "");
    });
  };
  nextItem();
}

/* ------------------------------ выбор ------------------------------ */
function choice(step, root, ctx) {
  drill(step, root, ctx, ([q, opts, a, why], box, answer) => {
    const order = shuffle(opts.map((o, i) => i));
    box.innerHTML =
      `<div class="ex-item"><div class="ex-q">${step.listen ? `${sayBoth(q)} <span class="muted">Нажмите 🔊 и выберите, что услышали</span>` : inline(q || "Какой вариант правильный?")}</div>` +
      `<div class="opts">${order.map((i) => `<button class="opt" data-i="${i}">${inline(opts[i])}</button>`).join("")}</div></div>`;
    if (step.listen) speak(q);
    box.querySelectorAll(".opt").forEach((b) =>
      (b.onclick = () => {
        const i = +b.dataset.i;
        box.querySelectorAll(".opt").forEach((x) => {
          x.disabled = true;
          if (+x.dataset.i === a) x.classList.add("right");
        });
        if (i !== a) b.classList.add("wrong");
        answer(i === a, { why, wrong: `${step.listen ? q : q.replace(/\*\*/g, "")} → ${opts[i]}`, right: opts[a], task: q, attempt: `выбрал «${opts[i]}», верно «${opts[a]}»` });
      }),
    );
  });
}

/* --------------------------- пропуск слова --------------------------- */
function fill(step, root, ctx) {
  drill(step, root, ctx, ([q, a, why, hint], box, answer) => {
    const html = inline(q).replace(/_{2,}/, `<input type="text" data-in style="width:auto;min-width:120px;display:inline-block" autocomplete="off" autocapitalize="off" spellcheck="false">`);
    box.innerHTML = `<div class="ex-item"><div class="ex-q">${html}</div>${hint ? `<div class="muted small">Подсказка: ${inline(hint)}</div>` : ""}<div class="row" style="margin-top:8px"><button class="btn primary sm" data-check>Проверить</button><button class="btn sm ghost" data-show>Показать ответ</button></div></div>`;
    const input = box.querySelector("[data-in]");
    input.focus();
    const right = String(a).split("|")[0];
    const check = (give = false) => {
      const v = input.value;
      if (!give && !v.trim()) return input.focus();
      input.disabled = true;
      box.querySelectorAll("[data-check],[data-show]").forEach((b) => b.remove());
      const full = q.replace(/_{2,}/, right);
      if (!give && matches(v, a)) {
        answer(true, { why: why, okMsg: `Верно: ${full}` });
        speak(full);
      } else {
        const c = closeness(v, a);
        answer(false, {
          badMsg: give ? `Ответ: <b>${esc(right)}</b> → ${esc(full)}` : c.typo ? `Похоже на опечатку. Правильно: <b>${esc(c.best)}</b>` : `Правильно: <b>${esc(right)}</b> → ${esc(full)}`,
          why,
          wrong: `${q.replace(/_{2,}/, "[" + (v || "—") + "]")}`,
          right: full,
          task: q,
          attempt: `вписал «${v}», верно «${right}»`,
        });
      }
    };
    box.querySelector("[data-check]").onclick = () => check();
    box.querySelector("[data-show]").onclick = () => check(true);
    input.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); check(); } };
  });
}

/* --------------------------- порядок слов --------------------------- */
function order(step, root, ctx) {
  drill(step, root, ctx, ([en, ru, why], box, answer) => {
    const words = en.replace(/[.?!]$/, "").split(" ");
    const end = (en.match(/[.?!]$/) || [""])[0];
    let pool = shuffle(words.map((w, i) => ({ w, i })));
    if (pool.map((x) => x.w).join(" ") === words.join(" ") && words.length > 1) pool = pool.reverse();
    const picked = [];
    box.innerHTML = `<div class="ex-item"><div class="ex-q">Соберите предложение: <b>${esc(ru)}</b></div><div class="words" data-ans></div><div class="words" data-pool style="border-style:solid"></div><div class="row"><button class="btn primary sm" data-check>Проверить</button><button class="btn sm ghost" data-reset>Сбросить</button></div></div>`;
    const ans = box.querySelector("[data-ans]");
    const pl = box.querySelector("[data-pool]");
    const draw = () => {
      ans.innerHTML = picked.map((x, k) => `<span class="word" data-k="${k}">${esc(x.w)}</span>`).join("") || `<span class="muted small">нажимайте на слова снизу по порядку</span>`;
      pl.innerHTML = pool.filter((x) => !picked.includes(x)).map((x) => `<span class="word" data-i="${x.i}">${esc(x.w)}</span>`).join("");
      pl.querySelectorAll(".word").forEach((el) => (el.onclick = () => { picked.push(pool.find((x) => x.i === +el.dataset.i)); draw(); }));
      ans.querySelectorAll(".word").forEach((el) => (el.onclick = () => { picked.splice(+el.dataset.k, 1); draw(); }));
    };
    draw();
    box.querySelector("[data-reset]").onclick = () => { picked.length = 0; draw(); };
    box.querySelector("[data-check]").onclick = () => {
      if (picked.length < words.length) return;
      const got = picked.map((x) => x.w).join(" ") + end;
      box.querySelectorAll("[data-check],[data-reset]").forEach((b) => b.remove());
      pl.remove();
      const ok = norm(got) === norm(en);
      speak(en);
      answer(ok, { okMsg: esc(en), badMsg: `Правильный порядок: <b>${esc(en)}</b>`, why, wrong: got, right: en, task: `Соберите: ${ru}`, attempt: `собрал «${got}»` });
    };
  });
}

/* ------------------------------ перевод ------------------------------ */
function translate(step, root, ctx) {
  drill(step, root, ctx, ([ru, a, why], box, answer) => {
    box.innerHTML = `<div class="ex-item"><div class="ex-q">Переведите на английский: <b>${esc(ru)}</b></div><input type="text" data-in autocomplete="off" autocapitalize="off" spellcheck="false"><div class="row" style="margin-top:8px"><button class="btn primary sm" data-check>Проверить</button><button class="btn sm ghost" data-show>Показать ответ</button></div></div>`;
    const input = box.querySelector("[data-in]");
    input.focus();
    const variants = String(a).split("|");
    const check = async (give = false) => {
      const v = input.value.trim();
      if (!give && !v) return input.focus();
      input.disabled = true;
      box.querySelectorAll("[data-check],[data-show]").forEach((b) => b.remove());
      if (!give && matches(v, variants)) {
        speak(v);
        return answer(true, { okMsg: "Верно!", why: variants.length > 1 ? `Также можно: ${variants.filter((x) => norm(x) !== norm(v)).join(" / ")}` : why });
      }
      if (!give) {
        // эталон знает не все верные варианты — спрашиваем наставника
        const wait = document.createElement("div");
        wait.className = "feedback info";
        wait.innerHTML = `<span class="typing">🤖 Ваш вариант не совпал с эталоном — проверяю, может, он тоже верный</span>`;
        box.append(wait);
        const r = await checkAnswer(`Перевести на английский: «${ru}»`, variants.join(" / "), v, ctx.level);
        wait.remove();
        if (r?.correct) return answer(true, { okMsg: "Верно! (проверил ИИ-наставник)", why: r.feedback + `<br>Эталон: ${esc(variants[0])}` });
        if (r) return answer(false, { badMsg: `Правильно: <b>${esc(variants[0])}</b>`, why: r.feedback, wrong: v, right: variants[0], task: ru, attempt: `перевёл «${v}»` });
      }
      const c = closeness(v, variants);
      answer(false, {
        badMsg: give ? `Ответ: <b>${esc(variants[0])}</b>` : c.typo ? `Почти! Похоже на опечатку: <b>${esc(c.best)}</b>` : `Правильно: <b>${esc(variants[0])}</b>`,
        why,
        wrong: v || "—",
        right: variants[0],
        task: ru,
        attempt: `перевёл «${v}»`,
      });
      speak(variants[0]);
    };
    box.querySelector("[data-check]").onclick = () => check();
    box.querySelector("[data-show]").onclick = () => check(true);
    input.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); check(); } };
  });
}

/* ------------------------------ диктант ------------------------------ */
function dictation(step, root, ctx) {
  drill(step, root, ctx, ([en, ru], box, answer) => {
    box.innerHTML = `<div class="ex-item"><div class="ex-q row"><button class="btn sm" data-play>▶ Слушать</button><button class="btn sm ghost" data-slow>🐢 Очень медленно</button><span class="muted small">Напишите, что услышали</span></div><input type="text" data-in autocomplete="off" autocapitalize="off" spellcheck="false"><div class="row" style="margin-top:8px"><button class="btn primary sm" data-check>Проверить</button></div></div>`;
    const input = box.querySelector("[data-in]");
    box.querySelector("[data-play]").onclick = () => speak(en);
    box.querySelector("[data-slow]").onclick = () => speak(en, { slow: true });
    speak(en);
    input.focus();
    const check = () => {
      const v = input.value.trim();
      if (!v) return;
      input.disabled = true;
      box.querySelector("[data-check]").remove();
      const ok = matches(v, en);
      const typo = !ok && closeness(v, en).typo;
      answer(ok, { okMsg: `${esc(en)} — ${esc(ru)}`, badMsg: `${typo ? "Почти! " : ""}Было: <b>${esc(en)}</b> — ${esc(ru)}`, wrong: v, right: en, task: "Диктант", attempt: `написал «${v}», звучало «${en}»` });
    };
    box.querySelector("[data-check]").onclick = check;
    input.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); check(); } };
  });
}

/* ---------------------------- говорение ---------------------------- */
function speakStep(step, root, ctx) {
  let i = 0;
  root.innerHTML = head(step) + `<div data-box></div><div class="row" style="margin-top:10px">${helpBtn}</div>`;
  const box = root.querySelector("[data-box]");
  const draw = () => {
    if (i >= step.items.length) {
      box.innerHTML = `<div class="feedback ok">✅ Отлично! Говорить вслух — лучший способ запомнить.</div>`;
      ctx.done({ total: 0, firstTry: 0 });
      return;
    }
    const [en, ru] = step.items[i];
    box.innerHTML = `<div class="ex-item"><div class="ex-q">${sayBoth(en)} <b>${esc(en)}</b></div><div class="muted">${esc(ru)}</div><div class="row" style="margin-top:8px">${hasASR() ? `<button class="btn primary sm" data-mic>🎤 Сказать</button>` : ""}<button class="btn sm" data-ok>Сказал(а) вслух →</button></div><div data-res></div></div>`;
    speak(en);
    box.querySelector("[data-ok]").onclick = () => { i++; draw(); };
    const mic = box.querySelector("[data-mic]");
    if (mic)
      mic.onclick = async () => {
        mic.disabled = true;
        mic.textContent = "🔴 Говорите…";
        const alts = await listen();
        mic.disabled = false;
        mic.textContent = "🎤 Ещё раз";
        const res = box.querySelector("[data-res]");
        if (!alts) {
          res.innerHTML = `<div class="feedback info">Не расслышал. Проверьте микрофон или просто скажите вслух и нажмите «Сказал(а)».</div>`;
          return;
        }
        const best = alts.map((a) => ({ a, s: similarity(a, en) })).sort((x, y) => y.s - x.s)[0];
        const pct = Math.round(best.s * 100);
        res.innerHTML = `<div class="feedback ${pct >= 80 ? "ok" : "bad"}">Распознано: «${esc(best.a)}» — совпадение ${pct}%.${pct >= 80 ? " Отлично!" : " Послушайте образец ещё раз и повторите медленнее, чётко произнося каждое слово."}</div>`;
      };
  };
  draw();
}

/* ------------------------------ диалог ------------------------------ */
export function dialog(step, root, ctx) {
  let plays = 0;
  root.innerHTML =
    head(step) +
    `<div class="row" style="margin-bottom:10px"><button class="btn primary sm" data-play>▶ Слушать диалог</button><button class="btn sm" data-shadow>🗣 Shadowing по фразам</button><label class="small"><input type="checkbox" data-blur> скрыть текст</label><span class="muted small" data-plays></span></div>` +
    `<div class="dlg" data-dlg>${step.lines
      .map(([who, en, ru], k) => `<div class="dlg-line" data-k="${k}"><div class="who">${esc(who)}</div><div><div class="en hideable">${esc(en)}</div><div class="ru">${esc(ru)}</div></div>${sayBoth(en)}</div>`)
      .join("")}</div><div data-qs style="margin-top:12px"></div><div class="row" style="margin-top:10px">${helpBtn}</div>`;
  const dlg = root.querySelector("[data-dlg]");
  const playsEl = root.querySelector("[data-plays]");
  const mark = (k) => dlg.querySelectorAll(".dlg-line").forEach((el) => el.classList.toggle("cur", +el.dataset.k === k));
  let stop = false;
  root.querySelector("[data-blur]").onchange = (e) => dlg.classList.toggle("blur", e.target.checked);
  root.querySelector("[data-play]").onclick = async () => {
    stop = false;
    for (let k = 0; k < step.lines.length && !stop; k++) {
      mark(k);
      await speak(step.lines[k][1]);
      await new Promise((r) => setTimeout(r, 350));
    }
    mark(-1);
    plays++;
    playsEl.textContent = `прослушано: ${plays} ${plays >= 3 ? "✓" : "(план: 3 раза)"}`;
    ctx.listened?.(plays, false);
  };
  root.querySelector("[data-shadow]").onclick = async () => {
    stop = false;
    for (let k = 0; k < step.lines.length && !stop; k++) {
      mark(k);
      await speak(step.lines[k][1]);
      // пауза на повтор: время ≈ длина фразы
      await new Promise((r) => setTimeout(r, 900 + step.lines[k][1].length * 70));
    }
    mark(-1);
    ctx.listened?.(plays, true);
  };
  const qsBox = root.querySelector("[data-qs]");
  if (step.qs?.length) {
    const sub = document.createElement("div");
    qsBox.append(sub);
    choice({ h: "Вопросы к диалогу", items: step.qs, noHelp: true }, sub, { ...ctx, done: (s) => ctx.done(s) });
  } else ctx.done({ total: 0, firstTry: 0 });
}
