// A2 юнит 2: неправильные глаголы, рассказ о прошлом, связки последовательности.
export default {
  id: "a2_u2",
  level: "A2",
  phase: 2,
  icon: "📜",
  title: "Неправильные глаголы и истории о прошлом",
  about: "30 самых частых неправильных глаголов, как рассказать историю по порядку, путешествия.",
  lessons: [
    {
      id: "a2_u2_l1",
      title: "Неправильные глаголы: went, saw, had",
      goal: "Вы выучите 30 самых частых неправильных глаголов в прошедшем времени и научитесь их использовать.",
      steps: [
        {
          t: "text",
          h: "Что такое неправильные глаголы",
          md: `Около 150 английских глаголов образуют прошедшее время **не через -ed**, а по-своему: **go → went**, **see → saw**. Их называют **неправильными** (irregular verbs).

Плохая новость: их нужно учить наизусть. Хорошая: **самых частых — около 30**, и они встречаются в речи постоянно, поэтому запоминаются быстро.

**Важно:** неправильная форма нужна **только в утверждении**. В отрицаниях и вопросах работает **did**, и глагол возвращается к словарной форме:
- [[I went to Paris.]] — Я ездил в Париж.
- [[I didn't go to Paris.]] — Я не ездил в Париж. (не «didn't went»!)
- [[Did you go to Paris?]] — Ты ездил в Париж?

>i В словарях неправильные глаголы даются тремя формами: go — went — gone. Вторая (went) — это Past Simple. Третья (gone) понадобится в фазе B1 для Present Perfect. Сейчас учим первые две.`,
        },
        {
          t: "examples",
          h: "Группа 1: самые частые (повторяйте вслух парами)",
          items: [
            ["be — was / were", "быть"], ["have — had", "иметь"], ["do — did", "делать"], ["go — went", "идти, ехать"], ["say — said", "сказать", "читается «сэд»"],
            ["get — got", "получать, добираться"], ["make — made", "делать, создавать"], ["know — knew", "знать", "«нью»"], ["think — thought", "думать", "«соот» с th"], ["take — took", "брать"],
            ["see — saw", "видеть"], ["come — came", "приходить"],
          ],
        },
        {
          t: "examples",
          h: "Группа 2",
          items: [
            ["give — gave", "давать"], ["find — found", "находить"], ["tell — told", "рассказывать"], ["feel — felt", "чувствовать"], ["leave — left", "уходить, оставлять"],
            ["buy — bought", "покупать", "«боот»"], ["bring — brought", "приносить", "«броот»"], ["eat — ate", "есть", "«эйт» или «эт»"], ["drink — drank", "пить"], ["meet — met", "встречать"],
            ["write — wrote", "писать"], ["read — read", "читать", "пишется так же, читается «рэд»"], ["speak — spoke", "говорить"], ["sleep — slept", "спать"], ["pay — paid", "платить"],
            ["begin — began", "начинать"], ["lose — lost", "терять"], ["spend — spent", "тратить, проводить время"],
          ],
        },
        {
          t: "text",
          h: "Как запоминать",
          md: `1. **Группируйте по звучанию:** think → **thought**, buy → **bought**, bring → **brought** (все на «-оот»); sleep → slept, feel → felt, leave → left, meet → met (короткое «е»).
2. **Учите в фразах**, а не списком: [[I went to the shop and bought some bread.]] — запоминаются сразу два глагола.
3. **Говорите о своём дне** каждый вечер 3–4 предложениями: что ели, кого видели, куда ходили.
4. Все глаголы этого урока уже добавятся в карточки как фразы.

> **read — read**: пишется одинаково, но в прошедшем читается «рэд» (как red). [[I read a book yesterday]] — «ай рэд».`,
        },
        {
          t: "choice",
          h: "Выберите прошедшую форму",
          items: [
            ["go →", ["goed", "went", "gone"], 1, "go — went."],
            ["buy →", ["bought", "buyed", "brought"], 0, "buy — bought (bring — brought)."],
            ["see →", ["seed", "saw", "seen"], 1, "see — saw."],
            ["take →", ["taked", "took", "token"], 1, "take — took."],
            ["think →", ["thinked", "thought", "thank"], 1, "think — thought."],
            ["I didn't ___ him.", ["saw", "see", "seen"], 1, "После didn't — словарная форма."],
            ["Did you ___ a good time?", ["had", "have", "has"], 1, "После did — have."],
            ["She ___ me a present.", ["gived", "gave", "give"], 1, "give — gave."],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глагол в Past Simple",
          items: [
            ["Yesterday I ___ (go) to the gym.", "went", ""],
            ["We ___ (eat) pizza for dinner.", "ate", ""],
            ["She ___ (say) nothing.", "said", ""],
            ["I ___ (lose) my keys again!", "lost", ""],
            ["They ___ (meet) at university.", "met", ""],
            ["He ___ (write) a long email.", "wrote", ""],
            ["I ___ (spend) a lot of money last month.", "spent", ""],
            ["Did you ___ (find) your phone?", "find", "После did — словарная форма."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я купил новую куртку.", "I bought a new jacket.", "buy — bought."],
            ["Вчера мы ходили в кино.", "Yesterday we went to the cinema.|We went to the cinema yesterday.|We went to the movies yesterday.|Yesterday we went to the movies.", ""],
            ["Я не видел его на прошлой неделе.", "I didn't see him last week.|I did not see him last week.", "didn't + see."],
            ["Что ты ел на завтрак?", "What did you eat for breakfast?|What did you have for breakfast?", "did + eat."],
            ["Она сказала, что занята.", "She said she was busy.|She said that she was busy.", "say — said; в прошлом и is → was."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Неправильные глаголы: прошедшая форма — наизусть (went, saw, had, bought, thought…).
- Только в утверждении! В отрицании и вопросе — did + словарная форма.
- Учите группами по звучанию и в фразах. Каждый вечер — 3 предложения о прошедшем дне.`,
        },
      ],
    },
    {
      id: "a2_u2_l2",
      title: "Как рассказать историю: first, then, after that",
      goal: "Вы научитесь рассказывать о событии по порядку, связно и интересно — как в разговоре с другом.",
      steps: [
        {
          t: "text",
          h: "Связки последовательности",
          md: `Чтобы рассказ не был набором отдельных фраз, используйте **связки**:

| Связка | Значение |
|---|---|
| [[First,]] / [[At first,]] | Сначала |
| [[Then]] / [[After that]] / [[Next]] | Потом / После этого / Затем |
| [[Later]] | Позже |
| [[Suddenly]] | Вдруг |
| [[Finally]] / [[In the end]] | Наконец / В итоге |
| [[When]] + действие | Когда… |
| [[because]] | потому что |
| [[so]] | поэтому, так что |
| [[but]] | но |
| [[luckily]] / [[unfortunately]] | к счастью / к сожалению |

> **At first** — «сначала было так, а потом изменилось»: [[At first I didn't like it, but then I loved it.]] **First** — «первым делом» в списке действий: [[First, we had breakfast. Then we went to the beach.]]`,
        },
        {
          t: "text",
          h: "Структура хорошей истории",
          md: `1. **Когда и где** (фон): [[Last summer I was in Turkey with my friends.]]
2. **Что произошло** (события по порядку): [[First… Then… Suddenly…]]
3. **Чем закончилось**: [[In the end… / Finally…]]
4. **Ваши чувства, оценка**: [[It was amazing! / It was a disaster!]]

**Фразы-реакции слушателя** — чтобы поддерживать разговор, когда рассказывают вам:
- [[Really?]] — Правда?
- [[Oh no!]] — О нет!
- [[What happened next?]] — И что было дальше?
- [[That's amazing!]] — Потрясающе!
- [[Lucky you!]] — Повезло тебе!
- [[What a pity!]] — Как жаль!`,
        },
        {
          t: "examples",
          h: "Образец истории — послушайте",
          items: [
            ["Last Saturday I went to the mountains with my friend.", "В прошлую субботу я ездил в горы с другом."],
            ["First, we took a train to a small village.", "Сначала мы доехали на поезде до маленькой деревни."],
            ["Then we walked for about three hours.", "Потом мы шли около трёх часов."],
            ["The weather was beautiful and we took a lot of photos.", "Погода была прекрасная, и мы сделали много фото."],
            ["Suddenly it started to rain.", "Вдруг пошёл дождь."],
            ["Luckily, we found a small café and had hot tea there.", "К счастью, мы нашли маленькое кафе и выпили там горячего чаю."],
            ["In the end, we got home very late, but we were happy.", "В итоге мы вернулись домой очень поздно, но были счастливы."],
          ],
        },
        {
          t: "order",
          h: "Расставьте части истории по порядку: соберите фразы",
          items: [
            ["First we had breakfast at the hotel.", "Сначала мы позавтракали в отеле."],
            ["Then we went to the old town.", "Потом мы пошли в старый город."],
            ["Suddenly I lost my phone.", "Вдруг я потерял телефон."],
            ["In the end a kind man found it.", "В итоге его нашёл добрый человек."],
          ],
        },
        {
          t: "choice",
          h: "Выберите связку",
          items: [
            ["___ I didn't like sushi, but now I love it.", ["First", "At first", "Finally"], 1, "Сначала было так, потом изменилось — At first."],
            ["I was tired, ___ I went to bed early.", ["because", "so", "but"], 1, "Следствие — so."],
            ["I went to bed early ___ I was tired.", ["because", "so", "then"], 0, "Причина — because."],
            ["We waited for an hour. ___, the bus came.", ["Suddenly", "Finally", "First"], 1, "Долго ждали и наконец — Finally."],
            ["Друг рассказывает: «I lost my wallet.» Ваша реакция:", ["Lucky you!", "Oh no!", "That's amazing!"], 1, "Сочувствие — Oh no!"],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Сначала мы пошли в музей, потом пообедали.", "First we went to the museum, then we had lunch.|First, we went to the museum. Then we had lunch.|First we went to the museum and then we had lunch.", ""],
            ["Вдруг зазвонил телефон.", "Suddenly the phone rang.|Suddenly my phone rang.", "ring — rang."],
            ["К сожалению, мы опоздали на поезд.", "Unfortunately, we missed the train.|Unfortunately we missed the train.|Unfortunately, we were late for the train.", "Опоздать на поезд — miss the train."],
            ["И что было дальше?", "What happened next?|What happened then?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Связки: first, then, after that, suddenly, finally, in the end; because / so / but; luckily / unfortunately.
- Структура: фон → события → финал → оценка.
- Реакции: Really? Oh no! What happened next? Lucky you!

**Письмо в четверг:** напишите историю о поездке или запомнившемся дне (80–100 слов).`,
        },
      ],
    },
    {
      id: "a2_u2_l3",
      title: "Путешествия: аэропорт, отель, впечатления",
      goal: "Вы сможете справиться с типичными ситуациями в поездке и рассказать о путешествии в прошедшем времени.",
      steps: [
        {
          t: "examples",
          h: "В аэропорту",
          items: [
            ["Where is the check-in desk?", "Где стойка регистрации?"],
            ["Can I see your passport, please?", "Ваш паспорт, пожалуйста."],
            ["How many bags are you checking in?", "Сколько сумок сдаёте в багаж?"],
            ["Window or aisle seat?", "Место у окна или у прохода?"],
            ["The flight is delayed.", "Рейс задерживается."],
            ["Boarding starts at gate twelve.", "Посадка у выхода номер двенадцать."],
            ["I missed my connecting flight.", "Я опоздал на пересадку."],
            ["My luggage didn't arrive.", "Мой багаж не прибыл."],
          ],
        },
        {
          t: "examples",
          h: "В отеле",
          items: [
            ["I have a reservation in the name of Petrov.", "У меня бронь на имя Петров."],
            ["What time is check-out?", "Во сколько выезд?"],
            ["Is breakfast included?", "Завтрак включён?"],
            ["The air conditioning doesn't work.", "Кондиционер не работает."],
            ["Could I have another towel, please?", "Можно ещё одно полотенце?"],
            ["Can you call a taxi for me?", "Вы можете вызвать мне такси?"],
            ["Can I leave my luggage here?", "Можно оставить здесь багаж?"],
          ],
        },
        {
          t: "text",
          h: "Как рассказать о поездке",
          md: `Вопросы, которые вам зададут после отпуска, — и шаблоны ответов:

| Вопрос | Ответ |
|---|---|
| [[Where did you go?]] | [[I went to Georgia / to the seaside / to the mountains.]] |
| [[Who did you go with?]] | [[I went with my family / alone.]] |
| [[How long did you stay?]] | [[For two weeks.]] |
| [[Where did you stay?]] | [[In a hotel / in an apartment / with friends.]] |
| [[What did you do there?]] | [[We went sightseeing / swam in the sea / tried local food.]] |
| [[What was the weather like?]] | [[It was sunny and hot.]] |
| [[What was the best thing?]] | [[The best thing was…]] |
| [[Did you have a good time?]] | [[Yes, it was amazing! / It was OK, but…]] |

**Глаголы путешествий:** travel (путешествовать), fly — flew (лететь), stay (останавливаться), visit (посещать), go sightseeing (осматривать достопримечательности), take photos (фотографировать), try local food (пробовать местную еду), book (бронировать), pack (собирать вещи).

> **go to** + место: go to Spain, go to the beach. Но **go home** (без to), и **visit** без предлога: [[I visited Rome.]] (не «visited to Rome»).`,
        },
        {
          t: "dialog",
          h: "Диалог: после отпуска",
          lines: [
            ["Anna", "Welcome back! How was your holiday?", "С возвращением! Как отпуск?"],
            ["Igor", "It was fantastic, thanks! We went to Sri Lanka.", "Фантастика, спасибо! Мы ездили на Шри-Ланку."],
            ["Anna", "Wow! How long did you stay?", "Ого! Надолго?"],
            ["Igor", "Twelve days. We spent a week at the beach and then we travelled around the island.", "Двенадцать дней. Неделю провели на пляже, потом ездили по острову."],
            ["Anna", "What was the best thing?", "Что было самое лучшее?"],
            ["Igor", "We saw elephants in a national park. It was incredible! But the flight was terrible — it was delayed for six hours.", "Мы видели слонов в нацпарке. Невероятно! Но перелёт был ужасный — задержали на шесть часов."],
            ["Anna", "Oh no! But it sounds worth it.", "О нет! Но, похоже, оно того стоило."],
          ],
          qs: [
            ["Сколько дней длилась поездка?", ["7", "12", "6"], 1, "Twelve days."],
            ["Что было лучшим?", ["Пляж", "Слоны в нацпарке", "Перелёт"], 1, "We saw elephants."],
            ["Что было плохого?", ["Отель", "Задержка рейса на 6 часов", "Погода"], 1, "The flight was delayed for six hours."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["У меня бронь на имя Иванов.", "I have a reservation in the name of Ivanov.|I have a booking in the name of Ivanov.|I've got a reservation in the name of Ivanov.", ""],
            ["Мы провели неделю в Италии.", "We spent a week in Italy.", "spend — spent."],
            ["Рейс задержали на два часа.", "The flight was delayed for two hours.|The flight was delayed by two hours.", ""],
            ["Мы посетили много музеев.", "We visited a lot of museums.|We visited many museums.", "visit — без предлога."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Аэропорт: check-in, gate, delayed, aisle/window seat, luggage.
- Отель: reservation, check-out, Is breakfast included? … doesn't work.
- Рассказ: Where did you go? How long did you stay? The best thing was…
- **visit** + место без предлога; **go home** без to.

**Говорение:** тема «Путешествия» — расскажите о реальной поездке.`,
        },
      ],
    },
  ],
};
