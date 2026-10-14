import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import MaskReveal from '../motion/MaskReveal'
import { EASE, inView } from '../motion/variants'

type Props = {
  id: string
  label: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  aside?: ReactNode
}

/** Casca de seção em grid editorial: comando à esquerda, título grande à direita. */
export default function Section({ id, label, title, subtitle, children, className, aside }: Props) {
  const reduce = useReducedMotion()
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative py-24 md:py-32 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-5">
        <header className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3 md:pt-3">
            <motion.p
              className="section-label flex items-center gap-2"
              initial={reduce ? false : { clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={inView}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className="text-ink-faint">$</span>
              <span>{label}</span>
            </motion.p>
            <motion.span
              aria-hidden
              className="mt-4 hidden h-px w-full origin-left bg-gradient-to-r from-neon/60 to-transparent md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={inView}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
            />
          </div>
          <div className="md:col-span-9">
            <h2 id={`${id}-title`} className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.98] text-ink">
              <MaskReveal delay={0.05}>{title}</MaskReveal>
            </h2>
            {(subtitle || aside) && (
              <motion.div
                className="mt-5 flex flex-wrap items-end justify-between gap-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              >
                {subtitle && <p className="max-w-xl text-lg leading-relaxed text-ink-muted">{subtitle}</p>}
                {aside}
              </motion.div>
            )}
          </div>
        </header>
        {children}
      </div>
    </section>
  )
}
