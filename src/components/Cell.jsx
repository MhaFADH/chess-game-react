import React, { useContext } from "react"
import AppContext from "./AppContext"
import handleDrop from "../handlers/handle-drop"
import handleStart from "../handlers/handle-start"
import kingsPosition from "../pieces-related/behaviors/checkmate/kings-position"
import { kings } from "../pieces-related/pieces/teams"

const Cell = (props) => {
  const provided = useContext(AppContext)
  const { turn } = provided.reducer.mainState
  const { content, row, col, piece } = props
  const style = (row + col) % 2 === 0 ? "bg-slate-400" : "bg-slate-200"
  let pieceState = false
  const pieceTeam = piece.slice(0, 1)
  kingsPosition(props, pieceTeam, kings)

  if (pieceTeam === turn) {
    pieceState = true
  }

  return (
    <div
      data-piece={piece}
      data-row={row}
      data-col={col}
      className={`${style} border-2 border-solid border-slate-500 place-self-center h-[100px] w-[100px]`}
      onDrop={(e) => handleDrop(e, provided)}
      onDragOver={(e) => e.preventDefault()}>
      {content ? (
        <img
          draggable={pieceState}
          onDragStart={(e) => handleStart(e, provided)}
          data-piece={piece}
          data-row={row}
          data-col={col}
          src={content}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Cell
