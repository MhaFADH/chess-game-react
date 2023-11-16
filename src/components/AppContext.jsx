/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { createContext, useCallback, useRef, useState } from "react"
import { initBoard, blackPieces, whitePieces } from "../pieces-related/pieces"

const AppContext = createContext()
export const AppContextProvider = (props) => {
  const initBoardSave = initBoard
  const [board, setBoard] = useState(initBoard)
  const [weaten, setWEaten] = useState(0)
  const [beaten, setBEaten] = useState(0)
  const [wcount, setWCount] = useState(0)
  const [bcount, setBCount] = useState(0)
  const [started, setStarted] = useState(false)
  const totalCount = useRef(0)
  const resetBoard = useCallback(() => {
    setStarted(false)
    whitePieces.state = false
    blackPieces.state = false
    totalCount.current = 0
    setBoard(initBoard)
    console.log("hello")
    console.log(board)
    console.log(initBoard())
    setWEaten(0)
    setBEaten(0)
    setWCount(0)
    setBCount(0)
  }, [board])
  const setWEatenFn = (nb) => {
    setWEaten(weaten + nb)
  }
  const setBEatenFn = (nb) => {
    setBEaten(beaten + nb)
  }
  const setWCountFn = (nb) => {
    setWCount(wcount + nb)
    totalCount.current = wcount + bcount
  }
  const setBCountFn = (nb) => {
    setBCount(bcount + nb)
    totalCount.current = wcount + bcount
  }
  const start = () => {
    whitePieces.state = true
    setStarted(true)
  }

  return (
    <AppContext.Provider
      {...props}
      value={{
        mainBoard: board,
        stash: useRef(),
        started,
        actions: {
          start,
          reset: resetBoard,
          setBoard
        },
        score: {
          total: totalCount.current,
          white: {
            eaten: weaten,
            setEaten: setWEatenFn,
            count: wcount,
            setCount: setWCountFn
          },
          black: {
            eaten: beaten,
            setEaten: setBEatenFn,
            count: bcount,
            setCount: setBCountFn
          }
        }
      }}
    />
  )
}

export default AppContext
