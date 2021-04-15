import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./ArchitecturalObject.scss";
import nextId from "react-id-generator";

export const ArchitecturalObject = ({
  children,
  title,
  link,
  cardinalities,
  additionalClass,
}) => {
  if (additionalClass === undefined) {
    additionalClass = "";
  }

  const renderLinkObject = () => {
    return (
      <div className="architectural-object">
        {cardinalities &&
          cardinalities.map((cardinality) => {
            return (
              <div
                key={nextId()}
                className={"cardinality cardinality-" + cardinality[0]}
              >
                {cardinality[1]}
              </div>
            );
          })}
        <Link smooth to={"#" + link}>
          <div
            className={"architectural-overview-badge-link " + additionalClass}
          >
            <div>{children}</div>
            <div>{title}</div>
          </div>
        </Link>
      </div>
    );
  };

  const renderObject = () => {
    return (
      <div className="architectural-object">
        {cardinalities &&
          cardinalities.map((cardinality) => {
            return (
              <div
                key={nextId()}
                className={"cardinality cardinality-" + cardinality[0]}
              >
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

  return link ? renderLinkObject() : renderObject();
};
