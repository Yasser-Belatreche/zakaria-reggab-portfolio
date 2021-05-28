import React from "react"
import NavBar from "../../components/projects/Pages-nav"
import ProjectPage from "../../components/projects/SingleProjectPage/ProjectPage"
import { data } from "../../components/projects/data"
import Footer from "../../components/footer/Footer"
// import {pageContext} from "gatsby"

export default function Project({ pageContext }) {
  const { name } = pageContext

  const targetProject = data.filter(project => name === project.name)

  return (
    <>
      <NavBar />
      <ProjectPage {...targetProject[0]} />
      <Footer />
    </>
  )
}
