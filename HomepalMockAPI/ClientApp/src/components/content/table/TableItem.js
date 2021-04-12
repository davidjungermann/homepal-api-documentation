import React from "react";
import "./TableItem.scss";

export const TableItem = ({ children, description }) => {
  if (description === undefined) {
    description = "";
  }

  return (
    <div className="table-item-container">
      <h3 className="title-8 table-item">{children}</h3>
      <p className="small table-item-description">{description}</p>
    </div>
  );
};
