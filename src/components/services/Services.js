import React from "react"
import "../../styles/sevices.css"
import { data } from "./data"
import Service from "./Service"

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="section-title">
        <h1 className="title" data-title="SERVICES">
          services
        </h1>
      </div>

      <div className="services-container">
        {data.map((service, index) => {
          return <Service key={index} {...service} />
        })}
      </div>
    </div>
  )
}

export default Services
