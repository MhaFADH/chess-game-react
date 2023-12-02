import { useContext } from "react"
import AppContext from "./AppContext"
import Board from "./Board"
import WhitePanel from "./WhitePanel"
import BlackPanel from "./BlackPanel"

const App = () => {
  const {
    reducer: { mainState, dispatch }
  } = useContext(AppContext)

  return (
    <div className="select-none">
      <header>
        <div className="grid grid-cols-2 border-4 border-solid border-slate-500 bg-slate-500">
          <BlackPanel score={mainState.score}></BlackPanel>
          <WhitePanel score={mainState.score}></WhitePanel>
        </div>

        <div className="flex justify-center bg-slate-500">
          <button
            className=" bg-red-500 font-bold px-10"
            onClick={() => dispatch({ type: "reset" })}>
            RESET
          </button>
          {!mainState.started ? (
            <button
              className="bg-green-500 font-bold px-10"
              onClick={() => dispatch({ type: "start" })}>
              START
            </button>
          ) : null}
          {mainState.previousState !== null ? (
            <button
              className="bg-orange-500 font-bold px-10"
              onClick={() => {
                dispatch({ type: "undo" })
              }}>
              UNDO
            </button>
          ) : (
            <></>
          )}
        </div>
      </header>
      <div className="bg-slate-500 h-screen flex text-center align-center justify-center">
        <Board board={mainState.board}></Board>
      </div>
    </div>
  )
}

export default App
