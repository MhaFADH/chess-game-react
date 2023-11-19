import bishop from "./behaviors/bishop"
import king from "./behaviors/king"
import knight from "./behaviors/knight"

export const initBoard = () => [
  [
    "brook",
    "bknight",
    "bbishop",
    "bqueen",
    "bking",
    "bbishop",
    "bknight",
    "brook"
  ],
  ["bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn"],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  ["wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn"],
  [
    "wrook",
    "wknight",
    "wbishop",
    "wqueen",
    "wking",
    "wbishop",
    "wknight",
    "wrook"
  ]
]

export const initScore = () => ({
  white: {
    eaten: 0,
    count: 0
  },
  black: {
    eaten: 0,
    count: 0
  }
})

export const whitePieces = {
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
    fn: () => true
  },
  wqueen: {
    icon: "./pieces-png/white-queen.png",
    fn: () => true
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

export const blackPieces = {
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
    fn: () => true
  },
  bqueen: {
    icon: "./pieces-png/black-queen.png",
    fn: () => true
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
export const nextTurn = () => {
  if (blackPieces.state) {
    blackPieces.state = false
  } else {
    blackPieces.state = true
  }

  if (whitePieces.state) {
    whitePieces.state = false
  } else {
    whitePieces.state = true
  }
}
