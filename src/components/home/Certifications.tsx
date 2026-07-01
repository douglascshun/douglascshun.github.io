import { motion } from 'framer-motion'
import { BadgeCheck, Loader } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { certifications } from '../../data/certifications'
import Section from '../layout/Section'

export default function Certifications() {
  const { t, L } = useLoc()

  return (
    <Section id="certs" label={t('section.certsLabel')} title={t('section.certsTitle')}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const inProgress = c.status === 'progress'
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass glass-hover flex items-start gap-3 rounded-xl p-4"
            >
              <span
                className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border ${
                  inProgress ? 'border-signal-amber/40 text-signal-amber' : 'border-neon/40 text-neon'
                }`}
              >
                {inProgress ? <Loader size={16} /> : <BadgeCheck size={16} />}
              </span>
              <div>
                <div className="font-semibold leading-tight text-ink">{c.name}</div>
                <div className="mt-0.5 font-mono text-[11px] text-ink-faint">
                  {c.issuer}
                  {c.note ? ` · ${L(c.note)}` : ''}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
