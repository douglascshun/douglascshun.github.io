import { motion, useScroll, useSpring } from 'framer-motion'

/** Barra fina de progresso de leitura, fixa no topo. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.25 })
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-neon"
      style={{ scaleX }}
    />
  )
}
