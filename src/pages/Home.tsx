import { useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Timeline from '../components/home/Timeline'
import Courses from '../components/home/Courses'
import SkillsMatrix from '../components/home/SkillsMatrix'
import Certifications from '../components/home/Certifications'
import ProjectsGrid from '../components/home/ProjectsGrid'
import LinkedInFeed from '../components/home/LinkedInFeed'
import Contact from '../components/home/Contact'
import { readHomeScroll, scrollToId, scrollToY } from '../lib/scroll'

export default function Home() {
  const location = useLocation()
  const navType = useNavigationType()
  const restore = (location.state as { restore?: boolean } | null)?.restore

  // Chegada na Home: âncora (#secao), retorno de um projeto (mesma posição) ou topo.
  useLayoutEffect(() => {
    const id = location.hash.slice(1)
    if (id && id !== 'conteudo') {
      requestAnimationFrame(() => scrollToId(id, { immediate: navType === 'POP' }))
      return
    }
    const saved = readHomeScroll()
    if ((navType === 'POP' || restore) && saved !== null) scrollToY(saved, { immediate: true })
    else if (restore) requestAnimationFrame(() => scrollToId('projects', { immediate: true }))
    else if (navType !== 'POP') scrollToY(0, { immediate: true })
  }, [location.key]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Hero />
      <About />
      <ProjectsGrid />
      <Timeline />
      <SkillsMatrix />
      <Certifications />
      <Courses />
      <LinkedInFeed />
      <Contact />
    </>
  )
}
