/* eslint-disable no-console */
import { useContext } from "react"
import AppContext from "./AppContext"
import Board from "./Board"

const App = () => {
  const {
    mainBoard: { board }
  } = useContext(AppContext)

  return (
    <>
      <div className="bg-green-500 h-screen flex text-center align-center justify-center">
        <Board board={board}></Board>
      </div>
    </>
  )
}

export default App
