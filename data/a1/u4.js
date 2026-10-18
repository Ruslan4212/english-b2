// Юнит 4: Present Simple — утверждение, отрицание, вопросы, наречия частоты, распорядок дня.
export default {
  id: "a1_u4",
  level: "A1",
  phase: 1,
  icon: "🔁",
  title: "Present Simple: что я делаю обычно",
  about: "Главное время английского: привычки, факты, расписание. Окончание -s, do/does, наречия частоты.",
  lessons: [
    {
      id: "a1_u4_l1",
      title: "I work, she works: утвердительные предложения",
      goal: "Вы научитесь говорить о том, что делаете регулярно, и не будете забывать окончание -s после he/she/it.",
      steps: [
        {
          t: "text",
          h: "Когда используется Present Simple",
          md: `**Present Simple** («простое настоящее») — время для того, что происходит **регулярно, обычно, всегда**, а также для фактов:

- **Привычки и распорядок:** [[I get up at seven.]] — Я встаю в семь (каждый день).
- **Факты о себе:** [[I live in Moscow. I work in a bank.]] — Я живу в Москве. Я работаю в банке.
- **Общие истины:** [[Water boils at 100 degrees.]] — Вода кипит при 100 градусах.
- **Расписание:** [[The train leaves at 6.]] — Поезд отправляется в 6.

>i Не путайте с «прямо сейчас»: «Я сейчас читаю» — это другое время (Present Continuous, фаза A2). Present Simple отвечает на вопрос **«что вы делаете вообще, обычно?»**`,
        },
        {
          t: "text",
          h: "Как строится: глагол без изменений… почти",
          md: `Хорошая новость: в Present Simple глагол **почти не меняется**. Берём словарную форму без to:

| Кто | Глагол | Пример |
|---|---|---|
| I | work | [[I work.]] |
| you | work | [[You work.]] |
| we | work | [[We work.]] |
| they | work | [[They work.]] |
| **he / she / it** | **work + s** | [[She works.]] |

**Единственное изменение:** после **he, she, it** (и любого одного человека/предмета: Tom, my mother, the shop) к глаголу добавляется **-s**.

- [[I live in Kazan.]] → [[My sister lives in Kazan.]]
- [[We like coffee.]] → [[He likes coffee.]]
- [[They open at nine.]] → [[The shop opens at nine.]]

> Это **самая частая ошибка** даже у тех, кто учит английский годами: «He work», «She like». Носители замечают её сразу. Тренируйте правило: **he/she/it → -s**.

**Важно:** в Present Simple **не нужен** am/is/are рядом с обычным глаголом. Ошибка: «I am work», «She is lives». Правильно: [[I work.]], [[She lives.]] To be — это отдельный глагол, он нужен, только когда другого глагола нет (юнит 1).`,
        },
        {
          t: "text",
          h: "Правописание -s и произношение",
          md: `| Правило | Пример |
|---|---|
| Обычно **+s** | work → works, read → reads, play → plays |
| После s, sh, ch, x, o → **+es** | watch → watches, finish → finishes, go → goes, do → does |
| Согласная + y → **ies** | study → studies, fly → flies (но play → plays: перед y гласная) |
| **have → has** | [[She has a car.]] — исключение! |

**Произношение -s:** как во множественном числе — «с» ([[works]], [[likes]]), «з» ([[lives]], [[plays]]), «из» ([[watches]], [[finishes]]). Слово **does** читается «даз», **goes** — «гоуз», **says** — «сэз».`,
        },
        {
          t: "examples",
          h: "Глаголы распорядка дня",
          items: [
            ["I get up at seven.", "Я встаю в семь."],
            ["She has a shower.", "Она принимает душ.", "have → has"],
            ["He goes to work by metro.", "Он ездит на работу на метро.", "go → goes"],
            ["We start work at nine.", "Мы начинаем работу в девять."],
            ["My husband finishes work at six.", "Мой муж заканчивает работу в шесть.", "finish → finishes"],
            ["They watch TV in the evening.", "Вечером они смотрят телевизор."],
            ["She studies English.", "Она учит английский.", "study → studies"],
            ["I go to bed at midnight.", "Я ложусь спать в полночь."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильную форму",
          items: [
            ["She ___ in a bank.", ["work", "works", "is work"], 1, "She → -s: works."],
            ["I ___ coffee every morning.", ["drink", "drinks", "am drink"], 0, "I → без -s."],
            ["My brother ___ in London.", ["live", "lives", "is live"], 1, "My brother = he → lives."],
            ["They ___ TV every evening.", ["watch", "watches", "watchs"], 0, "They → без -s."],
            ["He ___ a new car.", ["have", "has", "haves"], 1, "have → has (исключение)."],
            ["Tom ___ to the gym on Mondays.", ["go", "goes", "gos"], 1, "go → goes."],
            ["The shop ___ at 10.", ["open", "opens", "is open at"], 1, "The shop = it → opens."],
            ["My kids ___ to school by bus.", ["go", "goes"], 0, "Kids — много → go."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в правильную форму",
          intro: "В скобках — глагол. Подумайте: нужен ли -s?",
          items: [
            ["She ___ (study) English.", "studies", "Согласная + y → ies."],
            ["We ___ (live) near the park.", "live", "We → без изменений."],
            ["He ___ (watch) football on Sundays.", "watches", "После ch → es."],
            ["My mother ___ (cook) very well.", "cooks", "My mother = she → +s."],
            ["I ___ (get) up at 6.", "get", "I → без изменений."],
            ["The film ___ (start) at 8.", "starts", "The film = it → +s."],
            ["Anna ___ (have) two cats.", "has", "have → has."],
            ["It ___ (rain) a lot in London.", "rains", "It → +s."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я работаю в офисе.", "I work in an office.", "Без am! Office — гласный звук → an."],
            ["Она живёт в Москве.", "She lives in Moscow.", "She → lives."],
            ["Мой папа встаёт в шесть.", "My dad gets up at six.|My father gets up at six.|My dad gets up at 6.|My father gets up at 6.", "My dad = he → gets."],
            ["Они пьют чай каждое утро.", "They drink tea every morning.", ""],
            ["У него есть собака.", "He has a dog.|He's got a dog.|He has got a dog.", "have → has."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Present Simple — регулярные действия, факты, расписание.
- Глагол в словарной форме, но **he/she/it + s**: works, lives, goes, watches, studies, **has**.
- **Без am/is/are** рядом с обычным глаголом: I work (не I am work).

Мини-задание: скажите вслух 5 предложений о распорядке дня члена вашей семьи — с -s!`,
        },
      ],
    },
    {
      id: "a1_u4_l2",
      title: "I don't work, she doesn't work: отрицания",
      goal: "Вы научитесь говорить «я не…» в Present Simple с помощью don't и doesn't.",
      steps: [
        {
          t: "text",
          h: "Помощник do",
          md: `В русском, чтобы сказать «не», мы просто ставим «не»: «я **не** работаю». В английском с обычными глаголами так нельзя — нужен **глагол-помощник do**.

**do not = don't** — для I, you, we, they
**does not = doesn't** — для he, she, it

| Утверждение | Отрицание |
|---|---|
| I work. | I **don't** work. |
| They like fish. | They **don't** like fish. |
| She works. | She **doesn't** work. |
| He has a car. | He **doesn't** have a car. |

> **Главная ловушка:** после **doesn't** окончание **-s у глагола исчезает**! «-s» как бы переходит в does. Ошибка: «She doesn't works». Правильно: [[She doesn't work.]] Одна «s» на предложение — либо в глаголе, либо в does.

И не путайте с to be: **I'm not tired** (to be + not), но **I don't work** (do + not + глагол). Ошибка: «I'm not work», «I don't tired».`,
        },
        {
          t: "examples",
          h: "Примеры",
          items: [
            ["I don't eat meat.", "Я не ем мясо."],
            ["We don't live in the city.", "Мы не живём в городе."],
            ["She doesn't drink coffee.", "Она не пьёт кофе."],
            ["My son doesn't like school.", "Мой сын не любит школу."],
            ["It doesn't work.", "Это не работает.", "о сломанной вещи"],
            ["They don't have children.", "У них нет детей."],
            ["I don't know.", "Я не знаю."],
            ["I don't understand.", "Я не понимаю."],
          ],
        },
        {
          t: "text",
          h: "Как не путать два вида отрицания",
          md: `Задайте себе вопрос: **есть ли в предложении обычный глагол-действие** (work, live, like, have…)?

- **Есть** → отрицание через **don't / doesn't**: [[I don't like it.]]
- **Нет** (по-русски глагола нет, «я устал», «он дома») → это to be, отрицание через **not**: [[I'm not tired.]], [[He isn't at home.]]

| По-русски | Есть глагол-действие? | По-английски |
|---|---|---|
| Я не голоден. | нет | [[I'm not hungry.]] |
| Я не ем мясо. | да (есть) | [[I don't eat meat.]] |
| Она не врач. | нет | [[She isn't a doctor.]] |
| Она не работает. | да | [[She doesn't work.]] |`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["She ___ like coffee.", ["don't", "doesn't", "isn't"], 1, "She → doesn't."],
            ["I ___ speak French.", ["don't", "doesn't", "am not"], 0, "I → don't."],
            ["He doesn't ___ in Moscow.", ["live", "lives", "living"], 0, "После doesn't — без -s."],
            ["We ___ tired.", ["don't", "aren't", "doesn't"], 1, "Нет глагола-действия — to be: aren't."],
            ["My phone ___ work.", ["don't", "doesn't", "isn't"], 1, "My phone = it → doesn't."],
            ["They ___ have a car.", ["don't", "doesn't", "aren't"], 0, "They → don't."],
            ["I ___ at work today.", ["don't", "am not", "doesn't"], 1, "«Я не на работе» — нет глагола-действия → I'm not."],
          ],
        },
        {
          t: "fill",
          h: "Сделайте отрицание",
          items: [
            ["I like tea. → I ___ like tea.", "don't|do not", ""],
            ["She works here. → She ___ work here.", "doesn't|does not", "-s ушла в does."],
            ["He plays tennis. → He doesn't ___ tennis.", "play", "После doesn't — словарная форма."],
            ["We know him. → We ___ know him.", "don't|do not", ""],
            ["The bus stops here. → The bus ___ stop here.", "doesn't|does not", "The bus = it."],
            ["She is busy. → She ___ busy.", "isn't|is not|'s not", "Это to be — просто not."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я не знаю.", "I don't know.|I do not know.", ""],
            ["Он не говорит по-английски.", "He doesn't speak English.|He does not speak English.", "doesn't + speak (без -s)."],
            ["У нас нет машины.", "We don't have a car.|We haven't got a car.|We do not have a car.", "Отрицание have — через don't."],
            ["Она не любит футбол.", "She doesn't like football.|She does not like football.", ""],
            ["Я не устал.", "I'm not tired.|I am not tired.", "Нет глагола-действия — to be."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Отрицание в Present Simple: **don't** (I, you, we, they) / **doesn't** (he, she, it) + глагол **без -s**.
- [[She doesn't work.]] — не «doesn't works».
- Нет глагола-действия → это to be: [[I'm not tired.]]
- Самые полезные: [[I don't know.]], [[I don't understand.]], [[It doesn't work.]]`,
        },
      ],
    },
    {
      id: "a1_u4_l3",
      title: "Do you work? Where does she live? — вопросы и наречия частоты",
      goal: "Вы научитесь задавать вопросы в Present Simple, кратко отвечать и говорить, как часто что-то делаете.",
      steps: [
        {
          t: "text",
          h: "Вопрос: Do/Does в начало",
          md: `Помощник **do/does** выходит **в начало** вопроса:

**Do / Does + кто + глагол (словарная форма)?**

| Утверждение | Вопрос |
|---|---|
| You work here. | **Do** you work here? |
| They live in Kazan. | **Do** they live in Kazan? |
| She works here. | **Does** she work here? |
| He likes pizza. | **Does** he like pizza? |

Как и в отрицании, после **does** у глагола **нет -s**: [[Does she work?]] (не «Does she works?»).

**Короткие ответы** — повторяем do/does:
- [[Do you like coffee? — Yes, I do. / No, I don't.]]
- [[Does he speak English? — Yes, he does. / No, he doesn't.]]`,
        },
        {
          t: "text",
          h: "Вопросы со словами: Where, What, When…",
          md: `**Вопросительное слово + do/does + кто + глагол?**

- [[Where do you live?]] — Где ты живёшь?
- [[What do you do?]] — Чем ты занимаешься? (первое do — помощник, второе — глагол «делать»)
- [[When does the shop open?]] — Когда открывается магазин?
- [[What time do you get up?]] — Во сколько ты встаёшь?
- [[How often do you go to the gym?]] — Как часто ты ходишь в спортзал?
- [[Why does she work so much?]] — Почему она так много работает?

>i Схема одинакова для всех вопросов. Запомните её как формулу: **(Слово) + do/does + подлежащее + глагол?** Если русский вопрос — «Ты живёшь?», а английский — «Do you live?», вы всё делаете правильно.`,
        },
        {
          t: "text",
          h: "Как часто: наречия частоты",
          md: `| Наречие | Значение | Частота |
|---|---|---|
| [[always]] | всегда | 100% |
| [[usually]] | обычно | ~80% |
| [[often]] | часто | ~60% |
| [[sometimes]] | иногда | ~40% |
| [[rarely]] / [[seldom]] | редко | ~10% |
| [[never]] | никогда | 0% |

**Место в предложении — перед основным глаголом, но после to be:**
- [[I usually get up at seven.]] — перед глаголом get up
- [[She never eats meat.]] — перед eats
- [[He is always late.]] — после is!
- [[We are often tired.]] — после are

> **never** уже содержит отрицание. По-русски «я **никогда не** ем», а по-английски **одно** отрицание: [[I never eat meat.]] Ошибка: «I don't never eat».

Ещё выражения частоты — в конце предложения: [[every day]] (каждый день), [[once a week]] (раз в неделю), [[twice a month]] (два раза в месяц), [[three times a year]] (три раза в год).`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["___ you speak English?", ["Do", "Does", "Are"], 0, "You → Do."],
            ["___ she live here?", ["Do", "Does", "Is"], 1, "She → Does."],
            ["Does he ___ tea?", ["like", "likes", "liking"], 0, "После does — без -s."],
            ["Where ___ your parents live?", ["do", "does", "are"], 0, "Parents — много → do."],
            ["Do you work on Saturdays? — No, I ___.", ["don't", "doesn't", "am not"], 0, "Краткий ответ: No, I don't."],
            ["Как правильно?", ["I always am late.", "I am always late.", "Always I am late."], 1, "С to be наречие идёт после глагола."],
            ["Как правильно?", ["She usually drinks tea.", "She drinks usually tea.", "Usually she tea drinks."], 0, "Наречие — перед основным глаголом."],
            ["Как правильно?", ["I don't never eat fish.", "I never eat fish.", "I never don't eat fish."], 1, "never — уже отрицание."],
          ],
        },
        {
          t: "order",
          h: "Постройте вопрос",
          items: [
            ["Where do you work?", "Где ты работаешь?"],
            ["Does she like coffee?", "Она любит кофе?"],
            ["What time does the film start?", "Во сколько начинается фильм?"],
            ["How often do you go to the gym?", "Как часто ты ходишь в спортзал?"],
            ["I usually get up at seven.", "Обычно я встаю в семь."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Где ты живёшь?", "Where do you live?", ""],
            ["Твой брат работает в банке?", "Does your brother work in a bank?|Does your brother work at a bank?", "Your brother = he → Does."],
            ["Во сколько ты встаёшь?", "What time do you get up?|When do you get up?", ""],
            ["Я никогда не пью кофе вечером.", "I never drink coffee in the evening.", "Одно отрицание: never."],
            ["Она всегда занята.", "She is always busy.|She's always busy.", "С to be — always после is."],
            ["Я хожу в спортзал два раза в неделю.", "I go to the gym twice a week.|I go to the gym two times a week.", "twice a week."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: как проходит твой день",
          lines: [
            ["Lucy", "What time do you usually get up?", "Во сколько ты обычно встаёшь?"],
            ["Max", "At six thirty. I start work at eight.", "В полседьмого. Я начинаю работу в восемь."],
            ["Lucy", "Wow, early! Do you have breakfast at home?", "Ого, рано! Ты завтракаешь дома?"],
            ["Max", "No, I don't. I usually have a coffee at the office. What about you?", "Нет. Обычно пью кофе в офисе. А ты?"],
            ["Lucy", "I work from home, so I get up at eight. I never have breakfast before nine.", "Я работаю из дома, поэтому встаю в восемь. Я никогда не завтракаю до девяти."],
            ["Max", "Lucky you! Does your husband work from home too?", "Повезло! Твой муж тоже работает из дома?"],
            ["Lucy", "No, he doesn't. He works in a hospital.", "Нет. Он работает в больнице."],
          ],
          qs: [
            ["Где Макс завтракает?", ["Дома", "В офисе (кофе)", "Не завтракает вообще"], 1, "I usually have a coffee at the office."],
            ["Где работает муж Люси?", ["Дома", "В офисе", "В больнице"], 2, "He works in a hospital."],
          ],
        },
        {
          t: "speak",
          h: "Расскажите о своём дне",
          items: [
            ["I usually get up at seven.", "Обычно я встаю в семь."],
            ["I go to work by bus.", "Я езжу на работу на автобусе."],
            ["I never watch TV in the morning.", "Я никогда не смотрю телевизор утром."],
            ["What time do you get up?", "Во сколько ты встаёшь?"],
          ],
        },
        {
          t: "text",
          h: "Итог юнита 4",
          md: `- Утверждение: I work / **she works**.
- Отрицание: I **don't** work / she **doesn't work**.
- Вопрос: **Do** you work? / **Does** she **work**? Where **do** you live?
- Ответы: Yes, I do. / No, she doesn't.
- Наречия частоты: перед глаголом ([[I often read]]), но после to be ([[I'm often tired]]). **never** — одно отрицание.

Это время — фундамент всего английского. На уроке говорения расскажите о своём дне от подъёма до сна.`,
        },
      ],
    },
  ],
};
