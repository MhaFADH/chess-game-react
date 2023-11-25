import { getPieces } from "../pieces-related/pieces/teams"

export default (state) => {
  const { whitePieces } = getPieces()
  const stateCopy = JSON.parse(JSON.stringify(state))
  whitePieces.state = true
  stateCopy.started = true

  return { ...stateCopy }
}
