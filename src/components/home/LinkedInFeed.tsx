import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { LinkedinIcon } from '../icons/Brand'
import { useLoc } from '../../i18n/useLoc'
import { linkedinPosts, linkedinProfile } from '../../data/linkedin'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'

export default function LinkedInFeed() {
  const { t, L } = useLoc()

  return (
    <Section id="feed" label={t('section.feedLabel')} title={t('section.feedTitle')} subtitle={t('feed.note')}>
      <div className="grid gap-4 md:grid-cols-2">
        {linkedinPosts.map((post, i) => (
          <motion.a
            key={i}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover group flex flex-col rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] text-ink-faint">
              <LinkedinIcon size={14} className="text-neon" />
              {post.date}
            </div>
            <h3 className="mt-3 font-bold leading-snug text-ink transition-colors group-hover:text-white">{L(post.title)}</h3>
            <p className="mt-2 flex-1 text-sm text-ink-muted">{L(post.excerpt)}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] text-neon-soft">
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 font-mono text-xs text-ink-muted transition-colors group-hover:text-neon">
                {t('feed.view')} <ArrowUpRight size={13} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <Reveal className="mt-6 flex justify-center">
        <a href={linkedinProfile} target="_blank" rel="noreferrer" className="btn-neon">
          <LinkedinIcon size={16} /> @douglas-cshunderlick
        </a>
      </Reveal>
    </Section>
  )
}
