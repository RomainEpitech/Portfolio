import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import StarryBackground from './components/StarryBackground'
import Timeline from './components/Timejine'
import Expertise from './components/Expertise'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <StarryBackground />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Timeline />
      <Project />
    </>
  )
}

export default App