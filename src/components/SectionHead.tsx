import type { ReactNode } from 'react'
import { Reveal } from './Reveal.tsx'

type Props = { eyebrow: string; title: ReactNode; children?: ReactNode; center?: boolean }

export function SectionHead({ eyebrow, title, children, center }: Props) {
  return (
    <Reveal className={`section__head ${center ? 'center section__head--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p className="muted">{children}</p>}
    </Reveal>
  )
}
