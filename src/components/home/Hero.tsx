import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'
import { scrollToId } from '../../lib/scroll'
import DecryptText from '../motion/DecryptText'
import Typewriter from '../motion/Typewriter'
import { EASE } from '../motion/variants'

/** Linha do tempo do "momento" do hero (segundos). */
const T = { prompt: 0.15, name: 0.55, beam: 0.5, copy: 1.65, panel: 1.9 }

export default function Hero() {
  const { t, L } = useLoc()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '-28%'])
  const panelY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const rows = t('scan.rows', { returnObjects: true }) as string[]

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:pt-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          className="font-mono text-sm text-ink-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: T.prompt, duration: 0.4 }}
        >
          <span className="text-signal-green">guest@douglascshun</span>
          <span className="text-ink-faint">:</span>
          <span className="text-neon-soft">~</span>
          <span className="text-ink-faint">$ </span>
          <span className="text-ink">whoami</span>
        </motion.p>

        <motion.div style={{ y: nameY, opacity: fade }} className="relative mt-5">
          <h1 className="font-display-wide text-[min(8.4vw,6.6rem)] font-black uppercase leading-[0.9] text-ink">
            <DecryptText text="Douglas" delay={T.name * 1000} duration={520} className="block text-neon-soft" />
            <DecryptText text="Cshunderlick" delay={T.name * 1000 + 260} duration={820} className="block" />
          </h1>
          {/* feixe de varredura sobre o nome */}
          {!reduce && <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-neon/25 to-transparent"
            initial={{ left: '-10%', opacity: 0 }}
            animate={{ left: '105%', opacity: [0, 1, 1, 0] }}
            transition={{ delay: T.beam, duration: 1.3, ease: 'easeInOut' }}
          />}
        </motion.div>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="min-w-0 lg:col-span-7"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: T.copy } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="font-mono text-xs uppercase tracking-[0.18em] text-neon-soft"
            >
              {L(profile.role)}
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="mt-4 max-w-xl text-xl leading-relaxed text-ink md:text-2xl"
            >
              {t('hero.tagline')}
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button type="button" onClick={() => scrollToId('projects')} className="btn-neon group">
                {t('hero.ctaProjects')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button type="button" onClick={() => scrollToId('contact')} className="btn-ghost">
                {t('nav.contact')}
              </button>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: panelY }} className="min-w-0 lg:col-span-5">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              transition={{ delay: T.panel, duration: 0.7, ease: EASE }}
              className="panel font-mono text-[12.5px] leading-relaxed"
              aria-label={t('scan.foot')}
              role="img"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 text-[11px] text-ink-faint">
                <span>scan.log</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-green" /> live
                </span>
              </div>
              <motion.div
                aria-hidden
                className="space-y-0.5 overflow-x-auto whitespace-pre px-4 py-4"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: T.panel + 0.45 } } }}
              >
                {[
                  <span key="c">
                    <span className="text-ink-faint">$ </span>
                    <span className="text-ink">{t('scan.cmd')}</span>
                  </span>,
                  <span key="h" className="text-ink-faint">{t('scan.head')}</span>,
                  ...rows.map((r) => {
                    const [port, state, ...svc] = r.split(/\s+/)
                    return (
                      <span key={r}>
                        <span className="text-ink-muted">{port.padEnd(10)}</span>
                        <span className="text-signal-green">{state.padEnd(7)}</span>
                        <span className="text-neon-soft">{svc.join(' ')}</span>
                      </span>
                    )
                  }),
                  <span key="f" className="block whitespace-pre-wrap text-signal-amber"># {t('scan.foot')}</span>,
                  <span key="d" className="text-ink-faint">
                    {t('scan.done')} <Typewriter text="" />
                  </span>,
                ].map((line, i) => (
                  <motion.div key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.05 } } }}>
                    {line}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToId('about')}
        style={{ opacity: fade }}
        className="group mx-auto mt-14 flex min-h-[44px] w-full max-w-6xl items-center gap-3 font-mono text-xs text-ink-muted hover:text-white"
      >
        <span className="relative block h-px w-16 overflow-hidden bg-white/15">
          <span className="absolute inset-y-0 left-0 w-1/2 animate-[scanx_2.2s_ease-in-out_infinite] bg-neon" />
        </span>
        {t('hero.scroll')}
        <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </motion.button>
    </section>
  )
}
