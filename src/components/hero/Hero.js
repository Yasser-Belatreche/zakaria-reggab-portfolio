import React from "react"
import { Link } from "gatsby"
import "../../styles/hero.css"
import Fade from "react-reveal/Fade"

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <Fade>
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
          <a href="#" className="btn primary">
            start a project
          </a>
          <Link to="/projects" className="btn">
            view my work
          </Link>
        </div>
      </Fade>
    </div>
  )
}

export default Hero
