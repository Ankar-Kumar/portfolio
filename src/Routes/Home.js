import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Work from '../Components/WorkCard/Work'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Work/>
        <Footer/>
        
    </div>
  )
}

export default Home