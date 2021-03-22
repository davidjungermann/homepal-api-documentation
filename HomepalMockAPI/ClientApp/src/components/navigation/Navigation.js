import React, { useState } from "react";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";
import { useHistory } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = ({ items }) => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState({});
  let history = useHistory();

  const handleCurrentNavigationItem = (value) => {
    setCurrentNavigationItem(value);
    history.push("/" + formatUrl(value.label));
  };

  const formatUrl = (label) => {
    return label
      .replace(/\s/g, "-")
      .replace(/[A-Z][a-z]*/g, (str) => str.toLowerCase());
  };

  return (
    <React.Fragment>
      <div className="navigation-container">
        <ul className="navigation-list">
          {items.map((sidebarItem) => (
            <NavigationItem
              key={nextId()}
              nextId={nextId}
              currentNavigationItem={currentNavigationItem}
              handleCurrentNavigationItem={handleCurrentNavigationItem}
              routerLink={sidebarItem.label}
              onClick={() => handleCurrentNavigationItem(sidebarItem)}
              {...sidebarItem}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
