import React from "react"
import "../../styles/projects.css"
import { data } from "./data"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="section-title">
        <h1 className="title" data-title="PROJECTS">
          projects
        </h1>
      </div>

      <div className="projects-container">
        {data.map((project, index) => {
          if (index < 6) {
            return <Project key={index} {...project} />
          }
        })}
      </div>

      <Link to="/projects" className="btn">
        See more
      </Link>
    </div>
  )
}

export default Projects
