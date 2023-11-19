export default (source, target) => {
  //Global verifications

  if (source.team === target.team) {
    return false
  }

  if (source.y === target.y || source.x === target.x) {
    return false
  }

  //Down

  if (target.y > source.y) {
    if (target.y - 2 === source.y && target.x - 1 === source.x) {
      return true
    }

    if (target.y - 2 === source.y && target.x + 1 === source.x) {
      return true
    }
  }

  //Up

  if (target.y < source.y) {
    if (target.y + 2 === source.y && target.x - 1 === source.x) {
      return true
    }

    if (target.y + 2 === source.y && target.x + 1 === source.x) {
      return true
    }
  }

  //Right

  if (target.x > source.x) {
    if (target.y + 1 === source.y && target.x - 2 === source.x) {
      return true
    }

    if (target.y - 1 === source.y && target.x - 2 === source.x) {
      return true
    }
  }

  //Left

  if (target.x < source.x) {
    if (target.y + 1 === source.y && target.x + 2 === source.x) {
      return true
    }

    if (target.y - 1 === source.y && target.x + 2 === source.x) {
      return true
    }
  }

  return false
}
