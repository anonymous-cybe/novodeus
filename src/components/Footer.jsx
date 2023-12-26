import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import footerLogo from '../assets/footerLogo.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <footer className="bg-primary text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <img src={footerLogo} alt="novodeus"/>

                <p>+012 345 6789</p>
                <p>Hello@novodeus.co</p>
                <h4>Connect with us</h4>

                
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Main Pages</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="" className="text-white">
                    Home
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                    Works
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                    About Us
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                    Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Services</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-white">
                    Branding
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                    Product Design
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                    Development
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                    Social Media Management
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            // style={{background-color: "rgba(0, 0, 0, 0.2)"}}
          >
            Novodeus©2023 
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
