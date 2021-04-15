import React from "react";

import "./TextUnit.scss";

export const SubTextUnit = ({ header, children }) => {

  return (
    <div className="sub-unit-container">
      <h3 className={"title-7 border-bottom"}>
        {header}
      </h3>
      {children}
    </div>
  );
};
