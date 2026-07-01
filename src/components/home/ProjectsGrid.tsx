import { GithubIcon } from '../icons/Brand'
import { useLoc } from '../../i18n/useLoc'
import { publicProjects } from '../../data/projects'
import Section from '../layout/Section'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid() {
  const { t } = useLoc()

  return (
    <Section id="projects" label={t('section.projectsLabel')} title={t('section.projectsTitle')} subtitle={t('section.projectsSub')}>
      <div className="grid gap-5 sm:grid-cols-2">
        {publicProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a href="https://github.com/douglascshun?tab=repositories" target="_blank" rel="noreferrer" className="btn-ghost">
          <GithubIcon size={16} /> {t('projects.viewAll')}
        </a>
      </div>
    </Section>
  )
}
