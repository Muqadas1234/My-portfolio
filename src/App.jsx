import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import Workflow from './components/sections/Workflow'
import { initGA, logPageView } from './utils/analytics'

export default function App() {
  useEffect(() => {
    initGA('G-MF50C45N00')
    logPageView()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Workflow />
      </main>
      <Footer />
    </>
  )
}
