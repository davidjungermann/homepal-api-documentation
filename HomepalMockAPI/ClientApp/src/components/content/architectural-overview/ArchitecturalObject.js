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
  if (link === undefined) {
    link = "#";
  }

  if (additionalClass === undefined) {
    additionalClass = "";
  }

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
