// B1 юнит 5: пассивный залог — Present, Past, Future, Present Perfect.
export default {
  id: "b1_u5",
  level: "B1",
  phase: 3,
  icon: "🏭",
  title: "Пассивный залог: это было сделано",
  about: "Когда важно действие, а не исполнитель: is made, was built, will be sent, has been done; by; процессы.",
  lessons: [
    {
      id: "b1_u5_l1",
      title: "Is made, was built: Present и Past Passive",
      goal: "Вы поймёте, зачем нужен пассив, и научитесь строить его в настоящем и прошедшем времени.",
      steps: [
        {
          t: "text",
          h: "Активный и пассивный залог",
          md: `**Активный залог** — подлежащее **делает** действие: [[Somebody cleans the office every day.]] — Кто-то убирает офис каждый день.

**Пассивный залог** — подлежащее **подвергается** действию: [[The office is cleaned every day.]] — Офис убирают каждый день.

**Зачем пассив:**
1. Исполнитель **неизвестен** или **неважен**: [[My car was stolen.]] — У меня угнали машину (кто — неизвестно).
2. Важнее **результат или объект**, чем исполнитель: [[This bridge was built in 1890.]]
3. **Официальный, деловой стиль**, инструкции, новости, отчёты: [[The meeting has been cancelled.]] [[Applications must be submitted by Friday.]]

>i В русском пассив звучит тяжело («офис убирается»), поэтому мы чаще говорим «офис убирают» (неопределённо-личное). В английском такой конструкции нет — её место занимает пассив. **«Мне сказали»** = [[I was told]], **«Его уволили»** = [[He was fired]], **«Здесь говорят по-английски»** = [[English is spoken here]].`,
        },
        {
          t: "text",
          h: "Формула: be + V3",
          md: `**Пассив = to be (в нужном времени) + третья форма (V3)**

| Время | Формула | Пример |
|---|---|---|
| Present Simple | am/is/are + V3 | [[Coffee is grown in Brazil.]] — Кофе выращивают в Бразилии. |
| Past Simple | was/were + V3 | [[The letter was sent yesterday.]] — Письмо отправили вчера. |

- Отрицание: [[The room isn't cleaned every day.]] [[I wasn't invited.]] — Меня не пригласили.
- Вопрос: [[Where are these phones made?]] — Где производят эти телефоны? [[When was this house built?]] — Когда построили этот дом?

**by** — если всё же нужно назвать исполнителя: [[The Mona Lisa was painted by Leonardo da Vinci.]] — «Мону Лизу» написал Леонардо. Используйте by, только если исполнитель — важная информация.`,
        },
        {
          t: "examples",
          h: "Пассив в жизни",
          items: [
            ["English is spoken all over the world.", "На английском говорят во всём мире."],
            ["I was born in Novosibirsk.", "Я родился в Новосибирске.", "born — это пассив!"],
            ["The museum was opened in 1995.", "Музей открыли в 1995 году."],
            ["My bag was stolen at the airport.", "У меня украли сумку в аэропорту."],
            ["Breakfast is served from 7 to 10.", "Завтрак подают с 7 до 10."],
            ["I was told to wait here.", "Мне сказали подождать здесь."],
            ["These cars are made in Germany.", "Эти машины производят в Германии."],
            ["We were given a discount.", "Нам дали скидку."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["This book ___ in 1950.", ["wrote", "was written", "is written"], 1, "Прошлое пассив — was + V3."],
            ["Rice ___ in many Asian countries.", ["grows", "is grown", "grown"], 1, "Выращивают — пассив."],
            ["My phone ___ yesterday.", ["stole", "was stolen", "is stolen"], 1, ""],
            ["When ___ the Eiffel Tower built?", ["is", "was", "did"], 1, "When was … built?"],
            ["The Harry Potter books were written ___ J.K. Rowling.", ["from", "by", "with"], 1, "Исполнитель — by."],
            ["«Мне сказали» —", ["Me told.", "I was told.", "They said me."], 1, ""],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в пассив",
          items: [
            ["The office ___ (clean) every evening.", "is cleaned", ""],
            ["The letters ___ (send) yesterday.", "were sent", ""],
            ["This car ___ (make) in Japan.", "is made|was made", ""],
            ["I ___ (not / invite) to the party.", "wasn't invited|was not invited", ""],
            ["Where ___ you born? (вы — пассив в прошлом)", "were", "Where were you born?"],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Этот дом построили в 1900 году.", "This house was built in 1900.", ""],
            ["Здесь говорят по-английски.", "English is spoken here.", ""],
            ["Его уволили.", "He was fired.|He got fired.|He was dismissed.|He was sacked.", ""],
            ["Где производят эти телефоны?", "Where are these phones made?|Where are these phones produced?|Where are these phones manufactured?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Пассив: **be + V3**. Present: is/are made; Past: was/were made.
- Используется, когда исполнитель неизвестен/неважен, в деловом стиле.
- «Мне сказали» = I was told, «Я родился» = I was born. Исполнитель — **by**.`,
        },
      ],
    },
    {
      id: "b1_u5_l2",
      title: "Will be done, has been done: пассив в других временах",
      goal: "Вы научитесь использовать пассив в будущем, в Present Perfect и с модальными глаголами — как в деловых письмах.",
      steps: [
        {
          t: "text",
          h: "Ещё три формы",
          md: `Принцип тот же: **be в нужной форме + V3**.

| Время | Формула | Пример |
|---|---|---|
| Future | will be + V3 | [[The results will be announced tomorrow.]] — Результаты объявят завтра. |
| Present Perfect | has/have been + V3 | [[The meeting has been cancelled.]] — Встречу отменили. |
| Модальные | can / must / should + be + V3 | [[This form must be signed.]] — Эту форму нужно подписать. |
| Present Continuous | is/are being + V3 | [[The road is being repaired.]] — Дорогу ремонтируют (сейчас). |

**Present Perfect Passive** — главное время для новостей и статуса в деловой переписке:
- [[Your order has been shipped.]] — Ваш заказ отправлен.
- [[The bug has been fixed.]] — Ошибка исправлена.
- [[You have been selected for an interview.]] — Вы отобраны на собеседование.

**Модальные + пассив** — правила и инструкции:
- [[Mobile phones must be switched off.]] — Мобильные телефоны должны быть выключены.
- [[The report should be sent by Friday.]] — Отчёт следует отправить к пятнице.
- [[It can't be done today.]] — Это невозможно сделать сегодня.`,
        },
        {
          t: "examples",
          h: "Деловые фразы в пассиве",
          items: [
            ["Your payment has been received.", "Ваш платёж получен."],
            ["The invoice will be sent next week.", "Счёт будет отправлен на следующей неделе."],
            ["The project has been put on hold.", "Проект приостановлен."],
            ["All documents must be submitted by May 1.", "Все документы должны быть поданы до 1 мая."],
            ["You will be contacted by our manager.", "С вами свяжется наш менеджер."],
            ["The system is being updated at the moment.", "Система сейчас обновляется."],
            ["This issue should be discussed at the meeting.", "Этот вопрос следует обсудить на встрече."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["The new office ___ next year.", ["will open", "will be opened", "is opened"], 1, "Будущее пассив — will be + V3."],
            ["Your order ___ shipped. (уже, новость)", ["has been", "was being", "will"], 0, "Present Perfect passive."],
            ["This document must ___ by the director.", ["sign", "be signed", "signed"], 1, "must be + V3."],
            ["The bridge ___ at the moment, so we have to drive around.", ["is repaired", "is being repaired"], 1, "Сейчас в процессе — being."],
            ["You ___ informed about the results.", ["will", "will be"], 1, "will be informed."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте в пассив",
          items: [
            ["The problem ___ (solve) already. (Present Perfect)", "has been solved|has already been solved", ""],
            ["The winners ___ (announce) tomorrow. (Future)", "will be announced", ""],
            ["Seat belts must ___ (wear) at all times.", "be worn", "wear — wore — worn."],
            ["The house ___ (paint) right now.", "is being painted", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Встреча отменена.", "The meeting has been cancelled.|The meeting has been canceled.|The meeting is cancelled.|The meeting was cancelled.", "Новость — has been cancelled."],
            ["Результаты будут отправлены по почте.", "The results will be sent by email.|The results will be sent by e-mail.|The results will be emailed.|The results will be sent by post.", ""],
            ["Эту задачу нужно сделать сегодня.", "This task must be done today.|This task needs to be done today.|This task has to be done today.|This task should be done today.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- will be done · has been done · must/should/can be done · is being done.
- Present Perfect Passive — новости и статусы: [[Your order has been shipped.]]`,
        },
      ],
    },
    {
      id: "b1_u5_l3",
      title: "Описание процесса",
      goal: "Вы научитесь описывать процесс шаг за шагом — как это делают в отчётах, инструкциях и на собеседованиях.",
      steps: [
        {
          t: "text",
          h: "Процесс = пассив + связки",
          md: `При описании процесса (производство, обработка заявки, рабочий цикл) важно **что происходит**, а не кто это делает, — поэтому используют **пассив**:

**Связки последовательности:**
- [[First / Firstly,]] — Сначала
- [[Then / Next / After that,]] — Затем
- [[Once the form is checked, …]] — Как только форма проверена…
- [[After being approved, …]] — После утверждения…
- [[Meanwhile,]] — Тем временем
- [[Finally / Lastly,]] — Наконец

**Пример: обработка заказа**
[[First, the order is received through the website.]] [[Then it is checked by the sales team.]] [[Once the payment has been confirmed, the goods are packed.]] [[After that, the parcel is sent to the customer.]] [[Finally, an email with the tracking number is sent.]]`,
        },
        {
          t: "examples",
          h: "Как делают шоколад",
          items: [
            ["First, cocoa beans are picked by hand.", "Сначала какао-бобы собирают вручную."],
            ["Then they are dried in the sun for about a week.", "Затем их сушат на солнце около недели."],
            ["After that, the beans are sent to the factory.", "После этого бобы отправляют на фабрику."],
            ["There they are roasted and crushed.", "Там их обжаривают и измельчают."],
            ["Next, sugar and milk are added.", "Затем добавляют сахар и молоко."],
            ["Finally, the chocolate is poured into moulds and packed.", "Наконец шоколад разливают по формам и упаковывают."],
          ],
        },
        {
          t: "order",
          h: "Соберите предложения о процессе найма",
          items: [
            ["First the job is advertised online.", "Сначала вакансию размещают онлайн."],
            ["Then the applications are reviewed by HR.", "Затем заявки просматривает HR."],
            ["The best candidates are invited for an interview.", "Лучших кандидатов приглашают на собеседование."],
            ["Finally an offer is made.", "Наконец делается предложение."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Сначала заявку проверяет менеджер.", "First, the application is checked by the manager.|First the application is checked by the manager.|First, the request is checked by the manager.|First, the application is checked by a manager.", ""],
            ["Затем документы отправляют клиенту.", "Then the documents are sent to the client.|Then the documents are sent to the customer.|After that, the documents are sent to the client.", ""],
            ["После утверждения проект запускают.", "After being approved, the project is launched.|After approval, the project is launched.|Once it has been approved, the project is launched.|After it is approved, the project is launched.", ""],
          ],
        },
        {
          t: "speak",
          h: "Опишите процесс из своей работы",
          items: [
            ["First, the request is received.", "Сначала поступает запрос."],
            ["Then it is analysed and a plan is made.", "Затем его анализируют и составляют план."],
            ["Once everything is approved, the work is started.", "Когда всё утверждено, начинается работа."],
            ["Finally, the results are presented to the client.", "Наконец результаты представляют клиенту."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Пассив: is done / was done / will be done / has been done / must be done / is being done.
- Процесс: First… Then… Once… After that… Finally… + пассив.

**Письмо:** задание B1 «Описание процесса».`,
        },
      ],
    },
  ],
};
