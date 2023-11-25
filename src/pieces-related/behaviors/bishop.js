const checkLeft = (payload) => {
  const { source, target, board, direction, threshold } = payload

  for (
    let i = direction;
    source.y + i !== threshold && source.x - i >= 0;
    i += direction
  ) {
    const concerned = board?.[source.y + i]?.[Math.abs(source.x - i)]

    if (source.y + i === target.y && Math.abs(source.x - i) === target.x) {
      return true
    }

    if (concerned !== 0 || concerned === "undefined") {
      break
    }
  }

  return false
}
const checkRight = (payload) => {
  const { source, target, board, direction, threshold } = payload

  for (
    let i = direction;
    source.y + i !== threshold && source.x + i <= 7;
    i += direction
  ) {
    const concerned = board?.[source.y + i]?.[Math.abs(source.x + i)]

    if (source.y + i === target.y && Math.abs(source.x + i) === target.x) {
      return true
    }

    if (concerned !== 0 || concerned === "undefined") {
      break
    }
  }

  return false
}

export default (source, target, board) => {
  if (source.x === target.x || source.y === target.y) {
    return false
  }

  //Check upwards and downwards

  for (let direction = -1; direction <= 2; direction += 2) {
    let threshold = -1
    const payload = { source, target, direction, board, threshold }

    if (checkLeft(payload) || checkRight(payload)) {
      return true
    }

    threshold = 8
  }

  return false
}
