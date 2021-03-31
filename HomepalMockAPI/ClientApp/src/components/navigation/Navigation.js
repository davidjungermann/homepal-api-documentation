import React, { useState } from "react";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";

import "./Navigation.scss";

export const Navigation = ({ items, formatUrl }) => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState({});

  const handleSelected = (label) => {
    if (label === currentNavigationItem.label) {
      return "active";
    } else {
      return "list-item-label";
    }
  };

  const handleCurrentNavigationItem = (value) => {
    console.log(value);
    setCurrentNavigationItem(value);
  };

  return (
    <React.Fragment>
      <div className="navigation-container">
        <ul className="navigation-list">
          {items.map((sidebarItem) => {
            return (
              <NavigationItem
                key={nextId()}
                nextId={nextId}
                currentNavigationItem={currentNavigationItem}
                handleCurrentNavigationItem={handleCurrentNavigationItem}
                formatUrl={formatUrl}
                onClick={() => handleCurrentNavigationItem(sidebarItem)}
                handleSelected={handleSelected}
                {...sidebarItem}
              />
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
