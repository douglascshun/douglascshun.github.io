import type { Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

/** Contêiner que escalona os filhos ao entrar na viewport. */
export const stagger = (gap = 0.07, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export const inView = { once: true, margin: '-12% 0px -8% 0px' } as const
