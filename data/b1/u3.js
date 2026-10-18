// B1 юнит 3: Past Continuous, Past Perfect, used to — как рассказывать истории.
export default {
  id: "b1_u3",
  level: "B1",
  phase: 3,
  icon: "🎬",
  title: "Рассказываем истории: Past Continuous, Past Perfect, used to",
  about: "Фон и событие (was doing / did), предпрошедшее (had done), прошлые привычки (used to).",
  lessons: [
    {
      id: "b1_u3_l1",
      title: "Past Continuous: I was walking when…",
      goal: "Вы научитесь описывать фон истории и прерванные действия: «я шёл домой, когда…».",
      steps: [
        {
          t: "text",
          h: "Действие в процессе в прошлом",
          md: `**Past Continuous** — то же самое, что Present Continuous, но в прошлом: действие **было в процессе** в определённый момент.

**was / were + глагол-ing**
- [[At 8 pm yesterday I was having dinner.]] — Вчера в 8 вечера я ужинал (был в процессе).
- [[What were you doing at midnight?]] — Что ты делал в полночь?
- [[They weren't listening.]] — Они не слушали.

Представьте фото из прошлого: на нём люди **что-то делают** — это Past Continuous.`,
        },
        {
          t: "text",
          h: "Фон и событие: Continuous + Simple",
          md: `Самое частое использование — **в паре с Past Simple**:
- **Past Continuous** — длительный фон, процесс («я шёл, шёл…»);
- **Past Simple** — короткое событие, которое его прервало или случилось на этом фоне.

- [[I was walking home when it started to rain.]] — Я шёл домой, когда начался дождь.
- [[While she was cooking, the phone rang.]] — Пока она готовила, зазвонил телефон.
- [[We were watching TV when the lights went out.]] — Мы смотрели телевизор, когда погас свет.

**when** — обычно перед коротким событием (Past Simple); **while** (пока) — перед длительным (Past Continuous).

**Два параллельных процесса** — оба Continuous: [[While I was working, my wife was reading.]]

**Описание обстановки в начале истории:** [[It was a cold evening. Snow was falling and people were hurrying home.]]

> Два коротких действия подряд — **оба Past Simple**: [[When he saw me, he smiled.]] — Когда он увидел меня, он улыбнулся (сначала увидел, потом улыбнулся).`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["I ___ a shower when the doorbell rang.", ["had", "was having"], 1, "Фон, прерванный звонком — Continuous."],
            ["While we ___ dinner, the lights went out.", ["had", "were having"], 1, "while + длительное."],
            ["She was driving when she ___ an accident.", ["saw", "was seeing"], 0, "Короткое событие — Simple."],
            ["What ___ you doing at 10 last night?", ["did", "were", "was"], 1, "were you doing."],
            ["When she opened the door, the cat ___ out.", ["ran", "was running"], 0, "Два коротких действия подряд — оба Simple."],
            ["It was a beautiful morning. The sun ___.", ["shone", "was shining"], 1, "Описание фона — Continuous."],
          ],
        },
        {
          t: "fill",
          h: "Past Simple или Past Continuous",
          items: [
            ["I ___ (sleep) when you called.", "was sleeping", ""],
            ["He ___ (fall) while he was skiing.", "fell", "Короткое событие."],
            ["While they ___ (talk), the teacher came in.", "were talking", ""],
            ["When I ___ (arrive), the meeting had already started.", "arrived", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я работал, когда он позвонил.", "I was working when he called.|I was working when he phoned.|I was working when he rang.", ""],
            ["Что ты делал вчера в шесть вечера?", "What were you doing at six yesterday evening?|What were you doing at 6 pm yesterday?|What were you doing yesterday at six in the evening?|What were you doing at six o'clock yesterday evening?|What were you doing yesterday at 6 pm?", ""],
            ["Пока я спал, пошёл снег.", "While I was sleeping, it started to snow.|While I was sleeping it started snowing.|While I was asleep, it started to snow.|While I was sleeping, it began to snow.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **was/were + -ing** — процесс в момент прошлого.
- Фон (Continuous) + событие (Simple): [[I was walking when it started to rain.]]
- when + короткое, while + длительное.`,
        },
      ],
    },
    {
      id: "b1_u3_l2",
      title: "Past Perfect: had done — что случилось раньше",
      goal: "Вы научитесь показывать, какое из прошлых событий произошло раньше, — это делает истории понятными.",
      steps: [
        {
          t: "text",
          h: "Прошлое до прошлого",
          md: `Когда вы рассказываете историю в прошлом и нужно вернуться **ещё дальше назад**, используют **Past Perfect**: **had + V3** (одинаково для всех лиц).

- [[When I arrived at the station, the train had left.]] — Когда я приехал на вокзал, поезд (уже) ушёл. (сначала ушёл поезд, потом приехал я)
- [[When I arrived at the station, the train left.]] — Когда я приехал, поезд ушёл. (я приехал, и тут он ушёл — почти одновременно)

Одно слово меняет смысл! Past Perfect чётко говорит: **это было раньше**.

- [[I didn't recognise him because he had changed a lot.]] — Я не узнал его, потому что он сильно изменился.
- [[She was nervous because she had never flown before.]] — Она нервничала, потому что раньше никогда не летала.
- [[By the time we got there, everyone had gone home.]] — К тому времени, как мы приехали, все уже разошлись.

**Отрицание:** hadn't + V3. **Вопрос:** Had you…? [[Had you met him before?]]

>i Если порядок и так понятен из последовательности (first, then, after), Past Perfect не обязателен: [[I finished work and went home.]] Он нужен, когда рассказываете **не по порядку**.`,
        },
        {
          t: "examples",
          h: "Примеры",
          items: [
            ["When I got home, I realised I had lost my keys.", "Придя домой, я понял, что потерял ключи."],
            ["The film had already started when we arrived.", "Фильм уже начался, когда мы пришли."],
            ["I had never seen the sea before that trip.", "До той поездки я никогда не видел моря."],
            ["She told me she had finished the project.", "Она сказала мне, что закончила проект."],
            ["After he had eaten, he felt much better.", "Поев, он почувствовал себя гораздо лучше."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["When we got to the cinema, the film ___. (уже начался)", ["started", "had started"], 1, "Начался раньше нашего прихода."],
            ["I couldn't pay because I ___ my wallet at home.", ["left", "had left"], 1, "Оставил раньше — Past Perfect."],
            ["She ___ to Paris before, so she knew the city well.", ["has been", "had been"], 1, "Опыт до момента в прошлом — Past Perfect."],
            ["By the time the police arrived, the thief ___.", ["escaped", "had escaped"], 1, ""],
            ["First I had breakfast, then I ___ to work.", ["went", "had gone"], 0, "Порядок понятен — Past Simple."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Когда я проснулся, все уже ушли.", "When I woke up, everyone had left.|When I woke up, everybody had left.|When I woke up, everyone had already left.|When I woke up, everybody had already gone.|When I woke up, everyone had gone.", ""],
            ["Я никогда раньше не видел такой красоты.", "I had never seen such beauty before.|I'd never seen anything so beautiful before.|I had never seen anything so beautiful before.|I'd never seen such beauty before.", "О моменте в прошлом — had never."],
            ["Он сказал, что уже отправил письмо.", "He said he had already sent the email.|He said that he had already sent the email.|He said he'd already sent the email.|He said he had already sent the letter.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **had + V3** — раньше другого прошлого события.
- [[When I arrived, the train had left]] ≠ [[When I arrived, the train left]].
- Нужен, когда рассказ идёт не по порядку; маркеры: by the time, before, already, never… before.`,
        },
      ],
    },
    {
      id: "b1_u3_l3",
      title: "Used to: раньше я…",
      goal: "Вы научитесь говорить о прошлых привычках и состояниях, которых больше нет, и не путать used to с be used to.",
      steps: [
        {
          t: "text",
          h: "Раньше было, а теперь нет",
          md: `**used to + глагол** — прошлая **привычка** или **состояние**, которых **больше нет**. По-русски — «раньше (я)…», «бывало…».

- [[I used to smoke.]] — Раньше я курил. (теперь нет)
- [[We used to live in a small village.]] — Раньше мы жили в маленькой деревне.
- [[There used to be a cinema here.]] — Здесь раньше был кинотеатр.

**Отрицание:** didn't use to (без d!): [[I didn't use to like coffee.]] — Раньше я не любил кофе.
**Вопрос:** Did you use to…? [[Did you use to play sports at school?]]

>i Произношение: used to — «юзтэ», одним словом, со звуком [s], а не [z].

**Past Simple тоже возможен**, но used to подчёркивает «это было регулярно и это в прошлом»: [[When I was a child, I went / used to go to the sea every summer.]]`,
        },
        {
          t: "text",
          h: "Ловушка: be used to — привыкнуть",
          md: `Похожая конструкция с совсем другим значением:

| Конструкция | Значение | Пример |
|---|---|---|
| **used to + глагол** | раньше делал | [[I used to get up early.]] — Раньше я рано вставал. |
| **be used to + -ing / сущ.** | привык (сейчас) | [[I'm used to getting up early.]] — Я привык рано вставать. |
| **get used to + -ing / сущ.** | привыкать (процесс) | [[I'm getting used to the cold.]] — Я привыкаю к холоду. |

- [[I'm not used to driving on the left.]] — Я не привык ездить по левой стороне.
- [[You'll get used to it.]] — Ты привыкнешь.

> В be/get used to после **to** — **-ing**, потому что to здесь предлог: «I'm used to work» — ошибка, правильно [[I'm used to working]].`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["I ___ play the piano, but I stopped.", ["used to", "am used to", "use to"], 0, "Раньше — used to."],
            ["I ___ working at night. It's normal for me.", ["used to", "am used to"], 1, "Привык — be used to."],
            ["Did you ___ live here?", ["used to", "use to"], 1, "В вопросе — use to (без d)."],
            ["She didn't ___ like vegetables.", ["used to", "use to"], 1, "didn't use to."],
            ["It was hard at first, but I'm ___ used to the noise.", ["getting", "using"], 0, "Привыкаю — getting used to."],
            ["He's used to ___ English at work.", ["speak", "speaking"], 1, "После be used to — -ing."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: как всё изменилось",
          lines: [
            ["Lena", "I can't believe how much this street has changed!", "Не могу поверить, как изменилась эта улица!"],
            ["Max", "I know. There used to be a small bookshop here. Now it's a coffee chain.", "Знаю. Здесь раньше был маленький книжный. Теперь сетевая кофейня."],
            ["Lena", "I used to come here every Saturday when I was a student.", "Я приходила сюда каждую субботу, когда была студенткой."],
            ["Max", "Did you use to live nearby?", "Ты раньше жила рядом?"],
            ["Lena", "Yes, in a tiny flat. I didn't use to have much money, but I was happy.", "Да, в крошечной квартирке. Денег было немного, но я была счастлива."],
            ["Max", "And now you live in the suburbs. Are you used to it?", "А теперь ты живёшь в пригороде. Привыкла?"],
            ["Lena", "I'm getting used to it. But I miss the city.", "Привыкаю. Но скучаю по городу."],
          ],
          qs: [
            ["Что раньше было на месте кофейни?", ["Банк", "Книжный магазин", "Кинотеатр"], 1, "There used to be a small bookshop."],
            ["Привыкла ли Лена к пригороду?", ["Да, полностью", "Привыкает", "Ненавидит его"], 1, "I'm getting used to it."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Раньше я жил в Петербурге.", "I used to live in St Petersburg.|I used to live in Saint Petersburg.|I used to live in Petersburg.|I used to live in St. Petersburg.", ""],
            ["Я привык работать из дома.", "I'm used to working from home.|I am used to working from home.", "be used to + -ing."],
            ["Ты привыкнешь.", "You'll get used to it.|You will get used to it.", ""],
            ["Раньше здесь был парк.", "There used to be a park here.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- **Past Continuous** — фон; **Past Simple** — событие; **Past Perfect** — ещё раньше; **used to** — прошлые привычки.
- **be used to + -ing** — привык; **get used to** — привыкать.

**Письмо:** «История» (It was a normal Monday morning when…) — используйте все времена юнита.`,
        },
      ],
    },
  ],
};
