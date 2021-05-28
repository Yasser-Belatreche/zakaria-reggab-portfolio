import React from "react"
import ReactImageMagnify from "react-image-magnify"
import OtherProjects from "./OtherProjects"

const ProjectPage = ({ img, name, desc, author, type, timeToken }) => {
  return (
    <>
      <div className="project-page">
        <div className="project-container">
          <div className="img">
            <img src={img} alt="project pic" />
          </div>

          <div className="project-desc">
            <div className="project-name">
              <h1>{name}</h1>
            </div>

            <div className="about-project">
              <p>{desc}</p>
            </div>

            <div className="author">
              <div className="sub-title">
                <p>author : </p>
              </div>
              <p>{author}</p>
            </div>

            <div className="type">
              <div className="sub-title">
                <p>Type : </p>
              </div>
              <p>{type}</p>
            </div>

            <div className="time-token">
              <div className="sub-title">
                <p>Time Token : </p>
              </div>
              <p>{timeToken}</p>
            </div>
          </div>
        </div>

        <OtherProjects isProductsPage={true} />
      </div>
    </>
  )
}

export default ProjectPage
