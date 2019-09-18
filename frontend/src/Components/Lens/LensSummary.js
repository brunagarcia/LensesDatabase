import React from "react";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const LensSummary = ({ lens }) => {
  return (
    <div
      css={css`
        color: grey;
        padding: 32px;
        font-size: 24px;
        border: 1px;
      `}
    >
        <Link to={`/lenses/${lens.id}`}>
          <span> {lens.title} </span>
        </Link>
        <p>Min Focus: {lens.minFocus}</p>
        <p>Focus Type: {lens.focusType}</p>
        <p>
          Average Price: <strong>$ {lens.avgPrice}</strong>
        </p>
    </div>
  );
};

export default LensSummary;
