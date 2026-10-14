import { useLayoutEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/icons/Brand'
import { getProject, publicProjects } from '../data/projects'
import { projectContent } from '../content/projects'
import { useLoc } from '../i18n/useLoc'
import Reveal from '../components/motion/Reveal'
import MaskReveal from '../components/motion/MaskReveal'
import { Corners, spotMove, spotVar } from '../components/motion/Spot'
import { EASE, fadeUp, inView, stagger } from '../components/motion/variants'
import { scrollToY } from '../lib/scroll'
import NotFound from './NotFound'

export default function ProjectPage() {
  const { slug = '' } = useParams()
  const { t, L } = useLoc()
  const navigate = useNavigate()
  const project = getProject(slug)
  const content = projectContent[slug]
  const headRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: headRef, offset: ['start start', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  useLayoutEffect(() => {
    scrollToY(0, { immediate: true })
  }, [slug])

  if (!project || !content) return <NotFound />

  const idx = publicProjects.findIndex((p) => p.slug === slug)
  const next = publicProjects[(idx + 1) % publicProjects.length]
  const prev = publicProjects[(idx - 1 + publicProjects.length) % publicProjects.length]
  const back = () => navigate('/', { state: { restore: true } })

  return (
    <article className="pt-28 md:pt-32" style={spotVar(project.accent)}>
      <header ref={headRef} className="relative mx-auto max-w-6xl px-5">
        <motion.div
          aria-hidden
          style={{ y: glowY, background: project.accent }}
          className="pointer-events-none absolute -top-24 right-0 h-72 w-[min(80%,620px)] rounded-full opacity-[0.16] blur-[110px]"
        />
        <Reveal>
          <button
            type="button"
            onClick={back}
            className="group inline-flex min-h-[44px] items-center gap-2 font-mono text-sm text-ink-muted transition-colors hover:text-white"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> {t('projects.back')}
          </button>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider" style={{ color: project.accent }}>
                <span className="h-1.5 w-1.5" style={{ background: project.accent }} />
                {L(project.category)}
              </p>
            </Reveal>
            <h1 className="mt-4 font-display-wide text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.95] text-ink">
              <MaskReveal delay={0.1}>{project.title}</MaskReveal>
            </h1>
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">{L(project.tagline)}</p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-neon">
                  <GithubIcon size={16} /> {t('projects.repo')}
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                    live <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="lg:col-span-4">
            <dl className="border-t border-white/10 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 py-3">
                <dt className="text-ink-muted">{t('ui.year')}</dt>
                <dd className="text-ink">{project.year}</dd>
              </div>
              <div className="border-b border-white/10 py-3">
                <dt className="text-ink-muted">{t('projects.stack')}</dt>
                <dd className="mt-2 leading-relaxed text-ink">{project.tech.join(' / ')}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      {content.metrics && (
        <section className="mx-auto mt-20 max-w-6xl px-5">
          <motion.dl
            className="grid grid-cols-2 border-y border-white/10 md:grid-cols-4"
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            {content.metrics.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`flex flex-col-reverse py-7 pr-4 ${i % 2 ? 'border-l border-white/10 pl-5' : ''} ${i === 2 ? 'md:border-l md:pl-5' : ''} ${
                  i > 1 ? 'border-t border-white/10 md:border-t-0' : ''
                }`}
              >
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">{L(m.label)}</dt>
                <dd className="font-display text-3xl font-extrabold md:text-4xl" style={{ color: project.accent }}>
                  {m.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </section>
      )}

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 px-5 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <h2 className="section-label">
            <span className="text-ink-faint">$ </span>
            {t('projects.overview')}
          </h2>
        </Reveal>
        <motion.div className="md:col-span-8" variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={inView}>
          {L(content.overview).map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`leading-relaxed ${i === 0 ? 'text-xl text-ink md:text-2xl md:leading-snug' : 'mt-5 text-lg text-ink-muted'}`}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {content.problem && (
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <Reveal>
            <h2 className="section-label mb-6">
              <span className="text-ink-faint">$ </span>
              {t('projects.problem')}
            </h2>
          </Reveal>
          <div className="border-t border-white/10">
            {content.problem.map((row, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid gap-4 border-b border-white/10 py-6 md:grid-cols-3 md:gap-8">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#ff8a96]">{t('ui.challenge')}</p>
                    <p className="mt-1.5 text-ink-muted">{L(row.challenge)}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-neon-soft">{t('ui.solution')}</p>
                    <p className="mt-1.5 text-ink">{L(row.solution)}</p>
                  </div>
                  {row.benefit && (
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-signal-green">{t('ui.benefit')}</p>
                      <p className="mt-1.5 text-ink-muted">{L(row.benefit)}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <Reveal>
          <h2 className="section-label mb-6">
            <span className="text-ink-faint">$ </span>
            {t('projects.highlights')}
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: EASE }}
              onPointerMove={spotMove}
              className="panel spot reticle h-full p-6"
            >
              <Corners />
              <h3 className="relative font-display text-lg font-bold text-ink">{L(h.title)}</h3>
              <p className="relative mt-2 leading-relaxed text-ink-muted">{L(h.body)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {content.sections?.map((sec, i) => (
        <section key={i} className="mx-auto mt-20 grid max-w-6xl gap-6 px-5 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <h2 className="font-display text-xl font-bold text-ink">{L(sec.title)}</h2>
          </Reveal>
          <ul className="space-y-3 md:col-span-8">
            {L(sec.body).map((para, j) => (
              <Reveal as="li" key={j} delay={0.04 * j} className="flex gap-3 leading-relaxed text-ink-muted">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0" style={{ background: project.accent }} aria-hidden />
                {para}
              </Reveal>
            ))}
          </ul>
        </section>
      ))}

      <nav aria-label={t('ui.moreProjects')} className="mx-auto mt-28 max-w-6xl px-5">
        <div className="grid border-t border-white/10 sm:grid-cols-2">
          {[
            { p: prev, dir: 'prev' as const },
            { p: next, dir: 'next' as const },
          ].map(({ p, dir }) => (
            <Link
              key={dir}
              to={`/projeto/${p.slug}`}
              onPointerMove={spotMove}
              style={spotVar(p.accent)}
              className={`spot group relative flex min-h-[140px] flex-col justify-center gap-2 border-b border-white/10 px-2 py-8 sm:px-6 ${
                dir === 'next' ? 'sm:items-end sm:border-l sm:text-right' : ''
              }`}
            >
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
                {dir === 'prev' && <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />}
                {t(`projects.${dir}`)}
                {dir === 'next' && <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />}
              </span>
              <span className="font-display text-2xl font-extrabold text-ink transition-colors group-hover:text-white md:text-3xl">{p.title}</span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center py-10">
          <button type="button" onClick={back} className="btn-ghost">
            <ArrowLeft size={15} /> {t('projects.back')}
          </button>
        </div>
      </nav>
    </article>
  )
}
