import React from "react";

import "./ReturnsItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const ReturnsItem = ({ icon, children }) => {
  return (
    <div className="returns-item-container">
      <span className="returns-item-icon">
      {icon === "success" && <FontAwesomeIcon className="success-icon" icon={faCheckCircle} />}
      {icon === "error" && <FontAwesomeIcon className="error-icon" icon={faExclamationCircle} />}
      </span>
      <span><p>{children}</p></span>
    </div>
  );
};
