import type { CSSProperties, PointerEvent } from 'react'

/** Atualiza --sx/--sy para o spotlight seguir o cursor dentro do card. */
export function spotMove(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--sx', `${e.clientX - r.left}px`)
  el.style.setProperty('--sy', `${e.clientY - r.top}px`)
}

/** Converte #RRGGBB em "r g b" para usar em rgb(var(--spot) / a). */
export function spotVar(hex: string): CSSProperties {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  return { ['--spot' as string]: `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}` } as CSSProperties
}

/** Quatro cantos de retícula que travam no alvo no hover/foco (precisa de .reticle no pai). */
export function Corners() {
  return (
    <>
      <span aria-hidden className="rc rc-tl" />
      <span aria-hidden className="rc rc-tr" />
      <span aria-hidden className="rc rc-bl" />
      <span aria-hidden className="rc rc-br" />
    </>
  )
}
