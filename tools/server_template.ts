/* =====================================================================
   english-tutor — ИИ-наставник курса English B2 Path (Supabase Edge Function)
   =====================================================================
   POST /english-tutor/<mode>, где mode: explain | ask | check | correct | chat | generate | story
   Промпты — те же, что в браузере (js/prompts.js вставлен ниже скриптом
   tools/build_function.py). Ключ провайдера живёт только в секретах Supabase.

   Провайдер выбирается по заданному секрету (секреты общие для проекта —
   если для DevOps-игры уже задан GROQ_API_KEY, он подхватится и здесь):
     GROQ_API_KEY       console.groq.com/keys        бесплатно
     GEMINI_API_KEY     aistudio.google.com/apikey   бесплатно
     ANTHROPIC_API_KEY  console.anthropic.com        платно, лучшее качество

   Защита: белый список Origin, лимит запросов с одного адреса, ограничение
   длины текста (внутри buildRequest). verify_jwt выключен (см. supabase/config.toml).
   ===================================================================== */

import Anthropic from "npm:@anthropic-ai/sdk";

/*__PROMPTS__*/

const env = (n: string): string => (Deno.env.get(n) ?? "").trim();

type Provider = { name: "anthropic"; model: string } | { name: "groq" | "gemini"; model: string; url: string; key: string };

function pickProvider(): Provider | null {
  if (env("GROQ_API_KEY"))
    return { name: "groq", url: "https://api.groq.com/openai/v1/chat/completions", key: env("GROQ_API_KEY"), model: env("GROQ_MODEL") || "llama-3.3-70b-versatile" };
  if (env("GEMINI_API_KEY"))
    return { name: "gemini", url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions", key: env("GEMINI_API_KEY"), model: env("GEMINI_MODEL") || "gemini-2.5-flash" };
  if (env("ANTHROPIC_API_KEY")) return { name: "anthropic", model: env("ANTHROPIC_MODEL") || "claude-opus-5-5" };
  return null;
}
const PROVIDER = pickProvider();
const anthropic = PROVIDER?.name === "anthropic" ? new Anthropic({ apiKey: env("ANTHROPIC_API_KEY") }) : null;

const ALLOWED_ORIGINS = (env("ENGLISH_ALLOWED_ORIGINS") || "https://ruslan4212.github.io,http://localhost:5288,http://127.0.0.1:5288")
  .split(",").map((s) => s.trim()).filter(Boolean);

/* ------------------------------ rate limit ------------------------------ */
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 20;
}

function cors(origin: string | null): Record<string, string> {
  const h: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type, apikey, authorization, x-client-info",
    Vary: "Origin",
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) h["Access-Control-Allow-Origin"] = origin;
  return h;
}
const json = (body: unknown, status: number, origin: string | null) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", ...cors(origin) } });

function extractJson(text: string): unknown {
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch { return null; }
}

/** Один вызов модели. Для json-режимов возвращает объект, иначе { text }. */
async function run(req: { system: string; messages: { role: string; content: string }[]; json: boolean; maxTokens: number }): Promise<unknown> {
  if (!PROVIDER) throw new Error("не задан ни один ключ: GROQ_API_KEY, GEMINI_API_KEY или ANTHROPIC_API_KEY");
  if (PROVIDER.name === "anthropic" && anthropic) {
    const response = await anthropic.messages.create({
      model: PROVIDER.model,
      max_tokens: Math.max(req.maxTokens * 2, 4000),
      output_config: { effort: "low" },
      system: req.system + (req.json ? "\n\nОтвет — строго один JSON-объект, без markdown." : ""),
      messages: req.messages.map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content })),
    });
    if (response.stop_reason === "refusal") return null;
    const text = response.content.map((b) => (b.type === "text" ? b.text : "")).join("");
    return req.json ? extractJson(text) : { text };
  }
  const p = PROVIDER as Exclude<Provider, { name: "anthropic" }>;
  const call = async () => {
    const res = await fetch(p.url, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: "Bearer " + p.key },
      body: JSON.stringify({
        model: p.model,
        max_tokens: req.maxTokens,
        temperature: req.json ? 0.3 : 0.6,
        ...(req.json ? { response_format: { type: "json_object" } } : {}),
        messages: [{ role: "system", content: req.system }, ...req.messages],
      }),
    });
    if (!res.ok) throw new Error(`${p.name} ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const text = (await res.json())?.choices?.[0]?.message?.content ?? "";
    return req.json ? extractJson(text) : { text };
  };
  // модель иногда отвечает не тем форматом — второй заход обычно проходит
  return (await call()) ?? (await call());
}

Deno.serve(async (r) => {
  const origin = r.headers.get("origin");
  if (r.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
  if (r.method !== "POST") return json({ error: "только POST" }, 405, origin);
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) return json({ error: "origin не разрешён" }, 403, origin);
  const ip = (r.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return json({ error: "слишком много запросов, подожди минуту" }, 429, origin);

  let body: Record<string, unknown>;
  try { body = await r.json(); } catch { return json({ error: "нужен JSON" }, 400, origin); }
  const mode = new URL(r.url).pathname.split("/").pop() ?? "";
  const req = buildRequest(mode, body);
  if (!req) return json({ error: "неизвестный режим или неверные поля" }, 400, origin);
  try {
    const out = await run(req);
    if (!out) return json({ error: "модель не дала ответа нужного вида" }, 502, origin);
    return json(out, 200, origin);
  } catch (e) {
    if (e instanceof Anthropic.APIError) console.error("Anthropic API", e.status, e.message);
    else console.error("english-tutor", e instanceof Error ? e.message : e);
    return json({ error: "наставник временно недоступен" }, 502, origin);
  }
});
