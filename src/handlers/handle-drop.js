import { getPieces } from "../pieces-related/pieces/teams"

export default (event, { stash, reducer: { mainState, dispatch } }) => {
  const { blackPieces, whitePieces } = getPieces()
  const target = {
    x: parseInt(event.target.getAttribute("col"), 10),
    y: parseInt(event.target.getAttribute("row"), 10),
    piece: event.target.getAttribute("piece"),
    team: event.target.getAttribute("piece").slice(0, 1)
  }
  const source = {
    x: parseInt(stash.current.sourceData.sX, 10),

    y: parseInt(stash.current.sourceData.sY, 10),
    piece: stash.current.sourceData.sPiece,
    team: stash.current.sourceData.team
  }

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
