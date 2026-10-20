// B2 юнит 9: переговоры, объяснение сложного простыми словами, экзамен B2 First и финал курса.
export default {
  id: "b2_u9",
  level: "B2",
  phase: 4,
  icon: "🏆",
  title: "Переговоры, сложные темы и финальный экзамен",
  about: "Ведение переговоров и встреч, объяснение сложного простыми словами, ответы на неожиданные вопросы, стратегия B2 First.",
  lessons: [
    {
      id: "b2_u9_l1",
      title: "Переговоры и ведение встречи",
      goal: "Вы научитесь вести встречу и переговоры: предлагать, торговаться, идти на компромисс и фиксировать договорённости.",
      steps: [
        {
          t: "text",
          h: "Язык переговоров",
          md: `**Обозначить позицию:**
- [[Our main priority is…]] — Наш главный приоритет…
- [[What we're looking for is…]] — Мы ищем…
- [[We'd need… in order to…]]

**Предложить и обусловить:**
- [[We could offer… if you were able to…]] — Мы могли бы предложить…, если бы вы смогли…
- [[How would you feel about…?]] — Как вы отнесётесь к…?
- [[What if we…?]]
- [[We'd be prepared to…, provided that…]] — Мы были бы готовы…, при условии…

**Возразить мягко:**
- [[I'm afraid that's not quite what we had in mind.]]
- [[That might be difficult for us.]] — Это может быть для нас затруднительно. (= скорее нет)
- [[I'm not sure we can go that far.]]

**Компромисс и итог:**
- [[Let's meet halfway.]] — Давайте пойдём навстречу друг другу.
- [[Is there any flexibility on…?]] — Есть ли гибкость по…?
- [[I think we can live with that.]] — Думаю, это нас устроит.
- [[So, just to confirm, we've agreed that…]]
- [[I'll put that in writing.]] — Я зафиксирую это письменно.

>i Британская и американская деловая речь полна **смягчений**: «That might be a bit difficult» часто означает твёрдое «нет». Учитесь слышать подтекст: «I'll bear that in mind» — «приму к сведению» (и, возможно, забуду).`,
        },
        {
          t: "text",
          h: "Ведение встречи (chairing)",
          md: `- **Открыть:** [[Thanks for coming. Let's get started.]] [[The aim of today's meeting is to…]]
- **Повестка:** [[We've got three items on the agenda.]] [[Let's move on to the next item.]]
- **Дать слово:** [[Anna, would you like to come in here?]] [[What's your take on this, Paul?]] (ваше мнение)
- **Вернуть к теме:** [[I think we're getting off track.]] [[Let's stick to the agenda.]] [[Can we park that and come back to it later?]]
- **Время:** [[We're running short of time.]] [[Let's keep this brief.]]
- **Итоги:** [[Let's recap.]] [[So, the action points are…]] [[Who's going to take this forward?]]
- **Закрыть:** [[Thanks, everyone. I'll circulate the minutes.]] — Разошлю протокол.`,
        },
        {
          t: "dialog",
          h: "Диалог: переговоры с поставщиком",
          lines: [
            ["Buyer", "Thanks for meeting us. Our main priority is to reduce delivery times.", "Спасибо, что встретились. Наш главный приоритет — сократить сроки поставки."],
            ["Supplier", "I understand. At the moment we deliver within ten days. What are you looking for?", "Понимаю. Сейчас мы поставляем в течение десяти дней. Что вам нужно?"],
            ["Buyer", "Ideally, five days. How would you feel about that?", "В идеале пять дней. Как вы к этому отнесётесь?"],
            ["Supplier", "That might be difficult for us. We could do seven days if you were able to increase your order volume.", "Это может быть для нас затруднительно. Мы могли бы сделать семь дней, если бы вы увеличили объём заказов."],
            ["Buyer", "Is there any flexibility on price if we order twenty percent more?", "Есть ли гибкость по цене, если мы закажем на двадцать процентов больше?"],
            ["Supplier", "We'd be prepared to offer a five percent discount, provided that you sign a one-year contract.", "Мы готовы дать скидку пять процентов при условии, что вы подпишете контракт на год."],
            ["Buyer", "I think we can live with that. So, just to confirm: seven days, five percent off, a one-year contract.", "Думаю, это нас устроит. Итак, подтверждаю: семь дней, скидка пять процентов, контракт на год."],
            ["Supplier", "Agreed. I'll put that in writing and send it over today.", "Договорились. Я зафиксирую это письменно и пришлю сегодня."],
          ],
          qs: [
            ["Какой срок поставки согласовали?", ["5 дней", "7 дней", "10 дней"], 1, ""],
            ["Какое условие скидки?", ["Предоплата", "Контракт на год", "Заказ на 50% больше"], 1, "Provided that you sign a one-year contract."],
            ["Что значит «That might be difficult for us»?", ["Да, конечно", "Скорее нет — мягкий отказ", "Нужно подумать неделю"], 1, ""],
          ],
        },
        {
          t: "choice",
          h: "Выберите лучший вариант",
          items: [
            ["Вежливо отказать:", ["No way.", "I'm afraid that's not quite what we had in mind.", "We don't want it."], 1, ""],
            ["Предложить компромисс:", ["Let's meet halfway.", "Let's meet in the middle place.", "We go to half."], 0, ""],
            ["Вернуть встречу к теме:", ["Stop talking about that.", "I think we're getting off track.", "This is not important."], 1, ""],
            ["Попросить мнение коллеги:", ["What's your take on this?", "What do you take?", "Take your opinion."], 0, ""],
            ["Зафиксировать договорённость:", ["So, just to confirm, we've agreed that…", "OK bye.", "Write it."], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мы были бы готовы снизить цену при условии, что вы заплатите заранее.", "We'd be prepared to lower the price, provided that you pay in advance.|We would be prepared to reduce the price provided that you pay in advance.|We'd be prepared to reduce the price provided you pay in advance.|We would be prepared to lower the price provided you pay in advance.", ""],
            ["Есть ли гибкость по срокам?", "Is there any flexibility on the deadline?|Is there any flexibility on deadlines?|Is there any flexibility on the timing?|Is there any flexibility with the deadline?", ""],
            ["Давайте вернёмся к этому позже.", "Let's come back to this later.|Let's come back to it later.|Can we park that and come back to it later?|Let's get back to this later.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Переговоры: Our priority is… · How would you feel about…? · We'd be prepared to…, provided that… · Let's meet halfway. · Just to confirm…
- Ведение встречи: Let's get started · What's your take…? · We're getting off track · Let's recap · action points.`,
        },
      ],
    },
    {
      id: "b2_u9_l2",
      title: "Объяснить сложное просто и ответить на неожиданный вопрос",
      goal: "Вы научитесь объяснять сложные темы из своей области и уверенно отвечать на трудные вопросы — критерий финальной проверки плана.",
      steps: [
        {
          t: "text",
          h: "Объяснить сложное простыми словами",
          md: `Критерий финала плана: **10 минут обсуждать рабочую тему и отвечать на неожиданные вопросы**. Ключ — умение упрощать.

**Техники:**
1. **Начать с сути:** [[In a nutshell,…]] — В двух словах… / [[The basic idea is that…]] / [[Put simply,…]]
2. **Аналогия:** [[Think of it as…]] — Представьте это как… / [[It's a bit like…]] / [[It works in a similar way to…]]
3. **Пример:** [[Let me give you an example.]] / [[Imagine that…]]
4. **Шаги:** [[First…, then…, and finally…]]
5. **Перефразировать:** [[In other words,…]] / [[What I mean is…]]
6. **Проверить понимание:** [[Does that make sense?]] / [[Is that clear so far?]] / [[Shall I go over that again?]]

**Пример (объясняем облачные технологии):**
[[In a nutshell, cloud computing means using someone else's computers over the internet. Think of it as renting a flat instead of buying a house: you don't own it, but you can use it whenever you need, and someone else takes care of repairs. Does that make sense?]]`,
        },
        {
          t: "text",
          h: "Неожиданные и трудные вопросы",
          md: `**Выиграть время (не молчать!):**
- [[That's a good question.]] / [[That's an interesting point.]]
- [[Let me think about that for a moment.]]
- [[How can I put this?]]

**Уточнить вопрос:**
- [[If I understand you correctly, you're asking whether…]]
- [[Could you clarify what you mean by…?]]
- [[Are you asking about… or…?]]

**Если не знаете ответа (честно и профессионально):**
- [[I'm not sure off the top of my head, but I'll find out and get back to you.]] — Навскидку не скажу, но выясню и сообщу.
- [[That's outside my area, but I can put you in touch with someone who knows.]]

**Ответить уклончиво, но вежливо:**
- [[It depends on several factors.]]
- [[The short answer is yes, but there are a few caveats.]] — Короткий ответ — да, но есть оговорки.
- [[I'd rather not speculate on that.]] — Не хотел бы гадать.

**Закрыть ответ:** [[Does that answer your question?]]`,
        },
        {
          t: "choice",
          h: "Что сказать?",
          items: [
            ["Начать объяснение с сути:", ["In a nutshell,…", "In a nut,…", "In the shell,…"], 0, ""],
            ["Предложить аналогию:", ["Think of it as…", "Think it like…", "Imagine it as like…"], 0, ""],
            ["Не знаете ответа:", ["I don't know.", "I'm not sure off the top of my head, but I'll get back to you.", "Next question."], 1, ""],
            ["Уточнить вопрос:", ["What?", "If I understand you correctly, you're asking…", "Repeat."], 1, ""],
            ["Выиграть время:", ["Let me think about that for a moment.", "Wait.", "Hmm, no."], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Проще говоря, это система, которая автоматизирует отчёты.", "Put simply, it's a system that automates reports.|Simply put, it's a system that automates reports.|Put simply, it is a system which automates reports.|In simple terms, it's a system that automates reports.", ""],
            ["Представьте это как библиотеку для данных.", "Think of it as a library for data.|Imagine it as a library for data.|Think of it as a data library.", ""],
            ["Если я правильно понял, вы спрашиваете о стоимости.", "If I understand you correctly, you're asking about the cost.|If I understood you correctly, you're asking about the cost.|If I understand correctly, you're asking about the price.|If I understand you correctly, you are asking about the cost.|If I understand you correctly, you're asking about the price.", ""],
          ],
        },
        {
          t: "speak",
          h: "Объясните вслух тему из своей работы",
          items: [
            ["In a nutshell, my job is about…", "В двух словах, моя работа — это…"],
            ["Think of it as…", "Представьте это как…"],
            ["Let me give you an example.", "Приведу пример."],
            ["Does that make sense?", "Понятно?"],
            ["That's a good question. Let me think for a moment.", "Хороший вопрос. Дайте секунду подумать."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Объяснение: In a nutshell / Put simply → Think of it as… → example → In other words → Does that make sense?
- Трудные вопросы: That's a good question → If I understand correctly… → I'll get back to you / It depends…

**Говорение:** тема «Объясните сложное просто» и «Собеседование на работу» с ИИ-партнёром.`,
        },
      ],
    },
    {
      id: "b2_u9_l3",
      title: "Финал: экзамен B2 First и что дальше",
      goal: "Вы узнаете устройство экзамена B2 First, стратегии для каждой части и план, как поддерживать и развивать уровень после курса.",
      steps: [
        {
          t: "text",
          h: "Финальная проверка плана",
          md: `План завершается проверкой в конце месяца 18:
- **Пробный экзамен Cambridge B2 First (все 4 части) или IELTS: не ниже 70–75% по каждой части.**
- 10 минут обсуждать рабочую тему и отвечать на неожиданные вопросы.
- 85–90% понимания подкаста или интервью на обычную тему без текста.
- По желанию — официальный экзамен: документ для работы.

**Устройство B2 First (≈3,5 часа):**
| Часть | Время | Что внутри |
|---|---|---|
| **Reading & Use of English** | 1 ч 15 мин | 7 заданий: лексика в контексте, грамматика, словообразование, перефразирование (key word transformation), понимание текстов |
| **Writing** | 1 ч 20 мин | 2 текста по 140–190 слов: обязательное эссе + на выбор письмо, статья, отчёт или рецензия |
| **Listening** | ≈40 мин | 4 части: короткие фрагменты, заполнение пропусков, сопоставление, интервью |
| **Speaking** | 14 мин | В паре с другим кандидатом: о себе, сравнение фото, совместное обсуждение, дискуссия |`,
        },
        {
          t: "text",
          h: "Стратегии по частям",
          md: `**Use of English:**
- Key word transformation проверяет ровно то, что вы прошли: пассив, условные, wish, косвенную речь, модальные глаголы, фразовые глаголы. Пример: «I regret not studying harder. **WISH** → I ___ harder.» Ответ: **wish I had studied**.
- Word formation — суффиксы и приставки (юнит 7).

**Writing:**
- Чёткая структура и абзацы, связки (юнит 6), разнообразная грамматика (хотя бы одно условное, пассив, relative clause).
- Соблюдайте объём и стиль (формальный для отчёта, нейтральный для статьи).

**Listening:**
- Используйте время до прослушивания, чтобы прочитать вопросы и предугадать ответ.
- Ответы часто перефразированы: в аудио «It wasn't cheap», в вариантах — «expensive».

**Speaking:**
- Говорите полными ответами, а не «yes/no». Разворачивайте: мнение + причина + пример.
- В сравнении фото: [[Both pictures show…, but in the first one…, whereas in the second…]] [[I'd imagine that…]] [[They might be…]] (модальные вероятности!).
- В диалоге с партнёром: [[What do you think?]] [[I see what you mean, but…]] — взаимодействие оценивается.

>i Тренируйтесь на встроенном тесте уровня и в звонках с Мией (тема «Собеседование», «Дебаты»): попросите её провести с вами Speaking-часть экзамена.`,
        },
        {
          t: "choice",
          h: "Key word transformation: перефразируйте",
          items: [
            ["I regret not taking the job. (WISH) → I ___ the job.", ["wish I took", "wish I had taken", "wish I would take"], 1, "Сожаление о прошлом — wish + had V3."],
            ["People say he is a genius. (SAID) → He ___ a genius.", ["is said to be", "is said being", "said to be"], 0, "Безличный пассив."],
            ["I'm sure she forgot. (MUST) → She ___ forgotten.", ["must have", "must be", "can't have"], 0, "must have + V3."],
            ["«Don't touch the wire,» he said to me. (TOLD) → He ___ the wire.", ["told me not to touch", "told me don't touch", "said me not touch"], 0, "Косвенная просьба."],
            ["Although it rained, we played. (DESPITE) → ___, we played.", ["Despite it rained", "Despite the rain", "Despite of the rain"], 1, ""],
            ["They are repairing my car. (HAVING) → I'm ___.", ["having my car repaired", "having repaired my car", "having my car repair"], 0, "have something done."],
          ],
        },
        {
          t: "text",
          h: "После курса: как не потерять уровень",
          md: `Вы прошли путь от нуля до B2 — это около 550 часов работы. Чтобы уровень рос дальше:

1. **Сохраните ежедневный минимум** — 15–20 минут: карточки + подкаст. Регулярность важнее длительности.
2. **Живое общение** — 1–2 звонка Мии в неделю, а также коллеги и друзья.
3. **Тексты по интересам** — просите Мию тексты и разговоры по вашей профессии и хобби.
4. **Пишите** — рабочие письма, посты, заметки по-английски.
5. **Следующая цель** — C1: продолжайте разговоры с Мией на всё более сложные темы.

>i Этот курс можно перепроходить: уроки открыты, карточки продолжают повторяться, а ИИ-наставник поможет с любой новой темой.

**Поздравляем с завершением курса!** 🎓`,
        },
      ],
    },
  ],
};
