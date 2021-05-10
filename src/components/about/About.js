import React from "react"
import "../../styles/about.css"
import img from "../../images/mubariz-mehdizadeh-Py8F6-hRn5o-unsplash.jpg"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="section-title">
        <h1 className="title" data-title="ABOUT">
          About me
        </h1>
      </div>
      <div className="img">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
        <a href="#" className="btn">
          My Resume
        </a>
      </div>
    </div>
  )
}

export default About
