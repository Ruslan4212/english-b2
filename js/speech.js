// Озвучка (speechSynthesis) и распознавание речи (Web Speech API, есть в Chrome/Edge).
import { S } from "./store.js";

let voices = [];
function loadVoices() {
  voices = (window.speechSynthesis?.getVoices() || []).filter((v) => /^en[-_]/i.test(v.lang));
}
if (window.speechSynthesis) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

/**
 * Лучший голос: женский «естественный» (Edge: Aria/Jenny/Ava/Emma/Sonia/Libby —
 * Online Natural, Chrome: Google US English, macOS: Samantha). Мужские и старые
 * «роботизированные» голоса (Zira, David) — в самом конце.
 */
const FEMALE = /aria|jenny|ava|emma|michelle|ana|sonia|libby|maisie|natasha|clara|samantha|karen|moira|tessa|serena|zira|google us english|google uk english female|female/i;
const MALE = /guy|ryan|davis|andrew|brian|christopher|eric|roger|steffan|thomas|david|mark|george|daniel|james|male/i;
function pickVoice(accent) {
  const want = accent === "gb" ? /en[-_]gb/i : /en[-_]us/i;
  const score = (v) =>
    (want.test(v.lang) ? 6 : 0) +
    (/natural|online|neural/i.test(v.name) ? 10 : 0) +
    (FEMALE.test(v.name) ? 8 : 0) -
    (MALE.test(v.name) && !/female/i.test(v.name) ? 12 : 0) +
    (/google/i.test(v.name) ? 4 : 0) -
    (/zira|desktop/i.test(v.name) ? 6 : 0);
  return [...voices].sort((a, b) => score(b) - score(a))[0] || null;
}

export function voiceName() {
  const v = pickVoice(S().profile?.accent || "us");
  return v ? `${v.name} (${v.lang})` : "голос не найден";
}

export function hasTTS() {
  return !!window.speechSynthesis;
}

/** Произнести текст. slow — для первого прослушивания и диктантов. */
export function speak(text, { slow = false, rate } = {}) {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) return resolve();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/[_]{2,}/g, "blank"));
    const p = S().profile || {};
    const v = pickVoice(p.accent || "us");
    if (v) u.voice = v;
    u.lang = v?.lang || (p.accent === "gb" ? "en-GB" : "en-US");
    u.rate = rate ?? (slow ? 0.7 : p.rate || 0.92);
    // Chrome иногда не присылает onend — страхуемся по оценке длительности фразы
    const guard = setTimeout(resolve, 2500 + String(text).length * (u.rate < 0.8 ? 110 : 85));
    u.onend = u.onerror = () => { clearTimeout(guard); resolve(); };
    speechSynthesis.speak(u);
  });
}

let audioEl = null;
export function stopSpeak() {
  window.speechSynthesis?.cancel();
  if (audioEl) { audioEl.pause(); audioEl = null; }
}

/* ---------- голос Мии: нейроозвучка с сервера, запасной вариант — браузер ---------- */
const ttsCache = new Map(); // текст → objectURL
let serverTTS = null; // функция загрузки аудио задаётся из ai.js (чтобы не тянуть зависимость сюда)
export function setServerTTS(fn) { serverTTS = fn; }

export async function speakMia(text, { slow = false } = {}) {
  const clean = String(text).replace(/==/g, "").trim();
  if (!clean) return;
  stopSpeak();
  try {
    let url = ttsCache.get(clean);
    if (!url && serverTTS) {
      const blob = await serverTTS(clean);
      if (blob) { url = URL.createObjectURL(blob); ttsCache.set(clean, url); }
    }
    if (url) {
      await new Promise((resolve) => {
        audioEl = new Audio(url);
        audioEl.playbackRate = slow ? 0.85 : 1;
        audioEl.onended = audioEl.onerror = () => resolve();
        audioEl.play().catch(() => resolve());
      });
      return;
    }
  } catch { /* упадём на голос браузера */ }
  return speak(clean, { slow });
}

const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
export const hasASR = () => !!Rec;

/** Причина последней неудачи распознавания: not-allowed, no-speech, audio-capture, network… */
export let asrError = "";

/** Слушает микрофон и возвращает распознанный английский текст (или null). */
export function listen({ lang = "en-US", timeoutMs = 12000 } = {}) {
  return new Promise((resolve) => {
    if (!Rec) return resolve(null);
    const r = new Rec();
    r.lang = lang;
    r.interimResults = false;
    r.maxAlternatives = 3;
    let done = false;
    asrError = "";
    const finish = (v) => {
      if (done) return;
      done = true;
      try { r.stop(); } catch { /* уже остановлен */ }
      resolve(v);
    };
    r.onresult = (e) => {
      const alts = [...e.results[0]].map((a) => a.transcript);
      finish(alts);
    };
    r.onerror = (e) => { asrError = e.error || "error"; finish(null); };
    r.onend = () => finish(null);
    setTimeout(() => finish(null), timeoutMs);
    try { r.start(); } catch { asrError = "busy"; finish(null); }
  });
}

/** Насколько похоже сказанное на образец: доля совпавших слов, 0..1. */
export function similarity(said, target) {
  const w = (s) => s.toLowerCase().replace(/[^a-z' ]/g, " ").split(/\s+/).filter(Boolean);
  const t = w(target);
  const s = new Set(w(said));
  if (!t.length) return 0;
  return t.filter((x) => s.has(x)).length / t.length;
}

/** Запись голоса (MediaRecorder) — для ежемесячного сравнения речи. */
export async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const rec = new MediaRecorder(stream);
  const chunks = [];
  rec.ondataavailable = (e) => chunks.push(e.data);
  rec.start();
  return {
    stop: () =>
      new Promise((resolve) => {
        rec.onstop = () => {
          stream.getTracks().forEach((t) => t.stop());
          resolve(new Blob(chunks, { type: rec.mimeType || "audio/webm" }));
        };
        rec.stop();
      }),
  };
}

/* ------- хранение записей в IndexedDB (localStorage для аудио мал) ------- */
function db() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("english_b2_audio", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("rec", { keyPath: "id" });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveRecording(rec) {
  try {
    const d = await db();
    await new Promise((res, rej) => {
      const tx = d.transaction("rec", "readwrite");
      tx.objectStore("rec").put(rec);
      tx.oncomplete = res;
      tx.onerror = () => rej(tx.error);
    });
    return true;
  } catch {
    return false;
  }
}

export async function listRecordings() {
  try {
    const d = await db();
    return await new Promise((res, rej) => {
      const tx = d.transaction("rec", "readonly");
      const q = tx.objectStore("rec").getAll();
      q.onsuccess = () => res(q.result.sort((a, b) => (a.date < b.date ? 1 : -1)));
      q.onerror = () => rej(q.error);
    });
  } catch {
    return [];
  }
}

export async function deleteRecording(id) {
  try {
    const d = await db();
    d.transaction("rec", "readwrite").objectStore("rec").delete(id);
  } catch {
    /* нет IndexedDB */
  }
}
