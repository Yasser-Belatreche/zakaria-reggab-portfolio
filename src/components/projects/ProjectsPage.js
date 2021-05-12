import React, { useRef, useEffect, useState } from "react"
import "../../styles/projects.css"
import { data } from "./data"
import Project from "./Project"
import { Link } from "gatsby"
import logo from "../../images/184003857_506318487171458_7783588791377115635_n.png"

const Projects = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false)
  const navbar = useRef()

  useEffect(() => {
    navbar.current.style.background = "#0a0908"
    navbar.current.style.boxShadow = "0px 0px 5px 0px #f2f4f320"
  }, [])

  return (
    <>
      <div className="navbar" ref={navbar}>
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* phone nav */}
          <div className="phone-nav">
            <div className="bars" onClick={() => setIsLinksOpen(!isLinksOpen)}>
              <div className="bar top"></div>
              <div className="bar mid"></div>
              <div className="bar bottom"></div>
            </div>

            <div className={`links ${isLinksOpen ? "show" : ""}`}>
              <Link to="/" className="link">
                <button>BACK HOME</button>
              </Link>
            </div>
          </div>

          {/* desktop nav */}
          <div className="desktop-nav">
            <div className="links">
              <div className="link">
                <Link to="/">
                  <button>BACK HOME</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="projects page"
        id="projects"
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
