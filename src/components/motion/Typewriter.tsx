import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type Props = { text: string; speed?: number; className?: string; startDelay?: number }

/** Efeito de digitação com cursor piscando (respeita reduced-motion). */
export default function Typewriter({ text, speed = 42, className, startDelay = 0 }: Props) {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(reduce ? text.length : 0)

  useEffect(() => {
    if (reduce) {
      setCount(text.length)
      return
    }
    setCount(0)
    let i = 0
    let interval: ReturnType<typeof setInterval>
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length) clearInterval(interval)
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [text, speed, startDelay, reduce])

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className="ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.12em] bg-neon animate-blink" aria-hidden />
    </span>
  )
}
