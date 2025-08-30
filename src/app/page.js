import Navbar from './components/Navbar'
import Contact from '../Pages/contact/page'
import HomePage from '@/Pages/homepage/page'
import About from '../Pages/about/page'
import Skills from '@/Pages/skill/page'
import Project from '@/Pages/project/page'

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className=" flex flex-col items-center justify-center bg-gray-50 "
  >
    {/* <h2 className="text-4xl font-bold mb-4">{title}</h2> */}
    {children}
  </section>
)

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section id="home" title="Home">
          <HomePage />
        </Section>

        <Section id="about" title="About">
          <About />
        </Section>

        <Section id="skill" title="Skill">
          <Skills />
        </Section>

        <Section id="project" title="project">
          <Project />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
    </>
  )
}
