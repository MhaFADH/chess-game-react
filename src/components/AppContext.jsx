/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react"
import {
  initBoard,
  initScore,
  blackPieces,
  whitePieces
} from "../pieces-related/pieces"

const AppContext = createContext()
export const AppContextProvider = (props) => {
  const [board, setBoard] = useState(initBoard)
  const [score, setScore] = useState(initScore)
  const [started, setStarted] = useState(false)
  const totalCount = useRef(0)
  const resetBoard = useCallback(() => {
    console.log("reset")
    setStarted(false)
    whitePieces.state = false
    blackPieces.state = false
    totalCount.current = 0
    setBoard(initBoard)

    setScore((s) => {
      s.white.count = 0
      s.black.count = 0
      s.white.eaten = 0
      s.black.eaten = 0

      return s
    })
  }, [])
  const start = () => {
    whitePieces.state = true
    setStarted(true)
  }
  const totalUpdate = (nb) => {
    totalCount.current += nb
  }
  useEffect(() => {
    totalCount.current = score.black.count + score.white.count
  }, [score])

  return (
    <AppContext.Provider
      {...props}
      value={{
        board,
        stash: useRef(),
        started,
        actions: {
          start,
          reset: resetBoard,
          setBoard
        },
        score,
        setScore,
        totalUpdate,
        total: totalCount.current
      }}
    />
  )
}

export default AppContext
