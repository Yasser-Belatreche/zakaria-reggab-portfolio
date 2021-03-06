import React from "react"
import { data } from "./data"
import Contact from "./Contact"
import "../../styles/contact.css"
import Fade from "react-reveal/Fade"

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title" data-title="CONTACT">
            contact
          </h1>
        </div>
      </Fade>

      <div className="contacts-container">
        {data.map((contact, index) => {
          return <Contact key={index} {...contact} />
        })}
      </div>
    </div>
  )
}

export default Contacts
