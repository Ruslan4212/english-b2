// Юнит 5: there is / there are, some/any, предлоги места, город и дорога.
export default {
  id: "a1_u5",
  level: "A1",
  phase: 1,
  icon: "🏠",
  title: "There is / there are и где что находится",
  about: "Как сказать «есть, имеется», some/any, предлоги места, описание дома и города, как спросить дорогу.",
  lessons: [
    {
      id: "a1_u5_l1",
      title: "There is, there are: «есть, находится»",
      goal: "Вы научитесь говорить, что где-то что-то есть, и описывать комнату, офис или город.",
      steps: [
        {
          t: "text",
          h: "Зачем нужна конструкция there is",
          md: `Когда по-русски мы говорим «**В** комнате **есть** диван», «**На** столе **лежит** книга», «**Рядом** с домом — парк», мы сообщаем, что **где-то что-то есть**. Для этого в английском есть специальная конструкция:

- **There is** + один предмет: [[There is a sofa in the room.]] — В комнате есть диван.
- **There are** + много предметов: [[There are two chairs in the room.]] — В комнате два стула.

Сокращение: **there's** = there is. (There are обычно не сокращают в письме.)

>i Слово **there** здесь не переводится как «там» — это просто формальное начало, «вводное». Буквально: «Там есть диван в комнате». Переводим: «В комнате есть диван».`,
        },
        {
          t: "text",
          h: "Порядок слов — обратный русскому",
          md: `По-русски главное («что есть») часто в конце: «В холодильнике **есть молоко**». По-английски сначала **there is**, потом **что**, потом **где**:

**There is / are + ЧТО + ГДЕ**

| По-русски | По-английски |
|---|---|
| На столе книга. | [[There is a book on the table.]] |
| В нашем городе много парков. | [[There are a lot of parks in our city.]] |
| Рядом с моим домом есть кафе. | [[There is a café near my house.]] |

> Ошибка: «On the table is a book» или «In my city are many parks». Так говорят только в поэзии. В обычной речи — [[There is a book on the table.]]

**Чем отличается от to be:** there is — когда сообщаем, что **что-то есть** (новая информация). To be — когда говорим, **где находится** известный предмет:
- [[There is a bank near here.]] — Здесь рядом есть банк. (какой-то, новая информация)
- [[The bank is near here.]] — Банк (тот самый) рядом.`,
        },
        {
          t: "text",
          h: "Отрицание, вопрос и some / any",
          md: `**Отрицание:** there **isn't** / there **aren't**:
- [[There isn't a lift in the building.]] — В здании нет лифта.
- [[There aren't any shops here.]] — Здесь нет (никаких) магазинов.

**Вопрос:** to be выходит вперёд — **Is there…? / Are there…?**
- [[Is there a pharmacy near here?]] — Здесь рядом есть аптека? → [[Yes, there is. / No, there isn't.]]
- [[Are there any good restaurants?]] — Есть хорошие рестораны?

**Some и any** — «несколько, немного», ставятся с множественным числом и неисчисляемыми:
- В **утверждении** — **some**: [[There are some books on the shelf.]] — На полке есть (несколько) книг. [[There is some milk.]] — Есть (немного) молока.
- В **отрицании и вопросе** — **any**: [[There aren't any books.]], [[Is there any milk?]]

>i Сколько? **How many** — для исчисляемых: [[How many rooms are there?]] Для неисчисляемых — how much (подробнее в A2).`,
        },
        {
          t: "examples",
          h: "Описываем квартиру",
          items: [
            ["There is a big kitchen in my flat.", "В моей квартире большая кухня."],
            ["There are three rooms.", "Там три комнаты."],
            ["There isn't a balcony.", "Балкона нет."],
            ["There are some plants in the living room.", "В гостиной есть растения."],
            ["Is there a washing machine?", "Есть стиральная машина?"],
            ["How many bedrooms are there?", "Сколько там спален?"],
            ["There's a supermarket near my house.", "Рядом с моим домом есть супермаркет."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильный вариант",
          items: [
            ["There ___ a park near my house.", ["is", "are"], 0, "Один парк → is."],
            ["There ___ two banks in this street.", ["is", "are"], 1, "Два банка → are."],
            ["___ there a lift?", ["Is", "Are", "Does"], 0, "Вопрос: Is there + один предмет."],
            ["There aren't ___ shops here.", ["some", "any"], 1, "В отрицании — any."],
            ["There are ___ apples in the fridge.", ["some", "any"], 0, "В утверждении — some."],
            ["How many people ___ there?", ["is", "are"], 1, "People — много → are."],
            ["Как правильно сказать «В моём городе есть музей»?", ["In my city is a museum.", "There is a museum in my city.", "My city has there a museum."], 1, "There is + что + где."],
          ],
        },
        {
          t: "fill",
          h: "Вставьте is / are / isn't / aren't",
          items: [
            ["There ___ a cat on the sofa.", "is|'s", "Один кот."],
            ["There ___ any chairs in the room. (стульев нет)", "aren't|are not", "Отрицание, много."],
            ["___ there any milk?", "Is|is", "Milk — неисчисляемое, ведёт себя как один → Is."],
            ["There ___ five people in my team.", "are", "Много людей."],
            ["There ___ a problem. (проблемы нет)", "isn't|is not|'s not", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["В комнате два окна.", "There are two windows in the room.", "There are + что + где."],
            ["Здесь рядом есть аптека?", "Is there a pharmacy near here?|Is there a pharmacy nearby?|Is there a chemist's near here?|Is there a drugstore near here?", "Is there…?"],
            ["В холодильнике нет молока.", "There isn't any milk in the fridge.|There is no milk in the fridge.|There's no milk in the fridge.", "Можно isn't any или is no."],
            ["Сколько комнат в квартире?", "How many rooms are there in the flat?|How many rooms are there in the apartment?|How many rooms does the flat have?", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **There is** + один / **There are** + много; порядок: there is + **что** + **где**.
- Отрицание: there isn't / aren't; вопрос: Is there…? / Are there…?
- **some** — в утверждениях, **any** — в отрицаниях и вопросах.
- [[How many rooms are there?]]`,
        },
      ],
    },
    {
      id: "a1_u5_l2",
      title: "Предлоги места: in, on, under, next to…",
      goal: "Вы научитесь точно говорить, где находится предмет: на, в, под, рядом, между, напротив.",
      steps: [
        {
          t: "text",
          h: "Основные предлоги места",
          md: `| Предлог | Значение | Пример |
|---|---|---|
| [[in]] | в, внутри | [[in the box]], [[in the kitchen]], [[in London]] |
| [[on]] | на (поверхности) | [[on the table]], [[on the wall]], [[on the floor]] |
| [[under]] | под | [[under the bed]] |
| [[next to]] / [[beside]] | рядом с | [[next to the window]] |
| [[near]] | недалеко от, около | [[near my house]] |
| [[between]] | между | [[between the bank and the café]] |
| [[behind]] | позади, за | [[behind the door]] |
| [[in front of]] | перед | [[in front of the house]] |
| [[opposite]] | напротив | [[opposite the station]] |
| [[above]] | над | [[above the sofa]] |
| [[at]] | у, в (точка, место события) | [[at the door]], [[at the bus stop]], [[at work]] |

> **on the wall** — картина висит «на стене» — по-английски тоже **on** (на поверхности). А **in the picture** — «на картинке» — по-английски **in** (внутри изображения). Аналогично: [[in the photo]], [[in the street]] (брит.) / [[on the street]] (амер.).`,
        },
        {
          t: "text",
          h: "in, on, at для мест: как выбрать",
          md: `Эти три предлога путают все. Простая схема:

- **in** — **внутри** пространства с границами: in the room, in the car, in the city, in Russia, in the park.
- **on** — **на поверхности** или на линии: on the table, on the wall, on the second floor (на втором этаже), on the bus/train (в автобусе — «на борту»), on the left/right (слева/справа).
- **at** — **точка** на карте, место, где что-то происходит: at the bus stop, at the door, at home, at work, at school, at the airport, at the meeting.

**Транспорт:** in the car / in a taxi (маленькое, внутри сидишь), но on the bus / on the train / on the plane (большое, можно ходить).

**Адрес:** [[I live in Moscow.]] (город) · [[I live on Lenin Street.]] (улица) · [[I live at 15 Lenin Street.]] (точный адрес).`,
        },
        {
          t: "examples",
          h: "Где что лежит",
          items: [
            ["The keys are on the table.", "Ключи на столе."],
            ["My phone is in my bag.", "Мой телефон в сумке."],
            ["The cat is under the bed.", "Кот под кроватью."],
            ["The lamp is next to the sofa.", "Лампа рядом с диваном."],
            ["The bank is between the café and the shop.", "Банк между кафе и магазином."],
            ["There's a car in front of the house.", "Перед домом машина."],
            ["The supermarket is opposite the school.", "Супермаркет напротив школы."],
            ["My office is on the third floor.", "Мой офис на третьем этаже."],
          ],
        },
        {
          t: "choice",
          h: "Выберите предлог",
          items: [
            ["The picture is ___ the wall.", ["in", "on", "at"], 1, "На поверхности стены — on."],
            ["I'm ___ the bus stop.", ["in", "on", "at"], 2, "Точка — at."],
            ["She lives ___ Paris.", ["in", "on", "at"], 0, "Город — in."],
            ["My flat is ___ the fifth floor.", ["in", "on", "at"], 1, "Этаж — on."],
            ["The dog is ___ the table. (лежит под столом)", ["on", "under", "above"], 1, "Под — under."],
            ["I'm ___ the train.", ["in", "on", "at"], 1, "Поезд, автобус, самолёт — on."],
            ["The café is ___ the bank and the post office.", ["between", "next", "opposite"], 0, "Между двумя — between."],
            ["Who is the man ___ this photo?", ["on", "in", "at"], 1, "На фото — in the photo."],
          ],
        },
        {
          t: "fill",
          h: "Вставьте предлог",
          items: [
            ["The milk is ___ the fridge.", "in", "Внутри."],
            ["Your glasses are ___ your head!", "on", "На поверхности."],
            ["Wait for me ___ the entrance.", "at", "Точка встречи."],
            ["There's a garden ___ the house. (позади)", "behind", ""],
            ["The bus stop is ___ the station. (напротив)", "opposite", ""],
            ["I live ___ 25 Green Street.", "at", "Точный адрес с номером — at."],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мой телефон на столе.", "My phone is on the table.", ""],
            ["Кафе рядом с банком.", "The café is next to the bank.|The cafe is next to the bank.|The café is near the bank.|The cafe is near the bank.", ""],
            ["Я живу на втором этаже.", "I live on the second floor.", "Этаж — on."],
            ["Она на работе.", "She is at work.|She's at work.", "at work — без артикля."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- in — внутри, on — на поверхности, at — точка/место события.
- under, next to, near, between, behind, in front of, opposite, above.
- on the wall, in the photo, on the bus, in the car, on the second floor, at home/work.`,
        },
      ],
    },
    {
      id: "a1_u5_l3",
      title: "В городе: как спросить и объяснить дорогу",
      goal: "Вы сможете спросить дорогу у прохожего, понять ответ и объяснить сами, как куда пройти.",
      steps: [
        {
          t: "examples",
          h: "Места в городе",
          items: [
            ["the train station", "вокзал"], ["the bus stop", "автобусная остановка"], ["the pharmacy", "аптека", "брит. также the chemist's"], ["the post office", "почта"],
            ["the hospital", "больница"], ["the supermarket", "супермаркет"], ["the museum", "музей"], ["the city centre", "центр города", "амер. downtown"],
            ["the traffic lights", "светофор"], ["the crossroads", "перекрёсток"], ["the corner", "угол"], ["the square", "площадь"],
          ],
        },
        {
          t: "text",
          h: "Как спросить дорогу",
          md: `Начните с **Excuse me** — «извините» (чтобы привлечь внимание):

- [[Excuse me, where is the station?]] — Извините, где вокзал?
- [[Excuse me, is there a bank near here?]] — Здесь рядом есть банк?
- [[How can I get to the museum?]] — Как добраться до музея?
- [[Is it far?]] — Это далеко? / [[Is it near?]] — Это близко?
- [[How long does it take?]] — Сколько времени это займёт?

После ответа: [[Thank you very much!]] Если не поняли: [[Sorry, can you say that again, please?]]

> Не начинайте с «Sorry» как с обращения — это скорее извинение за что-то. Чтобы обратиться к незнакомцу — **Excuse me**.`,
        },
        {
          t: "text",
          h: "Как объяснить дорогу",
          md: `В объяснениях используют **повелительное наклонение** — глагол без подлежащего:

| Фраза | Значение |
|---|---|
| [[Go straight on.]] | Идите прямо. |
| [[Turn left.]] / [[Turn right.]] | Поверните налево / направо. |
| [[Take the first street on the left.]] | Сверните на первую улицу налево. |
| [[Go past the bank.]] | Пройдите мимо банка. |
| [[Cross the road.]] | Перейдите дорогу. |
| [[Go along this street.]] | Идите по этой улице. |
| [[It's on your left.]] | Это будет слева от вас. |
| [[It's at the end of the street.]] | В конце улицы. |
| [[It's about five minutes on foot.]] | Минут пять пешком. |
| [[You can't miss it.]] | Вы не пропустите (легко найти). |

**Повелительное наклонение** — просто глагол: [[Open the door.]], [[Sit down.]] Отрицание — **Don't**: [[Don't turn left.]] Вежливо — добавьте **please**.`,
        },
        {
          t: "dialog",
          h: "Диалог: где музей?",
          lines: [
            ["Tourist", "Excuse me, is there a museum near here?", "Извините, здесь рядом есть музей?"],
            ["Local", "Yes, there is. The City Museum is on Park Street.", "Да. Городской музей на Парк-стрит."],
            ["Tourist", "How can I get there?", "Как туда пройти?"],
            ["Local", "Go straight on and turn right at the traffic lights. Then take the second street on the left.", "Идите прямо и на светофоре поверните направо. Потом сверните на вторую улицу налево."],
            ["Tourist", "Is it far?", "Это далеко?"],
            ["Local", "No, it's about ten minutes on foot. The museum is opposite the big supermarket. You can't miss it.", "Нет, минут десять пешком. Музей напротив большого супермаркета. Не пропустите."],
            ["Tourist", "Thank you very much!", "Большое спасибо!"],
          ],
          qs: [
            ["Где нужно повернуть направо?", ["У банка", "На светофоре", "На перекрёстке у школы"], 1, "Turn right at the traffic lights."],
            ["Что находится напротив музея?", ["Парк", "Супермаркет", "Вокзал"], 1, "Opposite the big supermarket."],
            ["Сколько идти?", ["5 минут", "10 минут", "20 минут"], 1, "About ten minutes on foot."],
          ],
        },
        {
          t: "choice",
          h: "Что сказать?",
          items: [
            ["Как обратиться к прохожему?", ["Sorry!", "Excuse me,", "Hey you!"], 1, "Excuse me — вежливое обращение."],
            ["«Идите прямо»", ["Go straight on.", "Go direct.", "Walk right."], 0, "Go straight on."],
            ["«Это слева от вас»", ["It's on your left.", "It's in your left.", "It's at left."], 0, "on your left."],
            ["«Не поворачивайте направо»", ["Not turn right.", "Don't turn right.", "No turn right."], 1, "Отрицательный приказ — Don't."],
            ["«Как добраться до вокзала?»", ["How can I get to the station?", "How I go station?", "Where I can station?"], 0, "How can I get to…?"],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Извините, где аптека?", "Excuse me, where is the pharmacy?|Excuse me, where's the pharmacy?|Excuse me, where is the chemist's?|Excuse me, where is the drugstore?", ""],
            ["Поверните налево на светофоре.", "Turn left at the traffic lights.|Turn left at the traffic light.", "at the traffic lights."],
            ["Это далеко?", "Is it far?|Is it far from here?", ""],
            ["Идите прямо и поверните направо.", "Go straight on and turn right.|Go straight and turn right.|Go straight ahead and turn right.", ""],
          ],
        },
        {
          t: "speak",
          h: "Объясните дорогу вслух",
          intro: "Представьте, что у вас спрашивают дорогу от вашего дома до ближайшего магазина.",
          items: [
            ["Go straight on and turn left.", "Идите прямо и поверните налево."],
            ["The shop is next to the bank.", "Магазин рядом с банком."],
            ["It's about five minutes on foot.", "Минут пять пешком."],
          ],
        },
        {
          t: "text",
          h: "Итог юнита 5",
          md: `- **There is/are** — что где есть; **Is there…?** — спросить.
- Предлоги места: in, on, at, under, next to, between, opposite, behind, in front of.
- Спросить дорогу: [[Excuse me, how can I get to…?]] [[Is it far?]]
- Объяснить: [[Go straight on]], [[turn left/right]], [[It's on your left]], [[It's opposite…]]

**Письмо в четверг:** опишите свою квартиру — что в ней есть и где что стоит.`,
        },
      ],
    },
  ],
};
