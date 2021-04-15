import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./ArchitecturalObject.scss";

export const ArchitecturalObject = ({
  history,
  children,
  title,
  link,
  cardinalities,
  additionalClass,
}) => {
  if (additionalClass === undefined) {
    additionalClass = "";
  }

  const renderObject = () => {
    return (
      <div className="architectural-object">
        {cardinalities &&
          cardinalities.map((cardinality) => {
            return (
              <div className={"cardinality cardinality-" + cardinality[0]}>
                {cardinality[1]}
              </div>
            );
          })}
        <div className={"architectural-overview-badge " + additionalClass}>
          <div>{children}</div>
          <div>{title}</div>
        </div>
      </div>
    );
  };

  const renderLinkObject = () => {
    return (
      <div className="architectural-object">
        {cardinalities &&
          cardinalities.map((cardinality) => {
            return (
              <div className={"cardinality cardinality-" + cardinality[0]}>
                {cardinality[1]}
              </div>
            );
          })}
        <Link activeClassName="not-active" smooth to={"#" + link}>
          <div className={"architectural-overview-badge " + additionalClass}>
            <div>{children}</div>
            <div>{title}</div>
          </div>
        </Link>
      </div>
    );
  };

  return link ? renderLinkObject() : renderObject();
};
