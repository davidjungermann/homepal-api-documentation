import React from "react";
import "./ArchitecturalObject.scss";

export const ArchitecturalObject = ({ history, children, link, cardinalities, additionalClass }) => {
  if (link === undefined) {
    link = "#";
  }

  if (additionalClass === undefined) {
    additionalClass = "";
  }

  return (
      <div className="architectural-object">
          {cardinalities && cardinalities.map((cardinality) => {
            return <div className={"cardinality cardinality-" + cardinality[0]}>{cardinality[1]}</div>;
          })}
          <div className={"architectural-overview-badge " + additionalClass}
            onClick={() => history.push(link)}>
                {children}
          </div>
      </div>
  );
};