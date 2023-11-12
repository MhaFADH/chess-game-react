export const initBoard = [
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
export const whitePieces = {
  wpawn: {
    icon: "./pieces-png/white-pawn.png"
  },
  wknight: {
    icon: "./pieces-png/white-knight.png"
  },
  wrook: {
    icon: "./pieces-png/white-rook.png"
  },
  wqueen: {
    icon: "./pieces-png/white-queen.png"
  },
  wking: {
    icon: "./pieces-png/white-king.png"
  },
  wbishop: {
    icon: "./pieces-png/white-bishop.png"
  }
}

export const blackPieces = {
  bpawn: {
    icon: "./pieces-png/black-pawn.png"
  },
  bknight: {
    icon: "./pieces-png/black-knight.png"
  },
  brook: {
    icon: "./pieces-png/black-rook.png"
  },
  bqueen: {
    icon: "./pieces-png/black-queen.png"
  },
  bking: {
    icon: "./pieces-png/black-king.png"
  },
  bbishop: {
    icon: "./pieces-png/black-bishop.png"
  }
}
