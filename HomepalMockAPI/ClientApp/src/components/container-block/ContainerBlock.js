import React, { useState } from "react";

import "./ContainerBlock.scss";

export const ContainerBlock = ({ header, children }) => {
  const [content] = useState(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="container-block">
      <div className="container-block-header-container">
        <h4 className="container-block-header title-8">{header}</h4>
        <button className="container-block-header-button" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container-block-content">
        <span>{content}</span>
      </div>
    </div>
  );
};
