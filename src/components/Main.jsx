import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import ContectForm from './ContectForm'

function Main() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'50px'}}>
    <About />
    <Skills />
    <Projects limit={4}/>
    <Experience />
    <ContectForm />
    </div>
  )
}

export default Main