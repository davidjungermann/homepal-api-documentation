import React from "react";

import "./SubTextUnit.scss";

export const TextUnit = ({ header, headerSize, isSubsection, children }) => {
  if (isSubsection) {
    headerSize = "title-6";
  }

  return (
    <div className="unit-container">
      <h3 className={headerSize ? "title-" + headerSize : "title-5"}>
        {header}
      </h3>
      {children}
    </div>
  );
};
