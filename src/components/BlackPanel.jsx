import React from "react"

const BlackPanel = (props) => {
  const { score } = props

  return (
    <div className="flex justify-evenly text-white bg-black rounded-mg">
      <span className="float-right font-bold">BLACK</span>
      <span className="float-right">Eaten {score.black.eaten} piece(s)</span>
      <span className="float-right">Played {score.black.count} time(s)</span>
    </div>
  )
}

export default BlackPanel
