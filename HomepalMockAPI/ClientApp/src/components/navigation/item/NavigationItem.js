import React, { useState, useEffect } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { configureAnchors } from "react-update-url-on-scroll";
import { useLocation } from "react-router-dom";

import "./NavigationItem.scss";

export const NavigationItem = ({
  label,
  items,
  depthStep = 15,
  depth = 0,
  fontSize = 18,
  nextId,
  formatUrl,
  ...rest
}) => {
  configureAnchors({
    offset: 100,
    affectHistory: true,
    debounce: 100,
    keepLastAnchorHash: true,
  });
  const [locationState] = useState(useLocation());

  //isActive kallas bara en gång när listan instantieras, det är problemet! Men den uppdateras när vi klickar.

  return (
    <React.Fragment>
      <div className="navigation-item-container">
        <Link
          to={"#" + formatUrl(label)}
          smooth
          className="list-item-label"
          // isActive={() => {
          //   return locationState.hash === "#" + formatUrl(label);
          // }}
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
                nextId={nextId}
                formatUrl={formatUrl}
                {...subItem}
              />
            );
          })}
        </ul>
      ) : null}
    </React.Fragment>
  );
};
