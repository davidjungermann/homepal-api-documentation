import React from "react";
import { useHistory } from "react-router-dom";

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
  let history = useHistory();

  const handleSelected = (label) => {
    if (label === currentNavigationItem.label) {
      history.push("/" + formatUrl(currentNavigationItem.label));
      return "list-item-label-selected";
    } else {
      return "list-item-label";
    }
  };

  const formatUrl = (label) => {
    return label
      .replace(/\s/g, "-")
      .replace(/[A-Z][a-z]*/g, (str) => str.toLowerCase());
  };

  return (
    <React.Fragment>
      <div className="navigation-item-container">
        <li className={handleSelected(label)} {...rest}>
          <span style={{ paddingLeft: depth * depthStep, fontSize: fontSize }}>
            {label}
          </span>
        </li>
      </div>
      {Array.isArray(items) ? (
        <ul className="navigation-sub-list">
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
        </ul>
      ) : null}
    </React.Fragment>
  );
};
