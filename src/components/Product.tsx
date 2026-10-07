import { games, methodSteps, methods, modules, scheduleModes } from '../data/content.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHead } from './SectionHead.tsx'

export function Modules() {
  return (
    <section className="section" id="modulos">
      <div className="container">
        <SectionHead eyebrow="O que o app terá" title="Tudo o que um estudante precisa, conectado.">
          Seis módulos que conversam entre si. O que você planeja aparece no calendário, o que você estuda vira
          progresso.
        </SectionHead>
        <div className="grid grid--3">
          {modules.map((m, i) => (
            <Reveal as="article" key={m.title} className="card glass" delay={(i % 3) * 80}>
              <div className={`icon icon--${m.tone}`}>{m.icon}</div>
              <h3>{m.title}</h3>
              <p className="muted">{m.text}</p>
              <ul className="mini-list">
                {m.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="schedules">
          <p className="label">Organize do seu jeito</p>
          <ul>
            {scheduleModes.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Methods() {
  return (
    <section className="section" id="metodologias">
      <div className="container">
        <div className="split">
          <Reveal>
            <span className="eyebrow">Metodologia exclusiva</span>
            <h2>
              Método <span className="grad">15 + 1</span>
            </h2>
            <p className="lead">15 minutos de estudo. 1 minuto explicando, sem olhar o material.</p>
            <p className="muted">
              Reconhecer um conteúdo não é o mesmo que saber. O 15 + 1 verifica se você consegue{' '}
              <strong>recuperar e explicar</strong> o conhecimento, por escrito, por áudio, respondendo perguntas
              ou falando livremente. O resultado ajusta o nível de domínio do tópico.
            </p>
            <div className="rating">
              <span>
                <i className="r r--g" />
                Consegui explicar
              </span>
              <span>
                <i className="r r--y" />
                Expliquei parcialmente
              </span>
              <span>
                <i className="r r--r" />
                Não consegui explicar
              </span>
            </div>
          </Reveal>
          <Reveal as="ol" className="steps glass" delay={120}>
            {methodSteps.map((s, i) => (
              <li key={s} className={i === 1 || i === 3 ? 'is-key' : ''}>
                <b>{i + 1}</b>
                {s}
              </li>
            ))}
          </Reveal>
        </div>

        <div className="sub-head">
          <SectionHead eyebrow="Metodologias de estudo" title="Ciência da aprendizagem, dentro da rotina.">
            O XOS combina técnicas com eficácia comprovada para que você aprenda de forma ativa, não só consuma
            conteúdo.
          </SectionHead>
        </div>
        <div className="grid grid--3">
          {methods.map((m, i) => (
            <Reveal as="article" key={m.title} className="card glass" delay={(i % 3) * 80}>
              <div className="icon icon--pink">{m.icon}</div>
              <h3>{m.title}</h3>
              <p className="muted">{m.text}</p>
              <p className="example">{m.example}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const statusTone: Record<string, string> = {
  'Base do app': 'pink',
  Planejado: 'blue',
  'Em ideia': 'soft',
}

export function Games() {
  return (
    <section className="section" id="jogos">
      <div className="container">
        <SectionHead eyebrow="Jogos e gamificação" title="Estudar com cara de jogo, sem virar brincadeira.">
          Metas, sequências e conquistas que dão motivo para voltar amanhã, sempre baseados em estudo real.
        </SectionHead>
        <div className="grid grid--3">
          {games.map((g, i) => (
            <Reveal as="article" key={g.title} className="card glass" delay={(i % 3) * 80}>
              <div className="card__top">
                <div className="icon icon--blue">{g.icon}</div>
                <span className={`tag tag--${statusTone[g.status]}`}>{g.status}</span>
              </div>
              <h3>{g.title}</h3>
              <p className="muted">{g.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
