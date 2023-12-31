import { kings, blackPieces, whitePieces } from "../../pieces/teams"
import checkmate from "./checkmate"
import possibleMoves from "./possible-moves"

export default (mainState) => {
  const { board, turn } = mainState
  const concerned = turn === "b" ? whitePieces : blackPieces
  const kingTarget = turn === "b" ? kings.blackKing : kings.whiteKing
  const checkMateConcerned = turn === "b" ? blackPieces : whitePieces
  const allPossibleMoves = []

  let result = false

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const source = {
        piece: col,
        x: colIndex,
        y: rowIndex,
        team: col.slice(0, 1)
      }
      const preResult = concerned[col]?.fn(source, kingTarget, board)

      if (checkMateConcerned[col]) {
        allPossibleMoves.push(
          possibleMoves(board, source, checkMateConcerned[col].fn)
        )
      }

      if (preResult === true) {
        result = preResult
      }
    })
  })

  if (checkmate(mainState, allPossibleMoves) === 0) {
    return "checkmate"
  }

  return result
}
