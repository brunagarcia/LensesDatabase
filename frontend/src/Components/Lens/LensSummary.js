import React from 'react'
import { Link } from "react-router-dom";

const LensSummary = ({lens}) => {
  return (
    <div className="card z-depth-0 lensSummary">
      <div className="card content grey-text-darken-3">
      <Link to={`/lenses/${lens.id}`}><span className="card-title"> {lens.title} </span></Link>
        <p>Min Focus: {lens.minFocus}</p>
        <p>Focus Type: {lens.focusType}</p>
        <p>Average Price:  <strong>$ {lens.avgPrice}</strong></p>
      </div>
    </div>
  )
}

export default LensSummary

