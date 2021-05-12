import React from "react"
import Fade from "react-reveal/Fade"

const Skill = ({ name, percentage }) => {
  return (
    <div className="skill">
      <Fade bottom>
        <div className="skill-head">
          <div className="skill-name">
            <p>{name}</p>
          </div>
          <div className="percentage">
            <p>{percentage}%</p>
          </div>
        </div>

        <div className="skill-bottom">
          <div
            className="skill-rectangle"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </Fade>
    </div>
  )
}

export default Skill
