// Интервальное повторение как в Anki (упрощённый SM-2).
// Карточка без due — «новая»: она ещё не показывалась. В день вводится ограниченное
// число новых (план: 8–10 в фазе A1), остальное — повторение тех, чей срок настал.
import { S, update } from "./store.js?v=20261026a";
import { today, addDays } from "./util.js?v=20261026a";

export function newLimit(phase) {
  return phase <= 1 ? 10 : phase === 2 ? 12 : 15;
}

export function queue(phase, deck = "all") {
  const s = S();
  const d = today();
  const all = Object.entries(s.cards).filter(([, c]) => deck === "all" || c.deck === deck);
  const due = all.filter(([, c]) => c.due && c.due <= d).sort((a, b) => (a[1].due < b[1].due ? -1 : 1));
  const introduced = s.newLog[d] || 0;
  const room = Math.max(0, newLimit(phase) - introduced);
  // свои фразы — в приоритете: их ученик выбрал сам
  const fresh = all
    .filter(([, c]) => !c.due)
    .sort((a, b) => (a[1].deck === "mine") === (b[1].deck === "mine") ? (a[1].added < b[1].added ? -1 : 1) : a[1].deck === "mine" ? -1 : 1)
    .slice(0, room);
  return { due, fresh, total: all.length };
}

/** Предпросмотр интервала для кнопки, в днях. */
export function preview(card, grade) {
  return next(card, grade).ivl;
}

function next(c, grade) {
  // grade: 0 — снова, 1 — трудно, 2 — хорошо, 3 — легко
  let { ivl = 0, ease = 2.5, reps = 0, lapses = 0 } = c;
  if (grade === 0) {
    lapses++;
    reps = 0;
    ivl = 0; // покажем ещё раз сегодня
    ease = Math.max(1.3, ease - 0.2);
  } else {
    reps++;
    if (reps === 1) ivl = grade === 1 ? 1 : grade === 2 ? 1 : 3;
    else if (reps === 2) ivl = grade === 1 ? 2 : grade === 2 ? 3 : 6;
    else ivl = Math.max(ivl + 1, Math.round(ivl * (grade === 1 ? 1.2 : grade === 2 ? ease : ease * 1.3)));
    if (grade === 1) ease = Math.max(1.3, ease - 0.15);
    if (grade === 3) ease += 0.15;
  }
  return { ivl, ease, reps, lapses };
}

export function grade(id, g) {
  update((s) => {
    const c = s.cards[id];
    if (!c) return;
    const d = today();
    if (!c.due) s.newLog[d] = (s.newLog[d] || 0) + 1;
    Object.assign(c, next(c, g));
    c.due = addDays(d, c.ivl);
    c.last = d;
    c.lastGrade = g;
    c.mod = Date.now();
    s.reviewDays[d] = (s.reviewDays[d] || 0) + 1;
  });
}

export function stats() {
  const s = S();
  const cards = Object.values(s.cards);
  const learned = cards.filter((c) => c.due).length;
  const mature = cards.filter((c) => c.ivl >= 21).length;
  // точность за последние 7 дней — критерий контрольной точки (≥85%)
  const week = addDays(today(), -7);
  const recent = cards.filter((c) => c.last && c.last >= week);
  const ok = recent.filter((c) => c.lastGrade > 0).length;
  return { total: cards.length, learned, mature, accuracy: recent.length ? Math.round((ok / recent.length) * 100) : null };
}
