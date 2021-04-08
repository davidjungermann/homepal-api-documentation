import React, { useState } from "react";

import "./ContainerBlock.scss";

export const ContainerBlock = ({ header, children }) => {
  const [content] = useState(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="container-block">
      <div className="container-block-header">
        <h3>{header}</h3>
        <button onClick={handleCopy}>Copy</button>
      </div>
      <div className="container-block-content">
        <p>{content}</p>
      </div>
    </div>
  );
};
