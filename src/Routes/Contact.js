import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroText from '../Components/Hero/HeroText'
import Form from '../Components/Form/Form'
import Footer from '../Components/Footer/Footer'

function Contact() {
  return (
    <div>
        <Navbar/>
        <HeroText heading="contact" text="lets have a chat"/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact