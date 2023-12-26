import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

function Projects() {
  return (
    <div className='projects-container'>
        <div>
            <h2>Selected Projects</h2>
        </div>
        <div className='projects-image'>
            <img src={project1} alt='novodeus'/>
            <img src={project2} alt='novodeus'/>
            <img src={project3} alt='novodeus'/>
            <img src={project4} alt='novodeus'/>
        </div>

    </div>
  )
}

export default Projects