import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { modules } from '../../data/courses'
import type { CourseStatus } from '../../data/courses'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'

const statusStyle: Record<CourseStatus, { color: string; dot: string }> = {
  done: { color: 'text-signal-green', dot: 'bg-signal-green shadow-[0_0_8px_#2ecc71]' },
  progress: { color: 'text-signal-amber', dot: 'bg-signal-amber shadow-[0_0_8px_#FFA500]' },
  planned: { color: 'text-ink-faint', dot: 'bg-ink-faint' },
}

export default function Courses() {
  const { t, L } = useLoc()
  const [open, setOpen] = useState<string | null>('eng-01')
  const statusText: Record<CourseStatus, string> = {
    done: t('courses.done'),
    progress: t('courses.progress'),
    planned: t('courses.planned'),
  }

  return (
    <Section id="courses" label={t('section.coursesLabel')} title={t('section.coursesTitle')}>
      <div className="space-y-3">
        {modules.map((m, i) => {
          const isOpen = open === m.id
          const st = statusStyle[m.status]
          const novoPrograma = i === 0 || L(modules[i - 1].program) !== L(m.program)
          return (
            <Reveal key={m.id} delay={i * 0.05}>
              {novoPrograma && (
                <div className={`mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint ${i ? 'mt-8' : ''}`}>
                  <span className="text-neon">$</span> {L(m.program)}
                </div>
              )}
              <div className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : m.id)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-xs text-neon">{m.n}</span>
                  <span className="flex-1 font-semibold text-ink">{L(m.title)}</span>
                  <span className={`hidden items-center gap-1.5 font-mono text-[11px] sm:flex ${st.color}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${st.dot}`} />
                    {statusText[m.status]}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-ink-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-2 border-t border-white/10 px-5 py-4 sm:grid-cols-2">
                        {L(m.disciplines).map((d, j) => (
                          <div key={j} className="flex items-center gap-2 font-mono text-sm text-ink-muted">
                            <span className="text-neon">▹</span>
                            {d}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
