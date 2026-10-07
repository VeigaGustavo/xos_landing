import mark from '../assets/xos-mark.png'
import { navLinks, whatsappLink } from '../data/content.ts'
import { Reveal } from './Reveal.tsx'
import { WhatsAppIcon } from './WhatsAppIcon.tsx'

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand">
          <img src={mark} alt="" width={32} height={32} />
          <span>XOS</span>
          <span className="beta">beta</span>
        </a>
        <nav className="nav__links" aria-label="Seções">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#testers" className="btn btn--primary btn--sm">
          Quero testar
        </a>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <a href="#testers" className="status">
            <span className="status__dot" />
            Em desenvolvimento · aberto a testers
          </a>
          <h1>
            Aprenda.
            <br />
            Lembre.
            <br />
            <span className="grad">Evolua.</span>
          </h1>
          <p className="lead">
            O XOS é um <strong>sistema operacional pessoal de estudos</strong>: transforma um objetivo de
            aprendizagem em uma rotina executável e mensurável, do planejamento à revisão, com progresso
            visível a cada dia.
          </p>
          <div className="hero__cta">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <WhatsAppIcon size={18} />
              Quero ser tester
            </a>
            <a href="#modulos" className="btn btn--secondary">
              Conhecer o app
            </a>
          </div>
          <ul className="chips">
            <li>Cronogramas flexíveis</li>
            <li>Flashcards</li>
            <li>Pomodoro</li>
            <li>Método 15 + 1</li>
            <li>🔥 Foguinho</li>
          </ul>
        </Reveal>

        <Reveal className="hero__visual" delay={150}>
          <PhoneMock />
          <img className="hero__mascot" src={mark} alt="Mascote do XOS" width={180} height={180} />
        </Reveal>
      </div>
    </section>
  )
}

const today = [
  { dot: 'pink', name: 'Matemática', meta: 'Função quadrática · 45 min', state: 'now' },
  { dot: 'blue', name: 'Python', meta: 'Funções · 30 min', state: 'done' },
  { dot: 'soft', name: 'Flashcards', meta: '18 cards', state: 'done' },
] as const

function PhoneMock() {
  return (
    <div className="phone glass">
      <div className="phone__top">
        <div>
          <small className="muted">Olá!</small>
          <strong>Seu dia de estudos</strong>
        </div>
        <span className="streak">🔥 12</span>
      </div>

      <p className="label">Hoje</p>
      {today.map((t) => (
        <div key={t.name} className="task glass">
          <span className={`dot dot--${t.dot}`} />
          <div>
            <strong>{t.name}</strong>
            <small>{t.meta}</small>
          </div>
          {t.state === 'now' ? <span className="pill">Agora</span> : <span className="check">✓</span>}
        </div>
      ))}

      <p className="label">Desafio</p>
      <div className="challenge glass">
        <div className="challenge__row">
          <strong>Aprender Python</strong>
          <span>72%</span>
        </div>
        <div className="bar">
          <span style={{ width: '72%' }} />
        </div>
        <small className="muted">54 / 90 dias · 32 / 40 tópicos</small>
      </div>
    </div>
  )
}
