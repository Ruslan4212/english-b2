// A2 юнит 7: модальные глаголы — must/have to, should, might/may, can/could; здоровье.
export default {
  id: "a2_u7",
  level: "A2",
  phase: 2,
  icon: "🚦",
  title: "Модальные глаголы: надо, нельзя, стоит, может быть",
  about: "must / have to / don't have to / mustn't, should для советов, may/might для вероятности; у врача.",
  lessons: [
    {
      id: "a2_u7_l1",
      title: "Must, have to, don't have to, mustn't",
      goal: "Вы научитесь говорить «надо», «обязан», «не обязательно» и «нельзя» — и не перепутаете don't have to с mustn't.",
      steps: [
        {
          t: "text",
          h: "Что такое модальные глаголы",
          md: `**Модальные глаголы** выражают не действие, а **отношение** к нему: можно, нужно, следует, возможно. Вы уже знаете один — **can**. У них общие правила:

1. **Не меняются по лицам** — без -s: he must, she should (не «musts»).
2. После них — **глагол без to**: [[You must go.]] (не «must to go»).
3. Отрицание и вопрос — **без do**: [[You mustn't smoke.]], [[Should I call him?]]

Исключение — **have to**: он ведёт себя как обычный глагол (с do/does, с -s: she has to).`,
        },
        {
          t: "text",
          h: "Надо: must и have to",
          md: `Оба означают «должен, надо», но с оттенком:

- **must** — **я сам считаю**, что надо (внутреннее убеждение), а также правила и инструкции на письме:
  - [[I must call my mum. It's her birthday.]] — Я должен позвонить маме (сам так считаю).
  - [[Passengers must wear seat belts.]] — Пассажиры обязаны пристёгиваться (правило).
- **have to** — **обстоятельства заставляют**, внешняя необходимость:
  - [[I have to get up at six because my train is at seven.]] — Мне приходится вставать в шесть.
  - [[She has to wear a uniform at work.]] — Ей приходится носить форму на работе.

>i В разговоре **have to** звучит естественнее и используется намного чаще. Если сомневаетесь — говорите have to.

**У must нет прошедшего времени.** «Надо было» — всегда **had to**: [[I had to work late yesterday.]] — Вчера мне пришлось работать допоздна. Будущее: [[I'll have to…]]

Вопрос с have to: [[Do I have to pay?]] — Мне нужно платить? [[What time do you have to be at work?]]`,
        },
        {
          t: "text",
          h: "Главная ловушка: mustn't ≠ don't have to",
          md: `В утверждении must и have to похожи. А вот в **отрицании** они значат **совсем разное**:

| | Значение | Пример |
|---|---|---|
| **mustn't** («мАснт») | **нельзя**, запрещено | [[You mustn't smoke here.]] — Здесь нельзя курить. |
| **don't have to** | **не обязательно**, не нужно (можно, если хотите) | [[You don't have to come.]] — Тебе не обязательно приходить. |

Сравните:
- [[You mustn't tell anyone.]] — Никому нельзя рассказывать! (это секрет)
- [[You don't have to tell anyone.]] — Можешь никому не рассказывать (необязательно).

> Перепутать опасно: «You mustn't pay» (вам запрещено платить!) вместо «You don't have to pay» (платить не нужно, бесплатно).

**Ещё:** **need to** — «нужно» (= have to), **don't need to / needn't** — «не нужно» (= don't have to): [[You don't need to bring anything.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["She ___ to work on Saturdays.", ["must", "has", "have"], 1, "She has to."],
            ["You ___ smoke in the hospital. (запрещено)", ["mustn't", "don't have to"], 0, "Запрет — mustn't."],
            ["It's free. You ___ pay.", ["mustn't", "don't have to"], 1, "Не нужно — don't have to."],
            ["I ___ work late yesterday.", ["must", "had to", "musted"], 1, "Прошлое — had to."],
            ["___ I have to show my passport?", ["Do", "Must", "Have"], 0, "Do I have to…?"],
            ["He must ___ the report today.", ["finish", "to finish", "finishes"], 0, "После must — без to."],
            ["Tomorrow is Sunday, so I ___ get up early.", ["mustn't", "don't have to"], 1, "Не обязательно."],
          ],
        },
        {
          t: "fill",
          h: "must, mustn't, have to, has to, don't have to, had to",
          items: [
            ["Children ___ play with matches. It's dangerous.", "mustn't|must not", "Запрет."],
            ["My dad ___ wear a suit at work.", "has to|must", ""],
            ["We ___ hurry. We have a lot of time.", "don't have to|do not have to|don't need to|needn't", "Не обязательно."],
            ["Last year I ___ move to another city for work.", "had to", "Прошлое."],
            ["You ___ see this film! It's amazing!", "must|have to", "Сильный совет — must."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мне нужно позвонить клиенту.", "I have to call the client.|I need to call the client.|I must call the client.|I have to call a client.|I need to call a client.", ""],
            ["Здесь нельзя парковаться.", "You mustn't park here.|You can't park here.|You must not park here.|You cannot park here.|Parking is not allowed here.", ""],
            ["Тебе не обязательно приходить.", "You don't have to come.|You don't need to come.|You needn't come.", ""],
            ["Вчера мне пришлось ждать два часа.", "Yesterday I had to wait for two hours.|I had to wait for two hours yesterday.|I had to wait two hours yesterday.|Yesterday I had to wait two hours.", "had to."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- must — сам считаю нужным / правила; have to — обстоятельства (в речи чаще).
- Прошлое — **had to**.
- **mustn't = нельзя**; **don't have to = не обязательно**.`,
        },
      ],
    },
    {
      id: "a2_u7_l2",
      title: "Should, might, may: советы и вероятность",
      goal: "Вы научитесь давать и просить совета и говорить о том, что может случиться.",
      steps: [
        {
          t: "text",
          h: "Should — стоит, следует (совет)",
          md: `**should + глагол** — мягкий совет, рекомендация, «стоит, следует, лучше бы»:
- [[You should see a doctor.]] — Тебе стоит сходить к врачу.
- [[You shouldn't eat so much sugar.]] — Тебе не стоит есть столько сахара.
- [[What should I do?]] — Что мне делать? (просьба о совете)
- [[Should I call him?]] — Мне ему позвонить?

**Сила рекомендации:**
| Слабо | Средне | Сильно |
|---|---|---|
| [[Maybe you could…]] | [[You should…]] | [[You must… / You have to…]] |

**Другие способы дать совет:**
- [[If I were you, I'd…]] — На твоём месте я бы… (подробнее в B1)
- [[Why don't you…?]] — Почему бы тебе не…? [[Why don't you take a break?]]
- [[You'd better…]] — Тебе лучше бы… (с оттенком предупреждения): [[You'd better hurry, or you'll miss the bus.]]`,
        },
        {
          t: "text",
          h: "May и might — может быть",
          md: `**may / might + глагол** — **возможно**, может быть (не уверен):
- [[It might rain later.]] — Позже, возможно, пойдёт дождь.
- [[I may be late.]] — Я, может быть, опоздаю.
- [[She might not come.]] — Она, может, не придёт.

Разница между may и might минимальна; **might** чуть менее уверенно и чаще в разговоре.

**Шкала уверенности:**
| 100% | ~90% | ~50% | 0% |
|---|---|---|---|
| [[It will rain.]] | [[It'll probably rain.]] | [[It might rain.]] / [[Maybe it will rain.]] | [[It won't rain.]] |

**May** ещё — вежливое разрешение: [[May I come in?]] — Можно войти? (формальнее, чем Can I…?)

> Не путайте **maybe** (одно слово, наречие «может быть», в начале предложения) и **may be** (два слова, глагол): [[Maybe he is at home.]] = [[He may be at home.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["You look tired. You ___ go to bed early.", ["should", "might", "mustn't"], 0, "Совет — should."],
            ["Take an umbrella. It ___ rain.", ["should", "might", "must"], 1, "Возможно — might."],
            ["You ___ drink so much coffee. (совет не делать)", ["shouldn't", "mightn't", "don't have"], 0, "Совет не делать — shouldn't."],
            ["___ I wear a suit to the interview?", ["Should", "Might", "Do"], 0, "Просьба о совете — Should I…?"],
            ["___ don't you ask your boss?", ["What", "Why", "How"], 1, "Why don't you…? — совет."],
            ["She ___ come to the party. She's not sure.", ["might", "must", "should"], 0, "Неуверенность — might."],
            ["___ he is at work.", ["May be", "Maybe"], 1, "Наречие в начале — Maybe."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Тебе стоит больше отдыхать.", "You should rest more.|You should relax more.|You should get more rest.", ""],
            ["Что мне делать?", "What should I do?", ""],
            ["Может быть, я опоздаю.", "I might be late.|I may be late.|Maybe I'll be late.|Maybe I will be late.", ""],
            ["Почему бы тебе не позвонить ей?", "Why don't you call her?|Why don't you phone her?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **should / shouldn't** — совет; [[What should I do?]] [[Why don't you…?]] [[You'd better…]]
- **may / might** — возможно; [[May I…?]] — вежливое разрешение.
- maybe (наречие) ≠ may be (глагол).`,
        },
      ],
    },
    {
      id: "a2_u7_l3",
      title: "Здоровье и у врача",
      goal: "Вы сможете описать врачу симптомы, понять рекомендации и дать совет заболевшему другу.",
      steps: [
        {
          t: "examples",
          h: "Симптомы",
          items: [
            ["I have a headache.", "У меня болит голова."],
            ["I have a stomachache.", "У меня болит живот.", "ache — «эйк», боль"],
            ["I have a sore throat.", "У меня болит горло."],
            ["I have a cough.", "У меня кашель."],
            ["I have a temperature.", "У меня температура.", "амер. a fever"],
            ["I have a runny nose.", "У меня насморк."],
            ["My back hurts.", "У меня болит спина."],
            ["I feel sick.", "Меня тошнит / мне плохо."],
            ["I feel dizzy.", "У меня кружится голова."],
            ["I've cut my finger.", "Я порезал палец."],
          ],
        },
        {
          t: "text",
          h: "Как сказать «болит»",
          md: `Три способа:
1. **have + a + болезнь/-ache**: [[I have a headache / a cold / the flu.]] (простуда — a cold, грипп — the flu)
2. **часть тела + hurts**: [[My knee hurts.]] [[My eyes hurt.]] (много — без -s)
3. **I have a pain in my…**: [[I have a pain in my chest.]] — У меня боль в груди.

**Как вы себя чувствуете:**
- [[I don't feel well.]] — Я плохо себя чувствую.
- [[I feel terrible / awful.]] — Ужасно себя чувствую.
- [[I feel better now.]] — Мне уже лучше.

**Пожелание выздоровления:** [[Get well soon!]] / [[I hope you feel better soon.]]`,
        },
        {
          t: "examples",
          h: "Что говорит врач",
          items: [
            ["What seems to be the problem?", "Что вас беспокоит?"],
            ["How long have you had it?", "Как давно это у вас?"],
            ["Let me have a look.", "Давайте посмотрю."],
            ["You should stay in bed for a few days.", "Вам стоит полежать несколько дней."],
            ["Take this medicine three times a day.", "Принимайте лекарство три раза в день."],
            ["Drink a lot of water.", "Пейте много воды."],
            ["You shouldn't go to work.", "Вам не стоит идти на работу."],
            ["Come back if you don't feel better.", "Приходите снова, если не станет лучше."],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: у врача",
          lines: [
            ["Doctor", "Good morning. What seems to be the problem?", "Доброе утро. Что вас беспокоит?"],
            ["Patient", "I have a terrible sore throat and a cough.", "У меня ужасно болит горло и кашель."],
            ["Doctor", "How long have you had it?", "Как давно?"],
            ["Patient", "About three days. And yesterday I had a temperature.", "Около трёх дней. А вчера была температура."],
            ["Doctor", "Let me have a look… It's a throat infection. You should take these tablets twice a day.", "Давайте посмотрю… Это инфекция горла. Принимайте эти таблетки два раза в день."],
            ["Patient", "Do I have to stay at home?", "Мне нужно оставаться дома?"],
            ["Doctor", "Yes, you shouldn't go to work for a few days. And you might feel tired, so rest a lot.", "Да, несколько дней вам не стоит ходить на работу. И вы можете чувствовать усталость, так что много отдыхайте."],
            ["Patient", "Thank you, doctor.", "Спасибо, доктор."],
          ],
          qs: [
            ["Какие симптомы у пациента?", ["Головная боль", "Боль в горле и кашель", "Боль в спине"], 1, ""],
            ["Как часто принимать таблетки?", ["Раз в день", "Два раза в день", "Три раза в день"], 1, "Twice a day."],
            ["Можно ли идти на работу?", ["Да", "Нет, несколько дней не стоит", "Только утром"], 1, "You shouldn't go to work for a few days."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["У меня болит голова.", "I have a headache.|I've got a headache.", ""],
            ["Я плохо себя чувствую.", "I don't feel well.|I do not feel well.|I'm not feeling well.|I feel bad.", ""],
            ["Тебе стоит сходить к врачу.", "You should see a doctor.|You should go to the doctor.|You should go to a doctor.|You should visit a doctor.", ""],
            ["Выздоравливай!", "Get well soon!", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Симптомы: have a headache / a sore throat / a cold; my back hurts; I feel sick.
- Врач: What seems to be the problem? You should… Take… twice a day.
- Модальные: must/have to — надо; mustn't — нельзя; don't have to — не обязательно; should — стоит; might — возможно.

**Говорение:** ролевая игра «У врача».`,
        },
      ],
    },
  ],
};
