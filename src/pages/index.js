import React from "react"
import NavBar from "../components/navbar/NavBar"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Skills from "../components/skills/skills"

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
    </>
  )
}
