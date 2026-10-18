// A2 юнит 6: исчисляемые и неисчисляемые, much/many/a lot of/a few/a little, покупки.
export default {
  id: "a2_u6",
  level: "A2",
  phase: 2,
  icon: "🛒",
  title: "Исчисляемые и неисчисляемые, сколько?",
  about: "Что можно посчитать, а что нет; some/any; much, many, a lot of, a few, a little; упаковки и покупки.",
  lessons: [
    {
      id: "a2_u6_l1",
      title: "Можно ли посчитать? Исчисляемые и неисчисляемые",
      goal: "Вы поймёте, какие существительные англичане считают, а какие нет, и как это влияет на артикли и глаголы.",
      steps: [
        {
          t: "text",
          h: "Два типа существительных",
          md: `**Исчисляемые** (countable) — то, что можно посчитать поштучно: одно яблоко, два яблока.
- Есть единственное и множественное число: [[an apple]] — [[apples]], [[a chair]] — [[chairs]].
- В единственном числе нужен a/an.

**Неисчисляемые** (uncountable) — вещества, массы, абстрактные понятия — их нельзя посчитать поштучно:
- **Нет множественного числа** и **нельзя a/an**: не «a water», не «waters».
- Глагол — как с единственным числом: [[Water is important.]], [[The information is correct.]]

| Неисчисляемые: группы | Примеры |
|---|---|
| Жидкости и вещества | water, milk, coffee, tea, oil, sugar, salt, rice, bread, cheese, meat |
| Материалы | wood, glass, paper, plastic |
| Абстрактное | time, money, love, help, music, work, fun |
| Обобщающие | furniture (мебель), luggage (багаж), equipment |`,
        },
        {
          t: "text",
          h: "Ловушки: у нас считается, у них — нет",
          md: `Некоторые слова в русском **исчисляемые**, а в английском — **нет**. Это источник постоянных ошибок:

| Английский (неисчисл.) | Русский | Правильно | Ошибка |
|---|---|---|---|
| [[information]] | информация, сведения | [[some information]] | «informations», «an information» |
| [[advice]] | совет, советы | [[a piece of advice]], [[some advice]] | «an advice», «advices» |
| [[news]] | новость, новости | [[The news is good.]] | «the news are» |
| [[furniture]] | мебель | [[a lot of furniture]] | «furnitures» |
| [[money]] | деньги | [[Money is…]] | «moneys», «money are» |
| [[homework]] | домашнее задание | [[I have a lot of homework.]] | «homeworks» |
| [[luggage]] / [[baggage]] | багаж | [[two pieces of luggage]] | «luggages» |
| [[hair]] | волосы | [[Her hair is long.]] | «hairs are» |
| [[work]] | работа (как деятельность) | [[I have a lot of work.]] | «a lot of works» |

>i Чтобы посчитать неисчисляемое, используйте «упаковку»: **a piece of** (штука, кусок): [[a piece of advice]] (один совет), [[a piece of information]], [[a piece of cake]]. Подробнее — в уроке 3.

**Хитрость:** **job** (работа, должность) — исчисляемое: [[a job]], [[two jobs]]. **work** — неисчисляемое: [[a lot of work]].`,
        },
        {
          t: "text",
          h: "some / any / no с обоими типами",
          md: `- **some** — в утверждениях: [[some apples]], [[some water]]
- **any** — в отрицаниях и вопросах: [[I don't have any money.]] [[Are there any eggs?]]
- **no** = not any: [[There's no milk.]] = [[There isn't any milk.]]

**Исключение:** в **предложениях и просьбах** используют some, даже в вопросе — потому что ждём ответа «да»: [[Would you like some tea?]] [[Can I have some water?]]`,
        },
        {
          t: "choice",
          h: "Исчисляемое или нет? Выберите правильно",
          items: [
            ["Can you give me ___ advice?", ["an", "some", "a"], 1, "advice — неисчисляемое."],
            ["The news ___ good.", ["is", "are"], 0, "news — неисчисляемое, как единственное."],
            ["I need ___ information about the hotel.", ["some", "an", "informations"], 0, ""],
            ["We bought new ___.", ["furnitures", "furniture"], 1, "furniture — без -s."],
            ["She has ___ new job.", ["a", "some", "—"], 0, "job — исчисляемое."],
            ["I have a lot of ___ today.", ["work", "works", "a work"], 0, "work — неисчисляемое."],
            ["Would you like ___ coffee?", ["any", "some", "a"], 1, "Предложение — some."],
            ["There ___ any money in my wallet.", ["isn't", "aren't"], 0, "money — как единственное."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Можно дать тебе совет?", "Can I give you some advice?|Can I give you a piece of advice?|Can I give you advice?|Could I give you some advice?|May I give you some advice?", "advice — неисчисляемое."],
            ["Это хорошие новости!", "That's good news!|This is good news!|It's good news!|That is good news!", "Без a и без are."],
            ["У меня много работы.", "I have a lot of work.|I've got a lot of work.|I have lots of work.", ""],
            ["Деньги — это не всё.", "Money isn't everything.|Money is not everything.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Неисчисляемые: без a/an, без -s, глагол как с единственным.
- Ловушки: information, advice, news, furniture, money, homework, luggage, hair, work.
- a piece of advice/information. some — утверждения и предложения, any — отрицания и вопросы.`,
        },
      ],
    },
    {
      id: "a2_u6_l2",
      title: "Much, many, a lot of, a few, a little",
      goal: "Вы научитесь говорить «много», «мало», «немного» и спрашивать «сколько» с любыми существительными.",
      steps: [
        {
          t: "text",
          h: "Много: many, much, a lot of",
          md: `| | Исчисляемые (books, people) | Неисчисляемые (time, money) |
|---|---|---|
| **много** | **many** | **much** |
| **много** (универсально) | **a lot of** / lots of | **a lot of** / lots of |
| **сколько?** | **How many?** | **How much?** |

**В разговоре:**
- В **утверждениях** чаще **a lot of**: [[I have a lot of friends.]], [[She drinks a lot of coffee.]]
- В **отрицаниях и вопросах** — **many/much**: [[I don't have much time.]], [[Are there many people?]]

> «I have much money» звучит книжно и неестественно. В утверждении говорите [[I have a lot of money.]] А вот [[I don't have much money.]] — абсолютно нормально.

**How much** — также «сколько стоит»: [[How much is it?]] [[How much does it cost?]]`,
        },
        {
          t: "text",
          h: "Мало и немного: few/little",
          md: `| | Исчисляемые | Неисчисляемые |
|---|---|---|
| **немного, несколько** (хватает, позитивно) | **a few** | **a little** |
| **мало** (не хватает, негативно) | **few** | **little** |

Разница в одном артикле **a** меняет настроение:
- [[I have a few friends here.]] — У меня здесь есть несколько друзей. (неплохо!)
- [[I have few friends here.]] — У меня здесь мало друзей. (грустно)
- [[There's a little milk left.]] — Осталось немного молока. (хватит на кофе)
- [[There's little time.]] — Времени мало. (надо спешить)

>i В разговоре вместо few/little чаще говорят **not many / not much**: [[I don't have many friends here.]] — естественнее, чем «I have few friends».`,
        },
        {
          t: "examples",
          h: "Примеры",
          items: [
            ["How many people work in your company?", "Сколько человек работает в вашей компании?"],
            ["How much time do we have?", "Сколько у нас времени?"],
            ["There were a lot of people at the concert.", "На концерте было много людей."],
            ["I don't have much money this month.", "В этом месяце у меня немного денег."],
            ["Can I ask you a few questions?", "Можно задать вам несколько вопросов?"],
            ["I speak a little English.", "Я немного говорю по-английски."],
            ["Hurry up! We have very little time.", "Поторопись! У нас очень мало времени."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["How ___ apples do you need?", ["much", "many"], 1, "Apples — исчисляемые."],
            ["How ___ sugar do you take?", ["much", "many"], 0, "Sugar — неисчисляемое."],
            ["I don't have ___ time.", ["many", "much"], 1, "Time — неисчисляемое."],
            ["She has ___ friends. (много, утверждение)", ["much", "a lot of"], 1, "В утверждении естественно — a lot of."],
            ["Can I have ___ milk in my tea?", ["a few", "a little"], 1, "Milk — неисчисляемое → a little."],
            ["I've got ___ ideas. (несколько)", ["a few", "a little"], 0, "Ideas — исчисляемые → a few."],
            ["Only ___ people came. It was sad.", ["a few", "few"], 1, "Мало, негативно — few."],
          ],
        },
        {
          t: "fill",
          h: "much, many, a few или a little",
          items: [
            ["How ___ does it cost?", "much", ""],
            ["How ___ children do you have?", "many", ""],
            ["There isn't ___ food in the fridge.", "much", ""],
            ["I need ___ minutes to get ready.", "a few", "Minutes — исчисляемые."],
            ["Add ___ salt.", "a little", "Salt — неисчисляемое."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Сколько стоит этот билет?", "How much is this ticket?|How much does this ticket cost?", ""],
            ["Сколько у тебя братьев?", "How many brothers do you have?|How many brothers have you got?", ""],
            ["У меня мало времени.", "I don't have much time.|I have little time.|I haven't got much time.|I have very little time.", "Естественнее: I don't have much time."],
            ["Я немного говорю по-английски.", "I speak a little English.|I can speak a little English.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- many / How many — исчисляемые; much / How much — неисчисляемые; a lot of — всё.
- В утверждении — a lot of; в отрицании/вопросе — much/many.
- a few / a little — немного (хорошо); few / little — мало (плохо).`,
        },
      ],
    },
    {
      id: "a2_u6_l3",
      title: "В магазине: упаковки, количество, покупки",
      goal: "Вы сможете покупать продукты и вещи, называть количество и упаковку и решать проблемы с покупкой.",
      steps: [
        {
          t: "examples",
          h: "Упаковки и количество",
          items: [
            ["a bottle of water", "бутылка воды"], ["a carton of milk", "пакет молока"], ["a loaf of bread", "буханка хлеба"], ["a packet of biscuits", "пачка печенья"],
            ["a can of cola", "банка колы"], ["a jar of honey", "банка мёда (стеклянная)"], ["a bar of chocolate", "плитка шоколада"], ["a piece of cake", "кусок торта"],
            ["a kilo of apples", "килограмм яблок"], ["a dozen eggs", "дюжина яиц"], ["a cup of tea", "чашка чая"], ["a glass of juice", "стакан сока"],
          ],
        },
        {
          t: "text",
          h: "Как считать неисчисляемое",
          md: `Неисчисляемое нельзя посчитать напрямую, но можно посчитать **упаковки**:
- не «two waters», а [[two bottles of water]]
- не «three breads», а [[three loaves of bread]] (loaf → loaves)
- не «an advice», а [[a piece of advice]]

>i В кафе разговорно говорят [[two coffees, please]] — подразумевая «две чашки кофе». Это нормально для заказа напитков.`,
        },
        {
          t: "examples",
          h: "Фразы покупателя и продавца",
          items: [
            ["Can I help you?", "Вам помочь?"],
            ["I'm looking for a winter jacket.", "Я ищу зимнюю куртку."],
            ["Do you have this in a smaller size?", "Есть размер поменьше?"],
            ["What size are you?", "Какой у вас размер?"],
            ["Can I try it on?", "Можно примерить?"],
            ["It doesn't fit me.", "Мне не подходит по размеру."],
            ["It suits you.", "Вам идёт."],
            ["How much is it?", "Сколько стоит?"],
            ["It's on sale — 30% off.", "Со скидкой 30%."],
            ["I'll take it.", "Беру."],
            ["I'd like to return this. Here's the receipt.", "Хочу это вернуть. Вот чек."],
          ],
        },
        {
          t: "text",
          h: "fit или suit?",
          md: `- **fit** — подходит **по размеру**: [[These jeans don't fit me. They're too small.]]
- **suit** — **идёт**, к лицу, по стилю: [[That colour really suits you.]]
- **match** / **go with** — сочетается с чем-то: [[This bag goes with your shoes.]]`,
        },
        {
          t: "dialog",
          h: "Диалог: в магазине одежды",
          lines: [
            ["Assistant", "Hello! Can I help you?", "Здравствуйте! Вам помочь?"],
            ["Maria", "Yes, I'm looking for a dress for a wedding.", "Да, ищу платье на свадьбу."],
            ["Assistant", "What size are you?", "Какой у вас размер?"],
            ["Maria", "Medium, I think. Can I try this blue one on?", "Думаю, M. Можно примерить вот это синее?"],
            ["Assistant", "Of course. The changing rooms are over there.", "Конечно. Примерочные вон там."],
            ["Maria", "It's a bit too tight. Do you have it in a large?", "Немного тесновато. Есть L?"],
            ["Assistant", "Here you are. Oh, that colour really suits you!", "Вот, пожалуйста. О, этот цвет вам очень идёт!"],
            ["Maria", "Thanks! How much is it?", "Спасибо! Сколько стоит?"],
            ["Assistant", "It's eighty pounds, but there's twenty percent off this week.", "Восемьдесят фунтов, но на этой неделе скидка двадцать процентов."],
            ["Maria", "Great, I'll take it.", "Отлично, беру."],
          ],
          qs: [
            ["Зачем Марии платье?", ["На работу", "На свадьбу", "На день рождения"], 1, "For a wedding."],
            ["Что было не так с первым платьем?", ["Цвет", "Тесное", "Дорогое"], 1, "A bit too tight."],
            ["Сколько она заплатит со скидкой?", ["£80", "£64", "£60"], 1, "80 минус 20% = 64."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Две бутылки воды, пожалуйста.", "Two bottles of water, please.", ""],
            ["Можно это примерить?", "Can I try it on?|Can I try this on?|Could I try it on?|Could I try this on?", ""],
            ["Эти туфли мне не подходят по размеру.", "These shoes don't fit me.|These shoes do not fit me.", "По размеру — fit."],
            ["Этот цвет тебе идёт.", "This colour suits you.|This color suits you.|That colour suits you.|That color suits you.", "К лицу — suit."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Упаковки: a bottle of, a carton of, a loaf of, a piece of, a kilo of.
- В магазине: I'm looking for… · What size? · Can I try it on? · I'll take it. · I'd like to return this.
- fit — размер, suit — идёт.

**Говорение:** ролевая игра «Покупки».`,
        },
      ],
    },
  ],
};
