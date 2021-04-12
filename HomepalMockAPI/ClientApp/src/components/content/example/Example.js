import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./Example.scss";

export const Example = ({ children, header, copy }) => {
  const [content] = useState(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <ContainerBlock header={header} copy={copy} handleCopy={handleCopy}>
      <b>$ </b>
      {children}
    </ContainerBlock>
  );
};
