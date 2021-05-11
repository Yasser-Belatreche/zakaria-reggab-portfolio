import React from "react"

const Service = ({ icon, name, desc }) => {
  return (
    <div className="service">
      <div className="icon">{icon}</div>
      <div className="service-name">
        <p>{name}</p>
      </div>
      <div className="service-desc">
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Service
