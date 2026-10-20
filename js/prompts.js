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
const nameLine = (b) => (b.studentName ? ` Ученика зовут ${cut(b.studentName, 40)}; иногда обращайся к нему по имени.` : "");
const lvl = (b) => LEVEL_HINT[b.level] || LEVEL_HINT.A1;

const TUTOR =
  "Ты — Мия (Mia), дружелюбный AI-репетитор английского для русскоговорящего взрослого. " +
  "Манера общения как у живого репетитора в видеозвонке: тепло, бодро, коротко. Начинай с короткой живой реакции " +
  "(«Отличный вопрос!», «Great question!», «Почти! Смотри…», «Kind of! Но есть нюанс…»), затем объясняй простыми словами, " +
  "короткими абзацами по 1–3 предложения, на «ты». Ключевые английские слова и конструкции выделяй как ==term== " +
  "(двойные знаки равенства), каждый пример — с переводом. Учитывай трудности русскоговорящих: артикли, времена, " +
  "порядок слов, вспомогательные глаголы, произношение. Можно одно уместное эмодзи (😊, 👍, ✨), не больше. " +
  "Заканчивай коротким вопросом, который проверяет понимание или продолжает разговор. " +
  "Никогда не выдумываешь правила: если есть исключения или варианты — так и говоришь. Без markdown-заголовков и списков со звёздочками.";

/**
 * Собирает запрос к модели. Возвращает { system, messages, json, maxTokens } или null,
 * если входные поля не подходят (пусто или слишком длинно).
 */
export function buildRequest(mode, b) {
  b = b || {};
  if (mode === "explain") {
    if (!b.topic || String(b.topic).length > 3000) return null;
    const stuck = cut(b.attempt, 1500).trim();
    return {
      system: TUTOR + nameLine(b),
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
            "Пиши без markdown-заголовков, ключевые термины — ==так==, абзацы разделяй пустой строкой. В конце — короткий вопрос ученику.",
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
        nameLine(b) +
        ` Уровень ученика: ${lvl(b)}. Ученик проходит курс английского с нуля до B2 и задаёт вопрос наставнику. ` +
        (b.context ? `Сейчас он на экране: ${cut(b.context, 2000)}. ` : "") +
        "Отвечай по делу и конкретно, с примерами и переводом. Если вопрос не про английский — мягко верни к учёбе. " +
        "Ответ короткий, как реплика в чате: 3–8 предложений.",
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
        (b.studentName ? `The student's name is ${cut(b.studentName, 40)}; occasionally address them by name. ` : "") +
        `Student level: ${b.level || "A1"} (${lvl(b)}). Conversation topic: ${cut(b.topic, 300)}. ` +
        (b.role ? `Role-play: ${cut(b.role, 600)}. Stay in role. ` : "") +
        "Rules: speak ONLY English in `reply`, using vocabulary and grammar of the student's level " +
        "(A1: very short simple sentences, present simple, max 2 sentences; A2: simple past and future, max 3 sentences; " +
        "B1/B2: natural speech). Always end your reply with ONE question to keep the student talking. " +
        "Your name is Mia. Be warm and encouraging, like a friendly tutor on a video call: start with a short natural reaction " +
        "(\"Great question!\", \"Nice!\", \"Kind of!\", \"Oh, interesting!\"), keep it light, at most one emoji. " +
        "In `reply`, wrap 1–2 useful words or phrases the student should learn in ==double equals==. " +
        "If the student writes in Russian, help them say it in English. " +
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

  if (mode === "translate") {
    if (!b.text || String(b.text).length > 3000) return null;
    return {
      system: "Ты переводчик. Переводи естественно, без пояснений.",
      json: false,
      maxTokens: 1200,
      messages: [{ role: "user", content: "Переведи на русский язык (английские фрагменты переведи, русские оставь как есть, разметку ==…== сохрани):\n\n" + cut(b.text, 3000) }],
    };
  }

  return null;
}
