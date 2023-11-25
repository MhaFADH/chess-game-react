/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react"
import AppContext from "./AppContext"
import { getPieces } from "../pieces-related/pieces/teams"
import handleDrop from "../handlers/handle-drop"
import handleStart from "../handlers/handle-start"

const Cell = (props) => {
  const { blackPieces, whitePieces } = getPieces()
  const provided = useContext(AppContext)
  const { content, row, col, piece } = props
  const style = (row + col) % 2 === 0 ? "bg-slate-400" : "bg-slate-200"
  let pieceState = false

  if (blackPieces[piece]) {
    pieceState = blackPieces.state
  }

  if (whitePieces[piece]) {
    pieceState = whitePieces.state
  }

  return (
    <div
      piece={piece}
      row={row}
      col={col}
      className={`${style} border-2 border-solid border-slate-500 place-self-center h-[100px] w-[100px]`}
      onDrop={(e) => handleDrop(e, provided)}
      onDragOver={(e) => e.preventDefault()}>
      {content ? (
        <img
          draggable={pieceState}
          onDragStart={(e) => handleStart(e, provided)}
          piece={piece}
          row={row}
          col={col}
          src={content}
          special={0}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Cell
