import React from "react"

const Skill = ({ name, percentage }) => {
  return (
    <div className="skill">
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
    </div>
  )
}

export default Skill
