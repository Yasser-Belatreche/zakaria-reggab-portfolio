import React from "react"
import Fade from "react-reveal/Fade"

const Contact = ({ name, icon, desc }) => {
  return (
    <Fade bottom style={{ maxWidth: "360px" }}>
      <div className="contact">
        <div className="icon">{icon}</div>
        <h1 className="contact-name">{name}</h1>
        <p className="desc">{desc}</p>
      </div>
    </Fade>
  )
}

export default Contact
