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
<<<<<<< HEAD
  const [open, setOpen] = useState(
    depth === 1 || depth === 2
      ? "navigation-sub-list-closed"
      : "navigation-sub-list-open"
  );

  history.listen((location) => {
    if (depth === 1 || depth === 2) {
      if (
        open === "navigation-sub-list-open" &&
        "#" + formatUrl(label) !== location.hash
      ) {
        // This is a terrible solution. TODO: Fix!
        if (
          location.hash === "#conceptual-overview" ||
          location.hash === "#database-properties" ||
          location.hash === "#enumerated-values" ||
          location.hash === "#generate-access-key" ||
          location.hash === "#error-codes" ||
          location.hash === "#pagination" ||
          location.hash === "#sorting" ||
          location.hash === "#upcoming-deprecations" ||
          location.hash === "#get-agents" ||
          location.hash === "#get-agent" ||
          location.hash === "#create-agent" ||
          location.hash === "#update-agent" ||
          location.hash === "#delete-agent" ||
          location.hash === "#get-buildings" ||
          location.hash === "#get-building" ||
          location.hash === "#create-building" ||
          location.hash === "#update-building" ||
          location.hash === "#delete-building" ||
          location.hash === "#get-customers" ||
          location.hash === "#get-customer" ||
          location.hash === "#create-customer" ||
          location.hash === "#update-customer" ||
          location.hash === "#delete-customer" ||
          location.hash === "#get-leasables" ||
          location.hash === "#get-leasable" ||
          location.hash === "#create-leasable" ||
          location.hash === "#update-leasable" ||
          location.hash === "#delete-leasable" ||
          location.hash === "#get-owners" ||
          location.hash === "#get-owner" ||
          location.hash === "#create-owner" ||
          location.hash === "#update-owner" ||
          location.hash === "#delete-owner" ||
          location.hash === "#get-realestates" ||
          location.hash === "#get-realestate" ||
          location.hash === "#create-realestate" ||
          location.hash === "#update-realestate" ||
          location.hash === "#delete-realestate" ||
          location.hash === "#get-regions" ||
          location.hash === "#create-region" ||
          location.hash === "#delete-region"
        ) {
          setOpen("navigation-sub-list-open");
          console.log("haj");
        } else {
          setOpen("navigation-sub-list-closed");
        }
      } else if (
        open === "navigation-sub-list-closed" &&
        "#" + formatUrl(label) === location.hash
      ) {
        if (
          location.hash === "#conceptual-overview" ||
          location.hash === "#database-properties" ||
          location.hash === "#enumerated-values" ||
          location.hash === "#generate-access-key" ||
          location.hash === "#error-codes" ||
          location.hash === "#pagination" ||
          location.hash === "#sorting" ||
          location.hash === "#upcoming-deprecations" ||
          location.hash === "#get-agents" ||
          location.hash === "#get-agent" ||
          location.hash === "#create-agent" ||
          location.hash === "#update-agent" ||
          location.hash === "#delete-agent" ||
          location.hash === "#get-buildings" ||
          location.hash === "#get-building" ||
          location.hash === "#create-building" ||
          location.hash === "#update-building" ||
          location.hash === "#delete-building" ||
          location.hash === "#get-customers" ||
          location.hash === "#get-customer" ||
          location.hash === "#create-customer" ||
          location.hash === "#update-customer" ||
          location.hash === "#delete-customer" ||
          location.hash === "#get-leasables" ||
          location.hash === "#get-leasable" ||
          location.hash === "#create-leasable" ||
          location.hash === "#update-leasable" ||
          location.hash === "#delete-leasable" ||
          location.hash === "#get-owners" ||
          location.hash === "#get-owner" ||
          location.hash === "#create-owner" ||
          location.hash === "#update-owner" ||
          location.hash === "#delete-owner" ||
          location.hash === "#get-realestates" ||
          location.hash === "#get-realestate" ||
          location.hash === "#create-realestate" ||
          location.hash === "#update-realestate" ||
          location.hash === "#delete-realestate" ||
          location.hash === "#get-regions" ||
          location.hash === "#create-region" ||
          location.hash === "#delete-region"
        ) {
          setOpen("navigation-sub-list-closed");
        }
        setOpen("navigation-sub-list-open");
      } else if (
        open === "navigation-sub-list-closed" &&
        "#" + formatUrl(label) !== location.hash
      ) {
        setOpen("navigation-sub-list-closed");
      }
    }
  });
=======
  const [open, setOpen] = useState("navigation-sub-list");

  const handleOpen = () => {
    if (open === "navigation-sub-list") {
      setOpen("navigation-sub-list-closed");
    } else {
      setOpen("navigation-sub-list");
    }
  };
>>>>>>> main

  const renderHeaderItem = () => {
    return (
      <div className="list-item-header">
        <h3 className="title-8 faded">{label}</h3>
      </div>
    );
  };

  const renderLinkItem = () => {
    return (
<<<<<<< HEAD
      <div className="navigation-item-container">
=======
      <div
        className="navigation-item-container"
        onClick={() => (depth === 1 ? handleOpen(label) : () => {})}
      >
>>>>>>> main
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
  } else if (depth === 1) {
    return (
      <React.Fragment>
        {renderLinkItem()}
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
