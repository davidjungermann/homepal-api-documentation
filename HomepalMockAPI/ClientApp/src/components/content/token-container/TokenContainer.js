import React, { useState, useEffect } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./TokenContainer.scss";

export const TokenContainer = ({ children, header, copy }) => {
  const [content, setContent] = useState(children);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
  };

  const handleLeave = () => {
    setCopied(false);
  };

  return (
    <React.Fragment>
      <ContainerBlock
        header={header}
        copy={copy}
        handleCopy={handleCopy}
        copied={copied}
        handleLeave={handleLeave}
      >
        {content}
      </ContainerBlock>
    </React.Fragment>
  );
};