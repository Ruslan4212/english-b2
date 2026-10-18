// B2 юнит 2: wish / if only, would rather, it's time.
export default {
  id: "b2_u2",
  level: "B2",
  phase: 4,
  icon: "🌠",
  title: "Wish и if only: жаль, что…",
  about: "Сожаления о настоящем и прошлом, раздражение (wish + would), would rather, it's time.",
  lessons: [
    {
      id: "b2_u2_l1",
      title: "I wish I had…: сожаление о настоящем",
      goal: "Вы научитесь выражать сожаление о том, что есть сейчас, — конструкцией, которая сильно отличается от русской.",
      steps: [
        {
          t: "text",
          h: "Жаль, что… = Я хотел бы, чтобы…",
          md: `Русское «**жаль, что** я не говорю по-французски» или «**хотел бы** я жить у моря» по-английски выражается через **wish** — «желать». Логика как у второго условного: **после wish время сдвигается на шаг назад**, чтобы показать нереальность.

**Сожаление о настоящем: wish + Past Simple**
- [[I wish I spoke French.]] — Жаль, что я не говорю по-французски. (на самом деле не говорю)
- [[I wish I lived by the sea.]] — Хотел бы я жить у моря.
- [[I wish I had more time.]] — Жаль, что у меня мало времени.
- [[I wish I were taller.]] — Хотел бы я быть выше. (were для всех лиц, как в If I were)
- [[I wish I could drive.]] — Жаль, что я не умею водить. (can → could)

> Внимание к **отрицанию**: русское «жаль, что я **не** знаю» → английское wish **без** not: [[I wish I knew.]] И наоборот: «жаль, что я **знаю**» → [[I wish I didn't know.]] Смысл зеркальный!

**If only** — то же, но эмоциональнее («ах, если бы»): [[If only I had more money!]]`,
        },
        {
          t: "text",
          h: "wish + would: раздражение",
          md: `**wish + somebody + would** — когда кто-то (или что-то) **раздражает**, и вы хотите, чтобы он изменил поведение:
- [[I wish you would stop interrupting me.]] — Хоть бы ты перестал меня перебивать.
- [[I wish it would stop raining.]] — Когда уже кончится этот дождь.
- [[I wish my neighbours wouldn't play loud music at night.]]

> С **I** так не говорят: «I wish I would» — ошибка. О себе — [[I wish I could…]]

**Сравните:**
- [[I wish you were here.]] — Жаль, что тебя здесь нет. (состояние)
- [[I wish you would listen.]] — Хоть бы ты слушал! (раздражение поведением)`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Жаль, что я не умею плавать.", ["I wish I can swim.", "I wish I could swim.", "I wish I couldn't swim."], 1, "can → could."],
            ["Жаль, что я не знаю ответа.", ["I wish I knew the answer.", "I wish I didn't know the answer.", "I wish I know the answer."], 0, "Зеркально: без not."],
            ["I wish I ___ a car.", ["have", "had", "would have"], 1, "wish + Past."],
            ["I wish he ___ smoking in the house! (раздражает)", ["stopped", "would stop", "stops"], 1, "Раздражение — would."],
            ["I wish I ___ richer.", ["am", "were", "would be"], 1, "were."],
            ["___ I had more time!", ["If only", "Only if", "If just"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Жаль, что ты не здесь.", "I wish you were here.", ""],
            ["Хотел бы я говорить по-английски свободно.", "I wish I spoke English fluently.|I wish I could speak English fluently.|I wish I spoke fluent English.", ""],
            ["Жаль, что я живу так далеко от работы.", "I wish I didn't live so far from work.|I wish I lived closer to work.|I wish I didn't live so far from my work.|I wish I lived nearer to work.", "Зеркально: didn't live."],
            ["Хоть бы он перестал жаловаться!", "I wish he would stop complaining!|I wish he'd stop complaining!|If only he would stop complaining!", "Раздражение — would."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Сожаление о сейчас: **wish + Past** (I wish I knew), **could** (I wish I could), **were**.
- Зеркальное отрицание: «жаль, что не…» → без not.
- Раздражение: **wish somebody would…**`,
        },
      ],
    },
    {
      id: "b2_u2_l2",
      title: "I wish I had done…: сожаление о прошлом",
      goal: "Вы научитесь выражать сожаление о прошлых решениях и критиковать свои и чужие поступки.",
      steps: [
        {
          t: "text",
          h: "wish + Past Perfect",
          md: `**Сожаление о прошлом: wish / if only + Past Perfect (had + V3)**
- [[I wish I had studied harder at school.]] — Жаль, что я не учился усерднее в школе.
- [[I wish I hadn't said that.]] — Жаль, что я это сказал.
- [[If only we had left earlier!]] — Ах, если бы мы вышли раньше!
- [[She wishes she had taken the job.]] — Она жалеет, что не согласилась на ту работу.

Снова зеркальное отрицание: «жаль, что **сказал**» → [[I wish I hadn't said]].

**Сводная таблица wish:**
| О чём | Форма | Пример |
|---|---|---|
| Настоящее | wish + Past | I wish I **knew**. |
| Умение | wish + could | I wish I **could** drive. |
| Раздражение | wish + would | I wish you **would** listen. |
| Прошлое | wish + Past Perfect | I wish I **had known**. |`,
        },
        {
          t: "text",
          h: "should have — следовало бы",
          md: `Близкий способ выразить сожаление или критику — **should have / shouldn't have + V3** (следовало / не следовало):
- [[I should have called you.]] — Мне следовало тебе позвонить. (= I wish I had called you)
- [[You shouldn't have spent so much money.]] — Тебе не стоило тратить столько денег.
- [[We should have booked a table.]] — Надо было забронировать столик.

**ought to have** — то же, формальнее. Подробнее о модальных в прошлом — в юните 3.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Жаль, что я не пошёл на вечеринку.", ["I wish I went to the party.", "I wish I had gone to the party.", "I wish I would go to the party."], 1, "Прошлое — had + V3."],
            ["Жаль, что я ему это сказал.", ["I wish I had told him.", "I wish I hadn't told him.", "I wish I didn't tell him."], 1, "Зеркально: hadn't told."],
            ["Надо было взять зонт.", ["I should take an umbrella.", "I should have taken an umbrella.", "I should had taken an umbrella."], 1, "should have + V3."],
            ["If only I ___ that email!", ["hadn't sent", "didn't send", "wouldn't send"], 0, ""],
            ["You ___ have told me! I'd have helped.", ["should", "must", "would"], 0, "Упрёк — should have."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Жаль, что я не выучил английский раньше.", "I wish I had learned English earlier.|I wish I'd learned English earlier.|I wish I had learnt English earlier.|I wish I'd learnt English earlier.|I wish I had learned English sooner.", ""],
            ["Мне не следовало есть так много.", "I shouldn't have eaten so much.|I should not have eaten so much.", ""],
            ["Если бы только я тебя послушал!", "If only I had listened to you!|If only I'd listened to you!", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- О прошлом: **wish / if only + had V3** (I wish I hadn't said it).
- **should have / shouldn't have + V3** — надо было / не надо было.`,
        },
      ],
    },
    {
      id: "b2_u2_l3",
      title: "Would rather и it's time: предпочтения и «пора бы»",
      goal: "Вы освоите ещё две конструкции с «нереальным прошедшим» и закрепите тему в разговоре о решениях и сожалениях.",
      steps: [
        {
          t: "text",
          h: "would rather",
          md: `**would rather (I'd rather) + глагол** — я бы предпочёл (о себе):
- [[I'd rather stay at home tonight.]] — Я бы предпочёл остаться дома сегодня.
- [[I'd rather not talk about it.]] — Я бы предпочёл не говорить об этом.
- [[I'd rather walk than take the bus.]] — Я лучше пройдусь, чем поеду на автобусе.

**would rather + кто-то другой + Past** — предпочёл бы, чтобы **кто-то** сделал:
- [[I'd rather you didn't smoke here.]] — Я бы предпочёл, чтобы вы здесь не курили. (вежливая просьба)
- [[I'd rather you came tomorrow.]] — Лучше бы вы пришли завтра.

> [[I'd rather you didn't]] — очень вежливый и очень британский способ сказать «пожалуйста, не надо».`,
        },
        {
          t: "text",
          h: "It's time…",
          md: `- **It's time to + глагол** — пора что-то сделать (нейтрально): [[It's time to go.]] — Пора идти.
- **It's (high/about) time + кто-то + Past** — давно пора (с упрёком):
  - [[It's time you got a job.]] — Тебе давно пора найти работу.
  - [[It's high time we left.]] — Нам давно пора уходить.
  - [[It's about time they fixed this road.]] — Давно пора бы им починить эту дорогу.

>i Во всех этих конструкциях (wish, if only, would rather, it's time) прошедшее время сигналит одно: **это не реальность, а желание**.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["I'd rather ___ at home.", ["stay", "to stay", "staying"], 0, "would rather + без to."],
            ["I'd rather you ___ tell anyone.", ["don't", "didn't", "won't"], 1, "О другом человеке — Past."],
            ["It's high time you ___ your room!", ["clean", "cleaned", "to clean"], 1, "It's time + кто-то + Past."],
            ["It's time ___ home.", ["go", "to go", "went"], 1, "Нейтрально — to."],
            ["I'd rather walk ___ take a taxi.", ["that", "than", "then"], 1, ""],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: оглядываясь назад",
          lines: [
            ["Olga", "Do you ever regret leaving your job in the bank?", "Ты когда-нибудь жалеешь, что ушёл из банка?"],
            ["Ivan", "Sometimes. I wish I had saved more money before I left.", "Иногда. Жаль, что я не накопил больше денег перед уходом."],
            ["Olga", "But you love what you do now.", "Но ты любишь то, чем занимаешься сейчас."],
            ["Ivan", "True. If I had stayed, I'd probably be a manager now, but I'd be bored.", "Правда. Если бы я остался, наверное, был бы сейчас менеджером, но скучал бы."],
            ["Olga", "I wish I were as brave as you. I've been thinking about changing careers for years.", "Хотела бы я быть такой же смелой. Я годами думаю о смене профессии."],
            ["Ivan", "Then it's high time you did something about it!", "Тогда тебе давно пора что-то с этим сделать!"],
            ["Olga", "I know, but I'd rather wait until I've finished my course.", "Знаю, но я бы предпочла подождать, пока не закончу курс."],
          ],
          qs: [
            ["О чём жалеет Иван?", ["Что ушёл из банка", "Что не накопил больше денег", "Что не стал менеджером"], 1, "I wish I had saved more money."],
            ["Что хочет Ольга?", ["Остаться на работе", "Сменить профессию", "Пойти в банк"], 1, "Thinking about changing careers."],
            ["Какая конструкция в «If I had stayed, I'd be a manager now»?", ["Третий тип", "Смешанный условный", "Второй тип"], 1, "Прошлое условие → результат сейчас."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я бы предпочёл не обсуждать это сейчас.", "I'd rather not discuss it now.|I would rather not discuss it now.|I'd rather not discuss this now.|I'd rather not talk about it now.", ""],
            ["Тебе давно пора начать заниматься спортом.", "It's high time you started doing sport.|It's time you started exercising.|It's high time you started exercising.|It's about time you started doing sport.|It's high time you started doing sports.", ""],
            ["Я бы предпочёл, чтобы ты не опаздывал.", "I'd rather you weren't late.|I would rather you weren't late.|I'd rather you didn't come late.|I'd rather you didn't arrive late.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- wish + Past (сейчас) · wish + could · wish + would (раздражение) · wish + had V3 (прошлое).
- should have + V3 — надо было.
- I'd rather + глагол / I'd rather you + Past. It's time to… / It's high time you + Past.

**Говорение:** тема «Решения и сожаления» — используйте wish, should have и смешанные условные.`,
        },
      ],
    },
  ],
};
