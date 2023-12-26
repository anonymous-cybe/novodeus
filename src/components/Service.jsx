import React from 'react'
import craftIcon from '../assets/craftingIcon.png'
import developmentIcon from '../assets/development.png'
import modernproduct from '../assets/modernproduct.png'
import uiuxIcon from '../assets/uiuxIcon.png'




function Service() {
  return (
    <div className='container'>
        <div className='service-container'>
        <div className='service-wrapper'>
            <div className='left'>
                <div>
                    <h3>Services</h3>
                    <h2>From Vision to Reality</h2>
                    <h4>Our services transcend the ordinary. From revolutionary digital experiences to immersive brand experiences and cutting-edge development, we sculpt brillance into every pixel. </h4>
                    <button>Start a Project</button>
                </div>
            </div>
            <div className='middle'>
              <div className='top'>
                <img src={craftIcon} alt='novodeus'/>
                <div>
                  <h3>crafting Brands</h3>
                </div>
                <div>
                  <ul>
                    <li>Brand story</li>
                    <li>Visual Identity</li>
                    <li>Brand guildlines</li>
                  </ul>
                </div>
              </div>
              <div className='bottom'>
                <img src={developmentIcon} alt='novodeus'/>
                <div>
                  <h3>Development</h3>
                </div>
                <div>
                  <ul>
                    <li>Mobile App Development</li>
                    <li>Website Design</li>
                    <li>MVP</li>
                    <li>Full-stack development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='right'>
            <div className='top'>
                <img src={uiuxIcon} alt='novodeus'/>
                <div>
                  <h3>UI/UX</h3>
                </div>
                <div>
                  <ul>
                    <li>User Interface Design</li>
                    <li>User Experience Design</li>
                    <li>Interaction Design</li>
                    <li>UX Writing</li>
                    <li>Research</li>
                    <li>Design System</li>
                  </ul>
                </div>
              </div>
              <div className='bottom'>
                <img src={modernproduct} alt='novodeus'/>
                <div>
                  <h3>Modern Products</h3>
                </div>
                <div>
                  <ul>
                    <li>Fintech</li>
                    <li>SaaS</li>
                    <li>Web3</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Service