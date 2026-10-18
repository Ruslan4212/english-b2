// B2 юнит 3: модальные глаголы вероятности и прошлого.
export default {
  id: "b2_u3",
  level: "B2",
  phase: 4,
  icon: "🕵️",
  title: "Модальные глаголы вероятности: must be, can't have",
  about: "Догадки о настоящем и прошлом: must / might / can't be; must have / might have / can't have done; could have, needn't have.",
  lessons: [
    {
      id: "b2_u3_l1",
      title: "Он, должно быть, дома: догадки о настоящем",
      goal: "Вы научитесь делать логические выводы о настоящем с разной степенью уверенности.",
      steps: [
        {
          t: "text",
          h: "Шкала уверенности",
          md: `Модальные глаголы умеют не только «надо/можно», но и выражать **степень уверенности** в догадке:

| Уверенность | Глагол | Пример | Перевод |
|---|---|---|---|
| ~95% «да» | **must** | [[He must be at home. The lights are on.]] | Он, должно быть, дома. |
| ~50% | **might / may / could** | [[She might be in a meeting.]] | Она, возможно, на встрече. |
| ~95% «нет» | **can't** | [[That can't be true!]] | Не может быть, чтобы это было правдой! |

> Ловушка: противоположность **must** (наверняка да) в догадках — **can't** (наверняка нет), а **не mustn't**! «He mustn't be at home» значит «ему запрещено быть дома». Правильно: [[He can't be at home.]]

**Процесс сейчас** — must/might/can't **be + -ing**:
- [[They must be having dinner.]] — Они, должно быть, ужинают.
- [[She can't be working — it's Sunday.]] — Не может быть, чтобы она работала — воскресенье.

**could** в догадках = might (возможно): [[It could be a virus.]] Но **couldn't** = can't (невозможно): [[It couldn't be him.]]`,
        },
        {
          t: "examples",
          h: "Логические выводы",
          items: [
            ["You've been travelling all day. You must be exhausted.", "Ты весь день в дороге. Ты, должно быть, вымотан."],
            ["Someone's at the door. It might be the courier.", "Кто-то у двери. Может, курьер."],
            ["He can't be hungry — he's just eaten.", "Он не может быть голоден — он только что поел."],
            ["She isn't answering. She may be driving.", "Она не отвечает. Может, за рулём."],
            ["This must be the right address.", "Это, должно быть, правильный адрес."],
            ["You can't be serious!", "Ты шутишь! (Не может быть, что ты серьёзно!)"],
          ],
        },
        {
          t: "choice",
          h: "Выберите глагол",
          items: [
            ["He's got a Ferrari. He ___ be rich.", ["must", "can't", "might"], 0, "Логичный вывод — must."],
            ["She ___ be at work. I saw her at the gym five minutes ago.", ["must", "can't", "mustn't"], 1, "Наверняка нет — can't."],
            ["I'm not sure where Tom is. He ___ be in the kitchen.", ["must", "might", "can't"], 1, "Не уверен — might."],
            ["Противоположность must (в догадках):", ["mustn't", "can't", "needn't"], 1, ""],
            ["They're not answering. They must ___ a film.", ["watch", "be watching", "watching"], 1, "Процесс — be + -ing."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Ты, должно быть, устал.", "You must be tired.", ""],
            ["Не может быть, чтобы это была правда.", "It can't be true.|That can't be true.|It cannot be true.", "can't, не mustn't."],
            ["Возможно, она на встрече.", "She might be in a meeting.|She may be in a meeting.|She could be in a meeting.", ""],
            ["Они, должно быть, спят.", "They must be sleeping.|They must be asleep.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- must (почти наверняка да) — might/may/could (возможно) — can't/couldn't (почти наверняка нет).
- Процесс: must be doing. Противоположность must — **can't**.`,
        },
      ],
    },
    {
      id: "b2_u3_l2",
      title: "Он, должно быть, забыл: догадки о прошлом",
      goal: "Вы научитесь делать выводы о том, что произошло, — must have done, might have done, can't have done.",
      steps: [
        {
          t: "text",
          h: "Модальный + have + V3",
          md: `Чтобы перенести догадку в **прошлое**, после модального ставим **have + V3**:

| Уверенность | Форма | Пример | Перевод |
|---|---|---|---|
| ~95% да | **must have + V3** | [[He must have forgotten about the meeting.]] | Он, должно быть, забыл о встрече. |
| ~50% | **might / may / could have + V3** | [[She might have missed the train.]] | Возможно, она опоздала на поезд. |
| ~95% нет | **can't / couldn't have + V3** | [[He can't have seen us.]] | Не может быть, что он нас видел. |

- [[The ground is wet. It must have rained last night.]] — Земля мокрая. Ночью, должно быть, шёл дождь.
- [[I can't find my wallet. I might have left it in the taxi.]] — Не могу найти кошелёк. Может, оставил в такси.
- [[She can't have finished already — she only started ten minutes ago.]]

> В речи **must have** звучит как «мастэв», **might have** — «майтэв», **can't have** — «кантэв». Have здесь безударный.`,
        },
        {
          t: "examples",
          h: "Примеры",
          items: [
            ["You must have been very worried.", "Ты, должно быть, очень волновался."],
            ["They must have got lost.", "Они, должно быть, заблудились."],
            ["He might have overslept.", "Возможно, он проспал."],
            ["She could have taken the wrong bus.", "Она могла сесть не на тот автобус."],
            ["You can't have read the whole book in one night!", "Не может быть, что ты прочитал всю книгу за ночь!"],
            ["The thief must have come in through the window.", "Вор, должно быть, проник через окно."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["The streets are white. It ___ snowed overnight.", ["must have", "can't have", "must"], 0, "Вывод о прошлом — must have."],
            ["He ___ stolen the money. He was with me all day.", ["must have", "can't have", "might have"], 1, "Наверняка нет — can't have."],
            ["I'm not sure why she's late. She ___ missed the bus.", ["must have", "might have", "can't have"], 1, "Не уверен — might have."],
            ["They must have ___ home early.", ["go", "went", "gone"], 2, "have + V3."],
            ["You ___ been really happy when you got the job!", ["must have", "can't have", "must"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Он, должно быть, забыл.", "He must have forgotten.|He must have forgotten about it.", ""],
            ["Не может быть, что она это сказала.", "She can't have said that.|She can't have said it.|She couldn't have said that.", ""],
            ["Возможно, я оставил телефон в офисе.", "I might have left my phone in the office.|I may have left my phone in the office.|I could have left my phone in the office.|I might have left my phone at the office.|I may have left my phone at the office.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- must have + V3 — наверняка было; might/may/could have — возможно было; can't/couldn't have — не могло быть.`,
        },
      ],
    },
    {
      id: "b2_u3_l3",
      title: "Could have, should have, needn't have: упущенное и лишнее",
      goal: "Вы научитесь говорить об упущенных возможностях, критике и лишних действиях в прошлом.",
      steps: [
        {
          t: "text",
          h: "Три важные формы",
          md: `| Форма | Значение | Пример |
|---|---|---|
| **could have + V3** | мог бы (но не сделал) — упущенная возможность | [[You could have told me!]] — Мог бы и сказать мне! [[We could have won.]] — Мы могли выиграть. |
| **should have / shouldn't have + V3** | следовало / не следовало — критика, сожаление | [[You should have asked for help.]] — Надо было попросить помощи. |
| **needn't have + V3** | сделал, но было не нужно | [[You needn't have brought a present.]] — Не стоило приносить подарок (а ты принёс). |
| **didn't need to + глагол** | не было нужно (и, обычно, не сделал) | [[I didn't need to wait.]] — Мне не пришлось ждать. |

**could have** звучит как упрёк, если сказано о собеседнике: [[You could have called!]] — Мог бы позвонить! А о себе — облегчение или досада: [[I could have been killed!]] — Я мог погибнуть!

**would have** — что было бы (в третьем условном или без if): [[I would have helped, but I didn't know.]] — Я бы помог, но не знал.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["You ___ told me you were coming! I'd have cooked something.", ["should have", "must have", "needn't have"], 0, "Упрёк — should have."],
            ["I ___ bought so much food. Nobody came. (купил, а было не нужно)", ["needn't have", "didn't need to", "couldn't have"], 0, "Сделал, но было лишним — needn't have."],
            ["We ___ won if we'd played better.", ["could have", "can't have", "must have"], 0, "Упущенная возможность."],
            ["The bus came quickly, so I ___ wait long.", ["needn't have waited", "didn't need to"], 1, "Не пришлось — didn't need to."],
            ["You ___ driven so fast. It was dangerous.", ["shouldn't have", "couldn't have", "needn't"], 0, "Критика."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: разбор провала",
          lines: [
            ["Boss", "So, what happened with the presentation? The client said it was a disaster.", "Итак, что случилось с презентацией? Клиент сказал, что это была катастрофа."],
            ["Tom", "The projector didn't work, and I couldn't show the slides.", "Проектор не работал, и я не смог показать слайды."],
            ["Boss", "You should have checked the equipment before the meeting.", "Надо было проверить оборудование до встречи."],
            ["Tom", "I know. I could have printed the slides too, but I didn't think of it.", "Знаю. Ещё я мог распечатать слайды, но не подумал об этом."],
            ["Boss", "Well, the client must have been very disappointed.", "Что ж, клиент, должно быть, был очень разочарован."],
            ["Tom", "Yes. I've sent them the slides by email. Maybe I needn't have, but I wanted to apologise.", "Да. Я отправил им слайды по почте. Может, и не стоило, но я хотел извиниться."],
            ["Boss", "No, that was the right thing to do.", "Нет, это было правильно."],
          ],
          qs: [
            ["Что, по мнению начальника, следовало сделать?", ["Распечатать слайды", "Проверить оборудование заранее", "Отменить встречу"], 1, "You should have checked the equipment."],
            ["Что Том мог бы сделать, но не сделал?", ["Распечатать слайды", "Позвонить клиенту", "Взять другой ноутбук"], 0, "I could have printed the slides."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Ты мог бы мне позвонить!", "You could have called me!|You could have phoned me!|You could've called me!", ""],
            ["Тебе не стоило так беспокоиться. (а ты беспокоился)", "You needn't have worried so much.|You needn't have worried.|You didn't need to worry so much.", ""],
            ["Нам следовало выехать раньше.", "We should have left earlier.|We should've left earlier.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Сейчас: must be / might be / can't be.
- Прошлое: must have done / might have done / can't have done.
- could have — мог бы (упущено); should have — надо было; needn't have — было лишним.

**Говорение:** обсудите с партнёром загадочную ситуацию («Коллега не пришёл на важную встречу — почему?») с must have / might have / can't have.`,
        },
      ],
    },
  ],
};
