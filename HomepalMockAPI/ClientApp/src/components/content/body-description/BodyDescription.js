import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";

import "./BodyDescription.scss";

export const BodyDescription = ({ header, body, copy }) => {
  const [content] = useState(JSON.stringify(body, null, " "));
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
      copy={copy}
      header={header}
      handleCopy={handleCopy}
      copied={copied}
      handleLeave={handleLeave}
    >
      <div>{content}</div>
    </ContainerBlock>
  );
};
