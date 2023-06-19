import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutContent from '../Components/AboutContent/AboutContent'
import Footer from '../Components/Footer/Footer'
import HeroText from '../Components/Hero/HeroText'

function About() {
  return (
		<div>
			<Navbar />
			<HeroText
				heading='ABOUT'
				text='I am an undergraduate student
      of CSE. During my study, I learn something and with that I can make some simple things'
			/>
			<AboutContent />
			<Footer />
		</div>
	);
}

export default About