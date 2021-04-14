import React from "react";

import "./ReturnsItem.scss";

export const ReturnsItem = ({ icon, children }) => {
  return (
    <div className="returns-item-container">
      <span className="returns-item-icon">{icon}</span>
      <p className="returns-item-content">{children}</p>
    </div>
  );
};
