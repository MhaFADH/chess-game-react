/* eslint-disable prefer-template */
/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import React, { useCallback, useContext } from "react"
import AppContext from "./AppContext"
import { blackPieces, whitePieces, nextTurn } from "../pieces-related/pieces"

const Cell = (props) => {
  const {
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
        x: event.target.getAttribute("col"),
        y: event.target.getAttribute("row"),
        piece: event.target.getAttribute("piece"),
        team: event.target.getAttribute("piece").slice(0, 1)
      }
      const source = {
        x: stash.current.sX,
        y: stash.current.sY,
        piece: stash.current.sPiece,
        team: stash.current.team
      }

      console.log(target, source)

      if (JSON.stringify(target) !== JSON.stringify(source)) {
        console.log("hey")
        setBoard((previous) => {
          previous[target.y][target.x] = source.piece
          previous[source.y][source.x] = 0

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
    },
    [score]
  )
  const handleStart = useCallback((event) => {
    stash.current = {
      sX: event.target.getAttribute("col"),
      sY: event.target.getAttribute("row"),
      sPiece: event.target.getAttribute("piece"),
      team: event.target.getAttribute("piece").slice(0, 1)
    }
    console.log(stash.current)
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
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Cell
