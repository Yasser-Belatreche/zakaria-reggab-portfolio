import React from "react"

const Contact = ({ name, icon, desc }) => {
  return (
    <div className="contact">
      <div className="icon">{icon}</div>
      <h1 className="contact-name">{name}</h1>
      <p className="desc">{desc}</p>
    </div>
  )
}

export default Contact
