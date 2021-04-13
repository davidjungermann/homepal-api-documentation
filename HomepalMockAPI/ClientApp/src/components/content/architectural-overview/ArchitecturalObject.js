import React from "react";
import "./ArchitecturalObject.scss";

export const ArchitecturalObject = ({ history, children, link, cardinalities }) => {
  if (link === undefined) {
    link = "#";
  }

  return (
      <div className="architectural-object">
          {cardinalities && cardinalities.map((cardinality) => {
            return <div className={"cardinality-" + cardinality[0] + " small"}>{cardinality[1]}</div>;
          })}
          <div className="architectural-overview-badge"
            onClick={() => history.push(link)}>
                {children}
          </div>
      </div>
  );
};