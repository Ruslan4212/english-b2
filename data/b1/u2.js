// B1 юнит 2: Present Perfect — just/already/yet, for/since, Present Perfect Continuous.
export default {
  id: "b1_u2",
  level: "B1",
  phase: 3,
  icon: "⏳",
  title: "Present Perfect: just, yet, for, since",
  about: "Только что, уже, ещё не; как долго (for/since); Present Perfect Continuous; рабочие новости.",
  lessons: [
    {
      id: "b1_u2_l1",
      title: "Just, already, yet: только что, уже, ещё не",
      goal: "Вы научитесь сообщать новости и статус задач: что только что сделано, что уже готово, а что ещё нет.",
      steps: [
        {
          t: "text",
          h: "Три слова для новостей и статуса",
          md: `Present Perfect — главное время для **новостей** и **статуса** («на сейчас»). Три слова-помощника:

| Слово | Значение | Где стоит | Пример |
|---|---|---|---|
| **just** | только что | между have и V3 | [[I've just arrived.]] — Я только что приехал. |
| **already** | уже (раньше, чем ожидали) | между have и V3 | [[She's already finished.]] — Она уже закончила. |
| **yet** | ещё не (−) / уже? (?) | **в конце** | [[I haven't finished yet.]] — Я ещё не закончил. [[Have you finished yet?]] — Ты уже закончил? |

> Ловушка: русское «уже» в вопросе — это **yet**, а не already: [[Have you done it yet?]] — Ты уже сделал? А **already** в вопросе выражает удивление: [[Have you already finished? That was quick!]] — Ты что, уже закончил?

**still** — «всё ещё» — с отрицанием, когда это раздражает или удивляет: [[I still haven't received the money.]] — Я всё ещё не получил деньги. (still — перед haven't)`,
        },
        {
          t: "examples",
          h: "Статус задач на работе",
          items: [
            ["I've just sent you the file.", "Я только что отправил тебе файл."],
            ["We've already fixed the bug.", "Мы уже исправили ошибку."],
            ["The client hasn't paid yet.", "Клиент ещё не заплатил."],
            ["Have you spoken to the manager yet?", "Ты уже поговорил с менеджером?"],
            ["I still haven't heard from them.", "Я до сих пор не получил от них ответа."],
            ["The meeting has just started.", "Встреча только что началась."],
            ["Has the parcel arrived yet?", "Посылка уже пришла?"],
          ],
        },
        {
          t: "choice",
          h: "just, already, yet или still?",
          items: [
            ["I haven't decided ___.", ["already", "yet", "just"], 1, "Отрицание в конце — yet."],
            ["She's ___ left. You missed her by a minute.", ["just", "yet", "still"], 0, "Только что — just."],
            ["Have you booked the hotel ___?", ["already", "yet", "still"], 1, "Вопрос «уже?» — yet."],
            ["Don't worry, I've ___ paid the bill.", ["yet", "already", "still"], 1, "Уже (раньше ожидаемого) — already."],
            ["It's 11 pm and he ___ hasn't come home.", ["yet", "already", "still"], 2, "Всё ещё не — still."],
            ["Где ставится yet?", ["Перед глаголом", "В конце предложения", "Между have и V3"], 1, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я только что пришёл домой.", "I've just come home.|I have just come home.|I've just got home.|I've just arrived home.", "just — между have и V3."],
            ["Ты уже позавтракал?", "Have you had breakfast yet?|Have you eaten breakfast yet?", "В вопросе «уже» — yet."],
            ["Мы ещё не получили ответ.", "We haven't received an answer yet.|We haven't got an answer yet.|We haven't received a reply yet.|We have not received an answer yet.|We haven't received the answer yet.", ""],
            ["Я уже это видел.", "I've already seen it.|I have already seen it.|I've already seen this.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **just** — только что, **already** — уже (между have и V3).
- **yet** — в конце: «ещё не» в отрицании, «уже?» в вопросе.
- **still** + отрицание — «всё ещё не».`,
        },
      ],
    },
    {
      id: "b1_u2_l2",
      title: "For и since: как давно",
      goal: "Вы научитесь говорить, как давно что-то длится («я живу здесь пять лет»), — одна из главных ловушек для русскоговорящих.",
      steps: [
        {
          t: "text",
          h: "«Я живу здесь пять лет» — не Present Simple!",
          md: `По-русски мы говорим в **настоящем**: «Я **живу** здесь пять лет», «Я **знаю** его с детства». Дословный перевод — ошибка:
- ❌ «I live here for five years.»
- ✅ [[I've lived here for five years.]]

Для англичанина это действие, которое **началось в прошлом и продолжается до сих пор** — это зона Present Perfect: оно связывает прошлое и настоящее.

**Вопрос:** [[How long have you lived here?]] — Как долго ты здесь живёшь? (не «How long do you live here?» — это прозвучит как «сколько ещё ты будешь здесь жить?»)`,
        },
        {
          t: "text",
          h: "for или since",
          md: `| for — **в течение** (длительность) | since — **с** (точка начала) |
|---|---|
| for five years | since 2019 |
| for two hours | since Monday |
| for a long time | since I was a child |
| for ages (целую вечность) | since last summer |

- [[I've worked here for three years.]] — Я работаю здесь три года.
- [[I've worked here since 2022.]] — Я работаю здесь с 2022 года.
- [[We've known each other since school.]] — Мы знаем друг друга со школы.
- [[I haven't seen him for ages.]] — Я не видел его целую вечность.

> **since + целое предложение** — в Past Simple: [[I've lived here since I was born.]] [[She's changed a lot since she moved to London.]]

**Сравните с Past Simple:** если период **закончился** — Past Simple:
- [[I lived in Kazan for ten years.]] — Я жил в Казани 10 лет (теперь не живу).
- [[I've lived in Kazan for ten years.]] — Я живу в Казани 10 лет (и сейчас живу).`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["I've known her ___ ten years.", ["for", "since"], 0, "Длительность — for."],
            ["She's been ill ___ Friday.", ["for", "since"], 1, "Точка начала — since."],
            ["How long ___ you had this car?", ["do", "have", "did"], 1, "Как долго (до сих пор) — have."],
            ["Я работаю здесь с 2020 года:", ["I work here since 2020.", "I've worked here since 2020."], 1, "Продолжается — Perfect."],
            ["He lived in Paris ___ five years, then moved to Rome.", ["for", "since"], 0, "Длительность закончившегося периода — Past Simple + for."],
            ["We haven't met ___ we left school.", ["for", "since"], 1, "since + предложение."],
          ],
        },
        {
          t: "fill",
          h: "for или since",
          items: [
            ["I've had this phone ___ two years.", "for", ""],
            ["They've been married ___ 2015.", "since", ""],
            ["I haven't eaten ___ this morning.", "since", ""],
            ["She's worked here ___ a long time.", "for", ""],
            ["I've wanted to visit Japan ___ I was a teenager.", "since", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я живу в Москве десять лет.", "I've lived in Moscow for ten years.|I have lived in Moscow for ten years.|I've been living in Moscow for ten years.|I have been living in Moscow for ten years.", "Продолжается — Present Perfect + for."],
            ["Как давно ты его знаешь?", "How long have you known him?", "know — Perfect, не Continuous."],
            ["Мы не виделись с лета.", "We haven't seen each other since the summer.|We haven't seen each other since summer.|We haven't met since the summer.|We haven't met since summer.", ""],
            ["Я работаю в этой компании с 2021 года.", "I've worked for this company since 2021.|I've worked at this company since 2021.|I have worked for this company since 2021.|I've been working for this company since 2021.|I've been working at this company since 2021.|I have worked at this company since 2021.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- «Я живу здесь 5 лет» = [[I've lived here for five years.]] — не Present Simple!
- **for** + длительность, **since** + точка начала / предложение в Past Simple.
- [[How long have you…?]] Период закончился — Past Simple.`,
        },
      ],
    },
    {
      id: "b1_u2_l3",
      title: "Present Perfect Continuous: I've been waiting",
      goal: "Вы научитесь подчёркивать длительность действия, которое продолжается до сих пор или только что закончилось.",
      steps: [
        {
          t: "text",
          h: "Как строится и когда нужен",
          md: `**have/has been + глагол-ing**

- [[I've been waiting for an hour!]] — Я жду уже час!
- [[She's been working here since May.]] — Она работает здесь с мая.
- [[It's been raining all day.]] — Весь день идёт дождь.
- [[How long have you been learning English?]] — Как долго ты учишь английский?

**Когда:**
1. **Длительное действие до сих пор** — с акцентом на процесс, «как долго»: [[I've been learning English for a year.]]
2. **Только что закончилось, и видны следы:** [[Why are you so tired? — I've been running.]] — Почему ты такой уставший? — Я бегал. [[Your eyes are red. Have you been crying?]]`,
        },
        {
          t: "text",
          h: "Perfect или Perfect Continuous?",
          md: `| Present Perfect | Present Perfect Continuous |
|---|---|
| Результат, сколько сделано | Процесс, как долго |
| [[I've written three emails.]] (результат: 3 письма) | [[I've been writing emails all morning.]] (процесс всё утро) |
| [[She's read the book.]] (прочитала, закончила) | [[She's been reading the book.]] (читает, не обязательно закончила) |
| **how many / how much** | **how long** |

**Глаголы состояния** (know, like, have = иметь, be, understand) — в Continuous не бывают, только Perfect: [[I've known him for years.]] (не «I've been knowing»).

>i С **live** и **work** обе формы почти одинаковы: [[I've lived / I've been living here for five years.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["I ___ for you for 30 minutes!", ["have waited", "have been waiting", "am waiting"], 1, "Процесс до сих пор — Continuous."],
            ["She ___ three reports today.", ["has written", "has been writing"], 0, "Сколько сделано — Perfect."],
            ["You're wet! ___ in the rain?", ["Have you walked", "Have you been walking"], 1, "Следы действия — Continuous."],
            ["I ___ him since childhood.", ["have known", "have been knowing"], 0, "know — глагол состояния."],
            ["How long ___ you been learning English?", ["have", "are", "did"], 0, ""],
            ["We ___ this problem all week and still haven't solved it.", ["have discussed", "have been discussing"], 1, "Процесс без результата."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: статус проекта",
          lines: [
            ["Manager", "How's the website project going?", "Как идёт проект сайта?"],
            ["Dev", "We've been working on the design all week. We've finished the main page.", "Всю неделю работаем над дизайном. Главную страницу закончили."],
            ["Manager", "Have you sent it to the client yet?", "Уже отправили клиенту?"],
            ["Dev", "Yes, I've just sent it. But they haven't replied yet.", "Да, только что отправил. Но они ещё не ответили."],
            ["Manager", "And the payment system?", "А платёжная система?"],
            ["Dev", "We've been testing it since Monday. There have been a few problems, but we've already fixed most of them.", "Тестируем с понедельника. Было несколько проблем, но большинство уже исправили."],
          ],
          qs: [
            ["Что готово?", ["Весь сайт", "Главная страница", "Платёжная система"], 1, "We've finished the main page."],
            ["Ответил ли клиент?", ["Да", "Нет, ещё нет", "Не отправляли"], 1, "They haven't replied yet."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я учу английский два года.", "I've been learning English for two years.|I have been learning English for two years.|I've been studying English for two years.|I've learned English for two years.", "Процесс — Perfect Continuous."],
            ["Весь день идёт снег.", "It's been snowing all day.|It has been snowing all day.", ""],
            ["Мы ждём вас уже час.", "We've been waiting for you for an hour.|We have been waiting for you for an hour.|We've been waiting for an hour.", ""],
            ["Сколько писем ты сегодня написал?", "How many emails have you written today?|How many letters have you written today?", "Сколько — Perfect."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- **just / already / yet / still** — новости и статус.
- **for / since** — «как давно»; не Present Simple!
- **have been + -ing** — процесс до сих пор, следы действия; how long. **Perfect** — результат; how many.

**Письмо:** «Рабочее письмо: статус задачи» — используйте все формы Present Perfect.`,
        },
      ],
    },
  ],
};
