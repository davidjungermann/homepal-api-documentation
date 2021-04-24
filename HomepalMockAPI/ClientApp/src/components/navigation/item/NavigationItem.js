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
  history,
  ...rest
}) => {
  const [open, setOpen] = useState(
    depth === 1 ? "navigation-sub-list-closed" : "navigation-sub-list-open"
  );
  const [previousSeciton, setPreviousSeciton] = useState("");

  history.listen((location) => {
    if (depth === 1) {
      if (
        open === "navigation-sub-list-open" &&
        "#" + formatUrl(label) === location.hash
      ) {
        setOpen("navigation-sub-list-open");
      } else if (
        open === "navigation-sub-list-open" &&
        "#" + formatUrl(label) !== location.hash
      ) {
        setOpen("navigation-sub-list-closed");
      } else if (
        open === "navigation-sub-list-closed" &&
        "#" + formatUrl(label) === location.hash
      ) {
        setOpen("navigation-sub-list-open");
      } else if (
        open === "navigation-sub-list-closed" &&
        "#" + formatUrl(label) !== location.hash
      ) {
        setOpen("navigation-sub-list-closed");
      }
    } else if (depth === 2) {
      setOpen("navigation-sub-list-closed");
    }
  });

  const renderHeaderItem = () => {
    return (
      <div className="list-item-header">
        <h3 className="title-8 faded">{label}</h3>
      </div>
    );
  };

  const renderLinkItem = () => {
    return (
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
                history={history}
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
