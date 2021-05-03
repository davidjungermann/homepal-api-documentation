import React from "react";
import nextId from "react-id-generator";
import { HeaderItem } from "./header/HeaderItem";
import { NavigationItem } from "./navigation-unit/NavigationItem";
import { NavigationUnit } from "./navigation-unit/NavigationUnit";

import "./Navigation.scss";

export const Navigation = ({ items, formatUrl, history }) => {
  return (
    <React.Fragment>
      <div className="navigation-container">
        <div className="navigation-header">
          <span>
            <h1 className="title-7">Homebase API</h1>
          </span>
          <span id="docs-text" className="title-7">
            Docs
          </span>
        </div>

        <select id="version" name="version">
          <option value="v1">v1 (latest)</option>
        </select>
        {/* If more than one navigation item is passed to NavigationUnit, the first item becomes the header, and subsequent items are placed in a list. */}
        <ul className="navigation-list">
          <div key={nextId()} className="navigation-list-header">
            <HeaderItem>Introduction</HeaderItem>
            <NavigationUnit>
              <NavigationItem
                label="About the API"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Conceptual Information"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Conceptual Overview"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};
