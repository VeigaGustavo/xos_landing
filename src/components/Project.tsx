import { useState } from 'react'
import mark from '../assets/xos-mark.png'
import { essence, improvements, roadmap, whatsappLink } from '../data/content.ts'
import { useInView } from '../hooks/useInView.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHead } from './SectionHead.tsx'
import { WhatsAppIcon } from './WhatsAppIcon.tsx'

const stack = ['Flutter', 'Dart', 'Java', 'Spring Boot', 'Liquid Glass UI']

export function Developer() {
  const [imgOk, setImgOk] = useState(true)
  return (
    <section className="section" id="dev">
      <div className="container">
        <Reveal className="dev glass">
          <div className="dev__avatar">
            {imgOk ? (
              <img
                src="https://github.com/VeigaGustavo.png?size=240"
                alt="Gustavo Veiga"
                width={120}
                height={120}
                onError={() => setImgOk(false)}
              />
            ) : (
              <span>GV</span>
            )}
          </div>
          <div className="dev__body">
            <span className="eyebrow">Quem está desenvolvendo</span>
            <h2>Oi, eu sou o Gustavo Veiga.</h2>
            <p className="muted">
              Sou desenvolvedor e estou construindo o XOS do zero, do aplicativo à API. A ideia nasceu de uma
              frustração simples: ter vontade de aprender, ter conteúdo de sobra, e mesmo assim não saber o que
              estudar hoje, nem se estava realmente evoluindo.
            </p>
            <p className="muted">
              Desenvolvi o XOS para <strong>estudantes</strong> que querem parar de depender de motivação e
              começar a depender de rotina, e para <strong>professores</strong> que querem entregar mais do que
              conteúdo: um caminho claro para os alunos seguirem. A meta é fazer estudar parecer treino: com
              plano, execução, consistência e evolução visível.
            </p>
            <ul className="chips">
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="dev__links">
              <a href="https://github.com/VeigaGustavo" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
                GitHub
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
                <WhatsAppIcon size={16} />
                Falar comigo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <SectionHead eyebrow="Em desenvolvimento" title="Onde o XOS está, e para onde vai.">
          O app ainda está sendo construído. Este é o caminho até a primeira versão e além.
        </SectionHead>
        <div className="grid grid--3 roadmap">
          {roadmap.map((r, i) => (
            <Reveal as="article" key={r.phase} className="card glass" delay={i * 100}>
              <span className={`tag tag--${r.tone}`}>{r.phase}</span>
              <h3>{r.title}</h3>
              <ul className="mini-list">
                {r.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="sub-head">
          <SectionHead eyebrow="Como pode melhorar" title="O XOS melhora com quem usa.">
            Ainda dá tempo de mudar muita coisa, e é exatamente por isso que testers fazem diferença agora.
          </SectionHead>
        </div>
        <div className="grid grid--4">
          {improvements.map((m, i) => (
            <Reveal as="article" key={m.title} className="card card--sm glass" delay={i * 80}>
              <div className="icon icon--blue">{m.icon}</div>
              <h3>{m.title}</h3>
              <p className="muted">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Essence() {
  const { ref, inView } = useInView<HTMLOListElement>(0.4)
  return (
    <section className="section">
      <div className="container narrow center">
        <span className="eyebrow">A essência</span>
        <ol ref={ref} className="essence">
          {essence.map((line, i) => (
            <li
              key={line}
              className={`${inView ? 'lit' : ''} ${i === essence.length - 1 ? 'grad' : ''}`}
              style={{ transitionDelay: inView ? `${i * 220}ms` : undefined }}
            >
              {line}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Testers() {
  return (
    <section className="section" id="testers">
      <div className="container">
        <Reveal className="cta glass">
          <img src={mark} alt="" width={96} height={96} />
          <span className="status">
            <span className="status__dot" />
            Vagas abertas para testers
          </span>
          <h2>Quer testar o XOS antes de todo mundo?</h2>
          <p className="muted">
            Me chama no WhatsApp. Você recebe acesso às versões de teste, conversa direto comigo e ajuda a
            decidir o que entra no app.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--whats">
            <WhatsAppIcon size={20} />
            Quero ser tester
          </a>
          <small className="muted">WhatsApp · (55) 99248-1756</small>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#" className="brand">
          <img src={mark} alt="" width={24} height={24} />
          <span>XOS</span>
        </a>
        <small className="muted">Aprenda. Lembre. Evolua. · Feito por Gustavo Veiga · © 2026</small>
      </div>
    </footer>
  )
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      aria-label="Fale no WhatsApp para ser tester do XOS"
    >
      <WhatsAppIcon size={28} />
      <span className="fab__label">Seja tester</span>
    </a>
  )
}
