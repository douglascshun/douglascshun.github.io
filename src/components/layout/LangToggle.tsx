import { motion } from 'framer-motion'
import { useLoc } from '../../i18n/useLoc'

/** Alterna PT/EN (persistido em localStorage). */
export default function LangToggle({ id = 'lang' }: { id?: string }) {
  const { lang, setLang, t } = useLoc()
  return (
    <div className="flex items-center border border-white/15 font-mono text-xs" role="group" aria-label={t('a11y.toggleLang')}>
      {(['pt', 'en'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`relative grid h-10 min-w-[44px] place-items-center px-2 uppercase transition-colors ${
            lang === code ? 'text-white' : 'text-ink-muted hover:text-ink'
          }`}
        >
          {lang === code && (
            <motion.span layoutId={`${id}-pill`} className="absolute inset-0 bg-neon/25" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />
          )}
          <span className="relative">{code}</span>
        </button>
      ))}
    </div>
  )
}
