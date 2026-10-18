// Весь прогресс ученика — один объект в localStorage. Можно выгрузить/загрузить файлом.
import { today, uid } from "./util.js";

const KEY = "english_b2_path_v1";

const fresh = () => ({
  v: 1,
  profile: null, // { started, hoursPerWeek, startWeek, accent, rate, name }
  day: 0, // индекс текущего учебного дня (0 = неделя 1, понедельник)
  days: {}, // { [dayIndex]: { tasks: { [taskId]: true }, finished: "2026-10-18" } }
  lessons: {}, // { [lessonId]: { done, score, date } }
  cards: {}, // { [id]: { en, ru, deck, src, due, ivl, ease, reps, lapses, added } }
  newLog: {}, // { [date]: сколько новых карточек введено }
  reviewDays: {}, // { [date]: сколько повторено }
  log: [], // [{ date, min, block, note }]
  errors: [], // [{ id, date, src, wrong, right, why, fixed }]
  writings: [], // [{ id, date, task, text, result }]
  speaking: [], // [{ date, topic, turns }]
  checks: {}, // чек-листы: { [id]: { [item]: true } }
  tests: [], // [{ date, kind, result, note }]
  listened: {}, // { [dialogId]: { plays, shadowed, date } }
  read: {}, // { [textId]: { date, score } }
  setup: {}, // выбор учебника, репетитора и т.п.
  lastActive: null,
});

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...fresh(), ...JSON.parse(raw) };
  } catch {
    /* пустое хранилище или приватный режим */
  }
  return fresh();
}

export const S = () => state;

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* хранилище недоступно: прогресс живёт до перезагрузки */
  }
}

export function update(fn) {
  fn(state);
  state.lastActive = today();
  save();
}

export function reset() {
  state = fresh();
  save();
}

export function exportJson() {
  return JSON.stringify(state, null, 1);
}

export function importJson(text) {
  const o = JSON.parse(text);
  if (!o || typeof o !== "object" || o.v !== 1) throw new Error("Это не файл прогресса English B2 Path");
  state = { ...fresh(), ...o };
  save();
}

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
    s.cards[id] = { en, ru, deck, src, due: null, ivl: 0, ease: 2.5, reps: 0, lapses: 0, added: today() };
  });
  return true;
}
