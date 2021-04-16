import React, { useState } from "react";
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
  const [open, setOpen] = useState("navigation-sub-list");

  const handleOpen = () => {
    if (open === "navigation-sub-list") {
      setOpen("navigation-sub-list-closed");
    } else {
      setOpen("navigation-sub-list");
    }
  };

  const renderHeaderItem = () => {
    return (
      <div className="list-item-header">
        <h3 className="title-8 faded">{label}</h3>
      </div>
    );
  };

  const renderLinkItem = () => {
    return (
      <div
        className="navigation-item-container"
        onClick={() => (depth === 1 ? handleOpen() : () => {})}
      >
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
        <ul className={open}>
          {items.map((subItem) => {
            return (
              <NavigationItem
                key={nextId()}
                depth={depth + 1}
                depthStep={depthStep}
                fontSize={fontSize}
                nextId={nextId}
                formatUrl={formatUrl}
                fontWeight={fontWeight}
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
