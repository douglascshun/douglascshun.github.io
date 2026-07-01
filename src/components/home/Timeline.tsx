import { motion } from 'framer-motion'
import { GraduationCap, Swords, Wrench, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { timeline } from '../../data/profile'
import type { TimelineItem } from '../../data/profile'
import Section from '../layout/Section'

const meta: Record<TimelineItem['tag'], { color: string; Icon: LucideIcon }> = {
  edu: { color: '#1987F0', Icon: GraduationCap },
  offensive: { color: '#ff4d5e', Icon: Swords },
  build: { color: '#FFA500', Icon: Wrench },
  win: { color: '#2ecc71', Icon: Trophy },
}

export default function Timeline() {
  const { t, L } = useLoc()

  return (
    <Section id="path" label={t('section.pathLabel')} title={t('section.pathTitle')}>
      <div className="relative ml-3 md:ml-4">
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-neon via-neon/30 to-transparent" />
        <div className="space-y-8">
          {timeline.map((it, i) => {
            const { color, Icon } = meta[it.tag]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-8 md:pl-10"
              >
                <span
                  className="absolute -left-[9px] top-1 grid h-[22px] w-[22px] place-items-center rounded-full border bg-base-900"
                  style={{ borderColor: color, boxShadow: `0 0 12px ${color}66` }}
                >
                  <Icon size={12} style={{ color }} />
                </span>
                <div className="glass glass-hover rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color }}>
                      {it.year}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-ink">{L(it.title)}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{L(it.body)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
