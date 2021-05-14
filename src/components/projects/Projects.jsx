import React from "react"
import "../../styles/projects.css"
import { data } from "./data"
import Project from "./Project"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title" data-title="PROJECTS">
            projects
          </h1>
        </div>
      </Fade>

      <div className="projects-container">
        {data.map((project, index) => {
          if (index < 6) {
            return <Project key={index} {...project} />
          }
        })}
      </div>

      <Fade bottom>
        <Link to="/projects" className="btn">
          See more
        </Link>
      </Fade>
    </div>
  )
}

export default Projects
