import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from '../components/icons/Brand'
import { getProject, publicProjects } from '../data/projects'
import { projectContent } from '../content/projects'
import { useLoc } from '../i18n/useLoc'
import Reveal from '../components/motion/Reveal'
import NotFound from './NotFound'

export default function ProjectPage() {
  const { slug = '' } = useParams()
  const { t, L } = useLoc()
  const project = getProject(slug)
  const content = projectContent[slug]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  if (!project || !content) return <NotFound />

  const idx = publicProjects.findIndex((p) => p.slug === slug)
  const next = publicProjects[(idx + 1) % publicProjects.length]
  const prev = publicProjects[(idx - 1 + publicProjects.length) % publicProjects.length]

  return (
    <article className="pt-24">
      {/* Hero do projeto */}
      <header className="relative mx-auto max-w-5xl px-5">
        <div
          className="pointer-events-none absolute -top-10 left-1/2 h-64 w-[min(90%,700px)] -translate-x-1/2 rounded-full opacity-25 blur-[90px]"
          style={{ background: project.accent }}
        />
        <Reveal>
          <Link to="/#projects" className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-neon">
            <ArrowLeft size={14} /> {t('projects.back')}
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 flex items-center gap-3">
            <span
              className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider"
              style={{ color: project.accent, borderColor: `${project.accent}55`, background: `${project.accent}12` }}
            >
              {L(project.category)}
            </span>
            <span className="font-mono text-xs text-ink-faint">{project.year}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">{L(project.tagline)}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tch) => (
              <span key={tch} className="chip">{tch}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-neon">
              <GithubIcon size={16} /> {t('projects.repo')}
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <ExternalLink size={16} /> live
              </a>
            )}
          </div>
        </Reveal>
      </header>

      {/* Métricas */}
      {content.metrics && (
        <section className="mx-auto mt-14 max-w-5xl px-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {content.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-2xl font-extrabold" style={{ color: project.accent }}>{m.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">{L(m.label)}</div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Visão geral */}
      <section className="mx-auto mt-16 max-w-3xl px-5">
        <Reveal>
          <h2 className="section-label">{t('projects.overview')}</h2>
        </Reveal>
        {L(content.overview).map((para, i) => (
          <Reveal key={i} delay={0.05 * (i + 1)}>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">{para}</p>
          </Reveal>
        ))}
      </section>

      {/* Problema → solução */}
      {content.problem && (
        <section className="mx-auto mt-16 max-w-5xl px-5">
          <Reveal>
            <h2 className="section-label mb-6">{t('projects.problem')}</h2>
          </Reveal>
          <div className="space-y-3">
            {content.problem.map((row, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="glass grid items-center gap-3 rounded-2xl p-5 md:grid-cols-3">
                  <div className="text-sm text-signal-red/90"><span className="font-mono text-[10px] uppercase text-ink-faint">problema</span><br />{L(row.challenge)}</div>
                  <div className="text-sm text-neon-soft"><span className="font-mono text-[10px] uppercase text-ink-faint">solução</span><br />{L(row.solution)}</div>
                  {row.benefit && <div className="text-sm text-signal-green"><span className="font-mono text-[10px] uppercase text-ink-faint">benefício</span><br />{L(row.benefit)}</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Destaques */}
      <section className="mx-auto mt-16 max-w-5xl px-5">
        <Reveal>
          <h2 className="section-label mb-6 flex items-center gap-2">
            <Sparkles size={14} /> {t('projects.highlights')}
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.highlights.map((h, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="glass glass-hover h-full rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: project.accent, boxShadow: `0 0 10px ${project.accent}` }} />
                  <h3 className="font-bold text-ink">{L(h.title)}</h3>
                </div>
                <p className="mt-2 text-sm text-ink-muted">{L(h.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Seções extras */}
      {content.sections?.map((sec, i) => (
        <section key={i} className="mx-auto mt-16 max-w-3xl px-5">
          <Reveal>
            <h2 className="text-xl font-bold text-ink">{L(sec.title)}</h2>
          </Reveal>
          {L(sec.body).map((para, j) => (
            <Reveal key={j} delay={0.05 * (j + 1)}>
              <p className="mt-3 flex gap-2 text-ink-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} />
                {para}
              </p>
            </Reveal>
          ))}
        </section>
      ))}

      {/* Navegação prev/next */}
      <nav className="mx-auto mt-20 max-w-5xl px-5">
        <div className="divider-neon mb-6" />
        <div className="flex items-center justify-between gap-4">
          <Link to={`/projeto/${prev.slug}`} className="btn-ghost">
            <ArrowLeft size={15} /> <span className="hidden sm:inline">{prev.title}</span><span className="sm:hidden">{t('projects.prev')}</span>
          </Link>
          <Link to="/#projects" className="font-mono text-xs text-ink-muted hover:text-neon">{t('projects.back')}</Link>
          <Link to={`/projeto/${next.slug}`} className="btn-ghost">
            <span className="hidden sm:inline">{next.title}</span><span className="sm:hidden">{t('projects.next')}</span> <ArrowRight size={15} />
          </Link>
        </div>
      </nav>
    </article>
  )
}
