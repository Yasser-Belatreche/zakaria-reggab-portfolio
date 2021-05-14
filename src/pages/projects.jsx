import React from "react"
import NavBar from "../components/projects/Pages-nav"
import Projects from "../components/projects/AllProjectsPage/ProjectsPage"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <Projects />
      <Footer />
    </>
  )
}
