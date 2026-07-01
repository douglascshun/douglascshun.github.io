import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Timeline from '../components/home/Timeline'
import Courses from '../components/home/Courses'
import SkillsMatrix from '../components/home/SkillsMatrix'
import Certifications from '../components/home/Certifications'
import ProjectsGrid from '../components/home/ProjectsGrid'
import LinkedInFeed from '../components/home/LinkedInFeed'
import Contact from '../components/home/Contact'

const Divider = () => (
  <div className="mx-auto max-w-6xl px-5">
    <div className="divider-neon" />
  </div>
)

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Divider />
      <Timeline />
      <Divider />
      <Courses />
      <Divider />
      <SkillsMatrix />
      <Divider />
      <Certifications />
      <Divider />
      <ProjectsGrid />
      <Divider />
      <LinkedInFeed />
      <Divider />
      <Contact />
    </>
  )
}
