// Вход по email (Supabase Auth). Библиотека supabase-js грузится ТОЛЬКО динамическим import():
// гость её не скачивает, пока сам не откроет «Аккаунт» или пока не найдена сохранённая сессия.
import { DEFAULT_URL, DEFAULT_KEY } from "./config.js?v=20261025a";

const LIB = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";
export const AUTH_KEY = "eb2_auth";

let cl = null; // промис клиента
const listeners = new Set();

/** Адрес приложения без hash и query: сюда Supabase вернёт пользователя из письма. */
export const redirectBase = () => location.origin + location.pathname;

export function client() {
  if (!cl) {
    cl = import(/* @vite-ignore */ LIB)
      .then(({ createClient }) => {
        const c = createClient(DEFAULT_URL, DEFAULT_KEY, {
          auth: { storageKey: AUTH_KEY, flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
        });
        c.auth.onAuthStateChange((event, session) => {
          // из колбэка нельзя вызывать методы supabase синхронно (взаимная блокировка) — откладываем
          setTimeout(() => listeners.forEach((f) => { try { f(event, session); } catch (e) { console.error(e); } }), 0);
        });
        return c;
      })
      .catch((e) => {
        cl = null; // можно попробовать снова
        throw e;
      });
  }
  return cl;
}

/** Есть ли сохранённая сессия — без загрузки библиотеки. */
export function hasStoredSession() {
  try {
    return !!localStorage.getItem(AUTH_KEY);
  } catch {
    return false;
  }
}

/** После обмена ?code= убираем его из адреса (роутер живёт на hash). */
function cleanUrl() {
  const q = new URLSearchParams(location.search);
  if (q.has("code") || q.has("error_description")) {
    history.replaceState(null, "", location.pathname + location.hash);
    return true;
  }
  return false;
}

export async function currentUser() {
  const c = await client();
  const { data, error } = await c.auth.getSession();
  cleanUrl();
  if (error) throw error;
  return data.session?.user || null;
}

export function onAuth(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const unwrap = ({ data, error }) => {
  if (error) throw error;
  return data;
};

export async function signUp(email, password) {
  const c = await client();
  return unwrap(await c.auth.signUp({ email, password, options: { emailRedirectTo: redirectBase() + "#/account" } }));
}
export async function signIn(email, password) {
  const c = await client();
  return unwrap(await c.auth.signInWithPassword({ email, password }));
}
export async function signOut() {
  const c = await client();
  const { error } = await c.auth.signOut({ scope: "local" });
  if (error) throw error;
}

/** Понятное русское сообщение вместо английского текста ошибки. */
export function ruError(e) {
  const msg = String(e?.message || e || "");
  const code = String(e?.code || e?.error_code || "");
  const all = msg + " " + code;
  if (/Invalid login credentials/i.test(all)) return "Неверный email или пароль. Если вы ещё не регистрировались, откройте вкладку «Регистрация».";
  if (e?.status === 429) return "Слишком много попыток. Подождите минуту и попробуйте снова.";
  if (/User already registered|already been registered/i.test(all)) return "Этот email уже зарегистрирован. Войдите с этим email. Если забыли пароль — напишите автору курса.";
  if (/Password should be at least|weak_password/i.test(all)) return "Пароль слишком короткий: нужно минимум 6 символов.";
  if (/Signups not allowed|otp_disabled|User not found/i.test(all)) return "Аккаунта с таким email нет. Сначала зарегистрируйтесь.";
  if (/Unable to validate email|invalid format|email_address_invalid/i.test(all)) return "Проверьте адрес email: он выглядит неверно.";
  if (/PGRST205|PGRST202|42P01|Could not find the (table|function)|does not exist/i.test(all))
    return "Облачное хранилище прогресса на сервере ещё не настроено. Прогресс пока сохраняется только на этом устройстве.";
  if (/Failed to fetch|NetworkError|Load failed|fetch failed|dynamically imported|Importing a module script failed|network/i.test(all) || e instanceof TypeError)
    return "Нет связи с сервером. Проверьте интернет и попробуйте ещё раз.";
  return "Не получилось выполнить действие" + (msg ? ` (${msg})` : "") + ". Попробуйте ещё раз позже.";
}
