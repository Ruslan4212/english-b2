// B2 юнит 5: продвинутое будущее — Future Continuous, Future Perfect, be about to, be likely to.
export default {
  id: "b2_u5",
  level: "B2",
  phase: 4,
  icon: "🚀",
  title: "Продвинутое будущее",
  about: "Future Continuous (буду делать), Future Perfect (уже сделаю к…), be about to, be likely to, be due to.",
  lessons: [
    {
      id: "b2_u5_l1",
      title: "This time tomorrow I'll be flying: Future Continuous",
      goal: "Вы научитесь говорить о действиях, которые будут в процессе в момент в будущем, и вежливо спрашивать о планах.",
      steps: [
        {
          t: "text",
          h: "will be + -ing",
          md: `**Future Continuous** — действие будет **в процессе** в определённый момент будущего:
- [[This time tomorrow I'll be flying to Rome.]] — Завтра в это время я буду лететь в Рим.
- [[Don't call at eight — I'll be having dinner.]] — Не звони в восемь — я буду ужинать.
- [[In ten years, most people will be working from home.]] — Через 10 лет большинство будет работать из дома.

**Вежливый вопрос о планах** — очень полезно в работе:
- [[Will you be using the meeting room this afternoon?]] — Вы будете пользоваться переговорной сегодня днём? (мягче, чем «Will you use…?», потому что не звучит как просьба)
- [[Will you be coming to the party?]] — Ты будешь на вечеринке?

**Обычное течение событий** («так и так будет»): [[I'll be seeing Anna tomorrow, so I can give her the book.]] — Я завтра всё равно увижу Анну, могу передать книгу.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["At 10 am tomorrow I ___ an exam.", ["will take", "will be taking"], 1, "В процессе в момент — Continuous."],
            ["___ you be using the car tonight? I'd like to borrow it.", ["Will", "Are", "Do"], 0, "Вежливый вопрос о планах."],
            ["Don't phone at 7. We ___ the match.", ["will watch", "will be watching"], 1, ""],
            ["I promise I ___ you tomorrow.", ["'ll call", "'ll be calling"], 0, "Обещание — Future Simple."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Завтра в это время я буду лежать на пляже.", "This time tomorrow I'll be lying on the beach.|This time tomorrow I will be lying on the beach.|Tomorrow at this time I'll be lying on the beach.", ""],
            ["Вы будете использовать проектор сегодня?", "Will you be using the projector today?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **will be + -ing** — в процессе в момент будущего; вежливо о планах: [[Will you be using…?]]`,
        },
      ],
    },
    {
      id: "b2_u5_l2",
      title: "By Friday I'll have finished: Future Perfect",
      goal: "Вы научитесь говорить о том, что будет завершено к определённому моменту, — очень полезно для сроков и планов.",
      steps: [
        {
          t: "text",
          h: "will have + V3",
          md: `**Future Perfect** — действие **завершится к** определённому моменту в будущем. Почти всегда с **by** (к):
- [[By Friday I'll have finished the report.]] — К пятнице я закончу отчёт.
- [[By the time you arrive, we'll have eaten.]] — К тому времени, как ты приедешь, мы уже поедим.
- [[In June we'll have been married for ten years.]] — В июне будет десять лет, как мы женаты.

**Future Perfect Continuous** (как долго будет длиться к моменту): [[By next month, I'll have been working here for five years.]] — В следующем месяце будет пять лет, как я здесь работаю.

**Отрицание и вопрос:** [[We won't have finished by Monday.]] [[Will you have finished by six?]]

> **by** = «к, не позднее», **until** = «до (и всё это время)». [[I'll finish by 6]] — закончу не позже 6. [[I'll work until 6]] — буду работать до 6.`,
        },
        {
          t: "examples",
          h: "Сроки и планы",
          items: [
            ["We'll have launched the app by the end of the year.", "К концу года мы запустим приложение."],
            ["I won't have finished the translation by tomorrow.", "Я не закончу перевод к завтрашнему дню."],
            ["Will you have read the contract by Monday?", "Ты прочитаешь договор к понедельнику?"],
            ["By 2030, the city will have built three new metro lines.", "К 2030 году город построит три новые линии метро."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["By the end of the month I ___ the project.", ["will finish", "will have finished"], 1, "к моменту — Future Perfect."],
            ["I'll finish the report ___ Friday. (не позднее)", ["until", "by"], 1, ""],
            ["I'll be in the office ___ 6 pm. (и всё время до)", ["until", "by"], 0, ""],
            ["By next year, she ___ here for a decade.", ["will work", "will have been working"], 1, "Длительность к моменту."],
            ["By the time you get home, I ___ dinner.", ["will have cooked", "will be cooked"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["К понедельнику я всё сделаю.", "By Monday I'll have done everything.|I'll have done everything by Monday.|By Monday I will have done everything.|I'll have finished everything by Monday.|By Monday I'll have finished everything.", ""],
            ["К тому времени, как ты приедешь, фильм уже начнётся.", "By the time you arrive, the film will have started.|By the time you come, the film will have started.|By the time you get here, the film will have started.|By the time you arrive, the movie will have started.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **will have + V3** — будет завершено к моменту (by).
- **will have been + -ing** — как долго к моменту.
- by — к; until — до.`,
        },
      ],
    },
    {
      id: "b2_u5_l3",
      title: "Be about to, be likely to, be due to: оттенки будущего",
      goal: "Вы освоите выражения, которые делают речь о будущем точнее и естественнее.",
      steps: [
        {
          t: "text",
          h: "Полезные конструкции",
          md: `| Конструкция | Значение | Пример |
|---|---|---|
| **be about to + глагол** | вот-вот, собираюсь прямо сейчас | [[Hurry, the train is about to leave!]] — Скорее, поезд вот-вот отправится! |
| **be on the point of + -ing** | на грани, вот-вот | [[I was on the point of leaving when he called.]] |
| **be likely / unlikely to** | вероятно / маловероятно | [[Prices are likely to rise.]] — Цены, вероятно, вырастут. [[He's unlikely to come.]] |
| **be bound to** | обязательно, неизбежно | [[It's bound to rain — it always does on holidays.]] |
| **be due to** | ожидается по расписанию | [[The plane is due to land at 6.]] — Самолёт должен приземлиться в 6. |
| **be set to** | (в новостях) собирается, ожидается | [[The company is set to cut 500 jobs.]] |
| **be to + глагол** | (формально) должно состояться / указание | [[The president is to visit China next month.]] |

**Вероятность — ещё способы:**
- [[There's a good chance that…]] — Велика вероятность, что…
- [[I doubt (that) he'll come.]] — Сомневаюсь, что он придёт.
- [[It's highly unlikely that…]]

>i В прошлом **was about to** = «уже собирался, как вдруг…»: [[I was about to call you!]] — Я как раз собирался тебе позвонить!`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Quick! The film is ___ start!", ["about to", "due", "likely"], 0, "Вот-вот — about to."],
            ["The meeting is ___ to begin at 3.", ["about", "due", "bound"], 1, "По расписанию — due to."],
            ["It's going to be difficult. He's ___ to agree.", ["unlikely", "about", "due"], 0, "Маловероятно — unlikely to."],
            ["Don't worry, she's ___ to call. She always does.", ["bound", "about", "due"], 0, "Обязательно — bound to."],
            ["I ___ about to call you!", ["am", "was", "will"], 1, "Как раз собирался — was about to."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я как раз собирался уходить.", "I was about to leave.|I was just about to leave.|I was on the point of leaving.", ""],
            ["Поезд должен прибыть в 7:15.", "The train is due to arrive at 7:15.|The train is due at 7:15.|The train is due to arrive at seven fifteen.", ""],
            ["Цены, вероятно, вырастут.", "Prices are likely to rise.|Prices are likely to go up.|Prices are likely to increase.|Prices will probably rise.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Future Continuous: will be doing — в процессе / вежливо о планах.
- Future Perfect: will have done by… — завершится к.
- be about to · be likely to · be bound to · be due to · be set to.`,
        },
      ],
    },
  ],
};
