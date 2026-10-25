// Слияние двух состояний прогресса (локального и облачного). Чистая функция без обращения к DOM/хранилищу.
// Свойства: коммутативность (mergeState(a,b) ≡ mergeState(b,a)) и идемпотентность (merge(m,b) ≡ m),
// кроме одного случая: profile/setup при равном (или отсутствующем) meta.profileAt/setupAt — побеждает b (серверная сторона).
const isObj = (x) => x && typeof x === "object" && !Array.isArray(x);
const clone = (x) => (x === undefined ? undefined : JSON.parse(JSON.stringify(x)));
const mx = (x, y) => (x == null ? y : y == null ? x : x > y ? x : y); // максимум для чисел и ISO-дат
const mn = (x, y) => (!x ? y || x : !y ? x : x < y ? x : y); // минимум среди непустых
const num = (x) => (typeof x === "number" ? x : 0);

/** Стабильная сериализация: ключи по алфавиту (нужна для ключей слияния и сравнения). */
export function stable(x) {
  if (Array.isArray(x)) return "[" + x.map(stable).join(",") + "]";
  if (isObj(x)) return "{" + Object.keys(x).sort().filter((k) => x[k] !== undefined).map((k) => JSON.stringify(k) + ":" + stable(x[k])).join(",") + "}";
  return JSON.stringify(x === undefined ? null : x);
}

function mapUnion(a, b, f) {
  const out = {};
  for (const k of new Set([...Object.keys(a || {}), ...Object.keys(b || {})])) {
    const x = a?.[k], y = b?.[k];
    out[k] = x === undefined ? clone(y) : y === undefined ? clone(x) : f(x, y);
  }
  return out;
}

const maxMap = (a, b) => mapUnion(a, b, (x, y) => Math.max(num(x), num(y)));

function mergeDay(x, y) {
  const o = { ...clone(x), ...clone(y) };
  o.tasks = mapUnion(x.tasks, y.tasks, (p, q) => !!(p || q));
  const f = mn(x.finished, y.finished);
  if (f) o.finished = f;
  else delete o.finished;
  return o;
}

function mergeLesson(x, y) {
  const o = { ...clone(x), ...clone(y) };
  o.done = !!(x.done || y.done);
  // «пропущен» (skipped) — только если каждая сторона, считающая урок пройденным, пропустила его
  const sk = [x, y].filter((e) => e.done).every((e) => e.skipped);
  if (o.done && sk) o.skipped = true;
  else delete o.skipped;
  const sc = mx(x.score, y.score);
  if (sc != null) o.score = sc;
  else delete o.score;
  const d = mx(x.date, y.date);
  if (d != null) o.date = d;
  return o;
}

function mergeCard(x, y) {
  const sx = num(x.reps) + num(x.lapses), sy = num(y.reps) + num(y.lapses);
  if (sx !== sy) return clone(sx > sy ? x : y);
  const dx = x.due || "", dy = y.due || "";
  if (dx !== dy) return clone(dx > dy ? x : y);
  return clone(stable(x) >= stable(y) ? x : y);
}

/** Список записей: с id — по id, без id — по составному ключу с максимальной кратностью. */
function mergeList(a = [], b = [], pick) {
  const keyOf = (e) => (e && e.id != null ? "i:" + e.id : "k:" + stable(e));
  const byId = new Map();
  const cnt = [new Map(), new Map()];
  const sample = new Map();
  [a, b].forEach((list, side) => {
    for (const e of list || []) {
      const k = keyOf(e);
      if (k[0] === "i") {
        byId.set(k, byId.has(k) ? pick(byId.get(k), e) : e);
      } else {
        cnt[side].set(k, (cnt[side].get(k) || 0) + 1);
        sample.set(k, e);
      }
    }
  });
  const out = [];
  for (const e of byId.values()) out.push(clone(e));
  for (const k of new Set([...cnt[0].keys(), ...cnt[1].keys()])) {
    const n = Math.max(cnt[0].get(k) || 0, cnt[1].get(k) || 0);
    for (let i = 0; i < n; i++) out.push(clone(sample.get(k)));
  }
  // детерминированный порядок: по дате, затем по ключу
  return out
    .map((e) => [String(e?.date || ""), keyOf(e), e])
    .sort((p, q) => (p[0] < q[0] ? -1 : p[0] > q[0] ? 1 : p[1] < q[1] ? -1 : p[1] > q[1] ? 1 : 0))
    .map((t) => t[2]);
}

const pickBigger = (x, y) => (stable(x) >= stable(y) ? x : y);

function mergeError(x, y) {
  const base = clone(pickBigger(x, y));
  base.fixed = !!(x.fixed || y.fixed);
  base.count = Math.max(num(x.count), num(y.count)) || base.count;
  if (base.count === 0) delete base.count;
  return base;
}

/** Побеждает сторона с более новой меткой (profileAt для profile, setupAt для setup); при равенстве/отсутствии — b. */
function mergeByMeta(a, b, a_t, b_t) {
  const aWins = a_t > b_t;
  const [lo, hi] = aWins ? [b, a] : [a, b];
  if (!isObj(lo) && !isObj(hi)) return clone(hi ?? lo ?? null);
  return { ...clone(isObj(lo) ? lo : {}), ...clone(isObj(hi) ? hi : {}) };
}

export function mergeState(a, b) {
  a = a || {};
  b = b || {};
  const ea = num(a.epoch), eb = num(b.epoch);
  if (ea !== eb) return mergeState({ epoch: ea > eb ? ea : eb }, ea > eb ? a : b); // сброс/импорт на одной стороне: старая история отбрасывается целиком
    const out = { ...clone(a), ...clone(b) };
  out.v = 1;
  out.epoch = ea;
  out.meta = { ...clone(a.meta || {}), ...clone(b.meta || {}) };
  for (const k of ["editedAt", "profileAt", "setupAt", "duoGoalAt"]) {
    const t = Math.max(num(a.meta?.[k]), num(b.meta?.[k]));
    if (t > 0) out.meta[k] = t;
    else delete out.meta[k];
  }
  const pa = num(a.meta?.profileAt), pb = num(b.meta?.profileAt);
  const sa = num(a.meta?.setupAt), sb = num(b.meta?.setupAt);
  out.day = Math.max(num(a.day), num(b.day));
  out.lastActive = mx(a.lastActive ?? null, b.lastActive ?? null) ?? null;
  out.days = mapUnion(a.days, b.days, mergeDay);
  out.lessons = mapUnion(a.lessons, b.lessons, mergeLesson);
  out.deletedCards = maxMap(a.deletedCards, b.deletedCards);
  out.cards = mapUnion(a.cards, b.cards, mergeCard);
  // надгробие побеждает, если новее последнего изменения карточки (card.mod); повторное добавление/повторение воскрешает
  for (const id of Object.keys(out.cards)) if (num(out.deletedCards[id]) > num(out.cards[id].mod)) delete out.cards[id];
  out.newLog = maxMap(a.newLog, b.newLog);
  out.reviewDays = maxMap(a.reviewDays, b.reviewDays);
  out.errors = mergeList(a.errors, b.errors, (x, y) => mergeError(x, y));
  out.writings = mergeList(a.writings, b.writings, pickBigger);
  out.log = mergeList(a.log, b.log, pickBigger);
  out.speaking = mergeList(a.speaking, b.speaking, pickBigger);
  out.tests = mergeList(a.tests, b.tests, pickBigger);
  out.checks = mapUnion(a.checks, b.checks, (x, y) => mapUnion(x, y, (p, q) => !!(p || q)));
  out.listened = mapUnion(a.listened, b.listened, (x, y) => {
    const o = { ...clone(x), ...clone(y), plays: Math.max(num(x.plays), num(y.plays)), shadowed: !!(x.shadowed || y.shadowed) };
    const d = mx(x.date, y.date);
    if (d != null) o.date = d;
    return o;
  });
  out.read = mapUnion(a.read, b.read, (x, y) => {
    const o = { ...clone(x), ...clone(y) };
    const d = mx(x.date, y.date), sc = mx(x.score, y.score);
    if (d != null) o.date = d;
    if (sc != null) o.score = sc;
    return o;
  });
  // «Фразы»: запись фразы — с большим mod; XP — максимум по датам; цель — по метке duoGoalAt (при равенстве — b)
  const da = a.duo || {}, db = b.duo || {};
  const goalA = Number(da.goal) > 0 ? da.goal : null, goalB = Number(db.goal) > 0 ? db.goal : null;
  out.duo = {
    p: mapUnion(da.p, db.p, (x, y) => (num(x.mod) !== num(y.mod) ? clone(num(x.mod) > num(y.mod) ? x : y) : clone(pickBigger(x, y)))),
    xp: maxMap(da.xp, db.xp),
    goal: (num(a.meta?.duoGoalAt) > num(b.meta?.duoGoalAt) ? goalA ?? goalB : goalB ?? goalA) ?? 30,
  };
  out.profile = mergeByMeta(a.profile ?? null, b.profile ?? null, pa, pb);
  out.setup = mergeByMeta(a.setup ?? {}, b.setup ?? {}, sa, sb);
  if (a.profile == null && b.profile == null) out.profile = null;
  return out;
}

/** Пустое ли состояние (ничего не изучено и не настроено). */
export function isEmptyState(s) {
  if (!s) return true;
  const empty = (x) => !x || (Array.isArray(x) ? x.length === 0 : Object.keys(x).length === 0);
  return (
    !s.profile && !num(s.day) &&
    ["days", "lessons", "cards", "newLog", "reviewDays", "log", "errors", "writings", "speaking", "checks", "tests", "listened", "read", "setup", "deletedCards"].every((k) => empty(s[k])) &&
    empty(s.duo?.p) && empty(s.duo?.xp)
  );
}
