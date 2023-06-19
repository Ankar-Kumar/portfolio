import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
function Navbar() {
  const [click, setclick] = useState(false);
  const [color, setColor] = useState(false);
  const handleCLick=()=>setclick(!click);
  const changeColor=()=>{
    if(window.scrollY>100){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll",changeColor);
  return (
		<div>
			<div className={color ? 'header header-bg' : 'header'}>
				<Link to='/'>
					{/* <img className='avatar' alt="" src={Profile}/> */}

					<h1 style={{marginLeft:"20px"}}>Losser</h1>
				</Link>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<Link to='/'>Home</Link>
					</li>

					<li>
						<Link to='/project'>Project</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
				<div className='hamburger' onClick={handleCLick}>
					{click ? 
						<FaTimes size={20} style={{ color: 'white' }}></FaTimes>
					: 
						<FaBars size={20} style={{ color: 'white' }} />
					}
				</div>
			</div>
		</div>
	);
}

export default Navbar