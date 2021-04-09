import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./Example.scss";

export const Example = ({ children, header, copy }) => {
  return (
    <ContainerBlock header={header} copy={copy}>
      <b>$ curl </b>
      {children}
    </ContainerBlock>
  );
};
