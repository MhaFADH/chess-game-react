import check from "../pieces-related/behaviors/checkmate/check"
import { blackPieces, whitePieces } from "../pieces-related/pieces/teams"
import handlerNextMove from "../pieces-related/behaviors/checkmate/handler-next-move"

export default (event, { stash, reducer: { mainState, dispatch } }) => {
  const target = {
    x: parseInt(event.target.getAttribute("data-col"), 10),
    y: parseInt(event.target.getAttribute("data-row"), 10),
    piece: event.target.getAttribute("data-piece"),
    team: event.target.getAttribute("data-piece").slice(0, 1)
  }
  const source = {
    x: parseInt(stash.current.sourceData.sX, 10),

    y: parseInt(stash.current.sourceData.sY, 10),
    piece: stash.current.sourceData.sPiece,
    team: stash.current.sourceData.team
  }
  const chk = check(mainState)

  if (chk === "checkmate") {
    const team = source.team === "b" ? "WHITE" : "BLACK"
    dispatch({ type: "winner", payload: { team } })

    return null
  }

  if (chk && handlerNextMove(mainState, source, target)) {
    return null
  }

  if (!handlerNextMove(mainState, source, target)) {
    if (
      JSON.stringify(target) !== JSON.stringify(source) &&
      source.team !== target.team
    ) {
      if (
        whitePieces[source.piece]?.fn(source, target, mainState.board) ||
        blackPieces[source.piece]?.fn(source, target, mainState.board)
      ) {
        dispatch({ type: "modify", payload: { source, target } })
      }
    }
  }

  return null
}
