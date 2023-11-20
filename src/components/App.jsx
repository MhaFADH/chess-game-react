/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useContext, useEffect, useState } from "react"
import AppContext from "./AppContext"
import Board from "./Board"

const App = () => {
  const {
    board,
    score,
    started,
    actions: { reset, start },
    total
  } = useContext(AppContext)

  return (
    <>
      <header>
        <div className="grid grid-cols-2 border-4 border-solid border-slate-500 bg-slate-500">
          <div className="flex justify-evenly text-white bg-black rounded-mg">
            <span className="float-right font-bold">BLACK</span>
            <span className="float-right">
              Eaten {score.black.eaten} piece(s)
            </span>
            <span className="float-right">
              Played {score.black.count} time(s)
            </span>
          </div>
          <div className="flex justify-evenly bg-white ">
            <span className="float-left font-bold">WHITE</span>
            <span className="float-left">
              Eaten {score.white.eaten} piece(s)
            </span>
            <span className="float-left">
              Played {score.white.count} time(s)
            </span>
          </div>
        </div>
        <div className="flex justify-center bg-slate-500">
          <button className=" bg-red-500 font-bold px-10" onClick={reset}>
            RESET
          </button>
          {!started ? (
            <button className="bg-green-500 font-bold px-10" onClick={start}>
              START
            </button>
          ) : null}
          {total > 0 ? (
            <button className="bg-orange-500 font-bold px-10">UNDO</button>
          ) : null}
        </div>
      </header>
      <div className="bg-slate-500 h-screen flex text-center align-center justify-center">
        <Board board={board}></Board>
      </div>
    </>
  )
}

export default App
