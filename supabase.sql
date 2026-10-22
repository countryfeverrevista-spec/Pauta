-- Banco da Pauta Arena CP
-- Supabase > SQL Editor > New query > cole tudo e clique em Run.

create table if not exists public.pauta (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.pauta enable row level security;

-- Acesso aberto (app sem senha): qualquer pessoa com o link lê e edita
drop policy if exists "pauta leitura" on public.pauta;
drop policy if exists "pauta inclusao" on public.pauta;
drop policy if exists "pauta edicao" on public.pauta;
create policy "pauta leitura" on public.pauta for select using (true);
create policy "pauta inclusao" on public.pauta for insert with check (true);
create policy "pauta edicao" on public.pauta for update using (true) with check (true);
