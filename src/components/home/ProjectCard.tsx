import type { PointerEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { useLoc } from '../../i18n/useLoc'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, L } = useLoc()
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="group relative [transform-style:preserve-3d]"
    >
      <Link
        to={`/projeto/${project.slug}`}
        className="glass block h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20"
        style={{ boxShadow: 'none' }}
      >
        {/* glow accent */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: project.accent }}
        />
        <div className="relative flex items-center justify-between">
          <span
            className="rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
            style={{ color: project.accent, borderColor: `${project.accent}55`, background: `${project.accent}12` }}
          >
            {L(project.category)}
          </span>
          <span className="font-mono text-[11px] text-ink-faint">{project.year}</span>
        </div>

        <h3 className="relative mt-5 text-xl font-bold text-ink transition-colors group-hover:text-white">
          {project.title}
        </h3>
        <p className="relative mt-2 text-sm text-ink-muted">{L(project.tagline)}</p>

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tch) => (
            <span key={tch} className="chip">
              {tch}
            </span>
          ))}
          {project.tech.length > 4 && <span className="chip">+{project.tech.length - 4}</span>}
        </div>

        <div className="relative mt-6 flex items-center gap-1.5 font-mono text-xs text-neon-soft">
          {t('projects.open')}
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* underline accent on hover */}
        <span
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        />
      </Link>
    </motion.article>
  )
}
