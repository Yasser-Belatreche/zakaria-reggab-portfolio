import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { data } from "../data"
import Project from "../Project"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { BsArrowRight } from "react-icons/bs"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

const ArrowLeft = ({ onClick }) => {
  return (
    <div className="arrow-left" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  )
}

const ArrowRight = ({ onClick }) => {
  return (
    <div className="arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  )
}

// generate 4 random product to put them in the other products section
let randomNumbers = []
let i = 0
while (i < 4) {
  const randomNumber = Math.floor(Math.random() * data.length)
  if (!randomNumbers.includes(randomNumber)) {
    i++
    randomNumbers.push(randomNumber)
  }
}

const newList = data.filter(product => randomNumbers.includes(product.id))

const OtherProjects = ({ isProductsPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [pause, setPause] = useState(false)
  const timer = useRef()

  const [sliderRef, slider] = useKeenSlider({
    spacing: 0,
    slidesPerView: 1,
    centered: true,
    loop: false,
    mode: "snap",
    duration: 1000,
    breakpoints: {
      "(min-width: 900px)": {
        slidesPerView: 3,
        centered: false,
      },
    },
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div className="other-projects">
      <div className="head">
        <h1 className="sub-title">other projects</h1>
      </div>

      <div className="projects-container relative">
        <Link to="/projects" className="see-all absolute right-0 -top-10">
          See More <BsArrowRight className="ml-1" />
        </Link>
        <div className="keen-slider" ref={sliderRef}>
          {newList.map((project, index) => {
            return (
              <div key={index} className="keen-slider__slide">
                <Project {...project} isProductsPage={isProductsPage} />
              </div>
            )
          })}
        </div>
        {slider && (
          <>
            <ArrowLeft
              key="1"
              onClick={e => e.stopPropagation() || slider.prev()}
            />
            <ArrowRight
              key="2"
              onClick={e => e.stopPropagation() || slider.next()}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default OtherProjects
