import React from "react";

import "./TextUnit.scss";

export const TextUnit = ({ header, children }) => {
  return (
    <div className="unit-container">
      <h1 className="title-5">{header}</h1>
      {children}
    </div>
  );
};
