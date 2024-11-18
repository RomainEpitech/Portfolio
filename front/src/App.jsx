import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import StarryBackground from './components/StarryBackground'
import Timeline from './components/Timejine'
import Expertise from './components/Expertise'

function App() {
  return (
    <>
      <StarryBackground />
      <Hero />
      <About />
      <Expertise />
      <Timeline />
      <Project />
    </>
  )
}

export default App