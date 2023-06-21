import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'
import resume from './resume.pdf'
function AboutContent() {
  return (
		<div className='about'>
			<div className='left'>
				<h1>Who Am I</h1>
				<p>
					I am a CSE 4th year student. Currently, I am learning Blockchain
					developing
				</p>
				<Link to={resume} target='_blank' download>
					<button className='btn'>Resume</button>
				</Link>
			</div>
			<div className='right'>
				<div className='img-container'>
					<div className='img-top'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmC-jRn8lDzc62dk2pXsdJopZpDXY8HEz0joY01RW&s'
							className='img'
							alt='Flutter'
						/>
					</div>
					<div className='img-bottom'>
						<img
							src='https://c8.alamy.com/comp/2H2TCX4/solidity-with-binary-code-digital-technology-background-abstract-background-with-program-code-and-solidity-programming-and-coding-technology-backgro-2H2TCX4.jpg'
							className='img'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutContent