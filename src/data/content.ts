export const WHATSAPP_NUMBER = '5555992481756'
export const WHATSAPP_MESSAGE = 'Olá, Gustavo! Vi a landing page do XOS e quero ser tester. 🚀'
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const navLinks = [
  { href: '#motivo', label: 'Motivo' },
  { href: '#modulos', label: 'O app' },
  { href: '#metodologias', label: 'Metodologias' },
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

export const pains = [
  {
    icon: '🧩',
    title: 'Ferramentas soltas',
    text: 'Agenda num app, flashcards em outro, timer em outro, anotações em mais um. Nada conversa e o progresso se perde no meio.',
  },
  {
    icon: '🤷',
    title: '“O que eu estudo hoje?”',
    text: 'Ter um objetivo não é ter um plano. Sem rotina definida, a maior parte do tempo vai embora decidindo o que fazer.',
  },
  {
    icon: '🪞',
    title: 'Ilusão de aprendizado',
    text: 'Reler e grifar dá sensação de domínio, mas reconhecer um conteúdo é diferente de conseguir explicá-lo.',
  },
  {
    icon: '📉',
    title: 'Consistência invisível',
    text: 'Sem enxergar a evolução, é fácil desanimar. Esforço que não vira indicador parece esforço perdido.',
  },
]

export const audiences = [
  { icon: '🎯', title: 'Concurseiros e vestibulandos', text: 'Edital grande, prazo fixo e muita revisão. Cronograma por prova e por ciclo.' },
  { icon: '💻', title: 'Quem aprende tecnologia', text: 'Python, Java, React… desafios como “aprender X em 90 dias”, com tópicos e projetos.' },
  { icon: '🌍', title: 'Estudantes de idiomas', text: 'Rotina curta e diária, flashcards e frequência para não perder o ritmo.' },
  { icon: '🎓', title: 'Universitários', text: 'Várias matérias ao mesmo tempo, provas, trabalhos e prazos no mesmo calendário.' },
  { icon: '👩‍🏫', title: 'Professores', text: 'Montam conteúdo, metodologia e cronograma para a turma e acompanham cada aluno.' },
]

export const concept = [
  {
    tag: 'Objetivo',
    tone: 'pink',
    title: 'Onde quero chegar?',
    example: 'Aprender Python em 90 dias.',
  },
  {
    tag: 'Cronograma',
    tone: 'blue',
    title: 'Como vou chegar lá?',
    example: 'Semana 1 — Fundamentos\nSemana 2 — Estruturas de dados\nSemana 3 — Funções\nSemana 4 — Orientação a objetos',
  },
  {
    tag: 'Calendário',
    tone: 'soft',
    title: 'Quando cada coisa acontece?',
    example: 'Seg — Python · 45 min\nQua — Python · 45 min\nSex — Python · 45 min\nDom — Revisão · 30 min',
  },
] as const

export const flow = [
  'Objetivo', 'Desafio', 'Cronograma', 'Calendário', 'Sessão', 'Pomodoro', 'Conteúdo',
  'Exercício / Flashcard', '15 + 1', 'Avaliação', 'Revisão', 'Progresso', 'Frequência', '🔥 Foguinho',
]
export const flowHighlights = new Set(['15 + 1', '🔥 Foguinho'])

export const modules = [
  {
    icon: '🏠',
    tone: 'pink',
    title: 'Dashboard',
    text: 'Responde “como estão meus estudos agora?” e prioriza o que precisa ser feito hoje.',
    items: ['Tarefas do dia', 'Sequência atual', 'Desafios ativos'],
  },
  {
    icon: '📚',
    tone: 'blue',
    title: 'Conteúdo',
    text: 'Tudo o que você estuda organizado em árvore, do geral ao específico.',
    items: ['Matérias e tópicos', 'Materiais: PDF, vídeo, link, anotação', 'Exercícios e flashcards'],
  },
  {
    icon: '🗓️',
    tone: 'pink',
    title: 'Planejamento',
    text: 'Transforma o objetivo em rotina e coloca cada coisa no seu dia.',
    items: ['Calendário (dia, semana, mês)', 'Cronogramas', 'Desafios com prazo e meta'],
  },
  {
    icon: '⏱️',
    tone: 'blue',
    title: 'Estudo',
    text: 'A execução do plano, com foco e prova de que você aprendeu.',
    items: ['Sessões com objetivo', 'Pomodoro integrado', 'Método 15 + 1'],
  },
  {
    icon: '📈',
    tone: 'pink',
    title: 'Acompanhamento',
    text: 'Evolução em várias dimensões, não só uma porcentagem.',
    items: ['Progresso por matéria e tópico', 'Histórico diário', 'Frequência e foguinho'],
  },
  {
    icon: '👩‍🏫',
    tone: 'blue',
    title: 'Professor',
    text: 'Estrutura a experiência completa e entrega pronta para a turma.',
    items: ['Turmas e conteúdos', 'Atividades e cronogramas', 'Acompanhamento dos alunos'],
  },
] as const

export const scheduleModes = ['Por dia', 'Por semana', 'Por ciclo', 'Por prazo', 'Por prova', 'Por desafio', 'Por objetivo']

export const methodSteps = [
  'Escolher tópico',
  'Estudar por 15 minutos',
  'Encerrar o material',
  'Explicar por 1 minuto',
  'Avaliar a compreensão',
  'Registrar o resultado',
]

export const methods = [
  {
    icon: '🍅',
    title: 'Pomodoro',
    text: 'Blocos de foco com pausas curtas, integrado à sessão: o tempo estudado vira histórico, não fica num timer solto.',
    example: '25 estudo · 5 pausa · 25 exercícios · 5 pausa · 15 revisão',
  },
  {
    icon: '🃏',
    title: 'Recuperação ativa',
    text: 'Flashcards ligados a matérias e tópicos. Você tenta lembrar antes de ver a resposta, que é o que fixa a memória.',
    example: 'Cards dominados · com dificuldade · pendentes',
  },
  {
    icon: '🔁',
    title: 'Revisão espaçada',
    text: 'O que você ainda não domina volta na hora certa. Tópicos marcados como “precisa de revisão” entram no seu plano.',
    example: 'Revisar o que ainda não domina',
  },
  {
    icon: '🔄',
    title: 'Ciclo de estudos',
    text: 'Sem ficar preso a dias fixos: você define a sequência e o tempo de cada matéria e repete o ciclo.',
    example: '2h Matemática → 1h Física → 1h Português → 30min Flashcards',
  },
  {
    icon: '🗣️',
    title: 'Explicar para aprender',
    text: 'Inspirado na técnica de Feynman: se você não consegue explicar com suas palavras, ainda não aprendeu. É a base do 15 + 1.',
    example: 'Por escrito, por áudio ou falando livremente',
  },
  {
    icon: '✍️',
    title: 'Prática deliberada',
    text: 'Exercícios por tópico, contados e registrados. Aprender é fazer, não só consumir conteúdo.',
    example: '8 exercícios · 12 flashcards · 1 explicação',
  },
]

export const games = [
  { icon: '🏆', title: 'Desafios', status: 'Base do app', text: 'Objetivos com prazo e meta, com progresso em dias, tópicos, horas, exercícios e flashcards.' },
  { icon: '🔥', title: 'Foguinho', status: 'Base do app', text: 'Sua sequência de dias estudados. Incentiva a consistência sem punir exageradamente quem falha um dia.' },
  { icon: '🛡️', title: 'Proteção de sequência', status: 'Planejado', text: 'Dias de descanso e escudos para manter o foguinho vivo quando a vida aperta.' },
  { icon: '🎖️', title: 'Conquistas', status: 'Planejado', text: 'Marcos como 7, 30 e 60 dias, 100 flashcards e primeira explicação perfeita, com o mascote comemorando junto.' },
  { icon: '⚡', title: 'Quiz relâmpago', status: 'Em ideia', text: 'Rodadas rápidas com seus próprios flashcards contra o relógio, para revisar sem perceber.' },
  { icon: '🤝', title: 'Desafio entre amigos', status: 'Em ideia', text: 'Mesma meta, mesmo prazo. Vejam o progresso um do outro e mantenham o ritmo juntos.' },
]

export const roadmap = [
  {
    phase: 'Agora',
    tone: 'pink',
    title: 'Em desenvolvimento',
    items: ['Interface do app (Flutter) em modo mockup', 'API do XOS', 'Dashboard, conteúdo, sessões e 15 + 1', 'Frequência e foguinho'],
  },
  {
    phase: 'Próximo',
    tone: 'blue',
    title: 'Primeira versão para testers',
    items: ['Conta e sincronização', 'Cronogramas por dia, semana, ciclo e prova', 'Flashcards com revisão', 'Histórico de estudos'],
  },
  {
    phase: 'Depois',
    tone: 'soft',
    title: 'Expansão',
    items: ['Área do professor e turmas', 'Conquistas e proteção de sequência', 'Jogos de revisão', 'Notificações inteligentes'],
  },
] as const

export const improvements = [
  { icon: '💬', title: 'Seu feedback vira funcionalidade', text: 'O XOS está sendo construído com quem estuda. Sugestões de testers entram direto no roadmap.' },
  { icon: '🧪', title: 'Teste cedo, influencie mais', text: 'Quem entra agora ajuda a decidir prioridades: quais metodologias, quais jogos, qual fluxo faz sentido.' },
  { icon: '🐞', title: 'Ache problemas antes de todo mundo', text: 'Bugs, telas confusas, textos estranhos: tudo que você reportar deixa o app melhor para a próxima pessoa.' },
  { icon: '🧠', title: 'Novas metodologias', text: 'Tem um jeito de estudar que funciona pra você? Ele pode virar um modo de estudo dentro do XOS.' },
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
