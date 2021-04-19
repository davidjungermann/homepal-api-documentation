import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";

import "./EndpointExample.scss";

export const EndpointExample = ({ header, children, copy, baseUrl }) => {
  const [content] = useState(children);
  const [copyContent] = useState(baseUrl);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyContent);
    setCopied(true);
  };

  const handleLeave = () => {
    setCopied(false);
  };

  return (
    <ContainerBlock
      copy={copy}
      header={header}
      handleCopy={handleCopy}
      copied={copied}
      handleLeave={handleLeave}
    >
      {content}
    </ContainerBlock>
  );
};
