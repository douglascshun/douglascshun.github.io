import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../icons/Brand'
import { useLoc } from '../../i18n/useLoc'
import { publicProjects } from '../../data/projects'
import Section from '../layout/Section'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid() {
  const { t } = useLoc()
  const featured = publicProjects.filter((p) => p.featured)
  const rest = publicProjects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      label={t('section.projectsLabel')}
      title={t('section.projectsTitle')}
      subtitle={t('section.projectsSub')}
      aside={
        <a
          href="https://github.com/douglascshun?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-[44px] items-center gap-2 font-mono text-sm text-ink-muted hover:text-white"
        >
          <GithubIcon size={16} />
          <span className="link-u">{t('projects.viewAll')}</span>
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      }
    >
      <div className="grid gap-4 md:grid-cols-6">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} featured className="md:col-span-3" />
        ))}
        {rest.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={featured.length + i} className="md:col-span-2" />
        ))}
      </div>
    </Section>
  )
}
