import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoc } from '../../i18n/useLoc'
import { lockScroll, scrollToId } from '../../lib/scroll'
import { servicesUrl } from '../../lib/links'
import { EASE } from '../motion/variants'
import LangToggle from './LangToggle'

/** Ordem igual à da Home. */
const SECTIONS = ['about', 'projects', 'path', 'skills', 'certs', 'courses', 'feed', 'contact'] as const

export default function Nav() {
  const { t } = useLoc()
  const navigate = useNavigate()
  const location = useLocation()
  const onHome = location.pathname === '/'
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const firstItem = useRef<HTMLButtonElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Scroll-spy por posição: robusto mesmo quando a Home monta depois da transição.
  useEffect(() => {
    let raf = 0
    const compute = () => {
      setScrolled(window.scrollY > 24)
      if (location.pathname !== '/') return setActive(null)
      const line = window.innerHeight * 0.38
      let current: string | null = null
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      setActive(atBottom ? 'contact' : current)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }
    compute()
    const late = setTimeout(compute, 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(late)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [location.pathname])

  // Menu mobile: trava o scroll, Esc fecha, foco entra no primeiro item e volta ao botão.
  useEffect(() => {
    if (!open) return
    lockScroll(true)
    const toggle = toggleRef.current
    firstItem.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      lockScroll(false)
      window.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [open])

  useEffect(() => setOpen(false), [location.pathname])

  const go = (id: string) => {
    setOpen(false)
    if (!onHome) navigate(`/#${id}`)
    else requestAnimationFrame(() => scrollToId(id))
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? 'border-b border-white/[0.08] bg-base-900/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="principal">
        <button
          type="button"
          onClick={() => go('hero')}
          className="group flex min-h-[44px] items-center gap-2 font-mono text-sm text-ink"
        >
          <span className="text-neon">~/</span>
          <span>douglas</span>
          <span className="ml-0.5 inline-block h-4 w-2 bg-neon animate-blink" aria-hidden />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center">
            {SECTIONS.map((id) => {
              const isActive = active === id
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => go(id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative px-3 py-3 font-mono text-[13px] transition-colors ${
                      isActive ? 'text-white' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {t(`nav.${id}`)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 bottom-1.5 h-[2px] bg-neon shadow-glow-sm"
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
            <li className="ml-1 border-l border-white/10 pl-1">
              <a
                href={servicesUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-3 font-mono text-[13px] text-ink-muted transition-colors hover:text-white"
              >
                {t('ui.services')}
                <ArrowUpRight size={13} aria-hidden />
              </a>
            </li>
          </ul>
          <div className="ml-3">
            <LangToggle id="lang-desk" />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle id="lang-mob" />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('ui.close') : t('a11y.menu')}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="grid h-11 w-11 place-items-center border border-white/15 text-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            key="menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: EASE }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto bg-base-900 lg:hidden"
          >
            <motion.ul
              className="mx-auto max-w-6xl px-5 py-6"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } } }}
            >
              {SECTIONS.map((id, i) => (
                <motion.li
                  key={id}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } } }}
                  className="border-b border-white/[0.07]"
                >
                  <button
                    ref={i === 0 ? firstItem : undefined}
                    type="button"
                    onClick={() => go(id)}
                    aria-current={active === id ? 'true' : undefined}
                    className="flex min-h-[56px] w-full items-center justify-between text-left"
                  >
                    <span className={`font-display text-2xl font-bold ${active === id ? 'text-neon-soft' : 'text-ink'}`}>
                      {t(`nav.${id}`)}
                    </span>
                    <span className="font-mono text-xs text-ink-faint">{active === id ? '●' : '/'}</span>
                  </button>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } } }}
              >
                <a
                  href={servicesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[56px] w-full items-center justify-between"
                >
                  <span className="font-display text-2xl font-bold text-ink-muted">{t('ui.services')}</span>
                  <ArrowUpRight size={18} className="text-ink-faint" aria-hidden />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
