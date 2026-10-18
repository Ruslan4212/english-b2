// Юнит 6: can / can't, предлоги времени in/on/at, кафе и вежливые просьбы.
export default {
  id: "a1_u6",
  level: "A1",
  phase: 1,
  icon: "☕",
  title: "Can, предлоги времени, в кафе",
  about: "Умею/могу — can; просьбы; in/on/at со временем; заказ еды и вежливые фразы.",
  lessons: [
    {
      id: "a1_u6_l1",
      title: "Can: умею, могу, можно",
      goal: "Вы научитесь говорить, что умеете и чего не умеете, просить разрешения и вежливо просить о помощи.",
      steps: [
        {
          t: "text",
          h: "Can — один глагол на три русских смысла",
          md: `**Can** переводится по-разному в зависимости от ситуации:

1. **Умею** (способность): [[I can swim.]] — Я умею плавать.
2. **Могу** (возможность): [[I can meet you at five.]] — Я могу встретиться с тобой в пять.
3. **Можно** (разрешение) и **просьба**: [[Can I open the window?]] — Можно открыть окно? [[Can you help me?]] — Можешь мне помочь?

**Правила can — проще, чем у обычных глаголов:**
- **Не меняется по лицам**: I can, **he can**, she can — никакого «cans»!
- После can — **глагол без to**: [[She can drive.]] (не «can to drive», не «can drives»).
- Отрицание — **cannot / can't**: [[I can't swim.]]
- Вопрос — can выходит вперёд, **без do**: [[Can you swim?]] (не «Do you can swim?»).
- Краткие ответы: [[Yes, I can. / No, I can't.]]

> Произношение: в утверждении can звучит слабо, «кэн/кн»: «I kn swim». А **can't** — чётко и долго: британское «каант», американское «кэнт». Именно по долготе гласного носители отличают can от can't.`,
        },
        {
          t: "examples",
          h: "Что я умею",
          items: [
            ["I can speak a little English.", "Я немного говорю по-английски."],
            ["She can play the piano.", "Она умеет играть на пианино.", "музыкальные инструменты — с the"],
            ["He can't drive.", "Он не умеет водить."],
            ["Can you cook?", "Ты умеешь готовить?"],
            ["Can I pay by card?", "Можно оплатить картой?"],
            ["Can you help me, please?", "Можете мне помочь?"],
            ["I can't come tomorrow.", "Я не могу прийти завтра."],
            ["You can't park here.", "Здесь нельзя парковаться."],
          ],
        },
        {
          t: "text",
          h: "Could — ещё вежливее",
          md: `Для **очень вежливой просьбы** вместо can используют **could**. Это звучит мягче, как «не могли бы вы»:

- [[Can you help me?]] — Можешь помочь? (нормально, нейтрально)
- [[Could you help me, please?]] — Не могли бы вы мне помочь? (вежливо — с незнакомыми, на работе)
- [[Could I ask a question?]] — Могу я задать вопрос?

>i В рабочих письмах и с незнакомыми людьми лучше использовать **could**. Звучит профессионально и уважительно. Ответ на просьбу: [[Sure!]] / [[Of course.]] / [[No problem.]] Или вежливый отказ: [[Sorry, I can't.]]

Также **could** — это прошедшее время от can: [[When I was five, I could read.]] — Когда мне было пять, я умел читать.`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["She ___ speak French.", ["can", "cans", "can to"], 0, "Can не меняется."],
            ["I can ___ the guitar.", ["play", "to play", "plays"], 0, "После can — глагол без to."],
            ["___ you swim?", ["Do", "Can", "Are"], 1, "Вопрос с can — без do."],
            ["Can he drive? — No, he ___.", ["doesn't", "can't", "isn't"], 1, "Краткий ответ с can."],
            ["Самая вежливая просьба:", ["Help me!", "Can you help me?", "Could you help me, please?"], 2, "Could + please — вежливее всего."],
            ["«Здесь нельзя курить»", ["You don't smoke here.", "You can't smoke here.", "You not can smoke here."], 1, "Запрет — can't."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я умею плавать.", "I can swim.", ""],
            ["Она не умеет готовить.", "She can't cook.|She cannot cook.|She can not cook.", "can't + глагол."],
            ["Можно мне воды?", "Can I have some water?|Can I have water, please?|Could I have some water?|Can I have some water, please?|Could I have some water, please?", "Просьба о чём-то: Can I have…?"],
            ["Не могли бы вы говорить медленнее?", "Could you speak more slowly?|Could you speak more slowly, please?|Could you speak slower, please?|Could you speak slower?", "Could — вежливо."],
            ["Ты можешь прийти завтра?", "Can you come tomorrow?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **can** = умею / могу / можно. Не меняется, после него — глагол без to.
- **can't** — не умею, не могу, нельзя. Вопрос: **Can you…?** — без do.
- **Could you…, please?** — самая вежливая просьба.`,
        },
      ],
    },
    {
      id: "a1_u6_l2",
      title: "Предлоги времени: in, on, at",
      goal: "Вы научитесь правильно говорить «в понедельник», «в июне», «в 5 часов», «утром» и «на выходных».",
      steps: [
        {
          t: "text",
          h: "Пирамида: от большого к маленькому",
          md: `По-русски почти всё — «в»: в понедельник, в мае, в пять часов. В английском **три разных предлога**, и выбор зависит от **размера** отрезка времени:

| Предлог | Для чего | Примеры |
|---|---|---|
| **in** — большие периоды | месяцы, годы, времена года, века, части дня | [[in May]], [[in 2024]], [[in summer]], [[in the morning]], [[in the evening]] |
| **on** — дни | дни недели, даты, конкретные дни | [[on Monday]], [[on 5 May]], [[on my birthday]], [[on Friday evening]] |
| **at** — точки | точное время, праздники-периоды, особые выражения | [[at 7 o'clock]], [[at noon]], [[at night]], [[at the weekend]], [[at Christmas]] |

Представьте пирамиду: внизу широкое **in** (месяцы и годы), выше **on** (дни), на вершине точка — **at** (часы).`,
        },
        {
          t: "text",
          h: "Исключения и ловушки",
          md: `- **in the morning / in the afternoon / in the evening**, но **at night** — ночью.
- **on Monday morning** — если часть дня привязана к конкретному дню, побеждает **on** (день).
- **at the weekend** (брит.) / **on the weekend** (амер.) — на выходных.
- **Без предлога** перед словами **this, next, last, every, today, tomorrow, yesterday**:
  - [[next week]] — на следующей неделе (не «in next week»)
  - [[last year]] — в прошлом году
  - [[every day]] — каждый день
  - [[this morning]] — сегодня утром
  - [[tomorrow evening]] — завтра вечером

> Ошибка: «on next Monday», «in this week», «at tomorrow». Перед next/last/this/every предлог **не нужен**.

**Ещё полезные предлоги времени:**
- **from … to / until** — с … до: [[I work from nine to six.]]
- **for** — в течение (сколько длится): [[for two hours]]
- **ago** — назад, ставится **после**: [[two days ago]] — два дня назад
- **before / after** — до / после: [[before lunch]], [[after work]]`,
        },
        {
          t: "examples",
          h: "Послушайте и повторите",
          items: [
            ["My birthday is in July.", "Мой день рождения в июле."],
            ["I was born in 1995.", "Я родился в 1995."],
            ["See you on Friday.", "Увидимся в пятницу."],
            ["The meeting is at 3 o'clock.", "Встреча в три часа."],
            ["I read in the evening.", "Я читаю вечером."],
            ["I never work at night.", "Я никогда не работаю ночью."],
            ["What do you do at the weekend?", "Что ты делаешь на выходных?"],
            ["I'm on holiday next week.", "На следующей неделе я в отпуске.", "без предлога перед next"],
            ["I work from nine to six.", "Я работаю с девяти до шести."],
          ],
        },
        {
          t: "choice",
          h: "in, on, at или ничего?",
          items: [
            ["___ Monday", ["in", "on", "at"], 1, "День недели — on."],
            ["___ 2020", ["in", "on", "at"], 0, "Год — in."],
            ["___ six o'clock", ["in", "on", "at"], 2, "Точное время — at."],
            ["___ the morning", ["in", "on", "at"], 0, "Часть дня — in the morning."],
            ["___ night", ["in", "on", "at"], 2, "Исключение: at night."],
            ["___ next week", ["in", "on", "— (без предлога)"], 2, "Перед next — без предлога."],
            ["___ my birthday", ["in", "on", "at"], 1, "Конкретный день — on."],
            ["___ winter", ["in", "on", "at"], 0, "Время года — in."],
            ["___ Saturday morning", ["in", "on", "at"], 1, "Часть конкретного дня — on."],
          ],
        },
        {
          t: "fill",
          h: "Вставьте предлог",
          intro: "Если предлог не нужен — поставьте «-».",
          items: [
            ["I get up ___ 7 am.", "at", ""],
            ["We go to the sea ___ August.", "in", ""],
            ["The shop is closed ___ Sundays.", "on", "По воскресеньям — on Sundays."],
            ["I saw him ___ yesterday.", "-|—", "Перед yesterday — без предлога."],
            ["She works ___ the weekend.", "at|on", "Брит. at the weekend, амер. on the weekend."],
            ["I met her three years ___.", "ago", "Назад — ago, после периода."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Увидимся в понедельник в 10 часов.", "See you on Monday at 10 o'clock.|See you on Monday at ten o'clock.|See you on Monday at 10.|See you on Monday at ten.", "on + день, at + время."],
            ["Я в отпуске в июне.", "I'm on holiday in June.|I am on holiday in June.|I'm on vacation in June.", "Месяц — in. «В отпуске» — on holiday."],
            ["На следующей неделе я очень занят.", "I'm very busy next week.|Next week I'm very busy.|I am very busy next week.|Next week I am very busy.", "Без предлога перед next."],
            ["Я работаю с 9 до 5.", "I work from 9 to 5.|I work from nine to five.|I work from 9 till 5.|I work from 9 until 5.", "from … to."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **in** — месяцы, годы, сезоны, части дня (in the morning).
- **on** — дни и даты (on Monday, on 5 May, on Friday evening).
- **at** — время (at 5), at night, at the weekend.
- Без предлога: next, last, this, every, today, tomorrow, yesterday.
- from…to, for (как долго), ago (назад — после!).`,
        },
      ],
    },
    {
      id: "a1_u6_l3",
      title: "В кафе и ресторане: заказать, спросить, заплатить",
      goal: "Вы сможете заказать еду и напитки, задать вопросы о меню, попросить счёт — вежливо, как носители.",
      steps: [
        {
          t: "text",
          h: "Магическая фраза: I'd like…",
          md: `Сказать «I want a coffee» грамматически правильно, но звучит **резко** — как ребёнок, который требует. В кафе, магазине, отеле взрослые говорят:

- [[I'd like a coffee, please.]] — Я бы хотел кофе. (**I'd like** = I would like — «я бы хотел»)
- [[Can I have a coffee, please?]] — Можно мне кофе?
- [[Could I have the menu, please?]] — Можно меню? (вежливее)

**Вопрос официанта:** [[Would you like…?]] — Не желаете…? [[Would you like something to drink?]] — Желаете что-нибудь выпить?
Ответ: [[Yes, please.]] / [[No, thank you.]]

> **Would you like** (не желаете ли) ≠ **Do you like** (вам нравится вообще?). [[Do you like coffee?]] — Ты любишь кофе? [[Would you like a coffee?]] — Хочешь кофе (сейчас)?

**Слово please** в английском очень важно. Просьба без please звучит грубовато. Добавляйте его почти к каждой просьбе.`,
        },
        {
          t: "examples",
          h: "Фразы гостя",
          items: [
            ["A table for two, please.", "Столик на двоих, пожалуйста."],
            ["Can I have the menu, please?", "Можно меню?"],
            ["What do you recommend?", "Что вы посоветуете?"],
            ["I'd like the chicken salad.", "Я бы хотел салат с курицей."],
            ["Does it have nuts in it?", "Там есть орехи?"],
            ["I'm vegetarian.", "Я вегетарианец."],
            ["Could we have some water, please?", "Можно нам воды?"],
            ["Can I have the bill, please?", "Можно счёт? (амер. the check)"],
            ["Can I pay by card?", "Можно картой?"],
            ["Keep the change.", "Сдачи не надо."],
          ],
        },
        {
          t: "examples",
          h: "Фразы официанта — их нужно понимать",
          items: [
            ["Are you ready to order?", "Готовы сделать заказ?"],
            ["What would you like?", "Что желаете?"],
            ["Anything to drink?", "Что-нибудь выпить?"],
            ["Anything else?", "Что-нибудь ещё?"],
            ["Eat in or take away?", "Здесь или с собой? (амер. for here or to go)"],
            ["Here you are.", "Вот, пожалуйста (протягивая что-то)."],
            ["Enjoy your meal!", "Приятного аппетита!"],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: обед в кафе",
          lines: [
            ["Waiter", "Good afternoon! Are you ready to order?", "Добрый день! Готовы заказать?"],
            ["Anna", "Yes, I'd like the tomato soup, please.", "Да, я бы хотела томатный суп."],
            ["Waiter", "And for the main course?", "А на второе?"],
            ["Anna", "What do you recommend?", "Что посоветуете?"],
            ["Waiter", "The fish is very good today.", "Рыба сегодня очень хорошая."],
            ["Anna", "OK, the fish, please. Does it come with vegetables?", "Хорошо, рыбу. Она подаётся с овощами?"],
            ["Waiter", "Yes, it does. Would you like something to drink?", "Да. Желаете что-нибудь выпить?"],
            ["Anna", "Just water, please.", "Просто воду, пожалуйста."],
            ["Waiter", "Sparkling or still?", "С газом или без?"],
            ["Anna", "Still, please. Thank you.", "Без газа. Спасибо."],
          ],
          qs: [
            ["Что Анна заказала на второе?", ["Курицу", "Рыбу", "Пасту"], 1, "The fish, please."],
            ["Какую воду она хочет?", ["С газом", "Без газа", "Не хочет воды"], 1, "Still — без газа."],
          ],
        },
        {
          t: "choice",
          h: "Как сказать вежливо?",
          items: [
            ["Попросить кофе", ["I want coffee.", "I'd like a coffee, please.", "Give coffee."], 1, "I'd like… please — вежливо."],
            ["Официант: «Would you like some dessert?» Вы не хотите:", ["No.", "No, thank you.", "I don't like."], 1, "No, thank you — вежливо."],
            ["Попросить счёт", ["Can I have the bill, please?", "Give me money paper.", "I want pay."], 0, ""],
            ["«Здесь или с собой?» — Вы берёте с собой:", ["Take away, please.", "Eat in, please.", "Go home."], 0, "Take away (брит.) / to go (амер.)."],
            ["«Do you like tea?» означает…", ["Хотите чаю сейчас?", "Вы вообще любите чай?"], 1, "Do you like — вообще; Would you like — сейчас."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я бы хотел чашку чая, пожалуйста.", "I'd like a cup of tea, please.|I would like a cup of tea, please.", "I'd like… please."],
            ["Что вы посоветуете?", "What do you recommend?|What would you recommend?", ""],
            ["Можно счёт, пожалуйста?", "Can I have the bill, please?|Could I have the bill, please?|Can we have the bill, please?|Could we have the bill, please?|Can I have the check, please?|Could I have the check, please?", ""],
            ["Хотите что-нибудь выпить?", "Would you like something to drink?|Would you like anything to drink?|Would you like a drink?", "Would you like…?"],
          ],
        },
        {
          t: "speak",
          h: "Сделайте заказ вслух",
          items: [
            ["A table for one, please.", "Столик на одного, пожалуйста."],
            ["I'd like a coffee and a sandwich, please.", "Я бы хотел кофе и сэндвич."],
            ["Can I pay by card?", "Можно картой?"],
          ],
        },
        {
          t: "text",
          h: "Итог юнита 6",
          md: `- **can** — умею/могу/можно; **could** — вежливая просьба.
- Предлоги времени: **in** May, **on** Monday, **at** 5 o'clock; без предлога перед next/last/this.
- В кафе: [[I'd like…, please.]] [[Can I have…?]] [[What do you recommend?]] [[Can I have the bill, please?]]
- **Would you like…?** — предложение; **Do you like…?** — вопрос о вкусах.

**Говорение во вторник:** ролевая игра «в кафе» с репетитором или ИИ-партнёром (тема «В кафе»).`,
        },
      ],
    },
  ],
};
