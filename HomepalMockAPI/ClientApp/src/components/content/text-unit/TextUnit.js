import React from "react";

import "./TextUnit.scss";

export const TextUnit = ({ header, headerSize, children }) => {
  return (
    <div className="unit-container">
      <h3 className={headerSize ? "title-" + headerSize : "title-5"}>
        {header}
      </h3>
      {children}
    </div>
  );
};
