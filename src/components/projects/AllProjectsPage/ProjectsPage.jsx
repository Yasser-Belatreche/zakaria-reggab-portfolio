import React from "react"
import { data } from "../data"
import Project from "../Project"

const Projects = () => {
  return (
    <>
      <div
        className="projects page"
        style={{ backgroundColor: "#f2f4f3", color: "#0a0908" }}
      >
        <div className="section-title mt-20">
          <h1 className="title" data-title="PROJECTS">
            projects
          </h1>
        </div>

        <div className="projects-container">
          {data.map((project, index) => {
            return <Project key={index} {...project} />
          })}
        </div>
      </div>
    </>
  )
}

export default Projects
