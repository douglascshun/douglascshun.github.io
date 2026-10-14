import { useState } from 'react'
import type { ComponentType } from 'react'
import { Briefcase, Check, Copy, Crosshair, Mail, MessageCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons/Brand'
import { useLoc } from '../../i18n/useLoc'
import { profile } from '../../data/profile'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'

const icons: Record<string, ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  tryhackme: Crosshair,
  email: Mail,
  whatsapp: MessageCircle,
  services: Briefcase,
}

export default function Contact() {
  const { t } = useLoc()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('douglascshunderlick@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <Section id="contact" label={t('section.contactLabel')} title={t('section.contactTitle')} subtitle={t('contact.intro')}>
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.contacts.map((c, i) => {
          const Icon = icons[c.kind] ?? Mail
          return (
            <Reveal key={c.kind} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.kind === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon transition-all group-hover:shadow-glow-sm">
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">{c.label}</div>
                  <div className="truncate font-medium text-ink">{c.value}</div>
                </div>
                {c.kind === 'email' && (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      void copyEmail()
                    }}
                    className="flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 font-mono text-[11px] text-ink-muted transition-colors hover:text-neon"
                    aria-label={t('contact.copy')}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? t('contact.copied') : t('contact.copy')}
                  </button>
                )}
              </a>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
