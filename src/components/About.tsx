import { audiences, concept, flow, flowHighlights, pains, questions } from '../data/content.ts'
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
            <Reveal as="article" key={p.title} className="card glass" delay={i * 80}>
              <div className="icon icon--pink">{p.icon}</div>
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
          <ol className="questions">
            {questions.map((q, i) => (
              <li key={q} className={i === 3 ? 'is-key' : ''}>
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
            <Reveal as="article" key={a.title} className="card card--sm glass" delay={i * 70}>
              <div className="icon icon--blue">{a.icon}</div>
              <h3>{a.title}</h3>
              <p className="muted">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Concept() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <SectionHead eyebrow="O conceito" title="Três perguntas, três camadas.">
          Separar o <em>onde</em>, o <em>como</em> e o <em>quando</em> é o que torna o plano executável.
        </SectionHead>
        <div className="grid grid--3">
          {concept.map((c, i) => (
            <Reveal as="article" key={c.tag} className="card glass" delay={i * 90}>
              <span className={`tag tag--${c.tone}`}>{c.tag}</span>
              <h3>{c.title}</h3>
              <pre>{c.example}</pre>
            </Reveal>
          ))}
        </div>

        <Reveal className="flow-wrap">
          <p className="label">O ciclo completo. Nenhum recurso existe isolado.</p>
          <ol className="flow">
            {flow.map((f) => (
              <li key={f} className={flowHighlights.has(f) ? 'is-hl' : ''}>
                {f}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
