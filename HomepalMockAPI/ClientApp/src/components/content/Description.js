import React from "react";

import "./Description.scss";

export const Content = ({ renderRoutes }) => {
  return <div className="description-container">{renderRoutes()}</div>;
};
