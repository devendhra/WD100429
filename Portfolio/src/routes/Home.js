import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import ProjectHeroImg from '../components/ProjectHeroImg'
import Skills from '../components/Skills'
import Aboutme from '../components/Aboutme'
import Contact from '../components/Contact'
import Work from '../components/Work'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <Aboutme />
      <Skills />
      <ProjectHeroImg />
      <Work />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default Home