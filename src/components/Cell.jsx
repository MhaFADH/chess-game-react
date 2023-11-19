/* eslint-disable prefer-template */
/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import React, { useCallback, useContext } from "react"
import AppContext from "./AppContext"
import { blackPieces, whitePieces, nextTurn } from "../pieces-related/pieces"
import bishop from "../pieces-related/behaviors/bishop"

const Cell = (props) => {
  const {
    board,
    stash,
    actions: { setBoard },
    score,
    setScore
  } = useContext(AppContext)
  const { content, row, col, piece } = props
  const style = (row + col) % 2 === 0 ? "bg-slate-400" : "bg-slate-200"
  let pieceState = false
  const handleDrop = useCallback(
    (event) => {
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
      const { special } = stash.current
      //console.log(target, source)

      if (
        JSON.stringify(target) !== JSON.stringify(source) &&
        source.team !== target.team
      ) {
        if (
          whitePieces[source.piece]?.fn(source, target, board) ||
          blackPieces[source.piece]?.fn(source, target, board)
        ) {
          setBoard((previous) => {
            previous[target.y][target.x] = source.piece
            previous[source.y][source.x] = 0

            console.log(bishop(source, target, board))

            return [...previous]
          })

          if (source.team === "b") {
            score.black.count += 1
            setScore({ ...score })
            nextTurn()
          } else {
            score.white.count += 1
            setScore({ ...score })
            nextTurn()
          }
        }
      }
    },
    [score]
  )
  const handleStart = useCallback((event) => {
    stash.current = {
      special: event.target.getAttribute("special"),
      sourceData: {
        sX: event.target.getAttribute("col"),
        sY: event.target.getAttribute("row"),
        sPiece: event.target.getAttribute("piece"),
        team: event.target.getAttribute("piece").slice(0, 1)
      }
    }
    //console.log(stash.current)
  }, [])

  if (blackPieces[piece]) {
    pieceState = blackPieces.state
  }

  if (whitePieces[piece]) {
    pieceState = whitePieces.state
  }

  return (
    <div
      piece={piece}
      row={row}
      col={col}
      className={`${style} border-2 border-solid border-slate-500 place-self-center h-[100px] w-[100px]`}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => e.preventDefault()}>
      {content ? (
        <img
          draggable={pieceState}
          onDragStart={(e) => handleStart(e)}
          piece={piece}
          row={row}
          col={col}
          src={content}
          special={0}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Cell
