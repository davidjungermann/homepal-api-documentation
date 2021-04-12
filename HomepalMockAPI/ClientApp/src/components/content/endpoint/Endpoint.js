import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./Endpoint.scss";

export const Endpoint = ({ request, baseUrl, parameter, link }) => {
  const requestName = request.toLowerCase() + "-request";

  if (parameter === undefined) {
    parameter = "";
  }

  if (link === undefined) {
    link = "";
  }

  return (
    <div className="endpoint-container">
      <Link
        to={"#" + link}
        className="endpoint-link"
        activeClassName="some-classname-that-is-not-active"
        smooth
      >
        <span className={requestName + " request"}>{request}</span>
        <span className="request-url">{baseUrl + parameter}</span>
      </Link>
    </div>
  );
};
