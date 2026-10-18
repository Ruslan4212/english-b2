// B1 юнит 7: герундий и инфинитив.
export default {
  id: "b1_u7",
  level: "B1",
  phase: 3,
  icon: "🔗",
  title: "Герундий и инфинитив: doing или to do",
  about: "Какие глаголы требуют -ing, какие to; предлог + -ing; инфинитив цели; глаголы, меняющие смысл.",
  lessons: [
    {
      id: "b1_u7_l1",
      title: "Enjoy doing, decide to do: какие глаголы что требуют",
      goal: "Вы выучите самые частые глаголы, после которых нужен -ing или to, и перестанете ошибаться в «I want going».",
      steps: [
        {
          t: "text",
          h: "Когда один глагол идёт за другим",
          md: `Когда за одним глаголом идёт второй, второй стоит либо в форме **-ing** (герундий), либо **to + глагол** (инфинитив). Выбор определяется **первым** глаголом, и логики часто нет — нужно запоминать. Вы уже знаете часть: **enjoy reading**, **want to go**.

**Глаголы + -ing:**
| Глагол | Пример |
|---|---|
| [[enjoy]] | I enjoy cooking. |
| [[finish]] | Have you finished writing? |
| [[mind]] | Do you mind waiting? — Вы не против подождать? |
| [[avoid]] | Try to avoid eating late. |
| [[suggest]] | She suggested taking a taxi. |
| [[consider]] | We're considering moving. |
| [[keep]] | He keeps interrupting me. — Он постоянно перебивает. |
| [[practise]] | Practise speaking every day. |
| [[miss]] | I miss living by the sea. |
| [[can't stand]] | I can't stand waiting. — Терпеть не могу ждать. |
| [[give up]] | He gave up smoking. |
| [[look forward to]] | I look forward to meeting you. |`,
        },
        {
          t: "text",
          h: "Глаголы + to",
          md: `| Глагол | Пример |
|---|---|
| [[want]] / [[would like]] | I'd like to book a table. |
| [[decide]] | We decided to stay. |
| [[plan]] | I'm planning to change jobs. |
| [[hope]] | I hope to see you soon. |
| [[need]] | I need to talk to you. |
| [[agree]] / [[refuse]] | She agreed to help. He refused to pay. |
| [[promise]] | I promise to call. |
| [[offer]] | They offered to drive us. |
| [[manage]] | I managed to fix it. — Мне удалось это починить. |
| [[learn]] | I'm learning to drive. |
| [[forget]] | Don't forget to lock the door. |
| [[afford]] | We can't afford to buy a house. — Мы не можем себе позволить. |
| [[seem]] | She seems to be tired. |

**Подсказка-тенденция:** глаголы с **to** часто про **будущее, намерения, решения** (want, plan, hope, decide, promise). Глаголы с **-ing** — про **процесс, опыт, то, что уже есть** (enjoy, finish, mind, keep, avoid). Это не правило, а помощь памяти.

**Оба варианта без разницы:** like, love, hate, prefer, start, begin, continue: [[It started raining / to rain.]]

>i **look forward to + -ing** — классика деловых писем: [[I look forward to hearing from you.]] Здесь to — предлог, поэтому -ing. «I look forward to hear» — ошибка.`,
        },
        {
          t: "choice",
          h: "-ing или to?",
          items: [
            ["I enjoy ___ to music.", ["listening", "to listen"], 0, "enjoy + -ing."],
            ["We decided ___ a new car.", ["buying", "to buy"], 1, "decide + to."],
            ["Would you mind ___ the window?", ["opening", "to open"], 0, "mind + -ing."],
            ["I can't afford ___ on holiday this year.", ["going", "to go"], 1, "afford + to."],
            ["He keeps ___ the same mistake.", ["making", "to make"], 0, "keep + -ing."],
            ["I managed ___ the problem.", ["solving", "to solve"], 1, "manage + to."],
            ["I look forward to ___ you.", ["see", "seeing"], 1, "look forward to + -ing."],
            ["She suggested ___ a break.", ["taking", "to take"], 0, "suggest + -ing."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в нужную форму",
          items: [
            ["Have you finished ___ (read) the report?", "reading", ""],
            ["I hope ___ (see) you soon.", "to see", ""],
            ["She gave up ___ (eat) meat.", "eating", ""],
            ["They refused ___ (help) us.", "to help", ""],
            ["Try to avoid ___ (use) your phone before bed.", "using", ""],
            ["I'm planning ___ (visit) my parents.", "to visit", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Вы не против подождать?", "Do you mind waiting?|Would you mind waiting?", "mind + -ing."],
            ["Мне удалось найти билеты.", "I managed to find tickets.|I managed to find the tickets.|I managed to get tickets.", ""],
            ["Жду с нетерпением нашей встречи.", "I look forward to meeting you.|I'm looking forward to meeting you.|I look forward to our meeting.|I'm looking forward to seeing you.", ""],
            ["Мы решили остаться дома.", "We decided to stay at home.|We decided to stay home.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **+ -ing:** enjoy, finish, mind, avoid, suggest, consider, keep, practise, miss, can't stand, give up, look forward to.
- **+ to:** want, would like, decide, plan, hope, need, agree, refuse, promise, offer, manage, learn, forget, afford, seem.
- like/love/start — оба варианта.`,
        },
      ],
    },
    {
      id: "b1_u7_l2",
      title: "После предлога — всегда -ing; инфинитив цели",
      goal: "Вы освоите два железных правила: предлог + -ing и «чтобы» = to, а также глаголы, которые меняют смысл.",
      steps: [
        {
          t: "text",
          h: "Правило 1: после предлога — -ing",
          md: `После **любого предлога** (in, at, of, for, about, without, before, after, by…) глагол ставится **только в -ing**:

- [[I'm interested in learning Spanish.]] — Мне интересно изучать испанский.
- [[She's good at drawing.]] — Она хорошо рисует.
- [[Thank you for helping me.]] — Спасибо, что помог.
- [[I'm tired of waiting.]] — Я устал ждать.
- [[He left without saying goodbye.]] — Он ушёл, не попрощавшись.
- [[Before leaving, check the windows.]] — Перед уходом проверь окна.
- [[You can improve your English by reading a lot.]] — Улучшить английский можно, много читая.
- [[How about going to the cinema?]] — Как насчёт кино?

**Частые сочетания:** good/bad at, interested in, afraid of, tired of, fond of, responsible for, thank for, apologise for, think about/of, instead of, without, before/after, by, how about / what about.

**-ing как подлежащее:** [[Swimming is good for your health.]] — Плавание полезно. [[Learning languages takes time.]]`,
        },
        {
          t: "text",
          h: "Правило 2: «чтобы» = to",
          md: `Цель действия («чтобы, для того чтобы») выражается **инфинитивом с to**:
- [[I went to the shop to buy some milk.]] — Я пошёл в магазин, чтобы купить молока.
- [[She's learning English to get a better job.]] — Она учит английский, чтобы найти работу получше.
- [[I called to ask about the meeting.]] — Я позвонил, чтобы спросить про встречу.

> Ошибка русскоговорящих: «for buy», «for to buy». Цель с глаголом — просто **to**: [[to buy]]. А **for** + существительное: [[I went to the shop for some milk.]]

Формальнее: **in order to** / отрицание **so as not to**: [[We left early so as not to miss the train.]]`,
        },
        {
          t: "text",
          h: "Глаголы, которые меняют смысл",
          md: `| Глагол | + -ing | + to |
|---|---|---|
| **stop** | прекратить делать: [[I stopped smoking.]] — Я бросил курить. | остановиться, чтобы сделать: [[I stopped to smoke.]] — Я остановился покурить. |
| **remember** | помнить, что делал (прошлое): [[I remember meeting her.]] — Помню, как встречал её. | не забыть сделать (будущее): [[Remember to call her.]] — Не забудь позвонить ей. |
| **forget** | забыть, что делал: [[I'll never forget seeing the ocean.]] | забыть сделать: [[I forgot to lock the door.]] — Я забыл запереть дверь. |
| **try** | попробовать (как эксперимент): [[Try restarting the computer.]] — Попробуй перезагрузить. | постараться (усилие): [[I tried to open it, but couldn't.]] — Я пытался открыть, но не смог. |`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["I'm interested ___ photography.", ["in learning", "to learn"], 0, "Предлог + -ing."],
            ["She went to the bank ___ money.", ["for get", "to get", "for getting"], 1, "Цель — to."],
            ["Thank you for ___ me.", ["help", "to help", "helping"], 2, "for + -ing."],
            ["He stopped ___ — he doesn't smoke anymore.", ["smoking", "to smoke"], 0, "Прекратил — -ing."],
            ["Remember ___ the lights before you leave.", ["turning off", "to turn off"], 1, "Не забудь сделать — to."],
            ["The printer doesn't work. — Try ___ it off and on again.", ["turning", "to turn"], 0, "Эксперимент — try + -ing."],
            ["He left without ___ a word.", ["say", "saying", "to say"], 1, "without + -ing."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я хорошо готовлю. (я хорош в готовке)", "I'm good at cooking.|I am good at cooking.", "good at + -ing."],
            ["Я позвонил, чтобы спросить о встрече.", "I called to ask about the meeting.|I phoned to ask about the meeting.|I called in order to ask about the meeting.", "Цель — to."],
            ["Я забыл закрыть окно.", "I forgot to close the window.|I forgot to shut the window.", "forget + to — не сделал."],
            ["Как насчёт того, чтобы заказать пиццу?", "How about ordering pizza?|What about ordering pizza?|How about ordering a pizza?|What about ordering a pizza?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- После предлога — **-ing** (good at, interested in, without, before, by, how about).
- «Чтобы» — **to**, не for.
- stop / remember / forget / try меняют смысл: -ing — о процессе/прошлом, to — о цели/будущем.`,
        },
      ],
    },
    {
      id: "b1_u7_l3",
      title: "Практика: говорим о целях, привычках и предпочтениях",
      goal: "Вы закрепите герундий и инфинитив в живой речи: цели, планы, хобби, советы.",
      steps: [
        {
          t: "examples",
          h: "Говорим о себе",
          items: [
            ["I'm learning English to work for an international company.", "Я учу английский, чтобы работать в международной компании."],
            ["I've decided to spend less time on my phone.", "Я решил проводить меньше времени в телефоне."],
            ["I'm thinking about changing my job.", "Я подумываю сменить работу."],
            ["I'm not very good at remembering names.", "Я не очень хорошо запоминаю имена."],
            ["I can't stand being late.", "Терпеть не могу опаздывать."],
            ["I'm looking forward to going on holiday.", "Жду не дождусь отпуска."],
            ["I'd prefer to stay in tonight.", "Я бы предпочёл сегодня остаться дома."],
            ["It's worth visiting.", "Это стоит посетить.", "it's worth + -ing"],
          ],
        },
        {
          t: "text",
          h: "Ещё полезные конструкции",
          md: `- **It's worth + -ing** — стоит (того): [[This film is worth watching.]] — Этот фильм стоит посмотреть.
- **There's no point in + -ing** — нет смысла: [[There's no point in waiting.]] — Нет смысла ждать.
- **It's no use + -ing** — бесполезно: [[It's no use complaining.]]
- **I'm used to + -ing** — я привык (юнит 3).
- **would rather + глагол (без to)** — предпочёл бы: [[I'd rather stay home.]]
- **make somebody do / let somebody do** — заставить / позволить (без to!): [[My boss made me redo the report.]] [[Let me help you.]]

> После **make** и **let** — глагол **без to**: «Let me to help» — ошибка. А после **allow** — с to: [[They don't allow us to smoke.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["This museum is worth ___.", ["to visit", "visiting", "visit"], 1, "worth + -ing."],
            ["Let me ___ you.", ["help", "to help", "helping"], 0, "let + глагол без to."],
            ["There's no point ___ about it.", ["to worry", "in worrying", "worry"], 1, ""],
            ["My parents made me ___ the piano.", ["practise", "to practise", "practising"], 0, "make + без to."],
            ["I'd rather ___ by train.", ["go", "to go", "going"], 0, "would rather + без to."],
            ["They don't allow us ___ photos.", ["take", "to take", "taking"], 1, "allow + to."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Этот фильм стоит посмотреть.", "This film is worth watching.|This movie is worth watching.|The film is worth watching.", ""],
            ["Я бы предпочёл остаться дома.", "I'd rather stay at home.|I would rather stay at home.|I'd rather stay home.|I'd prefer to stay at home.|I would prefer to stay at home.", ""],
            ["Давай я тебе помогу.", "Let me help you.", ""],
            ["Нет смысла спорить.", "There's no point in arguing.|There is no point in arguing.|It's no use arguing.", ""],
          ],
        },
        {
          t: "speak",
          h: "Ответьте вслух о себе",
          items: [
            ["I'm learning English to…", "Я учу английский, чтобы…"],
            ["I've always enjoyed…", "Мне всегда нравилось…"],
            ["Next year I'm planning to…", "В следующем году я планирую…"],
            ["I'm really bad at…", "Я совсем не умею…"],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- -ing: после enjoy, finish, mind, avoid, keep… и **после предлогов**.
- to: после want, decide, plan, hope, manage… и для **цели**.
- worth + -ing, no point in + -ing, would rather / make / let + глагол без to.

**Говорение:** тема «Технологии в жизни» — используйте enjoy, avoid, spend time + -ing, decide to.`,
        },
      ],
    },
  ],
};
