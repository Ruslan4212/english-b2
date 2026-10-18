// B1 юнит 6: косвенная речь — утверждения, вопросы, просьбы и приказы.
export default {
  id: "b1_u6",
  level: "B1",
  phase: 3,
  icon: "💬",
  title: "Косвенная речь: он сказал, что…",
  about: "Как передать чужие слова: сдвиг времён, say и tell, косвенные вопросы, просьбы, вежливые вопросы.",
  lessons: [
    {
      id: "b1_u6_l1",
      title: "He said that…: передаём утверждения",
      goal: "Вы научитесь пересказывать чужие слова и поймёте, зачем в английском «сдвигают» время.",
      steps: [
        {
          t: "text",
          h: "Прямая и косвенная речь",
          md: `**Прямая речь** — дословная цитата: [[Tom said, "I'm tired."]]
**Косвенная речь** — пересказ: [[Tom said (that) he was tired.]] — Том сказал, что устал.

Заметили? В русском время **не меняется**: «Том сказал, что **устал**/устаёт» — как он сказал, так и передаём. В английском, если глагол-рассказчик в **прошедшем** (said, told), время в пересказе обычно **сдвигается на шаг назад** — «согласование времён»:

| Прямая речь | Косвенная речь |
|---|---|
| Present Simple: "I **work** here." | Past Simple: He said he **worked** there. |
| Present Continuous: "I'**m working**." | Past Continuous: He said he **was working**. |
| Past Simple: "I **saw** it." | Past Perfect: He said he **had seen** it. |
| Present Perfect: "I'**ve finished**." | Past Perfect: He said he **had finished**. |
| will: "I'**ll call** you." | would: He said he **would call** me. |
| can: "I **can** help." | could: He said he **could** help. |

**that** после said можно опускать: [[She said (that) she was busy.]]`,
        },
        {
          t: "text",
          h: "Меняются и другие слова",
          md: `Местоимения и указатели меняются по смыслу, как и в русском:
- "**I** like **my** job." → She said **she** liked **her** job.
- **here** → there, **this** → that
- **now** → then, at that moment
- **today** → that day, **yesterday** → the day before, **tomorrow** → the next day / the following day
- **ago** → before, **next week** → the following week

**Когда время можно не сдвигать:**
- Сказанное **всё ещё правда**: [[She said she lives in Paris.]] (она и сейчас там живёт) — допустимо.
- Глагол-рассказчик в настоящем: [[He says he's tired.]] — Он говорит, что устал (без сдвига).

>i В разговоре носители часто не сдвигают время, если пересказывают что-то только что сказанное и актуальное. Но в письменной речи и на экзаменах сдвиг ожидается.`,
        },
        {
          t: "text",
          h: "say или tell?",
          md: `Оба — «сказать», но грамматика разная:
- **say** — **без** указания кому: [[She said that she was tired.]] Если нужно «кому» — **say to somebody** (редко).
- **tell** — **обязательно с тем, кому**: [[She told me that she was tired.]] (не «told that…»)

| ✅ | ❌ |
|---|---|
| He **said** he was busy. | He said me he was busy. |
| He **told me** he was busy. | He told he was busy. |

Устойчивые сочетания с **tell**: [[tell the truth]] (говорить правду), [[tell a lie]] (лгать), [[tell a story]], [[tell a joke]]. С **say**: [[say hello]], [[say goodbye]], [[say sorry]], [[say something]].`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["«I'm hungry,» she said. → She said she ___ hungry.", ["is", "was", "were"], 1, "am → was."],
            ["«I'll help you.» → He said he ___ help me.", ["will", "would", "can"], 1, "will → would."],
            ["«I've lost my keys.» → She said she ___ her keys.", ["lost", "has lost", "had lost"], 2, "Present Perfect → Past Perfect."],
            ["He ___ me that he was leaving.", ["said", "told", "say"], 1, "С «кому» — told."],
            ["She ___ that she liked the film.", ["said", "told"], 0, "Без «кому» — said."],
            ["«I'll call you tomorrow.» → He said he would call me ___.", ["tomorrow", "the next day", "yesterday"], 1, "tomorrow → the next day."],
            ["«I can swim.» → She said she ___ swim.", ["can", "could", "would"], 1, "can → could."],
          ],
        },
        {
          t: "translate",
          h: "Переведите в косвенную речь",
          items: [
            ["Он сказал, что занят.", "He said he was busy.|He said that he was busy.", "Сдвиг: is → was."],
            ["Она сказала мне, что закончила отчёт.", "She told me she had finished the report.|She told me that she had finished the report.|She told me she'd finished the report.", "tell + кому; Perfect → Past Perfect."],
            ["Он сказал, что позвонит завтра. (передаём на следующий день)", "He said he would call today.|He said that he would call today.|He said he'd call today.", "Его «завтра» — это наше «сегодня»."],
            ["Они сказали, что могут помочь.", "They said they could help.|They said that they could help.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- После said/told время сдвигается назад: am → was, will → would, can → could, did/has done → had done.
- Меняются here → there, today → that day, tomorrow → the next day.
- **say** (без кому) / **tell somebody**.`,
        },
      ],
    },
    {
      id: "b1_u6_l2",
      title: "She asked me where…: косвенные вопросы",
      goal: "Вы научитесь пересказывать вопросы и задавать вежливые вопросы «Не подскажете, где…?» — с правильным порядком слов.",
      steps: [
        {
          t: "text",
          h: "В косвенном вопросе — порядок утверждения",
          md: `Когда вопрос пересказывают, он **перестаёт быть вопросом**: исчезает do/did, возвращается **прямой порядок слов** (подлежащее + глагол), и нет вопросительного знака.

**Вопрос со словом (where, what, when…):**
- "Where **do you live**?" → She asked me where **I lived**.
- "What time **is it**?" → He asked what time **it was**.
- "Why **did you leave**?" → They asked why **I had left**.

**Вопрос да/нет — добавляется if или whether («ли»):**
- "**Are you** ready?" → He asked **if I was** ready. — Он спросил, готов ли я.
- "**Do you like** it?" → She asked **whether I liked** it.

> Самая частая ошибка: сохранить вопросительный порядок: «She asked me where do I live». Правильно: [[She asked me where I lived.]]`,
        },
        {
          t: "text",
          h: "Вежливые (непрямые) вопросы",
          md: `Тот же порядок слов используется в **вежливых вопросах**, которые начинаются с вводной фразы. Это очень важно в работе и с незнакомыми людьми — прямой вопрос может звучать резко.

| Прямой вопрос | Вежливый (непрямой) |
|---|---|
| Where is the station? | [[Could you tell me where the station is?]] |
| What time does it start? | [[Do you know what time it starts?]] |
| Is he in the office? | [[Do you know if he's in the office?]] |
| How much does it cost? | [[I was wondering how much it costs.]] |
| When will it be ready? | [[Could you let me know when it will be ready?]] |

Вводные фразы: [[Could you tell me…]], [[Do you know…]], [[I'd like to know…]], [[I was wondering…]] (я хотел бы узнать), [[Do you have any idea…]], [[Can you remind me…]].

> Обратите внимание: в непрямом вопросе **нет do/does/did** и порядок прямой: [[Could you tell me where the station is?]] (не «where is the station»).`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["She asked me where ___.", ["do I work", "I worked", "did I work"], 1, "Прямой порядок + сдвиг времени."],
            ["He asked ___ I was married.", ["that", "if", "what"], 1, "Вопрос да/нет — if."],
            ["Could you tell me where ___?", ["is the bank", "the bank is"], 1, "Непрямой вопрос — прямой порядок."],
            ["Do you know what time ___?", ["the train leaves", "does the train leave"], 0, "Без does."],
            ["They asked me why ___ late.", ["was I", "I was"], 1, ""],
            ["I was wondering ___ you could help me.", ["if", "that", "what"], 0, "if — «не могли бы вы»."],
          ],
        },
        {
          t: "fill",
          h: "Перескажите вопрос: допишите",
          items: [
            ["«Where are you from?» → He asked me where I ___ from.", "was", ""],
            ["«Do you speak English?» → She asked ___ I spoke English.", "if|whether", ""],
            ["«What is your name?» → He asked what my name ___.", "was", ""],
            ["Где туалет? → Could you tell me where the toilet ___?", "is", "Прямой порядок: the toilet is."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Она спросила, где я живу.", "She asked where I lived.|She asked me where I lived.|She asked where I live.|She asked me where I live.", "Без do, прямой порядок."],
            ["Он спросил, готов ли я.", "He asked if I was ready.|He asked whether I was ready.|He asked me if I was ready.|He asked me whether I was ready.", "if/whether."],
            ["Не подскажете, во сколько закрывается магазин?", "Could you tell me what time the shop closes?|Do you know what time the shop closes?|Could you tell me when the shop closes?|Do you know when the shop closes?|Could you tell me what time the store closes?", "Без does."],
            ["Вы не знаете, он в офисе?", "Do you know if he's in the office?|Do you know if he is in the office?|Do you know whether he is in the office?|Do you know whether he's in the office?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Косвенный вопрос: **без do/did**, прямой порядок, сдвиг времени; да/нет — **if / whether**.
- Вежливо: [[Could you tell me where it is?]] [[Do you know if…?]] [[I was wondering if…]]`,
        },
      ],
    },
    {
      id: "b1_u6_l3",
      title: "Просьбы, приказы и пересказ разговора",
      goal: "Вы научитесь передавать просьбы и указания и пересказывать разговоры с разными глаголами вместо однообразного said.",
      steps: [
        {
          t: "text",
          h: "Просьбы и приказы: ask / tell + to",
          md: `**Просьба:** ask somebody **to do** something
- "Please close the door." → [[She asked me to close the door.]]
- "Could you help me?" → [[He asked me to help him.]]

**Приказ, указание:** tell somebody **to do** something
- "Wait here!" → [[The officer told us to wait there.]]

**Отрицание — not to:**
- "Don't be late!" → [[She told me not to be late.]]
- "Please don't smoke." → [[He asked us not to smoke.]]

> Ошибка: «She said me to close the door». После **say** инфинитив не ставят — только **ask/tell + somebody + to**.`,
        },
        {
          t: "text",
          h: "Глаголы вместо said",
          md: `Чтобы пересказ был живым и точным, используйте разные глаголы:

| Глагол | Значение | Схема |
|---|---|---|
| [[explain]] | объяснить | He explained that… |
| [[promise]] | пообещать | She promised to call. / She promised that… |
| [[offer]] | предложить (сделать) | He offered to help. |
| [[suggest]] | предложить (идею) | She suggested going / suggested that we go. |
| [[agree]] | согласиться | They agreed to wait. |
| [[refuse]] | отказаться | He refused to pay. |
| [[remind]] | напомнить | She reminded me to buy milk. |
| [[warn]] | предупредить | He warned us not to go there. |
| [[admit]] | признать | She admitted that she was wrong. |
| [[complain]] | пожаловаться | He complained that the room was cold. |
| [[mention]] | упомянуть | She mentioned that… |

> **suggest** — особый: после него **не** ставят «to»: «He suggested to go» — ошибка. Правильно: [[He suggested going]] или [[He suggested that we go]].`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["«Please call me.» → She asked me ___ her.", ["call", "to call", "calling"], 1, "ask + to."],
            ["«Don't touch it!» → He told me ___ it.", ["not touch", "not to touch", "don't touch"], 1, "not to."],
            ["«I'll help you.» → He ___ to help me.", ["offered", "suggested", "said"], 0, "Предложил сделать сам — offered to."],
            ["«Let's go to the cinema.» → She ___ going to the cinema.", ["offered", "suggested", "told"], 1, "Идея — suggest + -ing."],
            ["«I won't pay!» → He ___ to pay.", ["refused", "agreed", "reminded"], 0, ""],
            ["«Don't forget your passport.» → She ___ me to take my passport.", ["warned", "reminded", "refused"], 1, ""],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: пересказываем встречу коллеге",
          lines: [
            ["Kate", "How was the meeting with the client? I couldn't come.", "Как прошла встреча с клиентом? Я не смогла прийти."],
            ["Dan", "Not bad. They said they were happy with the design but complained that the price was too high.", "Неплохо. Сказали, что довольны дизайном, но жаловались, что цена слишком высокая."],
            ["Kate", "Did they ask for a discount?", "Просили скидку?"],
            ["Dan", "Yes, they asked us to reduce the price by ten percent. I explained that we couldn't do that.", "Да, попросили снизить цену на десять процентов. Я объяснил, что мы не можем."],
            ["Kate", "And what did they say?", "А они что?"],
            ["Dan", "Their director suggested meeting again next week. I promised to send a new offer by Friday.", "Их директор предложил встретиться снова на следующей неделе. Я пообещал прислать новое предложение к пятнице."],
            ["Kate", "OK. Remind me to check it before you send it.", "Хорошо. Напомни мне проверить его перед отправкой."],
          ],
          qs: [
            ["На что жаловался клиент?", ["На дизайн", "На высокую цену", "На сроки"], 1, "They complained that the price was too high."],
            ["Что пообещал Дэн?", ["Скидку 10%", "Новое предложение к пятнице", "Встретиться завтра"], 1, "I promised to send a new offer by Friday."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Она попросила меня подождать.", "She asked me to wait.", "ask + to."],
            ["Он сказал нам не опаздывать.", "He told us not to be late.", "tell + not to."],
            ["Менеджер предложил перенести встречу.", "The manager suggested moving the meeting.|The manager suggested postponing the meeting.|The manager suggested rescheduling the meeting.|The manager suggested that we move the meeting.", "suggest + -ing."],
            ["Он пообещал позвонить.", "He promised to call.|He promised to phone.|He promised that he would call.|He promised he would call.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Утверждения: said (that)… / told me (that)… со сдвигом времён.
- Вопросы: asked where I lived / asked if… — прямой порядок.
- Просьбы: asked me to… / told me (not) to…
- Глаголы: explain, promise, offer to, suggest -ing, agree, refuse, remind, warn, complain.

**Практика:** перескажите вслух последний разговор с коллегой или другом в косвенной речи.`,
        },
      ],
    },
  ],
};
