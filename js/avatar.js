// Аватар ИИ-репетитора Мии — нарисованный SVG, без чужих фото.
export const TUTOR = { name: "Mia", ru: "Мия", role: "AI-репетитор по английскому" };

export function avatar(cls = "ava") {
  return `<svg class="${cls}" viewBox="0 0 64 64" role="img" aria-label="${TUTOR.ru}">
    <defs><linearGradient id="avbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7cc4ff"/><stop offset="1" stop-color="#3ba0ff"/></linearGradient></defs>
    <circle cx="32" cy="32" r="32" fill="url(#avbg)"/>
    <path d="M14 64c1-11 8-17 18-17s17 6 18 17z" fill="#ffffff"/>
    <path d="M26 46h12v5c0 3-12 3-12 0z" fill="#f2c9a6"/>
    <path d="M17 30c0-11 7-18 15-18s15 7 15 18c0 6-2 13-3 15H20c-1-2-3-9-3-15z" fill="#3a2a22"/>
    <ellipse cx="32" cy="32" rx="11" ry="13" fill="#f6d2b4"/>
    <path d="M21 28c2-8 7-11 11-11s9 3 11 11c-5-1-9-4-11-7-2 3-6 6-11 7z" fill="#3a2a22"/>
    <circle cx="27.5" cy="33" r="1.6" fill="#2b1d16"/><circle cx="36.5" cy="33" r="1.6" fill="#2b1d16"/>
    <path d="M28 39c2.5 2.2 5.5 2.2 8 0" stroke="#c4645a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="24.5" cy="37" r="2" fill="#f4a9a0" opacity=".55"/><circle cx="39.5" cy="37" r="2" fill="#f4a9a0" opacity=".55"/>
    <rect x="40" y="38" width="9" height="6" rx="3" fill="#0b4983"/><path d="M44.5 44v3" stroke="#0b4983" stroke-width="2"/>
  </svg>`;
}

/** Разметка ответа репетитора: ==термин== → подсветка, **жирный**, абзацы. */
export function richText(text, esc) {
  return esc(text)
    .replace(/==(.+?)==/g, '<mark class="k">$1</mark>')
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\n/g, "<br>");
}
