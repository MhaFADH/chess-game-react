/* eslint-disable no-unused-vars */
/* eslint-disable capitalized-comments */
/* eslint-disable no-console */
import { kings, blackPieces, whitePieces } from "../../pieces/teams"
import possibleMoves from "./possible-moves"

export default ({ board, turn }) => {
  const concerned = turn === "b" ? whitePieces : blackPieces
  const kingTarget = turn === "b" ? kings.blackKing : kings.whiteKing
  let result = false

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      //console.log("exist ?: ", Boolean(concerned[col]))
      const source = {
        piece: col,
        x: colIndex,
        y: rowIndex,
        team: col.slice(0, 1)
      }
      const preResult = concerned[col]?.fn(source, kingTarget, board)

      if (concerned[col]) {
        console.log(possibleMoves(board, source, concerned[col].fn))
      }

      console.log(
        "queen",
        whitePieces.wqueen.fn(
          {
            piece: "wqueen",
            x: 1,
            y: 5,
            team: "w"
          },
          kings.blackKing,
          board
        )
      )

      if (preResult === true) {
        console.log(preResult, source)
        result = preResult
      }
    })
  })

  return result
}
