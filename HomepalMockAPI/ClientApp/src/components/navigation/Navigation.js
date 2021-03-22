import React, { useState } from "react";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";
import { useHistory } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = ({ items, formatUrl, setRouteNames }) => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState({});
  let history = useHistory();

  const handleCurrentNavigationItem = (value) => {
    setCurrentNavigationItem(value);
    history.push("/" + formatUrl(value.label));
  };

  const addRoute = (url) => {
    setRouteNames(formatUrl(url));
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
              onClick={() => handleCurrentNavigationItem(sidebarItem)}
              addRoute={addRoute}
              {...sidebarItem}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
