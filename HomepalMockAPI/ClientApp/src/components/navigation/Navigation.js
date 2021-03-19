import React from "react";
import "./Navigation.scss";
import List from "@material-ui/core/List";
import { NavigationItem } from "./item/NavigationItem";

export const Navigation = ({ items, depthStep, depth }) => {
  return (
    <React.Fragment>
      <div className="navigation-container">
        <List disablePadding dense>
          {items.map((sidebarItem, index) => (
            <NavigationItem
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              {...sidebarItem}
            />
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};
