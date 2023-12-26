import React from 'react'
import calltoaction from '../assets/calltoaction1.png'

function CallToAction() {
  return (
    <div className='container'>
      <div className='calltoaction-container'>
        <div className='calltoaction-wrapper'>
          <div className='left'>
            <h2>Ready to bring your vision to life</h2>
            <button>Let's Talk</button>
          </div>
          <div className='right'>
            <img src={calltoaction} alt='novodeus'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CallToAction