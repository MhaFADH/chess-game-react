export default (state, action) => {
  const { source, target } = action.payload
  const stateCopy = JSON.parse(JSON.stringify(state))

  if (source.team === "b") {
    stateCopy.score.black.count = state.score.black.count + 1
  } else {
    stateCopy.score.white.count = state.score.white.count + 1
  }

  stateCopy.board[target.y][target.x] = source.piece
  stateCopy.board[source.y][source.x] = 0

  return { ...stateCopy }
}
