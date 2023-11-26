export default (state) => {
  const stateCopy = JSON.parse(JSON.stringify(state.previousState))
  stateCopy.previousState = null

  return { ...stateCopy }
}
