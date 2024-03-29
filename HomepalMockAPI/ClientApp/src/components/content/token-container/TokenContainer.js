import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./TokenContainer.scss";

export const TokenContainer = ({ children, header, copy, inactiveContainerBlock, }) => {
  const [content] = useState(children);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
  };

  const handleLeave = () => {
    setCopied(false);
  };

  return (
    <ContainerBlock
      header={header}
      copy={copy}
      handleCopy={handleCopy}
      copied={copied}
      handleLeave={handleLeave}
      inactiveContainerBlock={inactiveContainerBlock}
    >
      {content}
    </ContainerBlock>
  );
};
