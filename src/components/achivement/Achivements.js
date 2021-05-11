import React from "react"
import "../../styles/achivements.css"
import icon from "../../images/face.svg"

const Achivements = () => {
  return (
    <div className="achivements">
      <div className="achivements-container">
        <div className="achivement">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="text">
            <h1 className="number">70</h1>
            <p>completed project</p>
          </div>
        </div>
        <div className="achivement">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="text">
            <h1 className="number">70</h1>
            <p>completed project</p>
          </div>
        </div>
        <div className="achivement">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="text">
            <h1 className="number">70</h1>
            <p>completed project</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achivements
