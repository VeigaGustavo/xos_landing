import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView.ts'
import { useReducedMotion } from '../hooks/useReducedMotion.ts'

type Props = { to: number; duration?: number; format?: (n: number) => string }

export function CountUp({ to, duration = 1400, format = (n) => String(n) }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setValue(Math.round(to * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, to, duration])

  return <span ref={ref}>{format(reduced ? to : value)}</span>
}
