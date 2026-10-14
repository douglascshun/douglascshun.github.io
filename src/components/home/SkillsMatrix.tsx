import { motion } from 'framer-motion'
import { useLoc } from '../../i18n/useLoc'
import { skillGroups } from '../../data/skills'
import Section from '../layout/Section'
import { Corners, spotMove, spotVar } from '../motion/Spot'
import { EASE, inView } from '../motion/variants'

/** Barra segmentada estilo medidor de terminal; preenche ao entrar na tela. */
const SEG = 'repeating-linear-gradient(90deg, #000 0 7px, transparent 7px 9px)'

export default function SkillsMatrix() {
  const { t, L } = useLoc()

  return (
    <Section id="skills" label={t('section.skillsLabel')} title={t('section.skillsTitle')}>
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.key}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.7, delay: (gi % 2) * 0.1, ease: EASE }}
            onPointerMove={spotMove}
            style={spotVar(g.accent)}
            className="panel spot reticle p-6 md:p-7"
          >
            <Corners />
            <h3 className="relative flex items-center justify-between font-display text-lg font-bold text-ink">
              {L(g.title)}
              <span className="h-2 w-2" style={{ background: g.accent }} aria-hidden />
            </h3>
            <ul className="relative mt-6 space-y-4">
              {g.skills.map((s, si) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3 font-mono text-[12.5px]">
                    <span className="text-ink-muted">{s.name}</span>
                    <span className="tabular-nums text-ink">{s.level}</span>
                  </div>
                  <div
                    className="relative h-2"
                    role="meter"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={s.name}
                  >
                    <span className="absolute inset-0 bg-white/[0.07]" style={{ maskImage: SEG, WebkitMaskImage: SEG }} />
                    <motion.span
                      className="absolute inset-y-0 left-0 origin-left"
                      style={{ width: `${s.level}%`, background: g.accent, maskImage: SEG, WebkitMaskImage: SEG }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + si * 0.07, ease: EASE }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
