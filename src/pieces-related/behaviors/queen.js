import bishop from "./bishop"
import rook from "./rook"
export default (source, target, board) => {
  if (bishop(source, target, board) || rook(source, target, board)) {
    return true
  }

  return false
}
