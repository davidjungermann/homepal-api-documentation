import React from "react";
import "./TableItem.scss";

export const TableItem = ({ children, description }) => {
  if (description === undefined) {
    description = "";
  }

  return (
    <div className="table-item-container">
      <p>
        {children}
        <b>{description}</b>
      </p>
    </div>
  );
};
