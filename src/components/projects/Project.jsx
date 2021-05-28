import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"
import Fade from "react-reveal/Fade"
import { FaShareSquare } from "react-icons/fa"

const Project = ({ img, name, isProductsPage }) => {
  const slug = slugify(name, {
    lower: true,
  })

  // if we are on the product page didn't use animations
  if (isProductsPage) {
    return (
      <div className="project">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <Link to={`/Projects/${slug}`}>
          <div className="name">
            <p>{name}</p>
            <FaShareSquare className="icon" />
          </div>
        </Link>
      </div>
    )
  }

  return (
    <Fade bottom>
      <div className="project">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <Link to={`/Projects/${slug}`}>
          <div className="name">
            <p>{name}</p>
            <FaShareSquare className="icon" />
          </div>
        </Link>
      </div>
    </Fade>
  )
}

export default Project
