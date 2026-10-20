// A2 юнит 3: Present Continuous и его отличие от Present Simple.
export default {
  id: "a2_u3",
  level: "A2",
  phase: 2,
  icon: "▶️",
  title: "Present Continuous: что происходит сейчас",
  about: "I am working — действие прямо сейчас и в этот период; отличие от Present Simple; глаголы состояния.",
  lessons: [
    {
      id: "a2_u3_l1",
      title: "I'm working: действие в процессе",
      goal: "Вы научитесь говорить о том, что происходит прямо сейчас и в этот период жизни.",
      steps: [
        {
          t: "text",
          h: "Зачем ещё одно настоящее время",
          md: `В русском одно настоящее время: «я работаю» может значить и «я вообще работаю в банке», и «я сейчас работаю, не мешай». В английском это **два разных времени**:

- **Present Simple** — обычно, регулярно, вообще: [[I work in a bank.]] — Я работаю в банке (это моя работа).
- **Present Continuous** — **прямо сейчас, в процессе**: [[I'm working now.]] — Я сейчас работаю (занят этим в данный момент).

Continuous значит «длительный, продолжающийся». Представьте, что вы нажали паузу на видео: что человек **делает** в этот момент — это Continuous.`,
        },
        {
          t: "text",
          h: "Как строится: am/is/are + -ing",
          md: `**am / is / are + глагол-ing**

| Кто | to be | глагол + ing |
|---|---|---|
| I | am ('m) | working |
| he / she / it | is ('s) | working |
| you / we / they | are ('re) | working |

- [[I'm reading a book.]] — Я читаю книгу (сейчас).
- [[She's talking on the phone.]] — Она разговаривает по телефону.
- [[They're having lunch.]] — Они обедают.
- [[It's raining.]] — Идёт дождь.

**Отрицание:** am/is/are + **not**: [[I'm not working today.]], [[He isn't listening.]]
**Вопрос:** am/is/are — вперёд: [[Are you working?]], [[What are you doing?]] — Что ты делаешь? [[Where is she going?]] — Куда она идёт?

> Две частые ошибки: забыть to be («I working») или -ing («I am work»). Нужны **обе части**: I **am** work**ing**.

Правописание -ing вы знаете (юнит A1-8): dance → dancing, swim → swimming, lie → lying.`,
        },
        {
          t: "text",
          h: "Когда используется",
          md: `1. **Прямо сейчас:** [[Sorry, I can't talk. I'm driving.]] — Извини, не могу говорить, я за рулём.
2. **Временно, в этот период** (не обязательно в эту секунду): [[I'm reading a great book these days.]] — Я сейчас (в эти дни) читаю отличную книгу. [[She's working from home this week.]] — На этой неделе она работает из дома.
3. **Изменения, тренды:** [[Prices are going up.]] — Цены растут. [[My English is getting better.]] — Мой английский становится лучше.
4. **Планы на ближайшее будущее** (договорённости) — подробно в юните 4: [[I'm meeting Tom tomorrow.]]

**Маркеры:** [[now]], [[right now]], [[at the moment]], [[today]], [[this week]], [[these days]], [[Look!]], [[Listen!]]`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["Shh! The baby ___.", ["sleeps", "is sleeping", "sleeping"], 1, "Прямо сейчас — is sleeping."],
            ["I ___ TV at the moment.", ["watch", "am watching", "watching"], 1, "at the moment — Continuous."],
            ["What ___ you doing?", ["do", "are", "is"], 1, "Вопрос в Continuous — are you doing."],
            ["Look! It ___.", ["snows", "is snowing", "snowing"], 1, "Look! — сейчас."],
            ["She ___ listening to me.", ["doesn't", "isn't", "not"], 1, "Отрицание Continuous — isn't."],
            ["They ___ for the bus.", ["are waiting", "waiting", "are wait"], 0, "Нужны обе части: are + waiting."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте в Present Continuous",
          items: [
            ["I ___ (cook) dinner now.", "am cooking|'m cooking", ""],
            ["She ___ (talk) on the phone.", "is talking|'s talking", ""],
            ["We ___ (not / work) today.", "aren't working|are not working|'re not working", ""],
            ["___ you listening to me?", "Are|are", "Вопрос в Continuous: Are you listening?"],
            ["The children ___ (swim) in the pool.", "are swimming|'re swimming", "swim → swimming."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Что ты сейчас делаешь?", "What are you doing now?|What are you doing right now?|What are you doing?", ""],
            ["Я жду автобус.", "I'm waiting for the bus.|I am waiting for the bus.|I'm waiting for a bus.", "wait for — ждать кого-то/что-то."],
            ["Идёт дождь.", "It's raining.|It is raining.", ""],
            ["На этой неделе я работаю из дома.", "I'm working from home this week.|This week I'm working from home.|I am working from home this week.", "Временно — Continuous."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Present Continuous: **am/is/are + -ing** — обе части обязательны.
- Сейчас ([[I'm working]]), временно ([[this week]]), изменения ([[getting better]]).
- Вопрос: [[What are you doing?]]`,
        },
      ],
    },
    {
      id: "a2_u3_l2",
      title: "I work или I'm working? — Simple против Continuous",
      goal: "Вы научитесь выбирать между двумя настоящими временами и узнаете, какие глаголы не бывают в Continuous.",
      steps: [
        {
          t: "text",
          h: "Сравнение",
          md: `| Present Simple | Present Continuous |
|---|---|
| Обычно, регулярно, всегда | Сейчас, в этот момент или период |
| Постоянное | Временное |
| [[I work in a bank.]] (моя работа) | [[I'm working on a big project.]] (сейчас, временно) |
| [[He usually drives to work.]] | [[He's walking today because his car is broken.]] |
| [[It often rains in London.]] | [[It's raining now.]] |
| always, usually, every day, on Mondays | now, at the moment, today, this week |

Хитрый пример: [[I live in Moscow.]] — я живу в Москве (постоянно). [[I'm living with my parents at the moment.]] — сейчас живу у родителей (временно, пока делаю ремонт).`,
        },
        {
          t: "text",
          h: "Глаголы состояния: не бывают в -ing",
          md: `Некоторые глаголы описывают **не действие, а состояние** — чувства, мысли, обладание. Они почти **не используются в Continuous**, даже если речь о «сейчас»:

| Группа | Глаголы |
|---|---|
| Чувства | like, love, hate, want, need, prefer |
| Мышление | know, understand, believe, remember, forget, mean, think (= считать) |
| Восприятие | see, hear, smell, taste (о том, что органы воспринимают) |
| Обладание | have (= иметь), own, belong |
| Прочие | cost, seem, be |

- [[I understand you now.]] — Теперь я тебя понимаю. (не «I'm understanding»)
- [[I want a coffee.]] — Я хочу кофе. (не «I'm wanting»)
- [[Do you know him?]] — Ты его знаешь?
- [[This bag costs 50 dollars.]]

> Но если глагол означает **действие**, Continuous возможен: [[I'm having lunch.]] (have = есть, действие) vs [[I have a car.]] (have = иметь). [[I'm thinking about my holiday.]] (думаю о — процесс) vs [[I think it's a good idea.]] (считаю — мнение).`,
        },
        {
          t: "choice",
          h: "Simple или Continuous?",
          items: [
            ["I ___ coffee every morning.", ["drink", "am drinking"], 0, "Каждое утро — регулярно."],
            ["Don't call now, I ___ dinner.", ["have", "am having"], 1, "Сейчас, have = есть (действие)."],
            ["She ___ three languages.", ["speaks", "is speaking"], 0, "Постоянный факт."],
            ["I ___ what you mean.", ["understand", "am understanding"], 0, "understand — глагол состояния."],
            ["Where's Tom? — He ___ a shower.", ["has", "is having"], 1, "Прямо сейчас."],
            ["We usually ___ at home, but today we ___ at a restaurant.", ["eat / are eating", "are eating / eat"], 0, "Обычно — Simple, сегодня — Continuous."],
            ["I ___ a new car.", ["have", "am having"], 0, "Иметь — состояние."],
            ["This hotel ___ 200 dollars a night.", ["costs", "is costing"], 0, "cost — состояние."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в нужное время",
          items: [
            ["She usually ___ (go) to work by car.", "goes", "usually — Simple."],
            ["Listen! Somebody ___ (sing).", "is singing|'s singing", "Listen! — сейчас."],
            ["I ___ (not / like) this music.", "don't like|do not like", "like — состояние."],
            ["Prices ___ (go) up every year.", "go", "Every year — регулярно."],
            ["My English ___ (get) better.", "is getting|'s getting", "Изменение — Continuous."],
            ["Do you ___ (know) this man?", "know", "Состояние."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Обычно я встаю в семь, но сегодня я отдыхаю.", "I usually get up at seven, but today I'm resting.|Usually I get up at seven, but today I'm relaxing.|I usually get up at seven, but today I'm having a rest.|I usually get up at seven but today I am resting.|I usually get up at seven, but today I'm relaxing.", "Обычно — Simple, сегодня — Continuous."],
            ["Я тебя не понимаю.", "I don't understand you.|I do not understand you.", "understand — без -ing."],
            ["Она сейчас разговаривает с клиентом.", "She's talking to a client now.|She is talking to a client now.|She's talking to a client at the moment.|She's speaking to a client now.|She's talking with a client now.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Simple — обычно/постоянно; Continuous — сейчас/временно.
- Глаголы состояния (like, want, know, understand, have = иметь, cost) — без -ing.
- have lunch / think about — действия, могут быть в -ing.`,
        },
      ],
    },
    {
      id: "a2_u3_l3",
      title: "Описываем картинку и говорим по телефону",
      goal: "Вы научитесь описывать, что происходит на фото или вокруг вас, и объяснять по телефону, чем вы заняты.",
      steps: [
        {
          t: "text",
          h: "Описание картинки — частое задание экзаменов",
          md: `На экзаменах и в жизни часто нужно описать, что происходит. Схема:

1. **Общее:** [[In this picture I can see…]] — На этой картинке я вижу… / [[This is a photo of…]]
2. **Где:** [[It's in a park / in an office.]] [[In the background there's…]] (на заднем плане), [[in the foreground]] (на переднем), [[on the left / on the right]], [[in the middle]].
3. **Кто что делает (Continuous!):** [[A man is reading a newspaper.]] [[Two children are playing.]]
4. **Как выглядят** (have / wear): [[She's wearing a red dress.]] — На ней красное платье.
5. **Предположение:** [[I think it's summer because…]] [[They look happy.]] — Они выглядят счастливыми.

>i **wear** (носить, быть одетым в) почти всегда в Continuous при описании: [[He's wearing a suit.]] — На нём костюм.`,
        },
        {
          t: "examples",
          h: "Описание сцены в кафе",
          items: [
            ["In this picture I can see a busy café.", "На этой картинке я вижу оживлённое кафе."],
            ["On the left, a woman is working on her laptop.", "Слева женщина работает за ноутбуком."],
            ["In the middle, two friends are drinking coffee and laughing.", "В центре двое друзей пьют кофе и смеются."],
            ["A waiter is carrying a tray.", "Официант несёт поднос."],
            ["He's wearing a white shirt.", "На нём белая рубашка."],
            ["In the background, people are waiting in a queue.", "На заднем плане люди стоят в очереди."],
            ["I think it's morning because everybody is having breakfast.", "Думаю, это утро, потому что все завтракают."],
          ],
        },
        {
          t: "text",
          h: "По телефону: «Я сейчас занят…»",
          md: `- [[Sorry, I can't talk right now. I'm in a meeting.]] — Извини, не могу говорить, я на встрече.
- [[I'm driving. Can I call you back in ten minutes?]] — Я за рулём. Перезвоню через 10 минут?
- [[I'm on my way.]] — Я уже в пути.
- [[I'm just leaving the office.]] — Как раз выхожу из офиса.
- [[What are you up to?]] — Чем занимаешься? (разговорное)
- [[Nothing much. I'm just relaxing.]] — Ничего особенного, отдыхаю.`,
        },
        {
          t: "dialog",
          h: "Диалог: звонок другу",
          lines: [
            ["Mark", "Hi, Alex! What are you up to?", "Привет, Алекс! Чем занят?"],
            ["Alex", "Hi! I'm cooking dinner. My parents are visiting this week.", "Привет! Готовлю ужин. На этой неделе у меня гостят родители."],
            ["Mark", "Oh, nice. What are you making?", "О, здорово. Что готовишь?"],
            ["Alex", "Pasta. My dad is helping me, but he's making a mess!", "Пасту. Папа мне помогает, но устраивает бардак!"],
            ["Mark", "Ha-ha! Listen, are you coming to the football on Saturday?", "Ха-ха! Слушай, ты придёшь на футбол в субботу?"],
            ["Alex", "I don't think so. We're going to the theatre with my parents.", "Вряд ли. Мы идём в театр с родителями."],
            ["Mark", "OK, no problem. Enjoy your dinner!", "Ладно, без проблем. Приятного ужина!"],
          ],
          qs: [
            ["Почему у Алекса гости?", ["День рождения", "Родители гостят на этой неделе", "Праздник"], 1, "My parents are visiting this week — временно, Continuous."],
            ["Что Алекс делает в субботу?", ["Идёт на футбол", "Идёт в театр", "Готовит ужин"], 1, "We're going to the theatre."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Извини, я на встрече. Перезвоню позже.", "Sorry, I'm in a meeting. I'll call you back later.|Sorry, I'm in a meeting. I will call you back later.|Sorry, I'm in a meeting, I'll call you later.|Sorry, I'm in a meeting. I'll call you later.", ""],
            ["На ней синие джинсы.", "She's wearing blue jeans.|She is wearing blue jeans.", "wear — Continuous при описании."],
            ["Я уже в пути.", "I'm on my way.|I am on my way.", ""],
          ],
        },
        {
          t: "speak",
          h: "Опишите, что происходит вокруг вас прямо сейчас",
          items: [
            ["I'm sitting at my desk and learning English.", "Я сижу за столом и учу английский."],
            ["It's raining outside.", "На улице идёт дождь."],
            ["My cat is sleeping on the sofa.", "Мой кот спит на диване."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Описание картинки: In this picture I can see… · on the left · in the background · is doing · is wearing · I think…
- По телефону: I'm in a meeting / driving / on my way. What are you up to?

**Практика:** откройте любое фото в телефоне и опишите его вслух по схеме (1–2 минуты).`,
        },
      ],
    },
  ],
};
