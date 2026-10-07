import type { ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView.ts'

type Props = {
  as?: ElementType
  className?: string
  delay?: number
  children: ReactNode
  id?: string
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, id }: Props) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
