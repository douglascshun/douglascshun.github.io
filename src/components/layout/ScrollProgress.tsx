import { motion, useScroll, useSpring } from 'framer-motion'

/** Barra de progresso de scroll fixa no topo. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-neon via-neon-cyan to-neon shadow-glow-sm"
      style={{ scaleX }}
    />
  )
}
