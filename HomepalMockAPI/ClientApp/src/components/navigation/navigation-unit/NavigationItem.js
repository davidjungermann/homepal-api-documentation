import React, { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavigationItem.scss";

export const NavigationItem = ({ label, formatUrl }) => {

  return (
    <div className="navigation-item-container">
      <Link
        to={"#" + formatUrl(label)}
        activeClassName="active"
        className="list-item-label"
      >
        
        <span>{label}</span>
      </Link>
    </div>
  );
};
