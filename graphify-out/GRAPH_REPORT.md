# Graph Report - english-b2  (2026-10-28)

## Corpus Check
- 106 files · ~159,443 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .toml 1)

## Summary
- 557 nodes · 955 edges · 54 communities (22 shown, 32 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `065a09fb`
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
- duo.js
- plan.js
- account.js
- progress.js
- gamify.js
- avatar.js
- config.js
- placement.js
- data/index.js

## God Nodes (most connected - your core abstractions)
1. `$$` - 22 edges
2. `mergeState()` - 16 edges
3. `run()` - 13 edges
4. `ai()` - 12 edges
5. `renderPath()` - 12 edges
6. `renderStep()` - 11 edges
7. `startSync()` - 10 edges
8. `renderDuo()` - 9 edges
9. `drawTiles()` - 9 edges
10. `clone()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `2. Что берём у Duolingo (и чего не берём)` --references--> `logTime()`  [INFERRED]
  docs/STRATEGY.md → js/store.js
- `taskLink()` --calls--> `lessonById()`  [EXTRACTED]
  js/app.js → data/index.js
- `renderLesson()` --calls--> `lessonById()`  [EXTRACTED]
  js/lesson.js → data/index.js
- `renderMsg()` --indirect_call--> `esc()`  [INFERRED]
  js/helper.js → js/util.js
- `liveCall()` --indirect_call--> `esc()`  [INFERRED]
  js/practice.js → js/util.js

## Import Cycles
- None detected.

## Communities (54 total, 32 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.12
Nodes (17): app, bindNameAsk(), enterUser(), nameAsk(), nameFields(), nameFieldsHtml(), refreshAfterRemote(), renderOnboarding() (+9 more)

### Community 1 - "practice.js"
Cohesion: 0.07
Nodes (24): allDialogs(), autoCheck(), chat(), curWeek(), inlineQ(), listenOne(), liveCall(), lvlOrder (+16 more)

### Community 3 - "esc"
Cohesion: 0.17
Nodes (17): choice(), dialog(), dictation(), drill(), examples(), fill(), head(), order() (+9 more)

### Community 4 - "helper.js"
Cohesion: 0.14
Nodes (17): lessonById(), addMsg(), ctxText(), history, initHelper(), openHelper(), quick(), renderMsg() (+9 more)

### Community 5 - "index.ts"
Cohesion: 0.16
Nodes (18): ALLOWED_ORIGINS, buildRequest(), cors(), cut(), env(), extractJson(), hits, json() (+10 more)

### Community 6 - "server_template.ts"
Cohesion: 0.19
Nodes (13): ALLOWED_ORIGINS, cors(), env(), extractJson(), hits, json(), pickProvider(), PREFERRED (+5 more)

### Community 7 - "$$"
Cohesion: 0.13
Nodes (14): $$, closeness(), CONTRACTIONS, esc(), inline(), lev(), matches(), md() (+6 more)

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
Cohesion: 0.13
Nodes (31): ABORT, answerChoice(), appliedSubs, askChoice(), backupGuest(), check(), choiceSubs, cycle() (+23 more)

### Community 14 - "store.js"
Cohesion: 0.10
Nodes (25): 1. Конкурентные преимущества перед Duolingo, 2. Что берём у Duolingo (и чего не берём), 3. Roadmap, 4. Команда (субагенты в `.claude/agents/`), English B2 Path × Duolingo — стратегия, addCard(), addError(), BLOCKS (+17 more)

### Community 15 - "ai.js"
Cohesion: 0.18
Nodes (17): ai(), aiConfig(), aiPing(), askTutor(), chatTurn(), checkAnswer(), correctText(), explain() (+9 more)

### Community 27 - "test_merge.mjs"
Cohesion: 0.11
Nodes (19): base(), c(), changed, e1, eq(), gen(), L(), m() (+11 more)

### Community 28 - "auth.js"
Cohesion: 0.21
Nodes (10): AUTH_KEY, cleanUrl(), client(), currentUser(), listeners, redirectBase(), signIn(), signOut() (+2 more)

### Community 29 - "merge.js"
Cohesion: 0.33
Nodes (17): clone(), isEmptyState(), isObj(), mapUnion(), maxMap(), mergeByMeta(), mergeCard(), mergeDay() (+9 more)

### Community 30 - "duo.js"
Cohesion: 0.09
Nodes (40): PHRASES, TOPICS, addPhraseStat(), addXp(), answer(), bar(), buildSession(), BY_ID (+32 more)

### Community 31 - "plan.js"
Cohesion: 0.22
Nodes (13): CHECKPOINT_WEEKS, dayInfo(), DOW, isLastWeekOfMonth(), levelTestWeek(), monthOfWeek(), pace(), phaseOfWeek() (+5 more)

### Community 33 - "account.js"
Cohesion: 0.18
Nodes (11): doSignOut(), hhmm(), hooks, initAccount(), LABEL, paintBadge(), renderAccount(), renderProfile() (+3 more)

### Community 34 - "progress.js"
Cohesion: 0.36
Nodes (7): currentDay(), currentLevel(), currentPhase(), dayComplete(), dayState(), markToday(), toggleTask()

### Community 35 - "gamify.js"
Cohesion: 0.23
Nodes (14): badges(), badgesCard(), goal(), league(), mondayOf(), pct(), POOL, quests() (+6 more)

### Community 40 - "placement.js"
Cohesion: 0.39
Nodes (7): applyStart(), dayFor(), inlineQ(), knownLevels(), norm(), renderPlacement(), unitQuestions()

## Knowledge Gaps
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `$$` connect `$$` to `plan.js`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `mergeState()` (e.g. with `mergeCard()` and `mergeDay()`) actually correct?**
  _`mergeState()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.12433862433862433 - nodes in this community are weakly interconnected._
- **Should `practice.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06755260243632337 - nodes in this community are weakly interconnected._
- **Should `helper.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14333333333333334 - nodes in this community are weakly interconnected._
- **Should `$$` be split into smaller, more focused modules?**
  _Cohesion score 0.12554112554112554 - nodes in this community are weakly interconnected._
- **Should `speech.js` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._