// ИИ-наставник. Тот же подход, что в Terminal Ops Academy:
//  1) функция Supabase english-tutor — ключ провайдера живёт на сервере, в браузер не попадает;
//  2) если функции нет — личный бесплатный ключ ученика (Groq / Gemini / OpenRouter),
//     который хранится только в этом браузере.
import { buildRequest } from "./prompts.js?v=20261025a";
import { setServerTTS } from "./speech.js?v=20261025a";
import { studentName } from "./util.js?v=20261025a";

import { DEFAULT_URL, DEFAULT_KEY } from "./config.js?v=20261025a";
const CFG = "english_b2_ai_cfg";

const PROVIDERS = {
  groq: { url: "https://api.groq.com/openai/v1/chat/completions", model: "openai/gpt-oss-120b", label: "Groq (бесплатно, быстро)" },
  gemini: { url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions", model: "gemini-2.5-flash", label: "Google Gemini (бесплатно)" },
  openrouter: { url: "https://openrouter.ai/api/v1/chat/completions", model: "meta-llama/llama-3.3-70b-instruct:free", label: "OpenRouter (бесплатные модели)" },
};
export const providerList = () => Object.entries(PROVIDERS).map(([id, p]) => ({ id, label: p.label }));

export function aiConfig() {
  let c = {};
  try {
    c = JSON.parse(localStorage.getItem(CFG) || "{}");
  } catch {
    /* нет хранилища */
  }
  return {
    useServer: c.useServer !== false,
    url: c.url || DEFAULT_URL,
    anon: c.anon || DEFAULT_KEY,
    provider: c.provider || "groq",
    key: c.key || "",
    model: c.model || "",
  };
}

export function saveAiConfig(patch) {
  const c = { ...aiConfig(), ...patch };
  try {
    localStorage.setItem(CFG, JSON.stringify(c));
  } catch {
    /* нет хранилища */
  }
  serverDown = false;
}

let serverDown = false; // не стучимся каждый раз в функцию, которая не отвечает

function extractJson(text) {
  const m = String(text || "").match(/\{[\s\S]*\}/);
  if (!m) return null;
  try {
    return JSON.parse(m[0]);
  } catch {
    return null;
  }
}

async function viaServer(mode, body, timeoutMs) {
  const c = aiConfig();
  if (!c.useServer || serverDown) return null;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${c.url}/functions/v1/english-tutor/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: c.anon },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    if (res.status === 404 || res.status === 401 || res.status === 403) {
      serverDown = true; // функция не задеплоена или origin не разрешён
      return null;
    }
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

async function viaOwnKey(mode, body, timeoutMs) {
  const c = aiConfig();
  if (!c.key) return null;
  const p = PROVIDERS[c.provider] || PROVIDERS.groq;
  const req = buildRequest(mode, body);
  if (!req) return null;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const call = async () => {
      const res = await fetch(p.url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + c.key },
        signal: ctrl.signal,
        body: JSON.stringify({
          model: c.model || p.model,
          temperature: req.json ? 0.3 : 0.6,
          max_tokens: req.maxTokens,
          ...(req.json ? { response_format: { type: "json_object" } } : {}),
          messages: [{ role: "system", content: req.system }, ...req.messages],
        }),
      });
      if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 200)}`);
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content ?? "";
      if (!req.json) return { text };
      return extractJson(text);
    };
    // модель иногда отвечает не тем форматом — второй заход обычно проходит
    return (await call()) ?? (await call());
  } catch (e) {
    console.warn("ИИ (личный ключ):", e.message);
    return null;
  } finally {
    clearTimeout(t);
  }
}

/** Общий вызов: сервер → личный ключ. Возвращает объект ответа или null. */
export async function ai(mode, body, timeoutMs = 45000) {
  const n = studentName();
  if (n) body = { ...body, studentName: `${n.ru} (${n.en})`.slice(0, 40) };
  return (await viaServer(mode, body, timeoutMs)) ?? (await viaOwnKey(mode, body, timeoutMs));
}

/** Есть ли вообще рабочий канал к ИИ (быстрая проверка для настроек). */
export async function aiPing() {
  const r = await ai("ask", { messages: [{ role: "user", content: "Скажи одним словом по-английски: привет" }], level: "A1" }, 20000);
  return r?.text ? r.text.slice(0, 80) : null;
}

export const NO_AI =
  "ИИ-наставник пока не подключён. Откройте ⚙️ Настройки → «ИИ-наставник»: там две минуты на подключение " +
  "бесплатного ключа Groq или инструкция, как включить серверную функцию.";

/* ---------- удобные обёртки под экраны ---------- */
export async function explain(input) {
  const r = await ai("explain", input, 60000);
  return r?.text || r?.explanation || null;
}

export async function askTutor(messages, context, level) {
  const r = await ai("ask", { messages, context, level }, 60000);
  return r?.text || r?.answer || null;
}

export async function checkAnswer(task, expected, answer, level) {
  const r = await ai("check", { task, expected, answer, level }, 30000);
  return r && typeof r.correct === "boolean" ? r : null;
}

export async function correctText(task, text, level) {
  const r = await ai("correct", { task, text, level }, 90000);
  return r && typeof r.corrected === "string" ? r : null;
}

export async function chatTurn(topic, level, messages, role) {
  const r = await ai("chat", { topic, level, messages, role }, 45000);
  return r && typeof r.reply === "string" ? r : null;
}

export async function generate(kind, payload) {
  const r = await ai("generate", { kind, ...payload }, 90000);
  return Array.isArray(r?.items) ? r.items : null;
}

export async function translate(text) {
  const r = await ai("translate", { text }, 30000);
  return r?.text || null;
}

export async function story(topic, level) {
  const r = await ai("story", { topic, level }, 90000);
  return r && typeof r.text === "string" ? r : null;
}

/* ---------- голос Мии с сервера (/tts). null — сервер не умеет, пусть говорит браузер ---------- */
let ttsDown = false;
setServerTTS(async (text) => {
  const c = aiConfig();
  if (!c.useServer || ttsDown) return null;
  try {
    const res = await fetch(`${c.url}/functions/v1/english-tutor/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: c.anon },
      body: JSON.stringify({ text }),
    });
    if (!res.ok || !/audio/.test(res.headers.get("content-type") || "")) {
      if (res.status === 502 || res.status === 404) ttsDown = true; // не дёргаем сервер на каждой фразе
      return null;
    }
    return await res.blob();
  } catch {
    return null;
  }
});
