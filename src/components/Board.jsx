import {
  FaChessPawn,
  FaChessRook,
  FaChessKnight,
  FaChessQueen,
  FaChessKing,
  FaChessBishop
} from "react-icons/fa"
import React from "react"

const Board = () => {
  const whitePieces = {
    wpawn: {
      icon: <FaChessPawn color="white"></FaChessPawn>
    },
    wknight: {
      icon: <FaChessKnight color="white"></FaChessKnight>
    },
    wrook: {
      icon: <FaChessRook color="white"></FaChessRook>
    },
    wqueen: {
      icon: <FaChessQueen color="white"></FaChessQueen>
    },
    wking: {
      icon: <FaChessKing color="white"></FaChessKing>
    },
    wbishop: {
      icon: <FaChessBishop color="white"></FaChessBishop>
    }
  }
  const blackPieces = {
    bpawn: {
      icon: <FaChessPawn></FaChessPawn>
    },
    bknight: {
      icon: <FaChessKnight></FaChessKnight>
    },
    brook: {
      icon: <FaChessRook></FaChessRook>
    },
    bqueen: {
      icon: <FaChessQueen></FaChessQueen>
    },
    bking: {
      icon: <FaChessKing></FaChessKing>
    },
    bbishop: {
      icon: <FaChessBishop></FaChessBishop>
    }
  }
  const board = [
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

  return (
    <div className="bg-slate-400 grid grid-cols-8 grid-rows-8">
      {board.map((row) =>
        row.map((cell, cellIndex) => {
          if (whitePieces[cell]) {
            return (
              <button
                className="bg-slate-400 active:bg-slate-300 px-6 py-12 border-2 border-solid border-slate-500"
                key={cell}>
                {whitePieces[cell].icon}
              </button>
            )
          }

          if (blackPieces[cell]) {
            return (
              <button
                className="bg-slate-400 active:bg-slate-300 px-6 py-12 border-2 border-solid border-slate-500"
                key={cell}>
                {blackPieces[cell].icon}
              </button>
            )
          }

          return (
            <p
              className="bg-slate-400 active:bg-slate-300 px-6 py-12 border-2 border-solid border-slate-500"
              key={cellIndex}></p>
          )
        })
      )}
    </div>
  )
}
export default Board
