import React, { useState } from "react";
import "./Navigation.scss";
import List from "@material-ui/core/List";
import { NavigationItem } from "./item/NavigationItem";
import nextId from "react-id-generator";

export const Navigation = ({ items }) => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState({});

  const handleCurrentNavigationItem = (value) => {
    setCurrentNavigationItem(value);
  };

  return (
    <React.Fragment>
      <h1>{currentNavigationItem.label}</h1>
      <div className="navigation-container">
        <List disablePadding dense>
          {items.map((sidebarItem) => (
            <NavigationItem
              key={nextId()}
              nextId={nextId}
              handleCurrentNavigationItem={handleCurrentNavigationItem}
              onClick={() => handleCurrentNavigationItem(sidebarItem)}
              {...sidebarItem}
            />
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};
