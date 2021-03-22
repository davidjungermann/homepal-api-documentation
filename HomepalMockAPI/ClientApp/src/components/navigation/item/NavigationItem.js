import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./NavigationItem.scss";

export const NavigationItem = ({
  label,
  items,
  depthStep = 15,
  depth = 0,
  fontSize = 18,
  currentNavigationItem,
  handleCurrentNavigationItem,
  nextId,
  ...rest
}) => {
  const handleSelected = (label) => {
    if (label === currentNavigationItem.label) {
      return "list-item-label-selected";
    } else {
      return "list-item-label";
    }
  };

  return (
    <React.Fragment>
      <ListItem button {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span className={handleSelected(label)} style={{ fontSize: fontSize }}>
            {label}
          </span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding>
          {items.map((subItem) => (
            <NavigationItem
              key={nextId()}
              depth={depth + 1}
              depthStep={depthStep}
              fontSize={fontSize - 2}
              currentNavigationItem={currentNavigationItem}
              handleCurrentNavigationItem={handleCurrentNavigationItem}
              nextId={nextId}
              onClick={() => handleCurrentNavigationItem(subItem)}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </React.Fragment>
  );
};
