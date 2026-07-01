import { useLoc } from '../../i18n/useLoc'

/** Alterna PT/EN (persistido em localStorage). */
export default function LangToggle() {
  const { lang, setLang, t } = useLoc()

  return (
    <div
      className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 font-mono text-xs"
      role="group"
      aria-label={t('a11y.toggleLang')}
    >
      {(['pt', 'en'] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code ? 'bg-neon/20 text-neon-soft shadow-glow-sm' : 'text-ink-muted hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
