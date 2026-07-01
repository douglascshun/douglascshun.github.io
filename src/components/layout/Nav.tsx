import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoc } from '../../i18n/useLoc'
import LangToggle from './LangToggle'

const SECTIONS = ['about', 'path', 'courses', 'skills', 'certs', 'projects', 'feed', 'contact'] as const

export default function Nav() {
  const { t } = useLoc()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [location.pathname])

  const go = (id: string) => {
    setOpen(false)
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(scroll, 60)
    } else {
      scroll()
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-base-900/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <button onClick={() => go('hero')} className="group flex items-center gap-2 font-mono text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-neon/40 bg-neon/10 text-neon shadow-glow-sm">
            ◉
          </span>
          <span className="text-ink">
            <span className="text-neon">~/</span>douglas
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors ${
                active === id && location.pathname === '/'
                  ? 'text-neon-soft'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {t(`nav.${id}`)}
            </button>
          ))}
          <div className="ml-2">
            <LangToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t('a11y.menu')}
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-base-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="grid grid-cols-2 gap-1 px-5 py-4">
              {SECTIONS.map((id) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="rounded-md px-3 py-2 text-left font-mono text-sm text-ink-muted hover:bg-white/5 hover:text-ink"
                >
                  <span className="text-neon">▸</span> {t(`nav.${id}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
