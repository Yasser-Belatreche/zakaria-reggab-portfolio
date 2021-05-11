import React from "react"
import "../../styles/achivements.css"
import icon from "../../images/face.svg"
import { data } from "./data"
import Achivement from "./Achivement"

const Achivements = () => {
  return (
    <div className="achivements">
      <div className="achivements-container">
        {data.map((achivement, index) => {
          return <Achivement key={index} {...achivement} />
        })}
      </div>
    </div>
  )
}

export default Achivements
