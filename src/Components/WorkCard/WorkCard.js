import React from 'react'
import { NavLink } from 'react-router-dom'
import './Work.css';
function WorkCard({src,title,text,link}) {
  return (
    <div className="project-card">
      <img src={src} style={{width:'auto',height:'400px'}} alt="image" />
      <h2 className='project-title' >{title}</h2>
      <div className="project-details">
        <p>{text}</p>
        <div className="project-buttons">
          <NavLink to={link} className="btn">source</NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard