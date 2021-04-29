import React from "react";
import nextId from "react-id-generator";
import { HeaderItem } from "./header/HeaderItem";
import { NavigationItem } from "./navigation-unit/NavigationItem";

import "./Navigation.scss";
import { HeaderItem } from "./header/HeaderItem";

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

        <ul className="navigation-list">
          <div key={nextId()} className="navigation-list-header">
            <HeaderItem>Introduction</HeaderItem>
            <NavigationItem
              label="About the API"
              formatUrl={formatUrl}
            ></NavigationItem>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};
