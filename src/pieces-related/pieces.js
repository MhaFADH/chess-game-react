/* eslint-disable no-console */
export const whitePieces = {
  wpawn: {
    icon: <img draggable src="./pieces-png/white-pawn.png" />
  },
  wknight: {
    icon: <img draggable src="./pieces-png/white-knight.png" />
  },
  wrook: {
    icon: (
      <img
        draggable
        onDragStart={(e) => e.dataTransfer.setData("hey", "hey")}
        src="./pieces-png/white-rook.png"
      />
    )
  },
  wqueen: {
    icon: <img draggable src="./pieces-png/white-queen.png" />
  },
  wking: {
    icon: <img draggable src="./pieces-png/white-king.png" />
  },
  wbishop: {
    icon: <img draggable src="./pieces-png/white-bishop.png" />
  }
}

export const blackPieces = {
  bpawn: {
    icon: <img draggable src="./pieces-png/black-pawn.png" />
  },
  bknight: {
    icon: <img draggable src="./pieces-png/black-knight.png" />
  },
  brook: {
    icon: <img draggable src="./pieces-png/black-rook.png" />
  },
  bqueen: {
    icon: <img draggable src="./pieces-png/black-queen.png" />
  },
  bking: {
    icon: <img draggable src="./pieces-png/black-king.png" />
  },
  bbishop: {
    icon: <img draggable src="./pieces-png/black-bishop.png" />
  }
}
