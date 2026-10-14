import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/** Fundo: grade de engenharia com parallax leve no scroll, brilho que segue
 *  o cursor e vinheta. Sem canvas: custo quase zero de CPU. */
export default function NeonGrid() {
  const glowRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, (v) => `${reduce ? 0 : -(v * 0.12) % 48}px`)

  useEffect(() => {
    if (reduce) return
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    const glow = glowRef.current
    let raf = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        glow?.style.setProperty('--mx', `${e.clientX}px`)
        glow?.style.setProperty('--my', `${e.clientY}px`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [reduce])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-900">
      <motion.div
        className="absolute -inset-y-12 inset-x-0"
        style={{
          backgroundPositionY: gridY,
          backgroundImage:
            'linear-gradient(rgba(25,135,240,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(25,135,240,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 30% 20%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 30% 20%, black 30%, transparent 80%)',
        }}
      />
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(480px circle at var(--mx,20%) var(--my,10%), rgba(25,135,240,0.08), transparent 60%)',
        }}
      />
      <div className="absolute -left-40 -top-40 h-[520px] w-[720px] rounded-full bg-neon/[0.07] blur-[120px]" />
      <div className="absolute inset-0 bg-scanline opacity-40" />
    </div>
  )
}
