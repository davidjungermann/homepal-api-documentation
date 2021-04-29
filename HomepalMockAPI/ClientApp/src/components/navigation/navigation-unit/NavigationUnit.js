import React, { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavigationUnit.scss";

export const NavigationUnit = ({ children }) => {
  return <div className="navigation-unit-container">{children}</div>;
};
