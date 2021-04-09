import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./EndpointList.scss";

export const EndpointList = ({ copy, children }) => {
  return (
    <ContainerBlock header="Endpoints" copy={copy}>
      <ul className="navigation-sub-list">
        {children.map((endpoint) => {
          return <li>{endpoint}</li>;
        })}
      </ul>
    </ContainerBlock>
  );
};
