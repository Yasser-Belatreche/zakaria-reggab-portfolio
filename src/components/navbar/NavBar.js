import React, { useState, useEffect, useRef } from "react"
import "../../styles/navbar.css"
import logo from "../../images/184003857_506318487171458_7783588791377115635_n.png"

const NavBar = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false)
  const navbar = useRef()

  const scrollTo = section => {
    const targetSection = document.getElementById(section)
    const navheight = navbar.current.style.height + 40
    const topOffset = targetSection.offsetTop
    window.scrollTo(0, topOffset - navheight)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.current.style.background = "#0a0908"
        navbar.current.style.boxShadow = "0px 0px 5px 0px #f2f4f310"
      } else {
        navbar.current.style.background = "transparent"
        navbar.current.style.boxShadow = "none"
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="navbar" ref={navbar}>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* phone nav */}
        <div className="phone-nav">
          <div
            className={`bars ${isLinksOpen ? "transform" : ""}`}
            onClick={() => setIsLinksOpen(!isLinksOpen)}
          >
            <div className="bar top"></div>
            <div className="bar mid"></div>
            <div className="bar bottom"></div>
          </div>

          <div className={`links ${isLinksOpen ? "show" : ""}`}>
            <div
              className="link"
              onClick={() => {
                scrollTo("hero")
                setIsLinksOpen(false)
              }}
            >
              <button>HOME</button>
            </div>
            <div
              className="link"
              onClick={() => {
                scrollTo("about")
                setIsLinksOpen(false)
              }}
            >
              <button>ABOUT</button>
            </div>
            <div
              className="link"
              onClick={() => {
                scrollTo("services")
                setIsLinksOpen(false)
              }}
            >
              <button>SERVICES</button>
            </div>
            <div
              className="link"
              onClick={() => {
                scrollTo("projects")
                setIsLinksOpen(false)
              }}
            >
              <button>PROJECTS</button>
            </div>
            <div
              className="link"
              onClick={() => {
                scrollTo("testimonials")
                setIsLinksOpen(false)
              }}
            >
              <button>TESTIMONIALS</button>
            </div>
            <div
              className="link"
              onClick={() => {
                scrollTo("contacts")
                setIsLinksOpen(false)
              }}
            >
              <button>CONTACT</button>
            </div>
          </div>
        </div>

        {/* desktop nav */}
        <div className="desktop-nav">
          <div className="links">
            <div className="link" onClick={() => scrollTo("hero")}>
              <button>HOME</button>
            </div>
            <div className="link" onClick={() => scrollTo("about")}>
              <button>ABOUT</button>
            </div>
            <div className="link" onClick={() => scrollTo("services")}>
              <button>SERVICES</button>
            </div>
            <div className="link" onClick={() => scrollTo("projects")}>
              <button>PROJECTS</button>
            </div>
            <div className="link" onClick={() => scrollTo("testimonials")}>
              <button>TESTIMONIALS</button>
            </div>
            <div className="link" onClick={() => scrollTo("contacts")}>
              <button>CONTACT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
