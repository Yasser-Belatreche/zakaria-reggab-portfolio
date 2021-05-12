import React from "react"
import "../../styles/skills.css"
import Skill from "./Skill"
import { data } from "./data"
import Fade from "react-reveal/Fade"

const Skills = () => {
  return (
    <div className="skills">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title" data-title="SKILLS">
            Skills
          </h1>
        </div>
      </Fade>

      <div className="skills-container">
        {data.map((skill, index) => {
          return <Skill key={index} {...skill} />
        })}
      </div>
    </div>
  )
}

export default Skills
