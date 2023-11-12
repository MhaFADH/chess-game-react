/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import Board from "./Board"

const App = () => {
  const initBoard = [
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
  const [board, setBoard] = useState(initBoard)

  return (
    <>
      <div className="bg-green-500 h-screen flex text-center align-center justify-center">
        <Board board={board}></Board>
      </div>
    </>
  )
}

export default App
