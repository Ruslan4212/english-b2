// A2 юнит 1: прошедшее время — was/were и правильные глаголы, did в отрицаниях и вопросах.
export default {
  id: "a2_u1",
  level: "A2",
  phase: 2,
  icon: "⏪",
  title: "Past Simple: что было вчера",
  about: "was/were, правильные глаголы с -ed и их произношение, отрицания и вопросы с did.",
  lessons: [
    {
      id: "a2_u1_l1",
      title: "Was и were: я был, мы были",
      goal: "Вы научитесь говорить о прошлом с глаголом to be: где были, каким было, сколько лет было.",
      steps: [
        {
          t: "text",
          h: "Прошедшее время глагола to be",
          md: `Вы уже знаете, что **to be** нужен там, где в русском нет глагола: «я устал», «она дома». В прошедшем времени у русского появляется «был/была/были», а у английского — **was** и **were**:

| Настоящее | Прошедшее |
|---|---|
| I **am** | I **was** |
| he / she / it **is** | he / she / it **was** |
| you / we / they **are** | you / we / they **were** |

Правило простое: **am и is → was**, **are → were**.

- [[I was tired yesterday.]] — Вчера я устал (был уставшим).
- [[She was at home.]] — Она была дома.
- [[We were in Spain last summer.]] — Прошлым летом мы были в Испании.
- [[It was cold.]] — Было холодно.
- [[The film was great!]] — Фильм был отличный!

> Не забывайте подлежащее: «Было холодно» — [[It was cold.]], «Было здорово» — [[It was great.]] Без it нельзя.`,
        },
        {
          t: "text",
          h: "Отрицания и вопросы",
          md: `Работают точно так же, как с am/is/are:

**Отрицание:** was not = **wasn't**, were not = **weren't**
- [[I wasn't at work yesterday.]] — Вчера меня не было на работе.
- [[They weren't happy.]] — Они не были довольны.

**Вопрос:** was/were выходит вперёд
- [[Were you at home last night?]] — Ты был дома вчера вечером? → [[Yes, I was. / No, I wasn't.]]
- [[Was it expensive?]] — Это было дорого?
- [[Where were you?]] — Где ты был?
- [[How was your weekend?]] — Как прошли выходные?
- [[What was the weather like?]] — Какая была погода?

**Полезные выражения:**
- [[I was born in 1990.]] — Я родился в 1990. (дословно «я был рождён»)
- [[There was a problem.]] / [[There were a lot of people.]] — была проблема / было много людей (there is → there was, there are → there were).`,
        },
        {
          t: "text",
          h: "Слова-маркеры прошлого",
          md: `| Маркер | Значение |
|---|---|
| [[yesterday]] | вчера |
| [[yesterday morning / evening]] | вчера утром / вечером |
| [[last night]] | вчера вечером, прошлой ночью |
| [[last week / month / year]] | на прошлой неделе / в прошлом месяце / году |
| [[last Monday]] | в прошлый понедельник (без on!) |
| [[two days ago]] | два дня назад |
| [[in 2015]] | в 2015 году |
| [[when I was a child]] | когда я был ребёнком |

> **ago** ставится **после** периода: [[three years ago]] (не «ago three years»). И **last** без предлога: [[last Friday]] (не «on last Friday»).`,
        },
        {
          t: "choice",
          h: "was или were?",
          items: [
            ["I ___ tired.", ["was", "were"], 0, "I → was."],
            ["They ___ at the party.", ["was", "were"], 1, "They → were."],
            ["___ you at work yesterday?", ["Was", "Were"], 1, "You → were."],
            ["The weather ___ terrible.", ["was", "were"], 0, "The weather = it → was."],
            ["There ___ a lot of people.", ["was", "were"], 1, "People — много → were."],
            ["My parents ___ teachers.", ["was", "were"], 1, "Parents — много."],
            ["Where ___ she born?", ["was", "were"], 0, "She → was."],
            ["Как сказать «три дня назад»?", ["ago three days", "three days ago", "before three days"], 1, "ago — после периода."],
          ],
        },
        {
          t: "fill",
          h: "Вставьте was, were, wasn't или weren't",
          items: [
            ["I ___ at home last night. I was at the cinema.", "wasn't|was not", "Второе предложение показывает — дома не был."],
            ["How ___ your holiday?", "was", ""],
            ["We ___ late because of the traffic.", "were", ""],
            ["It ___ expensive. It was very cheap.", "wasn't|was not", ""],
            ["___ there any problems?", "Were|were", "Problems — много → Were there."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Вчера было холодно.", "It was cold yesterday.|Yesterday it was cold.|Yesterday was cold.", "Подлежащее it."],
            ["Где ты был вчера вечером?", "Where were you last night?|Where were you yesterday evening?", ""],
            ["Я родился в Самаре.", "I was born in Samara.", "was born."],
            ["Фильм был не очень интересный.", "The film wasn't very interesting.|The film was not very interesting.|The movie wasn't very interesting.", ""],
            ["Как прошли выходные?", "How was your weekend?|How was the weekend?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- am/is → **was**, are → **were**. Отрицание wasn't/weren't, вопрос Was/Were…?
- there was / there were; I was born.
- Маркеры: yesterday, last week, two days ago, in 2015.`,
        },
      ],
    },
    {
      id: "a2_u1_l2",
      title: "Правильные глаголы: worked, played, studied",
      goal: "Вы научитесь говорить, что делали в прошлом, с правильными глаголами и произносить окончание -ed как носители.",
      steps: [
        {
          t: "text",
          h: "Past Simple: одно окончание для всех",
          md: `**Past Simple** — время для действий, которые **произошли и закончились в прошлом**: вчера, в прошлом году, когда-то.

Хорошая новость: в прошедшем времени **нет -s для he/she** и вообще форма **одна для всех лиц**. У **правильных** глаголов просто добавляется **-ed**:

- [[I worked yesterday.]] — Я работал вчера.
- [[She worked yesterday.]] — Она работала вчера. (никакого -s!)
- [[We watched a film.]] — Мы посмотрели фильм.
- [[They played football.]] — Они играли в футбол.

>i По-русски у прошлого есть род и число: работал, работала, работали. В английском — одна форма **worked** для всех. Проще!

Правильных глаголов — большинство. Неправильные (go → went, see → saw) — в следующем юните.`,
        },
        {
          t: "text",
          h: "Правописание -ed",
          md: `| Правило | Пример |
|---|---|
| Обычно **+ed** | work → worked, play → played, watch → watched |
| Кончается на **e** → **+d** | live → lived, like → liked, dance → danced |
| Согласная + **y** → **ied** | study → studied, try → tried (но play → played) |
| Короткий глагол: согласная-гласная-согласная → **удвоение** | stop → stopped, plan → planned, travel → travelled (брит.) |`,
        },
        {
          t: "text",
          h: "Произношение -ed: три варианта",
          md: `Это важно: окончание **-ed не читается как «ед»** в большинстве случаев!

| Звук | Когда | Примеры |
|---|---|---|
| **[t]** | после глухих звуков: p, k, f, s, sh, ch | [[worked]] «уёркт», [[stopped]] «стопт», [[watched]] «уотчт», [[finished]] |
| **[d]** | после звонких и гласных | [[played]] «плэйд», [[lived]] «ливд», [[called]], [[opened]] |
| **[ɪd]** | только после **t** и **d** | [[wanted]] «уонтид», [[needed]] «нидид», [[started]], [[decided]] |

> Ошибка: «уорк-ед», «плей-ед». Лишний слог есть **только после t и d**: wanted, needed. Все остальные — одним слогом: worked, played, lived.`,
        },
        {
          t: "examples",
          h: "Послушайте разницу в произношении",
          items: [
            ["I worked late yesterday.", "Вчера я допоздна работал.", "[t]"],
            ["She watched TV all evening.", "Она весь вечер смотрела телевизор.", "[t]"],
            ["We played tennis on Saturday.", "В субботу мы играли в теннис.", "[d]"],
            ["They lived in Berlin for two years.", "Они два года жили в Берлине.", "[d]"],
            ["He called me last night.", "Он позвонил мне вчера вечером.", "[d]"],
            ["I wanted to help.", "Я хотел помочь.", "[ɪd]"],
            ["The film started at eight.", "Фильм начался в восемь.", "[ɪd]"],
            ["She studied English at school.", "Она учила английский в школе."],
          ],
        },
        {
          t: "choice",
          h: "Как читается окончание?",
          items: [
            ["worked", ["[t]", "[d]", "[ɪd]"], 0, "После глухого k — [t]."],
            ["played", ["[t]", "[d]", "[ɪd]"], 1, "После гласного — [d]."],
            ["needed", ["[t]", "[d]", "[ɪd]"], 2, "После d — [ɪd], лишний слог."],
            ["stopped", ["[t]", "[d]", "[ɪd]"], 0, "После p — [t]."],
            ["started", ["[t]", "[d]", "[ɪd]"], 2, "После t — [ɪd]."],
            ["opened", ["[t]", "[d]", "[ɪd]"], 1, "После n — [d]."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в Past Simple",
          items: [
            ["I ___ (watch) a great film yesterday.", "watched", ""],
            ["She ___ (study) in London.", "studied", "y → ied."],
            ["We ___ (stop) at a café.", "stopped", "Удвоение."],
            ["They ___ (live) in Kiev.", "lived", "e → +d."],
            ["He ___ (play) the guitar at the party.", "played", "Гласная перед y — просто +ed."],
            ["The meeting ___ (start) at ten.", "started", ""],
            ["I ___ (plan) a trip to Italy.", "planned", "Удвоение."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Вчера я работал до восьми.", "Yesterday I worked until eight.|I worked until eight yesterday.|I worked till eight yesterday.|Yesterday I worked till eight.", ""],
            ["Она позвонила мне два дня назад.", "She called me two days ago.|She phoned me two days ago.|She rang me two days ago.", "Одна форма для всех лиц."],
            ["Мы посмотрели фильм.", "We watched a film.|We watched a movie.", ""],
            ["Я хотел купить новый телефон.", "I wanted to buy a new phone.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Past Simple — законченное действие в прошлом. **Одна форма для всех**: I/she/they worked.
- +ed / +d / y→ied / удвоение.
- Произношение: [t] worked, [d] played, [ɪd] — только после t/d: wanted.`,
        },
      ],
    },
    {
      id: "a2_u1_l3",
      title: "I didn't work. Did you work? — отрицания и вопросы",
      goal: "Вы научитесь говорить, чего не делали, и спрашивать о прошлом с помощью did.",
      steps: [
        {
          t: "text",
          h: "Помощник did — прошедшая форма do",
          md: `Помните помощника **do/does** в Present Simple? В прошедшем времени у него одна форма для всех — **did**.

**Отрицание:** did not = **didn't** + глагол в **словарной** форме
- [[I didn't work yesterday.]] — Вчера я не работал.
- [[She didn't call me.]] — Она мне не позвонила.

**Вопрос:** **Did** + кто + глагол в словарной форме
- [[Did you work yesterday?]] — Ты работал вчера? → [[Yes, I did. / No, I didn't.]]
- [[Where did you go?]] — Куда ты ходил?
- [[What did she say?]] — Что она сказала?

> **Главное правило:** прошедшее время показывает **did**, поэтому глагол после него — **без -ed** и в словарной форме. Ошибки: «I didn't worked», «Did you watched?». Одно прошедшее на предложение — либо в глаголе (worked), либо в did.`,
        },
        {
          t: "text",
          h: "Но не с was/were!",
          md: `**To be** в прошедшем (was/were) не нуждается в did — он сам себе помощник:

| С to be | С обычным глаголом |
|---|---|
| [[I wasn't tired.]] | [[I didn't sleep.]] |
| [[Were you at home?]] | [[Did you stay at home?]] |
| [[Where were you?]] | [[Where did you go?]] |

Проверка: есть ли в предложении глагол-действие (go, work, see…)? Да → did. Нет («был где-то, каким-то») → was/were.

**Вопрос к подлежащему** — тоже без did: [[Who called you?]] — Кто тебе звонил? [[What happened?]] — Что случилось?`,
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["I ___ the email.", ["didn't send", "didn't sent", "not sent"], 0, "После didn't — словарная форма."],
            ["___ you like the film?", ["Did", "Were", "Do"], 0, "Прошлое, глагол like → Did."],
            ["Did she ___ you?", ["called", "call", "calls"], 1, "После did — call."],
            ["___ you tired yesterday?", ["Did", "Were", "Was"], 1, "Нет глагола-действия → Were."],
            ["Where ___ you go on holiday?", ["did", "were", "was"], 0, "Глагол go → did."],
            ["Who ___ the window?", ["did open", "opened", "did opened"], 1, "Вопрос к подлежащему — без did."],
            ["Did you see him? — No, I ___.", ["didn't", "wasn't", "don't"], 0, "Краткий ответ: No, I didn't."],
          ],
        },
        {
          t: "fill",
          h: "Сделайте отрицание или вопрос",
          items: [
            ["I watched TV. → I ___ watch TV.", "didn't|did not", ""],
            ["She liked it. → ___ she like it?", "Did|did", ""],
            ["They played well. → They didn't ___ well.", "play", "Словарная форма."],
            ["You were late. → ___ you late?", "Were|were", "To be — без did."],
            ["He called. → What time ___ he call?", "did", ""],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: понедельник в офисе",
          lines: [
            ["Kate", "Hi, Tom! Did you have a good weekend?", "Привет, Том! Хорошо провёл выходные?"],
            ["Tom", "Yes, thanks. I visited my parents in the country.", "Да, спасибо. Навещал родителей за городом."],
            ["Kate", "Nice! Did you stay there all weekend?", "Здорово! Ты был там все выходные?"],
            ["Tom", "No, I didn't. I returned on Saturday evening because I wanted to watch the football.", "Нет. Вернулся в субботу вечером, потому что хотел посмотреть футбол."],
            ["Kate", "Was it a good match?", "Хороший был матч?"],
            ["Tom", "No, it wasn't. Our team played really badly. What about you?", "Нет. Наша команда играла очень плохо. А ты?"],
            ["Kate", "I didn't do much. I cleaned the flat and cooked a big dinner for my friends.", "Ничего особенного. Убрала квартиру и приготовила большой ужин для друзей."],
          ],
          qs: [
            ["Почему Том вернулся в субботу?", ["Работа", "Хотел посмотреть футбол", "Плохая погода"], 1, "I wanted to watch the football."],
            ["Что делала Кейт?", ["Ездила к родителям", "Убирала и готовила ужин", "Смотрела футбол"], 1, "I cleaned the flat and cooked a big dinner."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я не звонил ей.", "I didn't call her.|I did not call her.|I didn't phone her.", "didn't + call."],
            ["Ты закончил отчёт?", "Did you finish the report?", ""],
            ["Где вы жили в детстве?", "Where did you live when you were a child?|Where did you live as a child?|Where did you live in your childhood?", "did + live; were — to be."],
            ["Что случилось?", "What happened?", "Вопрос к подлежащему — без did."],
            ["Тебе понравился концерт?", "Did you like the concert?|Did you enjoy the concert?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Отрицание: **didn't + словарная форма** (I didn't work).
- Вопрос: **Did + кто + словарная форма** (Did you work?) · Where did you go?
- To be: wasn't / Were you…? — без did.
- Вопрос к подлежащему — без did: [[Who called?]] [[What happened?]]

**Говорение:** тема «Прошлые выходные» — расскажите, что делали и чего не делали.`,
        },
      ],
    },
  ],
};
