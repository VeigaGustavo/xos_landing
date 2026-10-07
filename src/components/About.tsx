import { areas, audiences, concept, flow, flowHighlights, marquee, pains, questions } from '../data/content.ts'
import { useCycle } from '../hooks/useCycle.ts'
import { useInView } from '../hooks/useInView.ts'
import { Icon } from './Icon.tsx'
import { Marquee } from './Marquee.tsx'
import { Reveal } from './Reveal.tsx'
import { SectionHead } from './SectionHead.tsx'

export function Why() {
  return (
    <section className="section" id="motivo">
      <div className="container">
        <SectionHead eyebrow="O motivo" title="Por que o XOS existe?">
          Estudar não falha por falta de conteúdo. Falha por falta de rotina, de clareza sobre o que fazer
          hoje e de uma forma de enxergar a própria evolução.
        </SectionHead>
        <div className="grid grid--4">
          {pains.map((p, i) => (
            <Reveal as="article" key={p.title} className="card glass" delay={i * 90}>
              <div className="icon icon--pink">
                <Icon name={p.icon} />
              </div>
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="answer glass">
          <p>
            O XOS não é mais um app de agenda, tarefas ou flashcards. Ele <strong>conecta</strong> conteúdo,
            planejamento, sessões, revisão e progresso num único ciclo, para que você consiga responder a
            qualquer momento:
          </p>
          <ol className="questions stagger">
            {questions.map((q, i) => (
              <li key={q} className={i === 3 ? 'is-key' : ''} style={{ transitionDelay: `${i * 60}ms` }}>
                {q}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

export function Audience() {
  return (
    <section className="section" id="para-quem">
      <div className="container">
        <SectionHead eyebrow="Para quem" title="Feito para quem quer transformar estudo em rotina.">
          Funciona para quem estuda sozinho e para professores que estruturam conteúdo para uma turma.
        </SectionHead>
        <div className="grid grid--5">
          {audiences.map((a, i) => (
            <Reveal as="article" key={a.title} className="card card--sm glass" delay={i * 80}>
              <div className="icon icon--blue">
                <Icon name={a.icon} />
              </div>
              <h3>{a.title}</h3>
              <p className="muted">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="areas">
        <div className="container">
          <SectionHead eyebrow="Todas as áreas" title="Das exatas à filosofia.">
            Qualquer matéria cabe no XOS: você organiza em matérias e tópicos, e o método funciona igual.
          </SectionHead>
        </div>
        <Marquee items={marquee} />
        <Marquee items={[...marquee].reverse()} reverse />
        <div className="container">
          <div className="grid grid--5 areas__grid">
            {areas.map((a, i) => (
              <Reveal as="article" key={a.title} className="card card--sm glass" delay={i * 80}>
                <div className={`icon icon--${a.tone}`}>
                  <Icon name={a.icon} />
                </div>
                <h3>{a.title}</h3>
                <ul className="mini-list">
                  {a.subjects.map((s) => (
                    <li key={s}>{s}</li>
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

export function Concept() {
  const { ref, inView } = useInView<HTMLOListElement>()
  const active = useCycle(flow.length, 650, inView)

  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <SectionHead eyebrow="O conceito" title="Três perguntas, três camadas.">
          Separar o <em>onde</em>, o <em>como</em> e o <em>quando</em> é o que torna o plano executável.
        </SectionHead>
        <div className="grid grid--3">
          {concept.map((c, i) => (
            <Reveal as="article" key={c.tag} className="card glass" delay={i * 100}>
              <span className={`tag tag--${c.tone}`}>{c.tag}</span>
              <h3>{c.title}</h3>
              <pre>{c.example}</pre>
            </Reveal>
          ))}
        </div>

        <div className="flow-wrap">
          <p className="label">O ciclo completo. Nenhum recurso existe isolado.</p>
          <ol ref={ref} className={`flow ${inView ? 'in' : ''}`}>
            {flow.map((f, i) => (
              <li
                key={f}
                className={`${flowHighlights.has(f) ? 'is-hl' : ''} ${i === active ? 'is-active' : ''}`}
                style={{ transitionDelay: inView ? `${i * 50}ms` : undefined }}
              >
                {f === 'Foguinho' && <Icon name="flame" size={14} />}
                {f}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
