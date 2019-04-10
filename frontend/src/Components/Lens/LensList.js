import React from 'react'
import LensSummary from './LensSummary'

const LensList = ({ lenses } ) => {
  console.log("list")
  console.log(lenses)
  return (
    <div className="lens section">
      { lenses && lenses.map(lens => {
        return(
          <LensSummary lens={lens} key={lens.id} />
        )
      })}
    </div>
  )

}

export default LensList;