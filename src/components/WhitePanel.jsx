import React from "react"

const WhitePanel = (props) => {
  const { score } = props

  return (
    <div className="flex justify-evenly bg-white ">
      <span className="float-left font-bold">WHITE</span>
      <span className="float-left">Eaten {score.white.eaten} piece(s)</span>
      <span className="float-left">Played {score.white.count} time(s)</span>
    </div>
  )
}

export default WhitePanel
