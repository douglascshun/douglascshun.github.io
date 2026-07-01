import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type Props = { to: number; suffix?: string; duration?: number; className?: string }

/** Conta de 0 até `to` quando entra na viewport. */
export default function Counter({ to, suffix = '', duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    let raf = 0
    let startTs = 0
    const step = (ts: number) => {
      if (!startTs) startTs = ts
      const p = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
