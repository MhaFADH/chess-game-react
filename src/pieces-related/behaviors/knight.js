/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
export default (source, target, board) => {
  const sY = parseInt(source.y, 10)
  const sX = parseInt(source.x, 10)
  const tY = parseInt(target.y, 10)
  const tX = parseInt(target.x, 10)

  console.log(sY, sX, tY, tX)

  if (JSON.stringify(source) === JSON.stringify(target)) {
    return false
  }

  if (sY === tY || sX === tX) {
    return false
  }

  //Down

  if (tY > sY) {
    if (tY - 2 === sY && tX - 1 === sX) {
      return true
    }

    if (tY - 2 === sY && tX + 1 === sX) {
      return true
    }
  }

  //Up

  if (tY < sY) {
    if (tY + 2 === sY && tX - 1 === sX) {
      return true
    }

    if (tY + 2 === sY && tX + 1 === sX) {
      return true
    }
  }

  //Right

  if (tX > sX) {
    if (tY + 1 === sY && tX - 2 === sX) {
      return true
    }

    if (tY - 1 === sY && tX - 2 === sX) {
      return true
    }
  }

  //Left

  if (tX < sX) {
    if (tY + 1 === sY && tX + 2 === sX) {
      return true
    }

    if (tY - 1 === sY && tX + 2 === sX) {
      return true
    }
  }

  return false
}
