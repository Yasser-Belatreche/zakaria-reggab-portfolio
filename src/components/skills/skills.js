import React from "react"
import "../../styles/skills.css"
import Skill from "./Skill"
import { data } from "./data"

const Skills = () => {
  return (
    <div className="skills">
      <div className="section-title">
        <h1 className="title" data-title="SKILLS">
          Skills
        </h1>
      </div>

      <div className="skills-container">
        {data.map((skill, index) => {
          return <Skill key={index} {...skill} />
        })}
      </div>
    </div>
  )
}

export default Skills
