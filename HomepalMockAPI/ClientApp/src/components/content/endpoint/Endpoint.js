import React from "react";
import "./Endpoint.scss";

export const Endpoint = ({ request, baseUrl, parameter, link, history }) => {
  const requestName = request.toLowerCase() + "-request";

  if (parameter === undefined) {
    parameter = "";
  }

  if (link === undefined) {
    link = "";
  }

  return (
    <div
      className="endpoint-container"
      onClick={() => history.push("#" + link)}
    >
      <span className={requestName + " request"}>{request}</span>
      <span className="request-url">{baseUrl + parameter}</span>
    </div>
  );
};
