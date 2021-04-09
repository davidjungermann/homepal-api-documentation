import React from "react";

import "./Endpoint.scss";

export const Endpoint = ({ request, baseUrl, parameter }) => {
  
  const requestName = request.toLowerCase() + "-request";
  
  if (parameter === undefined) {
      parameter = "";
  }

    return (
      <div className="endpoint-container">
        <span className={requestName + " request"}>{request}</span>
        <span className="request-url">{baseUrl + parameter}</span> 
      </div>
    );
};
