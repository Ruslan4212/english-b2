// B2 юнит 6: связки и вводные слова, структура эссе.
export default {
  id: "b2_u6",
  level: "B2",
  phase: 4,
  icon: "🧱",
  title: "Связки и вводные слова: как писать и говорить связно",
  about: "Контраст (although, despite, however, whereas), причина и следствие, добавление; структура эссе и отчёта.",
  lessons: [
    {
      id: "b2_u6_l1",
      title: "Контраст: although, despite, however, whereas",
      goal: "Вы научитесь выражать противопоставление разными способами и не путать грамматику although и despite.",
      steps: [
        {
          t: "text",
          h: "Хотя, несмотря на, однако",
          md: `Все эти слова выражают контраст, но **грамматически ведут себя по-разному** — это частое задание B2 First.

| Слово | После него | Пример |
|---|---|---|
| **although / though / even though** | **предложение** (подлежащее + глагол) | [[Although it was raining, we went out.]] — Хотя шёл дождь, мы пошли гулять. |
| **despite / in spite of** | **существительное** или **-ing** | [[Despite the rain, we went out.]] / [[Despite feeling tired, she kept working.]] |
| **despite the fact that** | предложение | [[Despite the fact that it was raining, we went out.]] |
| **however** | новое предложение, после него запятая | [[It was raining. However, we went out.]] |
| **but** | соединяет две части | [[It was raining, but we went out.]] |
| **whereas / while** | сравнение двух фактов | [[I love coffee, whereas my wife prefers tea.]] |
| **nevertheless / nonetheless** | (формально) тем не менее | [[The task was difficult. Nevertheless, we finished on time.]] |
| **on the other hand** | с другой стороны | [[It's expensive. On the other hand, it's very reliable.]] |

> Типичные ошибки: «Despite it was raining» (после despite нельзя предложение), «Despite of the rain» (despite **без** of; in spite **of** — с of), «Although it was raining, but we went» (although и but вместе — нельзя!).

**even though** — сильнее, «даже несмотря на то что»: [[He went to work even though he was ill.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["___ the traffic, we arrived on time.", ["Although", "Despite", "However"], 1, "+ существительное — Despite."],
            ["___ she was tired, she finished the report.", ["Despite", "Although", "In spite of"], 1, "+ предложение — Although."],
            ["The hotel was nice. ___, the food was terrible.", ["Although", "However", "Despite"], 1, "Новое предложение с запятой — However."],
            ["I prefer the mountains, ___ my husband loves the beach.", ["whereas", "despite", "however"], 0, "Сравнение двух фактов."],
            ["", ["Despite of the cold, we swam.", "Despite the cold, we swam.", "In spite the cold, we swam."], 1, "despite без of; in spite of — с of."],
            ["", ["Although it was late, but we kept working.", "Although it was late, we kept working."], 1, "although и but вместе нельзя."],
            ["___ having little experience, she got the job.", ["Although", "Despite", "Even though"], 1, "+ -ing — Despite."],
          ],
        },
        {
          t: "fill",
          h: "Перефразируйте: допишите",
          items: [
            ["Although he is rich, he's unhappy. → Despite ___ rich, he's unhappy.", "being", "despite + -ing."],
            ["Despite the bad weather, the event was a success. → Although the weather ___ bad, the event was a success.", "was", "Although + предложение."],
            ["It was cheap. ___, it was very good quality. (тем не менее, одно слово)", "However|Nevertheless|Nonetheless", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Хотя он много работает, денег мало.", "Although he works a lot, he doesn't have much money.|Although he works hard, he doesn't earn much.|Although he works a lot, he has little money.|Even though he works a lot, he doesn't have much money.|Although he works hard, he doesn't have much money.", ""],
            ["Несмотря на дождь, концерт состоялся.", "Despite the rain, the concert took place.|In spite of the rain, the concert took place.|Despite the rain, the concert went ahead.", ""],
            ["Я люблю города, тогда как моя сестра предпочитает деревню.", "I love cities, whereas my sister prefers the countryside.|I like cities, whereas my sister prefers the countryside.|I love cities, while my sister prefers the countryside.|I love cities, whereas my sister prefers the country.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- although / even though + **предложение**; despite / in spite of + **сущ. / -ing**.
- however, nevertheless — начинают новое предложение, после них запятая.
- whereas / while — сравнение; although и but вместе нельзя.`,
        },
      ],
    },
    {
      id: "b2_u6_l2",
      title: "Причина, следствие, добавление, цель",
      goal: "Вы расширите набор связок, чтобы речь и письмо звучали логично и разнообразно.",
      steps: [
        {
          t: "text",
          h: "Таблица связок",
          md: `**Причина:**
| Связка | После неё | Пример |
|---|---|---|
| because / as / since | предложение | [[As it was late, we took a taxi.]] |
| because of / due to / owing to | существительное | [[The flight was cancelled due to bad weather.]] |

**Следствие:**
- [[so]] — поэтому (разговорно): [[It was late, so we left.]]
- [[therefore]] / [[consequently]] / [[as a result]] — следовательно, в результате (формально): [[Costs rose. As a result, prices increased.]]
- [[that's why]] — вот почему

**Добавление:**
- [[also]], [[too]], [[as well]] — тоже
- [[moreover]] / [[furthermore]] / [[in addition]] — более того, кроме того (формально)
- [[what's more]], [[besides]] — к тому же (разговорно)
- [[not only… but also…]] — не только… но и…: [[The plan is not only cheap but also effective.]]

**Цель:**
- [[to]] / [[in order to]] / [[so as to]] + глагол
- [[so that]] + предложение: [[I left early so that I wouldn't miss the train.]]

**Пример, уточнение:**
- [[for example]], [[for instance]], [[such as]] (перед списком): [[sports such as tennis and golf]]
- [[in other words]], [[that is to say]] — другими словами

> **due to** + существительное: «due to it was raining» — ошибка. Правильно: [[due to the rain]] или [[because it was raining]].`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["The match was cancelled ___ the storm.", ["because", "due to", "so"], 1, "+ существительное — due to."],
            ["Sales fell. ___, the company cut costs.", ["As a result", "Because of", "Although"], 0, "Следствие."],
            ["The course is not only useful ___ fun.", ["and also", "but also", "as well"], 1, "not only… but also."],
            ["I spoke slowly ___ everyone could understand.", ["so that", "in order to", "because"], 0, "+ предложение — so that."],
            ["___ it was a holiday, the shops were closed.", ["Since", "Due to", "Despite"], 0, "Причина + предложение — Since."],
            ["The price is high. ___, the quality is poor.", ["Moreover", "However", "Therefore"], 0, "Добавление негатива к негативу — Moreover."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Рейс задержали из-за тумана.", "The flight was delayed due to fog.|The flight was delayed because of fog.|The flight was delayed because of the fog.|The flight was delayed due to the fog.", "+ сущ. — due to / because of."],
            ["Более того, этот вариант дешевле.", "Moreover, this option is cheaper.|Furthermore, this option is cheaper.|What's more, this option is cheaper.|In addition, this option is cheaper.|Moreover, this option is less expensive.", ""],
            ["Я записал адрес, чтобы не забыть его.", "I wrote down the address so that I wouldn't forget it.|I wrote down the address so as not to forget it.|I wrote the address down so that I wouldn't forget it.|I wrote down the address so that I don't forget it.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Причина: because/as/since + предложение; because of/due to + сущ.
- Следствие: so / therefore / as a result. Добавление: moreover, furthermore, what's more, not only… but also.
- Цель: to / in order to / so that.`,
        },
      ],
    },
    {
      id: "b2_u6_l3",
      title: "Эссе-мнение на 200–250 слов",
      goal: "Вы освоите структуру эссе и отчёта уровня B2 — именно такие тексты требует план и экзамен B2 First.",
      steps: [
        {
          t: "text",
          h: "Структура эссе (opinion essay)",
          md: `**Абзац 1 — Введение (2–3 предложения):** перефразируйте тему и обозначьте позицию.
- [[It is often argued that…]] — Часто утверждают, что…
- [[Nowadays, more and more people…]]
- [[In this essay, I will explain why I believe…]]

**Абзац 2 — Аргумент 1 + пример:**
- [[Firstly, / To begin with,…]]
- [[For instance,…]] / [[This is because…]]

**Абзац 3 — Аргумент 2 + пример:**
- [[Secondly, / Furthermore,…]]
- [[A good example of this is…]]

**Абзац 4 — Контраргумент и ответ на него:**
- [[On the other hand, some people claim that…]]
- [[While it is true that…, I believe…]]
- [[However, this argument overlooks the fact that…]] — Однако этот аргумент упускает из виду, что…

**Абзац 5 — Заключение:**
- [[In conclusion, / To sum up, / On balance,…]]
- [[For the reasons mentioned above, I firmly believe that…]]

**Формальный стиль:** без сокращений (do not, it is), без разговорных слов (a lot of → many / a great deal of; get → obtain/receive; big → significant), безличные конструкции (It is believed that…).`,
        },
        {
          t: "text",
          h: "Отчёт (report) — чем отличается",
          md: `Отчёт — практический текст для руководства:
- **Заголовок и подзаголовки:** Introduction, Findings, Recommendations, Conclusion.
- **Цель в начале:** [[The aim of this report is to…]] / [[This report outlines…]]
- **Факты, а не эмоции:** [[It was found that…]], [[The majority of staff (65%) stated that…]]
- **Рекомендации:** [[It is recommended that…]], [[I would suggest that…]], [[The company should consider…]]
- Списки допустимы и приветствуются.

>i Оба типа текстов — в разделе «✍️ Письмо» (задания B2). ИИ-наставник проверит структуру, связки и стиль.`,
        },
        {
          t: "choice",
          h: "Формальный или разговорный стиль?",
          items: [
            ["Лучше для эссе:", ["A lot of people think…", "Many people believe…"], 1, ""],
            ["Лучше для эссе:", ["It's a big problem.", "It is a significant problem."], 1, "Без сокращений, точнее лексика."],
            ["Начало контраргумента:", ["But some guys say…", "On the other hand, some people claim that…"], 1, ""],
            ["Рекомендация в отчёте:", ["It is recommended that the company invests in training.", "The company should totally invest in training!"], 0, ""],
            ["Заключение эссе:", ["So yeah, that's it.", "On balance, I firmly believe that…"], 1, ""],
          ],
        },
        {
          t: "order",
          h: "Соберите фразы эссе",
          items: [
            ["It is often argued that technology makes us less sociable.", "Часто утверждают, что технологии делают нас менее общительными."],
            ["While it is true that we spend a lot of time online, this is not the whole picture.", "Хотя мы действительно проводим много времени онлайн, это не вся картина."],
            ["In conclusion, I firmly believe that the benefits outweigh the drawbacks.", "В заключение я твёрдо убеждён, что преимущества перевешивают недостатки."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Контраст: although + предложение / despite + сущ.; however; whereas.
- Причина/следствие: because of / due to; therefore / as a result. Добавление: moreover, furthermore.
- Эссе: введение → 2 аргумента → контраргумент → вывод. Формальный стиль.

**Письмо:** эссе-мнение «Работа из дома приносит больше вреда, чем пользы» (200–250 слов).`,
        },
      ],
    },
  ],
};
