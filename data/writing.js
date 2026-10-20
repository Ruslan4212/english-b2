// Задания на письмо по фазам — из блока «Письмо» плана.
const W = (id, level, title, words, task, plan, example) => ({ id, level, title, words, task, plan, example });

export default [
  W("w_a1_me", "A1", "3–5 предложений о себе", "30–50", "Напишите **3–5 предложений о себе**: имя, откуда вы, где живёте, кем работаете, что любите.",
    `- [[My name is …]] — Меня зовут…
- [[I'm from … . I live in …]] — Я из… Я живу в…
- [[I'm a/an … (профессия)]] — не забудьте артикль a/an!
- [[I like … / I don't like …]]
- [[I have a … (семья, питомец)]]`,
    "My name is {N}. I'm from Russia. I live in Kazan. I'm an accountant. I like music and I have a cat."),
  W("w_a1_family", "A1", "Моя семья", "40–60", "Опишите свою семью: кто в ней, как зовут, сколько лет, чем занимаются.",
    `- [[There are four people in my family.]]
- [[My father is …. He is a …]]
- [[My sister's name is …]]
- [[She is … years old.]]`, ""),
  W("w_a1_day", "A1", "Мой рабочий день", "50–70", "Опишите свой обычный рабочий день с утра до вечера (present simple). Используйте время: at 7 o'clock.",
    `- [[I get up at …]]
- [[I have breakfast / I go to work by …]]
- [[I start work at … and finish at …]]
- [[After work I usually …]]
- [[I go to bed at …]]
>i Не забудьте **-s** у he/she: если пишете о ком-то ещё — [[My wife gets up at six.]]`, ""),
  W("w_a1_flat", "A1", "Мой дом", "50–70", "Опишите свою квартиру или дом: что в нём есть (there is/are) и где что находится (предлоги места).",
    `- [[I live in a flat. There are two rooms.]]
- [[There is a big sofa in the living room.]]
- [[There isn't a garden.]]
- [[The TV is next to the window.]]`, ""),
  W("w_a1_msg", "A1", "Сообщение другу", "30–50", "Напишите короткое сообщение другу: пригласите его в кафе в субботу, укажите время и место.",
    `- [[Hi Tom! How are you?]]
- [[Are you free on Saturday?]]
- [[Let's meet at … at … o'clock.]]
- [[See you!]]`, ""),
  W("w_a1_weekend", "A1", "Мои выходные", "50–70", "Что вы обычно делаете на выходных? Что любите и что умеете (can)?", "- [[At the weekend I usually …]]\n- [[On Sunday I …]]\n- [[I can … but I can't …]]", ""),

  W("w_a2_request", "A2", "Письмо-запрос", "60–80", "Напишите письмо в отель: вы хотите забронировать номер, спросите о цене, завтраке и парковке.",
    `- [[Dear Sir or Madam,]] / [[Hello,]]
- [[I would like to book a double room from … to …]]
- [[Could you tell me …?]] / [[Is breakfast included?]]
- [[I look forward to hearing from you.]]
- [[Best regards, …]]`, ""),
  W("w_a2_confirm", "A2", "Подтверждение", "50–80", "Коллега пригласил вас на встречу в четверг в 15:00. Подтвердите участие и спросите, нужно ли что-то подготовить.",
    "- [[Thanks for the invitation.]]\n- [[I can confirm that I will attend the meeting on Thursday at 3 pm.]]\n- [[Should I prepare anything?]]", ""),
  W("w_a2_sorry", "A2", "Извинение", "60–80", "Вы не пришли вчера на встречу. Извинитесь, объясните причину (past simple) и предложите новое время.",
    "- [[I'm sorry I missed the meeting yesterday.]]\n- [[Unfortunately, I was ill / my train was late.]]\n- [[Could we meet on … instead?]]", ""),
  W("w_a2_meet", "A2", "Договорённость о встрече", "60–90", "Предложите партнёру встретиться на следующей неделе: два варианта дня и времени, место, тема встречи.",
    "- [[I'd like to arrange a meeting to discuss …]]\n- [[Are you available on Tuesday at 10 or Wednesday at 2?]]\n- [[We can meet at our office / online.]]", ""),
  W("w_a2_trip", "A2", "Рассказ о поездке", "80–100", "Напишите другу о своей последней поездке: куда ездили, что делали, что понравилось, что нет (past simple).", "- [[Last month I went to …]]\n- [[We visited …, saw …, ate …]]\n- [[The best thing was …]]\n- [[Next time I'm going to …]]", ""),
  W("w_a2_plans", "A2", "Планы на лето", "80–100", "Напишите о своих планах на лето (going to, present continuous, will).", "- [[This summer I'm going to …]]\n- [[I'm flying to … on …]]\n- [[I think it will be …]]", ""),

  W("w_b1_update", "B1", "Рабочее письмо: статус задачи", "120–150", "Напишите руководителю письмо о статусе задачи: что уже сделано (present perfect), что осталось, какие риски, когда будет готово.",
    `- [[Hi …, I'm writing to update you on …]]
- [[So far we have …]] / [[We haven't … yet.]]
- [[The main risk is that …]]
- [[We expect to finish by …]]
- [[Please let me know if you have any questions.]]`, ""),
  W("w_b1_report", "B1", "Отчёт на 150 слов", "150", "Напишите короткий отчёт о прошедшем мероприятии или месяце работы: что было, результаты, выводы, рекомендации.",
    "- [[The purpose of this report is to …]]\n- [[The event was attended by …]] (пассив!)\n- [[Overall, …]]\n- [[I would recommend …]]", ""),
  W("w_b1_process", "B1", "Описание процесса", "120–150", "Опишите процесс из вашей работы или жизни шаг за шагом (пассивный залог, связки first, then, after that).",
    "- [[First, the request is received …]]\n- [[Then it is checked by …]]\n- [[After that, …]]\n- [[Finally, …]]", ""),
  W("w_b1_complaint", "B1", "Жалоба", "120–150", "Напишите вежливую жалобу в компанию: вы купили товар, который сломался. Опишите, что случилось и что вы хотите.",
    "- [[I am writing to complain about …]]\n- [[I bought … on …, but …]]\n- [[I would be grateful if you could …]]", ""),
  W("w_b1_opinion", "B1", "Моё мнение", "130–150", "Напишите своё мнение: «Нужно ли учить иностранные языки в эпоху переводчиков?». Аргументы за и против.",
    "- [[Some people believe that …]]\n- [[However, I think …]]\n- [[Firstly, … Secondly, …]]\n- [[In conclusion, …]]", ""),
  W("w_b1_story", "B1", "История", "130–150", "Напишите историю, которая начинается словами: «It was a normal Monday morning when…» (past continuous, past simple, past perfect).", "", ""),

  W("w_b2_proposal", "B2", "Предложение (proposal)", "200–250", "Напишите руководству предложение по улучшению процесса в вашей команде: проблема, решение, выгоды, затраты, следующие шаги.",
    `- [[I would like to propose …]]
- [[At present, … which results in …]]
- [[The proposed solution would …]]
- [[This would not only … but also …]]
- [[I would welcome the opportunity to discuss this further.]]`, ""),
  W("w_b2_report", "B2", "Отчёт с выводами", "200–250", "Отчёт по итогам квартала/проекта с подзаголовками: Introduction, Findings, Recommendations.", "- [[This report aims to …]]\n- [[It was found that …]]\n- [[It is recommended that …]]", ""),
  W("w_b2_essay", "B2", "Эссе-мнение", "200–250", "Эссе: «Работа из дома приносит больше вреда, чем пользы». Согласны ли вы? Структура: вступление, 2 абзаца аргументов, контраргумент, вывод.",
    "- [[It is often argued that …]]\n- [[While it is true that …, …]]\n- [[Moreover, / Furthermore, / Nevertheless,]]\n- [[On balance, I believe …]]", ""),
  W("w_b2_email", "B2", "Сложное рабочее письмо", "180–220", "Клиент недоволен задержкой. Напишите письмо: признайте проблему, объясните причины без оправданий, предложите компенсацию и новый срок.",
    "- [[Thank you for bringing this to our attention.]]\n- [[I fully understand your frustration.]]\n- [[The delay was caused by …]]\n- [[To make up for this, we would like to …]]", ""),
  W("w_b2_review", "B2", "Рецензия", "200–250", "Напишите рецензию на книгу, фильм или сервис, который вы недавно использовали: описание, сильные и слабые стороны, рекомендация.", "", ""),
  W("w_b2_cover", "B2", "Сопроводительное письмо", "200–250", "Сопроводительное письмо (cover letter) на вакансию в международную компанию.", "- [[I am writing to apply for the position of …]]\n- [[Having worked as … for … years, I …]]\n- [[I am confident that my experience in … would …]]", ""),
];
