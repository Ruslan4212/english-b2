"""Собирает supabase/functions/english-tutor/index.ts: шаблон сервера + js/prompts.js.

Промпты живут в одном месте (js/prompts.js) — браузер импортирует их напрямую,
а функция Supabase получает копию. Запуск после любой правки промптов:
    python tools/build_function.py
"""
from pathlib import Path

root = Path(__file__).resolve().parent.parent
prompts = (root / "js" / "prompts.js").read_text(encoding="utf-8")
# в функции buildRequest — обычная функция модуля, не экспорт
prompts = prompts.replace("export function buildRequest", "function buildRequest")
prompts = prompts.replace("export ", "")
template = (root / "tools" / "server_template.ts").read_text(encoding="utf-8")
out = root / "supabase" / "functions" / "english-tutor" / "index.ts"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(
    "// СГЕНЕРИРОВАНО tools/build_function.py — правьте tools/server_template.ts и js/prompts.js\n"
    "// @ts-nocheck — промпты вставлены из JS-модуля без типов\n"
    + template.replace("/*__PROMPTS__*/", prompts),
    encoding="utf-8",
)
print("ok:", out)
