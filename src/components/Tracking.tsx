import { useInView } from '../hooks/useInView.ts'
import { CountUp } from './CountUp.tsx'
import { Icon, type IconName } from './Icon.tsx'
import { Reveal } from './Reveal.tsx'

// Outubro de exemplo: começa numa quinta (3 casas vazias), "hoje" é dia 22
const OFFSET = 3
const DAYS = 31
const TODAY = 22
const REST = new Set([6, 10])
const MISSED = new Set([3])

function dayClass(d: number) {
  const cls = []
  if (d > TODAY) cls.push('future')
  else if (REST.has(d)) cls.push('rest')
  else if (!MISSED.has(d)) cls.push('on')
  if (d === TODAY) cls.push('today')
  return cls.join(' ')
}

const formatTime = (min: number) => `${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}`

const stats = [
  { to: 18, label: 'dias estudados' },
  { to: 872, label: 'estudadas', format: formatTime },
  { to: 183, label: 'flashcards' },
  { to: 24, label: 'explicações' },
]

const history: { date: string; subject: string; lines: { icon: IconName; text: string }[] }[] = [
  {
    date: '06 OUT',
    subject: 'Matemática',
    lines: [
      { icon: 'clock', text: '45 min' },
      { icon: 'book', text: '3 tópicos' },
      { icon: 'layers', text: '12 flashcards' },
      { icon: 'pen', text: '8 exercícios' },
      { icon: 'mic', text: '1 explicação' },
    ],
  },
  {
    date: '05 OUT',
    subject: 'Filosofia',
    lines: [
      { icon: 'clock', text: '1h10' },
      { icon: 'book', text: 'Ética e moral' },
      { icon: 'layers', text: '20 flashcards' },
      { icon: 'flame', text: 'Sequência mantida' },
    ],
  },
]

export function Frequency() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="section" id="frequencia">
      <div className="container split split--rev">
        <Reveal className="streak-card glass">
          <div className="streak-card__head">
            <strong>Outubro</strong>
            <span className="streak">
              <Icon name="flame" size={16} className="flicker" />
              <CountUp to={12} /> dias
            </span>
          </div>
          <div ref={ref} className={`cal ${inView ? 'in' : ''}`} aria-label="Exemplo de frequência mensal">
            {Array.from({ length: OFFSET }, (_, i) => (
              <i key={`e${i}`} />
            ))}
            {Array.from({ length: DAYS }, (_, i) => (
              <span key={i} className={dayClass(i + 1)} style={{ transitionDelay: `${i * 22}ms` }}>
                {i + 1}
              </span>
            ))}
          </div>
          <div className="legend">
            <span>
              <i className="lg lg--on" />
              Estudou
            </span>
            <span>
              <i className="lg lg--rest" />
              Descanso
            </span>
            <span>
              <i className="lg" />
              Sem estudo
            </span>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <b>
                  <CountUp to={s.to} format={s.format} />
                </b>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="eyebrow">Frequência e foguinho</span>
          <h2>Estudar é uma atividade treinável.</h2>
          <p className="lead">Como um app de academia, só que para o aprendizado.</p>
          <p className="muted">
            A frequência marca os dias em que você <strong>realmente estudou</strong>, não os dias em que abriu o
            app. O foguinho mostra sua sequência (3, 7, 14, 30, 60 dias…) e incentiva consistência sem punição
            excessiva. E o progresso nunca é reduzido a uma única porcentagem: matéria, tópico, desafio, tempo,
            flashcards e explicações, cada um com seu indicador.
          </p>
        </Reveal>
      </div>

      <div className="container">
        <div className="history">
          <p className="label">Histórico: o seu diário de treino intelectual</p>
          <div className="grid grid--2">
            {history.map((h, i) => (
              <Reveal key={h.date} className="history__item glass" delay={i * 120}>
                <span className="history__date">{h.date}</span>
                <strong>{h.subject}</strong>
                <ul>
                  {h.lines.map((l) => (
                    <li key={l.text}>
                      <Icon name={l.icon} size={14} />
                      {l.text}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Teachers() {
  return (
    <section className="section" id="professores">
      <div className="container split">
        <Reveal>
          <span className="eyebrow">Para professores</span>
          <h2>Monte a experiência. Acompanhe a evolução.</h2>
          <p className="muted">
            Crie matérias, tópicos, materiais, exercícios, flashcards, metodologias, cronogramas e desafios, e
            entregue tudo estruturado para a turma. O aluno só precisa executar.
          </p>
          <ul className="checks">
            <li>Progresso e frequência de cada aluno</li>
            <li>Tópicos concluídos e dificuldades</li>
            <li>Atividades e desempenho em um só lugar</li>
          </ul>
        </Reveal>
        <Reveal className="tree glass" delay={120}>
          <pre>
            <span className="t-pink">Filosofia</span>
            {'\n└── Ética\n    ├── '}
            <span className="t-blue">Materiais</span>
            {'   PDF · Vídeo · Anotação\n    ├── '}
            <span className="t-blue">Atividades</span>
            {'  10 exercícios · 10 flashcards\n    ├── '}
            <span className="t-blue">Metodologia</span>
            {' 15 + 1\n    ├── '}
            <span className="t-blue">Cronograma</span>
            {'  Semanas 1 – 3\n    └── '}
            <span className="t-pink">Desafio</span>
            {'     Dominar ética em 21 dias'}
          </pre>
        </Reveal>
      </div>
    </section>
  )
}
