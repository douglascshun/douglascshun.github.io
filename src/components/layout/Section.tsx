import type { ReactNode } from 'react'
import Reveal from '../motion/Reveal'

type Props = {
  id: string
  label: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

/** Casca padrão de seção: rótulo de terminal + título + conteúdo. */
export default function Section({ id, label, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28 ${className ?? ''}`}>
      <Reveal>
        <div className="mb-3 flex items-center gap-3">
          <span className="section-label">{label}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-neon/40 to-transparent" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 max-w-2xl text-ink-muted">{subtitle}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}
