// Сборка курса: все юниты по порядку. Уроки идут строго последовательно.
import A0 from "./a0.js";
import A1 from "./a1.js";
import A2 from "./a2.js";
import B1 from "./b1.js";
import B2 from "./b2.js";

export const UNITS = [...A0, ...A1, ...A2, ...B1, ...B2];

export const LESSONS = UNITS.flatMap((u) => u.lessons.map((l) => ({ ...l, unit: u, phase: u.phase, level: u.level })));

export const lessonById = (id) => LESSONS.find((l) => l.id === id);
