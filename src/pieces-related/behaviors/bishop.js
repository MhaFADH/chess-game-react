import checkLimit from "./moves/check-limit"
import getParams from "./moves/get-params"

export default (source, target, board) => {
  if (source.x === target.x || source.y === target.y) {
    return false
  }

  const params = getParams(source, target)

  for (
    let i = 1;
    checkLimit(target.y + i * params.dirY) &&
    checkLimit(target.x + i * params.dirX);
    i += 1
  ) {
    const dirY = target.y + i * params.dirY
    const dirX = target.x + i * params.dirX
    const cell = board[dirY][dirX]

    if (dirY === source.y && dirX === source.x) {
      return true
    }

    if (cell !== "empty") {
      return false
    }
  }

  return false
}
