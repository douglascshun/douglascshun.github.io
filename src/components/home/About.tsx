import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'
import Counter from '../motion/Counter'
import { fadeUp, inView, stagger } from '../motion/variants'

export default function About() {
  const { t, L } = useLoc()
  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <Section id="about" label={t('section.aboutLabel')} title={t('section.aboutTitle')}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4 lg:col-span-3">
          <figure className="group relative mx-auto max-w-[320px] md:mx-0">
            <div ref={photoRef} className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-base-700">
              <motion.img
                src={profile.avatar}
                alt={profile.name}
                loading="lazy"
                width={460}
                height={460}
                style={{ y: imgY }}
                className="absolute inset-0 h-[112%] w-full object-cover grayscale contrast-[1.08] transition-[filter] duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-neon/25 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-scanline opacity-60" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] text-ink-muted">
              <span className="text-neon-soft">@{profile.handle}</span>
              <span>alias {profile.alias}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
          <Reveal>
            <p className="font-mono text-sm text-neon-soft">{L(profile.role)}</p>
          </Reveal>
          <motion.div variants={stagger(0.09, 0.1)} initial="hidden" whileInView="show" viewport={inView}>
            {L(profile.bio).map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`mt-5 leading-relaxed ${i === 0 ? 'text-xl text-ink md:text-[1.4rem] md:leading-snug' : 'text-lg text-ink-muted'}`}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          <motion.dl
            className="mt-12 grid grid-cols-2 border-t border-white/10 sm:grid-cols-4"
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            {profile.stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`flex flex-col-reverse border-b border-white/10 py-6 pr-4 sm:border-b-0 ${i % 2 ? 'pl-4 sm:pl-5' : 'sm:pl-5 sm:first:pl-0'} ${
                  i > 0 ? 'sm:border-l' : ''
                } ${i % 2 ? 'border-l' : ''} border-white/10`}
              >
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">{L(s.label)}</dt>
                <dd className="font-display text-4xl font-extrabold text-white md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </Section>
  )
}
