export default (source, target) => {
  if (target.team === source.team) {
    return false
  }

  for (let i = -1; i < 2; i += 1) {
    for (let j = -1; j < 2; j += 1) {
      if (target.x + i === source.x && target.y + j === source.y) {
        return true
      }
    }
  }

  return false
}
