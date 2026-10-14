import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'
import { servicesUrl } from '../../lib/links'
import Section from '../layout/Section'
import { Corners, spotMove } from '../motion/Spot'
import { EASE, fadeUp, inView, stagger } from '../motion/variants'

export default function Contact() {
  const { t, L } = useLoc()
  const [copied, setCopied] = useState(false)
  const email = profile.contacts.find((c) => c.kind === 'email')
  const canais = profile.contacts.filter((c) => c.kind !== 'email')

  const copyEmail = async () => {
    if (!email) return
    try {
      await navigator.clipboard.writeText(email.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* sem clipboard: o link mailto continua funcionando */
    }
  }

  return (
    <Section id="contact" label={t('section.contactLabel')} title={t('section.contactTitle')} subtitle={t('contact.intro')}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        {email && (
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">{t('ui.email')}</p>
            <a
              href={email.href}
              className="link-u mt-3 inline-block font-display text-[clamp(1.3rem,3.2vw,2.4rem)] font-extrabold leading-tight text-white [overflow-wrap:anywhere]"
            >
              {email.value.split('@')[0]}
              <wbr />@{email.value.split('@')[1]}
            </a>
            <div className="mt-5">
              <button type="button" onClick={() => void copyEmail()} className="btn-ghost" aria-live="polite">
                {copied ? <Check size={15} className="text-signal-green" /> : <Copy size={15} />}
                {copied ? t('contact.copied') : t('contact.copy')}
              </button>
            </div>
          </motion.div>
        )}

        <div className="lg:col-span-6">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">{t('ui.channels')}</p>
          <motion.ul className="mt-3 border-t border-white/10" variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={inView}>
            {canais.map((c) => (
              <motion.li key={c.kind} variants={fadeUp} className="border-b border-white/10">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid min-h-[60px] grid-cols-[110px_1fr_auto] items-center gap-3 py-3"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">{L(c.label)}</span>
                  <span className="truncate text-ink transition-colors group-hover:text-white">{c.value}</span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-soft"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Caminho para o site de serviços: discreto, sem replicar a oferta */}
      <motion.aside
        aria-labelledby="svc-title"
        onPointerMove={spotMove}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.7, ease: EASE }}
        className="panel spot reticle mt-20 grid items-center gap-6 border-dashed p-7 md:grid-cols-[1fr_auto] md:p-9"
      >
        <Corners />
        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-wider text-neon-soft">{t('ui.svcKicker')}</p>
          <h3 id="svc-title" className="mt-2 max-w-2xl font-display text-2xl font-bold leading-tight text-ink md:text-[1.75rem]">
            {t('ui.svcTitle')}
          </h3>
          <p className="mt-2 max-w-xl text-ink-muted">{t('ui.svcBody')}</p>
        </div>
        <a href={servicesUrl} target="_blank" rel="noreferrer" className="btn-neon group relative justify-self-start">
          {t('ui.svcCta')}
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.aside>
    </Section>
  )
}
