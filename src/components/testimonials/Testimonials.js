import React from "react"
import "../../styles/testimonials.css"
import { data } from "./data"
import Testimonial from "./Testimonial"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
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

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef, slider] = useKeenSlider({
    spacing: 0,
    slidesPerView: 1,
    centered: false,
    loop: true,
    mode: "snap",
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slidesPerView: 2,
      },
    },
  })

  return (
    <div className="testimonials" id="testimonials">
      <div className="section-title">
        <h1 className="title" data-title="TESTIMONIALS">
          testimonials
        </h1>
      </div>

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
            <ArrowLeft onClick={e => e.stopPropagation() || slider.prev()} />
            <ArrowRight onClick={e => e.stopPropagation() || slider.next()} />
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

export default Testimonials
