/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import React from "react"

const Cell = (props) => {
  const { content, row, col } = props
  const sumRC = row + col
  const style = sumRC % 2 === 0 ? "bg-slate-400" : "bg-slate-200"

  return (
    <div
      row={row}
      col={col}
      className={`${style} border-2 border-solid border-slate-500 place-self-center h-[100px] w-[100px]`}
      onDrop={(e) =>
        console.log(e.dataTransfer.getData("hey"), "arrived", e.target)
      }
      onDragOver={(e) => e.preventDefault()}>
      {content}
    </div>
  )
}

export default Cell
