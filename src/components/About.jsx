import React from "react"
import fiber from "../assets/fiber.png"
import itura from "../assets/itura.png"
import middleman from "../assets/middleman.png"
import spraay from "../assets/spraay.png"
import yellowrectangle from "../assets/yellowrectangle.svg"
import blackrectangle from "../assets/blackrectangle.svg"
import aboutpic from "../assets/aboutpic.svg"
import aboutpinpic from "../assets/aboutpinpic.svg"
import "../styles/about.css"

function About() {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-wrapper">
        <div className="aboutUs-intro">
          <p className="about-intro">
            We are not just an agency; we are pioneers of design evolution. We
            suclpt digital Landscapes, breathe life into brands,and engineer
            experience that resonate.{" "}
          </p>
        </div>
        <div className="aboutUs-products-container">
          <div className="companies-intro">
            <div className="line-left"></div>
            <p>We Have designed and built product for</p>
            <div className="line-right"></div>
          </div>
          <div className="companies">
            <span>
              <img src={fiber} alt="novodeus" />
            </span>
            <span>
              <img src={middleman} alt="novodeus" />
            </span>
            <span>
              <img src={itura} alt="novodeus" />
            </span>
            <span>
              <img src={spraay} alt="novodeus" />
            </span>
          </div>
        </div>
        <div className="aboutUs-why-container">
          <div className="aboutus-img">
            ggg
            {/* <img src={blackrectangle} className="blackrect" alt="novodeus"/>
            <img src={yellowrectangle} className="yellowrect" alt="novodeus"/>
            <img src={aboutpic} className="aboutpic" alt="novodeus"/>
            <img src={aboutpinpic} className="aboutpin"alt="novodeus"/> */}
          </div>
           <div className="aboutUs-text">
            <span className="whychoose">Why Choose Novodeus</span>
            <span className="innovationfuelled">Innovation-Fuelled Solutions Tailored for You</span>
            <div>
              <span className="aboutUs-why-title">
                Tailored Solutions for Your Vision
              </span>
              <span className="aboutUs-why-subtext">
                We believe in the power of bespoke solutions. Our team works
                closely with you, understanding your vision, and tailoring
                strategies that bring your ideas to life in ways that surpass
                expectati
              </span>
              <span className="aboutUs-why-title">
                Agile Methodologies for Rapid Results
              </span>
              <span className="aboutUs-why-subtext">
                Novodeus operates with agility. We adapt swiftly to industry
                trends, ensuring timely delivery of solutions that stay ahead in
                a rapidly changing landscape.
              </span>
              <span className="aboutUs-why-title">
                Collaborative, Client-Centric Approach
              </span>
              <span className="aboutUs-why-subtext">
                Your triumph is our focal point. We collaborate closely, placing
                you at the core of each decision to align strategies with your
                brand's aspirations.
              </span>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default About
