import React from "react"
import "../../styles/sevices.css"
import { data } from "./data"
import Service from "./Service"
import Fade from "react-reveal/Fade"

const Services = () => {
  return (
    <div className="services" id="services">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title" data-title="SERVICES">
            services
          </h1>
        </div>
      </Fade>

      <div className="services-container">
        {data.map((service, index) => {
          return <Service key={index} {...service} />
        })}
      </div>
    </div>
  )
}

export default Services
