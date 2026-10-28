// Сервис-воркер: офлайн-режим (сеть, при её отсутствии — кэш) и напоминание о серии.
const CACHE = "eb2-v1";
const META = "eb2-meta"; // { remind: "20:00" | null, xpDate: "2026-10-28" } — пишет js/pwa.js

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return; // ИИ, Supabase, шрифты — мимо
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: req.mode === "navigate" }).then((r) => r || caches.match("./index.html"))),
  );
});

const day = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
async function meta() {
  const r = await (await caches.open(META)).match("meta");
  return r ? r.json() : {};
}
/** Показать напоминание, если время наступило, а сегодня ещё нет XP. Не чаще раза в день. */
async function check() {
  const m = await meta();
  if (!m.remind || m.xpDate === day() || m.shown === day()) return;
  const [h, min] = m.remind.split(":").map(Number), now = new Date();
  if (now.getHours() * 60 + now.getMinutes() < h * 60 + min) return;
  await (await caches.open(META)).put("meta", new Response(JSON.stringify({ ...m, shown: day() })));
  await self.registration.showNotification("🔥 Серия под угрозой", {
    body: m.streak ? `${m.streak} дн. подряд — 5 минут сегодня, и серия продолжится.` : "5 минут английского сегодня — и начнётся новая серия.",
    icon: "icons/icon-192.png", tag: "streak", data: "./#/today",
  });
}
self.addEventListener("periodicsync", (e) => e.tag === "streak" && e.waitUntil(check()));
self.addEventListener("message", (e) => e.data === "check" && e.waitUntil(check()));
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then((cs) => (cs[0] ? cs[0].focus() : self.clients.openWindow(e.notification.data))));
});
