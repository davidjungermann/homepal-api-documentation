import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const NavigationItem = ({
  label,
  items,
  depthStep = 15,
  depth = 0,
  fontSize = 18,
  ...rest
}) => {
  return (
    <React.Fragment>
      <ListItem button dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span style={{ fontSize: fontSize }}>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <NavigationItem
              key={subItem.label}
              depth={depth + 1}
              depthStep={depthStep}
              fontSize={fontSize - 2}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </React.Fragment>
  );
};
