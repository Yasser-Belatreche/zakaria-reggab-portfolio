import React from "react"
import NavBar from "../components/projects/Pages-nav"
import ProjectPage from "../components/projects/SingleProjectPage/ProjectPage"
import Footer from "../components/footer/Footer"
// import {pageContext} from "gatsby"

export default function Project({ pageContext }) {
  const { project } = pageContext
  console.log(project.id)
  return (
    <>
      <NavBar />
      <ProjectPage />
      <Footer />
    </>
  )
}
