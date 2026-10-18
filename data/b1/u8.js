// B1 юнит 8: relative clauses — who, which, that, where, whose.
export default {
  id: "b1_u8",
  level: "B1",
  phase: 3,
  icon: "🧷",
  title: "Relative clauses: человек, который…",
  about: "Придаточные с who / which / that / where / whose / when, определительные и неопределительные, как соединять предложения.",
  lessons: [
    {
      id: "b1_u8_l1",
      title: "Who, which, that: «который»",
      goal: "Вы научитесь соединять предложения словом «который» и выбирать между who, which и that.",
      steps: [
        {
          t: "text",
          h: "Одно русское «который» — несколько английских слов",
          md: `По-русски «который» подходит и для людей, и для вещей. В английском выбор зависит от того, **о ком/чём** речь:

| Слово | Для чего | Пример |
|---|---|---|
| **who** | люди | [[The woman who lives next door is a doctor.]] — Женщина, которая живёт по соседству, — врач. |
| **which** | предметы, животные, идеи | [[The car which I bought is red.]] — Машина, которую я купил, красная. |
| **that** | и люди, и предметы (в разговоре очень часто) | [[The man that called you is here.]] [[The book that I'm reading is great.]] |
| **where** | места (= в котором) | [[This is the café where we met.]] — Это кафе, где мы познакомились. |
| **whose** | чей (принадлежность) | [[That's the man whose car was stolen.]] — Это тот мужчина, у которого угнали машину. |
| **when** | время | [[I remember the day when we met.]] |

> **which ≠ what**. «Книга, что я читаю» — не «the book what I read», а [[the book that/which I'm reading]]. **what** в значении «то, что» — без существительного: [[What I need is a holiday.]] — То, что мне нужно, — это отпуск.`,
        },
        {
          t: "text",
          h: "Когда «который» можно опустить",
          md: `Если **who/which/that — не подлежащее** придаточного (после него идёт другое подлежащее), его **можно и часто опускают** в разговоре:

- [[The film (that) we watched was boring.]] — Фильм, который мы смотрели, был скучным. (we — подлежащее → that можно опустить)
- [[The people (who) I work with are great.]] — Люди, с которыми я работаю, отличные.

Но **нельзя опустить**, если это подлежащее:
- [[The man who called you is here.]] (who — подлежащее глагола called, опустить нельзя)

**Предлог** обычно уходит в **конец**: [[the people I work with]] (не «with whom I work» — это очень формально), [[the house I live in]], [[the problem we talked about]].

> Не дублируйте местоимение: «The car which I bought **it** is red» — ошибка. Слово which уже заменило it.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["The girl ___ is talking to Tom is my sister.", ["who", "which", "where"], 0, "Человек — who."],
            ["I lost the keys ___ you gave me.", ["who", "which", "whose"], 1, "Предмет — which (или that)."],
            ["This is the hotel ___ we stayed last year.", ["which", "where", "who"], 1, "Место, «в котором» — where."],
            ["He's the man ___ wife is a famous singer.", ["who", "whose", "which"], 1, "Чья жена — whose."],
            ["Можно опустить «that»?: The book that I read was great.", ["Да", "Нет"], 0, "После that идёт подлежащее I — можно опустить."],
            ["Можно опустить «who»?: The man who lives here is rich.", ["Да", "Нет"], 1, "who — подлежащее (who lives) — нельзя."],
            ["", ["The car which I bought it is red.", "The car which I bought is red."], 1, "Без лишнего it."],
          ],
        },
        {
          t: "fill",
          h: "who, which, where или whose",
          items: [
            ["A pilot is a person ___ flies planes.", "who|that", ""],
            ["A fridge is a machine ___ keeps food cold.", "which|that", ""],
            ["That's the restaurant ___ I had my birthday party.", "where", ""],
            ["I know a girl ___ father is a pilot.", "whose", ""],
            ["Is this the phone ___ you wanted?", "which|that", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Женщина, которая звонила, — моя начальница.", "The woman who called is my boss.|The woman that called is my boss.|The woman who phoned is my boss.", "Подлежащее — who не опускаем."],
            ["Фильм, который мы смотрели, был отличный.", "The film we watched was great.|The film that we watched was great.|The film which we watched was great.|The movie we watched was great.|The movie that we watched was great.", "that можно опустить."],
            ["Это город, где я родился.", "This is the city where I was born.|This is the town where I was born.", ""],
            ["Люди, с которыми я работаю, очень дружелюбные.", "The people I work with are very friendly.|The people who I work with are very friendly.|The people that I work with are very friendly.", "Предлог в конце."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- who — люди, which — предметы, that — оба, where — место, whose — чей.
- Если после «который» идёт другое подлежащее — его можно опустить: [[the film we watched]].
- Предлог — в конец: [[the people I work with]]. Без лишнего it.`,
        },
      ],
    },
    {
      id: "b1_u8_l2",
      title: "Запятые решают: определительные и неопределительные",
      goal: "Вы поймёте разницу между придаточными с запятыми и без и научитесь добавлять информацию, не путая смысл.",
      steps: [
        {
          t: "text",
          h: "Два вида придаточных",
          md: `**Определительные (defining)** — **без запятых**. Без них непонятно, **о ком** речь, они **выделяют** предмет из многих:
- [[My brother who lives in London is a doctor.]] — Мой брат, который живёт в Лондоне, — врач. (подразумевается: у меня несколько братьев, и я говорю о том, что в Лондоне)

**Неопределительные (non-defining)** — **с запятыми**. Это **дополнительная** информация; без неё всё понятно:
- [[My brother, who lives in London, is a doctor.]] — Мой брат (кстати, он живёт в Лондоне) — врач. (брат у меня один)

Правила неопределительных:
1. Обязательно **запятые** с обеих сторон.
2. **that использовать нельзя** — только who / which.
3. Слово **нельзя опустить**.

- [[Moscow, which is the capital of Russia, is huge.]] (Москва одна — доп. информация)
- [[My boss, who is very strict, gave me a day off.]]`,
        },
        {
          t: "text",
          h: "which о всём предложении",
          md: `**, which** может относиться ко **всему предыдущему предложению** — «что» в значении «и это»:
- [[He passed the exam, which surprised everyone.]] — Он сдал экзамен, что всех удивило.
- [[The train was late, which meant I missed the meeting.]] — Поезд опоздал, из-за чего я пропустил встречу.

> Здесь нельзя «what» или «that»: «He passed the exam, what surprised everyone» — ошибка.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Paris, ___ is the capital of France, is beautiful.", ["that", "which", "what"], 1, "С запятыми — which, не that."],
            ["My mother, ___ is 70, still works.", ["who", "that", "—"], 0, "С запятыми — who."],
            ["She didn't call me, ___ made me angry.", ["that", "what", "which"], 2, ", which — о всём предложении."],
            ["У меня одна сестра. Как правильно?", ["My sister who lives in Kazan is a teacher.", "My sister, who lives in Kazan, is a teacher."], 1, "Сестра одна — доп. информация, с запятыми."],
            ["The students ___ passed the test got a certificate.", ["who", ", who"], 0, "Выделяем часть студентов — без запятых."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мой отец, который работает врачом, живёт в Самаре.", "My father, who works as a doctor, lives in Samara.|My father, who is a doctor, lives in Samara.|My dad, who works as a doctor, lives in Samara.", "Отец один — запятые и who."],
            ["Он опоздал, что меня очень разозлило.", "He was late, which made me very angry.|He was late, which annoyed me a lot.|He was late, which made me really angry.", ", which."],
            ["Лондон, который я посетил в прошлом году, очень дорогой.", "London, which I visited last year, is very expensive.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Без запятых — выделяет из многих (можно that, можно опустить).
- С запятыми — доп. информация (только who/which, не опускается).
- **, which** — о всём предложении.`,
        },
      ],
    },
    {
      id: "b1_u8_l3",
      title: "Описываем и объясняем: когда не знаешь слова",
      goal: "Вы научитесь объяснять слова и вещи с помощью relative clauses — главный навык, когда забыл нужное слово.",
      steps: [
        {
          t: "text",
          h: "Стратегия: опиши, если не знаешь слово",
          md: `На B1 вы постоянно будете сталкиваться с тем, что нужного слова не знаете. Не молчите и не переходите на русский — **опишите** с помощью «который»:

- **Человек:** [[It's a person who…]] — [[It's a person who repairs cars.]] (mechanic)
- **Вещь:** [[It's a thing which/that you use to…]] — [[It's a thing you use to open bottles.]] (bottle opener)
- **Место:** [[It's a place where…]] — [[It's a place where you can borrow books.]] (library)
- **Ситуация/время:** [[It's when…]] — [[It's when you can't sleep at night.]] (insomnia)
- **Похоже на:** [[It's a kind of…]], [[It's similar to…]], [[It's the opposite of…]]

>i Носители так делают постоянно — это нормальная часть общения. А заодно — отличная тренировка relative clauses. Узнали слово — сразу в «Мои фразы».`,
        },
        {
          t: "examples",
          h: "Объясняем слова",
          items: [
            ["A landlord is a person who rents out a flat.", "Арендодатель — человек, который сдаёт квартиру."],
            ["A charger is a thing you use to charge your phone.", "Зарядка — вещь, которой заряжают телефон."],
            ["A pharmacy is a place where you buy medicine.", "Аптека — место, где покупают лекарства."],
            ["A deadline is the time by which you must finish something.", "Дедлайн — время, к которому нужно что-то закончить."],
            ["I need the thing that holds paper together — a stapler!", "Мне нужна та штука, которая скрепляет бумагу, — степлер!"],
          ],
        },
        {
          t: "choice",
          h: "Угадайте слово по описанию",
          items: [
            ["It's a person who looks after sick people in a hospital.", ["nurse", "lawyer", "pilot"], 0, ""],
            ["It's a place where planes take off and land.", ["station", "airport", "harbour"], 1, ""],
            ["It's a thing you use to cut paper.", ["scissors", "glue", "ruler"], 0, ""],
            ["It's a person whose job is to defend people in court.", ["judge", "lawyer", "police officer"], 1, ""],
            ["It's when you feel sad because you're far from home.", ["homesick", "jealous", "bored"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Объясните по-английски",
          items: [
            ["Объясните слово «сантехник» (человек, который чинит трубы).", "It's a person who repairs pipes.|It's a person who fixes pipes.|A plumber is a person who repairs pipes.|It's someone who repairs pipes.|A plumber is someone who fixes pipes.|It's a person who fixes water pipes.", ""],
            ["Объясните «холодильник» (вещь, которая хранит еду холодной).", "It's a thing that keeps food cold.|It's a machine that keeps food cold.|It's a thing which keeps food cold.|A fridge is a machine that keeps food cold.|It's something that keeps food cold.", ""],
            ["Объясните «спортзал» (место, где тренируются).", "It's a place where people do sport.|It's a place where you exercise.|It's a place where people train.|A gym is a place where you can exercise.|It's a place where people work out.", ""],
          ],
        },
        {
          t: "speak",
          h: "Опишите вслух, не называя слово",
          items: [
            ["It's a thing you use to make coffee.", "Это вещь, которой делают кофе."],
            ["It's a person who teaches children at school.", "Это человек, который учит детей в школе."],
            ["It's a place where you can watch films on a big screen.", "Это место, где смотрят фильмы на большом экране."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- who / which / that / where / whose / when — «который».
- С запятыми — доп. информация (who/which), без запятых — выделение (можно that и опустить).
- Не знаете слово — опишите: [[It's a person who… / a thing you use to… / a place where…]]`,
        },
      ],
    },
  ],
};
