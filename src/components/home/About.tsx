import { motion } from 'framer-motion'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'
import Counter from '../motion/Counter'

export default function About() {
  const { t, L } = useLoc()

  return (
    <Section id="about" label={t('section.aboutLabel')} title={t('section.aboutTitle')}>
      <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <Reveal className="mx-auto w-full max-w-[280px]">
          <div className="glass glass-hover group relative overflow-hidden rounded-3xl p-1.5">
            <div className="absolute -inset-1 -z-10 bg-gradient-to-tr from-neon/30 via-transparent to-neon-cyan/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src={profile.avatar}
              alt={profile.name}
              loading="lazy"
              className="aspect-square w-full rounded-[1.35rem] object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-base-900/70 px-3 py-2 font-mono text-[11px] backdrop-blur">
              <span className="text-neon">@{profile.handle}</span>
              <span className="text-ink-faint">alias {profile.alias}</span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-sm text-neon-soft">{L(profile.role)}</p>
          </Reveal>
          {L(profile.bio).map((para, i) => (
            <Reveal key={i} delay={0.08 * (i + 1)}>
              <p className="mt-4 text-ink-muted leading-relaxed">{para}</p>
            </Reveal>
          ))}

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i, duration: 0.5 }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-extrabold text-neon-soft text-glow">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">{L(s.label)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
