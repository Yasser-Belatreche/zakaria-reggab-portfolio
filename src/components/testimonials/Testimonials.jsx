import React, { useState, useEffect, useRef } from "react"
import "../../styles/testimonials.css"
import { data } from "./data"
import Testimonial from "./Testimonial"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Fade from "react-reveal/Fade"

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

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [pause, setPause] = useState(false)
  const timer = useRef()

  const [sliderRef, slider] = useKeenSlider({
    spacing: 0,
    slidesPerView: 1,
    centered: false,
    loop: true,
    mode: "snap",
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slidesPerView: 2,
        centered: true,
      },
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
    <div className="testimonials" id="testimonials">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title" data-title="TESTIMONIALS">
            testimonials
          </h1>
        </div>
      </Fade>

      <Fade bottom>
        <div className="testimonials-container">
          <div className="keen-slider" ref={sliderRef}>
            {data.map((testimonial, index) => {
              return (
                <div className="keen-slider__slide">
                  <Testimonial key={index} {...testimonial} />
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
      </Fade>
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

export default Testimonials
