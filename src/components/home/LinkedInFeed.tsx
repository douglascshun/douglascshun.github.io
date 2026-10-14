import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { LinkedinIcon } from '../icons/Brand'
import { useLoc } from '../../i18n/useLoc'
import type { Lang } from '../../i18n/useLoc'
import { linkedinPosts, linkedinProfile } from '../../data/linkedin'
import Section from '../layout/Section'
import { Corners, spotMove } from '../motion/Spot'
import { EASE, fadeUp, inView, stagger } from '../motion/variants'

const fmt = (iso: string, lang: Lang) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString(lang === 'en' ? 'en-US' : 'pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

export default function LinkedInFeed() {
  const { t, L, lang } = useLoc()
  const [destaque, ...resto] = linkedinPosts
  if (!destaque) return null

  return (
    <Section
      id="feed"
      label={t('section.feedLabel')}
      title={t('section.feedTitle')}
      subtitle={t('feed.note')}
      aside={
        <a
          href={linkedinProfile}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-[44px] items-center gap-2 font-mono text-sm text-ink-muted hover:text-white"
        >
          <LinkedinIcon size={16} />
          <span className="link-u">{t('ui.allPosts')}</span>
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      }
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <motion.a
          href={destaque.url}
          target="_blank"
          rel="noreferrer"
          onPointerMove={spotMove}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.7, ease: EASE }}
          className="panel spot reticle group flex min-h-[320px] flex-col p-7 md:p-9 lg:col-span-6"
        >
          <Corners />
          <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
            <span className="flex items-center gap-2 text-neon-soft">
              <span className="h-1.5 w-1.5 animate-pulse bg-neon" /> {t('ui.latest')}
            </span>
            <time dateTime={destaque.date} className="text-ink-muted">
              {fmt(destaque.date, lang)}
            </time>
          </div>
          <h3 className="relative mt-8 font-display text-3xl font-extrabold leading-[1.05] text-ink group-hover:text-white md:text-4xl">
            {L(destaque.title)}
          </h3>
          <p className="relative mt-4 max-w-lg text-lg leading-relaxed text-ink-muted">{L(destaque.excerpt)}</p>
          <div className="relative mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
            <span className="font-mono text-xs text-ink-muted">{destaque.tags.map((tg) => `#${tg}`).join(' ')}</span>
            <span className="flex items-center gap-1 font-mono text-xs text-ink group-hover:text-white">
              {t('feed.view')}
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </motion.a>

        <motion.ol
          className="border-t border-white/10 lg:col-span-6"
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {resto.map((p) => (
            <motion.li key={p.url} variants={fadeUp} className="border-b border-white/10">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group grid min-h-[72px] grid-cols-[1fr_auto] items-center gap-x-4 py-4 transition-colors"
              >
                <time dateTime={p.date} className="col-span-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  {fmt(p.date, lang)} · {p.tags.slice(0, 2).map((tg) => `#${tg}`).join(' ')}
                </time>
                <span className="mt-1 font-display text-[1.05rem] font-bold leading-snug text-ink transition-colors group-hover:text-neon-soft">
                  {L(p.title)}
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </a>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  )
}
