import React, { useState } from "react";

import "./ContainerBlock.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export const ContainerBlock = ({
  header,
  children,
  copy,
  handleCopy,
  copied,
  handleLeave,
  token,
  inactiveContainerBlock,
}) => {
  const [content] = useState(children);

  var containerBlockClass = "container-block";
  if (inactiveContainerBlock) {
    containerBlockClass = "container-block inactive-container-block";
  }

  return (
    <div className={containerBlockClass}>
      <div className="container-block-header-container">
        <h4 className="container-block-header title-8">{header}</h4>
        <div className="container-block-header-button-wrapper">
          <button
            className="container-block-header-button"
            onClick={handleCopy}
            onMouseLeave={handleLeave}
          >
            {copy && <FontAwesomeIcon icon={faCopy} />}
          </button>
          {copied && <div className="copied-message">Copied!</div>}
        </div>
      </div>
      {token ? (
        <div className="container-block-content">
          {content}
          {" -u " + token + ":"}
        </div>
      ) : (
        <div className="container-block-content"><pre>{content}</pre></div>
      )}
    </div>
  );
};
