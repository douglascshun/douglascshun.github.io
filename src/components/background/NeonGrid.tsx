import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

type Dot = { x: number; y: number; vx: number; vy: number }

/** Fundo animado: grade neon estática + partículas conectadas em canvas +
 *  glow radial que segue o mouse. Leve e respeita reduced-motion. */
export default function NeonGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const glow = glowRef.current
    const onMove = (e: PointerEvent) => {
      if (!glow) return
      glow.style.setProperty('--mx', `${e.clientX}px`)
      glow.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    if (reduce) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let dots: Dot[] = []
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const target = Math.min(90, Math.floor((w * h) / 20000))
      dots = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > w) d.vx *= -1
        if (d.y < 0 || d.y > h) d.vy *= -1
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(25,135,240,${(1 - dist / 130) * 0.28})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const d of dots) {
        ctx.fillStyle = 'rgba(74,163,245,0.75)'
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reduce])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-800">
      <div className="absolute inset-0 bg-grid bg-[length:44px_44px] opacity-[0.4] mask-fade-b" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(520px circle at var(--mx,50%) var(--my,30%), rgba(25,135,240,0.10), transparent 60%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-neon/10 to-transparent" />
    </div>
  )
}
