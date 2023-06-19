import React from 'react'
//G:\react\work\portfolio\src\assets
import HeroI from './hero.jpeg'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
function Hero() {
  return (
		<div>
			<div className='hero'>
				<div className='mask'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzRroHGRJHGVhe04XuU4JK7uuGNUFDvTmqloB36PRKfvSDB3HQot9AaFf7c94ULhcGlc&usqp=CAU'
						alt=''
						className='into-img'
					/>
				</div>

				<div className='content'>
					<h1>Hi , I am Ankar</h1>
					<br />
					<p>
						<Typical
							steps={[
								'Developer',
								1000,
								'Designer',
								1000,
								'Programmer',
								1000,
							]}
							loop={Infinity}
						/>
					</p>
					<h1>Undergraduate student, CSERU</h1>
					<Link to='/project' className='btn'>
						Projects
					</Link>
					<Link to='/contact' className='btn btn-light'>
						COntact
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero