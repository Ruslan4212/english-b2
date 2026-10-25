// Где ученик в плане и как закрываются задачи дня.
import { S, update } from "./store.js?v=20261020a";
import { dayInfo, tasksForDay } from "./plan.js?v=20261020a";
import { today } from "./util.js?v=20261020a";

export const currentDay = () => S().day || 0;
export const currentPhase = () => dayInfo(currentDay()).phase;
export const currentLevel = () => {
  const s = S();
  // в неделю 1 ученик — абсолютный ноль
  return currentDay() < 7 && !s.profile?.startWeek ? "A0" : currentPhase().level;
};

export function dayState(i = currentDay()) {
  return S().days[i] || { tasks: {} };
}

/** Закрыть первую невыполненную задачу этого типа в текущем дне. */
export function markToday(kind, id) {
  const i = currentDay();
  const tasks = tasksForDay(i);
  const st = dayState(i);
  const t = tasks.find((x) => (id ? x.id === id : x.kind === kind) && !st.tasks[x.id]);
  if (!t) return false;
  update((s) => {
    s.days[i] ||= { tasks: {} };
    s.days[i].tasks[t.id] = today();
  });
  window.dispatchEvent(new CustomEvent("taskdone", { detail: t }));
  return true;
}

export function toggleTask(id, on) {
  const i = currentDay();
  update((s) => {
    s.days[i] ||= { tasks: {} };
    if (on) s.days[i].tasks[id] = today();
    else delete s.days[i].tasks[id];
  });
}

export function dayComplete(i = currentDay()) {
  const st = dayState(i);
  return tasksForDay(i).every((t) => st.tasks[t.id]);
}

export function finishDay() {
  update((s) => {
    s.days[s.day] ||= { tasks: {} };
    s.days[s.day].finished = today();
    s.day = (s.day || 0) + 1;
  });
}
