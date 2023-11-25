import bishop from "../behaviors/bishop"
import king from "../behaviors/king"
import knight from "../behaviors/knight"
import rook from "../behaviors/rook"
import queen from "../behaviors/queen"

const whitePieces = {
  wpawn: {
    icon: "./pieces-png/white-pawn.png",
    fn: () => true
  },
  wknight: {
    icon: "./pieces-png/white-knight.png",
    fn: knight
  },
  wrook: {
    icon: "./pieces-png/white-rook.png",
    fn: rook
  },
  wqueen: {
    icon: "./pieces-png/white-queen.png",
    fn: queen
  },
  wking: {
    icon: "./pieces-png/white-king.png",
    fn: king
  },
  wbishop: {
    icon: "./pieces-png/white-bishop.png",
    fn: bishop
  },
  state: false
}
const blackPieces = {
  bpawn: {
    icon: "./pieces-png/black-pawn.png",
    fn: () => true
  },
  bknight: {
    icon: "./pieces-png/black-knight.png",
    fn: knight
  },
  brook: {
    icon: "./pieces-png/black-rook.png",
    fn: rook
  },
  bqueen: {
    icon: "./pieces-png/black-queen.png",
    fn: queen
  },
  bking: {
    icon: "./pieces-png/black-king.png",
    fn: king
  },
  bbishop: {
    icon: "./pieces-png/black-bishop.png",
    fn: bishop
  },
  state: false
}
const getPieces = () => ({ blackPieces, whitePieces })
const changeTurn = () => {
  blackPieces.state = !blackPieces.state
  whitePieces.state = !whitePieces.state
  // eslint-disable-next-line no-console
  console.log(blackPieces.state, whitePieces.state)
}

export { changeTurn, getPieces }
