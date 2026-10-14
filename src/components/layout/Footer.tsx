import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons/Brand'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'
import { servicesUrl } from '../../lib/links'
import { scrollToY } from '../../lib/scroll'

export default function Footer() {
  const { t } = useLoc()
  const icon = 'grid h-11 w-11 place-items-center text-ink-muted transition-colors hover:text-white'

  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-24 pt-10 md:grid-cols-[1fr_auto_auto] md:items-center md:pb-10 md:pr-24">
        <div className="font-mono text-xs text-ink-muted">
          <span className="text-neon">~/</span>douglas · {profile.name} · © 2026
          <div className="mt-1 text-ink-faint">{t('footer.built')}</div>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 font-mono text-xs">
          <a href={servicesUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-[44px] items-center gap-1 text-ink-muted hover:text-white">
            <span className="link-u">{t('ui.services')}</span>
            <ArrowUpRight size={13} />
          </a>
          <button type="button" onClick={() => scrollToY(0)} className="inline-flex min-h-[44px] items-center text-ink-muted hover:text-white">
            <span className="link-u">{t('ui.backTop')}</span>
          </button>
        </div>
        <div className="-ml-3 flex items-center md:ml-0">
          <a href="https://github.com/douglascshun" target="_blank" rel="noreferrer" className={icon} aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/cshunderlick/" target="_blank" rel="noreferrer" className={icon} aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:douglascshunderlick@gmail.com" className={icon} aria-label="E-mail">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
