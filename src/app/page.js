import Navbar from './components/Navbar'
import Contact from '../Pages/contact/page'
import HomePage from '@/Pages/homepage/page'
import About from '../Pages/about/page'
import Skills from '@/Pages/skill/page'
import Project from '@/Pages/project/page'
import 'aos/dist/aos.css';

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
        <Section id="Home" title="Home">
          <HomePage />
        </Section>

        <Section id="About" title="About">
          <About />
        </Section>

        <Section id="Skill" title="Skill" >
          <Skills  />
        </Section>

        <Section id="Project" title="project">
          <Project />
        </Section>

        <Section id="Contact" title="Contact">
          <Contact />
        </Section>
      </main>
    </>
  )
}
