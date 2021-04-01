import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { configureAnchors } from "react-update-url-on-scroll";

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
  handleSelected,
  ...rest
}) => {

  configureAnchors({
    offset: 100,
    affectHistory: true,
    debounce: 100,
    keepLastAnchorHash: true,
  });

  return (
    <React.Fragment>
      <div className="navigation-item-container">
        <Link
          to={"#" + formatUrl(label)}
          smooth
          className={handleSelected(label)}
          {...rest}
        >
          <span style={{ paddingLeft: depth * depthStep, fontSize: fontSize }}>
            {label}
          </span>
        </Link>
      </div>
      {Array.isArray(items) ? (
        <ul className="navigation-sub-list">
          {items.map((subItem) => {
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
                onClick={() => handleCurrentNavigationItem(subItem)}
                handleSelected={handleSelected}
                {...subItem}
              />
            );
          })}
        </ul>
      ) : null}
    </React.Fragment>
  );
};
