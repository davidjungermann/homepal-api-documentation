import React from "react";

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
  formatUrl,
  urls,
  generateRoutes,
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
      <div className="navigation-item-container">
        <li className={handleSelected(label)} {...rest}>
          <span style={{ paddingLeft: depth * depthStep, fontSize: fontSize }}>
            {label}
          </span>
        </li>
      </div>
      {Array.isArray(items) ? (
        <ul className="navigation-sub-list">
          {items.map((subItem) => {
            urls.push(formatUrl(subItem.label));
            return (
              <NavigationItem
                key={nextId()}
                depth={depth + 1}
                depthStep={depthStep}
                fontSize={fontSize - 2}
                currentNavigationItem={currentNavigationItem}
                handleCurrentNavigationItem={handleCurrentNavigationItem}
                nextId={nextId}
                formatUrl={formatUrl}
                urls={urls}
                onClick={() => handleCurrentNavigationItem(subItem)}
                {...subItem}
              />
            );
          })}
        </ul>
      ) : (
        null
      )}
    </React.Fragment>
  );
};
