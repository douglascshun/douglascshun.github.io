import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useLoc } from '../../i18n/useLoc'
import { scrollToY } from '../../lib/scroll'

/** Botão de voltar ao topo com anel de progresso; aparece depois da primeira dobra. */
export default function BackToTop() {
  const { t } = useLoc()
  const { scrollY, scrollYProgress } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > window.innerHeight * 0.9))

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => scrollToY(0)}
          aria-label={t('ui.backTop')}
          title={t('ui.backTop')}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="group fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center border border-white/15 bg-base-800/90 text-ink backdrop-blur transition-colors hover:border-neon hover:text-white md:bottom-8 md:right-8"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
            <motion.rect
              x="1"
              y="1"
              width="46"
              height="46"
              fill="none"
              stroke="#1987F0"
              strokeWidth="2"
              pathLength={1}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
