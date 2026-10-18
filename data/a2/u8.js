// A2 юнит 8: рабочая ветка (с месяца 5) — наречия образа действия, письма, звонки, своя роль.
export default {
  id: "a2_u8",
  level: "A2",
  phase: 2,
  icon: "💼",
  title: "Английский для работы: письма, звонки, роль",
  about: "Наречия (quickly, well), структура рабочего письма, телефонный звонок, как описать свою роль и обязанности.",
  lessons: [
    {
      id: "a2_u8_l1",
      title: "Как: quickly, carefully, well — наречия образа действия",
      goal: "Вы научитесь описывать, КАК что-то делается, и не путать прилагательное и наречие (good / well).",
      steps: [
        {
          t: "text",
          h: "Прилагательное или наречие",
          md: `- **Прилагательное** описывает **предмет или человека** (какой?): [[a quick answer]] — быстрый ответ, [[She is careful.]] — Она аккуратная.
- **Наречие** описывает **действие** (как?): [[She answered quickly.]] — Она ответила быстро. [[He drives carefully.]] — Он водит аккуратно.

**Образование:** прилагательное + **-ly**
| Прилагательное | Наречие |
|---|---|
| quick | [[quickly]] |
| slow | [[slowly]] |
| careful | [[carefully]] |
| quiet | [[quietly]] |
| easy | [[easily]] (y → ily) |
| happy | [[happily]] |

**Неправильные — очень частые:**
- **good → well**: [[She speaks English well.]] (не «good»!)
- **fast → fast**: [[He runs fast.]]
- **hard → hard**: [[She works hard.]] — Она усердно работает. (hardly — это «едва», совсем другое слово!)
- **late → late**, **early → early**

> Классическая ошибка: «I speak English good», «You did it good». После глагола-действия — **well**: [[You did it well.]] Но после **to be** и глаголов чувства (feel, look, sound) — прилагательное: [[I feel good.]], [[It sounds great.]], [[You look tired.]]`,
        },
        {
          t: "text",
          h: "Место наречия",
          md: `Наречие образа действия ставится **после глагола** или **после дополнения** — не между глаголом и дополнением:
- [[She speaks English well.]] (не «speaks well English»)
- [[Please read the contract carefully.]]
- [[He closed the door quietly.]]

**Полезные рабочие наречия:** [[clearly]] — ясно, [[correctly]] — правильно, [[immediately]] — немедленно, [[regularly]] — регулярно, [[probably]] — вероятно, [[unfortunately]] — к сожалению, [[actually]] — на самом деле (не «актуально»!).`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["She speaks French very ___.", ["good", "well"], 1, "Как говорит — well."],
            ["He is a ___ driver.", ["careful", "carefully"], 0, "Какой водитель — прилагательное."],
            ["He drives ___.", ["careful", "carefully"], 1, "Как водит — наречие."],
            ["I feel ___ today.", ["good", "well"], 0, "После feel — прилагательное (или well о здоровье — тоже верно, но good естественнее о настроении)."],
            ["She works very ___.", ["hard", "hardly"], 0, "Усердно — hard."],
            ["Please speak ___.", ["slow", "slowly"], 1, "Как говорить — slowly."],
            ["", ["She speaks well English.", "She speaks English well."], 1, "Наречие — после дополнения."],
          ],
        },
        {
          t: "fill",
          h: "Образуйте наречие",
          items: [
            ["quick → ___", "quickly", ""],
            ["easy → ___", "easily", "y → ily."],
            ["good → ___", "well", ""],
            ["careful → ___", "carefully", ""],
            ["fast → ___", "fast", "Не меняется."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Он хорошо говорит по-английски.", "He speaks English well.|He speaks good English.", "well — после дополнения."],
            ["Пожалуйста, прочитайте договор внимательно.", "Please read the contract carefully.|Please, read the contract carefully.|Read the contract carefully, please.", ""],
            ["Она очень много работает.", "She works very hard.|She works a lot.", "hard — усердно."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Какой? — прилагательное; как? — наречие (-ly).
- good → **well**, fast, hard, late — без -ly. hardly = едва.
- После be/feel/look/sound — прилагательное: [[It sounds good.]]`,
        },
      ],
    },
    {
      id: "a2_u8_l2",
      title: "Рабочее письмо: структура и готовые фразы",
      goal: "Вы научитесь писать короткие рабочие письма: запрос, подтверждение, извинение, договорённость о встрече.",
      steps: [
        {
          t: "text",
          h: "Структура письма из 5 частей",
          md: `| Часть | Формально | Нейтрально / неформально |
|---|---|---|
| 1. Приветствие | [[Dear Mr Smith,]] / [[Dear Sir or Madam,]] | [[Hi Anna,]] / [[Hello Tom,]] |
| 2. Начало | [[I am writing to…]] | [[I hope you're well.]] / [[Thanks for your email.]] |
| 3. Суть | Одна мысль — один абзац | |
| 4. Завершение | [[I look forward to hearing from you.]] | [[Let me know if you have any questions.]] / [[Speak soon.]] |
| 5. Подпись | [[Yours sincerely,]] (если знаете имя) / [[Kind regards,]] | [[Best regards,]] / [[Best,]] / [[Thanks,]] |

>i Обращение по имени: **Mr** (мистер), **Ms** (мисс — нейтрально для женщины, используйте его), Mrs (замужняя), Dr. После **Dear Mr Smith** — запятая, а письмо начинается с **большой буквы** на новой строке.

> Ошибки русскоговорящих: «Dear colleagues!» с восклицательным знаком (в английском — запятая), «Hello, dear Anna» (звучит слишком лично), «With respect» (дословно «с уважением» — так не пишут; правильно **Kind regards**).`,
        },
        {
          t: "text",
          h: "Готовые фразы по типам писем",
          md: `**Запрос:**
- [[I'm writing to ask about…]] — Пишу, чтобы спросить о…
- [[Could you please send me…?]] — Не могли бы вы прислать…?
- [[I would be grateful if you could…]] — Буду признателен, если вы сможете…

**Подтверждение:**
- [[I can confirm that…]] — Подтверждаю, что…
- [[Thank you for confirming.]] — Спасибо за подтверждение.

**Извинение:**
- [[I'm sorry for the delay.]] / [[Sorry for the late reply.]] — Извините за задержку.
- [[I apologise for any inconvenience.]] — Приношу извинения за неудобства.

**Встреча:**
- [[Would you be available on Tuesday at 10?]] — Вам удобно во вторник в 10?
- [[Does Thursday work for you?]] — Четверг вам подходит?
- [[Let's schedule a call.]] — Давайте назначим созвон.

**Вложения:** [[Please find attached the report.]] / [[I've attached the file.]] — Файл во вложении.`,
        },
        {
          t: "examples",
          h: "Образец: письмо-запрос",
          items: [
            ["Dear Ms Brown,", "Уважаемая г-жа Браун,"],
            ["I'm writing to ask about the training course in May.", "Пишу, чтобы узнать о тренинге в мае."],
            ["Could you please send me the programme and the price?", "Не могли бы вы прислать программу и стоимость?"],
            ["I would also like to know if lunch is included.", "Также хотел бы узнать, включён ли обед."],
            ["I look forward to hearing from you.", "Жду вашего ответа."],
            ["Kind regards,", "С уважением,"],
          ],
        },
        {
          t: "choice",
          h: "Выберите лучший вариант",
          items: [
            ["Начало формального письма незнакомому человеку:", ["Hi!", "Dear Sir or Madam,", "Hello, dear friend!"], 1, ""],
            ["Как сказать «во вложении отчёт»?", ["In the attachment is report.", "Please find attached the report.", "I attach you report."], 1, ""],
            ["Завершение формального письма:", ["Bye!", "With respect,", "Kind regards,"], 2, "«With respect» так не пишут."],
            ["Извиниться за поздний ответ:", ["Sorry for the late reply.", "Sorry that I answer late.", "Excuse my lateness answer."], 0, ""],
            ["Предложить время встречи:", ["Does Thursday work for you?", "Do you have Thursday?", "Thursday is it good?"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите фразы для писем",
          items: [
            ["Пишу, чтобы подтвердить встречу.", "I'm writing to confirm the meeting.|I am writing to confirm the meeting.|I'm writing to confirm our meeting.|I am writing to confirm our meeting.", ""],
            ["Не могли бы вы прислать мне счёт?", "Could you please send me the invoice?|Could you send me the invoice?|Could you please send me the bill?|Could you send me the invoice, please?", "Счёт на оплату — invoice."],
            ["Извините за задержку.", "Sorry for the delay.|I'm sorry for the delay.|I apologise for the delay.|I apologize for the delay.", ""],
            ["Дайте знать, если будут вопросы.", "Let me know if you have any questions.|Please let me know if you have any questions.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Структура: приветствие → начало → суть → завершение → подпись.
- Dear Ms…, / Hi…, → I'm writing to… → Could you please…? → I look forward to hearing from you. → Kind regards,
- Не пишите «With respect» и «Dear colleagues!».

**Письмо в четверг:** задания A2 «Запрос», «Подтверждение», «Извинение», «Договорённость о встрече» — по очереди.`,
        },
      ],
    },
    {
      id: "a2_u8_l3",
      title: "Звонок и рассказ о своей роли",
      goal: "Вы сможете провести простой рабочий звонок и рассказать коллегам, чем занимаетесь и за что отвечаете.",
      steps: [
        {
          t: "text",
          h: "Телефонный звонок: шаблон",
          md: `| Этап | Звонящий | Отвечающий |
|---|---|---|
| Начало | [[Hello, this is Ivan from ABC.]] (не «I am Ivan»!) | [[Good morning, XYZ Company. How can I help you?]] |
| Кого нужно | [[Could I speak to Ms Green, please?]] | [[Who's calling, please?]] / [[One moment, please.]] / [[I'll put you through.]] (соединю) |
| Человека нет | | [[I'm afraid she's not available at the moment.]] / [[She's in a meeting.]] |
| Сообщение | [[Can I leave a message?]] / [[Could you ask her to call me back?]] | [[Can I take a message?]] |
| Проблемы | [[Sorry, could you repeat that?]] / [[The line is bad.]] / [[Could you speak up a bit?]] | |
| Конец | [[Thanks for your help. Bye.]] | [[Thank you for calling.]] |

> По телефону представляются через **This is…**: [[Hi, this is Anna.]] Фраза «I am Anna» по телефону звучит странно. А спросить «Это Том?» — [[Is that Tom?]] (брит.) / [[Is this Tom?]] (амер.).`,
        },
        {
          t: "text",
          h: "Моя роль и обязанности",
          md: `Шаблон рассказа о работе, который пригодится на собеседовании и при знакомстве с командой:

1. **Должность и компания:** [[I'm a project manager at a logistics company.]] / [[I work as an accountant.]] (work **as** + должность)
2. **Отдел и команда:** [[I work in the finance department.]] [[I'm in a team of six people.]]
3. **Обязанности:** [[I'm responsible for…]] (отвечаю за) + **-ing**/существительное: [[I'm responsible for planning the budget.]] / [[My main task is to…]] / [[I deal with…]] (занимаюсь) / [[I'm in charge of…]] (руковожу, отвечаю)
4. **С кем работаю:** [[I work closely with the sales team.]] [[I report to the CEO.]] (подчиняюсь)
5. **Обычный день:** [[On a typical day, I…]]
6. **Отношение:** [[What I like most about my job is…]]

> **responsible for + -ing**: «I'm responsible for plan» — ошибка, нужно [[responsible for planning]]. После предлога глагол всегда с -ing.`,
        },
        {
          t: "dialog",
          h: "Диалог: звонок в компанию",
          lines: [
            ["Receptionist", "Good afternoon, Green Tech. How can I help you?", "Добрый день, Green Tech. Чем могу помочь?"],
            ["Ivan", "Hello, this is Ivan Smirnov from Nord Logistics. Could I speak to Mr Lee, please?", "Здравствуйте, это Иван Смирнов из Nord Logistics. Могу я поговорить с мистером Ли?"],
            ["Receptionist", "I'm afraid he's in a meeting at the moment. Can I take a message?", "Боюсь, он сейчас на встрече. Передать ему что-нибудь?"],
            ["Ivan", "Yes, please. Could you ask him to call me back? It's about the delivery on Friday.", "Да, пожалуйста. Попросите его перезвонить мне. Это по поводу поставки в пятницу."],
            ["Receptionist", "Of course. What's your number?", "Конечно. Ваш номер?"],
            ["Ivan", "It's 0044 7700 900 123.", "0044 7700 900 123."],
            ["Receptionist", "Sorry, could you repeat the last part?", "Простите, повторите последнюю часть?"],
            ["Ivan", "Nine double oh, one two three.", "Девять, два ноля, один два три."],
            ["Receptionist", "Thank you. I'll give him the message.", "Спасибо. Я передам ему."],
          ],
          qs: [
            ["Почему мистер Ли не может говорить?", ["Он в отпуске", "Он на встрече", "Он болен"], 1, "He's in a meeting."],
            ["О чём звонок?", ["О счёте", "О поставке в пятницу", "О собеседовании"], 1, "It's about the delivery on Friday."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["Как представиться по телефону?", ["I am Anna.", "This is Anna.", "Here Anna."], 1, ""],
            ["I'm responsible for ___ the team.", ["manage", "managing", "to manage"], 1, "После for — -ing."],
            ["I work ___ a designer.", ["like", "as", "how"], 1, "work as + должность."],
            ["«Соединю вас»", ["I'll connect you.", "I'll put you through.", "I'll give you."], 1, ""],
            ["«Передать что-нибудь?»", ["Can I take a message?", "Can I give a message?", "Do you want message?"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Здравствуйте, это Анна из компании «Альфа».", "Hello, this is Anna from Alpha.|Hello, this is Anna from Alpha company.|Hi, this is Anna from Alpha.|Hello, this is Anna from the Alpha company.", ""],
            ["Я отвечаю за работу с клиентами.", "I'm responsible for working with clients.|I am responsible for working with clients.|I'm responsible for customer relations.|I'm responsible for working with customers.", "responsible for + -ing."],
            ["Не могли бы вы попросить его перезвонить мне?", "Could you ask him to call me back?|Could you ask him to call me back, please?|Can you ask him to call me back?", ""],
            ["Я работаю менеджером по продажам.", "I work as a sales manager.|I'm a sales manager.", "work as a…"],
          ],
        },
        {
          t: "speak",
          h: "Расскажите о своей работе",
          items: [
            ["I work as a manager at a small company.", "Я работаю менеджером в небольшой компании."],
            ["I'm responsible for planning and reporting.", "Я отвечаю за планирование и отчётность."],
            ["I work closely with the finance team.", "Я тесно работаю с финансовым отделом."],
            ["What I like most about my job is the people.", "Больше всего в работе мне нравятся люди."],
          ],
        },
        {
          t: "text",
          h: "Итог фазы A2",
          md: `Основной курс A2 пройден! Вы умеете:
- рассказывать о прошлом (was/were, -ed, неправильные глаголы, did);
- говорить о том, что происходит сейчас, и о планах (Continuous, going to, will);
- сравнивать (bigger, the best, as…as, too/enough);
- различать исчисляемое и неисчисляемое (much/many, a few/a little);
- давать советы и говорить о необходимости (should, must, have to, might);
- писать рабочие письма, звонить и рассказывать о своей роли.

**Контрольная точка A2 (конец месяца 6):** 3–4 минуты на бытовую тему без длинных пауз; письмо 80–100 слов с 1–2 исправлениями; 70–80% понимания BBC 6 Minute English с субтитрами; 2–3 книги Elementary/Pre-Intermediate; тест уровня A2.

Впереди **B1 «Самостоятельность»** — самая длинная фаза: present perfect, условные предложения, пассив, косвенная речь.`,
        },
      ],
    },
  ],
};
