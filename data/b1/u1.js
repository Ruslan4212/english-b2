// B1 юнит 1: Present Perfect — опыт, третья форма глагола, ever/never.
export default {
  id: "b1_u1",
  level: "B1",
  phase: 3,
  icon: "🌍",
  title: "Present Perfect: опыт и результат",
  about: "Самое «нерусское» время: связь прошлого с настоящим. Третья форма глаголов, ever/never, been/gone.",
  lessons: [
    {
      id: "b1_u1_l1",
      title: "Зачем нужен Present Perfect",
      goal: "Вы поймёте логику Present Perfect — времени, которого нет в русском, — и научитесь его строить.",
      steps: [
        {
          t: "text",
          h: "Прошлое, которое важно сейчас",
          md: `**Present Perfect** («настоящее совершённое») — самое трудное время для русскоговорящих, потому что в русском его нет. Переводим мы его прошедшим временем, но для англичанина это **настоящее**.

Главная идея: действие произошло в прошлом, но **важен результат или опыт сейчас**, а **когда именно — неважно или не сказано**.

- [[I've lost my keys.]] — Я потерял ключи. (= сейчас у меня нет ключей — это и важно!)
- [[I've been to London.]] — Я был в Лондоне. (= у меня есть такой опыт)
- [[She has finished the report.]] — Она закончила отчёт. (= отчёт готов)

Сравните с Past Simple — там важно **когда**, событие в законченном прошлом:
- [[I lost my keys yesterday.]] — Я потерял ключи вчера. (история о вчерашнем дне)
- [[I went to London in 2019.]] — Я ездил в Лондон в 2019.

>i Простой тест: **если вы называете или подразумеваете конкретное время в прошлом** (yesterday, last year, in 2019, when I was a child) — **Past Simple**. Если нет, и важен результат/опыт «на сегодня» — **Present Perfect**.`,
        },
        {
          t: "text",
          h: "Как строится: have/has + третья форма",
          md: `**have / has + третья форма глагола (Past Participle, V3)**

| Кто | | V3 |
|---|---|---|
| I / you / we / they | **have** ('ve) | worked, seen |
| he / she / it | **has** ('s) | worked, seen |

- **Отрицание:** haven't / hasn't + V3: [[I haven't seen this film.]]
- **Вопрос:** Have/Has + кто + V3: [[Have you seen this film?]] → [[Yes, I have. / No, I haven't.]]

**Третья форма (V3):**
- У **правильных** глаголов = прошедшей: work → worked → **worked**, play → played → **played**.
- У **неправильных** — третья колонка таблицы: go → went → **gone**, see → saw → **seen**, do → did → **done**.

> Здесь **have — помощник**, а не «иметь». [[I have seen]] — не «я имею видел», а просто «я видел». И не путайте **he's** = he **is** и **he's** = he **has**: [[He's tired]] (is), [[He's finished]] (has, потому что дальше V3).`,
        },
        {
          t: "examples",
          h: "Третьи формы самых частых неправильных глаголов",
          items: [
            ["be — was/were — been", "быть"], ["go — went — gone", "идти"], ["do — did — done", "делать"], ["see — saw — seen", "видеть"],
            ["have — had — had", "иметь"], ["make — made — made", "делать"], ["take — took — taken", "брать"], ["give — gave — given", "давать"],
            ["write — wrote — written", "писать"], ["eat — ate — eaten", "есть"], ["speak — spoke — spoken", "говорить"], ["break — broke — broken", "ломать"],
            ["know — knew — known", "знать"], ["forget — forgot — forgotten", "забывать"], ["buy — bought — bought", "покупать"], ["find — found — found", "находить"],
            ["lose — lost — lost", "терять"], ["meet — met — met", "встречать"], ["read — read — read", "читать", "все три пишутся одинаково, читаются «рид — рэд — рэд»"], ["fly — flew — flown", "летать"],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильную форму",
          items: [
            ["She ___ finished her work.", ["have", "has", "is"], 1, "She → has."],
            ["I've ___ this book.", ["read", "readed", "red"], 0, "read — read — read."],
            ["Have you ___ my phone?", ["saw", "seen", "see"], 1, "V3 от see — seen."],
            ["They ___ arrived yet.", ["haven't", "hasn't", "didn't"], 0, "They → haven't."],
            ["He's ___ his leg. (сломал — нога сейчас в гипсе)", ["broke", "broken", "break"], 1, "V3 — broken."],
            ["Я потерял ключи (сейчас их нет):", ["I've lost my keys.", "I lost my keys yesterday."], 0, "Результат важен сейчас, время не указано."],
            ["Я потерял ключи вчера:", ["I've lost my keys yesterday.", "I lost my keys yesterday."], 1, "Указано время (yesterday) → Past Simple."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в Present Perfect",
          items: [
            ["I ___ (finish) the report.", "have finished|'ve finished", ""],
            ["She ___ (write) three books.", "has written|'s written", ""],
            ["We ___ (not / decide) yet.", "haven't decided|have not decided", ""],
            ["Have you ___ (eat) anything today?", "eaten", "V3 от eat — eaten."],
            ["He ___ (lose) his wallet.", "has lost|'s lost", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я закончил. (работа готова)", "I've finished.|I have finished.", ""],
            ["Она потеряла телефон.", "She's lost her phone.|She has lost her phone.", "Результат сейчас — Present Perfect."],
            ["Ты видел мои очки?", "Have you seen my glasses?", ""],
            ["Мы ещё не решили.", "We haven't decided yet.|We have not decided yet.", "yet — в конце."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Present Perfect = прошлое действие + **важен результат/опыт сейчас**, время не названо.
- **have/has + V3**. Отрицание haven't/hasn't, вопрос Have you…?
- Назвали время (yesterday, in 2019) → **Past Simple**.`,
        },
      ],
    },
    {
      id: "b1_u1_l2",
      title: "Have you ever…? Опыт: ever, never, been и gone",
      goal: "Вы научитесь спрашивать и рассказывать о жизненном опыте и не будете путать been и gone.",
      steps: [
        {
          t: "text",
          h: "Опыт за всю жизнь",
          md: `Самое частое употребление Present Perfect в разговоре — **жизненный опыт**: «Ты когда-нибудь…?» Время не важно — важно, есть ли такой опыт **на сегодняшний день**.

- [[Have you ever been to Japan?]] — Ты когда-нибудь был в Японии?
- [[I've never tried sushi.]] — Я никогда не пробовал суши.
- [[She has visited 20 countries.]] — Она побывала в 20 странах.
- [[It's the best film I've ever seen.]] — Это лучший фильм, который я когда-либо видел.

**ever** (когда-либо) — в вопросах, ставится перед V3. **never** (никогда) — в утверждениях, уже отрицание (без not).

**Схема разговора:** вопрос об опыте — Present Perfect, детали — **Past Simple** (потому что появляется конкретное время):
- [[Have you ever been to Italy?]] — [[Yes, I have. I went there two years ago.]] — [[Did you like it?]] — [[Yes, I loved it!]]`,
        },
        {
          t: "text",
          h: "been или gone?",
          md: `У глагола go две третьих формы, и смысл у них разный:

- **has gone** — уехал и **сейчас там** (ещё не вернулся): [[Tom has gone to Spain.]] — Том уехал в Испанию (он сейчас в Испании).
- **has been** — был и **вернулся** (опыт): [[Tom has been to Spain.]] — Том бывал в Испании (сейчас он здесь).

[[Where's Anna? — She's gone to the shop.]] — Где Анна? — Ушла в магазин (скоро вернётся).
[[I've been to the shop.]] — Я сходил в магазин (уже вернулся).

> Для опыта «бывал где-то» всегда используйте **been to**: [[I've been to Paris three times.]] «I've gone to Paris three times» — ошибка.`,
        },
        {
          t: "examples",
          h: "Разговор об опыте",
          items: [
            ["Have you ever eaten snails?", "Ты когда-нибудь ел улиток?"],
            ["No, I haven't. Have you?", "Нет. А ты?"],
            ["I've never been abroad.", "Я никогда не был за границей."],
            ["I've met a lot of interesting people in my job.", "На работе я встретил много интересных людей."],
            ["How many times have you been to Moscow?", "Сколько раз ты был в Москве?"],
            ["I've been there twice.", "Я был там дважды."],
            ["She's gone home. She'll be back tomorrow.", "Она ушла домой. Вернётся завтра."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Have you ___ been to China?", ["never", "ever", "yet"], 1, "В вопросе — ever."],
            ["I have ___ seen a ghost.", ["ever", "never", "not"], 1, "Никогда — never."],
            ["— Where's Tom? — He's ___ to the gym.", ["been", "gone"], 1, "Он сейчас там — gone."],
            ["I've ___ to Rome twice.", ["been", "gone"], 0, "Опыт — been."],
            ["Have you ever been to Prague? — Yes, I ___ there last year.", ["have been", "went"], 1, "Конкретное время — Past Simple."],
            ["It's the most delicious cake I've ever ___.", ["ate", "eaten", "eat"], 1, "V3 — eaten."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Ты когда-нибудь был в Лондоне?", "Have you ever been to London?", "been to."],
            ["Я никогда не пробовал индийскую еду.", "I've never tried Indian food.|I have never tried Indian food.|I've never eaten Indian food.", "never — без not."],
            ["Она уехала в командировку.", "She's gone on a business trip.|She has gone on a business trip.", "Сейчас её нет — gone."],
            ["Я был в Италии в 2018 году.", "I was in Italy in 2018.|I went to Italy in 2018.|I visited Italy in 2018.", "Время указано — Past Simple."],
            ["Это лучшая книга, которую я когда-либо читал.", "It's the best book I've ever read.|This is the best book I've ever read.|It is the best book I have ever read.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Опыт: [[Have you ever…?]] [[I've never…]] [[the best… I've ever…]]
- Детали истории — Past Simple.
- **been to** — был и вернулся; **gone to** — уехал и сейчас там.`,
        },
      ],
    },
    {
      id: "b1_u1_l3",
      title: "Разговор о жизненном опыте",
      goal: "Вы сможете поддержать разговор об опыте — поездках, работе, необычных событиях — переключаясь между Present Perfect и Past Simple.",
      steps: [
        {
          t: "text",
          h: "Как переключать времена в разговоре",
          md: `Носители делают это автоматически, и вы научитесь:

1. **Открываете тему** — Present Perfect (опыт вообще):
[[Have you ever had a really strange job?]]
2. **Отвечаете и начинаете историю** — сначала Perfect, затем Past Simple:
[[Yes, I have. When I was a student, I worked as a dog walker.]]
3. **Уточняющие вопросы** — Past Simple (появилось «когда-то тогда»):
[[How long did you do that? Did you enjoy it?]]
4. **Возвращаетесь к итогу «на сегодня»** — Perfect:
[[I've loved dogs ever since.]] — С тех пор я обожаю собак.

**Полезные фразы:**
- [[I've always wanted to…]] — Я всегда хотел…
- [[I've never had the chance to…]] — У меня никогда не было возможности…
- [[That's one of the best things I've ever done.]]
- [[Have you done anything like that?]]`,
        },
        {
          t: "dialog",
          h: "Диалог: на корпоративе",
          lines: [
            ["Sam", "So, have you ever lived abroad?", "Так ты когда-нибудь жила за границей?"],
            ["Irina", "Yes, I have. I lived in Germany for a year after university.", "Да. Я год жила в Германии после университета."],
            ["Sam", "Really? What did you do there?", "Правда? Что ты там делала?"],
            ["Irina", "I worked as an au pair in Munich. It was hard at first, but I learned a lot.", "Работала au pair в Мюнхене. Сначала было трудно, но я многому научилась."],
            ["Sam", "Have you been back since then?", "Ты возвращалась туда с тех пор?"],
            ["Irina", "I've been back twice. The family invited me to their daughter's wedding last summer.", "Дважды. Семья пригласила меня на свадьбу их дочери прошлым летом."],
            ["Sam", "That's lovely! I've never lived anywhere except London.", "Чудесно! А я никогда нигде не жил, кроме Лондона."],
            ["Irina", "You should try it. It's one of the best things I've ever done.", "Тебе стоит попробовать. Это одна из лучших вещей, что я когда-либо делала."],
          ],
          qs: [
            ["Сколько Ирина жила в Германии?", ["Полгода", "Год", "Два года"], 1, "For a year — Past Simple: закончилось."],
            ["Сколько раз она возвращалась?", ["Ни разу", "Дважды", "Каждый год"], 1, "I've been back twice."],
            ["Почему в «I've been back twice» Present Perfect?", ["Указано время", "Опыт на сегодня, время не названо", "Это ошибка"], 1, "Количество раз на сегодняшний день — Perfect."],
          ],
        },
        {
          t: "choice",
          h: "Present Perfect или Past Simple?",
          items: [
            ["I ___ to Paris last year.", ["have been", "went"], 1, "last year — Past Simple."],
            ["___ you ever ___ a famous person?", ["Did / meet", "Have / met"], 1, "Опыт с ever — Perfect."],
            ["I ___ my glasses. Can you help me find them?", ["lost", "have lost"], 1, "Результат сейчас."],
            ["When ___ you start learning English?", ["have", "did"], 1, "When — всегда Past Simple."],
            ["She ___ three novels so far.", ["wrote", "has written"], 1, "so far — пока что, на сегодня → Perfect."],
            ["Shakespeare ___ many plays.", ["wrote", "has written"], 0, "Человек умер, период закрыт — Past Simple."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я всегда хотел научиться играть на гитаре.", "I've always wanted to learn to play the guitar.|I have always wanted to learn to play the guitar.|I've always wanted to learn the guitar.", ""],
            ["Когда ты вернулся?", "When did you come back?|When did you return?|When did you get back?", "When — Past Simple."],
            ["Пока что мы продали сто билетов.", "So far we've sold a hundred tickets.|We've sold a hundred tickets so far.|So far we have sold one hundred tickets.|We have sold 100 tickets so far.|So far we've sold 100 tickets.", "so far — Perfect."],
          ],
        },
        {
          t: "speak",
          h: "Расскажите о своём опыте",
          items: [
            ["I've been to five countries.", "Я был в пяти странах."],
            ["I've never tried skydiving, but I'd love to.", "Я никогда не прыгал с парашютом, но очень хочу."],
            ["The most interesting place I've ever visited is Baikal.", "Самое интересное место, где я был, — Байкал."],
            ["Have you ever done anything crazy?", "Ты когда-нибудь делал что-то безумное?"],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Открываем тему — Perfect (Have you ever…?), детали — Past Simple (When… did you…?), итог — Perfect.
- **When** — всегда Past Simple. **so far** — Perfect. Закрытый период (умерший человек) — Past Simple.

**Говорение:** тема «Жизненный опыт».`,
        },
      ],
    },
  ],
};
