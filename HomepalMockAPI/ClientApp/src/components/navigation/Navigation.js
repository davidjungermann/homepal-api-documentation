import React from "react";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";

import "./Navigation.scss";

export const Navigation = ({ items, formatUrl, history }) => {
  return (
    <React.Fragment>
      <div className="navigation-container">
        <div
          onClick={() =>
            console.log("Från navigation: " + history.location.hash)
          }
        >
          Click!
        </div>
        <ul className="navigation-list">
          {items.map((sidebarItem) => {
            return (
              <NavigationItem
                key={nextId()}
                nextId={nextId}
                formatUrl={formatUrl}
                {...sidebarItem}
              />
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
