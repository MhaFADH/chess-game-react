import React, { createContext, useReducer, useRef } from "react"
import { initScore } from "../pieces-related/pieces/main"
import initBoard from "../pieces-related/pieces/init-board"
import reset from "../actions/reset"
import modify from "../actions/modify"
import start from "../actions/start"

const reducer = (state, action) => {
  const { type } = action

  switch (type) {
    case "modify":
      return modify(state, action)

    case "reset":
      return reset(state)

    case "start":
      return start(state)

    default:
      return { ...state }
  }
}
const AppContext = createContext()
export const AppContextProvider = (props) => {
  const initState = {
    board: initBoard(),
    score: initScore(),
    started: false,
    turn: "none"
  }
  const [mainState, dispatch] = useReducer(reducer, initState)

  return (
    <AppContext.Provider
      {...props}
      value={{
        stash: useRef(),
        reducer: { mainState, dispatch }
      }}
    />
  )
}

export default AppContext
