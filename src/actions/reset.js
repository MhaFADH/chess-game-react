import { getPieces } from "../pieces-related/pieces/teams"
import initBoard from "../pieces-related/pieces/init-board"
export default (state) => {
  const { blackPieces, whitePieces } = getPieces()
  const stateCopy = JSON.parse(JSON.stringify(state))
  stateCopy.board = initBoard()
  stateCopy.started = false
  whitePieces.state = false
  blackPieces.state = false
  stateCopy.score.white.count = 0
  stateCopy.score.black.count = 0
  stateCopy.score.white.eaten = 0
  stateCopy.score.black.eaten = 0

  return { ...stateCopy }
}
