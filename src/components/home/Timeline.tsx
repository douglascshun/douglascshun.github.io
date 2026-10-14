import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLoc } from '../../i18n/useLoc'
import { timeline } from '../../data/profile'
import type { TimelineItem } from '../../data/profile'
import Section from '../layout/Section'
import { EASE } from '../motion/variants'

const meta: Record<TimelineItem['tag'], { color: string; label: { pt: string; en: string } }> = {
  edu: { color: '#4aa3f5', label: { pt: 'formação', en: 'education' } },
  offensive: { color: '#ff6b7a', label: { pt: 'ofensiva', en: 'offensive' } },
  build: { color: '#FFA500', label: { pt: 'construção', en: 'build' } },
  win: { color: '#2ecc71', label: { pt: 'marco', en: 'milestone' } },
}

export default function Timeline() {
  const { t, L, lang } = useLoc()
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 55%'] })
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 })

  return (
    <Section id="path" label={t('section.pathLabel')} title={t('section.pathTitle')}>
      <ol ref={listRef} className="relative md:ml-[25%]">
        {/* trilho + linha que se desenha conforme a rolagem */}
        <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10" />
        <motion.span
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-neon shadow-glow-sm"
          style={{ scaleY: draw }}
        />
        {timeline.map((it, i) => {
          const { color, label } = meta[it.tag]
          const now = it.year === 'now'
          return (
            <motion.li
              key={i}
              className="relative grid gap-2 pb-12 pl-10 last:pb-0 md:grid-cols-[120px_1fr] md:gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -35% 0px' }}
            >
              <motion.span
                aria-hidden
                className="absolute left-0 top-1.5 h-[15px] w-[15px] border-2 bg-base-900"
                variants={{
                  hidden: { borderColor: 'rgba(255,255,255,0.2)', scale: 0.7 },
                  show: { borderColor: color, scale: 1, boxShadow: `0 0 14px ${color}88`, transition: { duration: 0.4 } },
                }}
              />
              <motion.div
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } } }}
                className="font-mono"
              >
                <div className={`text-2xl font-bold md:text-3xl ${now ? 'text-signal-amber' : 'text-ink'}`}>
                  {now ? (lang === 'pt' ? 'agora' : 'now') : it.year}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider" style={{ color }}>
                  {L(label)}
                </div>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08, ease: EASE } } }}
                className="max-w-2xl"
              >
                <h3 className="font-display text-xl font-bold text-ink md:text-2xl">{L(it.title)}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{L(it.body)}</p>
              </motion.div>
            </motion.li>
          )
        })}
      </ol>
    </Section>
  )
}
