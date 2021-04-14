import React from "react";

import "./Returns.scss";

export const Returns = ({ children }) => {
  return (
    <div className="returns-container">
      <h3 className="returns-header title-7">Returns</h3>
      {children}
    </div>
  );
};
