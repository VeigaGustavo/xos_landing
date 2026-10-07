import { aiFeatures, games, methodSteps, methods, modules, platforms, scheduleModes } from '../data/content.ts'
import { useCycle } from '../hooks/useCycle.ts'
import { useInView } from '../hooks/useInView.ts'
import { Icon } from './Icon.tsx'
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
            <Reveal as="article" key={m.title} className="card glass" delay={(i % 3) * 90}>
              <div className={`icon icon--${m.tone}`}>
                <Icon name={m.icon} />
              </div>
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

        <Reveal className="platforms glass">
          <div className="platforms__copy">
            <span className="eyebrow">Multiplataforma</span>
            <h3>Comece no celular, continue no iPad ou no computador.</h3>
            <p className="muted">Seus estudos sincronizados em todos os dispositivos.</p>
          </div>
          <ul className="platforms__list">
            {platforms.map((p, i) => (
              <li key={p.name} style={{ animationDelay: `${i * 0.4}s` }}>
                <Icon name={p.icon} size={28} />
                <strong>{p.name}</strong>
                <small>{p.text}</small>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function FifteenPlusOne() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const active = useCycle(methodSteps.length, 1700, inView)

  return (
    <div className="split">
      <Reveal>
        <span className="eyebrow">Metodologia exclusiva</span>
        <h2>
          Método <span className="grad grad--shine">15 + 1</span>
        </h2>
        <p className="lead">
          <strong>15 minutos</strong> estudando. <strong>1 minuto</strong> explicando, sem olhar o material.
        </p>
        <p className="muted">
          Reconhecer um conteúdo não é o mesmo que saber. O 15 + 1 verifica se você consegue{' '}
          <strong>recuperar e explicar</strong> o conhecimento, por escrito, por áudio, respondendo perguntas ou
          falando livremente. A IA avalia a sua explicação e o resultado ajusta o nível de domínio do tópico.
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

      <Reveal className="method glass" delay={120}>
        <div ref={ref} className={`method__timers ${inView ? 'in' : ''}`}>
          <div className="timer timer--study">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="52" className="timer__track" />
              <circle cx="60" cy="60" r="52" className="timer__ring" pathLength={100} />
            </svg>
            <div className="timer__label">
              <b>15</b>
              <small>min estudando</small>
            </div>
          </div>
          <span className="method__plus">+</span>
          <div className="timer timer--explain">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="52" className="timer__track" />
              <circle cx="60" cy="60" r="52" className="timer__ring" pathLength={100} />
            </svg>
            <div className="timer__label">
              <b>1</b>
              <small>min explicando</small>
            </div>
          </div>
        </div>
        <ol className="steps">
          {methodSteps.map((s, i) => (
            <li key={s} className={`${i === 1 || i === 3 ? 'is-key' : ''} ${i === active ? 'is-active' : ''}`}>
              <b>{i + 1}</b>
              {s}
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  )
}

export function Methods() {
  return (
    <section className="section" id="metodologias">
      <div className="container">
        <FifteenPlusOne />

        <div className="sub-head">
          <SectionHead eyebrow="Metodologias de estudo" title="Ciência da aprendizagem, dentro da rotina.">
            O XOS combina técnicas com eficácia comprovada para que você aprenda de forma ativa, não só consuma
            conteúdo.
          </SectionHead>
        </div>
        <div className="grid grid--3">
          {methods.map((m, i) => (
            <Reveal as="article" key={m.title} className="card glass" delay={(i % 3) * 90}>
              <div className="icon icon--pink">
                <Icon name={m.icon} />
              </div>
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

export function AI() {
  return (
    <section className="section" id="ia">
      <div className="container">
        <div className="ai glass">
          <div className="ai__glow" aria-hidden="true" />
          <Reveal className="ai__head">
            <div className="ai__badge">
              <Icon name="bot" size={28} />
            </div>
            <span className="eyebrow">Inteligência artificial</span>
            <h2>
              Uma IA que <span className="grad grad--shine">valida, corrige e sugere</span>.
            </h2>
            <p className="muted">
              Depois dos 15 minutos de estudo, você explica o conteúdo em 1 minuto. A IA ouve ou lê a sua
              explicação, compara com o tópico estudado e devolve um retorno na hora.
            </p>
          </Reveal>

          <div className="grid grid--3">
            {aiFeatures.map((f, i) => (
              <Reveal as="article" key={f.title} className="card glass" delay={i * 120}>
                <div className="icon icon--blue">
                  <Icon name={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="ai__chat" delay={150}>
            <div className="bubble bubble--me">
              <small>Sua explicação · 1 min</small>
              “O imperativo categórico de Kant diz que devemos agir só segundo regras que poderiam valer para
              todo mundo…”
            </div>
            <div className="bubble bubble--ai">
              <small>
                <Icon name="sparkles" size={14} /> XOS IA
              </small>
              <strong>Boa explicação!</strong> Você acertou a universalização. Faltou citar a pessoa como fim em si
              mesma. Sugestão: revisar a 2ª formulação e criar 3 flashcards sobre o tema.
            </div>
          </Reveal>
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
            <Reveal as="article" key={g.title} className="card glass" delay={(i % 3) * 90}>
              <div className="card__top">
                <div className="icon icon--blue">
                  <Icon name={g.icon} className={g.icon === 'flame' ? 'flicker' : undefined} />
                </div>
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
