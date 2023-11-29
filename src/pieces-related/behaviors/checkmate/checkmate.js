/* eslint-disable no-unused-vars */
/* eslint-disable capitalized-comments */
/* eslint-disable no-console */
import pawn from "../pawn"
import { kings, blackPieces, whitePieces } from "../../pieces/teams"

export default ({ board, turn }) => {
  const concerned = turn === "b" ? whitePieces : blackPieces
  const kingTarget = turn === "b" ? kings.blackKing : kings.whiteKing
  let result = false

  console.log({ concerned })
  //console.log({ kingTarget })
  console.log(
    pawn(
      { x: 5, y: 1, piece: "wpawn", team: "w" },
      { x: 4, y: 0, piece: "bking", team: "b" },
      board
    )
  )

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const preResult = concerned[col]?.fn(
        { piece: col, x: colIndex, y: rowIndex, team: col.slice(0, 1) },
        kingTarget,
        board
      )
      console.log({
        piece: col,
        x: colIndex,
        y: rowIndex,
        team: col.slice(0, 1)
      })
      console.log({ preResult })

      if (preResult === true) {
        result = preResult
      }
    })
  })
  console.log({ result })

  return result
}
