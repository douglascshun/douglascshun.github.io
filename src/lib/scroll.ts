import Lenis from 'lenis'

/** Scroll suave global (Lenis). Fica nulo com prefers-reduced-motion,
 *  e aí tudo cai no scroll nativo sem animação. */
let lenis: Lenis | null = null

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initSmoothScroll() {
  if (lenis || prefersReduced()) return () => {}
  lenis = new Lenis({ duration: 1.05, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: false })
  let raf = 0
  const loop = (time: number) => {
    lenis?.raf(time)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)
  return () => {
    cancelAnimationFrame(raf)
    lenis?.destroy()
    lenis = null
  }
}

/** Ressincroniza o Lenis com a posição real antes de um salto programático
 *  (algum scroll nativo pode ter acontecido fora dele, ex.: foco por teclado). */
function sync(l: Lenis) {
  l.resize()
  if (!l.isScrolling && Math.abs(l.animatedScroll - window.scrollY) > 1) {
    l.scrollTo(window.scrollY, { immediate: true, force: true })
  }
}

/** Altura da nav fixa, usada como offset das âncoras. */
export const NAV_OFFSET = 72

export function scrollToId(id: string, opts: { immediate?: boolean } = {}) {
  const el = document.getElementById(id)
  if (!el) return false
  const immediate = opts.immediate || prefersReduced()
  // Alvo calculado pela posição real (window.scrollY), não pelo estado interno do Lenis.
  const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - (id === 'hero' ? 0 : NAV_OFFSET))
  if (lenis) {
    sync(lenis) // a página pode ter acabado de trocar de altura (transição de rota)
    lenis.scrollTo(y, { immediate, force: true })
  } else {
    window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' })
  }
  return true
}

export function scrollToY(y: number, opts: { immediate?: boolean } = {}) {
  const immediate = opts.immediate || prefersReduced()
  if (lenis) {
    sync(lenis)
    lenis.scrollTo(y, { immediate, force: true })
  }
  else window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' })
}

/** Trava/destrava o scroll (menu mobile aberto). */
export function lockScroll(lock: boolean) {
  if (lenis) {
    if (lock) lenis.stop()
    else lenis.start()
  }
  document.documentElement.style.overflow = lock ? 'hidden' : ''
}

/** Posição salva da Home, para voltar de um projeto exatamente onde estava. */
const KEY = 'home-scroll'
export const saveHomeScroll = () => {
  try {
    sessionStorage.setItem(KEY, String(window.scrollY))
  } catch {
    /* sem storage: só não restaura */
  }
}
export const readHomeScroll = (): number | null => {
  try {
    const v = sessionStorage.getItem(KEY)
    return v === null ? null : Number(v)
  } catch {
    return null
  }
}
