import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavigationItem.scss";

export const NavigationItem = ({
  label,
  items,
  depthStep = 15,
  depth = 0,
  fontSize = 14,
  nextId,
  formatUrl,
  fontWeight,
  marginTop,
  ...rest
}) => {
  if (depth === 0) {
    marginTop = 30;
  } else {
    marginTop = 0;
  }
  return (
    <React.Fragment>
      <div className="navigation-item-container">
        <Link
          to={"#" + formatUrl(label)}
          activeClassName="active"
          className="list-item-label"
          {...rest}
        >
          <span
            style={{
              paddingLeft: depth * depthStep,
              fontSize: fontSize,
              fontWeight: fontWeight,
            }}
          >
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
                fontSize={fontSize}
                nextId={nextId}
                formatUrl={formatUrl}
                fontWeight={fontWeight - 100}
                marginTop={0}
                {...subItem}
              />
            );
          })}
        </ul>
      ) : null}
    </React.Fragment>
  );
};
