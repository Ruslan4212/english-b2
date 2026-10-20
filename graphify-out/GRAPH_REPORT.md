# Graph Report - english-b2  (2026-10-20)

## Corpus Check
- 76 files · ~119,428 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 1, .toml 1)

## Summary
- 314 nodes · 1054 edges · 27 communities (8 shown, 19 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9cdb2505`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- practice.js
- index.js
- esc
- ai.js
- index.ts
- server_template.ts
- srs.js
- English B2 Path

## God Nodes (most connected - your core abstractions)
1. `$$` - 48 edges
2. `S()` - 44 edges
3. `esc()` - 44 edges
4. `update()` - 32 edges
5. `today()` - 32 edges
6. `md()` - 25 edges
7. `renderToday()` - 24 edges
8. `renderLesson()` - 22 edges
9. `currentPhase()` - 22 edges
10. `markToday()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `renderLesson()` --calls--> `lessonById()`  [EXTRACTED]
  js/lesson.js → data/index.js
- `taskLink()` --calls--> `lessonById()`  [EXTRACTED]
  js/app.js → data/index.js
- `renderMsg()` --indirect_call--> `esc()`  [INFERRED]
  js/helper.js → js/util.js
- `liveCall()` --calls--> `state`  [EXTRACTED]
  js/practice.js → js/store.js
- `renderSettings()` --calls--> `aiConfig()`  [EXTRACTED]
  js/app.js → js/ai.js

## Import Cycles
- None detected.

## Communities (27 total, 19 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.10
Nodes (54): lessonById(), providerList(), app, bindNameAsk(), nameAsk(), nameFields(), nameFieldsHtml(), renderGrammar() (+46 more)

### Community 1 - "practice.js"
Cohesion: 0.18
Nodes (48): generate(), bindSay(), DRILLS, extraPractice(), renderLesson(), reviewLesson(), warmup(), allDialogs() (+40 more)

### Community 3 - "esc"
Cohesion: 0.13
Nodes (38): choice(), dialog(), dictation(), drill(), examples(), fill(), head(), order() (+30 more)

### Community 4 - "ai.js"
Cohesion: 0.11
Nodes (35): ai(), aiConfig(), aiPing(), askTutor(), chatTurn(), checkAnswer(), correctText(), explain() (+27 more)

### Community 5 - "index.ts"
Cohesion: 0.17
Nodes (18): ALLOWED_ORIGINS, buildRequest(), cors(), cut(), env(), extractJson(), hits, json() (+10 more)

### Community 6 - "server_template.ts"
Cohesion: 0.21
Nodes (13): ALLOWED_ORIGINS, cors(), env(), extractJson(), hits, json(), pickProvider(), PREFERRED (+5 more)

### Community 7 - "srs.js"
Cohesion: 0.31
Nodes (8): autoCheck(), review(), grade(), newLimit(), preview(), queue(), stats(), addDays()

### Community 8 - "English B2 Path"
Cohesion: 0.22
Nodes (8): English B2 Path, Вариант 1. Личный бесплатный ключ (2 минуты, только для себя), Вариант 2. Функция Supabase `english-tutor` (для всех устройств, ключ на сервере), Запуск, Подключение ИИ-наставника, Структура, Честно о границах, Что внутри

## Knowledge Gaps
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `$$` connect `app.js` to `practice.js`, `esc`, `ai.js`, `srs.js`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09679370840895342 - nodes in this community are weakly interconnected._
- **Why does `esc()` connect `esc` to `app.js`, `practice.js`, `ai.js`, `srs.js`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Should `index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Why does `S()` connect `app.js` to `practice.js`, `esc`, `ai.js`, `srs.js`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Should `esc` be split into smaller, more focused modules?**
  _Cohesion score 0.13356562137049943 - nodes in this community are weakly interconnected._
- **Should `ai.js` be split into smaller, more focused modules?**
  _Cohesion score 0.11336032388663968 - nodes in this community are weakly interconnected._