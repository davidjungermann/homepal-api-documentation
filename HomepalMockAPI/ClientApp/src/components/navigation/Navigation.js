import React, { useState } from "react";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";

import "./Navigation.scss";

export const Navigation = ({ items, formatUrl, history }) => {
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
