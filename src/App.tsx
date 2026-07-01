import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import NeonGrid from './components/background/NeonGrid'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'

/** Rola até a âncora quando a URL tem hash (ex.: /#projects). */
function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60)
    }
  }, [location])
  return null
}

export default function App() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <>
      <NeonGrid />
      <ScrollProgress />
      <Nav />
      <ScrollManager />

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projeto/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}
