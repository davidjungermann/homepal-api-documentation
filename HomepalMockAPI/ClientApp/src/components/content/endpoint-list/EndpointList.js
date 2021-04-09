import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./EndpointList.scss";

export const EndpointList = ({ endpoints, copy }) => {
  return (
    <ContainerBlock header="Endpoints" copy={copy}>
      <ul className="navigation-sub-list">
        {endpoints.map((endpoint) => {
          return <li>{endpoint}</li>;
        })}
      </ul>
    </ContainerBlock>
  );
};
