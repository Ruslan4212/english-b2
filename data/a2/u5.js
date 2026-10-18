// A2 юнит 5: сравнительная и превосходная степень, as…as, too/enough.
export default {
  id: "a2_u5",
  level: "A2",
  phase: 2,
  icon: "⚖️",
  title: "Сравнения: bigger, the biggest",
  about: "Сравнительная и превосходная степень прилагательных, as … as, too и enough.",
  lessons: [
    {
      id: "a2_u5_l1",
      title: "Сравнительная степень: bigger, more interesting",
      goal: "Вы научитесь сравнивать два предмета, города, работы — «больше, дешевле, интереснее, чем».",
      steps: [
        {
          t: "text",
          h: "Два способа сравнить",
          md: `Выбор способа зависит от **длины** прилагательного:

**1. Короткие (1 слог) → + er**
- cheap → [[cheaper]] — дешевле
- old → [[older]], fast → [[faster]], tall → [[taller]]

**2. Длинные (2+ слога) → more + прилагательное**
- interesting → [[more interesting]] — интереснее
- expensive → [[more expensive]], comfortable → [[more comfortable]], difficult → [[more difficult]]

**«Чем» = than:** [[Moscow is bigger than Kazan.]] — Москва больше Казани. [[This book is more interesting than that one.]]

> Ошибки: «more cheaper» (двойное сравнение), «more big», «expensiver». Либо -er, либо more — никогда оба сразу.`,
        },
        {
          t: "text",
          h: "Правописание и особые случаи",
          md: `| Правило | Пример |
|---|---|
| На **e** → +r | nice → nicer, large → larger |
| Короткий, согласная-гласная-согласная → удвоение | big → bigger, hot → hotter, thin → thinner |
| 2 слога на **-y** → **ier** | easy → easier, happy → happier, busy → busier |

**Неправильные — запомнить обязательно:**

| Прилагательное | Сравнительная | Превосходная |
|---|---|---|
| [[good]] хороший | [[better]] лучше | [[the best]] |
| [[bad]] плохой | [[worse]] хуже | [[the worst]] |
| [[far]] далёкий | [[further]] / farther | [[the furthest]] |
| [[many / much]] много | [[more]] больше | [[the most]] |
| [[little]] мало | [[less]] меньше | [[the least]] |

**Усиление:** much / a lot / far = «намного», a bit / a little / slightly = «немного»:
- [[London is much more expensive than Warsaw.]] — Лондон намного дороже Варшавы.
- [[I feel a bit better today.]] — Сегодня мне немного лучше.`,
        },
        {
          t: "examples",
          h: "Примеры",
          items: [
            ["My new flat is bigger than my old one.", "Моя новая квартира больше старой.", "one заменяет повторяемое слово"],
            ["The train is faster than the bus.", "Поезд быстрее автобуса."],
            ["English is easier than Chinese.", "Английский легче китайского."],
            ["This hotel is more comfortable.", "Этот отель удобнее."],
            ["Today the weather is worse than yesterday.", "Сегодня погода хуже, чем вчера."],
            ["My English is much better now.", "Мой английский теперь намного лучше."],
            ["Could you speak a bit slower?", "Могли бы вы говорить чуть медленнее?"],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильную форму",
          items: [
            ["This car is ___ than that one.", ["cheaper", "more cheap", "more cheaper"], 0, "Короткое — -er."],
            ["Russian is ___ than English.", ["difficulter", "more difficult", "most difficult"], 1, "Длинное — more."],
            ["Today is ___ than yesterday.", ["hoter", "hotter", "more hot"], 1, "Удвоение: hot → hotter."],
            ["My cold is ___ today. (хуже)", ["badder", "worse", "more bad"], 1, "bad → worse."],
            ["She is ___ than her sister.", ["happyer", "happier", "more happy"], 1, "y → ier."],
            ["Moscow is bigger ___ Paris.", ["that", "than", "then"], 1, "Чем — than."],
            ["Your idea is ___ than mine.", ["gooder", "better", "more good"], 1, "good → better."],
          ],
        },
        {
          t: "fill",
          h: "Сравнительная степень",
          items: [
            ["old → ___", "older", ""],
            ["expensive → ___", "more expensive", ""],
            ["big → ___", "bigger", ""],
            ["easy → ___", "easier", ""],
            ["good → ___", "better", ""],
            ["far → ___", "further|farther", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мой брат старше меня.", "My brother is older than me.|My brother is older than I am.|My brother is older than I.", "В разговоре: than me."],
            ["Это намного дешевле.", "It's much cheaper.|This is much cheaper.|It is much cheaper.|That's much cheaper.|It's a lot cheaper.", "much — намного."],
            ["Сегодня мне лучше.", "I feel better today.|I'm better today.|Today I feel better.|I am better today.", "good → better."],
            ["Этот фильм интереснее книги.", "This film is more interesting than the book.|This movie is more interesting than the book.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Короткие: **-er** (cheaper, bigger, easier). Длинные: **more** (more expensive).
- Чем — **than**. Неправильные: good → better, bad → worse, far → further.
- much/a lot — намного, a bit — немного.`,
        },
      ],
    },
    {
      id: "a2_u5_l2",
      title: "Превосходная степень: the best, the most beautiful",
      goal: "Вы научитесь говорить «самый лучший, самый дорогой» и рассказывать о рекордах и своих предпочтениях.",
      steps: [
        {
          t: "text",
          h: "Самый: the + est / the most",
          md: `Превосходная степень строится так же, как сравнительная, но с **the**:

| Тип | Сравнительная | Превосходная |
|---|---|---|
| Короткое | cheaper | **the cheapest** — самый дешёвый |
| Длинное | more expensive | **the most expensive** — самый дорогой |
| На -y | easier | **the easiest** |
| Удвоение | bigger | **the biggest** |
| Неправильные | better / worse | **the best / the worst** |

**Артикль the обязателен** — «самый» всегда один, конкретный.

**Предлоги после превосходной степени:**
- **in** + место или группа: [[the tallest building in the world]], [[the best student in the class]]
- **of** + период или число: [[the best day of my life]], [[the youngest of three children]]

**С present perfect** (тема B1): [[It's the best film I've ever seen.]] — Это лучший фильм, который я когда-либо видел. Запомните пока целой фразой.`,
        },
        {
          t: "examples",
          h: "Примеры",
          items: [
            ["Mount Everest is the highest mountain in the world.", "Эверест — самая высокая гора в мире."],
            ["This is the cheapest hotel in the city.", "Это самый дешёвый отель в городе."],
            ["Summer is the best season.", "Лето — лучшее время года."],
            ["It was the worst day of my life.", "Это был худший день в моей жизни."],
            ["She's the most intelligent person I know.", "Она самый умный человек, которого я знаю."],
            ["What's the most beautiful place in your country?", "Какое самое красивое место в твоей стране?"],
            ["He's the oldest of four brothers.", "Он старший из четырёх братьев."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["It's ___ restaurant in town.", ["the best", "the better", "best"], 0, "Самый — the best."],
            ["This is the ___ building in the city.", ["tallest", "most tall", "taller"], 0, "Короткое — -est."],
            ["She's the ___ person in our team.", ["most creative", "creativest", "more creative"], 0, "Длинное — the most."],
            ["It was the worst day ___ my life.", ["in", "of", "at"], 1, "Период — of."],
            ["He's the best player ___ the team.", ["in", "of", "at"], 0, "Группа/место — in."],
            ["What's the ___ city in Russia?", ["big", "biggest", "bigger"], 1, "the biggest."],
          ],
        },
        {
          t: "fill",
          h: "Превосходная степень",
          items: [
            ["cheap → the ___", "cheapest", ""],
            ["beautiful → the ___", "most beautiful", ""],
            ["happy → the ___", "happiest", ""],
            ["bad → the ___", "worst", ""],
            ["hot → the ___", "hottest", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Это самый дорогой ресторан в городе.", "This is the most expensive restaurant in the city.|It's the most expensive restaurant in the city.|This is the most expensive restaurant in town.|It's the most expensive restaurant in town.", ""],
            ["Это был лучший отпуск в моей жизни.", "It was the best holiday of my life.|It was the best holiday in my life.|That was the best holiday of my life.|It was the best vacation of my life.", ""],
            ["Кто самый высокий в вашей семье?", "Who is the tallest in your family?|Who's the tallest in your family?|Who is the tallest person in your family?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **the + -est** (the cheapest) / **the most** + длинное (the most expensive).
- the best, the worst, the furthest.
- in + место/группа, of + период/число.`,
        },
      ],
    },
    {
      id: "a2_u5_l3",
      title: "As … as, too и enough: сравниваем и оцениваем",
      goal: "Вы научитесь говорить «такой же, как», «не такой, как», «слишком» и «достаточно».",
      steps: [
        {
          t: "text",
          h: "as … as — такой же, как",
          md: `**as + прилагательное + as** — равенство:
- [[My sister is as tall as me.]] — Моя сестра такого же роста, как я.
- [[This phone is as good as the expensive one.]] — Этот телефон такой же хороший, как дорогой.

**not as … as** — «не такой, как» (мягкий способ сказать «хуже/меньше»):
- [[The film wasn't as good as the book.]] — Фильм был не таким хорошим, как книга.
- [[It's not as cold as yesterday.]] — Не так холодно, как вчера.

>i **not as … as** звучит вежливее, чем прямое сравнение: [[Your plan isn't as good as mine]] мягче, чем «your plan is worse».

**the same as** — такой же, тот же: [[My phone is the same as yours.]] **different from** — отличается от: [[British English is different from American English.]]`,
        },
        {
          t: "text",
          h: "too и enough — слишком и достаточно",
          md: `**too + прилагательное** — **слишком** (больше, чем нужно, — это проблема):
- [[This coffee is too hot.]] — Этот кофе слишком горячий.
- [[I'm too tired to go out.]] — Я слишком устал, чтобы выходить. (too + прил. + **to** + глагол)

**прилагательное + enough** — **достаточно** (enough ставится **после** прилагательного!):
- [[He isn't old enough to drive.]] — Он недостаточно взрослый, чтобы водить.
- [[Is the room big enough?]] — Комната достаточно большая?

**enough + существительное** — достаточно чего-то (перед существительным!):
- [[We don't have enough time.]] — У нас недостаточно времени.
- [[Is there enough money?]]

> Ловушки: **too** ≠ **very**. Very — просто «очень» (без оценки): [[It's very expensive, but I'll buy it.]] Too — «слишком», значит проблема: [[It's too expensive. I can't buy it.]] И порядок: «enough old» — ошибка, правильно [[old enough]].`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["She's as clever ___ her brother.", ["than", "as", "like"], 1, "as … as."],
            ["The second film wasn't ___ good as the first.", ["so", "as", "more"], 1, "not as … as."],
            ["I can't drink it. It's ___ hot.", ["very", "too", "enough"], 1, "Проблема — too."],
            ["He isn't ___ to be a pilot.", ["tall enough", "enough tall", "too tall"], 0, "enough — после прилагательного."],
            ["We don't have ___.", ["time enough", "enough time", "too time"], 1, "enough — перед существительным."],
            ["This bag is ___ heavy. I can't carry it.", ["too", "very", "enough"], 0, "too — проблема."],
            ["My phone is the same ___ yours.", ["like", "as", "than"], 1, "the same as."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Он такой же высокий, как его отец.", "He is as tall as his father.|He's as tall as his father.|He's as tall as his dad.", ""],
            ["Сегодня не так жарко, как вчера.", "It isn't as hot today as yesterday.|It's not as hot today as yesterday.|Today it's not as hot as yesterday.|Today isn't as hot as yesterday.|It is not as hot today as it was yesterday.|Today it isn't as hot as yesterday.|It's not as hot as yesterday.", ""],
            ["Я слишком устал, чтобы готовить.", "I'm too tired to cook.|I am too tired to cook.", "too + прил. + to."],
            ["У меня недостаточно денег.", "I don't have enough money.|I haven't got enough money.", ""],
          ],
        },
        {
          t: "dialog",
          h: "Диалог: выбираем квартиру",
          lines: [
            ["Olga", "So, which flat do you prefer?", "Итак, какая квартира тебе больше нравится?"],
            ["Pavel", "The first one is bigger, but it's further from the metro.", "Первая больше, но дальше от метро."],
            ["Olga", "And the second one is cheaper. But is it big enough for us?", "А вторая дешевле. Но она достаточно большая для нас?"],
            ["Pavel", "I think so. The kitchen isn't as big as in the first flat, but the bedroom is lovely.", "Думаю, да. Кухня не такая большая, как в первой, но спальня прекрасная."],
            ["Olga", "The first one is too expensive anyway. It's the most expensive flat we've seen.", "Первая всё равно слишком дорогая. Это самая дорогая квартира из тех, что мы видели."],
            ["Pavel", "OK, let's take the second one!", "Ладно, берём вторую!"],
          ],
          qs: [
            ["Чем плоха первая квартира?", ["Маленькая", "Далеко от метро и слишком дорогая", "Плохая спальня"], 1, "Further from the metro… too expensive."],
            ["Какую выбрали?", ["Первую", "Вторую", "Никакую"], 1, "Let's take the second one."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- **as … as** — такой же; **not as … as** — не такой (вежливо).
- **too + прил.** — слишком (проблема); **прил. + enough** / **enough + сущ.**
- the same as, different from.

**Говорение:** тема «Сравнения» — сравните свой город с другим, жизнь 10 лет назад и сейчас.`,
        },
      ],
    },
  ],
};
