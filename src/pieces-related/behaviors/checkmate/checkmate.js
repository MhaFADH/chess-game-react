import calculateNextMove from "./calculate-next-move"

export default (mainState, allPossibleMoves) => {
  const { board } = mainState
  let possible = 0

  allPossibleMoves.forEach((possibleMoves) => {
    const movesArr = possibleMoves.possible

    if (movesArr.length !== 0) {
      movesArr.forEach((coordinates) => {
        if (!calculateNextMove(coordinates, possibleMoves.source, board)) {
          possible += 1
        }
      })
    }
  })

  return possible
}
