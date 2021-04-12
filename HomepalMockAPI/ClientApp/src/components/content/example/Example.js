import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./Example.scss";

export const Example = ({ children, header, copy }) => {
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
    >
      <b>$ </b>
      {children}
    </ContainerBlock>
  );
};
