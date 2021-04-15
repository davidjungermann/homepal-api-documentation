import React from "react";
import "./Endpoint.scss";
import { NavHashLink as Link } from "react-router-hash-link";

export const Endpoint = ({ request, baseUrl, parameter, link }) => {
  const requestName = request.toLowerCase() + "-request";

  if (parameter === undefined) {
    parameter = "";
  }

  if (link === undefined) {
    link = "";
  }

  const renderEndpoint = () => {
    return (
      <div className="endpoint-container">
        <span className={requestName + " request"}>{request}</span>
        <span className="request-url">{baseUrl + parameter}</span>
      </div>
    );
  };

  const renderEndpointLink = () => {
    return (
      <Link activeClassName="not-active" smooth to={"#" + link}>
        <div className="endpoint-container">
          <span className={requestName + " request"}>{request}</span>
          <span className="request-url">{baseUrl + parameter}</span>
        </div>
      </Link>
    );
  };

  return link ? renderEndpointLink() : renderEndpoint();
};
