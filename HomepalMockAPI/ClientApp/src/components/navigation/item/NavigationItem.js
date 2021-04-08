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
  ...rest
}) => {
  const renderHeaderItem = () => {
    return <span className="list-item-header">{label}</span>;
  };

  const renderLinkItem = () => {
    return (
      <div className="navigation-item-container">
        <Link
          to={"#" + formatUrl(label)}
          activeClassName="active"
          className="list-item-label"
          smooth
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
    );
  };

  const renderNextItem = () => {
    if (Array.isArray(items)) {
      return (
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
      );
    } else {
      return null;
    }
  };

  if (depth === 0) {
    return (
      <React.Fragment>
        {renderHeaderItem()}
        {renderNextItem()}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {renderLinkItem()}
        {renderNextItem()}
      </React.Fragment>
    );
  }
};
