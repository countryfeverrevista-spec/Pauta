/* Pauta Arena CP — tudo salvo no navegador (localStorage) */

const KEY = 'pauta-arena-v1';
const THEME_KEY = 'pauta-arena-theme';
const TAB_KEY = 'pauta-arena-tab';

const DEFAULT = {
  header: { responsavel: 'Eduardo', funcao: 'Designer — Revista', data: '22/10/2026', semana: '19/10 a 23/10/2026' },
  info: {
    revista: 'Country Fever', edicao: '218', ano: '18', mes: 'Outubro 2026',
    capa: 'JF Feno (Isadora e Vagner) — Auriflama/SP', dupla: '38 e 39',
    anuncios: '16/10/2026', anunciosStatus: 'OK', redacao: '16/10/2026', grafica: '23/10/2026'
  },
  secoes: [
    { secao: 'Anúncios', conteudo: 'Prazo máximo 16/10/2026', status: 'OK' },
    { secao: 'Editorial', conteudo: 'Vagner da JF Feno (foto com chapéu)', status: 'OK' },
    { secao: "Pin'Up", conteudo: 'Wilson Rogério — Casa de Carnes da Mamãe', status: 'Revista' },
    { secao: 'Alô Comunidade', conteudo: 'Prefeito Marcelo Bernardo — Dirce Reis/SP', status: '' }
  ],
  producao: [
    { item: 'Página central', valor: '38–39' },
    { item: 'Total', valor: '76 páginas' },
    { item: 'Acabamento', valor: 'Grampo' },
    { item: 'Rodapés', valor: 'Mello · Gaúcha · Apollo Veículos' },
    { item: 'Página livre', valor: '0' },
    { item: 'Meia página', valor: '0' }
  ],
  observacoes: [
    'Monte Líbano: 1 página inteira — falar com Alexandre',
    'Novembro: posse de Pedro Muzeti'
  ],
  materias: [
    { data: '23/10', materia: 'Festa do Peão de Dirce Reis/SP', obs: '1 DVD — produzir · link para Marcelo Bernardo e Moisés Souza' },
    { data: '26/10', materia: 'Baile da Escolha da Rainha do 30º Rodeio Show de Poloni/SP', obs: '' },
    { data: '30/10', materia: 'Parte 4 — 71 anos da Festa do Peão de Barretos — 2026', obs: '' }
  ],
  programas: [
    { nome: 'Juju Cizotto', itens: [{ data: '22/10', status: 'Aguardando — confirmar' }, { data: '29/10', status: 'Aguardando' }] },
    { nome: "Pin'Up", itens: [{ data: '22/10', status: 'Dr. Renato Afonso — presença confirmada' }, { data: '29/10', status: 'Aguardando' }] }
  ],
  semana: [
    { dia: 'Segunda', data: '19/10/2026', tarefas: [
      ['Responder WhatsApp do Carlinhos', 1],
      ['Chamar convidado de quinta — parte da manhã (fixo) — Dr. Renato Afonso', 1],
      ['Colocar logo nas fotos e publicar fotos do final de semana dos eventos no site — ficou para quarta-feira', 0],
      ['Colocar programa no site', 1],
      ['Fazer arte de envio de link — programa CP', 1],
      ['Cobrar e produzir anúncios da revista', 1]
    ] },
    { dia: 'Terça', data: '20/10/2026', tarefas: [
      ['Responder WhatsApp do Carlinhos', 1],
      ['Manter a porta da redação fechada (fixo)', 1],
      ['Prestação do programa Arena News — enviar link para assessoria e convidados — CP e JU', 1],
      ['Boneco de prestação do Arena News com data', 1],
      ['Montar 1 comentário para o programa Arena News (alinhar o convidado com Adriano)', 1],
      ['Pedir contatos da assessoria e dos convidados para prestação', 1],
      ["Colocar o programa nos PC's em contas diferentes", 1],
      ['Publicar programa no site — Arena News', 0],
      ['Fazer fotos para o site e a galeria Country', 1],
      ['Enviar fotos — CP', 1],
      ['Finalizar galeria', 1],
      ['Kaká de Barretos e Dr. Léo', 1],
      ['Marcar', 1],
      ['João Alfredo', 1],
      ['Atualizar página dupla — logo Band, fundo e capas', 1]
    ] },
    { dia: 'Quarta', data: '21/10/2026', tarefas: [
      ['Responder WhatsApp do Carlinhos', 0],
      ["Chamar convidados do Pin'Up e Juju Cizotto — sem programa na quinta", 0],
      ['Solicitar material para exibição (vídeo, foto e banner)', 0],
      ['Enviar mockups para convidados, CP e JU', 0],
      ['Fechar material do programa de quinta', 0],
      ["Pin'Up", 1]
    ] },
    { dia: 'Quinta', data: '22/10/2026', tarefas: [
      ['Responder WhatsApp do Carlinhos', 0],
      ['Manter a porta da redação fechada (fixo)', 0],
      ['Receber convidados sempre com 1 hora de antecedência (fixo)', 0],
      ['Publicar programas no site — 2 programas (fixo)', 0],
      ['Imprimir pauta do programa das 11h30 (fixo)', 0],
      ["Montar 3 comentários de YouTube — Pin'Up", 0],
      ['Texto dos programas para prestação de link, com data (Boneco)', 0],
      ['Prestação dos programas (fixo)', 0],
      ['Solicitar contato para envio de link com os convidados', 0],
      ["Colocar na TV da recepção — Pin'Up e Juju Cizotto — 14h50 (sempre o último programa)", 0],
      ['Colocar o ao vivo depois do programa', 0],
      ['Colocar fotos no site e mandar para o contratante — Prefeita de Poloni (texto e data — pegar infos no site da Prefeitura)', 0],
      ['Fazer o carrossel', 0],
      ['Subir para o site as fotos do evento e Arena News (enviar link CP e JU e contratantes) — mandar para a prefeita Andreia', 0],
      ['Vincular itens na revista', 0],
      ['Realizar a prova da revista', 0]
    ] },
    { dia: 'Sexta', data: '23/10/2026', tarefas: [
      ['Responder WhatsApp do Carlinhos', 0],
      ['Subir no site — Programa Arena Aberta (fixo) — Band', 1],
      ['Subir no site — Programa Carlinhos Pinheiro (fixo) — TV Morada — sexta e segunda-feira', 1],
      ['Enviar link do programa (confirmar contratante)', 0],
      ['Cobrar e produzir anúncios da revista', 0],
      ['Atualizar a revista no programa — sexta e segunda-feira', 0],
      ['Colocar agenda no site CP — chamar Adriano', 0],
      ['Colocar revista de outubro no site', 0],
      ['Fazer a prestação da revista no celular do Seu Carlinhos', 0],
      ['Fazer varredura no site — CP', 0],
      ['Limpar revista — CP', 0]
    ] }
  ].map(d => ({ ...d, tarefas: d.tarefas.map(([texto, feito]) => ({ texto, feito: !!feito })) })),
  confirmar: [
    'Polini × Poloni: padronizado como Poloni — confirmar no site da Prefeitura, junto com o nome completo da prefeita Andreia.',
    "Pin'Up: na revista entra Wilson Rogério (Casa de Carnes da Mamãe); no programa de 22/10 o convidado é o Dr. Renato Afonso.",
    "Quarta (21/10): \"sem programa na quinta\" para Pin'Up/Juju, mas o Pin'Up de 22/10 está confirmado. Verificar se vale só para a Juju.",
    'Sexta (23/10): Arena Aberta e Carlinhos Pinheiro já aparecem como OK antes da data.',
    'Terça (20/10): "Kaká de Barretos e Dr. Léo", "Marcar" e "João Alfredo" — detalhar a tarefa se necessário.'
  ],
  boneco: {
    link: 'https://www.youtube.com/watch?v=kSNbRThlZ-U',
    titulo: 'Arena News ao Vivo',
    hora: '16h',
    data: '20 de Outubro de 2026',
    apresentacao: 'Carlinhos Pinheiro e Juju Cizotto apresentam mais uma edição especial do Arena News, com grandes nomes, entrevistas exclusivas e conteúdos que movimentam os negócios e a região!',
    estudio: 'NOS ESTÚDIOS COM CARLINHOS PINHEIRO',
    convidados: [
      { nome: 'Lorival Rodrigues dos Santos', desc: 'Membro da organização do 1º Nordeste É Aqui (Mirassol/SP).' },
      { nome: 'Claudemir Santos Reis', desc: 'Organizador do 1º Nordeste É Aqui (Mirassol/SP).' },
      { nome: 'Pedro Nimer', desc: 'Coordenador estadual do MDB e empresário da Nimer Veículos (São José do Rio Preto/SP).' },
      { nome: 'Moisés Camargo', desc: 'Presidente do Rio Preto Automóvel Clube.' },
      { nome: 'Rosane Cattozatto', desc: 'Empresária da NR Iluminação.' },
      { nome: 'Adão Moraes', desc: 'Gestor de negócios imobiliários da Riobens.' }
    ],
    rodape: [
      '🎥 *ARENA NEWS – INFORMAÇÃO, NEGÓCIOS E GRANDES HISTÓRIAS!*',
      '',
      'Uma edição especial com entrevistas, histórias de empreendedorismo, eventos e novidades que movimentam São José do Rio Preto e toda a região.',
      '',
      '📺 *Arena News:* informação, negócios, turismo e grandes histórias, direto de onde elas acontecem!',
      '📡 TV Morada do Sol – canal 43.1 HD, em Araraquara/SP, com abrangência de 196 cidades do Noroeste Paulista.',
      '🔁 *Reprise na TV Morada:* quarta-feira, às 21h15.',
      '🔔 Inscreva-se no canal *Grupo Arena CP*.',
      '📲 Siga *@ArenaCP* nas redes sociais.',
      '',
      '🌐 Site: www.arenacp.com.br',
      '🤝 *Contamos com sua audiência!*'
    ].join('\n')
  },
  prestacao: {
    referencia: 'Revista Country Fever — Edição 218 (Outubro 2026) · Arena News de 20/10/2026',
    clientes: [
      'Ademicon', 'Anatriello', 'André Gonçalves', 'Apollo Veículos', 'Astros do Cutiano', 'Augusto Volce', 'Biofaarm',
      { nome: 'Cachaça Mattos', contato: '(18) 98176-1102 — Reginaldo Mattos' },
      'Casa dos Construtores', 'Cirineu',
      { nome: 'CoorpTrans', contato: 'Elias Assencio' },
      'Dr. Halim', 'Dr. Léo', 'Dr. Lucas Garcia',
      { nome: 'Drogaria Total', contato: '(11) 99979-1044 — Samuel Pires', obs: 'Enviar para todos: (16) 99645-4767 · (17) 99745-2856 · (16) 98125-2484 · (16) 3505-0601' },
      'Duda Colar', 'Elétrica Bel', 'Expressinho', 'Faria Veículos', 'Fercomerciário', 'Ferro Velho', 'FF Motors', 'Flor de Aço',
      'Furlan', 'Gaúcha', 'Hellen Almeida', 'Hot Beach', 'Iquegami', 'Jamel',
      { nome: 'JF Feno', obs: 'Capa de outubro' },
      'Juarez Beira Rio — Pastel', 'Kaká de Barretos', 'Lavateria', 'Mamute', 'Marcar Rodeio', 'Mello', 'Milton Domingues',
      'Minajem', 'MJP',
      { nome: 'Monte Líbano', obs: '1 página inteira — falar com Alexandre' },
      'Nativa', 'Nossa Gente Car', 'Novo Horizonte',
      { nome: 'NR Iluminação', contato: 'Rosane Cattozatto' },
      'Nutrinew', 'O Boticário', 'Omoda', 'Paulo Emílio', 'Poty', 'Prudential', 'Rio Alta', 'Rozeta', 'Santa Casa', 'SEMAE',
      'Shampoo do Cowboy', 'Sicoob', 'SkyTech Drones', 'TI Resolve', 'Top Frios', 'TOTVS', 'Tracar', 'Trivion', 'Unirp',
      'Vabelli', 'Valtra', 'Vere Saúde', 'Zappas'
    ].map(c => ({ nome: '', contato: '', obs: '', revista: false, programa: false, ...(typeof c === 'string' ? { nome: c } : c) }))
  },
  perguntas: {
    programa: 'Arena News',
    data: '20/10/2026',
    convidados: [
      { nome: 'Lorival Rodrigues dos Santos', cargo: 'Organização do 1º Nordeste é Aqui', perguntas: [
        'Como surgiu a ideia de fazer o 1º Nordeste é Aqui em Mirassol?',
        'O que o público vai encontrar nos dias 23 e 24 de outubro?',
        'Qual é a importância desse evento para a cultura nordestina na região?'] },
      { nome: 'Claudemir Santos Reis', cargo: 'Organizador do 1º Nordeste é Aqui', perguntas: [
        'Quais são as principais atrações da festa?',
        'Quanto custa a entrada?',
        'O Nordeste é Aqui vai virar um evento fixo no calendário de Mirassol?'] },
      { nome: 'Pedro Nimer', cargo: 'Coordenador estadual do MDB e Nimer Veículos', perguntas: [
        'Como o senhor concilia a coordenação do MDB no estado com a gestão da Nimer Veículos?',
        'Como o senhor avalia o cenário político do MDB em São Paulo hoje?',
        'O que significa para o senhor o vídeo do voo da Asa Branca na Expo Fernandópolis, em 1995?',
        'Como o senhor avalia o mercado de automóveis na região de Rio Preto hoje?'] },
      { nome: 'Moisés Camargo', cargo: 'Presidente do Rio Preto Automóvel Clube', perguntas: [
        'Como surgiu o Rio Preto Automóvel Clube?',
        'Qual é o papel do clube na cidade?',
        'Como uma pessoa pode se associar?',
        'Moisés, esse ano você vai realizar a tradicional festa junina?'] },
      { nome: 'Rosane Cattozatto', cargo: 'Empresária da NR Iluminação', perguntas: [
        'Como começou a NR Iluminação?',
        'Qual é o diferencial da empresa no mercado?',
        'Rosane, como você consegue ficar no mercado há cerca de 3 décadas?',
        'Qual é a principal tendência em iluminação hoje?'] },
      { nome: 'Jesus Martim', cargo: 'Vice-presidente do Automóvel Clube', perguntas: [
        'Como o senhor chegou à vice-presidência do clube?',
        'Qual é a sua história pessoal com o mundo dos carros?',
        'Qual é o evento mais aguardado do clube nos próximos meses?'] },
      { nome: 'Adão Moraes', cargo: 'Gestor de negócios imobiliários da Riobens', perguntas: [
        'Você acha que Rio Preto é a maior referência de condomínios do estado de São Paulo?',
        'Como está o mercado imobiliário de Rio Preto hoje?',
        'Qual é o diferencial do novo empreendimento que será apresentado?',
        'Qual é a sua principal dica para quem vai comprar o primeiro imóvel?'] }
    ]
  }
};

const INFO_FIELDS = [
  ['revista', 'Revista'], ['edicao', 'Edição'], ['ano', 'Ano'], ['mes', 'Mês'],
  ['capa', 'Capa + página dupla'], ['dupla', 'Páginas da dupla'],
  ['anuncios', 'Prazo dos anúncios'], ['anunciosStatus', 'Status dos anúncios'],
  ['redacao', 'Fechamento redação'], ['grafica', 'Fechamento gráfica']
];
const TABS = { pauta: 'Pauta', prestacao: 'Prestação', boneco: 'Boneco', perguntas: 'Perguntas do programa' };

const clone = o => JSON.parse(JSON.stringify(o));
const $ = s => document.querySelector(s);

let state = load();
let tab = 'pauta';
try { tab = localStorage.getItem(TAB_KEY) || 'pauta'; } catch (e) {}
if (!TABS[tab]) tab = 'pauta';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return Object.assign(clone(DEFAULT), JSON.parse(raw));
  } catch (e) {}
  return clone(DEFAULT);
}

const hhmm = d => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
function setStatus(text, kind = 'ok') {
  const el = $('#saved');
  el.textContent = text;
  el.dataset.state = kind;
}

let saveTimer, pushTimer;
function save() {
  clearTimeout(saveTimer);
  if (DB) { setDirty(true); setStatus('Salvando…', 'sync'); }
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      if (!DB) setStatus(`Salvo às ${hhmm(new Date())}`);
    } catch (e) {
      setStatus('Não foi possível salvar', 'err');
    }
  }, 300);
  if (DB) { clearTimeout(pushTimer); pushTimer = setTimeout(dbPush, 1000); }
}

/* ---------- Banco de dados (Supabase, configurado em config.js) ---------- */

const DB = window.PAUTA_DB && PAUTA_DB.url && PAUTA_DB.key ? PAUTA_DB : null;
const DIRTY_KEY = 'pauta-arena-dirty'; // edição local que ainda não subiu
let remoteStamp = null;
let dbBusy = false;

const isDirty = () => { try { return localStorage.getItem(DIRTY_KEY) === '1'; } catch (e) { return false; } };
const setDirty = v => { try { v ? localStorage.setItem(DIRTY_KEY, '1') : localStorage.removeItem(DIRTY_KEY); } catch (e) {} };

async function dbRequest(query, opts = {}) {
  const headers = { apikey: DB.key, 'Content-Type': 'application/json', ...opts.headers };
  if (DB.key.startsWith('eyJ')) headers.Authorization = `Bearer ${DB.key}`; // chave "anon" antiga (JWT)
  const r = await fetch(`${DB.url.replace(/\/$/, '')}/rest/v1/pauta${query}`, { ...opts, headers });
  if (!r.ok) throw new Error(`Banco respondeu ${r.status}`);
  return r.json();
}
const dbLoad = () => dbRequest(`?id=eq.${encodeURIComponent(DB.id)}&select=data,updated_at`).then(rows => rows[0] || null);

async function dbPush() {
  dbBusy = true;
  try {
    const rows = await dbRequest('?on_conflict=id', {
      method: 'POST',
      headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify({ id: DB.id, data: state, updated_at: new Date().toISOString() })
    });
    remoteStamp = rows[0].updated_at;
    setDirty(false);
    setStatus(`Salvo na nuvem às ${hhmm(new Date())}`);
  } catch (e) {
    setStatus('Sem conexão — salvo neste navegador', 'err');
  } finally {
    dbBusy = false;
  }
}

function applyRemote(row) {
  state = Object.assign(clone(DEFAULT), row.data);
  remoteStamp = row.updated_at;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  render();
}

// Ao abrir: traz a pauta do banco, ou envia a deste navegador se houver edição que não subiu
async function dbStart() {
  if (!DB) return;
  setStatus('Conectando…', 'sync');
  try {
    const row = await dbLoad();
    if (!row || isDirty()) await dbPush();
    else { applyRemote(row); setStatus('Sincronizado'); }
  } catch (e) {
    setStatus('Sem conexão — salvo neste navegador', 'err');
  }
  setInterval(dbPoll, 15000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) dbPoll(); });
}

// Traz o que outra pessoa mudou, sem atrapalhar quem está digitando
async function dbPoll() {
  if (document.hidden || dbBusy) return;
  if (isDirty()) { if (pushFailed()) dbPush(); return; } // tenta reenviar depois de ficar sem conexão
  if (document.activeElement && document.activeElement.closest && document.activeElement.closest('[data-path], input')) return;
  try {
    const row = await dbLoad();
    if (isDirty()) return;
    if (row && row.updated_at !== remoteStamp) { applyRemote(row); toast('Pauta atualizada'); }
  } catch (e) {}
}
const pushFailed = () => $('#saved').dataset.state === 'err';

function get(path) { return path.split('.').reduce((o, k) => (o == null ? o : o[k]), state); }
function set(path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  keys.reduce((o, k) => o[k], state)[last] = value;
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function tone(text) {
  const t = String(text || '');
  if (/\bok\b|confirmad[ao]|conclu|pronto/i.test(t)) return 'ok';
  if (/aguard|confirmar|produzir|falar|pendente|cobrar/i.test(t)) return 'warn';
  return '';
}

const ICON = {
  x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  send: '<svg viewBox="0 0 24 24"><path d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>'
};

/* ---------- Logos (logos.js) ---------- */

// Mostra a versão clara do logo no modo escuro, quando existir
function logo(name, cls = '') {
  const L = window.LOGOS || {};
  if (!L[name]) return '';
  const light = L[name + '-light'];
  return `<img class="brand-img ${cls}${light ? ' only-light' : ''}" src="${L[name]}" alt="">` +
    (light ? `<img class="brand-img ${cls} only-dark" src="${light}" alt="">` : '');
}

function programBadge(nome) {
  const n = String(nome || '').toLowerCase();
  if (n.includes('pin')) return 'badge-pinup';
  if (n.includes('juju')) return 'badge-juju';
  if (n.includes('news')) return 'badge-arenanews';
  if (n.includes('carlinhos')) return 'badge-carlinhos';
  return '';
}

/* ---------- Componentes ---------- */

function ed(path, { cls = '', ph = 'Escrever…', multi = false, status = false } = {}) {
  const v = get(path);
  const t = status ? ` data-tone="${tone(v)}"` : '';
  return `<span class="ed ${multi ? 'multi' : ''} ${cls}" contenteditable="plaintext-only" spellcheck="true" data-path="${path}" data-ph="${esc(ph)}"${t}${multi ? ' data-multi="1"' : ''}>${esc(v)}</span>`;
}
const delBtn = (path, i, confirmMsg = '') =>
  `<button class="del" title="Remover" aria-label="Remover" data-del="${path}" data-i="${i}"${confirmMsg ? ` data-confirm="${esc(confirmMsg)}"` : ''}>${ICON.x}</button>`;
const addBtn = (path, tpl, label) =>
  `<button class="add" data-add="${path}" data-tpl="${esc(JSON.stringify(tpl))}">+ ${label}</button>`;

function table(path, cols, addLabel = 'Adicionar linha') {
  const rows = get(path);
  const tpl = Object.fromEntries(cols.map(c => [c.key, '']));
  return `<div class="table-wrap"><table>
    <thead><tr>${cols.map(c => `<th>${c.label}</th>`).join('')}<th></th></tr></thead>
    <tbody>${rows.map((r, i) => `<tr>${cols.map(c =>
      `<td class="${c.nowrap ? 'nowrap' : ''}" ${c.width ? `style="width:${c.width}"` : ''}>${ed(`${path}.${i}.${c.key}`, { status: c.status, ph: c.ph || '—' })}</td>`).join('')}
      <td class="act">${delBtn(path, i)}</td></tr>`).join('')}</tbody>
  </table></div>${addBtn(path, tpl, addLabel)}`;
}

function list(path, ph, addLabel = 'Adicionar item') {
  return `<ul class="list">${get(path).map((_, i) =>
    `<li>${ed(`${path}.${i}`, { ph })}${delBtn(path, i)}</li>`).join('')}</ul>${addBtn(path, '', addLabel)}`;
}

/* ---------- Datas ---------- */

function parseBR(s) {
  const m = String(s || '').match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  return m ? new Date(+m[3], m[2] - 1, +m[1]) : null;
}
function todayBR() {
  const t = new Date();
  return `${String(t.getDate()).padStart(2, '0')}/${String(t.getMonth() + 1).padStart(2, '0')}/${t.getFullYear()}`;
}
function daysUntil(s) {
  const d = parseBR(s);
  if (!d) return null;
  const t = new Date(); t.setHours(0, 0, 0, 0);
  return Math.round((d - t) / 86400000);
}

/* ---------- Render ---------- */

function weekProgress() {
  let done = 0, total = 0;
  state.semana.forEach(d => d.tarefas.forEach(t => { total++; if (t.feito) done++; }));
  return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
}

function summaryHTML() {
  const i = state.info;
  const n = daysUntil(i.grafica);
  const when = n == null ? '' : n > 1 ? `faltam ${n} dias` : n === 1 ? 'é amanhã' : n === 0 ? 'é hoje' : `há ${-n} dias`;
  const w = weekProgress();
  return `
    <div class="card stat edition">${logo('countryfever', 'edition-logo')}<span class="value">Edição ${esc(i.edicao)}</span><span class="sub">Ano ${esc(i.ano)} · ${esc(i.mes)}</span></div>
    <div class="card stat"><span class="label">Capa e página dupla</span><span class="value" style="font-size:16px">${esc(i.capa)}</span><span class="sub">Páginas ${esc(i.dupla)}</span></div>
    <div class="card stat accent"><span class="label">Fechamento gráfica</span><span class="value">${esc(i.grafica)}</span><span class="sub">${when}${i.redacao ? ` · redação ${esc(i.redacao)}` : ''}</span></div>
    <div class="card stat"><span class="label">Tarefas da semana</span><span class="value">${w.pct}%</span><span class="sub">${w.done} de ${w.total} concluídas</span><div class="progress"><i style="width:${w.pct}%"></i></div></div>`;
}

function renderPauta() {
  const today = todayBR();
  const now = parseBR(today);
  const dayInfo = state.semana.map(d => {
    const done = d.tarefas.filter(t => t.feito).length;
    const total = d.tarefas.length;
    const date = parseBR(d.data);
    return { done, total, pct: total ? Math.round(done / total * 100) : 0, isToday: d.data === today, isPast: date && date < now };
  });

  const dayNav = state.semana.map((d, di) => {
    const k = dayInfo[di];
    const state_ = k.total && k.done === k.total ? 'full' : k.isToday ? 'today' : '';
    return `<button class="day-chip ${state_}" data-goto="dia-${di}"><b>${esc(d.dia.slice(0, 3))}</b><span>${esc(d.data.slice(0, 5))}</span><i>${k.done}/${k.total}</i></button>`;
  }).join('');

  const days = state.semana.map((d, di) => {
    const k = dayInfo[di];
    const pending = k.total - k.done;
    return `<article class="card day ${k.isToday ? 'today' : ''} ${k.isPast ? 'past' : ''}" id="dia-${di}">
      <aside class="day-rail">
        <div class="day-id">
          ${ed(`semana.${di}.dia`, { cls: 'day-week' })}
          ${ed(`semana.${di}.data`, { cls: 'day-date' })}
          ${k.isToday ? '<span class="badge">Hoje</span>' : ''}
        </div>
        <div class="day-stats">
          <span class="day-pct">${k.pct}%</span>
          <div class="progress"><i style="width:${k.pct}%"></i></div>
          <span class="count">${k.done} de ${k.total} concluídas${pending ? ` · ${pending} pendente${pending > 1 ? 's' : ''}` : ''}</span>
        </div>
      </aside>
      <div class="day-body">
        <ul class="checks">${d.tarefas.map((t, ti) => `<li class="${t.feito ? 'done' : ''}">
          <label class="check"><input type="checkbox" data-check="semana.${di}.tarefas.${ti}.feito" ${t.feito ? 'checked' : ''} aria-label="Concluída"><span class="box"></span></label>
          ${ed(`semana.${di}.tarefas.${ti}.texto`, { ph: 'Nova tarefa' })}${delBtn(`semana.${di}.tarefas`, ti)}</li>`).join('')}
        </ul>
        ${addBtn(`semana.${di}.tarefas`, { texto: '', feito: false }, 'Tarefa')}
      </div>
    </article>`;
  }).join('');

  const programas = state.programas.map((p, pi) => `<div class="card">
      <div class="program-head">${logo(programBadge(p.nome), 'badge-img')}<h3>${ed(`programas.${pi}.nome`)}</h3></div>
      ${table(`programas.${pi}.itens`, [{ key: 'data', label: 'Data', nowrap: true, width: '80px' }, { key: 'status', label: 'Convidado / status', status: true }], 'Data')}
    </div>`).join('');

  const hd = parseBR(state.header.data);
  const heroDate = hd ? hd.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) : state.header.data;
  const k = dayInfo.find((_, i) => state.semana[i].data === state.header.data);
  const heroSub = k ? (k.total - k.done ? `${k.total - k.done} tarefas pendentes hoje` : 'Tudo concluído hoje') : `Semana ${state.header.semana}`;

  $('#panel-pauta').innerHTML = `
    <div class="hero">
      <p class="eyebrow">Pauta do dia</p>
      <h2 class="hero-title">${esc(heroDate)}</h2>
      <p class="hero-sub">${esc(heroSub)} · ${esc(state.info.revista)} ${esc(state.info.edicao)}</p>
    </div>
    <div class="grid four" id="summary">${summaryHTML()}</div>

    <section>
      <div class="section-head"><div><p class="eyebrow">01 · Revista</p><h2>${esc(state.info.revista)} — ${esc(state.info.mes)}</h2></div></div>
      <div class="card" style="margin-bottom:16px">
        <h3>Ficha da edição</h3>
        <div class="fields">${INFO_FIELDS.map(([k, l]) => `<label class="field"><span>${l}</span>${ed(`info.${k}`, { status: k === 'anunciosStatus' })}</label>`).join('')}</div>
      </div>
      <div class="grid two">
        <div class="card"><h3>Seções</h3>${table('secoes', [{ key: 'secao', label: 'Seção', nowrap: true }, { key: 'conteudo', label: 'Conteúdo' }, { key: 'status', label: 'Status', status: true }], 'Seção')}</div>
        <div class="card"><h3>Produção</h3>${table('producao', [{ key: 'item', label: 'Item', nowrap: true }, { key: 'valor', label: 'Valor' }], 'Item')}</div>
      </div>
      <div class="card" style="margin-top:16px"><h3>Observações</h3>${list('observacoes', 'Nova observação', 'Observação')}</div>
    </section>

    <section>
      <div class="section-head"><div><p class="eyebrow">02 · Gravações</p><h2>Matérias gravadas (seg/sex) — link no Drive</h2></div></div>
      <div class="card">${table('materias', [{ key: 'data', label: 'Data', nowrap: true, width: '80px' }, { key: 'materia', label: 'Matéria' }, { key: 'obs', label: 'Obs', status: true }], 'Matéria')}</div>
    </section>

    <section>
      <div class="section-head"><div><p class="eyebrow">03 · Programas</p><h2>Programas de quinta-feira</h2></div></div>
      <div class="grid two">${programas}</div>
    </section>

    <section>
      <div class="section-head"><div><p class="eyebrow">04 · Semana</p><h2>Pauta semanal</h2><p>Semana ${ed('header.semana')}</p></div></div>
      <nav class="day-nav no-export">${dayNav}</nav>
      <div class="days">${days}</div>
    </section>

    <section class="callout">
      <h3>Pontos para confirmar</h3>
      ${list('confirmar', 'Novo ponto', 'Ponto')}
    </section>`;
}

function bonecoText(b) {
  return [
    `TRANSMISSÃO ARENA: 👉 *Assista agora pelo link:* ${b.link}`,
    `🎙️ *${b.titulo} – Hoje, às ${b.hora}! Dia ${b.data}.*`,
    '',
    b.apresentacao,
    '',
    `👥 *CONVIDADOS DESTA EDIÇÃO – ${b.estudio}*`,
    ...b.convidados.map(c => `🔹 *${c.nome}* – ${c.desc}`),
    '',
    b.rodape
  ].join('\n');
}
function bonecoPreviewHTML() {
  // Um bloco por parágrafo, para as imagens em partes poderem quebrar entre eles
  return bonecoText(state.boneco).split(/\n{2,}/).map(par => `<div class="para">${esc(par)
    .replace(/\*([^*\n]+)\*/g, '<strong>$1</strong>')
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')}</div>`).join('');
}

function renderBoneco() {
  const b = state.boneco;
  const f = (k, label, opts = {}) => `<div><span class="input-label">${label}</span>${ed(`boneco.${k}`, { cls: 'box-ed', ...opts })}</div>`;
  $('#panel-boneco').innerHTML = `
    <div class="section-head"><div><p class="eyebrow">Prestação</p><h2>Boneco do programa</h2><p>Texto para envio do link aos convidados, assessorias e contratantes. Use *asteriscos* para negrito.</p></div><div class="head-logo">${logo('arenanews')}</div></div>
    <div class="boneco-grid">
      <div class="card form-stack no-export">
        ${f('link', 'Link da transmissão', { ph: 'https://youtube.com/…' })}
        <div class="grid two" style="gap:12px">
          ${f('titulo', 'Título')}
          ${f('hora', 'Horário')}
        </div>
        ${f('data', 'Data por extenso', { ph: '22 de Outubro de 2026' })}
        ${f('apresentacao', 'Apresentação', { multi: true })}
        ${f('estudio', 'Chamada dos convidados')}
        <div>
          <span class="input-label">Convidados</span>
          ${b.convidados.map((c, i) => `<div class="guest-row">
            ${ed(`boneco.convidados.${i}.nome`, { cls: 'box-ed', ph: 'Nome' })}
            ${ed(`boneco.convidados.${i}.desc`, { cls: 'box-ed', ph: 'Cargo / descrição' })}
            ${delBtn('boneco.convidados', i)}</div>`).join('')}
          ${addBtn('boneco.convidados', { nome: '', desc: '' }, 'Convidado')}
        </div>
        ${f('rodape', 'Encerramento', { multi: true })}
      </div>
      <div class="card preview splittable">
        <div class="preview-actions no-export">
          <button class="btn sm primary" data-copy="whatsapp">${ICON.copy}Copiar para WhatsApp</button>
          <button class="btn sm" data-copy="md">${ICON.copy}Copiar em Markdown</button>
        </div>
        <div class="preview-body"><div class="bubble" id="bonecoPreview">${bonecoPreviewHTML()}</div></div>
      </div>
    </div>`;
}

/* ---------- Prestação de clientes ---------- */

let clientFilter = { q: '', show: 'todos' };
const NEW_CLIENT = { nome: '', contato: '', obs: '', revista: false, programa: false };
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function waLink(contato) {
  const m = String(contato || '').match(/\(?\d{2}\)?\s*9?\d{4}[-\s]?\d{4}/);
  if (!m) return '';
  const digits = m[0].replace(/\D/g, '');
  return `https://wa.me/55${digits}?text=${encodeURIComponent(bonecoText(state.boneco))}`;
}

function clientRowsHTML() {
  const q = norm(clientFilter.q);
  const rows = state.prestacao.clientes.map((c, i) => ({ c, i })).filter(({ c }) => {
    const done = c.revista && c.programa;
    if (clientFilter.show === 'pendentes' && done) return false;
    if (clientFilter.show === 'concluidos' && !done) return false;
    return !q || norm(`${c.nome} ${c.contato} ${c.obs}`).includes(q);
  });
  const head = `<div class="client head"><span class="c-rev">Revista</span><span class="c-prog">Programa</span><span class="c-name">Cliente</span><span class="c-contact">Contato</span><span class="c-obs">Observação</span><span class="c-act"></span></div>`;
  if (!rows.length) return head + '<p class="empty">Nenhum cliente encontrado.</p>';
  return head + rows.map(({ c, i }) => {
    const p = `prestacao.clientes.${i}`;
    const wa = waLink(c.contato);
    return `<div class="client ${c.revista && c.programa ? 'complete' : ''}">
      <label class="check c-rev" title="Prestação da revista"><input type="checkbox" data-check="${p}.revista" ${c.revista ? 'checked' : ''} aria-label="Prestação da revista"><span class="box"></span><span class="check-label">Revista</span></label>
      <label class="check c-prog" title="Envio do programa"><input type="checkbox" data-check="${p}.programa" ${c.programa ? 'checked' : ''} aria-label="Envio do programa"><span class="box"></span><span class="check-label">Programa</span></label>
      <div class="c-name">${ed(`${p}.nome`, { ph: 'Nome do cliente' })}</div>
      <div class="c-contact">${ed(`${p}.contato`, { ph: 'Contato / telefone' })}</div>
      <div class="c-obs">${ed(`${p}.obs`, { ph: '—' })}</div>
      <div class="c-act">${wa ? `<a class="wa-btn no-export" href="${esc(wa)}" target="_blank" rel="noopener" title="Enviar o boneco pelo WhatsApp" aria-label="Enviar o boneco pelo WhatsApp">${ICON.send}</a>` : ''}${delBtn('prestacao.clientes', i, `Remover ${c.nome || 'este cliente'}?`)}</div>
    </div>`;
  }).join('');
}

function clientStatsHTML() {
  const cs = state.prestacao.clientes, n = cs.length;
  const stat = (label, done, cls = '') => {
    const pct = n ? Math.round(done / n * 100) : 0;
    return `<div class="card stat ${cls}"><span class="label">${label}</span><span class="value">${done}<small> / ${n}</small></span><div class="progress"><i style="width:${pct}%"></i></div></div>`;
  };
  return stat('Prestação da revista', cs.filter(c => c.revista).length) +
    stat('Programa enviado', cs.filter(c => c.programa).length) +
    stat('Concluídos', cs.filter(c => c.revista && c.programa).length) +
    `<div class="card stat accent"><span class="label">Pendentes</span><span class="value">${cs.filter(c => !(c.revista && c.programa)).length}</span><span class="sub">clientes sem envio completo</span></div>`;
}

function renderPrestacao() {
  const seg = [['todos', 'Todos'], ['pendentes', 'Pendentes'], ['concluidos', 'Concluídos']]
    .map(([k, l]) => `<button data-filter="${k}" aria-pressed="${clientFilter.show === k}">${l}</button>`).join('');
  $('#panel-prestacao').innerHTML = `<section class="prest">
    <div class="section-head">
      <div><p class="eyebrow">Clientes</p><h2>Prestação e envio do programa</h2><p>${ed('prestacao.referencia', { ph: 'Edição / programa de referência' })}</p></div>
      <div class="toolbar no-export">
        <button class="btn sm" data-copy="whatsapp">${ICON.copy}Copiar boneco</button>
        <button class="btn sm" data-action="sort-clients">Ordenar A–Z</button>
        <button class="btn sm" data-action="new-cycle">Novo ciclo</button>
      </div>
    </div>
    <div class="grid four" id="clientStats">${clientStatsHTML()}</div>
    <div class="card clients-card splittable">
      <div class="clients-tools no-export">
        <input type="search" id="clientSearch" placeholder="Buscar cliente, contato ou observação…" value="${esc(clientFilter.q)}" autocomplete="off">
        <div class="seg">${seg}</div>
      </div>
      <div class="clients" id="clientList">${clientRowsHTML()}</div>
      ${addBtn('prestacao.clientes', NEW_CLIENT, 'Cliente')}
    </div></section>`;
}

function renderPerguntas() {
  const p = state.perguntas;
  $('#panel-perguntas').innerHTML = `
    <div class="section-head">
      <div class="title-with-logo">${logo(programBadge(p.programa), 'badge-img lg')}<div><p class="eyebrow">Roteiro</p><h2>Perguntas — ${ed('perguntas.programa')}</h2><p>Programa de ${ed('perguntas.data')}</p></div></div>
      <div class="toolbar no-export">
        <button class="btn sm" data-copy="perguntas">${ICON.copy}Copiar perguntas</button>
        <button class="btn sm" data-action="to-boneco">${ICON.send}Enviar convidados ao boneco</button>
      </div>
    </div>
    <div class="guests">${p.convidados.map((g, gi) => `<article class="card guest">
      <div class="guest-head">
        <span class="num">${gi + 1}</span>
        <div class="guest-title">${ed(`perguntas.convidados.${gi}.nome`, { cls: 'name', ph: 'Nome do convidado' })}${ed(`perguntas.convidados.${gi}.cargo`, { cls: 'role', ph: 'Cargo / empresa' })}</div>
        ${delBtn('perguntas.convidados', gi, `Remover ${g.nome || 'este convidado'} e as perguntas?`)}
      </div>
      <ol class="qs">${g.perguntas.map((_, qi) => `<li>${ed(`perguntas.convidados.${gi}.perguntas.${qi}`, { ph: 'Nova pergunta' })}${delBtn(`perguntas.convidados.${gi}.perguntas`, qi)}</li>`).join('')}</ol>
      ${addBtn(`perguntas.convidados.${gi}.perguntas`, '', 'Pergunta')}
    </article>`).join('')}</div>
    ${addBtn('perguntas.convidados', { nome: '', cargo: '', perguntas: [''] }, 'Convidado')}`;
}

function renderMeta() {
  const h = state.header;
  $('#brandLogo').innerHTML = logo('arenacp-mark') || '<div class="logo">CP</div>';
  $('#meta').innerHTML = `${ed('header.responsavel')}<span class="dot">·</span>${ed('header.funcao')}<span class="dot">·</span>${ed('header.data')}`;
}

function render() {
  renderMeta();
  renderPauta();
  renderPrestacao();
  renderBoneco();
  renderPerguntas();
  showTab(tab);
}

function showTab(name) {
  tab = name;
  try { localStorage.setItem(TAB_KEY, name); } catch (e) {}
  document.querySelectorAll('[data-tab]').forEach(b => b.setAttribute('aria-selected', b.dataset.tab === name));
  Object.keys(TABS).forEach(k => { $(`#panel-${k}`).hidden = k !== name; });
}

/* ---------- Eventos ---------- */

document.addEventListener('input', e => {
  const el = e.target.closest('[data-path]');
  if (!el) return;
  let v = el.innerText;
  if (!el.dataset.multi) v = v.replace(/\s*\n\s*/g, ' ');
  v = v.replace(/\n$/, '');
  set(el.dataset.path, v);
  if (el.hasAttribute('data-tone')) el.dataset.tone = tone(v);
  const p = el.dataset.path;
  if (p.startsWith('boneco')) $('#bonecoPreview').innerHTML = bonecoPreviewHTML();
  if (p.startsWith('info')) $('#summary').innerHTML = summaryHTML();
  save();
});

document.addEventListener('keydown', e => {
  const el = e.target.closest && e.target.closest('[data-path]');
  if (el && e.key === 'Enter' && !el.dataset.multi) { e.preventDefault(); el.blur(); }
  if (e.key === 'Escape') closeMenus();
});

document.addEventListener('focusout', e => {
  // Campos vazios ficam realmente vazios (para mostrar o placeholder)
  const el = e.target.closest && e.target.closest('[data-path]');
  if (el && !el.innerText.trim()) el.textContent = '';
});

document.addEventListener('change', e => {
  const cb = e.target.closest('[data-check]');
  if (!cb) return;
  set(cb.dataset.check, cb.checked);
  save();
  if (cb.dataset.check.startsWith('prestacao')) {
    cb.closest('.client').classList.toggle('complete', /* revista e programa */
      [...cb.closest('.client').querySelectorAll('input')].every(i => i.checked));
    $('#clientStats').innerHTML = clientStatsHTML();
  } else {
    renderPauta();
  }
});

document.addEventListener('input', e => {
  if (e.target.id !== 'clientSearch') return;
  clientFilter.q = e.target.value;
  $('#clientList').innerHTML = clientRowsHTML();
});

document.addEventListener('click', async e => {
  const t = e.target.closest('button');
  if (!t) { closeMenus(); return; }

  if (t.dataset.tab) return showTab(t.dataset.tab);

  if (t.dataset.goto) {
    const el = document.getElementById(t.dataset.goto);
    window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 140, behavior: 'smooth' });
    return;
  }

  if (t.dataset.filter) {
    clientFilter.show = t.dataset.filter;
    renderPrestacao();
    return;
  }

  if (t.dataset.action === 'sort-clients') {
    state.prestacao.clientes.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    save(); renderPrestacao();
    return;
  }

  if (t.dataset.action === 'new-cycle') {
    if (!confirm('Começar um novo ciclo? Todos os clientes serão desmarcados (revista e programa).')) return;
    state.prestacao.clientes.forEach(c => { c.revista = false; c.programa = false; });
    save(); renderPrestacao();
    toast('Novo ciclo iniciado');
    return;
  }

  if (t.dataset.add) {
    if (t.dataset.add === 'prestacao.clientes') clientFilter = { q: '', show: 'todos' };
    const arr = get(t.dataset.add);
    arr.push(JSON.parse(t.dataset.tpl));
    save(); render();
    const target = document.querySelector(`[data-path^="${t.dataset.add}.${arr.length - 1}"]`);
    if (target) target.focus();
    return;
  }

  if (t.dataset.del) {
    if (t.dataset.confirm && !confirm(t.dataset.confirm)) return;
    get(t.dataset.del).splice(+t.dataset.i, 1);
    save(); render();
    return;
  }

  if (t.dataset.copy) {
    const map = {
      whatsapp: () => bonecoText(state.boneco),
      md: () => toBold(bonecoText(state.boneco)),
      perguntas: () => perguntasText(false)
    };
    copy(map[t.dataset.copy]());
    return;
  }

  if (t.dataset.action === 'to-boneco') {
    if (!confirm('Substituir os convidados do boneco pelos convidados desta lista?')) return;
    state.boneco.convidados = state.perguntas.convidados.map(g => ({ nome: g.nome, desc: g.cargo ? g.cargo.replace(/\.?$/, '.') : '' }));
    save(); render(); showTab('boneco');
    toast('Convidados enviados ao boneco');
    return;
  }

  if (t.id === 'exportBtn' || t.id === 'moreBtn') {
    const pop = t.nextElementSibling;
    const open = pop.hidden;
    closeMenus();
    pop.hidden = !open;
    t.setAttribute('aria-expanded', open);
    return;
  }

  if (t.dataset.export) {
    closeMenus();
    const x = t.dataset.export;
    if (x === 'md') exportMarkdown();
    else if (x.startsWith('wa')) exportWhatsApp(x === 'wa-all' ? 'all' : 'tab');
    else exportImage(x === 'img-all' ? 'all' : 'tab');
    return;
  }

  if (t.dataset.more) {
    closeMenus();
    const a = t.dataset.more;
    if (a === 'backup') download(new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' }), `pauta-backup-${fileDate()}.json`);
    if (a === 'import') $('#importFile').click();
    if (a === 'folder') {
      if (!window.showDirectoryPicker) toast('Este navegador não permite escolher pasta; as imagens vão para Downloads');
      else pickFolder().catch(() => {});
    }
    if (a === 'reset' && confirm('Restaurar a pauta original? Todas as edições serão perdidas.')) {
      state = clone(DEFAULT); save(); render(); toast('Pauta restaurada');
    }
    return;
  }

  if (t.id === 'themeBtn') {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch (err) {}
  }
});

$('#importFile').addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!data || !data.semana) throw new Error();
    state = Object.assign(clone(DEFAULT), data);
    save(); render(); toast('Backup importado');
  } catch (err) {
    toast('Arquivo de backup inválido');
  }
  e.target.value = '';
});

function closeMenus() {
  document.querySelectorAll('.menu-pop').forEach(p => { p.hidden = true; });
  document.querySelectorAll('[aria-haspopup]').forEach(b => b.setAttribute('aria-expanded', 'false'));
}

/* ---------- Utilidades ---------- */

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); ta.remove();
  }
  toast('Copiado');
}

function download(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

const fileDate = () => (state.header.data || todayBR()).replace(/\//g, '-');
const toBold = s => s.replace(/\*([^*\n]+)\*/g, '**$1**');

function perguntasText(md) {
  const b = md ? '**' : '*';
  return state.perguntas.convidados.map((g, i) =>
    `${b}${i + 1}. ${g.nome}${g.cargo ? ` (${g.cargo})` : ''}${b}\n\n${g.perguntas.filter(q => q.trim()).map(q => `- ${q}`).join('\n')}`
  ).join('\n\n');
}

/* ---------- Exportar Markdown ---------- */

function mdTable(rows, cols) {
  const cell = v => String(v ?? '').replace(/\|/g, '\\|');
  return [
    `| ${cols.map(c => c[1]).join(' | ')} |`,
    `| ${cols.map(() => '---').join(' | ')} |`,
    ...rows.map(r => `| ${cols.map(c => cell(r[c[0]])).join(' | ')} |`)
  ].join('\n');
}

function exportMarkdown() {
  const s = state, h = s.header, i = s.info;
  const d = parseBR(h.data);
  const iso = d ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` : '';
  const out = [
    '---', 'tipo: pauta', 'categoria: revista', `responsavel: ${h.responsavel}`, `funcao: ${h.funcao}`, `data: ${iso}`, `semana: ${h.semana}`,
    'tags:', '  - arena-cp', '  - pauta', '  - revista', '  - country-fever', '---', '',
    `# Pauta — ${h.responsavel} (${h.funcao}) — ${h.data}`, '',
    '> [!info] Resumo',
    `> - **Revista:** ${i.revista} — Edição **${i.edicao}** — Ano ${i.ano} — ${i.mes}`,
    `> - **Capa + página dupla:** ${i.capa} — páginas **${i.dupla}**`,
    `> - **Anúncios:** até **${i.anuncios}**${i.anunciosStatus ? ` — **${i.anunciosStatus}**` : ''} | **Fechamento redação:** ${i.redacao} | **Fechamento gráfica:** ${i.grafica}`,
    '', '---', '',
    `## Revista ${i.revista} — ${i.mes}`, '',
    '### Seções', '', mdTable(s.secoes, [['secao', 'Seção'], ['conteudo', 'Conteúdo'], ['status', 'Status']]), '',
    '### Produção', '', ...s.producao.map(p => `- **${p.item}:** ${p.valor}`), '',
    '### Observações', '', ...s.observacoes.map(o => `- ${o}`), '',
    '---', '',
    '## Matérias gravadas (seg/sex) — link no Drive', '',
    mdTable(s.materias, [['data', 'Data'], ['materia', 'Matéria'], ['obs', 'Obs']]), '',
    '---', '',
    '## Programas de quinta-feira', '',
    ...s.programas.flatMap(p => [`### ${p.nome}`, '', mdTable(p.itens, [['data', 'Data'], ['status', 'Status']]), '']),
    '---', '',
    '## Pauta semanal', '',
    ...s.semana.flatMap(d => [`### ${d.dia} — ${d.data}`, '', ...d.tarefas.map(t => `- [${t.feito ? 'x' : ' '}] ${t.texto}`), '']),
    '> [!warning] Pontos para confirmar',
    ...s.confirmar.map(c => `> - ${c}`),
    '', '---', '',
    '## Prestação de clientes', '',
    `> ${s.prestacao.referencia}`, '',
    mdTable(s.prestacao.clientes.map(c => ({ ...c, rev: c.revista ? '✅' : '⬜', prog: c.programa ? '✅' : '⬜' })),
      [['nome', 'Cliente'], ['contato', 'Contato'], ['rev', 'Revista'], ['prog', 'Programa'], ['obs', 'Obs']]), '',
    '---', '',
    '## Boneco', '',
    toBold(bonecoText(s.boneco)), '',
    '---', '',
    `## Perguntas — ${s.perguntas.programa} — ${s.perguntas.data}`, '',
    perguntasText(true), ''
  ];
  download(new Blob([out.join('\n')], { type: 'text/markdown;charset=utf-8' }), `Pauta ${fileDate()}.md`);
  toast('Markdown exportado');
}

/* ---------- Exportar imagem ---------- */

function loadHtml2Canvas() {
  if (window.html2canvas) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const sc = document.createElement('script');
    sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    sc.onload = resolve;
    sc.onerror = () => reject(new Error('Sem conexão para carregar o exportador de imagem'));
    document.head.appendChild(sc);
  });
}

// Cópias das abas (com título de seção quando for a pauta completa)
function clonePanels(scope) {
  const ids = scope === 'all' ? Object.keys(TABS) : [tab];
  const out = [];
  ids.forEach(id => {
    if (scope === 'all') {
      const title = document.createElement('h2');
      title.className = 'export-section';
      title.textContent = TABS[id];
      out.push(title);
    }
    const c = $(`#panel-${id}`).cloneNode(true);
    c.hidden = false;
    c.removeAttribute('id');
    out.push(c);
  });
  return out;
}

/* ---------- Pasta das imagens (Imagens\Pauta - Imagens) ---------- */

// Guarda a pasta escolhida no IndexedDB para não perguntar de novo
function folderStore(mode, fn) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('pauta-arena-fs', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('kv');
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      const tx = req.result.transaction('kv', mode);
      const r = fn(tx.objectStore('kv'));
      tx.oncomplete = () => resolve(r.result);
      tx.onerror = () => reject(tx.error);
    };
  });
}

async function pickFolder() {
  const handle = await window.showDirectoryPicker({ id: 'pauta-imagens', mode: 'readwrite', startIn: 'pictures' });
  await folderStore('readwrite', s => s.put(handle, 'images'));
  toast(`Imagens serão salvas em “${handle.name}”`);
  return handle;
}

// Chamada logo no clique (antes de gerar), porque o navegador só pede permissão a partir de um clique
async function imageFolder() {
  if (!window.showDirectoryPicker || matchMedia('(pointer: coarse)').matches) return null;
  try {
    const saved = await folderStore('readonly', s => s.get('images')).catch(() => null);
    if (saved && (await saved.requestPermission({ mode: 'readwrite' })) === 'granted') return saved;
    return await pickFolder();
  } catch (err) {
    return null; // escolha cancelada: baixa normalmente
  }
}

// Salva numa subpasta com a data da pauta; sem pasta, baixa os arquivos
async function saveImages(files, folder) {
  const label = files.length > 1 ? `${files.length} imagens salvas` : 'Imagem salva';
  if (folder) {
    try {
      const sub = await folder.getDirectoryHandle(fileDate(), { create: true });
      for (const f of files) {
        const w = await (await sub.getFileHandle(f.name, { create: true })).createWritable();
        await w.write(f);
        await w.close();
      }
      toast(`${label} em “${folder.name}\\${fileDate()}”`);
      return;
    } catch (err) {}
  }
  for (const f of files) {
    download(f, f.name);
    await new Promise(r => setTimeout(r, 300));
  }
  toast(files.length > 1 ? `${files.length} imagens exportadas` : 'Imagem exportada');
}

async function exportImage(scope) {
  const folder = await imageFolder();
  toast('Gerando imagem…');
  try {
    await loadHtml2Canvas();
  } catch (err) {
    toast(err.message);
    return;
  }
  const h = state.header, i = state.info;
  const sheet = document.createElement('div');
  sheet.className = 'export-sheet exporting';
  sheet.innerHTML = `<div class="export-head"><div class="brand-logo lg">${logo('arenacp')}</div><div><h1>Pauta diária — ${esc(h.data)}</h1><p>${esc(h.responsavel)} · ${esc(h.funcao)} · ${esc(i.revista)} — Edição ${esc(i.edicao)}</p></div></div>`;
  clonePanels(scope).forEach(n => sheet.appendChild(n));
  document.body.appendChild(sheet);
  try {
    const scale = Math.min(2, 30000 / sheet.offsetHeight);
    const canvas = await html2canvas(sheet, { backgroundColor: getComputedStyle(document.body).backgroundColor, scale, logging: false });
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
    const name = `Pauta ${fileDate()}${scope === 'all' ? '' : ' - ' + TABS[tab]}.png`;
    await saveImages([new File([blob], name, { type: 'image/png' })], folder);
  } catch (err) {
    toast('Não foi possível gerar a imagem');
  } finally {
    sheet.remove();
  }
}

/* ---------- Exportar para WhatsApp (várias imagens, sem cortar blocos) ---------- */

const WA = { width: 540, height: 675, scale: 2, gap: 12 }; // 1080×1350 px (retrato do Instagram)

// Blocos que nunca são divididos entre imagens
function atomsOf(node, out = []) {
  for (const el of node.children) {
    if (el.matches('.no-export, .add, .del, .hero')) continue;
    if (el.matches('.panel, section:not(.callout), .grid:not(.four), .days, .guests, .boneco-grid')) atomsOf(el, out);
    else out.push(el);
  }
  return out;
}

function waPage(num) {
  const h = state.header, i = state.info;
  const page = document.createElement('div');
  page.className = 'wa-page exporting';
  page.innerHTML = `<div class="wa-head"><div class="brand-logo">${logo('arenacp-mark') || '<div class="logo">CP</div>'}</div><div><b>Pauta diária · ${esc(h.data)}</b><span>${esc(h.responsavel)} · ${esc(i.revista)} ${esc(i.edicao)}</span></div><span class="wa-num">${num}</span></div><div class="wa-body"></div>`;
  return page;
}

async function exportWhatsApp(scope) {
  const folder = await imageFolder();
  toast('Gerando imagens…');
  try {
    await loadHtml2Canvas();
  } catch (err) {
    toast(err.message);
    return;
  }

  // Títulos ficam sempre junto com o bloco seguinte
  const atoms = [];
  clonePanels(scope).forEach(n => (n.classList.contains('panel') ? atomsOf(n, atoms) : atoms.push(n)));
  const groups = [];
  let pending = [];
  atoms.forEach(a => {
    pending.push(a);
    if (!a.matches('.section-head, .export-section')) { groups.push(pending); pending = []; }
  });
  if (pending.length) groups.push(pending);

  const sheet = document.createElement('div');
  sheet.className = 'wa-sheet';
  document.body.appendChild(sheet);

  try {
    // Mede a altura útil de uma página e de cada grupo
    const probe = waPage('0/0');
    probe.classList.add('wa-measure');
    sheet.appendChild(probe);
    const body = probe.querySelector('.wa-body');
    const available = body.clientHeight;
    const measure = div => { body.appendChild(div); const h = div.offsetHeight; div.remove(); return h; };

    // Divide um bloco longo (dia ou lista de clientes) entre itens: a primeira parte cabe em `room`, o resto continua na próxima imagem
    const ITEMS = '.checks > li, .clients > .client:not(.head), .bubble > .para';
    const splitDay = (div, room) => {
      if (!div.querySelector('.day, .splittable')) return null;
      const a = div.cloneNode(true);
      const items = [...a.querySelectorAll(ITEMS)];
      while (items.length > 2 && measure(a) > room) items.pop().remove();
      if (items.length < 2 || measure(a) > room) return null;
      const b = document.createElement('div');
      b.className = 'wa-group';
      const block = div.querySelector('.day, .splittable').cloneNode(true);
      [...block.querySelectorAll(ITEMS)].slice(0, items.length).forEach(li => li.remove());
      const label = block.querySelector('.day-id') || block;
      label.insertAdjacentHTML(label === block ? 'afterbegin' : 'beforeend', '<span class="cont">continuação</span>');
      b.appendChild(block);
      return [a, b];
    };

    const queue = groups.map(g => {
      const div = document.createElement('div');
      div.className = 'wa-group';
      g.forEach(a => div.appendChild(a));
      return div;
    });

    const pages = [[]];
    let used = 0;
    while (queue.length) {
      const div = queue.shift();
      const h = measure(div);
      const page = pages[pages.length - 1];
      const room = available - used - (page.length ? WA.gap : 0);
      if (h <= room) { page.push(div); used += h + (page.length > 1 ? WA.gap : 0); continue; }
      const parts = room > 220 ? splitDay(div, room) : null;
      if (parts) { page.push(parts[0]); queue.unshift(parts[1]); pages.push([]); used = 0; continue; }
      if (page.length) { pages.push([]); used = 0; queue.unshift(div); continue; }
      page.push(div); pages.push([]); used = 0; // bloco maior que uma página: imagem mais alta, sem cortar
    }
    if (!pages[pages.length - 1].length) pages.pop();
    probe.remove();

    const files = [];
    const base = `Pauta ${fileDate()}${scope === 'all' ? '' : ' - ' + TABS[tab]}`;
    const bg = getComputedStyle(document.body).backgroundColor;
    for (let p = 0; p < pages.length; p++) {
      const page = waPage(`${p + 1}/${pages.length}`);
      pages[p].forEach(div => page.querySelector('.wa-body').appendChild(div));
      sheet.appendChild(page);
      const canvas = await html2canvas(page, { backgroundColor: bg, scale: WA.scale, logging: false });
      const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
      files.push(new File([blob], `${base} - ${String(p + 1).padStart(2, '0')}.png`, { type: 'image/png' }));
      page.remove();
    }

    // No celular abre o compartilhamento (WhatsApp); no computador salva na pasta de imagens
    const mobile = matchMedia('(pointer: coarse)').matches;
    if (mobile && navigator.canShare && navigator.canShare({ files })) {
      try { await navigator.share({ files, title: base }); toast(`${files.length} imagens prontas`); return; } catch (err) {}
    }
    await saveImages(files, folder);
  } catch (err) {
    toast('Não foi possível gerar as imagens');
  } finally {
    sheet.remove();
  }
}

render();
dbStart();
