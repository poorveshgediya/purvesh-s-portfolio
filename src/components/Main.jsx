import React from 'react'
import About from './About'
import Navbar from './Navbar'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import ContectForm from './ContectForm'
import Footer from './Footer'

function Main() {
  return (
    <>
    <Navbar />
    <div style={{display:'flex', flexDirection:'column', gap:'50px'}}>
    <About />
    <Skills />
    <Projects />
    <Experience />
    <ContectForm />
    <Footer />
    </div>
    </>
  )
}

export default Main