/*
  Banco de dados da pauta (Supabase).
  Preencha url e key com os dados do seu projeto: Supabase > Project Settings > API.
  - url: "Project URL" (ex.: https://abcdefgh.supabase.co)
  - key: chave pública "anon" ou "publishable" (nunca a "service_role"/"secret")
  Com url ou key vazios, a pauta fica salva só no navegador.
*/
window.PAUTA_DB = {
  url: '',
  key: '',
  id: 'principal' // nome do registro da pauta no banco
};
