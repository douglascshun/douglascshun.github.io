import { motion } from 'framer-motion'
import { useLoc } from '../../i18n/useLoc'
import { skillGroups } from '../../data/skills'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'

export default function SkillsMatrix() {
  const { t, L } = useLoc()

  return (
    <Section id="skills" label={t('section.skillsLabel')} title={t('section.skillsTitle')}>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.key} delay={gi * 0.08}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-sm" style={{ background: g.accent, boxShadow: `0 0 12px ${g.accent}` }} />
                <h3 className="font-bold text-ink">{L(g.title)}</h3>
              </div>
              <div className="space-y-3.5">
                {g.skills.map((s, si) => (
                  <div key={s.name}>
                    <div className="mb-1 flex items-center justify-between font-mono text-xs">
                      <span className="text-ink-muted">{s.name}</span>
                      <span style={{ color: g.accent }}>{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${g.accent}, ${g.accent}99)`, boxShadow: `0 0 10px ${g.accent}88` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + si * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
