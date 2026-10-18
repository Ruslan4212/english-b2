// Юнит 7: have / have got, объектные местоимения, семья и описание людей.
export default {
  id: "a1_u7",
  level: "A1",
  phase: 1,
  icon: "👨‍👩‍👧",
  title: "У меня есть: have, семья, описание людей",
  about: "Как сказать «у меня есть», местоимения me/him/her, члены семьи, внешность и характер.",
  lessons: [
    {
      id: "a1_u7_l1",
      title: "У меня есть: have и have got",
      goal: "Вы научитесь говорить, что у вас есть (семья, вещи, планы, болезни), и правильно строить отрицания и вопросы с have.",
      steps: [
        {
          t: "text",
          h: "«У меня есть» = «я имею»",
          md: `По-русски мы говорим «**У меня** есть машина». Англичане говорят иначе: «**Я имею** машину» — [[I have a car.]]

Поэтому русское «у кого-то есть что-то» переводится через глагол **have** (иметь):
- [[I have a brother.]] — У меня есть брат.
- [[She has two children.]] — У неё двое детей.
- [[We have a big flat.]] — У нас большая квартира.
- [[Do you have a pen?]] — У тебя есть ручка?

> Ошибка дословного перевода: «At me is a car» — так сказать нельзя. Всегда: **кто + have + что**.

Помните: **he/she/it → has** (это то же правило -s из Present Simple).`,
        },
        {
          t: "text",
          h: "Have и have got — два варианта",
          md: `Есть два равноправных способа сказать «у меня есть»:

| | have (универсально, особенно в американском) | have got (часто в британской разговорной речи) |
|---|---|---|
| + | [[I have a car.]] / [[She has a car.]] | [[I've got a car.]] / [[She's got a car.]] |
| − | [[I don't have a car.]] / [[She doesn't have a car.]] | [[I haven't got a car.]] / [[She hasn't got a car.]] |
| ? | [[Do you have a car?]] / [[Does she have a car?]] | [[Have you got a car?]] / [[Has she got a car?]] |

**Важно не смешивать:** у **have** отрицание и вопрос — через **do/does** (это обычный глагол). У **have got** — сам have выходит вперёд, без do.

>i Совет: для начала используйте **have + do/does** — этот вариант работает везде и во всех временах. **have got** нужно просто понимать на слух.`,
        },
        {
          t: "text",
          h: "Have — не только «иметь»",
          md: `В устойчивых выражениях **have** означает «делать, проводить, принимать»:

| Выражение | Значение |
|---|---|
| [[have breakfast / lunch / dinner]] | завтракать / обедать / ужинать |
| [[have a shower]] | принимать душ |
| [[have a coffee]] | выпить кофе |
| [[have a good time]] | хорошо провести время |
| [[have a meeting]] | проводить встречу, у меня встреча |
| [[have a problem]] | иметь проблему |
| [[have a cold]] / [[have a headache]] | простудиться / болит голова |
| [[have a break]] | сделать перерыв |

В этих значениях **have got не используется**: [[I have breakfast at 8]] (не «I've got breakfast»).

Пожелания: [[Have a nice day!]] — Хорошего дня! [[Have a good weekend!]] — Хороших выходных!`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["She ___ a dog.", ["have", "has", "is"], 1, "She → has."],
            ["I ___ any brothers.", ["don't have", "haven't", "not have"], 0, "Have как обычный глагол → don't have."],
            ["___ you have a car?", ["Have", "Do", "Are"], 1, "С have — вопрос через Do."],
            ["___ you got a pen?", ["Have", "Do", "Are"], 0, "Have got → Have you got?"],
            ["He ___ got a new phone.", ["has", "have", "is"], 0, "He's got = he has got."],
            ["Does she ___ children?", ["has", "have", "having"], 1, "После does — have."],
            ["We usually ___ dinner at seven.", ["have", "have got", "are"], 0, "have dinner — have got здесь нельзя."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["У меня есть сестра.", "I have a sister.|I've got a sister.|I have got a sister.", ""],
            ["У него нет машины.", "He doesn't have a car.|He hasn't got a car.|He does not have a car.|He has not got a car.", ""],
            ["У тебя есть дети?", "Do you have children?|Have you got children?|Do you have any children?|Have you got any children?", ""],
            ["У меня болит голова.", "I have a headache.|I've got a headache.", "have a headache."],
            ["Хороших выходных!", "Have a nice weekend!|Have a good weekend!|Have a great weekend!", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- «У меня есть» = **I have**. He/she/it → **has**.
- have: don't/doesn't have, Do you have? · have got: haven't got, Have you got?
- have breakfast, have a shower, have a good time, have a headache — только have.`,
        },
      ],
    },
    {
      id: "a1_u7_l2",
      title: "Me, him, her: местоимения-дополнения",
      goal: "Вы научитесь говорить «мне, меня, его, ей, нам» и не путать I и me, he и him.",
      steps: [
        {
          t: "text",
          h: "Две формы местоимений",
          md: `В русском «я» меняется: я, **меня, мне, мной**. В английском у каждого местоимения всего **две** формы:

- **Подлежащее** (кто делает): I, you, he, she, it, we, they — стоит **перед** глаголом.
- **Дополнение** (кого, кому, с кем): **me, you, him, her, it, us, them** — стоит **после** глагола или предлога.

| Кто делает | Кого / кому / о ком |
|---|---|
| I | [[me]] — меня, мне, мной |
| you | [[you]] — тебя, тебе, вас |
| he | [[him]] — его, ему, им |
| she | [[her]] — её, ей |
| it | [[it]] — его, её (о предмете) |
| we | [[us]] — нас, нам |
| they | [[them]] — их, им |

Примеры:
- [[I love her.]] — Я люблю её. / [[She loves me.]] — Она любит меня.
- [[Call me.]] — Позвони мне.
- [[Can you help us?]] — Можете нам помочь?
- [[I know them.]] — Я их знаю.
- [[This is for you.]] — Это для тебя.
- [[Come with me.]] — Пойдём со мной.`,
        },
        {
          t: "text",
          h: "Ловушка: her — и «её», и «ей»",
          md: `Слово **her** работает в двух ролях:
- **Притяжательное** («её» — чья?): [[her car]] — её машина.
- **Дополнение** («её/ей» — кого? кому?): [[I see her.]] — Я вижу её. [[Give her the book.]] — Дай ей книгу.

А для «он» — разные слова: **his** (его — чей?) и **him** (его/ему — кого? кому?):
- [[his car]] — его машина
- [[I see him.]] — Я вижу его.

> Ошибки: «I love she», «Tell he», «It's for I». После глагола и предлога — **me, him, her, us, them**.

**Me too / Me neither:** «Я тоже» в разговоре — [[Me too.]] (не «I too»). «Я тоже нет» — [[Me neither.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильное местоимение",
          items: [
            ["Can you help ___?", ["I", "me", "my"], 1, "После глагола — me."],
            ["I don't know ___. (его)", ["he", "his", "him"], 2, "Кого? — him."],
            ["This present is for ___. (для неё)", ["she", "her", "hers"], 1, "После предлога — her."],
            ["___ live in Moscow. (мы)", ["Us", "We", "Our"], 1, "Подлежащее — we."],
            ["Where are my keys? I can't find ___.", ["it", "them", "they"], 1, "Ключи — много → them."],
            ["«I love pizza.» — «___!»", ["I too", "Me too", "Me also"], 1, "Me too."],
            ["Tell ___ about your trip. (нам)", ["we", "our", "us"], 2, "Кому? — us."],
          ],
        },
        {
          t: "fill",
          h: "Вставьте местоимение",
          items: [
            ["I like Tom. I often call ___.", "him", ""],
            ["Anna is my friend. I see ___ every day.", "her", ""],
            ["Where's my phone? I need ___.", "it", ""],
            ["My parents live far away. I miss ___.", "them", "Скучаю по ним — miss them."],
            ["Can you come with ___? (с нами)", "us", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Позвони мне завтра.", "Call me tomorrow.|Phone me tomorrow.|Give me a call tomorrow.", ""],
            ["Я её не знаю.", "I don't know her.|I do not know her.", ""],
            ["Он часто нам помогает.", "He often helps us.", "often — перед глаголом; helps — с -s."],
            ["Это для них.", "This is for them.|It's for them.|It is for them.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Подлежащее: I, he, she, we, they. После глагола/предлога: **me, him, her, us, them** (you и it не меняются).
- **her** = её машина и вижу её/дай ей. **his** — чей, **him** — кого.
- [[Me too.]] / [[Me neither.]]`,
        },
      ],
    },
    {
      id: "a1_u7_l3",
      title: "Семья, внешность и характер",
      goal: "Вы сможете рассказать о своей семье и описать человека: как он выглядит и какой у него характер.",
      steps: [
        {
          t: "examples",
          h: "Члены семьи",
          items: [
            ["mother / father", "мать / отец", "в разговоре mum / dad (амер. mom)"], ["parents", "родители"], ["husband / wife", "муж / жена"],
            ["son / daughter", "сын / дочь", "daughter — «доотэ», gh не читается"], ["children", "дети", "один ребёнок — child"], ["brother / sister", "брат / сестра"],
            ["grandmother / grandfather", "бабушка / дедушка", "в разговоре grandma / grandpa"], ["uncle / aunt", "дядя / тётя"], ["cousin", "двоюродный брат / сестра"],
            ["nephew / niece", "племянник / племянница"], ["boyfriend / girlfriend", "парень / девушка (в отношениях)"], ["relatives", "родственники"],
          ],
        },
        {
          t: "text",
          h: "Как описать внешность",
          md: `Два главных вопроса:
- [[What does she look like?]] — Как она выглядит? (о внешности)
- [[What is she like?]] — Какая она? (о характере)

**Внешность:**
| Тема | Примеры |
|---|---|
| Рост | [[tall]] — высокий, [[short]] — низкий, [[medium height]] — среднего роста |
| Телосложение | [[slim]] — стройный, [[thin]] — худой, [[overweight]] — полный (вежливо) |
| Волосы | [[long/short hair]], [[dark/fair hair]] (тёмные/светлые), [[curly/straight hair]] (кудрявые/прямые) |
| Возраст | [[young]], [[middle-aged]], [[old]] (о людях вежливее elderly) |
| Глаза | [[blue/brown/green eyes]] |

Схемы:
- **be + прилагательное:** [[She is tall and slim.]]
- **have + волосы/глаза:** [[He has short dark hair and blue eyes.]]

> Слово **hair** (волосы) — **неисчисляемое**: [[Her hair is long.]] — «Её волосы длинные» — глагол is, без -s. Ошибка: «her hairs are long» (hairs — это отдельные волоски).

**Порядок прилагательных:** размер/длина → цвет → существительное: [[long dark hair]], [[big blue eyes]].`,
        },
        {
          t: "examples",
          h: "Характер",
          items: [
            ["She's very kind.", "Она очень добрая."],
            ["He's friendly.", "Он дружелюбный."],
            ["My brother is funny.", "Мой брат весёлый (смешной)."],
            ["She's quite shy.", "Она довольно застенчивая."],
            ["He's clever.", "Он умный.", "амер. smart"],
            ["My boss is strict but fair.", "Мой начальник строгий, но справедливый."],
            ["She's hard-working.", "Она трудолюбивая."],
            ["He's a bit lazy.", "Он немного ленивый."],
            ["She's very calm.", "Она очень спокойная."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["«Как он выглядит?»", ["What does he look like?", "What is he like?", "How is he?"], 0, "look like — внешность."],
            ["«Какой у неё характер?»", ["What does she look like?", "What is she like?", "How does she?"], 1, "What is she like? — о характере."],
            ["She ___ long hair.", ["is", "has", "have"], 1, "Волосы — have/has."],
            ["Her hair ___ dark.", ["is", "are"], 0, "hair — неисчисляемое → is."],
            ["Правильный порядок:", ["dark long hair", "long dark hair", "hair long dark"], 1, "Длина → цвет → существительное."],
            ["Брат вашего отца — это ваш…", ["cousin", "uncle", "nephew"], 1, "uncle — дядя."],
            ["Дочь вашей сестры — ваша…", ["niece", "aunt", "cousin"], 0, "niece — племянница."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["У меня есть брат и две сестры.", "I have a brother and two sisters.|I've got a brother and two sisters.", ""],
            ["Моя мама невысокая, у неё короткие светлые волосы.", "My mother is short and she has short fair hair.|My mum is short and she has short fair hair.|My mother is short. She has short fair hair.|My mom is short and she has short blonde hair.|My mother is short and has short fair hair.|My mum is short. She has short blonde hair.|My mother is short and she has short blonde hair.", "be short + have hair."],
            ["Какой он? — Он очень добрый и весёлый.", "What is he like? He is very kind and funny.|What's he like? He's very kind and funny.|What is he like? He's very kind and funny.", "О характере — What is he like?"],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: новый коллега",
          lines: [
            ["Kate", "Have you met the new manager?", "Ты уже познакомился с новым менеджером?"],
            ["Ben", "No, not yet. What does he look like?", "Нет ещё. Как он выглядит?"],
            ["Kate", "He's tall, with short dark hair and glasses. He's about forty.", "Высокий, с короткими тёмными волосами и в очках. Ему около сорока."],
            ["Ben", "And what is he like?", "А какой он?"],
            ["Kate", "He's very friendly and quite funny. He has two kids and a big dog.", "Очень дружелюбный и довольно весёлый. У него двое детей и большая собака."],
            ["Ben", "Great. I hope he isn't strict!", "Отлично. Надеюсь, он не строгий!"],
          ],
          qs: [
            ["Как выглядит менеджер?", ["Низкий, светлые волосы", "Высокий, короткие тёмные волосы, очки", "Среднего роста, кудрявый"], 1, "Tall, short dark hair and glasses."],
            ["Какой у него характер?", ["Строгий", "Дружелюбный и весёлый", "Застенчивый"], 1, "Friendly and quite funny."],
          ],
        },
        {
          t: "speak",
          h: "Опишите члена своей семьи",
          items: [
            ["This is my sister. Her name is Olga.", "Это моя сестра. Её зовут Ольга."],
            ["She's tall and she has long dark hair.", "Она высокая, у неё длинные тёмные волосы."],
            ["She's very kind and funny.", "Она очень добрая и весёлая."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита 7",
          md: `- «У меня есть» — **I have / I've got**; have breakfast, have a shower.
- После глагола: **me, him, her, us, them**.
- Семья: parents, husband/wife, son/daughter, uncle/aunt, cousin, nephew/niece.
- Внешность: [[What does she look like?]] → be tall + have long hair. Характер: [[What is she like?]] → kind, friendly, funny.

**Письмо в четверг:** опишите свою семью — 5–7 предложений.`,
        },
      ],
    },
  ],
};
