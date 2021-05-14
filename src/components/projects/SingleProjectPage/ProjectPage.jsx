import React from "react"
import img from "../../../images/180294940_603013727335423_3549318722084690379_n.jpg"
import OtherProjects from "./OtherProjects"

const ProjectPage = () => {
  return (
    <>
      <div className="project-page">
        <div className="project-container">
          <div className="img">
            <img src={img} alt="" />
          </div>

          <div className="project-desc">
            <div className="project-name">
              <h1>Project Name</h1>
            </div>

            <div className="about-project">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                debitis quisquam commodi rerum nostrum magnam explicabo at
                voluptates deserunt. Atque.
              </p>
            </div>

            <div className="author">
              <div className="sub-title">
                <p>author : </p>
              </div>
              <p>writer name</p>
            </div>

            <div className="type">
              <div className="sub-title">
                <p>Type : </p>
              </div>
              <p>project type</p>
            </div>

            <div className="time-token">
              <div className="sub-title">
                <p>Time Token : </p>
              </div>
              <p>2 days</p>
            </div>
          </div>
        </div>

        <OtherProjects />
      </div>
    </>
  )
}

export default ProjectPage
