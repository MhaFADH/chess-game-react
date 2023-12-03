//Get board, make a copy, apply the next move to it, and then test if there is still a checkmate situation.
/* eslint-disable no-unused-vars */
/* eslint-disable capitalized-comments */
/* eslint-disable no-console */
import { blackPieces, whitePieces } from "../../pieces/teams"
const getKings = (board) => {
  const kings = {
    whiteKing: null,
    blackKing: null
  }

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col.slice(1) === "king") {
        if (col.slice(0, 1) === "w") {
          kings.whiteKing = {
            pieces: col,
            x: colIndex,
            y: rowIndex,
            team: col.slice(0, 1)
          }
        } else {
          kings.blackKing = {
            pieces: col,
            x: colIndex,
            y: rowIndex,
            team: col.slice(0, 1)
          }
        }
      }
    })
  })

  return kings
}

export default (coordinates, source, board) => {
  let result = false
  const boardCopy = JSON.parse(JSON.stringify(board))
  const concerned = source.team === "b" ? whitePieces : blackPieces
  boardCopy[coordinates[0]][coordinates[1]] = source.piece
  boardCopy[source.y][source.x] = "empty"
  const kings = getKings(boardCopy)
  const kingTarget = source.team === "b" ? kings.blackKing : kings.whiteKing
  //console.log({ kingTarget }, { concerned })
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
        console.log(preResult, opSource)
        result = preResult
      }
    })
  })

  return result
}
