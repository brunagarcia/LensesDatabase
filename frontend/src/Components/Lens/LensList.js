import React from 'react'
import LensSummary from './LensSummary'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const LensList = ({ lenses } ) => {
  console.log("list")
  console.log(lenses)
  return (
    <div css={css`
       display: grid;
       grid-template-columns: repeat(4, 1fr);
    `}>
    { lenses && lenses.map(lens => <LensSummary lens={lens} key={lens.id} />)}
    </div>
  )

}

export default LensList;