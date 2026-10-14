import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE, inView } from './variants'

/** Linha que sobe de dentro de uma máscara (títulos). O gatilho fica no
 *  invólucro: o filho começa recortado e o IntersectionObserver não o veria. */
export default function MaskReveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.span
      className={`block overflow-hidden pb-[0.08em] ${className ?? ''}`}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      <motion.span
        className="block"
        variants={{ hidden: { y: '105%' }, show: { y: '0%', transition: { duration: 0.85, delay, ease: EASE } } }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
