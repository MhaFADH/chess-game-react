export default (event, { stash }) => {
  stash.current = {
    sourceData: {
      sX: event.target.getAttribute("data-col"),
      sY: event.target.getAttribute("data-row"),
      sPiece: event.target.getAttribute("data-piece"),
      team: event.target.getAttribute("data-piece").slice(0, 1)
    }
  }
}
