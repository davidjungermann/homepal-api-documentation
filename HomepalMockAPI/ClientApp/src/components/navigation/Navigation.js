import React from "react";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";
import { withRouter } from "react-router";

import "./Navigation.scss";

const NavigationContent = ({ items, formatUrl, match, location, history }) => {
  console.log("Från Navigation: " + JSON.stringify(location));
  return (
    <React.Fragment>
      <div className="navigation-container">
        <div className="navigation-header">
          <span>
            <h1 className="title-7">Homebase API v1</h1>
          </span>
          <span id="docs-text" className="title-7">
            Docs
          </span>
        </div>
        <ul className="navigation-list">
          {items.map((sidebarItem) => {
            return (
              <div key={nextId()} className="navigation-list-header">
                <NavigationItem
                  key={nextId()}
                  nextId={nextId}
                  formatUrl={formatUrl}
                  fontWeight={600}
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

export const Navigation = withRouter(NavigationContent);
