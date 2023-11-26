import React from "react"
import Cell from "./Cell"
import { blackPieces, whitePieces } from "../pieces-related/pieces/teams"

const Board = (props) => (
  <div className="bg-green-400 grid grid-cols-8 grid-rows-8 w-[800px] h-[800px] place-self-center">
    {props.board.map((row, rowIndex) =>
      row.map((col, colIndex) => (
        <Cell
          piece={col}
          row={rowIndex}
          col={colIndex}
          content={whitePieces[col]?.icon || blackPieces[col]?.icon || null}
          key={colIndex + rowIndex}
        />
      ))
    )}
  </div>
)
export default Board
