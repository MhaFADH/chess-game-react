/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default (source, target, board) => {
  if (source.x !== target.x && source.y !== target.y) {
    console.log("false")

    return false
  }

  console.log("in")

  const axe = source.x === target.x ? "x" : "y"

  for (let i = -1; i < 2; i += 2) {
    console.log(target[axe], "hey")

    for (let j = i; target[axe] + j >= -1 || target[axe] + j <= 8; j += i) {
      if (target[axe] + j === source.axe) {
        return true
      }
    }
  }

  return false
}
