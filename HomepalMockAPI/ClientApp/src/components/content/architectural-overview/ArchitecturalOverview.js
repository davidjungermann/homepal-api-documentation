import React from "react";
import "./ArchitecturalOverview.scss";

export const ArchitecturalOverview = ({ history }) => {

  const link = "";

  return (
    <div className="architectural-overview-container">
      <div onClick={() => history.history.push("#" + link)}>Test</div>
    </div>
  );
};
