import React from "react"

const Testimonial = ({ img, text, name, profession }) => {
  return (
    <div className="testimonial">
      <div className="img">
        <img src={img} alt="" />
      </div>

      <div className="testimonial-container">
        <div className="quote">
          <p>
            <span>“ </span>
            {text}
            <span> ”</span>
          </p>
        </div>

        <div className="name">
          <p>{name}</p>
        </div>
        <div className="profession">
          <p>{profession}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
