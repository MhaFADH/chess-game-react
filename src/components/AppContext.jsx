/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { createContext, useState } from "react"
import { initBoard } from "../pieces-related/pieces"

const AppContext = createContext()
export const AppContextProvider = (props) => {
  const [board, setBoard] = useState([...initBoard])
  const resetBoard = () => {
    setBoard([...initBoard])
  }
  const setBoardFn = (newBoard) => {
    setBoard([...newBoard])
  }

  return (
    <AppContext.Provider
      {...props}
      value={{
        mainBoard: { board },
        actions: {
          reset: resetBoard,
          setBoard: setBoardFn
        }
      }}
    />
  )
}

export default AppContext
