import calculateNextMove from "./calculate-next-move"

export default (mainState, allPossibleMoves) => {
  const { board } = mainState
  let isCheckmate = true

  allPossibleMoves.map((possibleMoves) => {
    const movesArr = possibleMoves.possible

    if (movesArr.length === 0) {
      return false
    }

    movesArr.forEach((coordinates) => {
      if (calculateNextMove(coordinates, possibleMoves.source, board)) {
        isCheckmate = false
      }
    })

    return false
  })

  return isCheckmate
}
