import React, { useState, Children } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavigationUnit.scss";

export const NavigationUnit = ({ children }) => {
  console.log(Children.count(children));
  return <div className="navigation-unit-container">{children}</div>;
};
