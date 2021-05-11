import React from "react"
import NavBar from "../components/navbar/NavBar"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Skills from "../components/skills/skills"
import Services from "../components/services/Services"
import Achivements from "../components/achivement/Achivements"
import Projects from "../components/projects/Projects"
import Testimonials from "../components/testimonials/Testimonials"
import Contact from "../components/contact/Contacts"

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Achivements />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}
