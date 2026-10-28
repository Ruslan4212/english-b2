// Петля мотивации в духе Duolingo для ВСЕГО курса, а не только «Фраз»: общий XP, серия дней с заморозками,
// задания дня, недельная «лига с собой» и достижения. Всё выводится из уже хранимых данных (duo.xp, log, lessons,
// reviewDays) — отдельного состояния нет, поэтому слияние с облаком (merge.js) ничего не теряет.
import { S } from "./store.js?v=20261028b";
import { esc, today, addDays } from "./util.js?v=20261028b";

const FREEZE_EVERY = 7; // заморозка серии за каждые 7 дней подряд
const FREEZE_MAX = 2; // больше двух в запасе не копится (как в Duolingo)

const xpMap = () => S().duo?.xp || {};
export const xpOn = (d) => xpMap()[d] || 0;
export const xpToday = () => xpOn(today());
export const goal = () => (S().duo?.goal > 0 ? S().duo.goal : 30);

/**
 * Серия: проход по дням от первого дня с XP до вчера. День без XP «закрывается» заморозкой, если она есть
 * в запасе, иначе серия рвётся. Сегодня без XP серию не рвёт — день ещё не кончился.
 */
export function streakInfo() {
  const days = Object.keys(xpMap()).filter((d) => xpOn(d) > 0).sort();
  const t = today();
  let n = 0, freezes = 0, frozen = [], best = 0;
  if (days.length) {
    for (let d = days[0]; d < t; d = addDays(d, 1)) {
      if (xpOn(d) > 0) {
        n++;
        if (n % FREEZE_EVERY === 0) freezes = Math.min(FREEZE_MAX, freezes + 1);
      } else if (n > 0 && freezes > 0) {
        freezes--;
        frozen.push(d);
      } else n = 0;
      best = Math.max(best, n);
    }
  }
  if (xpOn(t) > 0) n++;
  best = Math.max(best, n);
  return { n, freezes, frozen, best, todayDone: xpOn(t) > 0 };
}

/* ------------------------------ задания дня ------------------------------ */
const minToday = (block) => S().log.filter((r) => r.date === today() && (!block || r.block === block)).reduce((a, r) => a + r.min, 0);
const lessonsToday = () => Object.values(S().lessons || {}).filter((l) => l?.done && l.date === today()).length;

const POOL = [
  { id: "lesson", icon: "📘", title: "Пройдите урок курса", need: 1, have: lessonsToday, href: "#/grammar" },
  { id: "cards", icon: "🃏", title: "Повторите 20 карточек", need: 20, have: () => S().reviewDays?.[today()] || 0, href: "#/words" },
  { id: "listen", icon: "🎧", title: "Слушайте 10 минут", need: 10, have: () => minToday("listen"), href: "#/listen" },
  { id: "speak", icon: "🗣️", title: "Поговорите с Мией 10 минут", need: 10, have: () => minToday("speak"), href: "#/speak" },
  { id: "read", icon: "📖", title: "Прочитайте текст", need: 5, have: () => minToday("read"), href: "#/read" },
  { id: "write", icon: "✍️", title: "Напишите текст на проверку", need: 10, have: () => minToday("write"), href: "#/write" },
  { id: "time", icon: "⏱", title: "Занимайтесь 30 минут", need: 30, have: () => minToday(), href: "#/today" },
];
const hash = (s) => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); };

/** 3 задания: всегда цель XP + 2 из пула, выбранные по дате (одинаково на всех устройствах). */
export function quests(d = today()) {
  const pool = [...POOL];
  const pick = [];
  for (let k = 0; k < 2; k++) pick.push(pool.splice(hash(d + k) % pool.length, 1)[0]);
  const g = goal();
  return [{ id: "xp", icon: "⚡", title: `Наберите ${g} XP`, need: g, have: xpToday, href: "#/duo" }, ...pick].map((q) => {
    const v = Math.min(q.need, q.have());
    return { ...q, v, done: v >= q.need };
  });
}

/* ------------------------------ лига с собой ------------------------------ */
const mondayOf = (d) => { const wd = (new Date(d + "T00:00:00").getDay() + 6) % 7; return addDays(d, -wd); };
const weekXp = (mon) => { let n = 0; for (let k = 0; k < 7; k++) n += xpOn(addDays(mon, k)); return n; };
/** Соперник — вы сами на прошлой неделе (честнее выдуманных ботов). */
export function league() {
  const mon = mondayOf(today());
  return { cur: weekXp(mon), prev: weekXp(addDays(mon, -7)) };
}

/* ------------------------------ достижения ------------------------------ */
export function badges() {
  const s = S(), st = streakInfo();
  const xpAll = Object.values(xpMap()).reduce((a, x) => a + x, 0);
  const hours = s.log.reduce((a, r) => a + r.min, 0) / 60;
  const lessons = Object.values(s.lessons || {}).filter((l) => l?.done).length;
  const talks = (s.speaking || []).length, texts = (s.writings || []).length;
  const fixed = (s.errors || []).filter((e) => e.fixed).length;
  const tiers = (icon, name, val, steps, unit) => steps.map((x) => ({ icon, name: `${name}: ${x}`, hint: `${Math.min(val, x)}/${x} ${unit}`, on: val >= x }));
  return [
    ...tiers("🔥", "Серия", st.best, [3, 7, 30, 100, 365], "дн."),
    ...tiers("⚡", "Опыт", xpAll, [100, 1000, 5000, 20000], "XP"),
    ...tiers("⏳", "Часы", Math.floor(hours), [10, 100, 370, 550], "ч"),
    ...tiers("📘", "Уроки", lessons, [10, 50, 106], "уроков"),
    ...tiers("🗣️", "Разговоры с Мией", talks, [1, 10, 50], ""),
    ...tiers("✍️", "Тексты", texts, [1, 10, 50], ""),
    ...tiers("🐞", "Исправленные ошибки", fixed, [10, 100], ""),
  ];
}

/* ------------------------------ виджеты ------------------------------ */
const pct = (a, b) => Math.min(100, Math.round((a / Math.max(1, b)) * 100));

/** Карточка для «Сегодня»: серия, XP, задания дня, лига. */
export function todayCard() {
  const st = streakInfo(), xp = xpToday(), g = goal(), q = quests(), lg = league();
  const lgText = lg.cur > lg.prev ? `Вы обгоняете себя прошлой недели на ${lg.cur - lg.prev} XP 🏆` : `До рекорда прошлой недели: ${lg.prev - lg.cur + 1} XP`;
  return `<div class="card gm">
    <div class="duo-stats">
      <div title="Лучшая серия: ${st.best}"><b>${st.todayDone ? "🔥" : "🕯️"} ${st.n}</b><span class="small muted">${st.todayDone ? "дн. подряд" : "сделайте хоть что-то, чтобы продлить"}</span></div>
      <div title="Даётся за каждые ${FREEZE_EVERY} дней подряд, максимум ${FREEZE_MAX}. Спасает серию при пропуске дня."><b>🧊 ${st.freezes}</b><span class="small muted">заморозки</span></div>
      <div><b>⚡ ${xp}/${g}</b><span class="small muted">XP сегодня</span></div>
    </div>
    <div class="bar ${xp >= g ? "ok" : ""}" style="margin:8px 0"><i style="width:${pct(xp, g)}%"></i></div>
    <h3 style="margin:10px 0 6px">Задания дня</h3>
    ${q.map((x) => `<a class="gm-q ${x.done ? "done" : ""}" href="${x.href}"><span>${x.done ? "✅" : x.icon}</span><span class="gm-t">${esc(x.title)}<div class="bar ${x.done ? "ok" : ""}"><i style="width:${pct(x.v, x.need)}%"></i></div></span><span class="small muted">${x.v}/${x.need}</span></a>`).join("")}
    <p class="small muted" style="margin:8px 0 0">🏟 Лига с собой: ${lg.cur} XP за неделю · ${lgText}</p>
  </div>`;
}

export function badgesCard() {
  const b = badges();
  return `<div class="card"><h3>Достижения · ${b.filter((x) => x.on).length}/${b.length}</h3><div class="gm-badges">${b
    .map((x) => `<div class="gm-b ${x.on ? "on" : ""}" title="${esc(x.hint)}"><span>${x.icon}</span><span class="small">${esc(x.name)}</span><span class="small muted">${esc(x.hint)}</span></div>`)
    .join("")}</div></div>`;
}
