import React from "react"
import logo from "../assets/logo.png"
import "../styles/header.css"

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logoLink-wrapper">
        <div className="logo">
          <img src={logo} alt="Novodeus" />
        </div>
        <div className="links">
          <div><a href="#">Home</a></div>
          <div><a href="#">Projects</a></div>
          <div><a href="#">About</a></div>
        </div>
        </div>
        <div className="contactUs">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Header
