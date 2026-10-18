// B2 юнит 8: фразовые глаголы в контексте.
export default {
  id: "b2_u8",
  level: "B2",
  phase: 4,
  icon: "🧲",
  title: "Фразовые глаголы",
  about: "Как устроены фразовые глаголы, разделяемые и неразделяемые, 40 самых нужных для работы и жизни.",
  lessons: [
    {
      id: "b2_u8_l1",
      title: "Как устроены фразовые глаголы",
      goal: "Вы поймёте логику фразовых глаголов и правила порядка слов с ними.",
      steps: [
        {
          t: "text",
          h: "Глагол + маленькое слово = новое значение",
          md: `**Фразовый глагол** — глагол + частица (up, down, out, off, on, in, over, away, back…), вместе дающие **новое значение**, часто непредсказуемое:
- **give** (давать) + **up** = [[give up]] — бросить, сдаться
- **look** (смотреть) + **after** = [[look after]] — присматривать, заботиться
- **turn** (поворачивать) + **down** = [[turn down]] — отклонить (предложение) / убавить (звук)

Носители используют их **постоянно**, особенно в разговоре, — вместо «книжных» слов:
| Фразовый (разговор) | Формальный синоним |
|---|---|
| [[find out]] | discover — выяснить |
| [[put off]] | postpone — отложить |
| [[go up]] | increase — расти |
| [[set up]] | establish — основать, настроить |
| [[look into]] | investigate — разобраться |
| [[carry on]] | continue — продолжать |

**Подсказки по частицам** (работают часто, но не всегда):
- **up** — завершённость, рост: eat up (доесть), go up (расти), fill up (заполнить)
- **down** — уменьшение, запись: slow down, cut down, write down
- **out** — наружу, до конца, выяснение: find out, run out (закончиться), work out
- **off** — отделение, отмена: turn off, call off (отменить), take off (взлететь, снять)
- **on** — продолжение, включение: carry on, go on, turn on
- **back** — назад: call back, get back, pay back`,
        },
        {
          t: "text",
          h: "Разделяемые и неразделяемые",
          md: `**Разделяемые (separable)** — дополнение можно поставить между глаголом и частицей:
- [[Turn off the light.]] = [[Turn the light off.]]
- **Если дополнение — местоимение (it, him, them), оно ОБЯЗАТЕЛЬНО в середине:** [[Turn it off.]] (не «Turn off it»).

Типичные: turn on/off, put off, pick up, call off, fill in, give back, set up, turn down, write down.

**Неразделяемые (inseparable)** — частица всегда сразу после глагола:
- [[Look after the children.]] → [[Look after them.]] (не «look them after»)

Типичные: look after, look for, get on (with), come across, go through, deal with, run into.

**Без дополнения (intransitive):** [[The plane took off.]] [[Prices went up.]] [[Hurry up!]]

> Ошибка «Pick up it» встречается очень часто. С местоимением — только **pick it up**.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["The light is on. Please turn ___.", ["off it", "it off"], 1, "Местоимение — в середину."],
            ["Can you look ___ my cat?", ["after", "for", "up"], 0, "Присматривать — look after."],
            ["They had to call ___ the match because of the rain.", ["off", "out", "up"], 0, "Отменить — call off."],
            ["I don't know the word. I'll look it ___.", ["up", "for", "after"], 0, "Найти в словаре — look up."],
            ["We ran ___ of milk.", ["out", "off", "away"], 0, "Закончилось — run out of."],
            ["", ["I'm looking it for.", "I'm looking for it."], 1, "look for — неразделяемый."],
          ],
        },
        {
          t: "translate",
          h: "Переведите, используя фразовый глагол",
          items: [
            ["Выключи телевизор. (it)", "Turn it off.|Switch it off.", "Местоимение в середине."],
            ["Встречу отложили до пятницы.", "The meeting was put off until Friday.|The meeting has been put off until Friday.|They put off the meeting until Friday.|The meeting was put off till Friday.|They put the meeting off until Friday.", "put off — отложить."],
            ["Мне нужно выяснить, во сколько поезд.", "I need to find out what time the train is.|I need to find out what time the train leaves.|I need to find out when the train is.|I need to find out when the train leaves.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Фразовый глагол = глагол + частица → новое значение. В разговоре вместо книжных слов.
- Разделяемые: местоимение **обязательно в середине** (turn it off).
- Неразделяемые: look after it, look for it.`,
        },
      ],
    },
    {
      id: "b2_u8_l2",
      title: "Фразовые глаголы для работы",
      goal: "Вы выучите 20 фразовых глаголов, которые постоянно звучат на встречах и в рабочей переписке.",
      steps: [
        {
          t: "examples",
          h: "Работа и проекты",
          items: [
            ["Let's set up a meeting for next week.", "Давайте назначим встречу на следующей неделе.", "set up — организовать, настроить"],
            ["Can you look into this issue?", "Можешь разобраться с этой проблемой?", "look into — изучить"],
            ["We need to come up with a new strategy.", "Нам нужно придумать новую стратегию.", "come up with — придумать"],
            ["I'll follow up with the client tomorrow.", "Завтра я свяжусь с клиентом повторно.", "follow up — довести, напомнить"],
            ["Let's go over the main points again.", "Давайте ещё раз пройдёмся по главным пунктам.", "go over — просмотреть"],
            ["She brought up an interesting question.", "Она подняла интересный вопрос.", "bring up — поднять тему"],
            ["They turned down our offer.", "Они отклонили наше предложение.", "turn down — отклонить"],
            ["We had to call off the launch.", "Пришлось отменить запуск.", "call off — отменить"],
            ["Can you fill in for me on Friday?", "Можешь подменить меня в пятницу?", "fill in for — заменить"],
            ["I'll get back to you by Monday.", "Я вернусь к вам с ответом к понедельнику.", "get back to — ответить позже"],
            ["We're running out of time.", "У нас заканчивается время.", "run out of — заканчиваться"],
            ["Let's wrap up the meeting.", "Давайте закругляться.", "wrap up — завершить"],
            ["He was laid off last month.", "Его сократили в прошлом месяце.", "lay off — сократить"],
            ["I'll sort it out.", "Я с этим разберусь.", "sort out — уладить"],
            ["Can you walk me through the process?", "Можешь провести меня по процессу шаг за шагом?", "walk through — объяснить пошагово"],
            ["Let's touch base next week.", "Давайте сверимся на следующей неделе.", "touch base — коротко связаться"],
          ],
        },
        {
          t: "choice",
          h: "Выберите фразовый глагол",
          items: [
            ["I don't know the answer right now, but I'll ___ to you tomorrow.", ["get back", "get on", "get off"], 0, ""],
            ["We need to ___ a solution quickly.", ["come up with", "come across", "come back"], 0, "Придумать."],
            ["The client ___ our proposal. They said no.", ["turned up", "turned down", "turned off"], 1, "Отклонили."],
            ["Can you ___ why the system crashed?", ["look into", "look after", "look up"], 0, "Разобраться."],
            ["We're ___ budget. We need more money.", ["running out of", "running into", "running away"], 0, ""],
            ["Let's ___ the meeting — it's almost six.", ["wrap up", "set up", "bring up"], 0, "Завершить."],
            ["Could you ___ for me while I'm on holiday?", ["fill in", "fill up", "fill out"], 0, "Подменить."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Давайте назначим созвон на четверг.", "Let's set up a call for Thursday.|Let's set up a call on Thursday.|Let's schedule a call for Thursday.", "set up."],
            ["Я разберусь с этой проблемой.", "I'll look into this problem.|I'll sort out this problem.|I'll sort this problem out.|I'll look into this issue.|I'll deal with this problem.", ""],
            ["Нам нужно придумать новое название.", "We need to come up with a new name.", ""],
            ["Я свяжусь с вами позже.", "I'll get back to you later.|I will get back to you later.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `Рабочие фразовые глаголы: set up, look into, come up with, follow up, go over, bring up, turn down, call off, fill in for, get back to, run out of, wrap up, lay off, sort out, walk through, touch base.

**В «Слова» → «Фразовые глаголы B2»** — набор для карточек.`,
        },
      ],
    },
    {
      id: "b2_u8_l3",
      title: "Фразовые глаголы в жизни и отношениях",
      goal: "Вы освоите фразовые глаголы повседневной жизни и отношений — их много в сериалах и подкастах.",
      steps: [
        {
          t: "examples",
          h: "Отношения и общение",
          items: [
            ["I get on really well with my sister.", "Я отлично лажу с сестрой.", "get on with — ладить"],
            ["They fell out over money.", "Они поссорились из-за денег.", "fall out — поссориться"],
            ["We made up the next day.", "На следующий день мы помирились.", "make up — помириться"],
            ["She broke up with her boyfriend.", "Она рассталась с парнем.", "break up — расстаться"],
            ["Don't let me down.", "Не подведи меня.", "let down — подвести"],
            ["I look up to my father.", "Я восхищаюсь своим отцом.", "look up to — уважать, равняться"],
            ["I can't put up with this noise anymore.", "Я больше не могу терпеть этот шум.", "put up with — терпеть"],
            ["I ran into an old friend at the station.", "Я случайно встретил старого друга на вокзале.", "run into — случайно встретить"],
            ["She takes after her mother.", "Она похожа на маму.", "take after — быть похожим (на родственника)"],
            ["I'm going to cut down on sugar.", "Я собираюсь есть меньше сахара.", "cut down on — сократить"],
            ["He finally showed up at ten.", "Он наконец появился в десять.", "show up — появиться"],
            ["It turned out that he was right.", "Оказалось, что он был прав.", "turn out — оказаться"],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Do you ___ with your colleagues?", ["get on", "get off", "get up"], 0, "Ладить — get on with."],
            ["They had a big argument but ___ the next day.", ["made up", "broke up", "fell out"], 0, "Помирились."],
            ["She really ___ her grandmother — they have the same eyes.", ["takes after", "looks after", "looks up to"], 0, ""],
            ["I can't ___ his rudeness any longer.", ["put up with", "put off", "put on"], 0, "Терпеть."],
            ["Guess who I ___ at the supermarket!", ["ran into", "ran out", "ran away"], 0, "Случайно встретил."],
            ["It ___ that the shop was closed.", ["turned out", "turned up", "turned down"], 0, "Оказалось."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: новости о друзьях",
          lines: [
            ["Kate", "Guess who I ran into yesterday? Mark!", "Угадай, кого я вчера встретила? Марка!"],
            ["Liz", "Really? I heard he and Anna broke up.", "Правда? Я слышала, они с Анной расстались."],
            ["Kate", "They did, but it turned out they made up last week. They're back together.", "Расстались, но оказалось, что на прошлой неделе помирились. Снова вместе."],
            ["Liz", "Good for them. Anna told me she couldn't put up with his working late every day.", "Молодцы. Анна говорила, что не могла терпеть, что он каждый день задерживается на работе."],
            ["Kate", "Well, he's promised to cut down on overtime. Let's hope he doesn't let her down.", "Ну, он пообещал меньше перерабатывать. Будем надеяться, что он её не подведёт."],
          ],
          qs: [
            ["Что случилось с Марком и Анной?", ["Поженились", "Расстались, а потом помирились", "Поссорились навсегда"], 1, "broke up → made up."],
            ["Что не нравилось Анне?", ["Что он поздно работает", "Его друзья", "Его машина"], 0, "His working late every day."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я хорошо лажу со своим начальником.", "I get on well with my boss.|I get along well with my boss.|I get on with my boss well.", ""],
            ["Оказалось, что встречу отменили.", "It turned out that the meeting had been cancelled.|It turned out the meeting was cancelled.|It turned out that the meeting was cancelled.|It turned out the meeting had been cancelled.|It turned out that the meeting had been called off.", ""],
            ["Не подведи меня!", "Don't let me down!", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Устройство: глагол + частица; местоимение в середине у разделяемых.
- Работа: set up, look into, come up with, get back to, run out of, wrap up.
- Жизнь: get on with, fall out, make up, break up, let down, put up with, run into, turn out.

**Совет:** не учите списками — встречайте в подкастах и сериалах и сразу добавляйте фразой в «Мои фразы».`,
        },
      ],
    },
  ],
};
