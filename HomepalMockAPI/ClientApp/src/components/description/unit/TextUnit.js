import React from "react";

import "./TextUnit.scss";

export const TextUnit = ({ header, content, id }) => {
  return (
    <div id={id} className="text-unit-container">
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
};
