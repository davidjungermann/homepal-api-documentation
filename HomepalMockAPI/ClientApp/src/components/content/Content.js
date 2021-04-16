import React from "react";
import { withRouter } from "react-router";

import "./Content.scss";

export const ContentContent = ({ renderRoutes, match, location, history }) => {
  console.log("Från Content: " + JSON.stringify(location));
  return <div className="content-container">{renderRoutes()}</div>;
};

export const Content = withRouter(ContentContent);
