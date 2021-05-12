import React from "react"
import Fade from "react-reveal/Fade"

const Service = ({ icon, name, desc }) => {
  return (
    <Fade bottom style={{ maxWidth: "330px" }}>
      <div className="service">
        <div className="icon">{icon}</div>
        <div className="service-name">
          <p>{name}</p>
        </div>
        <div className="service-desc">
          <p>{desc}</p>
        </div>
      </div>
    </Fade>
  )
}

export default Service
