// B2 юнит 1: третий тип условных, смешанные условные, альтернативы if.
export default {
  id: "b2_u1",
  level: "B2",
  phase: 4,
  icon: "🕰️",
  title: "Третий и смешанный условный: если бы тогда…",
  about: "Нереальное прошлое, сожаления, смешанные условные, otherwise / but for / provided, инверсия.",
  lessons: [
    {
      id: "b2_u1_l1",
      title: "Third conditional: если бы я тогда знал…",
      goal: "Вы научитесь говорить о прошлом, которое уже нельзя изменить: что было бы, если бы всё сложилось иначе.",
      steps: [
        {
          t: "text",
          h: "Нереальное прошлое",
          md: `Вы знаете второй тип (If I had money, I would buy…) — нереальное **настоящее**. **Третий тип** — нереальное **прошлое**: ситуация уже произошла, и мы фантазируем, что было бы иначе.

**If + Past Perfect (had + V3), would have + V3**

- [[If I had known about the meeting, I would have come.]] — Если бы я знал о встрече, я бы пришёл. (но не знал и не пришёл)
- [[If we had left earlier, we wouldn't have missed the train.]] — Если бы мы вышли раньше, мы бы не опоздали на поезд.
- [[She would have passed if she had studied harder.]] — Она бы сдала, если бы занималась усерднее.

В русском «если бы… то бы» одинаково для настоящего и прошлого — время понятно из контекста. В английском **форма показывает время**: второй тип — сейчас, третий — тогда.

**Сокращения в речи:** I'd have = I would have (часто звучит «айдэв»); **если 'd стоит после if — это had**, если в главной части перед have — would: [[If I'd known, I'd have told you.]] = If I **had** known, I **would** have told you.

**could have / might have** вместо would have — возможность: [[If you'd asked me, I could have helped.]] — Если бы ты попросил, я мог бы помочь.`,
        },
        {
          t: "examples",
          h: "Примеры",
          items: [
            ["If I had seen you, I would have said hello.", "Если бы я тебя увидел, я бы поздоровался."],
            ["If it hadn't rained, we would have had a picnic.", "Если бы не пошёл дождь, мы бы устроили пикник."],
            ["We wouldn't have got lost if we'd taken a map.", "Мы бы не заблудились, если бы взяли карту."],
            ["If you had told me earlier, I could have helped.", "Если бы ты сказал раньше, я мог бы помочь."],
            ["If he hadn't been so tired, he might have noticed the mistake.", "Не будь он таким уставшим, он мог бы заметить ошибку."],
          ],
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["If I ___ the answer, I would have told you.", ["knew", "had known", "would know"], 1, "Третий тип: if + Past Perfect."],
            ["If she had taken a taxi, she ___ on time.", ["would arrive", "would have arrived", "had arrived"], 1, "would have + V3."],
            ["If we'd left earlier, we ___ the traffic.", ["wouldn't have hit", "didn't hit", "won't hit"], 0, ""],
            ["«If I'd known» — 'd это…", ["would", "had"], 1, "После if — had."],
            ["Это о прошлом (уже не изменить):", ["If I had more time, I'd help.", "If I'd had more time, I'd have helped."], 1, "Третий тип."],
            ["If you'd asked, I ___ you. (возможность)", ["could have helped", "can help", "could helped"], 0, ""],
          ],
        },
        {
          t: "fill",
          h: "Поставьте глаголы",
          items: [
            ["If I ___ (study) harder, I would have passed.", "had studied|'d studied", ""],
            ["If they had invited me, I ___ (go).", "would have gone|'d have gone", "go — went — gone."],
            ["She ___ (not / be) late if she had set an alarm.", "wouldn't have been|would not have been", ""],
            ["If he ___ (not / drive) so fast, he wouldn't have crashed.", "hadn't driven|had not driven", ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Если бы я знал, я бы тебе сказал.", "If I had known, I would have told you.|If I'd known, I'd have told you.|If I had known, I'd have told you.", ""],
            ["Если бы мы не опоздали, мы бы успели на самолёт.", "If we hadn't been late, we would have caught the plane.|If we hadn't been late, we'd have caught the plane.|If we had not been late, we would have caught the plane.|If we hadn't been late, we wouldn't have missed the plane.", ""],
            ["Если бы ты попросил, я мог бы помочь.", "If you had asked, I could have helped.|If you'd asked, I could have helped.|If you had asked me, I could have helped.|If you'd asked me, I could have helped you.|If you had asked me, I could have helped you.", ""],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- **Third:** If + had + V3, would/could/might have + V3 — нереальное прошлое.
- If I'd known (had) → I'd have told (would).`,
        },
      ],
    },
    {
      id: "b2_u1_l2",
      title: "Mixed conditionals: прошлое влияет на настоящее",
      goal: "Вы научитесь соединять нереальное прошлое с настоящим и наоборот — признак уровня B2.",
      steps: [
        {
          t: "text",
          h: "Когда времена «смешиваются»",
          md: `Иногда условие и результат относятся к **разным временам**. Тогда смешиваем второй и третий типы.

**Тип 1: прошлое условие → настоящий результат**
**If + Past Perfect, would + глагол (now)**
- [[If I had taken that job, I would be rich now.]] — Если бы я тогда согласился на ту работу, я был бы сейчас богат.
- [[If she hadn't missed the flight, she would be in Paris now.]] — Если бы она не опоздала на рейс, сейчас была бы в Париже.

**Тип 2: постоянное настоящее → прошлый результат**
**If + Past Simple, would have + V3**
- [[If I were more organised, I wouldn't have forgotten the meeting.]] — Будь я более организованным (вообще, всегда), я бы не забыл про встречу (вчера).
- [[If he spoke English, he would have got the job.]] — Если бы он говорил по-английски (а он не говорит), он бы получил ту работу.

>i Подсказка: смотрите на маркеры времени. **now, today** в результате — значит результат в настоящем (would + глагол). Условие о постоянном качестве человека (were more careful, spoke English) — второй тип в if.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["If I had saved money, I ___ a car now.", ["would have", "would have had", "had"], 0, "Результат сейчас — would + глагол."],
            ["If she ___ more careful, she wouldn't have lost her keys.", ["were", "had been", "would be"], 0, "Постоянное качество — were (возможно и had been — тогда речь о моменте)."],
            ["If I hadn't eaten so much, I ___ sick now.", ["wouldn't feel", "wouldn't have felt"], 0, "now → would + глагол."],
            ["If he spoke French, he ___ the job in Paris last year.", ["would get", "would have got"], 1, "Прошлый результат — would have + V3."],
            ["If we had bought that flat, we ___ in the centre now.", ["would live", "would have lived"], 0, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Если бы я тогда выучил английский, сейчас у меня была бы лучше работа.", "If I had learned English then, I would have a better job now.|If I'd learned English then, I'd have a better job now.|If I had learnt English then, I would have a better job now.|If I had learned English back then, I would have a better job now.", "Прошлое → настоящее."],
            ["Если бы она не опоздала на поезд, она была бы уже дома.", "If she hadn't missed the train, she would be at home now.|If she hadn't missed the train, she'd be home by now.|If she hadn't missed the train, she would already be at home.|If she hadn't missed the train, she would be home now.|If she had not missed the train, she would be at home already.", ""],
            ["Будь я смелее, я бы попросил повышения.", "If I were braver, I would have asked for a promotion.|If I were braver, I'd have asked for a promotion.|If I was braver, I would have asked for a promotion.", "Постоянное качество + прошлый результат."],
          ],
        },
        {
          t: "text",
          h: "Итог урока",
          md: `- Прошлое → сейчас: **If + had V3, would + глагол** (now).
- Постоянно → в прошлом: **If + Past Simple, would have V3**.`,
        },
      ],
    },
    {
      id: "b2_u1_l3",
      title: "Без if: unless, otherwise, provided, but for, инверсия",
      goal: "Вы научитесь выражать условие разнообразно и формально — для писем, эссе и экзамена B2 First.",
      steps: [
        {
          t: "text",
          h: "Альтернативы if",
          md: `| Слово | Значение | Пример |
|---|---|---|
| **unless** | если не | [[We'll miss the train unless we hurry.]] |
| **provided / providing (that)** | при условии, что | [[You can borrow my car provided that you're careful.]] |
| **as long as** | при условии, пока | [[It's fine as long as you tell me in advance.]] |
| **otherwise** | иначе, а то | [[Hurry up, otherwise we'll be late.]] |
| **in case** | на случай, если (≠ if!) | [[Take an umbrella in case it rains.]] — Возьми зонт на случай дождя. |
| **suppose / supposing** | предположим | [[Suppose you lost your job, what would you do?]] |
| **but for + сущ.** | если бы не | [[But for your help, I would have failed.]] — Если бы не твоя помощь, я бы провалился. |
| **without + сущ.** | без | [[Without your support, we couldn't have done it.]] |

> **in case ≠ if**: [[I'll take an umbrella if it rains]] — возьму, если пойдёт дождь (сначала дождь). [[I'll take an umbrella in case it rains]] — возьму заранее, вдруг пойдёт.`,
        },
        {
          t: "text",
          h: "Инверсия: формальный стиль",
          md: `В формальной речи и письме **if можно убрать**, поставив вспомогательный глагол вперёд:

| Обычно | Инверсия |
|---|---|
| If I had known… | **Had I known**, I would have acted differently. |
| If I were you… | **Were I you**, I would reconsider. |
| If you should need help… | **Should you need** any help, please contact us. |

**Should you…** — особенно частая формула деловых писем: [[Should you have any questions, please do not hesitate to contact me.]] — Если у вас возникнут вопросы, пожалуйста, обращайтесь.

>i Инверсию не нужно активно использовать в разговоре, но на B2 её нужно **узнавать** в текстах и уметь вставить пару формул в письмо.`,
        },
        {
          t: "choice",
          h: "Выберите правильно",
          items: [
            ["Take some cash ___ the card doesn't work.", ["if", "in case", "unless"], 1, "На случай — in case."],
            ["___ your help, we would have failed.", ["But for", "Unless", "Provided"], 0, "Если бы не — But for + сущ."],
            ["Leave now, ___ you'll miss the bus.", ["unless", "otherwise", "provided"], 1, "Иначе — otherwise."],
            ["___ you have any questions, please contact us.", ["Should", "Would", "Had"], 0, "Формула писем: Should you…"],
            ["___ I known, I would have called.", ["Had", "Should", "Were"], 0, "Инверсия третьего типа."],
            ["You can come ___ you don't make noise.", ["in case", "as long as", "otherwise"], 1, ""],
          ],
        },
        {
          t: "translate",
          h: "Переведите",
          items: [
            ["Возьми куртку на случай, если похолодает.", "Take a jacket in case it gets cold.|Take your jacket in case it gets cold.|Take a jacket in case it gets colder.", "in case."],
            ["Если бы не пробки, мы бы приехали вовремя.", "But for the traffic, we would have arrived on time.|If it hadn't been for the traffic, we would have arrived on time.|Without the traffic, we would have arrived on time.|But for the traffic, we'd have arrived on time.", ""],
            ["Если у вас возникнут вопросы, пожалуйста, свяжитесь со мной.", "Should you have any questions, please contact me.|If you have any questions, please contact me.|Should you have any questions, please do not hesitate to contact me.|If you have any questions, please don't hesitate to contact me.", "Формально — Should you…"],
          ],
        },
        {
          t: "text",
          h: "Итог юнита",
          md: `- Third: If I had known, I would have… · Mixed: If I had…, I would be… now.
- unless, provided, as long as, otherwise, in case (≠ if), but for, without.
- Инверсия: Had I known… · Should you need… — формальный стиль.

**Говорение:** тема «Решения и сожаления».`,
        },
      ],
    },
  ],
};
