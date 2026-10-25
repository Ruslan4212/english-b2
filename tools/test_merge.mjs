// Юнит-тесты слияния прогресса. Запуск: node tools/test_merge.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

// js/merge.js — обычный .js без package.json "type":"module": копируем во временный .mjs и импортируем
const tmp = join(tmpdir(), "eb2_merge_under_test.mjs");
writeFileSync(tmp, readFileSync(fileURLToPath(new URL("../js/merge.js", import.meta.url)), "utf8"));
const { mergeState, isEmptyState, stable } = await import(pathToFileURL(tmp).href);

let fail = 0, n = 0;
const eq = (a, b, name) => {
  n++;
  const A = stable(a), B = stable(b);
  if (A !== B) { fail++; console.log("FAIL:", name, "\n  got:     ", A.slice(0, 300), "\n  expected:", B.slice(0, 300)); }
  else console.log("ok  ", name);
};
const ok = (c, name) => eq(!!c, true, name);
const base = (o = {}) => ({ v: 1, profile: null, day: 0, days: {}, lessons: {}, cards: {}, deletedCards: {}, newLog: {}, reviewDays: {}, log: [], errors: [], writings: [], speaking: [], checks: {}, tests: [], listened: {}, read: {}, setup: {}, lastActive: null, epoch: 0, meta: {}, ...o });
const m = (a, b) => mergeState(base(a), base(b));
/** проверка коммутативности и идемпотентности для конкретной пары */
const prop = (a, b, name) => {
  const ab = m(a, b), ba = m(b, a);
  eq(ab, ba, name + ": коммутативность");
  eq(mergeState(ab, base(b)), ab, name + ": повтор слияния с b");
  eq(mergeState(ab, base(a)), ab, name + ": повтор слияния с a");
  eq(mergeState(ab, ab), ab, name + ": m∘m");
  return ab;
};
const c = (reps, lapses, due) => ({ en: "a", ru: "б", reps, lapses, due, ivl: reps });
const L = (min, id) => ({ date: "2026-10-01", min, block: "words", note: "", ...(id ? { id } : {}) });

// day, lastActive
let r = prop({ day: 5, lastActive: "2026-10-01" }, { day: 9, lastActive: "2026-10-05" }, "day/lastActive");
eq([r.day, r.lastActive], [9, "2026-10-05"], "day=max, lastActive=max");

// days
r = prop(
  { days: { 0: { tasks: { a: true }, finished: "2026-10-03" }, 1: { tasks: { x: true } } } },
  { days: { 0: { tasks: { b: true }, finished: "2026-10-02" }, 2: { tasks: { y: true } } } }, "days");
eq(r.days[0].tasks, { a: true, b: true }, "tasks — объединение");
eq(r.days[0].finished, "2026-10-02", "finished — самая ранняя");
ok(r.days[1] && r.days[2], "односторонние дни сохранены");
r = m({ days: { 0: { tasks: {} } } }, { days: { 0: { tasks: {}, finished: "2026-10-09" } } });
eq(r.days[0].finished, "2026-10-09", "finished: пустая не затирает непустую");

// lessons
r = prop(
  { lessons: { l1: { done: true, score: 70, date: "2026-10-01" }, l2: { done: false, score: 10 } } },
  { lessons: { l1: { done: false, score: 90, date: "2026-10-04" }, l3: { done: true } } }, "lessons");
eq(r.lessons.l1, { done: true, score: 90, date: "2026-10-04" }, "lesson: done OR, score max, date max");
ok(r.lessons.l2 && r.lessons.l3, "уроки с одной стороны сохранены");

// cards
r = prop({ cards: { c1: c(3, 0, "2026-10-10"), c2: c(1, 0, "2026-10-01") } }, { cards: { c1: c(2, 2, "2026-10-20"), c3: c(0, 0, null) } }, "cards");
eq(r.cards.c1, c(2, 2, "2026-10-20"), "card: больше reps+lapses (4>3)");
ok(r.cards.c2 && r.cards.c3, "card односторонние берутся");
r = m({ cards: { c1: c(2, 1, "2026-10-10") } }, { cards: { c1: c(3, 0, "2026-10-25") } });
eq(r.cards.c1.due, "2026-10-25", "card: при равенстве — более поздний due");

// newLog/reviewDays
r = prop({ newLog: { "2026-10-01": 5 }, reviewDays: { "2026-10-01": 10 } }, { newLog: { "2026-10-01": 8, "2026-10-02": 1 }, reviewDays: { "2026-10-01": 3 } }, "newLog/reviewDays");
eq([r.newLog, r.reviewDays], [{ "2026-10-01": 8, "2026-10-02": 1 }, { "2026-10-01": 10 }], "max по датам");

// errors / writings
r = prop(
  { errors: [{ id: "e1", date: "2026-10-01", wrong: "w", right: "r", fixed: false, count: 2 }, { id: "e2", date: "2026-10-02", wrong: "a", right: "b", fixed: false, count: 1 }],
    writings: [{ id: "w1", date: "2026-10-01", text: "hi" }] },
  { errors: [{ id: "e1", date: "2026-10-01", wrong: "w", right: "r", fixed: true, count: 1 }, { id: "e3", date: "2026-10-03", wrong: "c", right: "d", fixed: false, count: 1 }],
    writings: [{ id: "w1", date: "2026-10-01", text: "hi" }, { id: "w2", date: "2026-10-02", text: "yo" }] }, "errors/writings");
eq(r.errors.length, 3, "errors по id: 3 записи");
const e1 = r.errors.find((e) => e.id === "e1");
eq([e1.fixed, e1.count], [true, 2], "errors: fixed OR, count max");
eq(r.writings.length, 2, "writings по id");

// log / speaking / tests: с id и без
r = prop({ log: [L(10, "a"), L(20), L(20), L(30)] }, { log: [L(10, "a"), L(20), L(40), L(5, "b")] }, "log");
eq(r.log.filter((x) => x.id === "a").length, 1, "log: одна запись по id");
eq(r.log.filter((x) => !x.id && x.min === 20).length, 2, "log без id: максимальная кратность (2)");
eq(r.log.length, 1 + 2 + 1 + 1 + 1, "log: итого записей");
r = prop({ speaking: [{ date: "2026-10-01", topic: "t", turns: 4 }] }, { speaking: [{ date: "2026-10-01", topic: "t", turns: 4 }, { id: "s", date: "2026-10-02", topic: "u", turns: 1 }] }, "speaking");
eq(r.speaking.length, 2, "speaking: дубликат старой записи не размножается");
r = prop({ tests: [{ date: "2026-10-01", kind: "k", result: "ok" }] }, { tests: [{ date: "2026-10-01", kind: "k", result: "ok" }] }, "tests");
eq(r.tests.length, 1, "tests: одинаковые без id — одна");

// checks / listened / read
r = prop({ checks: { c: { a: true } }, listened: { d: { plays: 2, shadowed: false, date: "2026-10-01" } }, read: { t: { date: "2026-10-01", score: 5 } } },
         { checks: { c: { b: true }, e: { z: true } }, listened: { d: { plays: 1, shadowed: true, date: "2026-10-05" } }, read: { t: { date: "2026-10-03", score: 3 } } }, "checks/listened/read");
eq(r.checks, { c: { a: true, b: true }, e: { z: true } }, "checks OR");
eq(r.listened.d, { plays: 2, shadowed: true, date: "2026-10-05" }, "listened: plays max, shadowed OR, date max");
eq(r.read.t, { date: "2026-10-03", score: 5 }, "read: date max, score max");

// profile / setup по meta.editedAt
const pa = { profile: { name: "A", accent: "us", hoursPerWeek: 5 }, setup: { book: "x" }, meta: { editedAt: 50, profileAt: 200, setupAt: 200 } };
const pb = { profile: { name: "B", rate: 1 }, setup: { tutor: "y" }, meta: { editedAt: 900, profileAt: 100, setupAt: 100 } };
r = prop(pa, pb, "profile/setup");
eq(r.profile, { name: "A", accent: "us", hoursPerWeek: 5, rate: 1 }, "profile: более новая сторона побеждает по ключам");
eq(r.setup, { book: "x", tutor: "y" }, "setup: объединение");
eq([r.meta.editedAt, r.meta.profileAt], [900, 200], "meta: метки = max; profile не перетирается более поздним editedAt");
r = m({ profile: { name: "A" } }, { profile: { name: "B" } });
eq(r.profile.name, "B", "без meta побеждает b (серверная)");

// null-профиль у одной стороны
r = prop({ profile: null }, { profile: { name: "S", accent: "gb" }, meta: { profileAt: 5 } }, "null-профиль");
eq(r.profile, { name: "S", accent: "gb" }, "null-профиль у одной стороны: берётся непустой");
r = prop({ profile: { name: "L" }, meta: { profileAt: 9 } }, { profile: null }, "null-профиль 2");
eq(r.profile, { name: "L" }, "null-профиль на сервере: локальный сохраняется");

// старые записи без id и изменение на месте
const oldErr = { date: "2026-10-01", wrong: "a", right: "b", fixed: false, count: 1 };
r = prop({ errors: [oldErr, oldErr] }, { errors: [oldErr] }, "errors без id");
eq(r.errors.length, 2, "старые errors без id: кратность max (2), не дубли");
const changed = { ...oldErr, id: "h_x_1", count: 2 }, same = { ...oldErr, id: "h_x_1" };
r = prop({ errors: [changed] }, { errors: [same] }, "изменённая запись с выданным id");
eq([r.errors.length, r.errors[0].count], [1, 2], "запись изменена на месте: одна запись, count=2 (нет дублей)");
r = prop({ log: [L(10)] }, { log: [{ ...L(10), min: 11 }] }, "log без id изменён");
eq(r.log.length, 2, "без id изменение на месте даёт две записи (поэтому id выдаются при загрузке)");

// надгробия карточек
r = prop({ cards: { c1: { ...c(1, 0, null), mod: 100 }, c2: { ...c(1, 0, null), mod: 100 } } }, { deletedCards: { c1: 200 }, cards: {} }, "tombstone");
eq([Object.keys(r.cards), r.deletedCards], [["c2"], { c1: 200 }], "tombstone: удаление побеждает более старое изменение");
r = prop({ cards: { c1: { ...c(2, 0, "2026-10-09"), mod: 300 } } }, { deletedCards: { c1: 200 } }, "tombstone-newer-card");
eq(Object.keys(r.cards), ["c1"], "tombstone: карточка, изменённая позже удаления, жива");

// epoch
const old = { epoch: 100, lessons: { l1: { done: true } }, cards: { c1: c(5, 0, null) } };
const neu = { epoch: 200, lessons: { l9: { done: true } } };
r = prop(old, neu, "epoch");
eq([Object.keys(r.lessons), r.epoch, Object.keys(r.cards)], [["l9"], 200, []], "epoch: меньший отбрасывается целиком");
r = m({ epoch: 0, lessons: { l1: { done: true } } }, { epoch: 5 });
eq([Object.keys(r.lessons), r.epoch], [[], 5], "epoch: сброс на сервере отбрасывает локальный прогресс");

// isEmptyState
ok(isEmptyState(base()), "isEmptyState: свежее — пусто");
ok(isEmptyState(null), "isEmptyState(null)");
ok(!isEmptyState(base({ lessons: { a: { done: true } } })), "isEmptyState: есть урок");
ok(!isEmptyState(base({ profile: { name: "x" } })), "isEmptyState: есть профиль");
ok(!isEmptyState(base({ day: 3 })), "isEmptyState: day>0");

// псевдослучайные состояния
let seed = 7;
const rnd = () => (seed = (seed * 48271) % 2147483647) / 2147483647;
let tick = 0;
const gen = () => {
  const s = base({ day: Math.floor(rnd() * 20), meta: { editedAt: ++tick, profileAt: ++tick, setupAt: ++tick }, profile: { name: "n" + Math.floor(rnd() * 3) } });
  for (let i = 0; i < 6; i++) {
    const k = "k" + Math.floor(rnd() * 5);
    s.lessons[k] = { done: rnd() > 0.5, score: Math.floor(rnd() * 100), date: "2026-10-0" + (1 + Math.floor(rnd() * 8)) };
    s.cards[k] = c(Math.floor(rnd() * 4), Math.floor(rnd() * 2), rnd() > 0.3 ? "2026-10-1" + Math.floor(rnd() * 9) : null);
    s.log.push(L(Math.floor(rnd() * 3) * 10 + 10, rnd() > 0.5 ? "i" + Math.floor(rnd() * 4) : undefined));
    s.days[Math.floor(rnd() * 5)] = { tasks: { ["t" + Math.floor(rnd() * 3)]: true }, ...(rnd() > 0.5 ? { finished: "2026-10-0" + (1 + Math.floor(rnd() * 8)) } : {}) };
  }
  return s;
};
let propFail = 0;
for (let i = 0; i < 200; i++) {
  const a = gen(), b = gen(), d = gen();
  const ab = mergeState(a, b);
  if (stable(ab) !== stable(mergeState(b, a))) propFail++;
  if (stable(mergeState(ab, b)) !== stable(ab)) propFail++;
  if (stable(mergeState(mergeState(a, b), d)) !== stable(mergeState(a, mergeState(b, d)))) propFail++;
}
eq(propFail, 0, "200 случайных троек: коммутативность, идемпотентность, ассоциативность");

// duo («Фразы»)
const ph = (s, mod, due = "2026-10-10") => ({ s, due, n: 1, w: 0, mod });
r = prop(
  { duo: { p: { x_0: ph(2, 100), x_1: ph(1, 50) }, xp: { "2026-10-01": 10, "2026-10-02": 5 }, goal: 20 }, meta: { duoGoalAt: 10 } },
  { duo: { p: { x_0: ph(4, 200), x_2: ph(3, 5) }, xp: { "2026-10-01": 30 }, goal: 50 }, meta: { duoGoalAt: 20 } }, "duo");
eq(r.duo.p.x_0, ph(4, 200), "duo.p: запись с большим mod");
ok(r.duo.p.x_1 && r.duo.p.x_2, "duo.p: односторонние фразы сохранены");
eq(r.duo.xp, { "2026-10-01": 30, "2026-10-02": 5 }, "duo.xp: максимум по датам");
eq(r.duo.goal, 50, "duo.goal: побеждает более новая метка duoGoalAt");
r = m({ duo: { p: {}, xp: {}, goal: 10 }, meta: { duoGoalAt: 99 } }, {});
eq(r.duo.goal, 10, "duo.goal: у второй стороны нет duo — берётся цель первой");
r = m({}, {});
eq(r.duo, { p: {}, xp: {}, goal: 30 }, "duo: по умолчанию пустой, goal 30");
ok(!isEmptyState(base({ duo: { p: { a: ph(1, 1) }, xp: {}, goal: 30 } })), "isEmptyState: фразы — не пусто");
ok(isEmptyState(base({ duo: { p: {}, xp: {}, goal: 30 } })), "isEmptyState: пустое duo — пусто");

console.log(fail ? `\nПРОВАЛЕНО: ${fail} из ${n}` : `\nВсе проверки зелёные: ${n}`);
process.exit(fail ? 1 : 0);
