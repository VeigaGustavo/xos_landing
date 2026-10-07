type Props = { items: string[]; reverse?: boolean }

export function Marquee({ items, reverse }: Props) {
  // Lista duplicada: a animação desloca -50% e recomeça sem salto
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
