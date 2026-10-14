import { Suspense, lazy, useEffect, useLayoutEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import NeonGrid from './components/background/NeonGrid'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import BackToTop from './components/layout/BackToTop'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { initSmoothScroll, saveHomeScroll } from './lib/scroll'
import { EASE } from './components/motion/variants'
import { useLoc } from './i18n/useLoc'

const ProjectPage = lazy(() => import('./pages/ProjectPage'))

/** Guarda a posição da Home ao sair dela (para o retorno cair no mesmo ponto). */
function ScrollMemory() {
  const { pathname } = useLocation()
  const prev = useRef(pathname)
  useLayoutEffect(() => {
    if (prev.current === '/' && pathname !== '/') saveHomeScroll()
    prev.current = pathname
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  const { t, lang } = useLoc()

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    return initSmoothScroll()
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [lang])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="fixed left-3 top-3 z-[60] -translate-y-20 bg-neon px-4 py-3 font-mono text-sm text-white transition-transform focus:translate-y-0"
      >
        {t('ui.skip')}
      </a>
      <NeonGrid />
      <ScrollProgress />
      <Nav />
      <ScrollMemory />

      <main id="conteudo" className="min-h-screen" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } }}
          >
            <Suspense fallback={<div className="min-h-screen" />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projeto/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
        {/* Feixe que varre a tela a cada troca de página */}
        <AnimatePresence>
          <motion.div
            key={`beam-${location.pathname}`}
            aria-hidden
            className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-neon-soft shadow-glow"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0, transition: { duration: 0.9, ease: EASE, opacity: { delay: 0.5, duration: 0.4 } } }}
          />
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
