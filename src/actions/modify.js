export default (state, action) => {
  const { source, target } = action.payload
  const stateCopy = JSON.parse(JSON.stringify(state))

  if (source.team === "b") {
    stateCopy.score.black.count = state.score.black.count + 1
    stateCopy.turn = "w"

    if (target.team === "w") {
      stateCopy.score.black.eaten = state.score.black.eaten + 1
    }
  } else {
    stateCopy.score.white.count = state.score.white.count + 1
    stateCopy.turn = "b"

    if (target.team === "b") {
      stateCopy.score.white.eaten = state.score.white.eaten + 1
    }
  }

  stateCopy.board[target.y][target.x] = source.piece
  stateCopy.board[source.y][source.x] = "empty"

  stateCopy.previousState = { ...state }

  return { ...stateCopy }
}
