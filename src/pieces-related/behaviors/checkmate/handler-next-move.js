import { blackPieces, whitePieces } from "../../pieces/teams"
import { getKings } from "./calculate-next-move"

const isClear = (source, target) => {
  if (
    JSON.stringify(target) !== JSON.stringify(source) &&
    source.team !== target.team
  ) {
    return true
  }

  return false
}

export default (mainState, source, target) => {
  const { board, turn } = mainState
  const boardCopy = JSON.parse(JSON.stringify(board))
  const concerned = turn === "b" ? whitePieces : blackPieces

  if (isClear(source, target)) {
    boardCopy[target.y][target.x] = source.piece
    boardCopy[source.y][source.x] = "empty"
  } else {
    return true
  }

  const kings = getKings(boardCopy)
  const kingTarget = turn === "b" ? kings.blackKing : kings.whiteKing

  let result = false

  boardCopy.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const opSource = {
        piece: col,
        x: colIndex,
        y: rowIndex,
        team: col.slice(0, 1)
      }
      const preResult = concerned[col]?.fn(opSource, kingTarget, boardCopy)

      if (preResult === true) {
        result = preResult
      }
    })
  })

  return result
}
