import React, { useState } from "react";

import "./ContainerBlock.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export const ContainerBlock = ({ header, children, copy, handleCopy }) => {
  const [content] = useState(children);

  return (
    <div className="container-block">
      <div className="container-block-header-container">
        <h4 className="container-block-header title-8">{header}</h4>
        <button className="container-block-header-button" onClick={handleCopy}>
          {copy && <FontAwesomeIcon icon={faCopy} />}
        </button>
      </div>
      <div className="container-block-content">{content}</div>
    </div>
  );
};
