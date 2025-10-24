import React from 'react'
import HeroSection from './HeroSection'
import ScrolBtn from './ScrolBtn'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

const MainContainer = () => {
  return (
    <div className='main'>
        <HeroSection/>
        <ScrolBtn/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default MainContainer