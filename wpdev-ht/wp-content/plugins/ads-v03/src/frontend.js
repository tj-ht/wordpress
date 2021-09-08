import "./frontend.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"

const divsToUpdate = document.querySelectorAll(".wrapper-div")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("wrapper-div")
})

function OurComponent(props) {
  const [showSkyColor, setShowSkyColor] = useState(false)
  const [showGrassColor, setShowGrassColor] = useState(false)

  return (
    <div className="react-frontend">
      <p>
        <button onClick={() => setShowSkyColor(prev => !prev)}>Toggle view sky color</button>
        {showSkyColor && <span>{props.skyColor}</span>}
      </p>
      <p>
        <button onClick={() => setShowGrassColor(prev => !prev)}>Toggle view grass color</button>
        {showGrassColor && <span>{props.grassColor}</span>}
      </p>
    </div>
  )
}
