import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Languages from './components/Languages'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'

function App() {


  return (
    <>
      <Nav />
      <Hero />
      
      <Router>
      
      
        <About title="about" subtitle="about"/>
        <Languages title="languages" subtitle="languages"/>
        <Projects title="projects" subtitle="projects"/>
        <WorkExperience title="experience" subtitle="experience"/>
        <Contact title="contact" subtitle="contact"/>
      </Router>
    </>
  )
}

export default App
