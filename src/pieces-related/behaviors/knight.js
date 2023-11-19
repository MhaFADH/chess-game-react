/* eslint-disable no-console */
export default (source, target) => {
  for (let i = -2; i < 3; i += 4) {
    for (let j = -1; j < 2; j += 2) {
      if (target.y + i === source.y && target.x + j === source.x) {
        return true
      }
    }
  }

  for (let i = -2; i < 3; i += 4) {
    for (let j = -1; j < 2; j += 2) {
      if (target.y + j === source.y && target.x + i === source.x) {
        return true
      }
    }
  }

  return false
}
