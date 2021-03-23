import React from "react";

export const TextUnit = ({ header, content }) => {
  return (
    <React.Fragment>
      <h2>{header}</h2>
      <p>{content}</p>
    </React.Fragment>
  );
};
