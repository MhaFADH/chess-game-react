export default (source, target) => {
  const params = {
    dirX: 1,
    dirY: 1
  }

  if (target.y > source.y) {
    params.dirY = -1
  }

  if (target.x > source.x) {
    params.dirX = -1
  }

  return params
}
