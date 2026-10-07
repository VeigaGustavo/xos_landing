import type { IconName } from '../components/Icon.tsx'

export const WHATSAPP_NUMBER = '5555992481756'
export const WHATSAPP_MESSAGE = 'Olá, Gustavo! Vi a landing page do XOS e quero ser tester.'
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

type Tone = 'pink' | 'blue' | 'soft'

export const navLinks = [
  { href: '#motivo', label: 'Motivo' },
  { href: '#modulos', label: 'O app' },
  { href: '#metodologias', label: 'Metodologias' },
  { href: '#ia', label: 'IA' },
  { href: '#jogos', label: 'Jogos' },
  { href: '#dev', label: 'Quem faz' },
  { href: '#roadmap', label: 'Roadmap' },
]

export const questions = [
  'O que preciso aprender?',
  'Como vou estudar?',
  'Quando vou estudar?',
  'O que devo fazer hoje?',
  'O que já aprendi?',
  'O que preciso revisar?',
  'Estou mantendo consistência?',
  'Estou realmente compreendendo?',
  'Quanto falta para o meu objetivo?',
]

export const pains: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'apps',
    title: 'Ferramentas soltas',
    text: 'Agenda num app, flashcards em outro, timer em outro, anotações em mais um. Nada conversa e o progresso se perde no meio.',
  },
  {
    icon: 'compass',
    title: '“O que eu estudo hoje?”',
    text: 'Ter um objetivo não é ter um plano. Sem rotina definida, boa parte do tempo vai embora decidindo o que fazer.',
  },
  {
    icon: 'eye',
    title: 'Ilusão de aprendizado',
    text: 'Reler e grifar dá sensação de domínio, mas reconhecer um conteúdo é diferente de conseguir explicá-lo.',
  },
  {
    icon: 'trendDown',
    title: 'Consistência invisível',
    text: 'Sem enxergar a evolução, é fácil desanimar. Esforço que não vira indicador parece esforço perdido.',
  },
]

export const audiences: { icon: IconName; title: string; text: string }[] = [
  { icon: 'scale', title: 'Concurseiros', text: 'Edital extenso, prazo fixo e muita revisão. Cronograma por prova e por ciclo.' },
  { icon: 'cap', title: 'Vestibular e ENEM', text: 'Todas as áreas ao mesmo tempo, com simulados, revisões e uma data para chegar pronto.' },
  { icon: 'book', title: 'Universitários', text: 'Várias disciplinas, provas, trabalhos e prazos no mesmo calendário.' },
  { icon: 'globe', title: 'Autodidatas', text: 'Quem estuda por conta própria e precisa de rotina, metas e acompanhamento.' },
  { icon: 'users', title: 'Professores', text: 'Montam conteúdo, metodologia e cronograma para a turma e acompanham cada aluno.' },
]

export const areas: { icon: IconName; title: string; tone: Tone; subjects: string[] }[] = [
  { icon: 'sigma', title: 'Exatas', tone: 'blue', subjects: ['Matemática', 'Física', 'Química', 'Estatística'] },
  { icon: 'landmark', title: 'Humanas', tone: 'pink', subjects: ['História', 'Geografia', 'Sociologia', 'Literatura'] },
  { icon: 'leaf', title: 'Biológicas', tone: 'blue', subjects: ['Biologia', 'Genética', 'Ecologia', 'Anatomia'] },
  { icon: 'bulb', title: 'Filosofia', tone: 'pink', subjects: ['Ética', 'Lógica', 'Filosofia antiga', 'Filosofia moderna'] },
  { icon: 'scale', title: 'Concursos', tone: 'blue', subjects: ['Direito Constitucional', 'Direito Administrativo', 'Raciocínio lógico', 'Português'] },
]

export const marquee = [
  'Matemática', 'Filosofia', 'Direito Constitucional', 'Biologia', 'História', 'Física', 'Sociologia',
  'Química', 'Raciocínio lógico', 'Geografia', 'Genética', 'Direito Administrativo', 'Literatura',
  'Ética', 'Redação', 'Estatística', 'Ecologia', 'Português',
]

export const concept = [
  {
    tag: 'Objetivo',
    tone: 'pink',
    title: 'Onde quero chegar?',
    example: 'Ser aprovado no concurso em 6 meses.',
  },
  {
    tag: 'Cronograma',
    tone: 'blue',
    title: 'Como vou chegar lá?',
    example: 'Semana 1 — Português e Constitucional\nSemana 2 — Raciocínio lógico\nSemana 3 — Administrativo\nSemana 4 — Revisão + simulado',
  },
  {
    tag: 'Calendário',
    tone: 'soft',
    title: 'Quando cada coisa acontece?',
    example: 'Seg — Constitucional · 45 min\nQua — Raciocínio lógico · 45 min\nSex — Português · 45 min\nDom — Revisão · 30 min',
  },
] as const

export const flow = [
  'Objetivo', 'Desafio', 'Cronograma', 'Calendário', 'Sessão', 'Pomodoro', 'Conteúdo',
  'Exercício / Flashcard', '15 + 1', 'Avaliação', 'Revisão', 'Progresso', 'Frequência', 'Foguinho',
]
export const flowHighlights = new Set(['15 + 1', 'Foguinho'])

export const modules: { icon: IconName; tone: Tone; title: string; text: string; items: string[] }[] = [
  {
    icon: 'layout',
    tone: 'pink',
    title: 'Dashboard',
    text: 'Responde “como estão meus estudos agora?” e prioriza o que precisa ser feito hoje.',
    items: ['Tarefas do dia', 'Sequência atual', 'Desafios ativos'],
  },
  {
    icon: 'book',
    tone: 'blue',
    title: 'Conteúdo',
    text: 'Tudo o que você estuda organizado em árvore, do geral ao específico.',
    items: ['Matérias e tópicos', 'Materiais: PDF, vídeo, link, anotação', 'Exercícios e flashcards'],
  },
  {
    icon: 'calendar',
    tone: 'pink',
    title: 'Planejamento',
    text: 'Transforma o objetivo em rotina e coloca cada coisa no seu dia.',
    items: ['Calendário (dia, semana, mês)', 'Cronogramas', 'Desafios com prazo e meta'],
  },
  {
    icon: 'timer',
    tone: 'blue',
    title: 'Estudo',
    text: 'A execução do plano, com foco e prova de que você aprendeu.',
    items: ['Sessões com objetivo', 'Pomodoro integrado', 'Método 15 + 1'],
  },
  {
    icon: 'chart',
    tone: 'pink',
    title: 'Acompanhamento',
    text: 'Evolução em várias dimensões, não só uma porcentagem.',
    items: ['Progresso por matéria e tópico', 'Histórico diário', 'Frequência e foguinho'],
  },
  {
    icon: 'users',
    tone: 'blue',
    title: 'Professor',
    text: 'Estrutura a experiência completa e entrega pronta para a turma.',
    items: ['Turmas e conteúdos', 'Atividades e cronogramas', 'Acompanhamento dos alunos'],
  },
]

export const scheduleModes = ['Por dia', 'Por semana', 'Por ciclo', 'Por prazo', 'Por prova', 'Por desafio', 'Por objetivo']

export const platforms: { icon: IconName; name: string; text: string }[] = [
  { icon: 'phone', name: 'iPhone', text: 'Sua rotina no bolso' },
  { icon: 'tablet', name: 'iPad', text: 'Mais espaço para estudar' },
  { icon: 'android', name: 'Android', text: 'Em qualquer aparelho' },
  { icon: 'monitor', name: 'Web', text: 'Direto do navegador' },
]

export const methodSteps = [
  'Escolher o tópico',
  'Estudar por 15 minutos',
  'Fechar o material',
  'Explicar em 1 minuto',
  'IA avalia a explicação',
  'Registrar o resultado',
]

export const methods: { icon: IconName; title: string; text: string; example: string }[] = [
  {
    icon: 'timer',
    title: 'Pomodoro',
    text: 'Blocos de foco com pausas curtas, integrado à sessão: o tempo estudado vira histórico, não fica num timer solto.',
    example: '25 estudo · 5 pausa · 25 exercícios · 5 pausa · 15 revisão',
  },
  {
    icon: 'layers',
    title: 'Recuperação ativa',
    text: 'Flashcards ligados a matérias e tópicos. Você tenta lembrar antes de ver a resposta, que é o que fixa a memória.',
    example: 'Cards dominados · com dificuldade · pendentes',
  },
  {
    icon: 'repeat',
    title: 'Revisão espaçada',
    text: 'O que você ainda não domina volta na hora certa. Tópicos marcados como “precisa de revisão” entram no seu plano.',
    example: 'Revisar o que ainda não domina',
  },
  {
    icon: 'cycle',
    title: 'Ciclo de estudos',
    text: 'Sem ficar preso a dias fixos: você define a sequência e o tempo de cada matéria e repete o ciclo.',
    example: '2h Exatas → 1h Humanas → 1h Biológicas → 30min Flashcards',
  },
  {
    icon: 'mic',
    title: 'Explicar para aprender',
    text: 'Inspirado na técnica de Feynman: se você não consegue explicar com suas palavras, ainda não aprendeu. É a base do 15 + 1.',
    example: 'Por escrito, por áudio ou falando livremente',
  },
  {
    icon: 'pen',
    title: 'Prática deliberada',
    text: 'Exercícios por tópico, contados e registrados. Aprender é fazer, não só consumir conteúdo.',
    example: '8 exercícios · 12 flashcards · 1 explicação',
  },
]

export const aiFeatures: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'check',
    title: 'Valida',
    text: 'Analisa a sua explicação de 1 minuto e diz se você realmente entendeu o conteúdo, ou se só reconheceu.',
  },
  {
    icon: 'pen',
    title: 'Corrige',
    text: 'Aponta conceitos errados ou incompletos na explicação e nos exercícios, mostrando o que faltou.',
  },
  {
    icon: 'sparkles',
    title: 'Sugere',
    text: 'Recomenda o que revisar, quais flashcards criar e como ajustar o cronograma a partir do seu desempenho.',
  },
]

export const games: { icon: IconName; title: string; status: string; text: string }[] = [
  { icon: 'trophy', title: 'Desafios', status: 'Base do app', text: 'Objetivos com prazo e meta, com progresso em dias, tópicos, horas, exercícios e flashcards.' },
  { icon: 'flame', title: 'Foguinho', status: 'Base do app', text: 'Sua sequência de dias estudados. Incentiva a consistência sem punir exageradamente quem falha um dia.' },
  { icon: 'shield', title: 'Proteção de sequência', status: 'Planejado', text: 'Dias de descanso e escudos para manter o foguinho vivo quando a vida aperta.' },
  { icon: 'award', title: 'Conquistas', status: 'Planejado', text: 'Marcos como 7, 30 e 60 dias, 100 flashcards e primeira explicação perfeita, com o mascote comemorando junto.' },
  { icon: 'zap', title: 'Quiz relâmpago', status: 'Em ideia', text: 'Rodadas rápidas com seus próprios flashcards contra o relógio, para revisar sem perceber.' },
  { icon: 'users', title: 'Desafio entre amigos', status: 'Em ideia', text: 'Mesma meta, mesmo prazo. Vejam o progresso um do outro e mantenham o ritmo juntos.' },
]

export const roadmap = [
  {
    phase: 'Agora',
    tone: 'pink',
    title: 'Em fase de testes',
    items: ['Dashboard, conteúdo e sessões de estudo', 'Método 15 + 1', 'Frequência e foguinho', 'Ajustes com os primeiros testers'],
  },
  {
    phase: 'Próxima semana',
    tone: 'blue',
    title: 'Versão básica para testers',
    items: ['Matérias, tópicos e materiais', 'Sessões com Pomodoro', 'Flashcards', 'Histórico e frequência'],
  },
  {
    phase: 'Depois',
    tone: 'soft',
    title: 'Expansão',
    items: ['IA que valida, corrige e sugere', 'Área do professor e turmas', 'Conquistas e jogos de revisão', 'iPhone, iPad, Android e Web'],
  },
] as const

export const improvements: { icon: IconName; title: string; text: string }[] = [
  { icon: 'message', title: 'Seu feedback vira funcionalidade', text: 'O XOS está sendo construído com quem estuda. Sugestões de testers entram direto no roadmap.' },
  { icon: 'flask', title: 'Teste cedo, influencie mais', text: 'Quem entra agora ajuda a decidir prioridades: quais metodologias, quais jogos, qual fluxo faz sentido.' },
  { icon: 'bug', title: 'Ache problemas antes de todo mundo', text: 'Bugs, telas confusas, textos estranhos: tudo que você reportar deixa o app melhor para a próxima pessoa.' },
  { icon: 'bulb', title: 'Novas metodologias', text: 'Tem um jeito de estudar que funciona para você? Ele pode virar um modo de estudo dentro do XOS.' },
]

export const essence = [
  '“Preciso aprender isso.”',
  '“Este é meu objetivo.”',
  '“Este é meu cronograma.”',
  '“Isto é o que preciso fazer hoje.”',
  '“Estudei.”',
  '“Agora prove que aprendeu.”',
  '“Revise o que ainda não domina.”',
  '“Continue amanhã.”',
  '“Veja o quanto evoluiu.”',
]
