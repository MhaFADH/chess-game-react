/* eslint-disable no-console */
import React from "react"
import Cell from "./Cell"
import { whitePieces, blackPieces } from "../pieces-related/pieces"

const Board = (props) => (
  <div className="bg-green-400 grid grid-cols-8 grid-rows-8 w-[800px] h-[800px] place-self-center">
    {props.board.map((row, rowIndex) =>
      row.map((col, colIndex) => {
        if (whitePieces[col]) {
          return (
            <Cell
              piece={col}
              row={rowIndex}
              col={colIndex}
              content={whitePieces[col].icon}
              key={colIndex + rowIndex}
            />
          )
        }

        if (blackPieces[col]) {
          return (
            <Cell
              piece={col}
              row={rowIndex}
              col={colIndex}
              content={blackPieces[col].icon}
              key={colIndex + rowIndex}
            />
          )
        }

        return (
          <Cell
            piece={col}
            row={rowIndex}
            col={colIndex}
            content={null}
            key={colIndex + rowIndex}
          />
        )
      })
    )}
  </div>
)
export default Board
