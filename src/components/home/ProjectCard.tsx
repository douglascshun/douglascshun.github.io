import type { PointerEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { useLoc } from '../../i18n/useLoc'
import { Corners, spotMove, spotVar } from '../motion/Spot'
import { EASE, inView } from '../motion/variants'

type Props = { project: Project; index: number; featured?: boolean; className?: string }

export default function ProjectCard({ project, index, featured, className }: Props) {
  const { t, L } = useLoc()
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 220, damping: 22 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), { stiffness: 220, damping: 22 })

  const onMove = (e: PointerEvent<HTMLElement>) => {
    spotMove(e)
    if (reduce || e.pointerType !== 'mouse') return
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.7, delay: (index % 3) * 0.09, ease: EASE }}
      style={{ rotateX, rotateY, transformPerspective: 1200, ...spotVar(project.accent) }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`group relative ${className ?? ''}`}
    >
      <Link
        to={`/projeto/${project.slug}`}
        className={`panel spot reticle flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-white/20 ${
          featured ? 'min-h-[340px] p-7 md:p-9' : 'min-h-[300px] p-6'
        }`}
      >
        <Corners />
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-[0.18] transition-transform duration-500 ease-out group-hover:scale-x-100"
          style={{ background: project.accent }}
        />
        <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
          <span className="flex items-center gap-2" style={{ color: project.accent }}>
            <span className="h-1.5 w-1.5" style={{ background: project.accent }} />
            {L(project.category)}
          </span>
          <span className="text-ink-muted">{project.year}</span>
        </div>

        <h3
          className={`relative mt-8 font-display font-extrabold leading-[1.02] text-ink transition-colors group-hover:text-white ${
            featured ? 'text-3xl md:text-[2.6rem]' : 'text-2xl'
          }`}
        >
          {project.title}
        </h3>
        <p className={`relative mt-3 text-ink-muted ${featured ? 'max-w-md text-lg' : 'text-[15px]'}`}>{L(project.tagline)}</p>
        {featured && <p className="relative mt-3 max-w-lg text-[15px] leading-relaxed text-ink-faint">{L(project.summary)}</p>}

        <div className="relative mt-auto pt-8">
          <p className="font-mono text-[12px] leading-relaxed text-ink-muted">
            {project.tech.slice(0, featured ? 6 : 4).join(' / ')}
            {!featured && project.tech.length > 4 && <span className="text-ink-faint"> +{project.tech.length - 4}</span>}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 font-mono text-xs">
            <span className="text-ink transition-colors group-hover:text-white">{t('projects.open')}</span>
            <ArrowUpRight
              size={18}
              className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
