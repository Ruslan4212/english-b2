// Юнит 8: вопросы и порядок слов, like/love + -ing, want to / would like to, рассказ о себе.
export default {
  id: "a1_u8",
  level: "A1",
  phase: 1,
  icon: "🧩",
  title: "Вопросы, вкусы и рассказ о себе",
  about: "Порядок слов в английском предложении, все виды вопросов, like + -ing, want to. Итоговый урок A1: 2 минуты о себе.",
  lessons: [
    {
      id: "a1_u8_l1",
      title: "Порядок слов: жёсткая схема английского предложения",
      goal: "Вы поймёте, почему в английском нельзя переставлять слова как в русском, и будете строить предложения по надёжной схеме.",
      steps: [
        {
          t: "text",
          h: "Почему порядок слов так важен",
          md: `В русском слова можно переставлять почти как угодно: «Мама любит папу», «Папу любит мама», «Любит мама папу» — смысл один, потому что слова меняют окончания.

В английском **окончаний почти нет**, и **кто кого** определяется **местом** в предложении:
- [[The dog bites the man.]] — Собака кусает человека.
- [[The man bites the dog.]] — Человек кусает собаку. (новость дня!)

Поэтому английское утвердительное предложение строится по **жёсткой схеме**:

**Кто — что делает — кого/что — где — когда**
(подлежащее — глагол — дополнение — место — время)

| Кто | Делает | Что | Где | Когда |
|---|---|---|---|---|
| I | play | tennis | in the park | on Sundays. |
| She | met | her friend | at the café | yesterday. |
| We | have | lunch | at work | every day. |`,
        },
        {
          t: "text",
          h: "Правила, которые нарушают русскоговорящие",
          md: `1. **Подлежащее обязательно.** По-русски «Холодно», «Идёт дождь», «Пять часов». По-английски нужен «кто-то»: [[It's cold.]], [[It's raining.]], [[It's five o'clock.]] Формальное подлежащее — **it**.
2. **Глагол обязателен** (вспомните to be).
3. **Не разрывайте глагол и дополнение.** Ошибка: «I like very much coffee». Наречия вроде very much, well, a lot ставятся **после** дополнения: [[I like coffee very much.]], [[She speaks English well.]]
4. **Место — перед временем:** [[I go to the gym every day.]] (не «every day to the gym»). Время можно вынести в начало: [[Every day I go to the gym.]]
5. **Наречия частоты** — перед основным глаголом: [[I often read.]]

> Проверочный вопрос: «Можно ли, глядя на предложение, сразу понять, кто действует и что он делает?» Если подлежащее и глагол в начале — всё в порядке.`,
        },
        {
          t: "text",
          h: "Вопросы: общая схема",
          md: `Почти все английские вопросы строятся по одной формуле — **вспомогательный глагол стоит перед подлежащим**:

**(Вопросительное слово) + вспомогательный + подлежащее + основной глагол + …?**

| Слово | Вспом. | Подлежащее | Глагол | Остальное |
|---|---|---|---|---|
| — | Do | you | like | coffee? |
| Where | do | you | work | ? |
| What time | does | the film | start | ? |
| — | Are | you | — | tired? |
| Why | is | she | — | sad? |
| — | Can | you | swim | ? |

Вспомогательный глагол — это **do/does** (с обычными глаголами), **am/is/are** (to be), **can** (сам себе помощник).

**Вопросительные слова:** what (что), where (где), when (когда), who (кто), why (почему), how (как), which (который), whose (чей), how much / how many (сколько), how often (как часто), how long (как долго), what time (во сколько).`,
        },
        {
          t: "text",
          h: "Вопрос к подлежащему: исключение",
          md: `Если вопрос **про того, кто делает** (who? — кто?, what? — что? в роли подлежащего), **do не нужен** — порядок как в утверждении:

- [[Who lives here?]] — Кто здесь живёт? (не «Who does live here?»)
- [[Who wants coffee?]] — Кто хочет кофе?
- [[What happened?]] — Что случилось?

Сравните:
- [[Who loves Anna?]] — Кто любит Анну? (ответ: Tom loves Anna — спрашиваем о подлежащем, без do)
- [[Who does Anna love?]] — Кого любит Анна? (ответ: Anna loves Tom — спрашиваем о дополнении, с does)`,
        },
        {
          t: "order",
          h: "Соберите предложение в правильном порядке",
          items: [
            ["I play football in the park on Sundays.", "По воскресеньям я играю в футбол в парке."],
            ["She speaks English very well.", "Она очень хорошо говорит по-английски."],
            ["I like coffee very much.", "Я очень люблю кофе."],
            ["What time does the shop open?", "Во сколько открывается магазин?"],
            ["Who lives in this house?", "Кто живёт в этом доме?"],
            ["It is very cold today.", "Сегодня очень холодно."],
          ],
        },
        {
          t: "choice",
          h: "Какой вариант правильный?",
          items: [
            ["", ["I like very much pizza.", "I like pizza very much.", "Very much I like pizza."], 1, "Не разрываем like и pizza."],
            ["", ["Is raining.", "It's raining.", "Raining."], 1, "Нужно подлежащее it."],
            ["", ["Where you work?", "Where do you work?", "Where work you?"], 1, "Слово + do + you + глагол."],
            ["", ["Who does want tea?", "Who wants tea?", "Who want tea?"], 1, "Вопрос к подлежащему — без do, глагол с -s."],
            ["", ["She every day goes to work.", "She goes to work every day.", "She goes every day to work."], 1, "Место перед временем, время в конце."],
            ["", ["What does she like?", "What she likes?", "What likes she?"], 0, "Вопрос к дополнению — с does."],
          ],
        },
        {
          t: "translate",
          h: "Переведите, соблюдая порядок слов",
          items: [
            ["Я очень хорошо готовлю.", "I cook very well.|I'm very good at cooking.", "very well — в конце."],
            ["Каждый вечер я читаю книги.", "I read books every evening.|Every evening I read books.", "Время — в конец или в самое начало."],
            ["Кто знает ответ?", "Who knows the answer?", "Вопрос к подлежащему — без do."],
            ["Почему ты учишь английский?", "Why do you learn English?|Why are you learning English?|Why do you study English?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Схема: **кто — делает — что — где — когда**.
- Подлежащее обязательно (It's cold), глагол и дополнение не разрываем (like coffee very much).
- Вопрос: **(слово) + do/does/am/is/are/can + подлежащее + глагол**.
- Вопрос к подлежащему — без do: [[Who lives here?]]`,
        },
      ],
    },
    {
      id: "a1_u8_l2",
      title: "Like, love, hate + -ing; want to, would like to",
      goal: "Вы научитесь говорить о том, что любите и не любите делать, и о том, что хотите сделать.",
      steps: [
        {
          t: "text",
          h: "Люблю что-то делать: like + -ing",
          md: `Чтобы сказать «я люблю **делать** что-то», после глаголов **like, love, hate, enjoy, don't mind** ставим глагол с окончанием **-ing**:

- [[I like reading.]] — Я люблю читать.
- [[She loves dancing.]] — Она обожает танцевать.
- [[He hates getting up early.]] — Он ненавидит рано вставать.
- [[I enjoy cooking.]] — Мне нравится готовить.
- [[I don't mind waiting.]] — Я не против подождать.

Шкала: love (обожаю) → like (нравится) → don't mind (нормально) → don't like (не нравится) → hate (терпеть не могу).

**Правописание -ing:**
- обычно **+ing**: read → reading, play → playing
- немая **e** выпадает: dance → dancing, make → making
- короткий глагол на согласная-гласная-согласная — **удвоение**: swim → swimming, run → running, sit → sitting

>i С like и love можно сказать и **to + глагол**: I like to read. Разница минимальна. А вот после **enjoy** и **don't mind** — только **-ing**: «I enjoy to cook» — ошибка.`,
        },
        {
          t: "text",
          h: "Хочу сделать: want to и would like to",
          md: `После **want** (хотеть) и **would like** (хотел бы) — **to + глагол**:

- [[I want to learn English.]] — Я хочу выучить английский.
- [[She wants to buy a car.]] — Она хочет купить машину.
- [[I'd like to visit London.]] — Я бы хотел побывать в Лондоне.
- [[Would you like to come with us?]] — Хочешь пойти с нами? (вежливое приглашение)

**Не путайте:**
| Фраза | Значение |
|---|---|
| [[I like swimming.]] | Я люблю плавать (вообще, всегда). |
| [[I'd like to swim.]] | Я бы хотел поплавать (сейчас, сегодня). |
| [[Do you like dancing?]] | Ты любишь танцевать? |
| [[Would you like to dance?]] | Не хотите потанцевать? (приглашение) |

> Ошибка: «I want learn English» (пропущено to), «I would like learning». После want и would like — **to + глагол**.`,
        },
        {
          t: "examples",
          h: "Хобби и свободное время",
          items: [
            ["I like reading detective stories.", "Я люблю читать детективы."],
            ["She enjoys travelling.", "Ей нравится путешествовать."],
            ["We love going to the cinema.", "Мы обожаем ходить в кино."],
            ["He hates doing the washing-up.", "Он ненавидит мыть посуду."],
            ["I don't mind working at the weekend.", "Я не против работать на выходных."],
            ["I want to start running.", "Я хочу начать бегать."],
            ["Would you like to go for a walk?", "Хочешь прогуляться?"],
            ["I'd like to learn to play the guitar.", "Я бы хотел научиться играть на гитаре."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильную форму",
          items: [
            ["I enjoy ___.", ["cook", "cooking", "to cooking"], 1, "После enjoy — только -ing."],
            ["She wants ___ a new job.", ["find", "to find", "finding"], 1, "want + to."],
            ["I'd like ___ a coffee.", ["have", "to have", "having"], 1, "would like + to."],
            ["He loves ___. (плавать)", ["swiming", "swimming", "swim"], 1, "Удвоение: swim → swimming."],
            ["___ to come to my party?", ["Do you like", "Would you like", "Are you like"], 1, "Приглашение — Would you like to…?"],
            ["I don't mind ___.", ["wait", "to wait", "waiting"], 2, "don't mind + -ing."],
            ["make + ing =", ["makeing", "making", "makking"], 1, "Немая e выпадает."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в нужную форму",
          items: [
            ["I love ___ (dance).", "dancing|to dance", "love + -ing (или to)."],
            ["She wants ___ (go) home.", "to go", ""],
            ["We enjoy ___ (travel).", "travelling|traveling", "Брит. travelling, амер. traveling."],
            ["Would you like ___ (eat) something?", "to eat", ""],
            ["He hates ___ (get) up early.", "getting|to get", "get → getting (удвоение)."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я люблю готовить.", "I like cooking.|I love cooking.|I like to cook.|I love to cook.|I enjoy cooking.", ""],
            ["Я хочу выучить английский.", "I want to learn English.", "want + to."],
            ["Не хотите пойти в кино?", "Would you like to go to the cinema?|Would you like to go to the movies?|Do you want to go to the cinema?", "Would you like to…?"],
            ["Она не любит рано вставать.", "She doesn't like getting up early.|She doesn't like to get up early.|She does not like getting up early.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **like / love / hate / enjoy / don't mind + -ing**: I enjoy reading.
- **want / would like + to + глагол**: I want to travel. I'd like to visit Rome.
- [[I like swimming]] — вообще; [[I'd like to swim]] — сейчас хочу.
- Приглашение: [[Would you like to…?]]`,
        },
      ],
    },
    {
      id: "a1_u8_l3",
      title: "Итог A1: две минуты о себе",
      goal: "Вы соберёте всё изученное в связный рассказ о себе, работе и семье на 2 минуты — это критерий контрольной точки A1.",
      steps: [
        {
          t: "text",
          h: "Критерий плана: 2 минуты без подготовки",
          md: `Контрольная точка A1 из плана: **«Можете без подготовки 2 минуты рассказать о себе, работе и семье»**. Сегодня мы соберём такой рассказ из того, что вы уже знаете.

**Структура рассказа (≈ 15–20 предложений):**
1. **Кто я** (юнит 1): имя, возраст, откуда, где живу.
2. **Семья** (юнит 7): кто в ней, как зовут, какие они.
3. **Работа** (юниты 1, 4): кем работаю, где, что делаю, нравится ли.
4. **Мой день** (юнит 4): распорядок, частота.
5. **Дом и город** (юнит 5): где живу, что рядом.
6. **Свободное время** (юниты 6, 8): что люблю, что умею, что хочу.

**Связки, чтобы речь была связной:** [[and]] (и), [[but]] (но), [[because]] (потому что), [[so]] (поэтому), [[also]] (также), [[then]] (потом), [[usually]], [[at the weekend]].`,
        },
        {
          t: "examples",
          h: "Образец рассказа — послушайте целиком",
          items: [
            ["Hi! My name is Elena and I'm thirty-four.", "Привет! Меня зовут Елена, мне 34."],
            ["I'm from Russia and I live in Kazan with my family.", "Я из России и живу в Казани с семьёй."],
            ["I'm married and I have a son. His name is Artem and he's eight.", "Я замужем, у меня есть сын. Его зовут Артём, ему восемь."],
            ["My husband is an engineer. He's very kind and funny.", "Мой муж — инженер. Он очень добрый и весёлый."],
            ["I'm an accountant. I work for a big company in the city centre.", "Я бухгалтер. Работаю в большой компании в центре."],
            ["I like my job because my colleagues are nice, but sometimes it's boring.", "Мне нравится работа, потому что коллеги приятные, но иногда скучно."],
            ["I usually get up at seven and I go to work by metro.", "Обычно я встаю в семь и езжу на работу на метро."],
            ["We live in a flat. There are three rooms and there's a park near our house.", "Мы живём в квартире. Там три комнаты, а рядом с домом парк."],
            ["In my free time I like reading and walking in the park.", "В свободное время я люблю читать и гулять в парке."],
            ["I can swim, but I can't ski.", "Я умею плавать, но не умею кататься на лыжах."],
            ["I want to speak English well because I'd like to travel.", "Я хочу хорошо говорить по-английски, потому что хочу путешествовать."],
          ],
        },
        {
          t: "choice",
          h: "Найдите ошибку: какой вариант правильный?",
          intro: "Типичные ошибки A1 — проверьте, что вы их больше не делаете.",
          items: [
            ["", ["I am engineer.", "I am an engineer.", "I engineer."], 1, "Профессия: to be + an."],
            ["", ["She work in a bank.", "She works in a bank.", "She is work in a bank."], 1, "he/she → -s, без is."],
            ["", ["I have 30 years.", "I am 30.", "Me 30 years."], 1, "Возраст — to be."],
            ["", ["I don't like to read.", "I not like reading.", "I am not like reading."], 0, "Отрицание с обычным глаголом — don't."],
            ["", ["In my city is a big park.", "There is a big park in my city.", "My city there is a big park."], 1, "There is + что + где."],
            ["", ["I like very much music.", "I like music very much.", "I very much like music."], 1, "very much — после дополнения."],
            ["", ["Where you live?", "Where do you live?", "Where are you live?"], 1, "Вопрос с do."],
            ["", ["I want learn English.", "I want to learn English.", "I want learning English."], 1, "want + to."],
          ],
        },
        {
          t: "translate",
          h: "Скажите о себе: переведите",
          items: [
            ["Я живу в Москве с женой и дочерью.", "I live in Moscow with my wife and daughter.|I live in Moscow with my wife and my daughter.", "with my wife — притяжательное обязательно."],
            ["Моя работа интересная, но иногда трудная.", "My job is interesting but sometimes difficult.|My job is interesting, but sometimes it's difficult.|My job is interesting but sometimes it is difficult.|My work is interesting, but sometimes difficult.|My job is interesting, but sometimes hard.", ""],
            ["На выходных я обычно встречаюсь с друзьями.", "At the weekend I usually meet my friends.|I usually meet my friends at the weekend.|On the weekend I usually meet my friends.|I usually meet friends at the weekend.|At the weekend I usually meet friends.", "usually — перед глаголом."],
            ["Я хочу хорошо говорить по-английски.", "I want to speak English well.|I want to speak good English.", "well — в конце."],
          ],
        },
        {
          t: "text",
          h: "Ваш рассказ: как тренироваться",
          md: `1. **Напишите** свой рассказ по структуре (15–20 предложений) — можно в разделе «✍️ Письмо», ИИ проверит.
2. **Прочитайте вслух** 3 раза.
3. **Перескажите без текста**, глядя только на 6 пунктов структуры.
4. **Запишите голос** в разделе «🎙 Запись голоса» и засеките время. Цель — 2 минуты без длинных пауз.
5. **Расскажите** Мии в звонке (тема «Знакомство») — она задаст уточняющие вопросы.

>i Не стремитесь к идеалу. На A1 допустимы ошибки — главное, чтобы вас понимали и вы не останавливались. Если забыли слово — скажите проще или опишите: «the thing for… », «a man who…».`,
        },
        {
          t: "speak",
          h: "Произнесите ключевые фразы своего рассказа",
          items: [
            ["Let me tell you about myself.", "Позвольте рассказать о себе."],
            ["I'm married and I have two children.", "Я женат, у меня двое детей."],
            ["I work for an IT company.", "Я работаю в IT-компании."],
            ["In my free time I like travelling.", "В свободное время я люблю путешествовать."],
            ["That's all about me. What about you?", "Это всё обо мне. А как насчёт вас?"],
          ],
        },
        {
          t: "text",
          h: "Фаза A1: что дальше",
          md: `Поздравляем — основной курс A1 пройден! До контрольной точки (конец месяца 3) в плане остаются дни повторения: уроки-повторения, карточки, слушание, разговоры.

**Проверьте себя по критериям плана:**
- 2 минуты рассказа о себе, работе и семье;
- понимание медленных диалогов курса без текста;
- одна прочитанная книга уровня Beginner;
- около 700 слов в Anki и ≥ 85% верных ответов.

Впереди фаза **A2 «Базовое общение»**: прошедшее время, планы на будущее, сравнения, модальные глаголы и первые рабочие ситуации.`,
        },
      ],
    },
  ],
};
