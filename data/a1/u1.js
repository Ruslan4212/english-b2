// Юнит 1: местоимения и глагол to be (am / is / are).
export default {
  id: "a1_u1",
  level: "A1",
  phase: 1,
  icon: "👋",
  title: "Глагол to be: я есть, он есть",
  about: "Личные местоимения, am/is/are, отрицания и вопросы, знакомство.",
  lessons: [
    {
      id: "a1_u1_l1",
      title: "Я — студент: местоимения и am / is / are",
      goal: "Вы сможете сказать, кто вы, откуда вы и какой вы, и поймёте самое важное отличие английского предложения от русского.",
      steps: [
        {
          t: "text",
          h: "Главное отличие: в английском без глагола нельзя",
          md: `По-русски мы говорим: «Я студент», «Она врач», «Мы дома». Глагола в этих предложениях нет — и это нормально.

В английском **в каждом предложении обязательно должен быть глагол**. Если по-русски глагола нет, англичане ставят служебный глагол **to be** — «быть, являться, находиться». Буквально англичанин говорит: «Я **есть** студент», «Она **есть** врач», «Мы **есть** дома».

- [[I am a student.]] — Я студент. (дословно: я есть студент)
- [[She is a doctor.]] — Она врач.
- [[We are at home.]] — Мы дома.

> Самая частая ошибка начинающих: «I student», «She doctor», «We at home». Без am/is/are англичанин такое понимает, но звучит это как речь ребёнка. Проверка простая: **есть ли в моём предложении глагол?** Если нет — нужен to be.`,
        },
        {
          t: "text",
          h: "Местоимения: кто действует",
          md: `Сначала выучим, как сказать «я, ты, он…» — это **личные местоимения**:

| Английский | Русский | Заметка |
|---|---|---|
| [[I]] | я | Всегда с **большой** буквы, даже в середине предложения |
| [[you]] | ты / вы | Одно слово и для «ты», и для «вы» (и для одного человека, и для многих) |
| [[he]] | он | Только о человеке (мужчине) |
| [[she]] | она | Только о человеке (женщине) |
| [[it]] | оно / он / она | О предметах, животных, явлениях: стол, кот, погода |
| [[we]] | мы | |
| [[they]] | они | И о людях, и о предметах |

>i Важно для русскоговорящих: «стол» по-русски — «он», «книга» — «она». В английском у предметов **нет рода**: и стол, и книга — это **it**. [[Where is the book? — It is on the table.]] — Где книга? — Она на столе.`,
        },
        {
          t: "text",
          h: "Какую форму to be выбрать: am, is или are",
          md: `У глагола to be в настоящем времени **три формы**. Форма зависит от того, кто действует:

| Кто | Форма | Пример |
|---|---|---|
| I | **am** | [[I am tired.]] — Я устал. |
| he, she, it (один человек или предмет) | **is** | [[He is at work.]] — Он на работе. |
| you, we, they (и все во множественном числе) | **are** | [[They are friends.]] — Они друзья. |

Запоминалка: **I — am** (только для «я»), **один — is**, **много или you — are**.

Если вместо местоимения стоит имя или существительное, мысленно замените его:
- **Tom** = he → [[Tom is my friend.]]
- **My mother** = she → [[My mother is a teacher.]]
- **The car** = it → [[The car is new.]]
- **Anna and I** = we → [[Anna and I are colleagues.]]
- **My parents** = they → [[My parents are at home.]]`,
        },
        {
          t: "examples",
          h: "Послушайте и повторите каждое предложение вслух",
          items: [
            ["I am from Russia.", "Я из России."],
            ["You are very kind.", "Ты очень добрый. / Вы очень добры."],
            ["He is a manager.", "Он менеджер."],
            ["She is at home.", "Она дома."],
            ["It is cold today.", "Сегодня холодно.", "погода — это it"],
            ["We are tired.", "Мы устали."],
            ["They are in London.", "Они в Лондоне."],
            ["My name is Anna.", "Меня зовут Анна.", "дословно: моё имя есть Анна"],
          ],
        },
        {
          t: "text",
          h: "Сокращения: как говорят в жизни",
          md: `В разговоре и в неофициальных сообщениях to be почти всегда **сокращают** — сливают с местоимением через апостроф:

| Полная форма | Сокращение | Как звучит |
|---|---|---|
| I am | **I'm** | [[I'm]] «айм» |
| you are | **you're** | [[you're]] «йо» |
| he is | **he's** | [[he's]] «хиз» |
| she is | **she's** | [[she's]] «шиз» |
| it is | **it's** | [[it's]] «итс» |
| we are | **we're** | [[we're]] «уиэ» |
| they are | **they're** | [[they're]] «ðэа» |

Обе формы правильные. Полная звучит официальнее или с нажимом, сокращённая — естественнее в речи.

> Не путайте **it's** (it is — «это есть») и **its** (его/её — о предмете). [[It's a cat. Its name is Tom.]] — Это кот. Его зовут Том.`,
        },
        {
          t: "choice",
          h: "Выберите правильную форму",
          items: [
            ["I ___ a teacher.", ["am", "is", "are"], 0, "С **I** — всегда **am**."],
            ["She ___ from Spain.", ["am", "is", "are"], 1, "She — один человек → **is**."],
            ["We ___ at work.", ["am", "is", "are"], 2, "We — много → **are**."],
            ["My brother ___ a doctor.", ["am", "is", "are"], 1, "My brother = he → **is**."],
            ["You ___ my friend.", ["am", "is", "are"], 2, "You — всегда **are**, даже если это один человек."],
            ["The weather ___ nice today.", ["am", "is", "are"], 1, "The weather = it → **is**."],
            ["Tom and Kate ___ married.", ["is", "are", "am"], 1, "Tom and Kate = they → **are**."],
            ["It ___ my phone.", ["am", "is", "are"], 1, "It → **is**."],
          ],
        },
        {
          t: "fill",
          h: "Вставьте am, is или are",
          intro: "Напечатайте одно слово.",
          items: [
            ["I ___ hungry.", "am", "I → am."],
            ["They ___ students.", "are", "They → are."],
            ["He ___ thirty years old.", "is", "Возраст по-английски — через to be: «он есть 30 лет»."],
            ["My parents ___ in Moscow.", "are", "My parents = they → are."],
            ["The coffee ___ hot.", "is", "The coffee = it → is."],
            ["We ___ from Kazan.", "are", "We → are."],
            ["Anna ___ my sister.", "is", "Anna = she → is."],
          ],
        },
        {
          t: "order",
          h: "Соберите предложение",
          items: [
            ["I am a student.", "Я студент."],
            ["She is from Italy.", "Она из Италии."],
            ["We are at home.", "Мы дома."],
            ["My name is Oleg.", "Меня зовут Олег."],
            ["They are very happy.", "Они очень счастливы."],
          ],
        },
        {
          t: "translate",
          h: "Переведите на английский",
          intro: "Не забудьте am/is/are! Можно полной формой или сокращённо.",
          items: [
            ["Я устал.", "I am tired.|I'm tired.", "Глагола в русском нет — значит, нужен am."],
            ["Он врач.", "He is a doctor.|He's a doctor.", "Перед профессией нужен артикль a — подробно разберём в юните 3."],
            ["Мы из России.", "We are from Russia.|We're from Russia.", "Откуда — from."],
            ["Сегодня холодно.", "It is cold today.|It's cold today.|Today it is cold.|Today it's cold.", "О погоде всегда говорят через it: It is cold."],
            ["Они дома.", "They are at home.|They're at home.", "Дома — at home."],
            ["Меня зовут Мария.", "My name is Maria.|My name's Maria.|I am Maria.|I'm Maria.", "Дословно: моё имя есть Мария."],
          ],
        },
        {
          t: "speak",
          h: "Расскажите о себе вслух",
          intro: "Произнесите фразы, подставляя свои данные в уме.",
          items: [
            ["My name is Anna. I'm from Russia.", "Меня зовут Анна. Я из России."],
            ["I'm a manager. I'm thirty.", "Я менеджер. Мне тридцать."],
            ["My sister is a teacher.", "Моя сестра учитель."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- В английском предложении **обязательно** есть глагол. Нет глагола по-русски → ставим **to be**.
- **I am** · **he/she/it is** · **you/we/they are**.
- Сокращения: I'm, you're, he's, she's, it's, we're, they're.
- Предметы и животные — **it**. Погода — **it**: [[It's cold.]]
- Возраст — тоже через to be: [[I am thirty.]] (не «I have thirty»!).`,
        },
      ],
    },
    {
      id: "a1_u1_l2",
      title: "Я не устал. Ты дома? — отрицания и вопросы с to be",
      goal: "Вы научитесь говорить «нет, я не…» и задавать вопросы «ты…?», «где…?», «кто…?» с глаголом to be.",
      steps: [
        {
          t: "text",
          h: "Отрицание: просто добавьте not",
          md: `Чтобы сказать «не», ставим **not сразу после am/is/are**:

| Утверждение | Отрицание | Сокращённо |
|---|---|---|
| I am tired. | I am **not** tired. | **I'm not** tired. |
| He is at home. | He is **not** at home. | **He isn't** at home. / He's not… |
| They are here. | They are **not** here. | **They aren't** here. / They're not… |

Сокращения: **is not = isn't** («изнт»), **are not = aren't** («аант»). Для **am not** отдельного сокращения нет — говорят **I'm not**.

> Ловушка: по-русски «не» стоит перед словом («я **не** устал»), и хочется сказать «I not tired». Но **not** всегда идёт **после** глагола: I am **not**.`,
        },
        {
          t: "examples",
          h: "Примеры отрицаний",
          items: [
            ["I'm not hungry.", "Я не голоден."],
            ["She isn't at work today.", "Её сегодня нет на работе."],
            ["We aren't from London.", "Мы не из Лондона."],
            ["It isn't expensive.", "Это недорого."],
            ["They aren't my friends.", "Они не мои друзья."],
            ["I'm not sure.", "Я не уверен."],
          ],
        },
        {
          t: "text",
          h: "Вопрос: поменяйте местами",
          md: `В русском вопрос часто отличается от утверждения только интонацией: «Ты дома.» → «Ты дома?».

В английском так нельзя. Чтобы задать вопрос, **глагол to be переходит на первое место** — перед тем, кто действует:

| Утверждение | Вопрос |
|---|---|
| You **are** at home. | **Are** you at home? |
| She **is** a doctor. | **Is** she a doctor? |
| It **is** far. | **Is** it far? |
| They **are** ready. | **Are** they ready? |
| I **am** late. | **Am** I late? |

**Короткие ответы.** На такой вопрос англичане редко отвечают просто «Yes» — обычно повторяют местоимение и глагол:
- [[Are you tired? — Yes, I am. / No, I'm not.]]
- [[Is he at work? — Yes, he is. / No, he isn't.]]
- [[Are they ready? — Yes, they are. / No, they aren't.]]

>i В положительном коротком ответе **не сокращают**: «Yes, I am», а не «Yes, I'm». А в отрицательном — можно: «No, I'm not».`,
        },
        {
          t: "text",
          h: "Вопросы со словами где, кто, что, как",
          md: `Если вопрос начинается с вопросительного слова, оно идёт **в самое начало**, а дальше — тот же порядок: **to be + кто**.

**Вопросительное слово + am/is/are + подлежащее?**

| Слово | Значение | Пример |
|---|---|---|
| [[What]] | что, какой | [[What is your name?]] — Как тебя зовут? (дословно: что есть твоё имя?) |
| [[Where]] | где, откуда | [[Where are you from?]] — Откуда ты? |
| [[Who]] | кто | [[Who is that man?]] — Кто тот мужчина? |
| [[How]] | как | [[How are you?]] — Как дела? |
| [[How old]] | сколько лет | [[How old is she?]] — Сколько ей лет? |
| [[Why]] | почему | [[Why are you late?]] — Почему ты опоздал? |

Сокращения в вопросах: **What's** = what is, **Where's** = where is, **Who's** = who is.

> Обратите внимание: «Как тебя зовут?» — по-английски **What** is your name, а не «How». И «Сколько тебе лет?» — **How old** are you (дословно «насколько ты стар»).`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["___ you a student?", ["Is", "Are", "Am"], 1, "You → are, а в вопросе are идёт в начало."],
            ["She ___ at home. (её нет дома)", ["isn't", "aren't", "not is"], 0, "She → is → isn't."],
            ["Where ___ you from?", ["is", "are", "am"], 1, "You → are."],
            ["Is he your brother? — Yes, he ___.", ["is", "'s", "are"], 0, "В положительном коротком ответе не сокращаем: Yes, he is."],
            ["I ___ tired.", ["amn't", "'m not", "not am"], 1, "Для am not сокращения нет: I'm not."],
            ["What ___ your name?", ["is", "are", "am"], 0, "Your name = it → is."],
            ["How old ___ your children?", ["is", "are", "am"], 1, "Children — много → are."],
            ["Как сказать «Как дела?»", ["How are you?", "How you are?", "What are you?"], 0, "Вопрос: слово-вопрос + are + you."],
          ],
        },
        {
          t: "order",
          h: "Постройте вопрос",
          items: [
            ["Are you from Moscow?", "Ты из Москвы?"],
            ["Where is the station?", "Где вокзал?"],
            ["Is she a teacher?", "Она учитель?"],
            ["How old is your son?", "Сколько лет твоему сыну?"],
            ["Why are you late?", "Почему ты опоздал?"],
          ],
        },
        {
          t: "fill",
          h: "Ответьте коротко",
          items: [
            ["Are you hungry? — Yes, I ___.", "am", "Yes, I am."],
            ["Is it cold? — No, it ___.", "isn't|is not|'s not", "No, it isn't."],
            ["Are they at work? — Yes, they ___.", "are", "Yes, they are."],
            ["Is your sister married? — No, she ___.", "isn't|is not|'s not", "No, she isn't."],
            ["Am I late? — No, you ___.", "aren't|are not|'re not", "Ответ про «тебя» — you aren't."],
          ],
        },
        {
          t: "translate",
          h: "Переведите на английский",
          items: [
            ["Я не голоден.", "I am not hungry.|I'm not hungry.", "Not — после am."],
            ["Ты дома?", "Are you at home?|Are you home?", "Вопрос: are на первое место."],
            ["Где мой телефон?", "Where is my phone?|Where's my phone?", "Where + is + my phone."],
            ["Она не из Москвы.", "She is not from Moscow.|She isn't from Moscow.|She's not from Moscow.", ""],
            ["Как тебя зовут?", "What is your name?|What's your name?", "По-английски: «что твоё имя?» — What."],
            ["Это дорого? — Нет.", "Is it expensive? No, it isn't.|Is it expensive? No.|Is it expensive? No, it is not.|Is it expensive? No, it's not.", "Короткий ответ: No, it isn't."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: в первый день на курсах",
          lines: [
            ["Mike", "Hi! Are you new here?", "Привет! Ты здесь новенькая?"],
            ["Olga", "Yes, I am. I'm Olga.", "Да. Я Ольга."],
            ["Mike", "Nice to meet you, Olga. I'm Mike. Where are you from?", "Приятно познакомиться, Ольга. Я Майк. Откуда ты?"],
            ["Olga", "I'm from Russia, from Kazan. Are you from London?", "Я из России, из Казани. Ты из Лондона?"],
            ["Mike", "No, I'm not. I'm from Manchester. Is this your first lesson?", "Нет. Я из Манчестера. Это твой первый урок?"],
            ["Olga", "Yes, it is. I'm a bit nervous.", "Да. Я немного нервничаю."],
            ["Mike", "Don't worry. The teacher is very nice.", "Не волнуйся. Учитель очень хороший."],
          ],
          qs: [
            ["Откуда Майк?", ["Из Лондона", "Из Манчестера", "Из Казани"], 1, "No, I'm not (from London). I'm from Manchester."],
            ["Как себя чувствует Ольга?", ["Устала", "Немного нервничает", "Голодна"], 1, "I'm a bit nervous."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Отрицание: **am/is/are + not** → I'm not, he isn't, they aren't.
- Вопрос: **to be на первое место** → [[Are you ready?]]
- С вопросительным словом: **What/Where/Who/How + to be + кто?** → [[Where is she?]]
- Короткие ответы: [[Yes, I am.]] / [[No, I'm not.]]
- «Как тебя зовут?» = **What's your name?** «Сколько лет?» = **How old…?**`,
        },
      ],
    },
    {
      id: "a1_u1_l3",
      title: "Знакомство: представиться, рассказать о себе, спросить собеседника",
      goal: "Вы проведёте свой первый разговор на английском: поздороваетесь, представитесь, скажете, откуда вы и кем работаете, и зададите те же вопросы собеседнику.",
      steps: [
        {
          t: "text",
          h: "Как здороваться и прощаться",
          md: `| Ситуация | Фраза | Перевод |
|---|---|---|
| Неформально | [[Hi!]] / [[Hello!]] | Привет! / Здравствуйте! |
| Утром (до 12) | [[Good morning!]] | Доброе утро! |
| Днём (12–18) | [[Good afternoon!]] | Добрый день! |
| Вечером | [[Good evening!]] | Добрый вечер! |
| Прощание | [[Goodbye!]] / [[Bye!]] | До свидания! / Пока! |
| До скорого | [[See you later!]] / [[See you!]] | Увидимся! |
| Перед сном | [[Good night!]] | Спокойной ночи! |

> **Good night** — это только прощание на ночь, а не приветствие вечером. Пришли в гости в 9 вечера — говорите **Good evening**.

**How are you?** — «Как дела?». Это скорее вежливое приветствие, чем настоящий вопрос. Обычный ответ: [[I'm fine, thanks. And you?]] или [[Good, thanks. How are you?]] Рассказывать о проблемах не принято.`,
        },
        {
          t: "text",
          h: "Как представиться: схема на 5 фраз",
          md: `Вот готовая схема — выучите её наизусть, она пригодится в первый же день:

1. **Имя:** [[My name is …]] или [[I'm …]]
2. **Откуда:** [[I'm from Russia.]] / [[I'm from Saint Petersburg.]]
3. **Где живёте:** [[I live in Moscow.]]
4. **Работа:** [[I'm a/an … (профессия)]] — [[I'm an engineer.]], [[I'm a designer.]]
5. **Вежливость:** [[Nice to meet you.]] — Приятно познакомиться. Ответ: [[Nice to meet you too.]]

**Как спросить собеседника** — тот же порядок:
- [[What's your name?]]
- [[Where are you from?]]
- [[Where do you live?]] (этот вопрос с do — разберём в юните 4, пока запомните целиком)
- [[What do you do?]] — Чем занимаетесь? (= кем работаете)

>i Про артикли **a / an** перед профессией подробно — в юните 3. Пока запомните: перед словом, которое начинается с гласного звука, — **an**: an engineer, an accountant, an actor. В остальных случаях — **a**: a doctor, a manager, a teacher.`,
        },
        {
          t: "examples",
          h: "Профессии: послушайте и найдите свою",
          items: [
            ["I'm a manager.", "Я менеджер."],
            ["I'm a programmer.", "Я программист."],
            ["I'm a teacher.", "Я учитель."],
            ["I'm a doctor.", "Я врач."],
            ["I'm an engineer.", "Я инженер.", "an — engineer начинается с гласного звука"],
            ["I'm an accountant.", "Я бухгалтер."],
            ["I'm a sales manager.", "Я менеджер по продажам."],
            ["I'm a student.", "Я студент."],
            ["I'm retired.", "Я на пенсии.", "без артикля — это прилагательное"],
          ],
        },
        {
          t: "text",
          h: "Если не поняли собеседника",
          md: `В первых разговорах вы будете понимать не всё — это нормально. Главное — не молчать, а переспросить:

- [[Sorry?]] — Простите? (с вопросительной интонацией — «повторите»)
- [[Can you repeat that, please?]] — Можете повторить?
- [[Can you speak more slowly, please?]] — Можете говорить медленнее?
- [[I don't understand.]] — Я не понимаю.
- [[How do you say … in English?]] — Как сказать … по-английски?
- [[What does … mean?]] — Что значит …?

>i Эти 6 фраз — ваш спасательный круг. С ними можно продолжать разговор даже при очень маленьком словарном запасе.`,
        },
        {
          t: "dialog",
          h: "Диалог: знакомство на конференции",
          lines: [
            ["Sarah", "Good morning! I'm Sarah.", "Доброе утро! Я Сара."],
            ["Dmitry", "Good morning, Sarah. My name is Dmitry. Nice to meet you.", "Доброе утро, Сара. Меня зовут Дмитрий. Приятно познакомиться."],
            ["Sarah", "Nice to meet you too. Where are you from, Dmitry?", "Мне тоже. Откуда вы, Дмитрий?"],
            ["Dmitry", "I'm from Russia. I live in Novosibirsk. And you?", "Я из России. Живу в Новосибирске. А вы?"],
            ["Sarah", "I'm from Canada, from Toronto. What do you do?", "Я из Канады, из Торонто. Чем вы занимаетесь?"],
            ["Dmitry", "I'm an engineer. And you?", "Я инженер. А вы?"],
            ["Sarah", "I'm a designer. Sorry, how do you spell your name?", "Я дизайнер. Простите, как пишется ваше имя?"],
            ["Dmitry", "D-M-I-T-R-Y.", "Д-М-И-Т-Р-И."],
          ],
          qs: [
            ["Где живёт Дмитрий?", ["В Москве", "В Новосибирске", "В Торонто"], 1, "I live in Novosibirsk."],
            ["Кем работает Сара?", ["Инженером", "Дизайнером", "Учителем"], 1, "I'm a designer."],
          ],
        },
        {
          t: "choice",
          h: "Что сказать в этой ситуации?",
          items: [
            ["Вы пришли на встречу в 10 утра. Как поздороваться?", ["Good night!", "Good morning!", "Good evening!"], 1, "До полудня — Good morning."],
            ["Вам сказали «Nice to meet you». Что ответить?", ["Nice to meet you too.", "Yes, I am.", "Good night."], 0, "Nice to meet you too — мне тоже приятно."],
            ["Вас спросили «How are you?». Обычный ответ:", ["I'm 30.", "I'm fine, thanks. And you?", "I'm from Russia."], 1, "Это вежливое приветствие — коротко и позитивно."],
            ["Вы не расслышали. Что сказать?", ["Sorry, can you repeat that?", "Goodbye!", "I'm fine."], 0, "Переспросить — нормально."],
            ["«Чем вы занимаетесь?» по-английски:", ["What are you doing?", "What do you do?", "Who are you?"], 1, "What do you do? — о профессии. What are you doing? — «что ты сейчас делаешь?»."],
            ["Как правильно?", ["I'm a engineer.", "I'm an engineer.", "I'm engineer."], 1, "Перед гласным звуком — an."],
          ],
        },
        {
          t: "translate",
          h: "Переведите на английский",
          items: [
            ["Приятно познакомиться.", "Nice to meet you.|Pleased to meet you.", ""],
            ["Я из России, я живу в Самаре.", "I'm from Russia, I live in Samara.|I am from Russia. I live in Samara.|I'm from Russia. I live in Samara.|I am from Russia, I live in Samara.", "live — глагол, поэтому to be не нужен: I live (не I am live)."],
            ["Я программист.", "I'm a programmer.|I am a programmer.", "Перед профессией — a."],
            ["Можете говорить медленнее?", "Can you speak more slowly?|Can you speak more slowly, please?|Can you speak slower?|Could you speak more slowly?", ""],
            ["Откуда вы?", "Where are you from?", "Где + are + you + from — предлог from уходит в конец."],
          ],
        },
        {
          t: "speak",
          h: "Ваш первый рассказ о себе",
          intro: "Скажите вслух схему из 5 фраз про себя. Ниже — образец.",
          items: [
            ["Hello! My name is Ivan.", "Привет! Меня зовут Иван."],
            ["I'm from Russia. I live in Moscow.", "Я из России. Я живу в Москве."],
            ["I'm an engineer.", "Я инженер."],
            ["Nice to meet you!", "Приятно познакомиться!"],
          ],
        },
        {
          t: "text",
          h: "Итог юнита 1 и что дальше",
          md: `Вы умеете:
- здороваться и прощаться по времени суток;
- представиться схемой из 5 фраз;
- спросить собеседника: **What's your name? Where are you from? What do you do?**
- переспросить, если не поняли.

**Задание на вторник (урок говорения):** позвоните Мии (тема «Знакомство»), расскажите о себе по схеме и задайте ей те же вопросы. После урока перескажите разговор вслух.

>i Ошибки этого урока уже в «Мои ошибки», а фразы — в колоде «Основа». Завтра начните с карточек.`,
        },
      ],
    },
  ],
};
