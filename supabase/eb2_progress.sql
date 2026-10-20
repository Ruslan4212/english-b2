-- English B2 Path: облачный прогресс ученика. Идемпотентно — можно запускать повторно в SQL Editor.
-- Проект Supabase общий с DevOps-игрой, поэтому все объекты с префиксом eb2_.
create table if not exists public.eb2_progress (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  state      jsonb       not null default '{}'::jsonb,
  rev        bigint      not null default 1,
  schema_v   int         not null default 1,
  device     text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint eb2_progress_state_obj  check (jsonb_typeof(state) = 'object'),
  constraint eb2_progress_state_size check (octet_length(state::text) <= 1000000),
  constraint eb2_progress_device_len check (device is null or length(device) <= 64)
);

alter table public.eb2_progress enable row level security;

drop policy if exists "eb2_progress: select own" on public.eb2_progress;
create policy "eb2_progress: select own" on public.eb2_progress
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "eb2_progress: insert own" on public.eb2_progress;
create policy "eb2_progress: insert own" on public.eb2_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "eb2_progress: update own" on public.eb2_progress;
create policy "eb2_progress: update own" on public.eb2_progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
-- delete-политики нет намеренно: строка удаляется только каскадом вместе с аккаунтом.

revoke all on public.eb2_progress from anon;
grant select, insert, update on public.eb2_progress to authenticated;

create or replace function public.eb2_touch() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  if tg_op = 'UPDATE' then new.rev := old.rev + 1; end if;
  return new;
end $$;

drop trigger if exists eb2_progress_touch on public.eb2_progress;
create trigger eb2_progress_touch before update on public.eb2_progress
  for each row execute function public.eb2_touch();

-- Запись с проверкой версии: обновляет, только если base_rev совпадает с текущим rev.
create or replace function public.eb2_push(p_state jsonb, p_base_rev bigint, p_device text default null)
returns jsonb
language plpgsql security invoker set search_path = '' as $$
declare
  uid uuid := auth.uid();
  r public.eb2_progress;
begin
  if uid is null then raise exception 'not authenticated' using errcode = '28000'; end if;

  if p_base_rev is null or p_base_rev = 0 then
    insert into public.eb2_progress(user_id, state, device)
      values (uid, p_state, left(p_device, 64))
      on conflict (user_id) do nothing
      returning * into r;
  else
    update public.eb2_progress
       set state = p_state, device = left(p_device, 64)
     where user_id = uid and rev = p_base_rev
     returning * into r;
  end if;

  if r.user_id is not null then
    return jsonb_build_object('ok', true, 'rev', r.rev, 'updated_at', r.updated_at);
  end if;

  select * into r from public.eb2_progress where user_id = uid;
  return jsonb_build_object('ok', false, 'conflict', true,
    'rev', r.rev, 'state', r.state, 'updated_at', r.updated_at);
end $$;

revoke all on function public.eb2_push(jsonb, bigint, text) from public, anon;
grant execute on function public.eb2_push(jsonb, bigint, text) to authenticated;
