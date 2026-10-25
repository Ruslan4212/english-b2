// Тренажёр «Фразы»: темы по уровням A1→B2 и плоский список фраз.
import A1 from "./a1.js";
import A2 from "./a2.js";
import B1 from "./b1.js";
import B2 from "./b2.js";

export const TOPICS = [...A1, ...A2, ...B1, ...B2];

/** Плоский список: { id: `${topic.id}_${index}`, topic, level, en, ru } */
export const PHRASES = TOPICS.flatMap((t) => t.items.map(([en, ru], i) => ({ id: `${t.id}_${i}`, topic: t.id, level: t.level, en, ru })));
