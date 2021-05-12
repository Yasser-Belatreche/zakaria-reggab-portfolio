import React from "react"
import { Link } from "gatsby"
import "../../styles/hero.css"

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="salutation">
        <p>Hi there! I am</p>
      </div>

      <div className="name">
        <h1>ZAKARIA REGGAB</h1>
      </div>

      <div className="desc">
        <h3>GRAPHIC DESIGNER</h3>
      </div>

      <div className="btns-container">
        <a href="#" className="btn">
          start a project
        </a>
        <Link to="/projects" className="btn">
          view my work
        </Link>
      </div>
    </div>
  )
}

export default Hero
