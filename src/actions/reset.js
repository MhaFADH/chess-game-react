import initBoard from "../pieces-related/pieces/init-board"
export default (state) => {
  const stateCopy = JSON.parse(JSON.stringify(state))
  stateCopy.board = initBoard()
  stateCopy.started = false
  stateCopy.score.white.count = 0
  stateCopy.score.black.count = 0
  stateCopy.score.white.eaten = 0
  stateCopy.score.black.eaten = 0
  stateCopy.turn = "none"
  stateCopy.previousState = null
  stateCopy.winner = null

  return { ...stateCopy }
}
