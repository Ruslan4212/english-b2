// Мелкие помощники: экранирование, разметка, даты, сравнение ответов.
import { S } from "./store.js?v=20261025a";

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

/** Строчная разметка: **жирный**, *курсив*, `код`, [[англ. фраза]] — с кнопкой озвучки. */
export function inline(s) {
  return esc(s)
    .replace(/\[\[(.+?)\]\]/g, (_, t) => `<span class="en">${t}</span> <button class="say" data-say="${t.replace(/<[^>]+>/g, "")}" title="Послушать">🔊</button><button class="say slow" data-say="${t.replace(/<[^>]+>/g, "")}" data-slow="1" title="Очень медленно">🐢</button>`)
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<i>$2</i>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

/**
 * Небольшой markdown: ### заголовки, абзацы, списки "- " и "1. ",
 * таблицы "| a | b |", "> " — блок-предупреждение, ">i " — блок-информация.
 */
export function md(text) {
  const lines = String(text ?? "").replace(/\r/g, "").split("\n");
  let out = "";
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (/^#{2,4} /.test(l)) {
      const n = l.match(/^#+/)[0].length;
      out += `<h${n}>${inline(l.slice(n + 1))}</h${n}>`;
      i++;
      continue;
    }
    if (/^\|/.test(l)) {
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const body = rows.filter((r) => !/^\|[\s|:-]+\|$/.test(r));
      const [head, ...rest] = body;
      out += `<div class="tbl-wrap"><table><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join("")}</tr>` +
        rest.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("") + "</table></div>";
      continue;
    }
    if (/^>i? /.test(l)) {
      const info = l.startsWith(">i ");
      const buf = [];
      while (i < lines.length && /^>i? ?/.test(lines[i]) && lines[i].trim()) buf.push(lines[i++].replace(/^>i? ?/, ""));
      out += `<blockquote class="${info ? "info" : ""}">${buf.map(inline).join("<br>")}</blockquote>`;
      continue;
    }
    if (/^(- |\d+\. )/.test(l)) {
      const ordered = /^\d+\. /.test(l);
      const buf = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i])) buf.push(lines[i++].replace(/^(- |\d+\. )/, ""));
      const tag = ordered ? "ol" : "ul";
      out += `<${tag}>${buf.map((b) => `<li>${inline(b)}</li>`).join("")}</${tag}>`;
      continue;
    }
    const buf = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,4} |\||>i? |- |\d+\. )/.test(lines[i])) buf.push(lines[i++]);
    out += `<p>${buf.map(inline).join("<br>")}</p>`;
  }
  return `<div class="md">${out}</div>`;
}

export const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export function daysBetween(a, b) {
  return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
}

export function addDays(date, n) {
  const d = new Date(date + "T00:00:00");
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function fmtDate(date) {
  if (!date) return "";
  return new Date(date + "T00:00:00").toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CONTRACTIONS = [
  [/\bwon't\b/g, "will not"], [/\bcan't\b/g, "cannot"], [/\bcan not\b/g, "cannot"], [/\bshan't\b/g, "shall not"],
  [/\bain't\b/g, "is not"], [/n't\b/g, " not"], [/'m\b/g, " am"], [/'re\b/g, " are"], [/'ve\b/g, " have"],
  [/'ll\b/g, " will"], [/'d\b/g, " would"], [/\b(he|she|it|that|there|what|who|where|here|how)'s\b/g, "$1 is"],
];

/** Приводит ответ к виду для сравнения: регистр, апострофы, сокращения, пунктуация. */
export function norm(s) {
  let t = String(s ?? "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”«»]/g, '"').trim();
  for (const [re, rep] of CONTRACTIONS) t = t.replace(re, rep);
  return t.replace(/[.,!?;:"()]/g, " ").replace(/\s+/g, " ").trim();
}

/** Совпадает ли ответ с одним из вариантов "a|b|c". */
export function matches(answer, variants) {
  const list = Array.isArray(variants) ? variants : String(variants).split("|");
  const a = norm(answer);
  return list.some((v) => norm(v) === a);
}

/** Расстояние Левенштейна — чтобы отличить опечатку от ошибки. */
export function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}

/** Ближайший вариант и «это похоже на опечатку». */
export function closeness(answer, variants) {
  const list = Array.isArray(variants) ? variants : String(variants).split("|");
  const a = norm(answer);
  let best = { v: list[0], d: Infinity };
  for (const v of list) {
    const d = lev(a, norm(v));
    if (d < best.d) best = { v, d };
  }
  return { best: best.v, typo: best.d > 0 && best.d <= Math.max(1, Math.floor(norm(best.v).length / 12)) };
}

let toastTimer = 0;
export function toast(msg, ms = 2600) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.remove("hide");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add("hide"), ms);
}

export const plural = (n, one, few, many) => {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
};

/* ---------------- имя ученика ---------------- */
const TR = { а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya" };

/** Транслитерация русского имени в латиницу; латинские буквы остаются как есть. */
export function translit(ru) {
  const out = [...String(ru ?? "").trim()].map((ch) => {
    const low = ch.toLowerCase();
    if (low in TR) return TR[low];
    return ch;
  }).join("");
  return out.replace(/(^|[\s-])(\p{L})/gu, (m, p, ch) => p + ch.toUpperCase()); // Anna-Mariya, Ivan Petrov
}

/** Имя ученика из профиля: { ru, en }; null, если не задано. */
export function studentName() {
  const p = S().profile;
  if (!p || !(p.name || p.nameEn)) return null;
  const ru = (p.name || "").trim();
  const en = (p.nameEn || translit(ru)).trim();
  return { ru: ru || en, en: en || translit(ru) };
}

/** Подставляет метки {N} (латиница), {NR} (по-русски), {NS} (по буквам). Без имени — заглушки Alex. */
export function personalize(str) {
  if (typeof str !== "string" || !str.includes("{N")) return str;
  const n = studentName();
  const en = n ? n.en : "Alex";
  const ru = n ? n.ru : "Алекс";
  const sp = n ? [...n.en.toUpperCase()].join("-") : "A-L-E-X";
  return str.replace(/\{NS\}/g, sp).replace(/\{NR\}/g, ru).replace(/\{N\}/g, en);
}

/** Глубокая подстановка по всем строкам объекта (копия, исходные данные не меняются). */
export function pz(v) {
  if (typeof v === "string") return personalize(v);
  if (Array.isArray(v)) return v.map(pz);
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, pz(x)]));
  return v;
}
