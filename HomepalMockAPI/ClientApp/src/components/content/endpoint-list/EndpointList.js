import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import nextId from "react-id-generator";

import "./EndpointList.scss";

export const EndpointList = ({ children, header }) => {
  return (
    <ContainerBlock header={header} copy={false}>
      <ul>
        {children.map((endpoint) => {
          return <li key={nextId()}>{endpoint}</li>;
        })}
      </ul>
    </ContainerBlock>
  );
};
