# Graph Report - english-b2  (2026-10-25)

## Corpus Check
- 92 files · ~155,011 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .toml 1)

## Summary
- 521 nodes · 933 edges · 37 communities (21 shown, 16 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b9426989`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- practice.js
- index.js
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
- avatar.js
- config.js

## God Nodes (most connected - your core abstractions)
1. `$$` - 22 edges
2. `mergeState()` - 15 edges
3. `S()` - 13 edges
4. `run()` - 13 edges
5. `renderPath()` - 13 edges
6. `ai()` - 12 edges
7. `startSync()` - 11 edges
8. `renderStep()` - 11 edges
9. `setStatus()` - 9 edges
10. `clone()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `taskLink()` --calls--> `lessonById()`  [EXTRACTED]
  js/app.js → data/index.js
- `renderSetup()` --calls--> `S()`  [EXTRACTED]
  js/practice.js → data/work.js
- `renderWeekly()` --calls--> `S()`  [EXTRACTED]
  js/practice.js → data/work.js
- `allDialogs()` --calls--> `S()`  [EXTRACTED]
  js/practice.js → data/work.js
- `autoCheck()` --calls--> `S()`  [EXTRACTED]
  js/practice.js → data/work.js

## Import Cycles
- None detected.

## Communities (37 total, 16 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.13
Nodes (17): app, bindNameAsk(), enterUser(), nameAsk(), nameFields(), nameFieldsHtml(), refreshAfterRemote(), renderOnboarding() (+9 more)

### Community 1 - "practice.js"
Cohesion: 0.08
Nodes (27): S(), allDialogs(), autoCheck(), chat(), curWeek(), inlineQ(), listenOne(), liveCall() (+19 more)

### Community 2 - "index.js"
Cohesion: 0.06
Nodes (9): LESSONS, UNITS, applyStart(), dayFor(), inlineQ(), knownLevels(), norm(), renderPlacement() (+1 more)

### Community 3 - "esc"
Cohesion: 0.31
Nodes (15): choice(), dialog(), dictation(), drill(), examples(), fill(), head(), order() (+7 more)

### Community 4 - "helper.js"
Cohesion: 0.14
Nodes (17): lessonById(), addMsg(), ctxText(), history, initHelper(), openHelper(), quick(), renderMsg() (+9 more)

### Community 5 - "index.ts"
Cohesion: 0.17
Nodes (18): ALLOWED_ORIGINS, buildRequest(), cors(), cut(), env(), extractJson(), hits, json() (+10 more)

### Community 6 - "server_template.ts"
Cohesion: 0.21
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
Cohesion: 0.13
Nodes (20): addCard(), addError(), BLOCKS, deleteCard(), ensureIds(), fnv(), fresh(), GUEST_KEY (+12 more)

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
Nodes (41): PHRASES, TOPICS, addPhraseStat(), addXp(), answer(), bar(), buildSession(), BY_ID (+33 more)

### Community 31 - "plan.js"
Cohesion: 0.22
Nodes (13): CHECKPOINT_WEEKS, dayInfo(), DOW, isLastWeekOfMonth(), levelTestWeek(), monthOfWeek(), pace(), phaseOfWeek() (+5 more)

### Community 33 - "account.js"
Cohesion: 0.12
Nodes (13): doSignOut(), hhmm(), hooks, initAccount(), LABEL, paintBadge(), renderAccount(), renderProfile() (+5 more)

### Community 34 - "progress.js"
Cohesion: 0.36
Nodes (7): currentDay(), currentLevel(), currentPhase(), dayComplete(), dayState(), markToday(), toggleTask()

## Knowledge Gaps
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `$$` connect `$$` to `plan.js`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `mergeState()` (e.g. with `mergeCard()` and `mergeDay()`) actually correct?**
  _`mergeState()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.13105413105413105 - nodes in this community are weakly interconnected._
- **Why does `esc()` connect `$$` to `practice.js`, `helper.js`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `practice.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08084163898117387 - nodes in this community are weakly interconnected._
- **Should `index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.05853658536585366 - nodes in this community are weakly interconnected._
- **Should `helper.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14333333333333334 - nodes in this community are weakly interconnected._