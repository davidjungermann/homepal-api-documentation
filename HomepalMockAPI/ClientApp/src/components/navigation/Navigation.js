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
      <div className="navigation-container">
        <List dense>
          {items.map((sidebarItem) => (
            <NavigationItem
              key={nextId()}
              nextId={nextId}
              currentNavigationItem={currentNavigationItem}
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
