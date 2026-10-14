import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const GLYPHS = '!<>-_\\/[]{}=+*^?#$%&01ABCDEFXZ'

type Props = { text: string; delay?: number; duration?: number; className?: string }

/** Texto que "descriptografa": cada letra embaralha e trava em sequência.
 *  Leitores de tela recebem o texto final; com reduced-motion aparece direto. */
export default function DecryptText({ text, delay = 0, duration = 900, className }: Props) {
  const reduce = useReducedMotion()
  const [out, setOut] = useState(reduce ? text : '')

  useEffect(() => {
    if (reduce) {
      setOut(text)
      return
    }
    let raf = 0
    let start = 0
    const per = duration / Math.max(text.length, 1)
    const tick = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start - delay
      if (elapsed < 0) {
        setOut(text.replace(/\S/g, ' '))
        raf = requestAnimationFrame(tick)
        return
      }
      const locked = Math.floor(elapsed / per)
      let s = ''
      for (let i = 0; i < text.length; i++) {
        const ch = text[i]
        if (ch === ' ' || i < locked) s += ch
        else if (i < locked + 4) s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        else s += ' '
      }
      setOut(s)
      if (locked < text.length) raf = requestAnimationFrame(tick)
      else setOut(text)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, delay, duration, reduce])

  return (
    <span className={className} aria-label={text} role="text">
      <span aria-hidden>{out || ' '}</span>
    </span>
  )
}
