// A2 юнит 4: будущее — going to, will, Present Continuous для договорённостей.
export default {
  id: "a2_u4",
  level: "A2",
  phase: 2,
  icon: "🔮",
  title: "Будущее: going to, will и планы",
  about: "Три способа говорить о будущем и как выбрать нужный: планы, решения, прогнозы, договорённости.",
  lessons: [
    {
      id: "a2_u4_l1",
      title: "Going to: я собираюсь",
      goal: "Вы научитесь говорить о своих планах и намерениях и делать прогнозы по очевидным признакам.",
      steps: [
        {
          t: "text",
          h: "Будущее в английском — это выбор",
          md: `В русском будущее время одно: «я поеду», «я буду работать». В английском есть **несколько способов**, и выбор зависит от того, **как давно вы это решили** и **насколько уверены**. Начнём с самого частого в разговоре — **going to**.

**be going to + глагол** = «собираюсь, намерен» — **план, решение принято заранее**:

- [[I'm going to visit my parents this weekend.]] — На выходных я собираюсь навестить родителей.
- [[She's going to start a new job in May.]] — В мае она собирается выйти на новую работу.
- [[We're going to buy a flat.]] — Мы собираемся купить квартиру.

Строение: **am/is/are + going to + словарная форма глагола**.
- Отрицание: [[I'm not going to work tomorrow.]]
- Вопрос: [[Are you going to watch the match?]] [[What are you going to do?]]

>i В быстрой речи **going to** звучит как **gonna**: «I'm gonna call him». Писать так в письмах не надо, но понимать нужно — услышите в каждом фильме.`,
        },
        {
          t: "text",
          h: "Второе значение: прогноз по признакам",
          md: `**Going to** также используют для прогноза, когда **видны признаки** — «вот-вот случится»:

- [[Look at those clouds! It's going to rain.]] — Посмотри на эти тучи! Сейчас пойдёт дождь.
- [[Be careful! You're going to fall!]] — Осторожно! Ты сейчас упадёшь!
- [[She's going to have a baby.]] — У неё будет ребёнок (видно, что беременна).

>i Поход в кино: **I'm going to the cinema** (Continuous глагола go — «я иду/еду в кино») и **I'm going to go to the cinema** (собираюсь сходить) — оба правильны. С go чаще говорят короче: [[I'm going to the cinema tonight.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["I ___ going to call him tonight.", ["am", "is", "—"], 0, "be going to: I am going to."],
            ["She's going ___ a new car.", ["buy", "to buy", "buying"], 1, "going to + глагол."],
            ["___ you going to come?", ["Do", "Are", "Will"], 1, "Вопрос: Are you going to…?"],
            ["They ___ going to move. (не собираются)", ["don't", "aren't", "not"], 1, "Отрицание: aren't going to."],
            ["Look at the sky! It ___ rain.", ["is going to", "goes to", "going"], 0, "Прогноз по признакам."],
            ["What ___ you going to do this summer?", ["are", "do", "will"], 0, "What are you going to do?"],
          ],
        },
        {
          t: "fill",
          h: "Составьте предложения с going to",
          items: [
            ["I ___ (learn) to drive next year.", "am going to learn|'m going to learn", ""],
            ["He ___ (not / come) to the party.", "isn't going to come|is not going to come|'s not going to come", ""],
            ["We ___ (have) a barbecue on Sunday.", "are going to have|'re going to have", ""],
            ["Watch out! You ___ (drop) the glass!", "are going to drop|'re going to drop", "Признаки — сейчас уронишь."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я собираюсь выучить английский.", "I'm going to learn English.|I am going to learn English.", ""],
            ["Что ты собираешься делать на выходных?", "What are you going to do at the weekend?|What are you going to do this weekend?|What are you going to do on the weekend?", ""],
            ["Сейчас пойдёт снег.", "It's going to snow.|It is going to snow.", "Прогноз по признакам."],
            ["Мы не собираемся продавать машину.", "We aren't going to sell the car.|We're not going to sell the car.|We are not going to sell the car.|We aren't going to sell our car.|We're not going to sell our car.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **be going to + глагол**: план, решённый заранее; прогноз по видимым признакам.
- Вопрос: [[What are you going to do?]] Отрицание: [[I'm not going to…]]
- В речи — **gonna**.`,
        },
      ],
    },
    {
      id: "a2_u4_l2",
      title: "Will: решения, обещания, прогнозы",
      goal: "Вы научитесь использовать will для спонтанных решений, обещаний, предложений помощи и прогнозов-мнений — и отличать его от going to.",
      steps: [
        {
          t: "text",
          h: "Will: решение в момент речи",
          md: `**will + глагол** (одинаково для всех лиц, сокращённо **'ll**):

1. **Спонтанное решение** — решили прямо сейчас: [[The phone is ringing. — I'll answer it.]] — Телефон звонит. — Я отвечу.
2. **Обещание:** [[I'll call you tomorrow.]] — Я позвоню тебе завтра. [[I won't tell anyone.]] — Я никому не скажу.
3. **Предложение помощи:** [[I'll help you with your bags.]] — Я помогу с сумками. Вопрос: [[Shall I open the window?]] — Открыть окно? (shall I — «мне сделать…?»)
4. **Прогноз-мнение** (без явных признаков): [[I think it will be a great year.]] — Думаю, это будет отличный год. [[Maybe he'll come.]] — Может, он придёт.
5. **Факты о будущем:** [[I'll be 40 next year.]] — В следующем году мне будет 40.

**Отрицание:** will not = **won't** («уоунт»): [[I won't be late.]]
**Вопрос:** [[Will you help me?]] — Поможешь мне? [[Where will you stay?]]

> Ошибка: «I will to go». После will — **без to**: [[I will go.]]`,
        },
        {
          t: "text",
          h: "Will или going to?",
          md: `| going to | will |
|---|---|
| Решение принято **до** разговора | Решение принято **сейчас** |
| [[I'm going to buy a new phone. I saw a good one yesterday.]] | [[Oh, this phone is on sale! I'll buy it.]] |
| Прогноз по **видимым признакам** | Прогноз-**мнение** (think, maybe, probably) |
| [[Look at the clouds! It's going to rain.]] | [[I think it will rain tomorrow.]] |

Классический пример:
- Друг: «У нас кончилось молоко».
- Вы (сейчас решили): [[Oh, I'll buy some.]]
- Позже жене (решение уже принято): [[I'm going to buy some milk after work.]]

**Маркеры will:** I think, I'm sure, probably, maybe, I hope, I promise.`,
        },
        {
          t: "examples",
          h: "Полезные фразы с will",
          items: [
            ["I'll be back in five minutes.", "Я вернусь через пять минут."],
            ["Don't worry, I'll help you.", "Не волнуйся, я тебе помогу."],
            ["I promise I won't be late.", "Обещаю, что не опоздаю."],
            ["I'll have the chicken, please.", "Я возьму курицу.", "решение в ресторане"],
            ["I think you'll like it.", "Думаю, тебе понравится."],
            ["Shall I call a taxi?", "Вызвать такси?"],
            ["Will you marry me?", "Ты выйдешь за меня?"],
            ["It'll probably be cold tomorrow.", "Завтра, вероятно, будет холодно."],
          ],
        },
        {
          t: "choice",
          h: "will или going to?",
          items: [
            ["— It's cold in here. — OK, I ___ close the window.", ["will", "am going to"], 0, "Решение прямо сейчас — will."],
            ["I ___ visit my aunt next week. I bought tickets.", ["will", "am going to"], 1, "Заранее спланировано — going to."],
            ["I promise I ___ tell anybody.", ["won't", "am not going to"], 0, "Обещание — will/won't."],
            ["Look at that car! It ___ crash!", ["will", "is going to"], 1, "Видимые признаки — going to."],
            ["I think Brazil ___ win the match.", ["will", "is going to"], 0, "Мнение с I think — will."],
            ["___ I help you with the bags?", ["Will", "Shall", "Am"], 1, "Предложение помощи — Shall I…?"],
            ["She will ___ late.", ["be", "to be", "is"], 0, "После will — словарная форма без to."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я позвоню тебе завтра.", "I'll call you tomorrow.|I will call you tomorrow.|I'll phone you tomorrow.", "Обещание — will."],
            ["Думаю, тебе понравится этот фильм.", "I think you'll like this film.|I think you will like this film.|I think you'll like this movie.|I think you will like this movie.", ""],
            ["Я не опоздаю.", "I won't be late.|I will not be late.", ""],
            ["Помочь тебе? (предложение)", "Shall I help you?|Can I help you?|Do you want me to help you?", "Shall I…?"],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **will + глагол** (без to): решение сейчас, обещание, предложение, мнение о будущем. won't = will not.
- **going to** — план заранее, прогноз по признакам.
- [[Shall I…?]] — предложить помощь.`,
        },
      ],
    },
    {
      id: "a2_u4_l3",
      title: "Договорённости: I'm meeting him tomorrow",
      goal: "Вы научитесь говорить о назначенных встречах и расписании и выбирать одну из трёх форм будущего.",
      steps: [
        {
          t: "text",
          h: "Present Continuous для будущего",
          md: `Когда о чём-то **уже договорились** (есть время, место, другие люди, купленный билет), англичане используют **Present Continuous** с указанием времени:

- [[I'm meeting Tom at six.]] — Я встречаюсь с Томом в шесть. (договорились)
- [[We're flying to Rome on Friday.]] — В пятницу мы летим в Рим. (билеты куплены)
- [[She's seeing the doctor tomorrow.]] — Завтра она идёт к врачу. (записана)
- [[What are you doing tonight?]] — Что делаешь сегодня вечером? (вопрос о планах — очень частый!)

Обязательно должно быть понятно, что речь о будущем: **tomorrow, on Friday, next week, tonight**.

**Present Simple для расписаний** — поезда, самолёты, фильмы, уроки:
- [[The train leaves at 7:30.]] — Поезд отправляется в 7:30.
- [[The film starts at nine.]] — Фильм начинается в девять.`,
        },
        {
          t: "text",
          h: "Сводная таблица будущего",
          md: `| Форма | Когда | Пример |
|---|---|---|
| **Present Continuous** | Договорённость, всё назначено | [[I'm meeting the client on Monday.]] |
| **going to** | Намерение, план (может быть без деталей) | [[I'm going to look for a new job.]] |
| **will** | Решение сейчас, обещание, мнение | [[I'll send it right now.]] |
| **Present Simple** | Расписание | [[The meeting starts at 10.]] |

>i На практике Continuous и going to для планов часто взаимозаменяемы. Если сомневаетесь — **going to** почти всегда понятен и правилен для планов.`,
        },
        {
          t: "choice",
          h: "Выберите лучший вариант",
          items: [
            ["— What ___ tonight? — I'm going to the theatre.", ["do you do", "are you doing", "will you do"], 1, "Вопрос о планах — Continuous."],
            ["The plane ___ at 6:15 tomorrow.", ["leaves", "is leaving", "will leave"], 0, "Расписание — Present Simple."],
            ["I've got tickets! We ___ to Paris next Friday.", ["fly", "are flying", "will fly"], 1, "Всё назначено — Continuous."],
            ["— The printer doesn't work. — I ___ look at it.", ["'m looking", "'ll look", "look"], 1, "Решение сейчас — will."],
            ["One day I ___ write a book.", ["am writing", "am going to write", "write"], 1, "Намерение без деталей — going to."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: договариваемся о встрече",
          lines: [
            ["Lisa", "Are you free on Thursday? I'd like to discuss the new project.", "Ты свободен в четверг? Хочу обсудить новый проект."],
            ["Paul", "Thursday morning I'm meeting a client, but I'm free after lunch.", "В четверг утром у меня встреча с клиентом, но после обеда я свободен."],
            ["Lisa", "Great. How about two o'clock?", "Отлично. Как насчёт двух?"],
            ["Paul", "Two is fine. I'll book a meeting room.", "Два — нормально. Я забронирую переговорную."],
            ["Lisa", "Thanks. I'm going to prepare some slides.", "Спасибо. Я подготовлю слайды."],
            ["Paul", "Perfect. I'll send you an invitation.", "Идеально. Пришлю тебе приглашение."],
          ],
          qs: [
            ["Что у Пола в четверг утром?", ["Свободен", "Встреча с клиентом", "Презентация"], 1, "I'm meeting a client — договорённость."],
            ["Кто подготовит слайды?", ["Пол", "Лиза", "Клиент"], 1, "I'm going to prepare some slides — Лиза."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Что ты делаешь в субботу?", "What are you doing on Saturday?", "Вопрос о планах."],
            ["Завтра я встречаюсь с подругой.", "I'm meeting a friend tomorrow.|I'm meeting my friend tomorrow.|Tomorrow I'm meeting a friend.|I am meeting a friend tomorrow.|Tomorrow I'm meeting my friend.", ""],
            ["Поезд отправляется в 8:20.", "The train leaves at 8:20.|The train departs at 8:20.|The train leaves at eight twenty.", "Расписание — Simple."],
            ["Я отправлю тебе письмо прямо сейчас.", "I'll send you an email right now.|I will send you an email right now.|I'll send you the email right now.", "Решение сейчас — will."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Договорённость — **I'm meeting…** (+ время).
- План — **going to**. Решение/обещание/мнение — **will**. Расписание — **Present Simple**.
- Частый вопрос: [[What are you doing tonight?]]

**Говорение:** тема «Планы на будущее». **Письмо:** «Мои планы на лето».`,
        },
      ],
    },
  ],
};
