import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroText from '../Components/Hero/HeroText'
import Work from '../Components/WorkCard/Work'
import Footer from '../Components/Footer/Footer'

function Project() {
  return (
    <div>
        <Navbar/>
        <HeroText heading="PROJECT" text="some project which I do"/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Project