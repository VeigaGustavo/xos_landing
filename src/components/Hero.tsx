import { useEffect, useState } from 'react'
import mark from '../assets/xos-mark.png'
import { navLinks, whatsappLink } from '../data/content.ts'
import { CountUp } from './CountUp.tsx'
import { Icon } from './Icon.tsx'
import { WhatsAppIcon } from './WhatsAppIcon.tsx'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#" className="brand" onClick={() => setOpen(false)}>
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
        <div className="nav__actions">
          <a href="#testers" className="btn btn--primary btn--sm nav__cta">
            Quero testar
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label="Menu" hidden={!open}>
        {navLinks.map((l, i) => (
          <a key={l.href} href={l.href} style={{ animationDelay: `${i * 40}ms` }} onClick={() => setOpen(false)}>
            {l.label}
            <Icon name="arrowRight" size={18} />
          </a>
        ))}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--whats" onClick={() => setOpen(false)}>
          <WhatsAppIcon size={18} />
          Quero ser tester
        </a>
      </nav>
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <a href="#roadmap" className="status intro" style={{ animationDelay: '0ms' }}>
            <span className="status__dot" />
            Em fase de testes · versão básica na próxima semana
          </a>
          <h1 className="hero__title">
            <span className="line"><span style={{ animationDelay: '80ms' }}>Aprenda.</span></span>
            <span className="line"><span style={{ animationDelay: '200ms' }}>Lembre.</span></span>
            <span className="line"><span className="grad grad--shine" style={{ animationDelay: '320ms' }}>Evolua.</span></span>
          </h1>
          <p className="lead intro" style={{ animationDelay: '460ms' }}>
            O XOS é um <strong>app pessoal de estudos</strong>: transforma um objetivo de
            aprendizagem em uma rotina executável e mensurável, do planejamento à revisão, com IA e progresso
            visível a cada dia.
          </p>
          <div className="hero__cta intro" style={{ animationDelay: '580ms' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <WhatsAppIcon size={18} />
              Quero ser tester
            </a>
            <a href="#modulos" className="btn btn--secondary">
              Conhecer o app
            </a>
          </div>
          <ul className="chips intro" style={{ animationDelay: '700ms' }}>
            <li>iPhone</li>
            <li>iPad</li>
            <li>Android</li>
            <li>Web</li>
          </ul>
        </div>

        <div className="hero__visual intro intro--right" style={{ animationDelay: '300ms' }}>
          <PhoneMock />
          <img className="hero__mascot" src={mark} alt="Mascote do XOS" width={150} height={150} />
        </div>
      </div>
    </section>
  )
}

const today = [
  { dot: 'pink', name: 'Filosofia', meta: 'Ética em Kant · 45 min', done: false },
  { dot: 'blue', name: 'Biologia', meta: 'Genética · 30 min', done: true },
  { dot: 'soft', name: 'Flashcards', meta: 'Constitucional · 18 cards', done: true },
] as const

function PhoneMock() {
  return (
    <div className="phone glass">
      <div className="phone__top">
        <div>
          <small className="muted">Olá!</small>
          <strong>Seu dia de estudos</strong>
        </div>
        <span className="streak">
          <Icon name="flame" size={16} className="flicker" />
          <CountUp to={12} duration={1600} />
        </span>
      </div>

      <p className="label">Hoje</p>
      {today.map((t, i) => (
        <div key={t.name} className="task glass task--in" style={{ animationDelay: `${700 + i * 140}ms` }}>
          <span className={`dot dot--${t.dot}`} />
          <div>
            <strong>{t.name}</strong>
            <small>{t.meta}</small>
          </div>
          {t.done ? (
            <span className="check" style={{ animationDelay: `${1300 + i * 160}ms` }}>
              <Icon name="check" size={18} />
            </span>
          ) : (
            <span className="pill">Agora</span>
          )}
        </div>
      ))}

      <p className="label">Desafio</p>
      <div className="challenge glass task--in" style={{ animationDelay: '1150ms' }}>
        <div className="challenge__row">
          <strong>Aprovação no concurso</strong>
          <span>
            <CountUp to={72} duration={1800} format={(n) => `${n}%`} />
          </span>
        </div>
        <div className="bar">
          <span className="bar__fill" style={{ width: '72%' }} />
        </div>
        <small className="muted">54 / 90 dias · 32 / 40 tópicos</small>
      </div>
    </div>
  )
}
