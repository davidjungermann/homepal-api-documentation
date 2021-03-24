import React from "react";

import "./Description.scss";

export const Description = ({ renderRoutes }) => {
  return <div className="description-container">{renderRoutes()}</div>;
};
