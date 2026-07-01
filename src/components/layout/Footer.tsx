import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons/Brand'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'

export default function Footer() {
  const { t } = useLoc()
  const year = 2026

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
        <div className="font-mono text-xs text-ink-faint">
          <span className="text-neon">◉</span> {profile.name} · © {year}
        </div>
        <div className="font-mono text-[11px] text-ink-faint">{t('footer.built')}</div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/douglascshun" target="_blank" rel="noreferrer" className="text-ink-muted transition-colors hover:text-neon" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/douglas-cshunderlick/" target="_blank" rel="noreferrer" className="text-ink-muted transition-colors hover:text-neon" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:douglascshun@gmail.com" className="text-ink-muted transition-colors hover:text-neon" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
