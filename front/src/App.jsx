import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import StarryBackground from './components/StarryBackground'
import Timeline from './components/Timejine'

function App() {
  return (
    <>
      <StarryBackground />
      <Hero />
      <About />
      <Timeline />
      <Project />
    </>
  )
}

export default App