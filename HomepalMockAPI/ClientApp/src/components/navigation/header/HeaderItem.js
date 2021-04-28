import React, { useState } from "react";
import "./HeaderItem.scss";

export const HeaderItem = ({ children }) => {
  return (
    <div className="list-item-header">
      <h3 className="title-8 faded">{children}</h3>
    </div>
  );
};
