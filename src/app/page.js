import Aboutme from './sections/Aboutme'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects/Projects'
import SkillsPage from './sections/Skills'

export default function Home() {
  return (
    <>
      <Hero />
      <Aboutme />
      <SkillsPage />
      <Projects />
      <Contact />
    </>
  )
}
