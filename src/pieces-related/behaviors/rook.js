const checkAxe = (payload) => {
  const { target, axe, board, j } = payload
  const axeY = axe === "y" ? target[axe] + j : target.y
  const axeX = axe === "x" ? target[axe] + j : target.x

  return board?.[axeY]?.[axeX]
}

export default (source, target, board) => {
  if (source.x !== target.x && source.y !== target.y) {
    return false
  }

  const axe = source.x === target.x ? "y" : "x"
  for (let i = -1; i < 2; i += 2) {
    for (let j = i; target[axe] + j > -1 && target[axe] + j <= 7; j += i) {
      if (target[axe] + j === source[axe]) {
        return true
      }

      const payload = { target, axe, board, j }
      const cell = checkAxe(payload)

      if (cell !== 0 || cell === "undefined") {
        break
      }
    }
  }

  return false
}
