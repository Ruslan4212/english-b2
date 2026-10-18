// B1 юнит 4: условные предложения 0, 1, 2; when/unless/as soon as; If I were you.
export default {
  id: "b1_u4",
  level: "B1",
  phase: 3,
  icon: "🔀",
  title: "Условные предложения: если…",
  about: "Нулевой, первый и второй тип условных; unless, as soon as, when; гипотетические ситуации и советы.",
  lessons: [
    {
      id: "b1_u4_l1",
      title: "Если нагреть лёд… — нулевой и первый тип",
      goal: "Вы научитесь говорить о законах природы и реальных условиях в будущем и избежите главной ошибки: will после if.",
      steps: [
        {
          t: "text",
          h: "Условное предложение: две части",
          md: `Условное предложение = **условие** (if… — если) + **результат**. В английском есть несколько типов, и время в каждой части **зависит от типа**.

**Нулевой тип (Zero) — всегда так, законы, факты:**
**If + Present Simple, Present Simple**
- [[If you heat ice, it melts.]] — Если нагреть лёд, он тает.
- [[If I drink coffee at night, I can't sleep.]] — Если я пью кофе вечером, я не могу уснуть.
Здесь **if = when** (всегда, когда).`,
        },
        {
          t: "text",
          h: "Первый тип — реальное будущее",
          md: `**If + Present Simple, will + глагол**

Реальное, вероятное условие в будущем:
- [[If it rains tomorrow, we'll stay at home.]] — Если завтра пойдёт дождь, мы останемся дома.
- [[If you don't hurry, you'll miss the bus.]] — Если не поторопишься, опоздаешь на автобус.
- [[I'll call you if I have time.]] — Я позвоню, если будет время.

> **Главная ошибка русскоговорящих:** по-русски «если завтра **пойдёт** дождь» — будущее время. По-английски после **if** будущее (will) **не ставится**! Пишем **Present Simple**: if it **rains** (не «if it will rain»). Will — только в части результата.

То же правило работает после **when, as soon as, before, after, until** о будущем:
- [[I'll call you when I arrive.]] — Позвоню, когда приеду (не «when I will arrive»).
- [[As soon as I finish, I'll send it.]] — Как только закончу, отправлю.
- [[Wait here until I come back.]] — Жди здесь, пока я не вернусь.

**Запятая:** если if-часть первая — ставим запятую; если вторая — нет: [[If it rains, we'll stay.]] / [[We'll stay if it rains.]]`,
        },
        {
          t: "text",
          h: "Unless = if not",
          md: `**unless** — «если не», «пока не»:
- [[I'll be there at six unless the train is late.]] — Я буду в шесть, если поезд не опоздает.
- [[Unless you study, you won't pass.]] = [[If you don't study, you won't pass.]]

> После unless глагол **утвердительный**: «unless you don't study» — двойное отрицание, ошибка.

Вместо will в результате можно: **can, may, might, should** или повелительное наклонение:
- [[If you're tired, you should rest.]]
- [[If you see Tom, tell him to call me.]]
- [[If we leave now, we might catch the train.]]`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["If it ___ tomorrow, we'll cancel the picnic.", ["rains", "will rain", "rained"], 0, "После if — Present Simple."],
            ["If you press this button, the machine ___.", ["starts", "will start", "started"], 0, "Всегда так — нулевой тип (will тоже возможен, но здесь факт)."],
            ["I'll call you when I ___ home.", ["get", "will get", "got"], 0, "После when о будущем — Present."],
            ["___ you hurry, you'll be late.", ["If", "Unless", "When"], 1, "Если не поторопишься — Unless."],
            ["If she studies hard, she ___ the exam.", ["passes", "will pass", "passed"], 1, "Результат в будущем — will."],
            ["As soon as I ___ the results, I'll let you know.", ["have", "will have"], 0, ""],
            ["Unless it ___, we'll go.", ["rains", "doesn't rain"], 0, "После unless — утверждение."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Если завтра будет хорошая погода, мы поедем на пляж.", "If the weather is good tomorrow, we'll go to the beach.|If the weather is nice tomorrow, we'll go to the beach.|If the weather is good tomorrow, we will go to the beach.|If it's sunny tomorrow, we'll go to the beach.", "После if — is, не will be."],
            ["Я позвоню тебе, когда приеду.", "I'll call you when I arrive.|I will call you when I arrive.|I'll call you when I get there.|I'll phone you when I arrive.", ""],
            ["Если не поторопишься, опоздаешь.", "If you don't hurry, you'll be late.|Unless you hurry, you'll be late.|If you don't hurry, you will be late.|If you don't hurry up, you'll be late.", ""],
            ["Если нагреть воду до 100 градусов, она кипит.", "If you heat water to 100 degrees, it boils.|If you heat water to a hundred degrees, it boils.", "Нулевой тип."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **Zero:** If + Present, Present — всегда так.
- **First:** If + Present, will — реальное будущее.
- После **if / when / as soon as / until / before** о будущем — **Present**, не will!
- **unless** = if not, с утвердительным глаголом.`,
        },
      ],
    },
    {
      id: "b1_u4_l2",
      title: "Если бы я выиграл… — второй тип",
      goal: "Вы научитесь говорить о нереальных и маловероятных ситуациях и давать советы через «на твоём месте».",
      steps: [
        {
          t: "text",
          h: "Нереальное настоящее и будущее",
          md: `**Второй тип — If + Past Simple, would + глагол**

Ситуация **нереальная** или **маловероятная** — сейчас или в будущем. По-русски — «если бы … , то бы».

- [[If I won the lottery, I would travel around the world.]] — Если бы я выиграл в лотерею, я бы путешествовал по миру. (маловероятно)
- [[If I had more time, I'd learn Spanish.]] — Если бы у меня было больше времени, я бы выучил испанский. (но времени нет)
- [[What would you do if you lost your job?]] — Что бы ты делал, если бы потерял работу?

> Хотя после if стоит **прошедшее** (won, had), речь **не о прошлом**, а о нереальном настоящем/будущем. Прошедшее здесь — сигнал «это не по-настоящему».

**would** сокращается до **'d**: I'd, you'd, she'd. Отрицание — **wouldn't**.`,
        },
        {
          t: "text",
          h: "If I were you — на твоём месте",
          md: `С глаголом to be во втором типе для всех лиц можно (и в правильной речи принято) использовать **were**:
- [[If I were rich, I'd buy a house by the sea.]]
- [[If she were here, she would help us.]]

**If I were you, I'd…** — «на твоём месте я бы…» — самый частый способ дать совет:
- [[If I were you, I'd talk to the manager.]] — На твоём месте я бы поговорил с менеджером.
- [[I wouldn't do that if I were you.]] — На твоём месте я бы так не делал.

>i В разговорной речи встречается «if I was», но в письмах, на экзаменах и в выражении «If I were you» используйте **were**.`,
        },
        {
          t: "text",
          h: "Первый или второй тип?",
          md: `Выбор зависит от того, **насколько реальной** вы считаете ситуацию:

| Первый тип (реально) | Второй тип (нереально / маловероятно) |
|---|---|
| [[If I get the job, I'll move to Moscow.]] — у меня хорошие шансы | [[If I got the job, I'd move to Moscow.]] — вряд ли получу |
| [[If it's sunny tomorrow, we'll go out.]] | [[If I were a bird, I'd fly.]] — невозможно |
| [[If I have time, I'll help you.]] | [[If I had time, I'd help you.]] — времени нет |

Одно и то же условие можно сказать обоими типами — это выбор говорящего, насколько он верит в ситуацию.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["If I ___ a million dollars, I'd buy an island.", ["have", "had", "would have"], 1, "Второй тип: if + Past."],
            ["If I had a car, I ___ drive to work.", ["will", "would", "am"], 1, "would."],
            ["If I ___ you, I'd accept the offer.", ["am", "was", "were"], 2, "If I were you."],
            ["What would you do if you ___ a ghost?", ["see", "saw", "would see"], 1, ""],
            ["Я, скорее всего, получу работу:", ["If I get it, I'll celebrate.", "If I got it, I'd celebrate."], 0, "Реально — первый тип."],
            ["Это невозможно:", ["If I am taller, I'll play basketball.", "If I were taller, I'd play basketball."], 1, "Нереально — второй тип."],
            ["If she ___ more, she would pass.", ["studied", "studies", "would study"], 0, "После if — Past, не would."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глаголы",
          items: [
            ["If I ___ (know) the answer, I would tell you.", "knew", ""],
            ["If we lived by the sea, we ___ (swim) every day.", "would swim|'d swim", ""],
            ["I ___ (not / do) that if I were you.", "wouldn't do|would not do", ""],
            ["If he ___ (be) here, he'd know what to do.", "were|was", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Если бы у меня было больше денег, я бы купил машину.", "If I had more money, I would buy a car.|If I had more money, I'd buy a car.", ""],
            ["На твоём месте я бы поговорил с ним.", "If I were you, I'd talk to him.|If I were you, I would talk to him.|If I were you, I'd speak to him.|If I was you, I'd talk to him.", ""],
            ["Что бы ты сделал, если бы выиграл в лотерею?", "What would you do if you won the lottery?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **Second:** If + Past Simple, would + глагол — нереально/маловероятно сейчас или в будущем.
- **If I were you, I'd…** — совет.
- Реально → первый тип, нереально → второй.`,
        },
      ],
    },
    {
      id: "b1_u4_l3",
      title: "Гипотезы в разговоре и на работе",
      goal: "Вы научитесь обсуждать варианты и гипотетические ситуации — в личном разговоре и при решении рабочих задач.",
      steps: [
        {
          t: "text",
          h: "Обсуждаем варианты на работе",
          md: `Условные предложения — главный инструмент обсуждения вариантов:

**Предложить вариант:**
- [[What if we hired another developer?]] — А что, если нанять ещё одного разработчика? (what if + Past — мягкое предложение)
- [[If we moved the deadline, we could test everything properly.]] — Если бы мы сдвинули срок, могли бы всё нормально протестировать.
- [[Suppose we cancelled the meeting — what would happen?]] — Предположим, мы отменим встречу — что будет?

**Предупредить о последствиях:**
- [[If we don't fix this today, the client will complain.]]
- [[Unless we get approval, we can't start.]]

**Условие сделки:**
- [[We'll give you a discount provided that you order 100 units.]] — при условии, что…
- [[As long as the quality is good, we're happy.]] — пока / при условии что…

**could и might** вместо would — когда результат возможен, но не точен: [[If we had more people, we could finish faster.]]`,
        },
        {
          t: "examples",
          h: "Фразы для обсуждения",
          items: [
            ["What if we tried a different approach?", "А что если попробовать другой подход?"],
            ["If I were in your position, I'd ask for help.", "На вашем месте я бы попросил помощи."],
            ["If we started earlier, we wouldn't have to rush.", "Если бы мы начали раньше, нам не пришлось бы спешить."],
            ["We can do it as long as we have the budget.", "Мы справимся, если будет бюджет."],
            ["I'll agree provided that we review it next month.", "Я соглашусь при условии, что мы пересмотрим это через месяц."],
            ["It would be great if you could send it today.", "Было бы здорово, если бы вы могли отправить это сегодня.", "вежливая просьба"],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: проект отстаёт",
          lines: [
            ["Anna", "We're two weeks behind. If we don't do something, we'll miss the launch.", "Мы отстаём на две недели. Если ничего не сделаем, сорвём запуск."],
            ["Mark", "What if we asked the marketing team for help?", "А что если попросить помощи у маркетинга?"],
            ["Anna", "They're busy too. If they had more time, they'd definitely help.", "Они тоже заняты. Если бы у них было больше времени, они бы точно помогли."],
            ["Mark", "OK. Suppose we removed some features — could we finish on time?", "Ладно. Предположим, мы уберём часть функций — успеем?"],
            ["Anna", "Maybe, as long as the client agrees.", "Возможно, если клиент согласится."],
            ["Mark", "If I were you, I'd call the client today and explain the situation.", "На твоём месте я бы позвонил клиенту сегодня и объяснил ситуацию."],
            ["Anna", "Good idea. I'll call them as soon as the meeting ends.", "Хорошая идея. Позвоню, как только закончится встреча."],
          ],
          qs: [
            ["Почему маркетинг не может помочь?", ["Не хотят", "Тоже заняты", "Нет денег"], 1, "They're busy too."],
            ["Что советует Марк?", ["Нанять людей", "Позвонить клиенту сегодня", "Отменить запуск"], 1, "If I were you, I'd call the client today."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["What if we ___ the price?", ["lower", "lowered", "will lower"], 1, "What if + Past — мягкое предложение."],
            ["It would be great if you ___ help me.", ["can", "could", "will"], 1, "Вежливая просьба: if you could."],
            ["We'll sign the contract as long as the price ___ the same.", ["stays", "will stay"], 0, "После as long as — Present."],
            ["If we had more people, we ___ finish faster.", ["can", "could", "will"], 1, "Второй тип с could."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["А что, если мы перенесём встречу на пятницу?", "What if we moved the meeting to Friday?|What if we move the meeting to Friday?|What if we postponed the meeting to Friday?|What if we rescheduled the meeting for Friday?", ""],
            ["Было бы здорово, если бы вы могли ответить сегодня.", "It would be great if you could reply today.|It would be great if you could answer today.|It would be great if you could respond today.", ""],
            ["Мы согласимся при условии, что срок не изменится.", "We'll agree provided that the deadline doesn't change.|We will agree provided that the deadline doesn't change.|We'll agree as long as the deadline doesn't change.|We'll agree provided the deadline doesn't change.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Zero (факты), First (реальное будущее), Second (нереальное).
- После if/when/as soon as/unless о будущем — Present.
- Обсуждение: What if we…? Suppose… · provided that · as long as · It would be great if you could…
- Совет: If I were you, I'd…

**Говорение:** тема «Что бы вы сделали, если…».`,
        },
      ],
    },
  ],
};
