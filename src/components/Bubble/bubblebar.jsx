import React from 'react';

const bubblebar = ({ height, color, index, isComparing, isSwapping }) => {
    let barColor = color;
  if (isSwapping) {
    barColor = 'rgba(255, 99, 132, 0.8)'; // Color for swapping
  } else if (isComparing) {
    barColor = 'rgba(54, 162, 235, 0.8)'; // Color for comparing
  }
  return (
    <div className="bar-container">
    <div className="bar" style={{ height: `${height}px`, backgroundColor: barColor }}></div>
    <div className="bar-index">{index}</div>
  </div>
  )
}

export default bubblebar
