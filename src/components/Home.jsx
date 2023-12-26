import React from 'react'
import yellowrect from '../assets/yellowrect.png'
import purplerect from '../assets/purplerect.png'
import frontimg from '../assets/frontimg.svg'
import '../styles/home.css'

function Home() {
  return (
    <div className='home-container'>
        <div className='home-wrapper'>
        <div className='home-text'>
            <div className='text-title'><h2>We Turn Ideas Into<br/> <span>Immersive</span> <br/>Experiences.</h2></div>
            <div className='subtext'>Crafting Brands,Engineering Experiences,Pioneering<br/> Design Evolution</div>
            <button>Let's Talk</button>
        </div>
        <div className='home-image'>            
            <img src={purplerect} className='purplerect' alt='novodeus'/>
            <img src={yellowrect} className='yellowrect' alt='novodeus'/>
            <img src={frontimg} className='frontimg' alt='novodeus'/>
        </div>
        </div>
    </div>
  )
}

export default Home