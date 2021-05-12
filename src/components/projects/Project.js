import React from "react"
import Fade from "react-reveal/Fade"

const Project = ({ img, name }) => {
  return (
    <Fade bottom>
      <div className="project">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="name">
          <p>{name}</p>
        </div>
      </div>
    </Fade>
  )
}

export default Project
