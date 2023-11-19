export default (source, target, board) => {
  if (source.x === target.x || source.y === target.y) {
    return false
  }

  for (let direction = -1; direction <= 2; direction += 2) {
    let threshold = 0
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
    threshold = 7
  }

  return false
}
