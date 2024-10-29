import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import StarryBackground from './components/StarryBackground'

function App() {
  return (
    <>
      <StarryBackground />
      <Hero />
      <About />
      <Project />
    </>
  )
}

export default App