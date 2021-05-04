import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavigationItem.scss";

export const NavigationItem = ({ label, formatUrl }) => {
  return (
    
      <Link
        to={"#" + formatUrl(label)}
        activeClassName="active"
        className="list-item-label"
      >
        <div className="navigation-item-container">
          <div className="active-marker" />
          <span>{label}</span>
        </div>
      </Link>
  );
};
