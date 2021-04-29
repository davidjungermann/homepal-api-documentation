import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavigationSubItem.scss";

export const NavigationSubItem = ({ children, formatUrl }) => {
  return (
    <div className="navigation-item-container">
      <Link
        to={"#" + formatUrl(children.toString())}
        activeClassName="active"
        className="list-item-label"
      >
        <span>{children}</span>
      </Link>
    </div>
  );
};
