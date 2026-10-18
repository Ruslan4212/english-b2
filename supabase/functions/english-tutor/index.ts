// СГЕНЕРИРОВАНО tools/build_function.py — правьте tools/server_template.ts и js/prompts.js
// @ts-nocheck — промпты вставлены из JS-модуля без типов
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

// Промпты ИИ-наставника. Файл чистый (без DOM): его же вставляет в функцию
// Supabase скрипт tools/build_function.py, чтобы браузер и сервер говорили одинаково.

const LEVEL_HINT = {
  A0: "абсолютный ноль: ученик не знает даже алфавита и чтения",
  A1: "A1 (начальный): знает to be, present simple, базовые слова",
  A2: "A2 (элементарный): past simple, will, going to, модальные глаголы",
  B1: "B1 (средний): present perfect, условные 0–2, пассив, косвенная речь",
  B2: "B2 (выше среднего): третий и смешанный условные, wish, сложные конструкции",
};

const cut = (v, n) => String(v ?? "").slice(0, n);
const lvl = (b) => LEVEL_HINT[b.level] || LEVEL_HINT.A1;

const TUTOR =
  "Ты — терпеливый и очень понятный преподаватель английского для русскоговорящего взрослого. " +
  "Объясняешь по-русски, простыми словами, как живой репетитор рядом: без канцелярита, на «ты», " +
  "с короткими абзацами. Английские примеры всегда даёшь с переводом. Учитываешь типичные трудности " +
  "русскоговорящих: артикли, времена, порядок слов, вспомогательные глаголы, произношение. " +
  "Никогда не выдумываешь правила: если есть исключения или варианты — так и говоришь.";

/**
 * Собирает запрос к модели. Возвращает { system, messages, json, maxTokens } или null,
 * если входные поля не подходят (пусто или слишком длинно).
 */
function buildRequest(mode, b) {
  b = b || {};
  if (mode === "explain") {
    if (!b.topic || String(b.topic).length > 3000) return null;
    const stuck = cut(b.attempt, 1500).trim();
    return {
      system: TUTOR,
      json: false,
      maxTokens: 1800,
      messages: [
        {
          role: "user",
          content:
            `Уровень ученика: ${lvl(b)}.\n` +
            (b.lesson ? `Урок: ${cut(b.lesson, 200)}\n` : "") +
            `Тема/шаг, который ученику непонятен:\n${cut(b.topic, 3000)}\n\n` +
            (b.context ? `Что уже объяснено в уроке (не пересказывай дословно, объясни иначе и глубже):\n${cut(b.context, 2500)}\n\n` : "") +
            (stuck ? `Где ученик ошибся или застрял (помоги именно с этим):\n${stuck}\n\n` : "") +
            "Объясни так, чтобы понял человек, который учит язык с нуля:\n" +
            (stuck ? "1. Сначала разбери его попытку: что именно не так и почему, без упрёков.\n" : "1. Объясни суть другими словами, через аналогию с русским языком, если она помогает.\n") +
            "2. Дай простое правило-шпаргалку в 1–2 строки.\n" +
            "3. Приведи 4–5 РАЗНЫХ примеров из жизни с переводом.\n" +
            "4. Назови типичную ошибку русскоговорящих по этой теме и как её избежать.\n" +
            "5. В конце дай 2 мини-задания для самопроверки и ответы к ним после строки «Ответы:».\n" +
            "Пиши чистым текстом без markdown-разметки (без #, без **), абзацы разделяй пустой строкой.",
        },
      ],
    };
  }

  if (mode === "ask") {
    const msgs = Array.isArray(b.messages) ? b.messages.slice(-12) : [];
    if (!msgs.length) return null;
    return {
      system:
        TUTOR +
        ` Уровень ученика: ${lvl(b)}. Ученик проходит курс английского с нуля до B2 и задаёт вопрос наставнику. ` +
        (b.context ? `Сейчас он на экране: ${cut(b.context, 2000)}. ` : "") +
        "Отвечай по делу и конкретно, с примерами и переводом. Если вопрос не про английский — мягко верни к учёбе. " +
        "Чистый текст без markdown-разметки.",
      json: false,
      maxTokens: 1500,
      messages: msgs.map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: cut(m.content, 2000) })),
    };
  }

  if (mode === "check") {
    if (!b.answer || !b.task) return null;
    return {
      system: TUTOR,
      json: true,
      maxTokens: 600,
      messages: [
        {
          role: "user",
          content:
            `Уровень: ${lvl(b)}.\nЗадание: ${cut(b.task, 800)}\n` +
            (b.expected ? `Эталонные ответы (верных вариантов может быть больше): ${cut(b.expected, 800)}\n` : "") +
            `Ответ ученика: ${cut(b.answer, 800)}\n\n` +
            "Реши, правильный ли ответ ученика. Засчитывай любой грамматически верный и естественный вариант, " +
            "который передаёт тот же смысл, даже если он не совпадает с эталоном (другой синоним, порядок, сокращение). " +
            "Не засчитывай, если есть грамматическая ошибка, искажён смысл или ответ не по заданию. " +
            "Мелкую опечатку в одной букве засчитай, но укажи на неё.\n" +
            'Верни JSON: {"correct": true/false, "feedback": "1–3 предложения по-русски: если неверно — что именно не так, почему и как правильно"}',
        },
      ],
    };
  }

  if (mode === "correct") {
    if (!b.text || String(b.text).length > 4000) return null;
    return {
      system: TUTOR,
      json: true,
      maxTokens: 2500,
      messages: [
        {
          role: "user",
          content:
            `Уровень ученика: ${lvl(b)}.\nЗадание на письмо: ${cut(b.task, 800)}\n\nТекст ученика:\n${cut(b.text, 4000)}\n\n` +
            "Проверь текст как внимательный репетитор. Найди ВСЕ ошибки: грамматика, артикли, предлоги, порядок слов, " +
            "лексика, неестественные выражения. Для каждой ошибки объясни причину по-русски простыми словами (правило). " +
            "Не придирайся к стилю, если ошибки нет; оценивай по требованиям уровня.\n" +
            'Верни JSON: {"corrected": "исправленный текст целиком", ' +
            '"errors": [{"wrong": "фрагмент ученика", "right": "как правильно", "why": "почему, по-русски"}], ' +
            '"feedback": "общий отзыв по-русски: что хорошо, над чем работать, 2–4 предложения", ' +
            '"score": число от 0 до 10, "task_done": true/false — выполнено ли задание (тема, объём)}',
        },
      ],
    };
  }

  if (mode === "chat") {
    const msgs = Array.isArray(b.messages) ? b.messages.slice(-16) : [];
    return {
      system:
        "You are a friendly English conversation partner and tutor for a Russian-speaking adult. " +
        `Student level: ${b.level || "A1"} (${lvl(b)}). Conversation topic: ${cut(b.topic, 300)}. ` +
        (b.role ? `Role-play: ${cut(b.role, 600)}. Stay in role. ` : "") +
        "Rules: speak ONLY English in `reply`, using vocabulary and grammar of the student's level " +
        "(A1: very short simple sentences, present simple, max 2 sentences; A2: simple past and future, max 3 sentences; " +
        "B1/B2: natural speech). Always end your reply with ONE question to keep the student talking. " +
        "Be warm and encouraging. If the student writes in Russian, help them say it in English. " +
        "Separately, look at the student's LAST message and list every real mistake (grammar, articles, word order, " +
        "wrong word) in `corrections`, explaining each in Russian. If there are no mistakes, return an empty list. " +
        "If the student's message is the conversation start (empty), just greet and ask the first question. " +
        'Return JSON: {"reply": "...", "corrections": [{"wrong": "...", "right": "...", "why": "по-русски"}], ' +
        '"better": "a more natural version of the student\'s whole last message, or empty string"}',
      json: true,
      maxTokens: 900,
      messages: msgs.length
        ? msgs.map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: cut(m.content, 1500) }))
        : [{ role: "user", content: "(start the conversation)" }],
    };
  }

  if (mode === "generate") {
    const n = Math.min(Math.max(Number(b.count) || 8, 3), 20);
    if (b.kind === "cards") {
      return {
        system: TUTOR,
        json: true,
        maxTokens: 2500,
        messages: [
          {
            role: "user",
            content:
              `Составь ${n} карточек для Anki по теме «${cut(b.topic, 200)}» для уровня ${b.level || "A1"}. ` +
              "Правило курса: слова только во фразах — каждая карточка это короткое естественное английское предложение " +
              "с частотной лексикой нужного уровня и его русский перевод. Ключевое слово выдели в переводе не надо." +
              (b.exclude ? ` Не повторяй эти фразы: ${cut(b.exclude, 1500)}.` : "") +
              '\nВерни JSON: {"items": [{"en": "...", "ru": "..."}]}',
          },
        ],
      };
    }
    // упражнения: по теме урока или по списку ошибок ученика
    return {
      system: TUTOR,
      json: true,
      maxTokens: 3000,
      messages: [
        {
          role: "user",
          content:
            `Составь ${n} упражнений для уровня ${b.level || "A1"} ` +
            (b.errors
              ? `на отработку ЛИЧНЫХ ошибок ученика. Его ошибки (неверно → верно — почему):\n${cut(b.errors, 2500)}\n`
              : `по теме «${cut(b.topic, 300)}».\n`) +
            "Типы упражнений смешай: fill (вставить пропуск ___ в предложение), choice (выбрать из 3 вариантов), " +
            "translate (перевести с русского на английский). Предложения жизненные, лексика по уровню.\n" +
            'Верни JSON: {"items": [' +
            '{"type": "fill", "q": "предложение с ___", "a": "ответ|допустимый вариант", "why": "объяснение по-русски"}, ' +
            '{"type": "choice", "q": "предложение с ___", "opts": ["…","…","…"], "a": индекс верного, "why": "…"}, ' +
            '{"type": "translate", "q": "русское предложение", "a": "английский вариант|ещё вариант", "why": "…"}]}',
        },
      ],
    };
  }

  if (mode === "story") {
    return {
      system: TUTOR,
      json: true,
      maxTokens: 2500,
      messages: [
        {
          role: "user",
          content:
            `Напиши короткий текст для чтения уровня ${b.level || "A1"} на тему «${cut(b.topic, 200)}» ` +
            `(${b.level === "A1" ? "80–120" : b.level === "A2" ? "150–200" : b.level === "B1" ? "250–300" : "350–400"} слов), ` +
            "интересный взрослому, с лексикой и грамматикой уровня. Затем 5 вопросов на понимание с вариантами ответа " +
            "и глоссарий 8–10 полезных фраз из текста с переводом.\n" +
            'Верни JSON: {"title": "...", "text": "...", "questions": [{"q": "...", "opts": ["…","…","…"], "a": индекс}], ' +
            '"glossary": [{"en": "...", "ru": "..."}]}',
        },
      ],
    };
  }

  return null;
}


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
