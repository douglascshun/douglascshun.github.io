import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE, inView } from './variants'

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'p'
}

/** Revela o conteúdo ao entrar na viewport (uma vez). O MotionConfig da raiz
 *  desliga o deslocamento quando o usuário pede menos movimento. */
export default function Reveal({ children, delay = 0, y = 22, className, as = 'div' }: Props) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}
