import React from 'react'
import Data from './WorkCardData'
import WorkCard from './WorkCard'
import './Work.css'
function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {
             Data.map((val,ind)=>{
              return (
                <WorkCard
                key={ind}
                src={val.src}
                title={val.title}
                text={val.text}
                link={val.link}
                />
              )
             })
           }
        </div>
     
    </div>
  )
}

export default Work