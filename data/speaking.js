// Темы говорения по фазам (из плана) для ИИ-партнёра и для уроков с репетитором.
const T = (id, level, title, ru, prompt, useful = []) => ({ id, level, title, ru, prompt, useful });

export default {
  monthly: "«Расскажите о себе: кто вы, чем занимаетесь, что делали в последний месяц и какие у вас планы». Одна и та же тема каждый месяц — так виден рост.",
  topics: [
    // A1: знакомство, семья, работа, распорядок дня
    T("a1_intro", "A1", "Знакомство", "Представьтесь: имя, откуда вы, где живёте, сколько лет.", "getting to know each other: name, country, city, age", [
      ["My name is…", "Меня зовут…"], ["I'm from Russia.", "Я из России."], ["I live in…", "Я живу в…"], ["I'm thirty years old.", "Мне тридцать лет."], ["Nice to meet you.", "Приятно познакомиться."], ["And you?", "А вы?"]]),
    T("a1_family", "A1", "Семья", "Расскажите о своей семье: кто есть, как зовут, чем занимаются.", "family members, their names and jobs", [
      ["I have a brother and a sister.", "У меня есть брат и сестра."], ["My wife is a teacher.", "Моя жена — учитель."], ["I don't have children.", "У меня нет детей."], ["My mother's name is Olga.", "Мою маму зовут Ольга."]]),
    T("a1_job", "A1", "Работа", "Кем вы работаете, где, что делаете, нравится ли работа.", "my job: what I do, where I work, do I like it", [
      ["I'm an engineer.", "Я инженер."], ["I work in an office.", "Я работаю в офисе."], ["I work from home.", "Я работаю из дома."], ["I like my job.", "Мне нравится моя работа."], ["I start work at nine.", "Я начинаю работу в девять."]]),
    T("a1_day", "A1", "Мой распорядок дня", "Что вы делаете утром, днём и вечером.", "daily routine: morning, afternoon, evening, using present simple", [
      ["I get up at seven.", "Я встаю в семь."], ["I have breakfast at home.", "Я завтракаю дома."], ["I usually go to work by metro.", "Обычно я езжу на работу на метро."], ["In the evening I watch TV.", "Вечером я смотрю телевизор."], ["I go to bed at eleven.", "Я ложусь спать в одиннадцать."]]),
    T("a1_food", "A1", "В кафе", "Ролевая игра: вы заказываете еду и напитки в кафе.", "ordering food and drinks in a cafe", [
      ["Can I have a coffee, please?", "Можно мне кофе, пожалуйста?"], ["I'd like a sandwich.", "Я бы хотел сэндвич."], ["How much is it?", "Сколько это стоит?"], ["Can I pay by card?", "Можно оплатить картой?"]]),
    T("a1_city", "A1", "Мой город и дорога", "Что есть в вашем городе; как пройти к нужному месту.", "my city: what there is, asking for and giving directions", [
      ["There is a big park near my house.", "Рядом с моим домом есть большой парк."], ["Excuse me, where is the station?", "Извините, где вокзал?"], ["Go straight and turn left.", "Идите прямо и поверните налево."], ["Is it far?", "Это далеко?"]]),
    T("a1_free", "A1", "Свободное время", "Что вы любите делать, что умеете.", "hobbies, likes and dislikes, what I can do", [
      ["I like reading.", "Я люблю читать."], ["I can swim, but I can't ski.", "Я умею плавать, но не умею кататься на лыжах."], ["At the weekend I meet friends.", "На выходных я встречаюсь с друзьями."]]),
    // A2: путешествия, покупки, здоровье, работа, прошлое и планы
    T("a2_weekend", "A2", "Прошлые выходные", "Что вы делали в прошлые выходные (past simple).", "what I did last weekend, using past simple", [
      ["Last weekend I went to…", "В прошлые выходные я ездил в…"], ["It was great.", "Было здорово."], ["I didn't do much.", "Я ничего особенного не делал."], ["What about you?", "А вы?"]]),
    T("a2_travel", "A2", "Путешествия", "Расскажите о поездке: куда, с кем, что видели; спросите собеседника о его.", "travelling: a trip I made, transport, hotels, sightseeing", [
      ["I went to Turkey last summer.", "Прошлым летом я ездил в Турцию."], ["We stayed in a small hotel.", "Мы жили в маленьком отеле."], ["The food was delicious.", "Еда была очень вкусной."], ["I'd like to visit Japan.", "Я бы хотел побывать в Японии."]]),
    T("a2_shopping", "A2", "Покупки", "Ролевая игра в магазине одежды: размер, цена, примерка, возврат.", "shopping for clothes: size, price, trying on, returning", [
      ["Do you have this in a medium?", "У вас есть это размера M?"], ["Can I try it on?", "Можно примерить?"], ["It's too big.", "Слишком большое."], ["I'd like to return this.", "Я хочу это вернуть."]]),
    T("a2_health", "A2", "У врача", "Ролевая игра: вы описываете врачу симптомы.", "at the doctor: describing symptoms, getting advice", [
      ["I have a headache.", "У меня болит голова."], ["I feel sick.", "Меня тошнит / мне плохо."], ["How long have you had it?", "Как давно это у вас?"], ["You should rest.", "Вам следует отдохнуть."]]),
    T("a2_plans", "A2", "Планы на будущее", "Что вы собираетесь делать в ближайшие выходные и в этом году (going to, will).", "future plans: next weekend, this year, using going to and will", [
      ["I'm going to visit my parents.", "Я собираюсь навестить родителей."], ["I'm meeting a friend on Friday.", "В пятницу я встречаюсь с другом."], ["Maybe I'll go to the cinema.", "Может, схожу в кино."]]),
    T("a2_compare", "A2", "Сравнения", "Сравните свой город с другим, лето с зимой, раньше и сейчас.", "comparing cities, seasons, past and present, using comparatives and superlatives", [
      ["Moscow is bigger than London.", "Москва больше Лондона."], ["Summer is the best season.", "Лето — лучшее время года."], ["It's not as cold as last year.", "Не так холодно, как в прошлом году."]]),
    T("a2_work", "A2", "Моя роль на работе", "Опишите свою роль и обязанности, рабочий день.", "describing my role and responsibilities at work", [
      ["I'm responsible for…", "Я отвечаю за…"], ["I work in a team of five people.", "Я работаю в команде из пяти человек."], ["I usually have meetings in the morning.", "Обычно утром у меня встречи."]]),
    // B1: события и опыт, мнения и аргументы, планы, рабочие ситуации
    T("b1_experience", "B1", "Жизненный опыт", "Что вы когда-либо делали (present perfect): необычное, страшное, весёлое.", "life experiences using present perfect: have you ever…", [
      ["Have you ever been to…?", "Вы когда-нибудь были в…?"], ["I've never tried it.", "Я никогда этого не пробовал."], ["It was one of the best days of my life.", "Это был один из лучших дней моей жизни."]]),
    T("b1_story", "B1", "Случай из жизни", "Расскажите историю: что происходило, что случилось, чем кончилось (past continuous/simple).", "telling a story about something that happened, past continuous and past simple", [
      ["I was walking home when…", "Я шёл домой, когда…"], ["Suddenly…", "Вдруг…"], ["In the end…", "В итоге…"], ["Luckily…", "К счастью…"]]),
    T("b1_opinion", "B1", "Мнение: удалённая работа", "Выскажите мнение и аргументы: лучше работать из дома или из офиса?", "debate: remote work vs office work, giving opinions and arguments", [
      ["In my opinion…", "По-моему…"], ["On the one hand… on the other hand…", "С одной стороны… с другой стороны…"], ["I see your point, but…", "Понимаю вашу мысль, но…"], ["That's why I think…", "Поэтому я считаю…"]]),
    T("b1_ifs", "B1", "Что бы вы сделали, если…", "Гипотетические ситуации (2-й условный): выигрыш, суперсила, другая страна.", "hypothetical situations using second conditional", [
      ["If I won the lottery, I would…", "Если бы я выиграл в лотерею, я бы…"], ["If I were you, I'd…", "На вашем месте я бы…"], ["It depends.", "Зависит от обстоятельств."]]),
    T("b1_tech", "B1", "Технологии в жизни", "Как технологии изменили вашу жизнь; плюсы и минусы соцсетей.", "technology and social media: advantages and disadvantages", [
      ["It has changed the way we…", "Это изменило то, как мы…"], ["The main advantage is…", "Главное преимущество —…"], ["The downside is…", "Минус в том, что…"]]),
    T("b1_project", "B1", "Мой проект", "Расскажите о своём проекте на работе: цель, роль, сложности, результат. Цель — 5 минут без перехода на русский.", "my current work project: goals, my role, challenges, results", [
      ["The goal of the project is to…", "Цель проекта —…"], ["My role is to…", "Моя роль —…"], ["The main challenge was…", "Главной сложностью было…"], ["As a result…", "В результате…"]]),
    T("b1_presentation", "B1", "Мини-презентация на 5 минут", "Подготовьте и проведите 5-минутную презентацию на любую тему; партнёр задаст вопросы.", "a 5-minute mini-presentation by the student, then questions", [
      ["Today I'd like to talk about…", "Сегодня я хотел бы рассказать о…"], ["First,… Then,… Finally,…", "Сначала… Затем… Наконец…"], ["To sum up…", "Подводя итог…"], ["Any questions?", "Есть вопросы?"]]),
    // B2: debate, case study, рабочие обсуждения
    T("b2_debate_ai", "B2", "Дебаты: ИИ и работа", "Спор: ИИ заберёт больше рабочих мест, чем создаст? Партнёр займёт противоположную позицию.", "debate: will AI destroy more jobs than it creates; the tutor takes the opposite side and challenges arguments", [
      ["I'd argue that…", "Я бы утверждал, что…"], ["That's a valid point, however…", "Это справедливо, однако…"], ["The evidence suggests…", "Данные говорят о том, что…"], ["Let me play devil's advocate.", "Позвольте возразить ради спора."]]),
    T("b2_case", "B2", "Кейс: проект горит", "Case study: проект отстаёт от сроков на месяц. Обсудите причины и предложите план.", "case study: a project is a month behind schedule, discuss causes and propose a plan", [
      ["The root cause seems to be…", "Корневая причина, похоже, в том, что…"], ["I'd suggest we…", "Я бы предложил…"], ["What if we prioritised…?", "Что, если расставить приоритет на…?"], ["The trade-off is…", "Компромисс в том, что…"]]),
    T("b2_regrets", "B2", "Решения и сожаления", "Важные решения в вашей жизни: что было бы иначе (3-й и смешанный условный, wish).", "life decisions and regrets using third and mixed conditionals and wish", [
      ["If I had known…, I would have…", "Если бы я знал…, я бы…"], ["I wish I had…", "Жаль, что я не…"], ["Looking back,…", "Оглядываясь назад,…"]]),
    T("b2_explain", "B2", "Объясните сложное просто", "Объясните сложную тему из вашей работы человеку не из профессии. Партнёр будет переспрашивать.", "explaining a complex topic from the student's field in simple words; the tutor plays a curious non-expert", [
      ["Put simply,…", "Проще говоря,…"], ["Think of it as…", "Представьте это как…"], ["In other words,…", "Другими словами,…"], ["Does that make sense?", "Понятно?"]]),
    T("b2_news", "B2", "Обсуждение новости", "Перескажите новость или лекцию, которую недавно слушали, и обсудите её.", "summarising and discussing a recent news story or lecture", [
      ["The main point was that…", "Главная мысль была в том, что…"], ["Apparently,…", "Судя по всему,…"], ["What struck me was…", "Меня поразило то, что…"]]),
    T("b2_interview", "B2", "Собеседование на работу", "Партнёр — интервьюер, задаёт неожиданные вопросы о вашем опыте.", "job interview, the tutor is a demanding interviewer asking follow-up and unexpected questions", [
      ["In my previous role, I…", "На прошлой позиции я…"], ["One of my strengths is…", "Одна из моих сильных сторон —…"], ["That's a good question. Let me think.", "Хороший вопрос. Дайте подумать."]]),
  ],
};
