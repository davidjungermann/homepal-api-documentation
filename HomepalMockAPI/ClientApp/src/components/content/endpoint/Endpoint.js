import React from "react";

import "./Endpoint.scss";

export const Endpoint = ({ request, baseUrl, parameter }) => {
  if (parameter === undefined) {
      parameter = "";
  }
    return (
      <div className="endpoint-container">
        <span>{request + " " + baseUrl + parameter}</span>
      </div>
    );
};
