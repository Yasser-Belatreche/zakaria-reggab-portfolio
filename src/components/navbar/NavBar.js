import React, { useState } from "react"
import "../../styles/navbar.css"
import logo from "../../images/184003857_506318487171458_7783588791377115635_n.png"

const NavBar = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* phone nav */}
        <div className="phone-nav" onClick={() => setIsLinksOpen(!isLinksOpen)}>
          <div className="bars">
            <div className="bar top"></div>
            <div className="bar mid"></div>
            <div className="bar bottom"></div>
          </div>

          <div className={`links ${isLinksOpen ? "show" : ""}`}>
            <div className="link">
              <button>HOME</button>
            </div>
            <div className="link">
              <button>ABOUT</button>
            </div>
            <div className="link">
              <button>SERVICES</button>
            </div>
            <div className="link">
              <button>PROJECTS</button>
            </div>
            <div className="link">
              <button>TESTIMONIALS</button>
            </div>
            <div className="link">
              <button>CONTACT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
