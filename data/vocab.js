// Тематические наборы фраз. Правило плана: слова только во фразах.
const V = (id, level, title, items) => ({ id, level, title, items });

export default [
  V("v_greet", "A1", "Приветствия и вежливость", [
    ["Good morning!", "Доброе утро!"], ["Good evening!", "Добрый вечер!"], ["How are you?", "Как дела?"], ["I'm fine, thanks. And you?", "Хорошо, спасибо. А у вас?"],
    ["Not bad.", "Неплохо."], ["See you later!", "Увидимся позже!"], ["Have a nice day!", "Хорошего дня!"], ["Excuse me.", "Извините (чтобы обратиться)."],
    ["I'm sorry.", "Простите (извинение)."], ["Thank you very much.", "Большое спасибо."], ["You're welcome.", "Пожалуйста (в ответ на спасибо)."], ["Please sit down.", "Садитесь, пожалуйста."],
    ["Nice to meet you.", "Приятно познакомиться."], ["What's your name?", "Как вас зовут?"], ["Where are you from?", "Откуда вы?"], ["I don't understand.", "Я не понимаю."],
    ["Can you help me, please?", "Можете мне помочь?"], ["No problem.", "Без проблем."], ["Goodbye!", "До свидания!"], ["Good night!", "Спокойной ночи!"],
  ]),
  V("v_numbers", "A1", "Числа, время, даты", [
    ["What time is it?", "Который час?"], ["It's five o'clock.", "Пять часов."], ["It's half past six.", "Половина седьмого."], ["It's a quarter to nine.", "Без четверти девять."],
    ["What's the date today?", "Какое сегодня число?"], ["It's the first of May.", "Первое мая."], ["My birthday is in June.", "Мой день рождения в июне."], ["I was born in 1990.", "Я родился в 1990 году."],
    ["What's your phone number?", "Какой у вас номер телефона?"], ["How old are you?", "Сколько вам лет?"], ["It costs twenty dollars.", "Это стоит двадцать долларов."], ["See you on Monday.", "Увидимся в понедельник."],
    ["at the weekend", "на выходных"], ["in the morning", "утром"], ["in the evening", "вечером"], ["at night", "ночью"],
    ["every day", "каждый день"], ["once a week", "раз в неделю"], ["two weeks ago", "две недели назад"], ["next month", "в следующем месяце"],
  ]),
  V("v_family", "A1", "Семья и люди", [
    ["This is my husband.", "Это мой муж."], ["This is my wife.", "Это моя жена."], ["I have two children.", "У меня двое детей."], ["My son is ten.", "Моему сыну десять."],
    ["My daughter goes to school.", "Моя дочь ходит в школу."], ["My parents live in Samara.", "Мои родители живут в Самаре."], ["I'm married.", "Я женат / замужем."], ["I'm single.", "Я не в браке."],
    ["She has long dark hair.", "У неё длинные тёмные волосы."], ["He is tall and thin.", "Он высокий и худой."], ["She's very kind.", "Она очень добрая."], ["He's funny.", "Он смешной."],
    ["my best friend", "мой лучший друг"], ["my grandmother", "моя бабушка"], ["my uncle and aunt", "мои дядя и тётя"], ["We are a big family.", "У нас большая семья."],
  ]),
  V("v_work1", "A1", "Работа и профессии", [
    ["What do you do?", "Чем вы занимаетесь? (кем работаете)"], ["I'm a manager.", "Я менеджер."], ["I'm an engineer.", "Я инженер."], ["I work for a big company.", "Я работаю в большой компании."],
    ["I work in IT.", "Я работаю в IT."], ["I work from home.", "Я работаю из дома."], ["I'm a student.", "Я студент."], ["I don't work at the moment.", "Сейчас я не работаю."],
    ["My office is in the city centre.", "Мой офис в центре города."], ["I start at nine and finish at six.", "Я начинаю в девять и заканчиваю в шесть."], ["I have a meeting today.", "У меня сегодня встреча."], ["My boss is nice.", "Мой начальник хороший."],
    ["I like my job.", "Мне нравится моя работа."], ["I write emails every day.", "Я каждый день пишу письма."], ["I'm on holiday.", "Я в отпуске."], ["It's my day off.", "У меня выходной."],
  ]),
  V("v_routine", "A1", "Распорядок дня", [
    ["I wake up at seven.", "Я просыпаюсь в семь."], ["I get up early.", "Я встаю рано."], ["I take a shower.", "Я принимаю душ."], ["I have breakfast.", "Я завтракаю."],
    ["I go to work by bus.", "Я езжу на работу на автобусе."], ["I have lunch at one.", "Я обедаю в час."], ["I come home at seven.", "Я прихожу домой в семь."], ["I cook dinner.", "Я готовлю ужин."],
    ["I watch TV.", "Я смотрю телевизор."], ["I read a book.", "Я читаю книгу."], ["I go to bed at eleven.", "Я ложусь спать в одиннадцать."], ["I usually walk the dog.", "Обычно я гуляю с собакой."],
    ["I never drink coffee in the evening.", "Я никогда не пью кофе вечером."], ["I sometimes go to the gym.", "Иногда я хожу в спортзал."], ["I always brush my teeth.", "Я всегда чищу зубы."], ["I do the housework at the weekend.", "Я убираюсь на выходных."],
  ]),
  V("v_food", "A1", "Еда и кафе", [
    ["I'm hungry.", "Я голоден."], ["I'm thirsty.", "Я хочу пить."], ["Can I have the menu, please?", "Можно меню?"], ["I'd like a cup of tea.", "Я бы хотел чашку чая."],
    ["A glass of water, please.", "Стакан воды, пожалуйста."], ["What do you recommend?", "Что посоветуете?"], ["I don't eat meat.", "Я не ем мясо."], ["Can I have the bill, please?", "Можно счёт?"],
    ["It's delicious!", "Очень вкусно!"], ["chicken and rice", "курица с рисом"], ["a piece of cake", "кусок торта"], ["fruit and vegetables", "фрукты и овощи"],
    ["bread and butter", "хлеб с маслом"], ["I have breakfast at home.", "Я завтракаю дома."], ["Do you have any soup?", "У вас есть суп?"], ["Takeaway, please.", "С собой, пожалуйста."],
  ]),
  V("v_city", "A1", "Город и дорога", [
    ["Excuse me, where is the bank?", "Извините, где банк?"], ["Is there a pharmacy near here?", "Здесь рядом есть аптека?"], ["Go straight on.", "Идите прямо."], ["Turn left.", "Поверните налево."],
    ["Turn right at the traffic lights.", "Поверните направо на светофоре."], ["It's on the corner.", "Это на углу."], ["It's opposite the station.", "Это напротив вокзала."], ["It's next to the supermarket.", "Это рядом с супермаркетом."],
    ["Is it far from here?", "Это далеко отсюда?"], ["It's a five-minute walk.", "Пять минут пешком."], ["How can I get to the airport?", "Как добраться до аэропорта?"], ["Take the metro.", "Поезжайте на метро."],
    ["Where is the bus stop?", "Где автобусная остановка?"], ["A ticket to the centre, please.", "Билет до центра, пожалуйста."], ["I'm lost.", "Я заблудился."], ["Can you show me on the map?", "Покажете на карте?"],
  ]),
  V("v_home", "A1", "Дом и вещи", [
    ["I live in a flat.", "Я живу в квартире."], ["There are three rooms.", "Там три комнаты."], ["The kitchen is small.", "Кухня маленькая."], ["There is a sofa in the living room.", "В гостиной есть диван."],
    ["My bedroom is on the second floor.", "Моя спальня на втором этаже."], ["The keys are on the table.", "Ключи на столе."], ["The cat is under the bed.", "Кот под кроватью."], ["Open the window, please.", "Откройте окно, пожалуйста."],
    ["Close the door.", "Закройте дверь."], ["Turn on the light.", "Включите свет."], ["My phone is in my bag.", "Мой телефон в сумке."], ["We have a balcony.", "У нас есть балкон."],
  ]),
  V("v_weather", "A1", "Погода и одежда", [
    ["What's the weather like?", "Какая погода?"], ["It's sunny.", "Солнечно."], ["It's raining.", "Идёт дождь."], ["It's cold today.", "Сегодня холодно."],
    ["It's hot and humid.", "Жарко и влажно."], ["It's snowing.", "Идёт снег."], ["Take an umbrella.", "Возьми зонт."], ["Put on your coat.", "Надень пальто."],
    ["I'm wearing jeans and a T-shirt.", "На мне джинсы и футболка."], ["These shoes are comfortable.", "Эти туфли удобные."], ["I need a warm jacket.", "Мне нужна тёплая куртка."], ["My favourite colour is blue.", "Мой любимый цвет — синий."],
  ]),

  V("v_travel", "A2", "Путешествия", [
    ["I'd like to book a room.", "Я бы хотел забронировать номер."], ["I have a reservation.", "У меня бронь."], ["What time is check-out?", "Во сколько выезд?"], ["Is breakfast included?", "Завтрак включён?"],
    ["Where can I buy a ticket?", "Где купить билет?"], ["The flight is delayed.", "Рейс задерживается."], ["I missed my train.", "Я опоздал на поезд."], ["Window or aisle?", "У окна или у прохода?"],
    ["I've lost my passport.", "Я потерял паспорт."], ["Could you take a photo of us?", "Не могли бы вы нас сфотографировать?"], ["We went sightseeing.", "Мы ходили осматривать достопримечательности."], ["It was worth it.", "Это того стоило."],
    ["How long does it take?", "Сколько времени это занимает?"], ["a return ticket", "билет туда и обратно"], ["a single ticket", "билет в одну сторону"], ["We stayed for a week.", "Мы пробыли неделю."],
  ]),
  V("v_shop", "A2", "Покупки", [
    ["How much is this?", "Сколько это стоит?"], ["It's too expensive.", "Это слишком дорого."], ["Do you have it in a smaller size?", "Есть размер поменьше?"], ["Can I try it on?", "Можно примерить?"],
    ["Where are the changing rooms?", "Где примерочные?"], ["It doesn't fit.", "Не подходит по размеру."], ["It suits you.", "Тебе идёт."], ["I'm just looking, thanks.", "Я просто смотрю, спасибо."],
    ["Can I pay by card?", "Можно оплатить картой?"], ["Is there a discount?", "Есть скидка?"], ["I'd like a refund.", "Я хочу вернуть деньги."], ["Could I have a receipt?", "Можно чек?"],
    ["It's on sale.", "Это со скидкой (на распродаже)."], ["I'll take it.", "Беру."],
  ]),
  V("v_health", "A2", "Здоровье", [
    ["I don't feel well.", "Я плохо себя чувствую."], ["I've got a cold.", "Я простудился."], ["I have a sore throat.", "У меня болит горло."], ["My back hurts.", "У меня болит спина."],
    ["I have a temperature.", "У меня температура."], ["I need to see a doctor.", "Мне нужно к врачу."], ["I'd like to make an appointment.", "Я хочу записаться на приём."], ["Take this medicine twice a day.", "Принимайте лекарство два раза в день."],
    ["You should stay in bed.", "Вам следует соблюдать постельный режим."], ["Get well soon!", "Выздоравливай!"], ["I'm allergic to nuts.", "У меня аллергия на орехи."], ["I feel much better now.", "Сейчас мне гораздо лучше."],
  ]),
  V("v_past", "A2", "Рассказ о прошлом", [
    ["Yesterday I stayed at home.", "Вчера я был дома."], ["Last year I changed my job.", "В прошлом году я сменил работу."], ["I was very tired.", "Я очень устал."], ["We had a great time.", "Мы отлично провели время."],
    ["What did you do at the weekend?", "Что ты делал на выходных?"], ["I didn't go out.", "Я никуда не ходил."], ["Where did you go?", "Куда ты ходил/ездил?"], ["It was a long time ago.", "Это было давно."],
    ["When I was a child, I lived in a village.", "Когда я был ребёнком, я жил в деревне."], ["I met him three years ago.", "Я познакомился с ним три года назад."], ["Then we went to a restaurant.", "Потом мы пошли в ресторан."], ["After that we went home.", "После этого мы пошли домой."],
  ]),
  V("v_feelings", "A2", "Чувства и мнения", [
    ["I'm really happy about it.", "Я очень этому рад."], ["I'm worried about the exam.", "Я волнуюсь из-за экзамена."], ["I'm bored.", "Мне скучно."], ["It's boring.", "Это скучно."],
    ["I'm interested in history.", "Я интересуюсь историей."], ["I'm afraid of spiders.", "Я боюсь пауков."], ["I'm tired of waiting.", "Я устал ждать."], ["I think it's a good idea.", "Думаю, это хорошая идея."],
    ["I don't think so.", "Я так не думаю."], ["I'm not sure.", "Я не уверен."], ["That sounds great!", "Звучит здорово!"], ["What a pity!", "Как жаль!"],
  ]),
  V("v_work2", "A2", "Офис и задачи", [
    ["I have a lot of work today.", "У меня сегодня много работы."], ["I'm busy right now.", "Я сейчас занят."], ["Can we talk later?", "Можем поговорить позже?"], ["The meeting is at ten.", "Встреча в десять."],
    ["I need to finish this report.", "Мне нужно закончить этот отчёт."], ["Could you check this, please?", "Не мог бы ты это проверить?"], ["I'll send it tomorrow.", "Я пришлю это завтра."], ["What's the deadline?", "Какой срок?"],
    ["I'm going to call the client.", "Я собираюсь позвонить клиенту."], ["The printer doesn't work.", "Принтер не работает."], ["I'm working on a new project.", "Я работаю над новым проектом."], ["Let's have a short break.", "Давайте сделаем короткий перерыв."],
  ]),

  V("v_pv1", "B1", "Фразовые глаголы: базовые", [
    ["I need to look for a new job.", "Мне нужно искать новую работу."], ["Could you look after my cat?", "Не мог бы ты присмотреть за моим котом?"], ["I gave up smoking.", "Я бросил курить."], ["Turn off your phone, please.", "Выключите телефон, пожалуйста."],
    ["We ran out of milk.", "У нас закончилось молоко."], ["I'll pick you up at six.", "Я заеду за тобой в шесть."], ["Please fill in this form.", "Заполните, пожалуйста, эту форму."], ["Let's find out the truth.", "Давайте выясним правду."],
    ["They put off the meeting.", "Они отложили встречу."], ["I get on well with my colleagues.", "Я хорошо лажу с коллегами."], ["Hurry up, we're late!", "Поторопись, мы опаздываем!"], ["I'm looking forward to the holiday.", "Жду не дождусь отпуска."],
    ["Can you set up the projector?", "Можешь настроить проектор?"], ["The plane took off on time.", "Самолёт взлетел вовремя."], ["I came across an interesting article.", "Я наткнулся на интересную статью."], ["Don't let me down.", "Не подведи меня."],
  ]),
  V("v_opinion", "B1", "Мнение и аргументы", [
    ["In my opinion, it's a waste of time.", "По-моему, это пустая трата времени."], ["As far as I know,…", "Насколько я знаю,…"], ["I totally agree.", "Полностью согласен."], ["I see what you mean, but…", "Понимаю, о чём вы, но…"],
    ["That's not always true.", "Это не всегда так."], ["It depends on the situation.", "Зависит от ситуации."], ["The main reason is that…", "Главная причина в том, что…"], ["On the other hand,…", "С другой стороны,…"],
    ["For example,…", "Например,…"], ["That's why I believe…", "Поэтому я считаю…"], ["Let me put it another way.", "Скажу иначе."], ["I've changed my mind.", "Я передумал."],
  ]),
  V("v_experience", "B1", "Опыт и события", [
    ["Have you ever been abroad?", "Ты когда-нибудь был за границей?"], ["I've never seen anything like it.", "Никогда не видел ничего подобного."], ["I've just arrived.", "Я только что приехал."], ["I haven't decided yet.", "Я ещё не решил."],
    ["I've lived here for five years.", "Я живу здесь пять лет."], ["I've known her since school.", "Я знаю её со школы."], ["Something strange happened yesterday.", "Вчера случилось кое-что странное."], ["While I was driving, it started to snow.", "Пока я ехал, пошёл снег."],
    ["It turned out that…", "Оказалось, что…"], ["I used to play football.", "Раньше я играл в футбол."], ["I'm used to getting up early.", "Я привык рано вставать."], ["It was the worst day ever.", "Это был худший день в жизни."],
  ]),
  V("v_workb1", "B1", "Рабочая лексика B1", [
    ["We need to meet the deadline.", "Нам нужно уложиться в срок."], ["The project is behind schedule.", "Проект отстаёт от графика."], ["Let's set up a call.", "Давайте назначим созвон."], ["I'll follow up on this.", "Я прослежу за этим / вернусь к этому."],
    ["Could you give me some feedback?", "Можете дать обратную связь?"], ["We have to cut costs.", "Нам нужно сократить расходы."], ["She's in charge of marketing.", "Она отвечает за маркетинг."], ["I'm responsible for the budget.", "Я отвечаю за бюджет."],
    ["The task has been assigned to me.", "Задачу поручили мне."], ["We're short of staff.", "Нам не хватает людей."], ["Let's go through the agenda.", "Давайте пройдёмся по повестке."], ["It's not my area, but I'll ask.", "Это не моя область, но я спрошу."],
  ]),
  V("v_collb1", "B1", "Устойчивые сочетания (collocations)", [
    ["make a decision", "принять решение"], ["make a mistake", "совершить ошибку"], ["do your best", "сделать всё возможное"], ["do homework", "делать домашнее задание"],
    ["take a break", "сделать перерыв"], ["take a photo", "сфотографировать"], ["have a look", "взглянуть"], ["pay attention", "обращать внимание"],
    ["keep in touch", "поддерживать связь"], ["save time", "экономить время"], ["catch a cold", "простудиться"], ["break a promise", "нарушить обещание"],
    ["make friends", "заводить друзей"], ["tell the truth", "говорить правду"], ["make money", "зарабатывать деньги"], ["do business", "вести бизнес"],
  ]),

  V("v_pv2", "B2", "Фразовые глаголы B2", [
    ["We need to come up with a solution.", "Нам нужно придумать решение."], ["The deal fell through.", "Сделка сорвалась."], ["Let's go over the figures again.", "Давайте ещё раз пройдёмся по цифрам."], ["I can't put up with this noise.", "Я не могу терпеть этот шум."],
    ["They brought up an important issue.", "Они подняли важный вопрос."], ["We had to call off the event.", "Нам пришлось отменить мероприятие."], ["She stood in for me at the meeting.", "Она заменила меня на встрече."], ["Prices have gone up.", "Цены выросли."],
    ["I'll look into it.", "Я разберусь с этим."], ["He turned down the offer.", "Он отклонил предложение."], ["We're running behind.", "Мы отстаём."], ["It boils down to money.", "Всё сводится к деньгам."],
    ["Can you walk me through the process?", "Можешь провести меня по процессу?"], ["Let's touch base next week.", "Давай сверимся на следующей неделе."], ["The new rules will be phased in.", "Новые правила будут вводиться поэтапно."], ["He backed down eventually.", "В итоге он отступил."],
  ]),
  V("v_linkers", "B2", "Связки и вводные слова", [
    ["However, the results were disappointing.", "Однако результаты разочаровали."], ["Moreover, it saves money.", "Более того, это экономит деньги."], ["Nevertheless, we decided to go on.", "Тем не менее мы решили продолжать."], ["Although it was late, we kept working.", "Хотя было поздно, мы продолжали работать."],
    ["Despite the rain, the event took place.", "Несмотря на дождь, мероприятие состоялось."], ["As a result, sales increased.", "В результате продажи выросли."], ["In contrast, the other team…", "Напротив, другая команда…"], ["On the whole, I'm satisfied.", "В целом я доволен."],
    ["Whereas I prefer tea, she loves coffee.", "Тогда как я предпочитаю чай, она любит кофе."], ["Therefore, we need more time.", "Поэтому нам нужно больше времени."], ["In addition to that,…", "Вдобавок к этому,…"], ["To be fair,…", "Справедливости ради,…"],
    ["As far as I'm concerned,…", "Что касается меня,…"], ["Having said that,…", "При этом / С другой стороны,…"],
  ]),
  V("v_collb2", "B2", "Collocations B2", [
    ["meet a deadline", "уложиться в срок"], ["raise awareness", "повышать осведомлённость"], ["reach an agreement", "достичь соглашения"], ["take responsibility", "брать ответственность"],
    ["draw a conclusion", "сделать вывод"], ["bear in mind", "иметь в виду"], ["face a challenge", "столкнуться с трудностью"], ["make progress", "добиться прогресса"],
    ["pose a threat", "представлять угрозу"], ["gain experience", "набираться опыта"], ["run a business", "вести бизнес"], ["take into account", "принимать во внимание"],
    ["a heavy workload", "большая нагрузка"], ["a steep learning curve", "быстрое и трудное обучение"], ["a key factor", "ключевой фактор"], ["a long-term goal", "долгосрочная цель"],
  ]),
  V("v_idioms", "B2", "Идиомы и разговорные выражения", [
    ["It's not my cup of tea.", "Это не моё / мне это не по душе."], ["Let's call it a day.", "На сегодня хватит."], ["I'm on the fence.", "Я колеблюсь."], ["It's a piece of cake.", "Проще простого."],
    ["We're on the same page.", "Мы понимаем друг друга / одинаково видим ситуацию."], ["Let's get the ball rolling.", "Давайте начнём."], ["It costs an arm and a leg.", "Стоит целое состояние."], ["I'll keep you in the loop.", "Буду держать в курсе."],
    ["That rings a bell.", "Что-то знакомое."], ["Better late than never.", "Лучше поздно, чем никогда."], ["Break a leg!", "Ни пуха ни пера!"], ["Under the weather", "приболевший, не в форме"],
  ]),
  V("v_workb2", "B2", "Деловая лексика B2", [
    ["We need to streamline the process.", "Нам нужно упростить процесс."], ["What's the return on investment?", "Какая окупаемость инвестиций?"], ["Let's prioritise the key tasks.", "Давайте расставим приоритеты по ключевым задачам."], ["The stakeholders need to sign off on it.", "Заинтересованные стороны должны это утвердить."],
    ["We're facing a tight budget.", "У нас ограниченный бюджет."], ["This is a win-win situation.", "Это взаимовыгодная ситуация."], ["Could you elaborate on that?", "Не могли бы вы подробнее?"], ["I'd like to raise a concern.", "Я хотел бы высказать опасение."],
    ["Let's take this offline.", "Давайте обсудим это отдельно."], ["We should manage expectations.", "Нам следует управлять ожиданиями."], ["The bottom line is…", "Суть в том, что…"], ["It's within the scope of the project.", "Это в рамках проекта."],
  ]),
];
