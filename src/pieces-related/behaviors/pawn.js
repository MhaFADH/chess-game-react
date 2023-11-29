const checkCell = (cell, index) => {
  if (index === -1 || index === 1) {
    if (cell !== "undefined" && cell !== "empty") {
      return true
    }
  }

  return false
}
const checkDoubleJump = (cellOne, cellTwo, index, multiplier) => {
  const isPreCellEmpty = cellOne === "empty"
  const isCellEmpty = cellTwo === "empty"

  if (index === 0 && isPreCellEmpty && isCellEmpty && multiplier === 2) {
    return true
  }

  return false
}
const normalMove = ({ source, target, board, direction }, multiplier) => {
  for (let i = -1; i < 2; i += 1) {
    const cell = board?.[source.y + direction * multiplier]?.[source.x + i]
    const firstCell = board?.[source.y + direction]?.[source.x + i]
    const isGoodSpot =
      target.x === source.x + i &&
      target.y === source.y + direction * multiplier

    if (isGoodSpot) {
      if (multiplier === 2) {
        return checkDoubleJump(firstCell, cell, i, multiplier)
      }

      if (checkCell(cell, i)) {
        return true
      }

      if (i === 0 && cell === "empty") {
        return true
      }
    }
  }

  return false
}
export default (source, target, board) => {
  const direction = source.team === "w" ? -1 : 1
  const initalPosition = source.team === "w" ? 6 : 1
  const payload = { source, target, board, direction }

  if (source.y === initalPosition) {
    if (normalMove(payload, 1) || normalMove(payload, 2)) {
      return true
    }
  }

  return normalMove(payload, 1)
}
