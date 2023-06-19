import React from 'react'
import './Footer.css'
import {
	FaHome,
	FaMailBulk,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='location'>
						<FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
						<div>
							<p>University of Rajshahi</p>
							<p>Rajshahi 6205,Bangladesh</p>
						</div>
					</div>
					<div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
							ankarkumarankar572@gmail.com
						</h4>
					</div>
				</div>

				<div className='right'>
					<div className='social'>
						<Link to='https://www.facebook.com/ankar.kumar.545/'>
							<FaFacebook
								size={30}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
						</Link>
						<FaTwitter
							size={30}
							style={{ color: '#fff', marginRight: '2rem' }}
						/>
						<Link to='https://www.linkedin.com/in/ankar-kumar-saha-175b871b9/'>
							<FaLinkedin
								size={30}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
						</Link>
						<Link to='https://github.com/ankar-kumar'>
							<FaGithub
								size={30}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer