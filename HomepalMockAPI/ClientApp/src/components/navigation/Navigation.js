import React from "react";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";

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

        <ul className="navigation-list">
          {items.map((sidebarItem) => {
            return (
              <div key={nextId()} className="navigation-list-header">
                <NavigationItem
                  key={nextId()}
                  nextId={nextId}
                  formatUrl={formatUrl}
                  fontWeight={600}
                  history={history}
                  {...sidebarItem}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
