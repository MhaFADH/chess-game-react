export default (state, action) => {
  const { team } = action.payload
  const stateCopy = JSON.parse(JSON.stringify(state))

  stateCopy.winner = team
  stateCopy.turn = "none"

  return stateCopy
}
