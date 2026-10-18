// B2 юнит 4: пассив во всех временах, have something done, безличный пассив.
export default {
  id: "b2_u4",
  level: "B2",
  phase: 4,
  icon: "⚙️",
  title: "Пассив во всех временах и have something done",
  about: "Полная таблица пассива, have/get something done, It is said that…, He is believed to…",
  lessons: [
    {
      id: "b2_u4_l1",
      title: "Пассив во всех временах",
      goal: "Вы соберёте полную таблицу пассивного залога и научитесь уверенно использовать его в любом времени.",
      steps: [
        {
          t: "text",
          h: "Полная таблица",
          md: `Принцип всегда один: **be в нужном времени + V3**. Меняется только форма be.

| Время | Актив | Пассив |
|---|---|---|
| Present Simple | They **build** houses. | Houses **are built**. |
| Present Continuous | They **are building** a house. | A house **is being built**. |
| Present Perfect | They **have built** a house. | A house **has been built**. |
| Past Simple | They **built** a house. | A house **was built**. |
| Past Continuous | They **were building** a house. | A house **was being built**. |
| Past Perfect | They **had built** a house. | A house **had been built**. |
| Future Simple | They **will build** a house. | A house **will be built**. |
| Future Perfect | They **will have built** it by May. | It **will have been built** by May. |
| be going to | They **are going to build** a house. | A house **is going to be built**. |
| Модальные | They **must build** it. | It **must be built**. |
| Модальные (прошлое) | They **should have built** it. | It **should have been built**. |

> Самые частые ошибки: пропустить **being** в Continuous («A house is built now» ≠ «строится сейчас») и **been** в Perfect («has built» — это актив!).`,
        },
        {
          t: "examples",
          h: "Пассив в новостях и отчётах",
          items: [
            ["A new hospital is being built in the city centre.", "В центре города строится новая больница."],
            ["The suspect was being questioned when the lawyer arrived.", "Подозреваемого допрашивали, когда приехал адвокат."],
            ["By the time we arrived, all the tickets had been sold.", "К моменту нашего приезда все билеты были распроданы."],
            ["The project will have been completed by the end of the year.", "Проект будет завершён к концу года."],
            ["The decision is going to be announced on Monday.", "Решение объявят в понедельник."],
            ["This problem should have been solved months ago.", "Эту проблему следовало решить ещё несколько месяцев назад."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильную форму",
          items: [
            ["The road ___ at the moment.", ["is repaired", "is being repaired", "has repaired"], 1, "Сейчас — is being."],
            ["All the cake ___ before I arrived.", ["was eaten", "had been eaten", "has been eaten"], 1, "Раньше другого прошлого — had been."],
            ["The results ___ yet.", ["haven't been published", "haven't published", "weren't published"], 0, "Perfect passive."],
            ["The report must ___ by Friday.", ["finish", "be finished", "been finished"], 1, "must be + V3."],
            ["The work ___ by next Monday.", ["will have finished", "will have been finished"], 1, "Future Perfect passive."],
            ["This should ___ checked earlier.", ["have been", "been", "be"], 0, "should have been + V3."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте в пассив",
          items: [
            ["They are cleaning the office now. → The office ___ now.", "is being cleaned", ""],
            ["Someone had stolen the car. → The car ___.", "had been stolen", ""],
            ["They will deliver the parcel tomorrow. → The parcel ___ tomorrow.", "will be delivered", ""],
            ["They should have told us. → We ___ told.", "should have been", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Сейчас строится новый мост.", "A new bridge is being built now.|A new bridge is being built.|A new bridge is now being built.", ""],
            ["Когда мы пришли, все места уже были заняты.", "When we arrived, all the seats had already been taken.|When we arrived, all the seats had been taken.|When we came, all the seats had already been taken.", ""],
            ["Отчёт должны были отправить вчера.", "The report should have been sent yesterday.|The report was supposed to be sent yesterday.|The report should've been sent yesterday.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Пассив = be (в нужном времени) + V3.
- Continuous — **being**, Perfect — **been**, модальные — **be / have been**.`,
        },
      ],
    },
    {
      id: "b2_u4_l2",
      title: "Have something done: мне сделали",
      goal: "Вы научитесь говорить об услугах, которые для вас делают другие: «я подстригся», «мне починили машину».",
      steps: [
        {
          t: "text",
          h: "Я подстригся (в парикмахерской)",
          md: `По-русски мы говорим «Я подстригся», «Я починил машину», хотя стриг парикмахер, а чинил механик. В английском так нельзя: [[I cut my hair]] значит, что вы стриглись **сами**.

Если работу для вас сделал **другой человек** (обычно за деньги), используют:

**have + предмет + V3**
- [[I had my hair cut yesterday.]] — Я вчера подстригся (в парикмахерской).
- [[We're having our kitchen renovated.]] — Нам ремонтируют кухню.
- [[You should have your eyes tested.]] — Тебе стоит проверить зрение (у врача).
- [[I need to have my car repaired.]] — Мне нужно отдать машину в ремонт.

**get + предмет + V3** — то же самое, разговорнее: [[I got my phone fixed.]]

Время показывает **have**: I **have** my hair cut (регулярно), I **had** it cut (вчера), I'**m having** it cut (сейчас/скоро), I'**ll have** it cut, I've **had** it cut.

**Неприятности:** та же конструкция — когда с вами что-то случилось: [[She had her bag stolen.]] — У неё украли сумку. [[He had his licence taken away.]] — У него отобрали права.`,
        },
        {
          t: "examples",
          h: "Услуги",
          items: [
            ["I'm going to have my hair cut on Saturday.", "В субботу я иду стричься."],
            ["We had the house painted last summer.", "Прошлым летом нам покрасили дом."],
            ["Where can I get my watch repaired?", "Где можно починить часы?"],
            ["I've just had my teeth cleaned.", "Мне только что почистили зубы (у стоматолога)."],
            ["They had their flat broken into.", "Их квартиру обокрали."],
            ["You should get your documents translated.", "Тебе стоит перевести документы (у переводчика)."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Я подстригся в парикмахерской:", ["I cut my hair.", "I had my hair cut.", "I had cut my hair."], 1, ""],
            ["We're ___ a new kitchen installed next week.", ["having", "making", "doing"], 0, ""],
            ["I need to get my car ___.", ["repair", "repaired", "repairing"], 1, "get + предмет + V3."],
            ["У неё украли телефон:", ["She stole her phone.", "She had her phone stolen.", "Her phone had stolen."], 1, ""],
            ["Порядок слов:", ["I had cut my hair.", "I had my hair cut."], 1, "have + предмет + V3."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мне нужно отремонтировать машину (в сервисе).", "I need to have my car repaired.|I need to get my car repaired.|I need to have my car fixed.|I need to get my car fixed.", ""],
            ["Вчера я подстригся.", "I had my hair cut yesterday.|Yesterday I had my hair cut.|I got my hair cut yesterday.|I got a haircut yesterday.", ""],
            ["У него украли кошелёк.", "He had his wallet stolen.|His wallet was stolen.|He got his wallet stolen.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **have/get + предмет + V3** — услугу сделал кто-то другой; также неприятности (had my bag stolen).
- Время меняется в have: had it done, I'm having it done, I'll have it done.`,
        },
      ],
    },
    {
      id: "b2_u4_l3",
      title: "It is said that…: безличный пассив",
      goal: "Вы научитесь передавать мнения и слухи в формальном стиле — «считается, что», «говорят, что» — как в новостях и эссе.",
      steps: [
        {
          t: "text",
          h: "Говорят, считается, предполагается",
          md: `В новостях, отчётах и эссе часто нужно сказать «**говорят**, что…», «**считается**, что…», не называя, кто именно так считает. Для этого есть две формальные конструкции с глаголами **say, believe, think, expect, report, know, consider, estimate**:

**1. It + is/was + V3 + that…**
- [[It is said that the castle is haunted.]] — Говорят, что в замке водятся привидения.
- [[It is believed that the economy will grow.]] — Считается, что экономика вырастет.
- [[It was reported that ten people were injured.]] — Сообщалось, что пострадали десять человек.

**2. Подлежащее + is/was + V3 + to + глагол**
- [[The castle is said to be haunted.]] — Говорят, что замок населён привидениями.
- [[He is believed to be the richest man in the country.]] — Считается, что он самый богатый человек в стране.
- [[Prices are expected to rise.]] — Ожидается, что цены вырастут.

**О прошлом** — **to have + V3**:
- [[The thief is thought to have escaped through the window.]] — Считается, что вор сбежал через окно.
- [[She is said to have been a brilliant student.]] — Говорят, она была блестящей студенткой.`,
        },
        {
          t: "examples",
          h: "Примеры из новостей и эссе",
          items: [
            ["It is estimated that over a million people visited the exhibition.", "По оценкам, выставку посетили более миллиона человек."],
            ["The company is expected to announce record profits.", "Ожидается, что компания объявит о рекордной прибыли."],
            ["It is widely believed that exercise improves mood.", "Широко распространено мнение, что спорт улучшает настроение."],
            ["The minister is reported to have resigned.", "Сообщается, что министр подал в отставку."],
            ["It is generally accepted that the climate is changing.", "Общепризнано, что климат меняется."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["It ___ that the CEO will resign.", ["says", "is said", "is saying"], 1, "Безличный пассив — is said."],
            ["He is believed ___ abroad.", ["live", "to live", "living"], 1, "is believed + to."],
            ["The painting is thought ___ stolen in 1990.", ["to be", "to have been", "being"], 1, "О прошлом — to have been."],
            ["Prices are expected ___ next year.", ["rise", "to rise", "rising"], 1, ""],
            ["It is ___ that 40% of people work from home.", ["estimated", "estimating", "estimate"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите (формальный стиль)",
          items: [
            ["Говорят, что этот ресторан лучший в городе.", "It is said that this restaurant is the best in the city.|This restaurant is said to be the best in the city.|It's said that this restaurant is the best in town.|This restaurant is said to be the best in town.", ""],
            ["Ожидается, что продажи вырастут.", "Sales are expected to grow.|It is expected that sales will grow.|Sales are expected to increase.|Sales are expected to rise.|It is expected that sales will increase.", ""],
            ["Считается, что он покинул страну.", "He is believed to have left the country.|It is believed that he has left the country.|It is believed that he left the country.|He is thought to have left the country.", "О прошлом — to have left."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Пассив во всех временах: is being done, had been done, will have been done, should have been done.
- **have/get something done** — услуги и неприятности.
- **It is said that…** / **He is said to be… / to have been…** — формальный стиль.

**Письмо:** «Отчёт с выводами» — используйте пассив и безличные конструкции.`,
        },
      ],
    },
  ],
};
