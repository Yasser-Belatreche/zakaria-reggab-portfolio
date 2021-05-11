import React from "react"

const Achivement = ({ icon, text, number }) => {
  return (
    <div className="achivement">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="text">
        <h1 className="number">{number}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Achivement
