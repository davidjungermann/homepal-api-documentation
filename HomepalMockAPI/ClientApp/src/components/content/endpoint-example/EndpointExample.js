import React, { useState } from "react";

import "./EndpointExample.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export const EndpointExample = ({ method, children, copy }) => {
  const [content] = useState(children);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(method + " " + content);
    setCopied(true);
  };

  return (
    <div className="endpoint-example">
      <div className="endpoint-example-header-container">
        <h4 className="endpoint-example-header title-8">{method}</h4>
        <button className="endpoint-example-header-button" onClick={handleCopy}>
          {copy && <FontAwesomeIcon icon={faCopy} />}
        </button>
      </div>
      <div className="endpoint-example-content">{content}</div>
      {copied && "Copied!"}
    </div>
  );
};
