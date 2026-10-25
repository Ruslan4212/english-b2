# Graph Report - english-b2  (2026-10-20)

## Corpus Check
- 85 files · ~126,872 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .toml 1)

## Summary
- 452 nodes · 779 edges · 38 communities (19 shown, 19 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 25 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7575f88e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- practice.js
- esc
- helper.js
- index.ts
- server_template.ts
- $$
- English B2 Path
- speech.js
- prompts.js
- CLAUDE.md
- sync.js
- store.js
- ai.js
- test_merge.mjs
- auth.js
- merge.js
- account.js
- plan.js
- progress.js
- avatar.js
- config.js

## God Nodes (most connected - your core abstractions)
1. `$$` - 22 edges
2. `S()` - 13 edges
3. `mergeState()` - 13 edges
4. `ai()` - 12 edges
5. `run()` - 12 edges
6. `renderStep()` - 11 edges
7. `startSync()` - 11 edges
8. `client()` - 9 edges
9. `clone()` - 9 edges
10. `setStatus()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `renderWeekly()` --calls--> `S()`  [EXTRACTED]
  js/practice.js → data/work.js
- `taskLink()` --calls--> `lessonById()`  [EXTRACTED]
  js/app.js → data/index.js
- `renderLesson()` --calls--> `lessonById()`  [EXTRACTED]
  js/lesson.js → data/index.js
- `allDialogs()` --calls--> `S()`  [EXTRACTED]
  js/practice.js → data/work.js
- `autoCheck()` --calls--> `S()`  [EXTRACTED]
  js/practice.js → data/work.js

## Import Cycles
- None detected.

## Communities (38 total, 19 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.10
Nodes (26): lessonById(), LESSONS, UNITS, app, bindNameAsk(), enterUser(), nameAsk(), nameFields() (+18 more)

### Community 1 - "practice.js"
Cohesion: 0.08
Nodes (26): S(), allDialogs(), autoCheck(), chat(), curWeek(), inlineQ(), listenOne(), lvlOrder (+18 more)

### Community 3 - "esc"
Cohesion: 0.31
Nodes (15): choice(), dialog(), dictation(), drill(), examples(), fill(), head(), order() (+7 more)

### Community 4 - "helper.js"
Cohesion: 0.15
Nodes (11): addMsg(), ctxText(), history, initHelper(), openHelper(), quick(), renderMsg(), runExplain() (+3 more)

### Community 5 - "index.ts"
Cohesion: 0.17
Nodes (18): ALLOWED_ORIGINS, buildRequest(), cors(), cut(), env(), extractJson(), hits, json() (+10 more)

### Community 6 - "server_template.ts"
Cohesion: 0.21
Nodes (13): ALLOWED_ORIGINS, cors(), env(), extractJson(), hits, json(), pickProvider(), PREFERRED (+5 more)

### Community 7 - "$$"
Cohesion: 0.12
Nodes (15): liveCall(), $$, closeness(), CONTRACTIONS, esc(), inline(), lev(), matches() (+7 more)

### Community 8 - "English B2 Path"
Cohesion: 0.22
Nodes (8): English B2 Path, Вариант 1. Личный бесплатный ключ (2 минуты, только для себя), Вариант 2. Функция Supabase `english-tutor` (для всех устройств, ключ на сервере), Запуск, Подключение ИИ-наставника, Структура, Честно о границах, Что внутри

### Community 10 - "speech.js"
Cohesion: 0.13
Nodes (13): asrError, db(), deleteRecording(), listRecordings(), pickVoice(), saveRecording(), speak(), speakMia() (+5 more)

### Community 11 - "prompts.js"
Cohesion: 0.60
Nodes (5): buildRequest(), cut(), LEVEL_HINT, lvl(), nameLine()

### Community 13 - "sync.js"
Cohesion: 0.14
Nodes (27): answerChoice(), appliedSubs, askReplace(), choiceSubs, cycle(), deviceId(), flush(), loadMeta() (+19 more)

### Community 14 - "store.js"
Cohesion: 0.14
Nodes (17): addCard(), addError(), BLOCKS, fresh(), GUEST_KEY, importJson(), LISTS, logTime() (+9 more)

### Community 15 - "ai.js"
Cohesion: 0.17
Nodes (17): ai(), aiConfig(), aiPing(), askTutor(), chatTurn(), checkAnswer(), correctText(), explain() (+9 more)

### Community 27 - "test_merge.mjs"
Cohesion: 0.14
Nodes (16): base(), c(), e1, eq(), gen(), L(), m(), neu (+8 more)

### Community 28 - "auth.js"
Cohesion: 0.24
Nodes (14): AUTH_KEY, cleanUrl(), client(), currentUser(), listeners, redirectBase(), requestReset(), resendConfirm() (+6 more)

### Community 29 - "merge.js"
Cohesion: 0.33
Nodes (17): clone(), isEmptyState(), isObj(), mapUnion(), maxMap(), mergeByMeta(), mergeCard(), mergeDay() (+9 more)

### Community 30 - "account.js"
Cohesion: 0.17
Nodes (11): doSignOut(), hhmm(), hooks, initAccount(), LABEL, paintBadge(), renderAccount(), renderProfile() (+3 more)

### Community 31 - "plan.js"
Cohesion: 0.22
Nodes (13): CHECKPOINT_WEEKS, dayInfo(), DOW, isLastWeekOfMonth(), levelTestWeek(), monthOfWeek(), pace(), phaseOfWeek() (+5 more)

### Community 33 - "progress.js"
Cohesion: 0.36
Nodes (7): currentDay(), currentLevel(), currentPhase(), dayComplete(), dayState(), markToday(), toggleTask()

## Knowledge Gaps
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `$$` connect `$$` to `plan.js`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `mergeState()` (e.g. with `mergeCard()` and `mergeDay()`) actually correct?**
  _`mergeState()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10099573257467995 - nodes in this community are weakly interconnected._
- **Why does `esc()` connect `$$` to `helper.js`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `practice.js` be split into smaller, more focused modules?**
  _Cohesion score 0.07822410147991543 - nodes in this community are weakly interconnected._
- **Should `$$` be split into smaller, more focused modules?**
  _Cohesion score 0.11857707509881422 - nodes in this community are weakly interconnected._
- **Should `speech.js` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._