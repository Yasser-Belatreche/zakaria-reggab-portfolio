import React from "react"

const Project = ({ img, name }) => {
  return (
    <div className="project">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Project
