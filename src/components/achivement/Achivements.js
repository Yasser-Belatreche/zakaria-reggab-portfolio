import React from "react"
import "../../styles/achivements.css"
import icon from "../../images/face.svg"
import { data } from "./data"
import Achivement from "./Achivement"
import Fade from "react-reveal/Fade"

const Achivements = () => {
  return (
    <div className="achivements">
      <div className="achivements-container">
        <Fade bottom>
          {data.map((achivement, index) => {
            return <Achivement key={index} {...achivement} />
          })}
        </Fade>
      </div>
    </div>
  )
}

export default Achivements
