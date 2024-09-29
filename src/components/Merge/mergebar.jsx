import React from 'react'

const mergebar = ({ height, color, index }) => {
  return (
    <div className="bar-container">
      <div className="bar" style={{ height: `${height}px`, backgroundColor: color }}></div>
      <div className="bar-index">{index}</div>
    </div>
  )
}

export default mergebar
