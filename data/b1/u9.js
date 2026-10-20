// B1 юнит 9: мнения, аргументы, встречи и мини-презентация (рабочая ветка с месяца 9).
export default {
  id: "b1_u9",
  level: "B1",
  phase: 3,
  icon: "🎤",
  title: "Мнения, встречи и мини-презентация",
  about: "Как выражать и аргументировать мнение, соглашаться и спорить, участвовать во встрече и сделать презентацию на 5 минут.",
  lessons: [
    {
      id: "b1_u9_l1",
      title: "Мнение и аргументы: согласиться, возразить, убедить",
      goal: "Вы научитесь высказывать мнение, аргументировать его и вежливо не соглашаться — главный навык выхода с плато B1.",
      steps: [
        {
          t: "text",
          h: "Почему это важно",
          md: `План предупреждает: **на B1 многие застревают**. Рецепт из плана — больше слушания и **уроки с обсуждением и мнениями**. Здесь — инструменты для таких обсуждений.

**Высказать мнение:**
| Нейтрально | Уверенно | Осторожно |
|---|---|---|
| [[I think…]] | [[I'm convinced that…]] | [[I'm not sure, but…]] |
| [[In my opinion,…]] | [[I strongly believe…]] | [[It seems to me that…]] |
| [[As far as I'm concerned,…]] | [[There's no doubt that…]] | [[I may be wrong, but…]] |

**Аргументы:**
- [[The main reason is that…]] — Главная причина в том, что…
- [[For example,…]] / [[For instance,…]]
- [[What's more,…]] / [[Besides,…]] — Более того / К тому же
- [[On the one hand… on the other hand…]]
- [[That's why…]] / [[So,…]]

> «I am agree» — частая ошибка. **agree** — обычный глагол: [[I agree.]] / [[I don't agree.]] Без am!`,
        },
        {
          t: "text",
          h: "Согласиться и возразить вежливо",
          md: `**Согласиться:**
- [[I completely agree.]] / [[Absolutely.]] / [[Exactly.]]
- [[That's a good point.]] — Хорошее замечание.
- [[I couldn't agree more.]] — Полностью согласен.

**Частично согласиться (самое вежливое возражение):**
- [[I see what you mean, but…]] — Понимаю, о чём вы, но…
- [[That's true, but…]]
- [[You have a point, however…]]
- [[I agree up to a point.]] — Согласен до определённой степени.

**Не согласиться:**
- [[I'm not sure I agree.]] — Не уверен, что согласен.
- [[I see it differently.]] — Я вижу это иначе.
- [[I'm afraid I disagree.]] — Боюсь, я не согласен.

>i Англоязычная культура общения ценит **смягчение**. Прямое «No, you're wrong» звучит грубо. Начинайте возражение с признания точки зрения собеседника: «I see your point, but…».

**Переспросить и уточнить:** [[What do you mean by…?]] [[Could you give an example?]] [[So, are you saying that…?]]`,
        },
        {
          t: "choice",
          h: "Выберите лучший вариант",
          items: [
            ["Как сказать «Я согласен»?", ["I am agree.", "I agree.", "I'm agreeing."], 1, "agree — без am."],
            ["Самое вежливое возражение:", ["You're wrong.", "No!", "I see what you mean, but I think…"], 2, ""],
            ["«Полностью согласен»", ["I couldn't agree more.", "I can agree more.", "I agree not more."], 0, ""],
            ["«Более того,…»", ["What's more,…", "More of that,…", "Moreover of this,…"], 0, ""],
            ["Уточнить мысль собеседника:", ["What do you mean by that?", "What you mean?", "What is mean?"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["По-моему, это хорошая идея, но она слишком дорогая.", "In my opinion, it's a good idea, but it's too expensive.|I think it's a good idea, but it's too expensive.|In my opinion it's a good idea, but it's too expensive.|In my opinion, it is a good idea, but it is too expensive.", ""],
            ["Понимаю, о чём вы, но я вижу это иначе.", "I see what you mean, but I see it differently.|I understand what you mean, but I see it differently.", ""],
            ["Я не согласен.", "I don't agree.|I disagree.|I do not agree.", ""],
            ["Главная причина в том, что у нас мало времени.", "The main reason is that we don't have much time.|The main reason is that we have little time.|The main reason is that we don't have enough time.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Мнение: I think / In my opinion / I'm convinced / It seems to me.
- Аргументы: The main reason is… For example… What's more… That's why…
- Возражение мягко: I see what you mean, but… / I'm not sure I agree.
- **I agree** — без am.`,
        },
      ],
    },
    {
      id: "b1_u9_l2",
      title: "Встреча и обсуждение задачи",
      goal: "Вы научитесь участвовать в рабочей встрече: давать статус, обсуждать задачу, распределять работу, подводить итоги.",
      steps: [
        {
          t: "text",
          h: "Язык встреч",
          md: `**Статус («где мы»):**
- [[We're on track.]] — Идём по плану. / [[We're behind schedule.]] — Отстаём.
- [[We've finished…, and now we're working on…]]
- [[The main issue at the moment is…]] — Главная проблема сейчас…

**Обсуждение задачи:**
- [[What's the deadline?]] / [[What's the priority?]]
- [[Who's responsible for…?]]
- [[What do we need to get this done?]]
- [[I'm stuck with…]] — Я застрял на… / [[I need some help with…]]

**Распределение работы:**
- [[I'll take care of the report.]] — Я займусь отчётом.
- [[Could you look into this?]] — Можешь разобраться с этим?
- [[Let's split the work.]]

**Вмешаться в разговор:**
- [[Can I add something here?]] / [[Sorry to interrupt, but…]]
- [[Just to clarify,…]] — Уточню:…
- [[Going back to what Anna said,…]]

**Итоги:**
- [[So, to sum up, we've agreed that…]]
- [[The next steps are…]] — Следующие шаги:…
- [[I'll send a follow-up email.]] — Пришлю письмо с итогами.`,
        },
        {
          t: "dialog",
          h: "Диалог: еженедельная встреча команды",
          lines: [
            ["Lead", "OK, let's get started. Mike, how's the mobile app going?", "Итак, начнём. Майк, как дела с мобильным приложением?"],
            ["Mike", "We're slightly behind schedule. We've finished the login page, but the payment module is taking longer than expected.", "Немного отстаём. Страницу входа закончили, но модуль оплаты занимает больше времени, чем ожидалось."],
            ["Lead", "What's the main issue?", "В чём главная проблема?"],
            ["Mike", "The bank's documentation isn't very clear. I'm stuck with the testing part.", "Документация банка не очень понятная. Я застрял на тестировании."],
            ["Sara", "Can I add something here? I worked with that bank last year. I can help you with it.", "Можно добавлю? Я работала с этим банком в прошлом году. Могу помочь."],
            ["Lead", "Great. So, Sara will help Mike with the payment module. Mike, when do you think it'll be ready?", "Отлично. Итак, Сара поможет Майку с модулем оплаты. Майк, когда, по-твоему, будет готово?"],
            ["Mike", "With Sara's help, probably by Thursday.", "С помощью Сары — вероятно, к четвергу."],
            ["Lead", "Perfect. To sum up: the payment module by Thursday, and I'll update the client. I'll send a follow-up email after the meeting.", "Идеально. Подытожу: модуль оплаты к четвергу, я обновлю клиента. После встречи пришлю письмо с итогами."],
          ],
          qs: [
            ["Почему проект отстаёт?", ["Заболел разработчик", "Непонятная документация банка", "Клиент изменил требования"], 1, "The bank's documentation isn't very clear."],
            ["Кто поможет Майку?", ["Руководитель", "Сара", "Клиент"], 1, ""],
            ["Когда будет готов модуль?", ["Сегодня", "К четвергу", "Через неделю"], 1, "Probably by Thursday."],
          ],
        },
        {
          t: "choice",
          h: "Что сказать на встрече?",
          items: [
            ["Сообщить, что всё идёт по плану:", ["We're on track.", "We're on the road.", "We go by plan."], 0, ""],
            ["Вежливо вмешаться:", ["Stop! I want to say.", "Can I add something here?", "Listen to me."], 1, ""],
            ["Взять задачу на себя:", ["I'll take care of it.", "I take care.", "It's mine care."], 0, ""],
            ["Подвести итоги:", ["So, to sum up,…", "So, to summarise up,…", "In the summary,…"], 0, ""],
            ["Сказать, что застряли:", ["I'm stuck with this.", "I'm stick on this.", "I'm stopped in this."], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Мы немного отстаём от графика.", "We're slightly behind schedule.|We're a bit behind schedule.|We are a little behind schedule.|We're a little behind schedule.", ""],
            ["Можешь разобраться с этой проблемой?", "Could you look into this problem?|Can you look into this problem?|Could you look into this issue?|Can you look into this issue?", "look into — разобраться."],
            ["Подытожу: мы договорились перенести запуск.", "To sum up, we've agreed to postpone the launch.|So, to sum up, we agreed to postpone the launch.|To sum up, we agreed to move the launch.|To sum up, we've agreed to delay the launch.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Статус: We're on track / behind schedule. The main issue is…
- Задачи: What's the deadline? I'll take care of… Could you look into…?
- Вмешаться: Can I add something? Just to clarify…
- Итоги: To sum up… The next steps are… I'll send a follow-up email.`,
        },
      ],
    },
    {
      id: "b1_u9_l3",
      title: "Мини-презентация на 5 минут",
      goal: "Вы подготовите и проведёте 5-минутную презентацию — план рекомендует делать это раз в 2 недели.",
      steps: [
        {
          t: "text",
          h: "Структура презентации",
          md: `**1. Вступление (30 секунд)**
- [[Good morning, everyone. Thank you for coming.]]
- [[Today I'd like to talk about…]] — Сегодня я хотел бы рассказать о…
- [[I've divided my talk into three parts.]] — Я разделил выступление на три части.
- [[I'll be happy to answer questions at the end.]]

**2. Основная часть (3–4 минуты)**
- [[First, let's look at…]] / [[Let me start with…]]
- [[Moving on to…]] / [[Now let's turn to…]] — Переходим к…
- [[As you can see on this slide,…]] / [[This chart shows…]]
- [[This is important because…]]
- [[For example,…]]

**3. Заключение (30 секунд)**
- [[To sum up,…]] / [[To conclude,…]]
- [[The key point to remember is…]] — Главное, что стоит запомнить,…
- [[Thank you for your attention. Any questions?]]

**4. Вопросы**
- [[That's a great question.]]
- [[If I understand you correctly, you're asking…]]
- [[I'm not sure, but I'll find out and get back to you.]]`,
        },
        {
          t: "text",
          h: "Как подготовиться за неделю",
          md: `1. **Выберите тему**, которую хорошо знаете: ваш проект, хобби, город, книга, полезная привычка.
2. **Напишите план** по структуре: 3 пункта основной части, по 2–3 факта и примера в каждом.
3. **Не пишите текст целиком** — только ключевые слова. Иначе будете читать, а не говорить.
4. **Прорепетируйте вслух 3 раза** с таймером. Цель — 5 минут.
5. **Запишите себя** и прослушайте: где паузы, где «э-э-э», где перешли на русский?
6. **Проведите** в звонке с Мией (тема «Мини-презентация на 5 минут») — она задаст вопросы.

>i Слова-«заполнители» вместо молчания и «э-э»: [[Well,…]], [[Let me think…]], [[How can I put it…]], [[What I mean is…]]. Они дают секунду подумать и звучат естественно.`,
        },
        {
          t: "examples",
          h: "Образец начала презентации",
          items: [
            ["Good morning, everyone. Today I'd like to talk about remote work.", "Доброе утро всем. Сегодня я хотел бы поговорить об удалённой работе."],
            ["I've divided my talk into three parts: the benefits, the problems and some practical tips.", "Я разделил выступление на три части: плюсы, проблемы и практические советы."],
            ["Let me start with the benefits.", "Начну с преимуществ."],
            ["As you can see on this slide, people save about an hour a day on commuting.", "Как видно на слайде, люди экономят около часа в день на дороге."],
            ["Moving on to the problems, the biggest one is isolation.", "Переходя к проблемам, главная из них — изоляция."],
            ["To sum up, remote work can be great if you organise it well.", "Подводя итог, удалённая работа может быть отличной, если её хорошо организовать."],
            ["Thank you for your attention. Are there any questions?", "Спасибо за внимание. Есть вопросы?"],
          ],
        },
        {
          t: "order",
          h: "Соберите фразы презентации",
          items: [
            ["Today I'd like to talk about my project.", "Сегодня я хотел бы рассказать о своём проекте."],
            ["Let's move on to the next point.", "Перейдём к следующему пункту."],
            ["As you can see on this slide, sales have grown.", "Как видно на слайде, продажи выросли."],
            ["Thank you for your attention.", "Спасибо за внимание."],
          ],
        },
        {
          t: "speak",
          h: "Проговорите каркас своей презентации",
          items: [
            ["Good morning, everyone. Today I'd like to talk about…", "Доброе утро всем. Сегодня я хотел бы рассказать о…"],
            ["I've divided my talk into three parts.", "Я разделил выступление на три части."],
            ["Moving on to the second point,…", "Переходя ко второму пункту,…"],
            ["To sum up, the key point to remember is…", "Подводя итог, главное, что стоит запомнить,…"],
            ["That's a great question. Let me think.", "Отличный вопрос. Дайте подумать."],
          ],
        },
        {
          t: "text",
          h: "Итог фазы B1",
          md: `Основной курс B1 пройден! Вы освоили: Present Perfect (и Continuous), Past Continuous/Perfect, used to, условные 0–2, пассив, косвенную речь, герундий и инфинитив, relative clauses, язык мнений, встреч и презентаций.

**Контрольная точка B1 (конец месяца 12):**
- 5 минут о своей работе и проекте, не перепрыгивая на русский;
- 80–85% понимания диалогов B1 со скрытым текстом;
- рабочее письмо 120–150 слов без грубых ошибок;
- встроенный тест уровня показывает B1.

**Если результат ниже — план советует добавить 1–2 месяца на этой фазе.** Это нормально и разумно: B1 — фундамент для B2.`,
        },
      ],
    },
  ],
};
