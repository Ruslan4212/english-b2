// Юнит 2: числа, время, дни недели, месяцы, даты.
export default {
  id: "a1_u2",
  level: "A1",
  phase: 1,
  icon: "🔢",
  title: "Числа, время и даты",
  about: "Числа от 0 до миллиона, телефон и цены, который час, дни недели, месяцы и даты.",
  lessons: [
    {
      id: "a1_u2_l1",
      title: "Числа: от нуля до миллиона, цены и телефоны",
      goal: "Вы научитесь считать, называть цены, возраст и номер телефона и не путать thirteen и thirty.",
      steps: [
        {
          t: "examples",
          h: "Числа 0–12: их нужно просто запомнить",
          items: [
            ["zero", "0", "в телефонах часто говорят «oh» как букву O"], ["one", "1"], ["two", "2"], ["three", "3", "th — язык между зубами!"], ["four", "4"], ["five", "5"], ["six", "6"],
            ["seven", "7"], ["eight", "8"], ["nine", "9"], ["ten", "10"], ["eleven", "11"], ["twelve", "12"],
          ],
        },
        {
          t: "text",
          h: "13–19 и десятки: главная ловушка — ударение",
          md: `Числа **13–19** образуются с окончанием **-teen**, а десятки **20, 30…90** — с окончанием **-ty**:

| -teen (13–19) | -ty (десятки) |
|---|---|
| [[thirteen]] 13 | [[thirty]] 30 |
| [[fourteen]] 14 | [[forty]] 40 (без u!) |
| [[fifteen]] 15 | [[fifty]] 50 |
| [[sixteen]] 16 | [[sixty]] 60 |
| [[seventeen]] 17 | [[seventy]] 70 |
| [[eighteen]] 18 | [[eighty]] 80 |
| [[nineteen]] 19 | [[ninety]] 90 |

Как их различать на слух: в **-teen** ударение на конце и долгий звук «ии» — thir-**TEEN**. В **-ty** ударение в начале, конец короткий — **THIR**-ty.

> Перепутать 15 и 50 — частая беда в магазине и при записи номера. Если сомневаетесь, переспросите: [[Fifteen or fifty?]] — «один-пять или пять-ноль?»: [[One five or five zero?]]

Составные числа пишутся через дефис: **21** — [[twenty-one]], **47** — [[forty-seven]], **99** — [[ninety-nine]].`,
        },
        {
          t: "text",
          h: "Сотни, тысячи, миллионы",
          md: `- **100** — [[a hundred]] / [[one hundred]]
- **250** — [[two hundred and fifty]] — британцы вставляют **and** перед десятками
- **1 000** — [[a thousand]]
- **3 500** — [[three thousand five hundred]]
- **1 000 000** — [[a million]]

> **hundred, thousand, million не получают -s** после числа: two hundred (не hundreds), five thousand (не thousands). Окончание -s бывает только в выражениях «сотни/тысячи чего-то»: [[hundreds of people]] — сотни людей.

**Как писать числа:** англичане отделяют тысячи **запятой**, а дробную часть — **точкой**: 1,500 (тысяча пятьсот), 2.5 (две с половиной). У нас наоборот! [[two point five]] — 2,5.`,
        },
        {
          t: "text",
          h: "Цены, возраст, телефон",
          md: `**Цены.** [[How much is it?]] — Сколько стоит? Ответ: [[It's five dollars.]] / [[It's ten pounds fifty.]] (£10.50). Копейки обычно не называют словом cents/pence — просто число после: «ten fifty».

**Возраст** — через to be (не have!): [[I'm thirty-five.]] или полностью [[I'm thirty-five years old.]] Вопрос: [[How old are you?]]

**Номер телефона** читают **по одной цифре**, группами: 8 916 245 07 33 → «eight, nine one six, two four five, oh seven, double three». Две одинаковые цифры подряд — **double**: 33 — [[double three]].

Вопрос: [[What's your phone number?]]`,
        },
        {
          t: "choice",
          h: "Какое число прозвучало?",
          listen: true,
          items: [
            ["thirteen", ["13", "30"], 0, "Ударение на -TEEN, долгое «ии» — 13."],
            ["fifty", ["15", "50"], 1, "Ударение в начале, короткий конец — 50."],
            ["forty-four", ["44", "14", "40"], 0, "forty-four — 44."],
            ["eighteen", ["18", "80"], 0, "eigh-TEEN — 18."],
            ["two hundred and twelve", ["212", "220", "2012"], 0, "two hundred and twelve — 212."],
            ["seventy", ["17", "70"], 1, "SEV-en-ty — 70."],
          ],
        },
        {
          t: "fill",
          h: "Напишите число словами",
          items: [
            ["12 = ___", "twelve", ""],
            ["40 = ___", "forty", "Внимание: forty — без u (хотя four с u)."],
            ["15 = ___", "fifteen", "fif-, а не five-."],
            ["21 = ___", "twenty-one|twenty one", "Составные — через дефис."],
            ["100 = ___", "a hundred|one hundred", ""],
            ["90 = ___", "ninety", "ninety — с e (nine + ty)."],
          ],
        },
        {
          t: "dictation",
          h: "Диктант: напишите цифрами",
          intro: "Вы услышите число — напишите его цифрами (например 47).",
          items: [["47", "сорок семь"], ["15", "пятнадцать"], ["300", "триста"], ["68", "шестьдесят восемь"], ["1000", "тысяча"]],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мне 28 лет.", "I'm twenty-eight.|I am twenty-eight.|I'm 28.|I am 28.|I'm twenty-eight years old.|I am twenty-eight years old.|I'm 28 years old.|I am 28 years old.", "Возраст — через to be."],
            ["Сколько это стоит?", "How much is it?|How much is this?|How much does it cost?|How much is that?", ""],
            ["Это стоит двадцать долларов.", "It's twenty dollars.|It is twenty dollars.|It costs twenty dollars.|It's 20 dollars.|It is 20 dollars.", ""],
            ["Какой у тебя номер телефона?", "What's your phone number?|What is your phone number?|What's your number?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- 13–19 — **-teen** (ударение в конце), 20–90 — **-ty** (ударение в начале). Сомневаетесь — переспросите.
- hundred / thousand / million **без -s** после числа.
- Возраст — [[I'm 30.]], цена — [[How much is it?]], телефон — по цифрам, 33 = [[double three]].
- 1,500 — запятая разделяет тысячи; 2.5 — точка в дробях.`,
        },
      ],
    },
    {
      id: "a1_u2_l2",
      title: "Который час? Время по-английски",
      goal: "Вы научитесь спрашивать и называть время двумя способами и понимать am и pm.",
      steps: [
        {
          t: "text",
          h: "Вопрос и простой способ ответа",
          md: `Спросить время: [[What time is it?]] или вежливее [[Excuse me, do you have the time?]]

Ответ всегда начинается с **It's…** («оно есть…»). **Самый простой способ** — назвать часы и минуты цифрами, как в электронных часах:
- 7:15 — [[It's seven fifteen.]]
- 9:40 — [[It's nine forty.]]
- 10:05 — [[It's ten oh five.]] (ноль перед минутами читается «oh»)

Ровно в час — **o'clock**: [[It's three o'clock.]] — Три часа.

>i Этот «цифровой» способ всегда правильный и понятный. Его достаточно, чтобы говорить. Но второй, «классический», способ нужно **понимать** — его используют очень часто.`,
        },
        {
          t: "text",
          h: "Классический способ: past и to",
          md: `Циферблат делится пополам:
- **Первая половина часа (минуты 1–30)** — **past** («после»): сколько минут **прошло после** часа.
- **Вторая половина (минуты 31–59)** — **to** («до»): сколько минут **осталось до** следующего часа.

Особые слова: **quarter** — четверть (15 минут), **half** — половина (30 минут).

| Время | Как сказать | Дословно |
|---|---|---|
| 7:05 | [[five past seven]] | пять после семи |
| 7:15 | [[a quarter past seven]] | четверть после семи |
| 7:30 | [[half past seven]] | половина после семи |
| 7:40 | [[twenty to eight]] | двадцать до восьми |
| 7:45 | [[a quarter to eight]] | четверть до восьми |
| 7:55 | [[five to eight]] | пять до восьми |

> Ловушка: **half past seven** — это 7:30, а **не** «половина седьмого» (6:30)! По-русски мы считаем от следующего часа, по-английски — от прошедшего. Half past seven = «половина восьмого».`,
        },
        {
          t: "text",
          h: "am и pm, утро и вечер",
          md: `В англоязычных странах обычно используют **12-часовой** формат:
- **am** — с полуночи до полудня: [[7 am]] — 7 утра
- **pm** — с полудня до полуночи: [[7 pm]] — 7 вечера (19:00)

В разговоре вместо am/pm часто говорят:
- [[in the morning]] — утром: «at eight in the morning»
- [[in the afternoon]] — днём (12–18)
- [[in the evening]] — вечером
- [[at night]] — ночью
- [[at noon]] / [[at midday]] — в полдень, [[at midnight]] — в полночь

**Во сколько?** — [[What time…?]] + предлог **at**: [[The meeting is at 3 pm.]] — Встреча в 15:00. [[What time is the train? — At half past six.]]`,
        },
        {
          t: "choice",
          h: "Сколько времени?",
          items: [
            ["half past nine", ["9:30", "8:30", "9:50"], 0, "Половина после девяти — 9:30 (у нас «половина десятого»)."],
            ["a quarter to six", ["6:15", "5:45", "6:45"], 1, "Четверть до шести — 5:45."],
            ["ten past four", ["4:10", "3:50", "10:04"], 0, "Десять после четырёх — 4:10."],
            ["twenty to eleven", ["11:20", "10:40", "10:20"], 1, "Двадцать до одиннадцати — 10:40."],
            ["Как сказать 3:15?", ["a quarter past three", "a quarter to three", "fifteen to three"], 0, "15 минут после трёх — quarter past."],
            ["8 pm — это…", ["8 утра", "20:00", "8 ночи по Москве"], 1, "pm — после полудня: 20:00."],
          ],
        },
        {
          t: "fill",
          h: "Допишите",
          items: [
            ["7:00 — It's seven ___.", "o'clock|oclock", "Ровно — o'clock."],
            ["6:30 — It's half ___ six.", "past", "Половина после шести."],
            ["2:45 — It's a quarter ___ three.", "to", "Четверть до трёх."],
            ["The meeting is ___ 10 am.", "at", "Во сколько — at."],
            ["I get up at seven in the ___.", "morning", "Утром — in the morning."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: на вокзале",
          lines: [
            ["Man", "Excuse me, what time is it?", "Извините, который час?"],
            ["Woman", "It's a quarter past five.", "Четверть шестого."],
            ["Man", "Thanks. What time is the next train to Oxford?", "Спасибо. Во сколько следующий поезд до Оксфорда?"],
            ["Woman", "At five forty, I think.", "В 5:40, кажется."],
            ["Man", "Great, I'm not late!", "Отлично, я не опоздал!"],
          ],
          qs: [
            ["Сколько сейчас времени?", ["5:15", "4:45", "5:40"], 0, "A quarter past five — 5:15."],
            ["Когда поезд?", ["5:15", "5:40", "4:50"], 1, "At five forty — 5:40."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Который час?", "What time is it?|What's the time?", ""],
            ["Сейчас половина восьмого.", "It's half past seven.|It is half past seven.|It's seven thirty.|It is seven thirty.", "Половина восьмого = 7:30 = half past seven."],
            ["Встреча в два часа дня.", "The meeting is at two pm.|The meeting is at 2 pm.|The meeting is at two in the afternoon.|The meeting is at two o'clock in the afternoon.", "Во сколько — at."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- [[What time is it?]] → [[It's…]]
- Простой способ: «seven fifteen». Ровно — **o'clock**.
- Классический: до 30 минут — **past**, после — **to**; quarter = 15, half = 30.
- **half past seven = 7:30** (половина восьмого!).
- Во сколько — **at**: at 6 pm, at noon.`,
        },
      ],
    },
    {
      id: "a1_u2_l3",
      title: "Дни недели, месяцы и даты",
      goal: "Вы назовёте любую дату, свой день рождения и договоритесь о дне встречи.",
      steps: [
        {
          t: "examples",
          h: "Дни недели — всегда с большой буквы",
          items: [
            ["Monday", "понедельник"], ["Tuesday", "вторник"], ["Wednesday", "среда", "читается «уэнздей» — d в середине не произносится"], ["Thursday", "четверг", "th — язык между зубами"],
            ["Friday", "пятница"], ["Saturday", "суббота"], ["Sunday", "воскресенье"], ["at the weekend", "на выходных", "американцы: on the weekend"],
          ],
        },
        {
          t: "examples",
          h: "Месяцы — тоже с большой буквы",
          items: [
            ["January", "январь"], ["February", "февраль"], ["March", "март"], ["April", "апрель"], ["May", "май"], ["June", "июнь"],
            ["July", "июль"], ["August", "август"], ["September", "сентябрь"], ["October", "октябрь"], ["November", "ноябрь"], ["December", "декабрь"],
          ],
        },
        {
          t: "text",
          h: "Порядковые числа: первый, второй, третий",
          md: `Для дат нужны **порядковые** числительные — «первое, второе». Почти все образуются окончанием **-th**:

| Число | Порядковое | Кратко |
|---|---|---|
| 1 | [[first]] | 1st |
| 2 | [[second]] | 2nd |
| 3 | [[third]] | 3rd |
| 4 | [[fourth]] | 4th |
| 5 | [[fifth]] | 5th (не fiveth!) |
| 8 | [[eighth]] | 8th |
| 9 | [[ninth]] | 9th (без e) |
| 12 | [[twelfth]] | 12th |
| 20 | [[twentieth]] | 20th (y → ie) |
| 21 | [[twenty-first]] | 21st |
| 22 | [[twenty-second]] | 22nd |
| 31 | [[thirty-first]] | 31st |

Неправильные — только **first, second, third** и изменения в написании у fifth, eighth, ninth, twelfth.`,
        },
        {
          t: "text",
          h: "Как сказать дату и с какими предлогами",
          md: `**Британский вариант:** пишут 5 May, говорят [[the fifth of May]].
**Американский:** пишут May 5, говорят [[May fifth]].

> Важно: американцы пишут дату цифрами **месяц/день**: 05/04 — это 4 мая, а не 5 апреля. Британцы и мы — день/месяц.

**Годы** читают парами: 1998 — [[nineteen ninety-eight]], 2025 — [[twenty twenty-five]], 2005 — [[two thousand and five]].

**Предлоги времени (кратко, подробнее — в юните 6):**
- **on** + день или дата: [[on Monday]], [[on the fifth of May]], [[on my birthday]]
- **in** + месяц, год, время года: [[in May]], [[in 2025]], [[in summer]]

Вопросы:
- [[What's the date today?]] — Какое сегодня число? → [[It's the third of March.]]
- [[What day is it today?]] — Какой сегодня день недели? → [[It's Friday.]]
- [[When is your birthday?]] — Когда у тебя день рождения? → [[It's on the tenth of June.]] / [[It's in June.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Как пишется «среда»?", ["Wensday", "Wednesday", "wednesday"], 1, "Wednesday — с большой буквы, d в середине пишется, но не читается."],
            ["___ Monday", ["in", "on", "at"], 1, "Дни недели — on."],
            ["___ July", ["in", "on", "at"], 0, "Месяцы — in."],
            ["5th читается как…", ["fiveth", "fifth", "fiftieth"], 1, "fifth."],
            ["Как сказать 1999 год?", ["one thousand nine hundred ninety-nine", "nineteen ninety-nine", "nineteen ninety-ninth"], 1, "Годы читают парами: nineteen / ninety-nine."],
            ["Американская дата 03/04 — это…", ["3 апреля", "4 марта"], 1, "У американцев сначала месяц: March 4."],
            ["My birthday is ___ the second of April.", ["in", "on", "at"], 1, "Конкретная дата — on."],
          ],
        },
        {
          t: "fill",
          h: "Допишите порядковое числительное",
          items: [
            ["1st = ___", "first", ""], ["3rd = ___", "third", ""], ["12th = ___", "twelfth", "Буква v меняется на f: twelve → twelfth."],
            ["20th = ___", "twentieth", "y → ie + th."], ["2nd = ___", "second", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Какое сегодня число?", "What's the date today?|What is the date today?|What's today's date?", ""],
            ["Мой день рождения — 15 октября.", "My birthday is on the fifteenth of October.|My birthday is on October fifteenth.|My birthday is on 15 October.|My birthday is on October 15.|My birthday is on the 15th of October.|My birthday is the fifteenth of October.", "Дата — on the fifteenth of October."],
            ["Увидимся в пятницу.", "See you on Friday.|See you Friday.", "Дни недели — on, с большой буквы."],
            ["Я родился в 1990 году.", "I was born in 1990.|I was born in nineteen ninety.", "Год — in. «Родился» — I was born (запомните целиком)."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: договариваемся о встрече",
          lines: [
            ["Kate", "Are you free on Thursday?", "Ты свободен в четверг?"],
            ["Alex", "Thursday the twelfth? No, sorry. I'm at work late.", "В четверг, двенадцатого? Нет, извини. Я допоздна на работе."],
            ["Kate", "What about Saturday?", "А в субботу?"],
            ["Alex", "Saturday is great. What time?", "Суббота — отлично. Во сколько?"],
            ["Kate", "At two o'clock, at the café near the park.", "В два часа, в кафе у парка."],
            ["Alex", "Perfect. See you on Saturday!", "Идеально. До субботы!"],
          ],
          qs: [
            ["Почему Алекс не может в четверг?", ["Он в отпуске", "Он допоздна на работе", "Он болеет"], 1, "I'm at work late."],
            ["Когда встреча?", ["В четверг в 2", "В субботу в 2", "В субботу в 12"], 1, "Saturday, at two o'clock."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита 2",
          md: `- Дни и месяцы — **с большой буквы**.
- Порядковые: first, second, third, fourth… fifth, twelfth, twentieth.
- Дата: [[the fifth of May]] (брит.) / [[May fifth]] (амер.); американцы пишут месяц первым.
- Годы — парами: [[nineteen ninety]], [[twenty twenty-five]].
- **on** + день/дата, **in** + месяц/год/время года, **at** + время.

**Карточки:** сегодня добавятся фразы с датами — повторяйте их вслух.`,
        },
      ],
    },
  ],
};
