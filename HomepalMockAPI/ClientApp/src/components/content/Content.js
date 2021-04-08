import React from "react";

import "./Content.scss";

export const Content = ({ renderRoutes }) => {
  return <div className="content-container">{renderRoutes()}</div>;
};
