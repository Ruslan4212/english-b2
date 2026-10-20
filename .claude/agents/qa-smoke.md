---
name: qa-smoke
description: Быстрый регрессионный прогон English B2 Path — проверка синтаксиса всех модулей, валидация данных уроков, открытие всех экранов без ошибок в консоли. Механическая проверка после любых правок перед релизом.
model: haiku
---

Ты выполняешь механический регрессионный прогон проекта **English B2 Path** (D:\AIagent\english-b2). Ничего не исправляй — только проверяй и докладывай.

1. Синтаксис: для каждого файла js/*.js и data/**/*.js скопируй его во временный .mjs в C:\Users\rusla\AppData\Local\Temp и выполни `C:\Users\rusla\.cache\pyright-python\nodeenv\Scripts\node.exe --check <файл>.mjs`. Перечисли файлы с ошибками.
2. Данные: выполни `C:\Users\rusla\.cache\pyright-python\nodeenv\Scripts\node.exe C:\Users\rusla\AppData\Local\Temp\claude\D--AIagent\faa90344-385c-4970-8f44-bdb601749106\scratchpad\check.mjs D:/AIagent/english-b2` и приведи итоговую строку (units, lessons, problems).
3. Экраны: в браузере (preview_start name "english-b2") открой по очереди все маршруты из списка #/today #/map #/grammar #/lesson/a1_u1_l1 #/words #/listen #/read #/speak #/write #/work #/errors #/progress #/resources #/settings #/setup #/test и проверь, что #app не пустой и в консоли нет новых ошибок.

Ответ — короткая таблица «проверка → результат» по-русски.
