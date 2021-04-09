import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./Example.scss";

export const Example = ({ children, header }) => {
  return (
    <ContainerBlock header={header} copy={false}>
      <b>$ curl </b>
      {children}
    </ContainerBlock>
  );
};
