import { useState } from 'react'
import type { CSSProperties } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { certifications, issuers } from '../../data/certifications'
import Section from '../layout/Section'
import { Corners, spotMove } from '../motion/Spot'
import { EASE } from '../motion/variants'
import { scrollToId } from '../../lib/scroll'

const MESES = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}
const VISIVEIS = 12

export default function Certifications() {
  const { t, L, lang } = useLoc()
  const [filtro, setFiltro] = useState<string | null>(null)
  const [todas, setTodas] = useState(false)
  const filtradas = filtro ? certifications.filter((c) => c.issuer === filtro) : certifications
  const lista = todas || filtro ? filtradas : filtradas.slice(0, VISIVEIS)
  const data = (iso?: string) => {
    if (!iso) return null
    const [y, m] = iso.split('-')
    return `${MESES[lang][Number(m) - 1]} ${y}`
  }
  const opcoes: { key: string | null; label: string; n: number }[] = [
    { key: null, label: t('certs.all'), n: certifications.length },
    ...issuers.map((i) => ({ key: i, label: i, n: certifications.filter((c) => c.issuer === i).length })),
  ]

  return (
    <Section
      id="certs"
      label={t('section.certsLabel')}
      title={t('section.certsTitle')}
      aside={
        <p className="font-mono text-xs text-ink-muted" aria-live="polite">
          {t('certs.showing', { n: lista.length, total: filtradas.length })}
        </p>
      }
    >
      <LayoutGroup id="certs">
        <div role="group" aria-label={t('certs.filter')} className="-mx-5 mb-8 flex gap-1 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {opcoes.map((o) => {
            const ativo = filtro === o.key
            return (
              <button
                key={o.key ?? 'all'}
                type="button"
                aria-pressed={ativo}
                onClick={() => setFiltro(ativo && o.key ? null : o.key)}
                className={`relative min-h-[44px] shrink-0 whitespace-nowrap px-3 font-mono text-xs transition-colors ${
                  ativo ? 'text-white' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {ativo && (
                  <motion.span
                    layoutId="cert-filter"
                    className="absolute inset-0 border border-neon/70 bg-neon/15"
                    transition={{ type: 'spring', stiffness: 450, damping: 38 }}
                  />
                )}
                <span className="relative">
                  {o.label} <span className={ativo ? 'text-neon-soft' : 'text-ink-faint'}>{o.n}</span>
                </span>
              </button>
            )
          })}
        </div>

        <motion.ul layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {lista.map((c, i) => {
              const inProgress = c.status === 'progress'
              const quando = data(c.issued)
              const corpo = (
                <>
                  <Corners />
                  <div className="relative flex items-start justify-between gap-3 font-mono text-[11px] uppercase tracking-wider">
                    <span className={inProgress ? 'text-signal-amber' : 'text-neon-soft'}>{c.issuer}</span>
                    <span className="shrink-0 text-ink-muted">{inProgress ? t('certs.inProgress') : quando}</span>
                  </div>
                  <h3 className="relative mt-3 font-display text-[1.05rem] font-bold leading-snug text-ink group-hover:text-white">
                    {c.name}
                  </h3>
                  {c.note && <p className="relative mt-1.5 text-sm leading-snug text-ink-muted">{L(c.note)}</p>}
                  {c.url && (
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="absolute bottom-4 right-4 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  )}
                </>
              )
              const cls = `panel spot reticle group block h-full min-h-[132px] p-5 pr-10 transition-colors hover:border-white/20 ${
                inProgress ? 'border-l-2 border-l-signal-amber' : ''
              }`
              return (
                <motion.li
                  key={`${c.issuer}-${c.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, delay: Math.min(i, 9) * 0.025, ease: EASE } }}
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                  transition={{ layout: { duration: 0.45, ease: EASE } }}
                  onPointerMove={spotMove}
                  style={inProgress ? ({ ['--spot' as string]: '255 165 0' } as CSSProperties) : undefined}
                >
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className={cls}>
                      {corpo}
                    </a>
                  ) : (
                    <div className={cls}>{corpo}</div>
                  )}
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>

        {!filtro && certifications.length > VISIVEIS && (
          <motion.div layout className="mt-8 flex justify-center">
            <button
              type="button"
              className="btn-ghost"
              aria-expanded={todas}
              onClick={() => {
                if (todas) scrollToId('certs')
                setTodas(!todas)
              }}
            >
              {todas ? t('certs.showLess') : t('certs.showAll', { n: certifications.length })}
            </button>
          </motion.div>
        )}
      </LayoutGroup>
    </Section>
  )
}
