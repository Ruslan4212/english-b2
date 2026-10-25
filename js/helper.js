// Плавающая панель ИИ-репетитора Мии: «объясни подробнее» из урока и свободные вопросы.
import { $, esc, studentName } from "./util.js?v=20261026a";
import { explain, askTutor, translate, NO_AI } from "./ai.js?v=20261026a";
import { currentLevel } from "./progress.js?v=20261026a";
import { avatar, richText, TUTOR } from "./avatar.js?v=20261026a";
import { speakMia } from "./speech.js?v=20261026a";

let history = []; // [{role, content}]

/** Сообщение в чате. Ответы репетитора — с подсветкой терминов, переводом и озвучкой. */
export function renderMsg(box, cls, text, { tools = cls === "ai" } = {}) {
  const div = document.createElement("div");
  div.className = "msg " + cls;
  if (cls.startsWith("ai") && !cls.includes("typing")) div.innerHTML = richText(text, esc);
  else div.textContent = text;
  let node = div;
  if (tools) {
    const row = document.createElement("div");
    row.className = "msg-row";
    row.innerHTML = `<div class="tools"><button class="tbtn" data-tr title="Перевести">文A</button><button class="tbtn" data-sp title="Озвучить">🔊</button></div>`;
    row.prepend(div);
    const plain = text.replace(/==/g, "");
    row.querySelector("[data-sp]").onclick = () => speakMia(/[А-Яа-яЁё]/.test(plain) ? plain.replace(/[^.!?\n]*[А-Яа-яЁё][^.!?\n]*[.!?]?/g, " ") : plain);
    row.querySelector("[data-tr]").onclick = async (e) => {
      const old = div.querySelector(".tr");
      if (old) return old.remove();
      e.currentTarget.disabled = true;
      const t = await translate(text);
      e.currentTarget.disabled = false;
      const span = document.createElement("span");
      span.className = "tr";
      span.innerHTML = t ? richText(t, esc) : "Перевод недоступен";
      div.append(span);
    };
    node = row;
  }
  box.append(node);
  box.scrollTop = box.scrollHeight;
  return node;
}

const addMsg = (cls, text, opt) => renderMsg($("#helperBody"), cls, text, opt);

function quick() {
  const body = $("#helperBody");
  body.querySelector(".quick")?.remove();
  const q = document.createElement("div");
  q.className = "quick";
  for (const t of ["Объясни проще", "Дай ещё примеров", "Чем это отличается от русского?", "Проверь меня"]) {
    const b = document.createElement("button");
    b.className = "btn sm";
    b.textContent = t;
    b.onclick = () => send(t);
    q.append(b);
  }
  body.append(q);
  body.scrollTop = body.scrollHeight;
}

function ctxText() {
  const c = window.__ctx;
  return c ? `урок «${c.lesson}», шаг «${c.step}»` : `раздел ${location.hash.replace("#/", "") || "сегодня"}`;
}

export function openHelper(req) {
  $("#helper").classList.remove("hide");
  $("#fab").classList.add("hide");
  $("#helperCtx").textContent = ctxText();
  if (!$("#helperBody").children.length) {
    addMsg("ai", `Hi${studentName() ? ", " + studentName().en : ""}! Я ${TUTOR.ru}, твой AI-репетитор 😊 Если тема непонятна — спроси, объясню по-другому, с примерами из жизни. Можно писать по-русски. С чем разберёмся?`);
  }
  if (req?.mode === "explain") runExplain(req);
  setTimeout(() => $("#helperInput").focus(), 50);
}

async function runExplain(req) {
  addMsg("me", req.attempt ? `Не понимаю: ${req.topic}\n(моя попытка: ${req.attempt})` : `Объясни подробнее: ${req.topic}`);
  const wait = addMsg("ai typing", `${TUTOR.ru} печатает`, { tools: false });
  const text = await explain({ lesson: req.lesson, topic: req.topic, context: req.context, attempt: req.attempt, level: req.level || currentLevel() });
  wait.remove();
  const answer = text || NO_AI;
  addMsg("ai", answer, { tools: !!text });
  history.push({ role: "user", content: `Объясни тему: ${req.topic}` }, { role: "assistant", content: answer.slice(0, 1500) });
  quick();
}

async function send(text) {
  if (!text.trim()) return;
  $("#helperBody").querySelector(".quick")?.remove();
  addMsg("me", text);
  history.push({ role: "user", content: text });
  const wait = addMsg("ai typing", `${TUTOR.ru} печатает`, { tools: false });
  const c = window.__ctx;
  const answer = await askTutor(history, c ? `${c.lesson} — ${c.step}` : ctxText(), currentLevel());
  wait.remove();
  addMsg("ai", answer || NO_AI, { tools: !!answer });
  if (answer) history.push({ role: "assistant", content: answer.slice(0, 1500) });
  history = history.slice(-12);
}

export function initHelper() {
  $("#fab").innerHTML = `${avatar()}<span>Спросить Мию</span>`;
  $("#helperAva").innerHTML = avatar();
  $("#fab").onclick = () => openHelper();
  $("#helperClose").onclick = () => {
    $("#helper").classList.add("hide");
    $("#fab").classList.remove("hide");
  };
  $("#helperForm").onsubmit = (e) => {
    e.preventDefault();
    const v = $("#helperInput").value;
    $("#helperInput").value = "";
    send(v);
  };
  $("#helperInput").onkeydown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      $("#helperForm").requestSubmit();
    }
  };
}
