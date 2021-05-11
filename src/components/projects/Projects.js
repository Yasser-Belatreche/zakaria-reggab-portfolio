import React from "react"
import "../../styles/projects.css"
import { data } from "./data"
import Project from "./Project"

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
          return <Project key={index} {...project} />
        })}
      </div>

      <a href="#" className="btn">
        See more
      </a>
    </div>
  )
}

export default Projects
