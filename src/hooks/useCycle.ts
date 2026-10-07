import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion.ts'

// Índice que avança em loop enquanto `active` for true.
export function useCycle(length: number, interval: number, active: boolean) {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!active || reduced) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), interval)
    return () => window.clearInterval(id)
  }, [length, interval, active, reduced])

  return reduced ? -1 : index
}
