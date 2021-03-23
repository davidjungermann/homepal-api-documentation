import React from "react";

import "./TextUnit.scss";

export const TextUnit = ({ header, content }) => {
  return (
    <div className="text-unit-container">
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
};
