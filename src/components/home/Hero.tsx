import { motion } from 'framer-motion'
import { ArrowDown, FolderGit2, User } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'
import Typewriter from '../motion/Typewriter'

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  const { t, L } = useLoc()

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center px-5 pt-20">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-6xl">
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-muted">
          <span className="h-2 w-2 rounded-full bg-signal-green shadow-[0_0_10px_#2ecc71]" />
          root@cshun:~$ <span className="text-ink">whoami</span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          <span className="bg-gradient-to-r from-neon-soft via-white to-neon-soft bg-clip-text text-transparent text-glow">
            Douglas
          </span>
          <br />
          <span className="text-ink">Cshunderlick</span>
        </motion.h1>

        <motion.div variants={item} className="mt-6 font-mono text-sm text-neon-soft sm:text-base">
          <span className="text-ink-faint">&gt; </span>
          <Typewriter text={t('hero.cmd')} startDelay={700} />
        </motion.div>

        <motion.p variants={item} className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
          {L(profile.role)}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-ink-muted">
          {t('hero.tagline')}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <button onClick={() => scrollTo('projects')} className="btn-neon">
            <FolderGit2 size={16} /> {t('hero.ctaProjects')}
          </button>
          <button onClick={() => scrollTo('about')} className="btn-ghost">
            <User size={16} /> {t('hero.ctaAbout')}
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute inset-x-0 bottom-8 mx-auto flex w-max flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint hover:text-neon"
        aria-label={t('hero.scroll')}
      >
        {t('hero.scroll')}
        <ArrowDown size={14} />
      </motion.button>
    </section>
  )
}
