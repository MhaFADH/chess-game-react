export default ({ row, col, piece }, team, kings) => {
  if (piece.slice(1) === "king") {
    if (team === "b") {
      kings.blackKing = {
        piece,
        x: col,
        y: row,
        team: "b"
      }
    }

    if (team === "w") {
      kings.whiteKing = {
        piece,
        x: col,
        y: row,
        team: "w"
      }
    }
  }
}
