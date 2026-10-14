import { useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, ExternalLink, Loader } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { certifications, issuers } from '../../data/certifications'
import Section from '../layout/Section'

const MESES = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

export default function Certifications() {
  const { t, L, lang } = useLoc()
  const [filtro, setFiltro] = useState<string | null>(null)
  const [todas, setTodas] = useState(false)
  const filtradas = filtro ? certifications.filter((c) => c.issuer === filtro) : certifications
  const VISIVEIS = 12
  const lista = todas || filtro ? filtradas : filtradas.slice(0, VISIVEIS)
  const data = (iso?: string) => {
    if (!iso) return ''
    const [y, m] = iso.split('-')
    return ` · ${MESES[lang][Number(m) - 1]} ${y}`
  }
  const chip = (ativo: boolean) =>
    `rounded-full border px-3 py-1 font-mono text-[11px] transition-colors ${
      ativo ? 'border-neon/60 bg-neon/10 text-neon' : 'border-white/10 text-ink-faint hover:border-white/25 hover:text-ink-muted'
    }`

  return (
    <Section id="certs" label={t('section.certsLabel')} title={t('section.certsTitle')}>
      <div className="mb-5 flex flex-wrap gap-2">
        <button className={chip(filtro === null)} onClick={() => setFiltro(null)}>
          {lang === 'pt' ? 'todas' : 'all'} ({certifications.length})
        </button>
        {issuers.map((i) => (
          <button key={i} className={chip(filtro === i)} onClick={() => setFiltro(filtro === i ? null : i)}>
            {i} ({certifications.filter((c) => c.issuer === i).length})
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((c, i) => {
          const inProgress = c.status === 'progress'
          const Tag = c.url ? motion.a : motion.div
          return (
            <Tag
              key={`${c.issuer}-${c.name}`}
              {...(c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.04 }}
              className="glass glass-hover group flex items-start gap-3 rounded-xl p-4"
            >
              <span
                className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border ${
                  inProgress ? 'border-signal-amber/40 text-signal-amber' : 'border-neon/40 text-neon'
                }`}
              >
                {inProgress ? <Loader size={16} /> : <BadgeCheck size={16} />}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-1.5 font-semibold leading-tight text-ink">
                  <span>{c.name}</span>
                  {c.url && <ExternalLink size={12} className="mt-1 shrink-0 text-ink-faint group-hover:text-neon" />}
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-ink-faint">
                  {c.issuer}
                  {data(c.issued)}
                  {c.note ? ` · ${L(c.note)}` : ''}
                </div>
              </div>
            </Tag>
          )
        })}
      </div>
      {!filtro && certifications.length > VISIVEIS && (
        <div className="mt-5 text-center">
          <button className={chip(false)} onClick={() => setTodas(!todas)}>
            {todas
              ? lang === 'pt' ? 'mostrar menos' : 'show less'
              : lang === 'pt'
                ? `ver todas as ${certifications.length}`
                : `show all ${certifications.length}`}
          </button>
        </div>
      )}
    </Section>
  )
}
