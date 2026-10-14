import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { modules } from '../../data/courses'
import type { CourseStatus, Module } from '../../data/courses'
import Section from '../layout/Section'
import { EASE, inView } from '../motion/variants'

const statusStyle: Record<CourseStatus, { text: string; dot: string }> = {
  done: { text: 'text-signal-green', dot: 'bg-signal-green' },
  progress: { text: 'text-signal-amber', dot: 'bg-signal-amber animate-pulse' },
  planned: { text: 'text-ink-muted', dot: 'border border-ink-faint' },
}

export default function Courses() {
  const { t, L } = useLoc()
  const [open, setOpen] = useState<string | null>(modules.find((m) => m.status === 'progress')?.id ?? null)
  const statusText: Record<CourseStatus, string> = {
    done: t('courses.done'),
    progress: t('courses.progress'),
    planned: t('courses.planned'),
  }

  // Agrupa os módulos por programa, mantendo a ordem dos dados.
  const programas: { nome: string; itens: Module[] }[] = []
  for (const m of modules) {
    const nome = L(m.program)
    const g = programas.find((p) => p.nome === nome)
    if (g) g.itens.push(m)
    else programas.push({ nome, itens: [m] })
  }

  return (
    <Section id="courses" label={t('section.coursesLabel')} title={t('section.coursesTitle')}>
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-8">
        {programas.map((p, pi) => {
          const feitos = p.itens.filter((m) => m.status === 'done').length
          const [curso, inst] = p.nome.split(' · ')
          return (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.7, delay: pi * 0.12, ease: EASE }}
            >
              <div className="flex items-end justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight text-ink md:text-2xl">{curso}</h3>
                  {inst && <p className="mt-1 font-mono text-xs text-ink-muted">{inst}</p>}
                </div>
                <div className="shrink-0 text-right">
                  <div className="flex gap-1" aria-hidden>
                    {p.itens.map((m) => (
                      <span
                        key={m.id}
                        className={`h-1.5 w-6 ${m.status === 'done' ? 'bg-signal-green' : m.status === 'progress' ? 'bg-signal-amber' : 'bg-white/15'}`}
                      />
                    ))}
                  </div>
                  <p className="mt-2 font-mono text-[11px] text-ink-muted">{t('ui.modules', { done: feitos, total: p.itens.length })}</p>
                </div>
              </div>

              <ul>
                {p.itens.map((m) => {
                  const isOpen = open === m.id
                  const st = statusStyle[m.status]
                  return (
                    <li key={m.id} className="border-b border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : m.id)}
                        aria-expanded={isOpen}
                        aria-controls={`mod-${m.id}`}
                        className="group flex min-h-[60px] w-full items-center gap-4 py-3 text-left"
                      >
                        <span className="w-7 font-mono text-xs text-ink-faint">{m.n}</span>
                        <span className="flex-1 font-medium text-ink transition-colors group-hover:text-white">{L(m.title)}</span>
                        <span className={`hidden items-center gap-2 font-mono text-[11px] sm:flex ${st.text}`}>
                          <span className={`h-2 w-2 rounded-full ${st.dot}`} />
                          {statusText[m.status]}
                        </span>
                        <span className={`h-2 w-2 rounded-full sm:hidden ${st.dot}`} aria-label={statusText[m.status]} />
                        <Plus
                          size={18}
                          aria-hidden
                          className={`text-ink-muted transition-transform duration-300 group-hover:text-white ${isOpen ? 'rotate-45' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`mod-${m.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <ul className="grid gap-x-6 gap-y-2 pb-5 pl-11 sm:grid-cols-2">
                              {L(m.disciplines).map((d, j) => (
                                <motion.li
                                  key={d}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.05 + j * 0.04, duration: 0.3 }}
                                  className="font-mono text-[13px] text-ink-muted"
                                >
                                  <span className="text-neon-soft">&gt; </span>
                                  {d}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
