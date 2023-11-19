/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable capitalized-comments */
export default (source, target, board) => {
  if (source.x === target.x || source.y === target.y) {
    return false
  }

  for (let i = 1; source.y + i <= 7 && source.x - i >= 0; i += 1) {
    console.log("COORD ONE: ", source.y + 1, source.x - i)

    if (source.y + i === target.y && source.x - i === target.x) {
      return true
    }

    if (board[source.y + i][source.x - i] !== 0) {
      console.log("broke")

      i = 8
    }
  }

  for (let i = 1; source.y + i !== 7 && source.x + i <= 7; i += 1) {
    console.log("COORD TWO: ", source.y + 1, source.x + i)

    if (source.y + i === target.y && source.x + i === target.x) {
      return true
    }

    if (board[source.y + i][source.x - i] !== 0) {
      console.log("broke")

      i = 8
    }
  }

  return false
}
