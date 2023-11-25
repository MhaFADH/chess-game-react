export default (event, { stash }) => {
  stash.current = {
    special: event.target.getAttribute("special"),
    sourceData: {
      sX: event.target.getAttribute("col"),
      sY: event.target.getAttribute("row"),
      sPiece: event.target.getAttribute("piece"),
      team: event.target.getAttribute("piece").slice(0, 1)
    }
  }
}
