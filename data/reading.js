// Короткие тексты для чтения по уровням (свои, в стиле Graded Readers).
const R = (id, level, title, text, glossary, qs) => ({ id, level, title, text, glossary, qs });

export default [
  R("r_a1_anna", "A1", "Anna's Day",
    `Anna is twenty-eight. She lives in a small flat in Manchester. She is a nurse and she works in a big hospital.

Anna gets up at six o'clock every day. She has a shower and a cup of coffee. She doesn't eat breakfast at home. She takes the bus to work.

She starts work at seven. Her job is hard, but she likes it. She helps people every day. At one o'clock she has lunch with her friend Tom. He is a doctor.

Anna finishes work at four. In the evening she goes to the gym or reads a book. On Saturdays she visits her parents. They live in a village near Manchester. Anna goes to bed at ten o'clock.`,
    [["a nurse", "медсестра"], ["she takes the bus", "она ездит на автобусе"], ["her job is hard", "её работа трудная"], ["she helps people", "она помогает людям"], ["she finishes work", "она заканчивает работу"], ["near Manchester", "рядом с Манчестером"]],
    [["Кем работает Анна?", ["Врачом", "Медсестрой", "Учителем"], 1, "She is a nurse."], ["Где она завтракает?", ["Дома", "Не завтракает дома", "В кафе с Томом"], 1, "She doesn't eat breakfast at home."], ["Кто такой Том?", ["Её брат", "Врач, её друг", "Её муж"], 1, "Her friend Tom. He is a doctor."], ["Что она делает по субботам?", ["Ходит в спортзал", "Навещает родителей", "Работает"], 1, "On Saturdays she visits her parents."]]),
  R("r_a1_town", "A1", "My Town",
    `My name is Pavel and I live in Tver. It is not a big city, but I like it. There is a river in the centre and there are a lot of old buildings.

There are two parks near my house. In summer I walk there with my dog, Rex. There is a good café next to the park. The coffee there is very nice and it isn't expensive.

There isn't an airport in my town, but there is a train station. The train to Moscow takes about two hours. I go to Moscow once a month because my sister lives there.

My favourite place is the river. In the evening I can sit there for hours.`,
    [["it is not a big city", "это не большой город"], ["there are a lot of old buildings", "там много старых зданий"], ["it isn't expensive", "это недорого"], ["it takes about two hours", "это занимает около двух часов"], ["once a month", "раз в месяц"], ["my favourite place", "моё любимое место"]],
    [["Что есть в центре Твери?", ["Озеро", "Река", "Аэропорт"], 1, "There is a river in the centre."], ["Кто такой Rex?", ["Брат", "Собака", "Друг"], 1, "My dog, Rex."], ["Сколько едет поезд до Москвы?", ["1 час", "2 часа", "4 часа"], 1, "About two hours."], ["Почему Павел ездит в Москву?", ["Там работа", "Там живёт сестра", "Там учёба"], 1, "My sister lives there."]]),
  R("r_a1_email", "A1", "An Email to a New Friend",
    `Hi Maria,

Thank you for your email! My name is Dmitry, but my friends call me Dima. I'm thirty-two and I'm from Russia. I live in Yekaterinburg with my wife, Sveta, and our son, Misha. He is five.

I'm a programmer. I work for an IT company, but I work from home on Mondays and Fridays. I like my job because it's interesting.

In my free time I play football and I watch films in English. I can't speak English very well, but I'm learning! Can you speak Russian?

What about you? What do you do? Do you have a big family?

Write soon!
Dima`,
    [["my friends call me Dima", "друзья зовут меня Дима"], ["I work from home", "я работаю из дома"], ["in my free time", "в свободное время"], ["I'm learning", "я учусь (сейчас)"], ["Write soon!", "Пиши скорее!"]],
    [["Сколько лет сыну Димы?", ["3", "5", "15"], 1, "He is five."], ["Когда Дима работает из дома?", ["По понедельникам и пятницам", "Каждый день", "По выходным"], 0, "On Mondays and Fridays."], ["Что Дима делает в свободное время?", ["Готовит", "Играет в футбол и смотрит фильмы", "Читает"], 1, "I play football and I watch films."]]),
  R("r_a2_trip", "A2", "A Trip That Went Wrong",
    `Last summer my friend Igor and I decided to go to Georgia. We booked a cheap flight and a small hotel in Tbilisi. We were very excited.

But on the day of the flight, everything went wrong. First, the taxi was late, so we arrived at the airport just forty minutes before the flight. Then, at the check-in desk, Igor couldn't find his passport! He looked in all his bags. Finally, he found it in his jacket pocket.

We ran to the gate and got on the plane at the last minute. We were tired and hungry, but we were happy.

The holiday was wonderful. The food was delicious, the people were very friendly, and the mountains were beautiful. We walked a lot and took hundreds of photos. Next year we are going to visit Armenia. This time we are going to leave home earlier!`,
    [["everything went wrong", "всё пошло не так"], ["the taxi was late", "такси опоздало"], ["at the last minute", "в последнюю минуту"], ["took hundreds of photos", "сделали сотни фото"], ["we are going to leave home earlier", "мы собираемся выйти из дома раньше"]],
    [["Почему они приехали в аэропорт поздно?", ["Перепутали время", "Такси опоздало", "Пробки"], 1, "The taxi was late."], ["Где был паспорт Игоря?", ["В сумке", "В кармане куртки", "Дома"], 1, "In his jacket pocket."], ["Что им понравилось в Грузии?", ["Еда, люди, горы", "Только море", "Отель"], 0, "Food, people, mountains."], ["Какие у них планы?", ["Снова Грузия", "Армения", "Турция"], 1, "Next year we are going to visit Armenia."]]),
  R("r_a2_job", "A2", "A New Job",
    `Olga worked in a bank for eight years. The salary was good, but she was bored. Every day was the same. She wanted to do something more creative.

Two years ago she started a course in web design. She studied in the evenings after work. It was difficult because she was always tired, but she didn't give up.

Last month she found a job at a small design studio. The salary is lower than at the bank, and the office is further from her home. But Olga is much happier now. Her colleagues are younger and friendlier, and the work is more interesting.

"It was the best decision of my life," she says. "I should do it earlier!" Her friends think she is very brave.`,
    [["the salary was good", "зарплата была хорошей"], ["she didn't give up", "она не сдалась"], ["the salary is lower than", "зарплата ниже, чем"], ["further from her home", "дальше от её дома"], ["the best decision of my life", "лучшее решение в моей жизни"], ["brave", "смелая"]],
    [["Почему Ольга ушла из банка?", ["Мало платили", "Ей было скучно", "Её уволили"], 1, "She was bored."], ["Когда она училась?", ["По выходным", "Вечерами после работы", "Утром"], 1, "In the evenings after work."], ["Что хуже на новой работе?", ["Коллеги", "Зарплата и дорога", "Задачи"], 1, "The salary is lower and the office is further."], ["Заметили ошибку в цитате «I should do it earlier»? Как правильно?", ["I should have done it earlier", "I should did it earlier", "Так и правильно"], 0, "О прошлом сожалеют через should have + 3-я форма: I should have done it earlier. Это тема B2 — зато теперь вы её заметили!"]]),
  R("r_a2_food", "A2", "Food Around the World",
    `People eat very different things in different countries. In Japan, people eat a lot of fish and rice, and they often have soup for breakfast. Japanese food is usually healthier than food in many other countries.

In Italy, the most famous dishes are pizza and pasta. Italians usually have a small breakfast — just a coffee and a croissant — but lunch and dinner are big.

In Mexico, people love spicy food. They put chilli in many dishes, and some of them are too hot for tourists!

In Russia, soup is very important. Many people eat soup every day for lunch. Borscht is probably the most famous Russian soup in the world.

What about you? What is the most popular dish in your family?`,
    [["healthier than", "полезнее, чем"], ["the most famous dishes", "самые известные блюда"], ["spicy food", "острая еда"], ["too hot for tourists", "слишком острое для туристов"], ["probably", "вероятно"]],
    [["Что японцы часто едят на завтрак?", ["Суп", "Круассан", "Пиццу"], 0, "They often have soup for breakfast."], ["Какой завтрак у итальянцев?", ["Большой", "Маленький: кофе и круассан", "Его нет"], 1, "Just a coffee and a croissant."], ["Почему мексиканская еда трудна для туристов?", ["Слишком сладкая", "Слишком острая", "Слишком дорогая"], 1, "Too hot (острая)."]]),
  R("r_b1_remote", "B1", "Working From Home: Two Years Later",
    `When the company I work for told us we could work from home permanently, I was delighted. No more crowded trains, no more expensive lunches, and more time with my family. Two years later, I have mixed feelings.

There have definitely been benefits. I've saved a lot of money and I've finally started cooking properly. I also feel I've become more productive: without colleagues interrupting me every ten minutes, I can concentrate on difficult tasks for hours.

However, I've noticed some problems too. I hardly ever see my colleagues, and I've lost the feeling of being part of a team. New employees who joined during this time have never met most of us in person. It's also harder to switch off: my laptop is always there, so I often find myself answering emails at ten o'clock at night.

If I could choose, I would work from home three days a week and go to the office for the other two. Many companies are now trying this kind of hybrid model, and I think it might be the best of both worlds.`,
    [["permanently", "постоянно, насовсем"], ["mixed feelings", "смешанные чувства"], ["productive", "продуктивный"], ["hardly ever", "почти никогда"], ["to switch off", "отключиться (перестать думать о работе)"], ["the best of both worlds", "лучшее из двух вариантов"]],
    [["Какое преимущество НЕ упомянуто?", ["Экономия денег", "Продуктивность", "Более высокая зарплата"], 2, "О зарплате в тексте ничего нет."], ["Какая проблема упомянута?", ["Трудно отключиться от работы", "Плохой интернет", "Шум соседей"], 0, "It's harder to switch off."], ["Что выбрал бы автор?", ["Только дом", "Только офис", "Гибрид: 3 дня дома, 2 в офисе"], 2, "Второй условный: If I could choose, I would…"]]),
  R("r_b1_story", "B1", "The Wrong Train",
    `It was a cold Friday evening and I was going home after a long week. I was so tired that I was half asleep when the train arrived. I got on, found a seat and closed my eyes.

When I opened them, it was completely dark outside and the train was moving very fast. I looked at my phone: I had been asleep for forty minutes. My journey normally takes twenty. I suddenly realised that I had got on the express train to the airport.

I asked the woman next to me where the next stop was. She smiled and said, "The airport. We'll be there in ten minutes." I couldn't believe it.

At the airport I bought a coffee and waited for the train back. While I was waiting, I started talking to a man who had just arrived from Canada. He was a musician and he was going to play at a festival in our city. We talked for an hour, and he gave me two free tickets to his concert.

So in the end, falling asleep on the train was the luckiest mistake I've ever made.`,
    [["half asleep", "в полудрёме"], ["I had been asleep", "я проспал (до того момента)"], ["I realised that I had got on", "я понял, что сел (раньше)"], ["I couldn't believe it", "я не мог поверить"], ["the luckiest mistake", "самая удачная ошибка"]],
    [["Почему автор оказался в аэропорту?", ["Опаздывал на рейс", "Сел на экспресс и уснул", "Встречал друга"], 1, "He had got on the express train — past perfect."], ["Кем был мужчина из Канады?", ["Пилотом", "Музыкантом", "Туристом"], 1, "He was a musician."], ["Чем закончилась история?", ["Опоздал на работу", "Получил билеты на концерт", "Улетел в Канаду"], 1, "Two free tickets to his concert."]]),
  R("r_b1_habits", "B1", "How Habits Are Formed",
    `Why is it so difficult to start going to the gym, but so easy to check your phone a hundred times a day? Scientists say the answer lies in how habits are formed.

Every habit has three parts: a trigger, a routine and a reward. The trigger is something that tells your brain to start the behaviour — for example, feeling bored. The routine is the behaviour itself, such as scrolling through social media. The reward is the pleasant feeling you get afterwards. The more often this loop is repeated, the more automatic it becomes.

The good news is that the same loop can be used to build good habits. If you want to read more, you could link reading to an existing trigger: "After I make my morning coffee, I will read two pages." It's important to start small. Two pages may seem silly, but it is much easier to keep a tiny habit than a big one.

Researchers have found that, on average, it takes about two months for a new behaviour to become automatic. So if you have tried to change something and given up after a week, don't be too hard on yourself — you simply stopped too early.`,
    [["the answer lies in", "ответ кроется в"], ["a trigger", "спусковой крючок, сигнал"], ["a reward", "награда"], ["the more often…, the more…", "чем чаще…, тем…"], ["to start small", "начать с малого"], ["don't be too hard on yourself", "не будьте к себе слишком строги"]],
    [["Из скольких частей состоит привычка?", ["Двух", "Трёх", "Четырёх"], 1, "Trigger, routine, reward."], ["Что советует автор?", ["Начинать с большого", "Начинать с малого", "Не менять привычки"], 1, "Start small."], ["Сколько в среднем нужно для новой привычки?", ["Неделя", "Около двух месяцев", "Год"], 1, "About two months."]]),
  R("r_b2_ai", "B2", "Will Machines Take Our Jobs?",
    `Every major technological revolution has been accompanied by fears of mass unemployment. When the first mechanical looms appeared in the early nineteenth century, textile workers smashed them, convinced that their livelihoods were being destroyed. In a sense, they were right: many of them did lose their jobs. Yet within a few decades, the economy had created far more jobs than it had eliminated.

Optimists argue that artificial intelligence will follow the same pattern. Tasks that are repetitive and predictable will be automated, while new roles — many of which we cannot yet imagine — will emerge. Had someone in 1990 been told that "social media manager" would become a common job title, they would have been baffled.

Sceptics, however, point out a crucial difference. Previous machines replaced physical labour, which pushed workers towards jobs that required thinking. AI, by contrast, is increasingly capable of cognitive work: writing, analysing data, even diagnosing diseases. If machines can think, where are humans supposed to go?

The most likely answer is somewhere in between. Rather than replacing entire professions, AI tends to take over specific tasks within them. A lawyer may no longer need to spend hours reviewing documents, but clients will still want someone to advise them and argue their case. The workers who thrive will probably be those who learn to work alongside these tools rather than compete with them.`,
    [["mass unemployment", "массовая безработица"], ["their livelihoods", "их средства к существованию"], ["Had someone been told…, they would have…", "Если бы кому-то сказали…, они бы… (инверсия, 3-й условный)"], ["baffled", "озадаченный"], ["by contrast", "напротив"], ["to thrive", "процветать, преуспевать"]],
    [["Что произошло после появления ткацких станков?", ["Безработица навсегда", "Через десятилетия рабочих мест стало больше", "Станки запретили"], 1, "The economy had created far more jobs than it had eliminated."], ["В чём главное отличие ИИ, по мнению скептиков?", ["Он дороже", "Он заменяет умственный труд", "Он медленнее"], 1, "AI is capable of cognitive work."], ["Какой вывод делает автор?", ["ИИ заменит все профессии", "ИИ заберёт отдельные задачи, а не профессии целиком", "ИИ ни на что не повлияет"], 1, "Rather than replacing entire professions, AI takes over specific tasks."]]),
  R("r_b2_city", "B2", "The 15-Minute City",
    `Imagine a city in which everything you need on a daily basis — your workplace, school, doctor, shops and parks — is no more than a fifteen-minute walk or bike ride from your home. This is the idea behind the "15-minute city", a concept popularised by the urban planner Carlos Moreno and adopted, at least in part, by cities such as Paris and Melbourne.

Supporters claim that the benefits are considerable. Fewer car journeys would mean cleaner air and less traffic, while people who no longer spend hours commuting would have more time for their families and communities. Local businesses, too, would be likely to benefit from residents shopping closer to home.

Not everyone is convinced, though. Critics argue that the model works well in dense, wealthy city centres but is far harder to apply in sprawling suburbs, where homes are spread out and public transport is poor. Others worry that, if poorly implemented, such policies could push up property prices in the most desirable neighbourhoods, forcing lower-income residents further out.

What seems clear is that the way cities are designed has a profound effect on how we live. Whether or not the 15-minute city becomes the norm, the debate has forced planners to ask a question that was largely ignored for decades: should cities be built around cars, or around people?`,
    [["on a daily basis", "ежедневно"], ["considerable", "значительный"], ["commuting", "дорога на работу и обратно"], ["sprawling suburbs", "разросшиеся пригороды"], ["if poorly implemented", "если плохо реализовать"], ["profound effect", "глубокое влияние"]],
    [["Что такое «15-минутный город»?", ["Город, который можно объехать за 15 минут", "Всё нужное в 15 минутах пешком или на велосипеде", "Рабочий день 15 минут"], 1, "Everything you need is no more than a 15-minute walk or bike ride."], ["В чём главная критика?", ["Трудно применить в пригородах и может поднять цены", "Это слишком дорого строить", "Людям не нравится ходить пешком"], 0, "Harder to apply in suburbs; could push up prices."], ["Какой главный вопрос ставит автор?", ["Строить города для машин или для людей", "Сколько стоит жильё", "Нужен ли общественный транспорт"], 0, "Should cities be built around cars, or around people?"]]),
];
