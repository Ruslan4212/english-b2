// Плавающая панель ИИ-наставника: «объясни подробнее» из урока и свободные вопросы.
import { $, esc } from "./util.js";
import { explain, askTutor, NO_AI } from "./ai.js";
import { currentLevel } from "./progress.js";

let history = []; // [{role, content}]

function addMsg(cls, text) {
  const body = $("#helperBody");
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.textContent = text;
  body.append(div);
  body.scrollTop = body.scrollHeight;
  return div;
}

function quick() {
  const body = $("#helperBody");
  if (body.querySelector(".quick")) return;
  const q = document.createElement("div");
  q.className = "quick";
  for (const t of ["Объясни проще", "Дай ещё примеров", "Чем это отличается от русского?", "Как это запомнить?"]) {
    const b = document.createElement("button");
    b.className = "btn sm";
    b.textContent = t;
    b.onclick = () => send(t);
    q.append(b);
  }
  body.append(q);
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
    addMsg("ai", "Привет! Я ваш наставник. Если тема непонятна — спросите, объясню по-другому, с примерами из жизни. Можно писать по-русски.");
  }
  if (req?.mode === "explain") runExplain(req);
  setTimeout(() => $("#helperInput").focus(), 50);
}

async function runExplain(req) {
  addMsg("me", req.attempt ? `Не понимаю: ${req.topic}\n(моя попытка: ${req.attempt})` : `Объясни подробнее: ${req.topic}`);
  const wait = addMsg("ai typing", "Думаю");
  const text = await explain({ lesson: req.lesson, topic: req.topic, context: req.context, attempt: req.attempt, level: req.level || currentLevel() });
  wait.remove();
  const answer = text || NO_AI;
  addMsg("ai", answer);
  history.push({ role: "user", content: `Объясни тему: ${req.topic}` }, { role: "assistant", content: answer.slice(0, 1500) });
  quick();
}

async function send(text) {
  if (!text.trim()) return;
  addMsg("me", text);
  history.push({ role: "user", content: text });
  const wait = addMsg("ai typing", "Думаю");
  const c = window.__ctx;
  const answer = await askTutor(history, c ? `${c.lesson} — ${c.step}` : ctxText(), currentLevel());
  wait.remove();
  addMsg("ai", answer || NO_AI);
  if (answer) history.push({ role: "assistant", content: answer.slice(0, 1500) });
  history = history.slice(-12);
}

export function initHelper() {
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

export { esc };
