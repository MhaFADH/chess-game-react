/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const checkCell = (cell, index) => {
  console.log(cell)

  if (index === -1 || index === 1) {
    console.log("in")

    if (cell !== "undefined" && cell !== "empty") {
      return true
    }
  }

  return false
}
const normalMove = ({ source, target, board, direction }, index) => {
  for (let i = -1; i < 3; i += 1) {
    //Console.log(source.x + i, target.x, source.y + direction, target.y)
    const cell = board?.[source.y + direction]?.[source.x + i]
    console.log(checkCell(cell), source.x + i, source.y + direction * index)
    const isGoodSpot =
      target.x === source.x + i && target.y === source.y + direction * index

    if (isGoodSpot) {
      if (checkCell(cell, i)) {
        return true
      }

      if (isGoodSpot && i === 0 && cell === "empty") {
        console.log(isGoodSpot, i, cell)

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

  console.log(direction, initalPosition)

  if (source.y === initalPosition) {
    console.log("init")

    if (normalMove(payload, 1) || normalMove(payload, 2)) {
      console.log(normalMove(payload, 1), normalMove(payload, 2))

      return true
    }
  }

  console.log("out")

  return normalMove(payload, 1)
}
