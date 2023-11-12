/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import React, { useCallback, useContext } from "react"
import AppContext from "./AppContext"

const Cell = (props) => {
  const {
    mainBoard: { board },
    actions: { setBoard }
  } = useContext(AppContext)
  const { content, row, col, piece } = props
  const style = (row + col) % 2 === 0 ? "bg-slate-400" : "bg-slate-200"
  const handleDrop = useCallback((event) => {
    const x = event.target.getAttribute("col")
    const y = event.target.getAttribute("row")
    const tpiece = event.target.getAttribute("piece")
    const spiece = event.dataTransfer.getData("sourcePiece")
    const sY = event.dataTransfer.getData("sourceY")
    const sX = event.dataTransfer.getData("sourceX")
    const newBoard = [...board]
    newBoard[y][x] = spiece
    newBoard[sY][sX] = 0
    console.log(spiece)
    setBoard([...newBoard])
  }, [])
  const handleStart = useCallback((event) => {
    const x = event.target.getAttribute("col")
    const y = event.target.getAttribute("row")
    const spiece = event.target.getAttribute("piece")
    console.log(spiece)

    event.dataTransfer.clearData()
    event.dataTransfer.setData("sourcePiece", spiece)
    event.dataTransfer.setData("sourceY", y)
    event.dataTransfer.setData("sourceX", x)
  }, [])

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
          draggable
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
