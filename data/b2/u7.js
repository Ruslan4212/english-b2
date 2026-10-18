// B2 юнит 7: collocations и словообразование.
export default {
  id: "b2_u7",
  level: "B2",
  phase: 4,
  icon: "🧬",
  title: "Collocations и словообразование",
  about: "Какие слова «дружат» (make/do, take/have, сильные прилагательные), приставки и суффиксы — как в B2 First.",
  lessons: [
    {
      id: "b2_u7_l1",
      title: "Make или do, take или have",
      goal: "Вы выучите устойчивые сочетания, которые отличают естественную речь от дословного перевода.",
      steps: [
        {
          t: "text",
          h: "Что такое collocations",
          md: `**Collocations** — слова, которые носители **привычно** используют вместе. Логики часто нет: просто «так говорят». По-русски мы «**принимаем** решение», а англичане «**делают** решение» — [[make a decision]]. По-русски «**сильный** дождь», а по-английски «тяжёлый» — [[heavy rain]].

План B2 прямо требует: **collocations и активный словарь**. Именно они делают речь естественной, а не «переводом с русского».

**make** — создать, произвести, результат:
[[make a decision]] (принять решение), [[make a mistake]], [[make money]], [[make progress]], [[make an effort]] (приложить усилие), [[make a phone call]], [[make an appointment]] (записаться), [[make friends]], [[make sure]] (убедиться), [[make a difference]] (иметь значение), [[make a complaint]], [[make an excuse]] (оправдываться).

**do** — деятельность, работа, обязанности:
[[do business]], [[do your homework]], [[do the housework]], [[do the shopping]], [[do exercise]], [[do your best]] (сделать всё возможное), [[do a favour]] (оказать услугу), [[do research]], [[do damage]] (нанести ущерб), [[do a course]].`,
        },
        {
          t: "text",
          h: "take, have, pay, keep, catch",
          md: `**take:** [[take a break]], [[take a photo]], [[take a risk]] (рискнуть), [[take part in]] (участвовать), [[take place]] (происходить), [[take responsibility]], [[take advantage of]] (воспользоваться), [[take into account]] (учитывать), [[take care of]], [[take notes]].

**have:** [[have a look]], [[have a chat]], [[have fun]], [[have a go]] (попробовать), [[have an argument]] (поспорить), [[have no idea]].

**pay:** [[pay attention]] (обращать внимание), [[pay a visit]], [[pay a compliment]].

**keep:** [[keep in touch]], [[keep a promise]], [[keep calm]], [[keep an eye on]] (присматривать).

**catch:** [[catch a cold]], [[catch a bus]], [[catch someone's attention]].

**Прилагательное + существительное:**
| ✅ Английский | ❌ Дословно с русского |
|---|---|
| [[heavy rain]] — сильный дождь | strong rain |
| [[strong coffee]] — крепкий кофе | hard coffee |
| [[high price]] — высокая цена | big price |
| [[heavy traffic]] — плотное движение | big traffic |
| [[a big mistake]] / [[a serious mistake]] | a strong mistake |
| [[deeply sorry]] — глубоко сожалею | strongly sorry |
| [[highly recommend]] — очень рекомендую | strongly recommend (возможно, но highly — классика) |`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["I need to ___ a decision.", ["do", "make", "take"], 1, "make a decision."],
            ["Could you ___ me a favour?", ["make", "do", "give"], 1, "do a favour."],
            ["The meeting will ___ place on Monday.", ["take", "make", "have"], 0, "take place."],
            ["Please ___ attention to the details.", ["make", "give", "pay"], 2, "pay attention."],
            ["We were late because of the ___ traffic.", ["big", "heavy", "strong"], 1, "heavy traffic."],
            ["I'd like a cup of ___ coffee.", ["strong", "hard", "heavy"], 0, "strong coffee."],
            ["I always ___ my best.", ["make", "do", "give"], 1, "do your best."],
            ["Let's ___ a break.", ["do", "make", "take"], 2, "take a break."],
          ],
        },
        {
          t: "fill",
          h: "make, do, take или pay",
          items: [
            ["She ___ a lot of progress last month.", "made", "make progress."],
            ["Don't forget to ___ your homework.", "do", ""],
            ["Can you ___ care of my plants while I'm away?", "take", ""],
            ["I'd like to ___ an appointment with the doctor.", "make", ""],
            ["He didn't ___ any attention to my advice.", "pay", ""],
            ["We need to ___ into account all the risks.", "take", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Я совершил большую ошибку.", "I made a big mistake.|I've made a big mistake.|I made a serious mistake.|I have made a big mistake.", "make a mistake."],
            ["Вчера шёл сильный дождь.", "There was heavy rain yesterday.|It rained heavily yesterday.|Yesterday there was heavy rain.", "heavy rain."],
            ["Мы должны учитывать мнение клиентов.", "We must take into account the opinion of customers.|We must take customers' opinions into account.|We should take into account customers' opinions.|We have to take customers' opinions into account.|We must take the customers' opinion into account.", "take into account."],
            ["Будем на связи!", "Let's keep in touch!|Keep in touch!|We'll keep in touch!", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- make — результат (decision, mistake, money, progress); do — деятельность (homework, business, your best, a favour).
- take place / part / a break / a risk / into account; pay attention; keep in touch.
- heavy rain/traffic, strong coffee, high price.
- Учите слова **сочетаниями** — в «Слова» есть наборы Collocations B1 и B2.`,
        },
      ],
    },
    {
      id: "b2_u7_l2",
      title: "Словообразование: суффиксы",
      goal: "Вы научитесь образовывать существительные, прилагательные и наречия от одного корня — это удваивает словарь.",
      steps: [
        {
          t: "text",
          h: "Одно слово — много форм",
          md: `Зная корень и суффиксы, вы понимаете и строите десятки слов. В экзамене B2 First есть целое задание на это (Word Formation).

**Существительные:**
| Суффикс | От чего | Примеры |
|---|---|---|
| -tion / -sion | глагол | decide → [[decision]], inform → [[information]], discuss → [[discussion]] |
| -ment | глагол | develop → [[development]], agree → [[agreement]], improve → [[improvement]] |
| -ness | прилагательное | happy → [[happiness]], kind → [[kindness]], aware → [[awareness]] |
| -ity | прилагательное | possible → [[possibility]], responsible → [[responsibility]], able → [[ability]] |
| -ance / -ence | | perform → [[performance]], differ → [[difference]], exist → [[existence]] |
| -er / -or / -ist / -ant | человек | teach → [[teacher]], act → [[actor]], science → [[scientist]], assist → [[assistant]] |

**Прилагательные:**
| Суффикс | Примеры |
|---|---|
| -ful (полный) / -less (без) | use → [[useful]] / [[useless]], care → [[careful]] / [[careless]] |
| -able / -ible (можно) | rely → [[reliable]], access → [[accessible]] |
| -al | nature → [[natural]], profession → [[professional]] |
| -ous | danger → [[dangerous]], fame → [[famous]] |
| -ive | create → [[creative]], effect → [[effective]] |
| -ic | economy → [[economic]], science → [[scientific]] |
| -y | health → [[healthy]], noise → [[noisy]] |

**Наречия:** прилагательное + **-ly**: [[effectively]], [[professionally]], [[carefully]].`,
        },
        {
          t: "fill",
          h: "Образуйте слово",
          items: [
            ["Our team made an important ___ yesterday. (DECIDE)", "decision", ""],
            ["The project needs a lot of ___. (IMPROVE)", "improvement|improvements", ""],
            ["Thank you for your ___. (KIND)", "kindness", ""],
            ["This app is very ___ for travellers. (USE)", "useful", ""],
            ["He is a very ___ person — you can trust him. (RELY)", "reliable", ""],
            ["Smoking is ___ for your health. (DANGER)", "dangerous", ""],
            ["She solved the problem ___. (EFFECT)", "effectively", ""],
            ["Taking ___ for your mistakes is important. (RESPONSIBLE)", "responsibility", ""],
          ],
        },
        {
          t: "choice",
          h: "Какая часть речи нужна?",
          items: [
            ["There's a big ___ between the two offers.", ["differ", "different", "difference"], 2, "После a big — существительное."],
            ["She's very ___ at her job.", ["success", "successful", "successfully"], 1, "После very и be — прилагательное."],
            ["He completed the task ___.", ["success", "successful", "successfully"], 2, "Как? — наречие."],
            ["The ___ of the new system took six months.", ["develop", "development", "developing"], 1, "После the — существительное."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Существительные: -tion, -ment, -ness, -ity, -ance/-ence; люди: -er/-or/-ist.
- Прилагательные: -ful/-less, -able, -al, -ous, -ive, -ic, -y. Наречия: -ly.
- Определяйте часть речи по месту в предложении: после the/a — существительное, после be/very — прилагательное, после глагола «как?» — наречие.`,
        },
      ],
    },
    {
      id: "b2_u7_l3",
      title: "Приставки и отрицательные слова",
      goal: "Вы научитесь образовывать противоположные и производные слова с помощью приставок.",
      steps: [
        {
          t: "text",
          h: "Отрицательные приставки",
          md: `| Приставка | Примеры |
|---|---|
| **un-** (самая частая) | [[unhappy]], [[unusual]], [[unfair]], [[unemployed]] (безработный), [[unlikely]] |
| **in-** | [[incorrect]], [[independent]], [[inexpensive]], [[informal]] |
| **im-** (перед m, p) | [[impossible]], [[impolite]], [[impatient]] (нетерпеливый) |
| **il-** (перед l) | [[illegal]] (незаконный), [[illogical]] |
| **ir-** (перед r) | [[irregular]], [[irresponsible]], [[irrelevant]] (не относящийся к делу) |
| **dis-** | [[disagree]], [[dishonest]], [[dislike]], [[disappear]], [[disadvantage]] |

**Другие полезные приставки:**
| Приставка | Значение | Примеры |
|---|---|---|
| **re-** | снова | [[rewrite]], [[redo]], [[reconsider]] (пересмотреть) |
| **mis-** | неправильно | [[misunderstand]], [[mistake]], [[mislead]] (ввести в заблуждение) |
| **over-** | слишком | [[overwork]], [[overestimate]], [[overcrowded]] |
| **under-** | недостаточно | [[underestimate]] (недооценить), [[underpaid]] |
| **pre-** | до | [[preview]], [[prepaid]] |
| **co-** | вместе | [[co-worker]], [[cooperate]] |

>i Комбинируйте суффиксы и приставки: employ → employment → **un**employment; respond → responsible → **ir**responsible → irresponsib**ility**.`,
        },
        {
          t: "choice",
          h: "Выберите правильное отрицание",
          items: [
            ["possible →", ["unpossible", "impossible", "inpossible"], 1, "Перед p — im-."],
            ["legal →", ["illegal", "unlegal", "dislegal"], 0, "Перед l — il-."],
            ["responsible →", ["unresponsible", "irresponsible", "inresponsible"], 1, "Перед r — ir-."],
            ["agree →", ["unagree", "disagree", "misagree"], 1, ""],
            ["Я неправильно понял:", ["I disunderstood.", "I misunderstood.", "I ununderstood."], 1, "mis- — неправильно."],
            ["Не стоит его ___ — он очень умный.", ["overestimate", "underestimate"], 1, "Недооценивать — underestimate."],
          ],
        },
        {
          t: "fill",
          h: "Образуйте слово с приставкой",
          items: [
            ["It's ___ to drive without a licence. (LEGAL)", "illegal", ""],
            ["Sorry, I think you ___ me. (UNDERSTAND, Past)", "misunderstood", ""],
            ["The number of ___ people has fallen. (EMPLOY)", "unemployed", ""],
            ["Please ___ the email — it has too many mistakes. (WRITE)", "rewrite", ""],
            ["He's very ___ — he can't wait even a minute. (PATIENT)", "impatient", ""],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Collocations: make/do/take/pay + heavy rain, strong coffee.
- Суффиксы: -tion, -ment, -ness, -ity, -ful, -less, -able, -ous, -ive, -ly.
- Приставки: un-, in-, im-, il-, ir-, dis-, re-, mis-, over-, under-.

**Практика:** читая статьи (BBC, The Economist), выписывайте сочетания слов целиком — это и есть активный словарь B2.`,
        },
      ],
    },
  ],
};
