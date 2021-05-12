import React, { useEffect, useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const Achivement = ({ icon, text, number }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <div className="achivement">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="text">
        <h1 className="number">
          <CountUp start={viewPortEntered ? null : 0} end={number} delay={0.3}>
            {({ countUpRef }) => (
              <VisibilitySensor
                active={!viewPortEntered}
                onChange={isVisible => {
                  if (isVisible) {
                    setViewPortEntered(true)
                  }
                }}
              >
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Achivement
