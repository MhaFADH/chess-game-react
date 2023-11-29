import bishop from "../behaviors/bishop"
import king from "../behaviors/king"
import knight from "../behaviors/knight"
import rook from "../behaviors/rook"
import queen from "../behaviors/queen"
import pawn from "../behaviors/pawn"

const whitePieces = {
  wpawn: {
    icon: "./pieces-png/white-pawn.png",
    fn: pawn
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
  }
}
const blackPieces = {
  bpawn: {
    icon: "./pieces-png/black-pawn.png",
    fn: pawn
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
  }
}
const kings = {
  whiteKing: {
    pieces: "wking",
    x: 4,
    y: 7,
    team: "w"
  },
  blackKing: {
    pieces: "bking",
    x: 4,
    y: 0,
    team: "b"
  }
}
export { blackPieces, whitePieces, kings }
