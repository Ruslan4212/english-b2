// Приложение на телефоне: установка на экран, офлайн (sw.js) и напоминание о серии.
// Напоминание показывает сервис-воркер: при открытом приложении — по таймеру, при закрытом — через
// Periodic Background Sync (Chrome/Android, установленное приложение). Серверных push пока нет.
import { esc, toast } from "./util.js?v=20261028b";
import { streakInfo } from "./gamify.js?v=20261028b";
import { onChange } from "./store.js?v=20261028b";

const KEY = "english_b2_remind"; // время напоминания на ЭТОМ устройстве: "20:00" или ""
const remindAt = () => { try { return localStorage.getItem(KEY) || ""; } catch { return ""; } };
let installEvt = null, reg = null;

const day = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** Передать сервис-воркеру то, что ему нужно знать (localStorage ему недоступен). */
async function pushMeta() {
  if (!("caches" in window)) return;
  const st = streakInfo();
  const c = await caches.open("eb2-meta");
  const old = await c.match("meta").then((r) => (r ? r.json() : {})).catch(() => ({}));
  await c.put("meta", new Response(JSON.stringify({ ...old, remind: remindAt() || null, xpDate: st.todayDone ? day() : old.xpDate === day() ? null : old.xpDate, streak: st.n })));
}

export function initPwa() {
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEvt = e; });
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("sw.js").then((r) => { reg = r; pushMeta(); }).catch((e) => console.warn("SW:", e));
  onChange(() => pushMeta().catch(() => {}));
  // при открытом приложении — проверка раз в 5 минут
  setInterval(() => { if (remindAt()) navigator.serviceWorker.controller?.postMessage("check"); }, 5 * 60 * 1000);
}

async function setReminder(time) {
  if (time) {
    if (!("Notification" in window)) return toast("Этот браузер не умеет показывать уведомления");
    if ((await Notification.requestPermission()) !== "granted") return toast("Уведомления запрещены в настройках браузера");
  }
  try { localStorage.setItem(KEY, time); } catch { /* нет хранилища */ }
  await pushMeta();
  if (time && reg?.periodicSync) await reg.periodicSync.register("streak", { minInterval: 60 * 60 * 1000 }).catch(() => {});
  if (!time && reg?.periodicSync) await reg.periodicSync.unregister("streak").catch(() => {});
  toast(time ? `Напомню в ${time}, если за день не будет занятий` : "Напоминание выключено");
}

const standalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone;
const ios = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

/** Карточка для настроек. */
export function pwaCard() {
  const t = remindAt();
  const install = standalone()
    ? `<p class="small muted">✅ Приложение установлено.</p>`
    : installEvt
      ? `<button class="btn primary" data-install>📲 Установить на экран</button>`
      : `<p class="small muted">${ios() ? "iPhone: Safari → «Поделиться» → «На экран „Домой“»." : "Меню браузера → «Установить приложение» / «Добавить на главный экран»."}</p>`;
  return `<div class="card"><h2>📱 Приложение на телефоне</h2>
    <p>Установите курс как приложение: иконка на экране, отдельное окно, работает без интернета (кроме Мии).</p>${install}
    <h3 style="margin-top:14px">🔔 Напоминание о серии</h3>
    <p class="small muted">Придёт, только если в этот день ещё не было занятий. Когда приложение закрыто, напоминания надёжно работают в установленном приложении на Android (Chrome). На iPhone — только при открытом приложении.</p>
    <div class="row" style="gap:8px;flex-wrap:wrap"><input type="time" data-rtime value="${esc(t || "20:00")}" style="width:auto">
      <button class="btn ${t ? "" : "primary"} sm" data-ron>${t ? "Сохранить время" : "Включить"}</button>${t ? `<button class="btn ghost sm" data-roff>Выключить</button>` : ""}</div></div>`;
}
export function bindPwaCard(root, rerender) {
  root.querySelector("[data-install]")?.addEventListener("click", async () => { installEvt.prompt(); await installEvt.userChoice; installEvt = null; rerender(); });
  root.querySelector("[data-ron]")?.addEventListener("click", async () => { await setReminder(root.querySelector("[data-rtime]").value || "20:00"); rerender(); });
  root.querySelector("[data-roff]")?.addEventListener("click", async () => { await setReminder(""); rerender(); });
}
