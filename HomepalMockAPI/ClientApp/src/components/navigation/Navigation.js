import React, { useState } from "react";
import "./Navigation.scss";
import List from "@material-ui/core/List";
import { NavigationItem } from "./item/NavigationItem";

export const Navigation = ({ items }) => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState("Init");

  const handleCurrentNavigationItem = (value) => {
    setCurrentNavigationItem(value);
  };

  return (
    <React.Fragment>
      <h1>{currentNavigationItem}</h1>
      <div className="navigation-container">
        <List disablePadding dense>
          {items.map((sidebarItem, index) => (
            <NavigationItem
              handleCurrentNavigationItem={handleCurrentNavigationItem}
              key={`${sidebarItem.label}${index}`}
              {...sidebarItem}
            />
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};
