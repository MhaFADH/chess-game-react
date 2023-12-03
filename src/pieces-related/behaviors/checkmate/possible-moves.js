const isClear = (source, target) => {
  if (
    JSON.stringify(target) !== JSON.stringify(source) &&
    source.team !== target.team
  ) {
    return true
  }

  return false
}
export default (board, source, pieceBehavior) => {
  const result = {
    source,
    possible: []
  }

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const target = {
        piece: col,
        x: colIndex,
        y: rowIndex,
        team: col.slice(0, 1)
      }

      if (isClear(source, target)) {
        if (pieceBehavior(source, target, board)) {
          result.possible.push([rowIndex, colIndex])
        }
      }
    })
  })

  return result
}
