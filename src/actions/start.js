export default (state) => {
  const stateCopy = JSON.parse(JSON.stringify(state))
  stateCopy.started = true
  stateCopy.turn = "w"

  return { ...stateCopy }
}
