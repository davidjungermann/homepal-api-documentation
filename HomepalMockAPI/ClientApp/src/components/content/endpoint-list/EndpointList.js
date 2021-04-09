import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./EndpointList.scss";

export const EndpointList = ({ endpoints }) => {
  return (
    <ContainerBlock header="Endpoints" copy>
      <ul className="navigation-sub-list">
        {endpoints.map((endpoint) => {
          return <li>{endpoint}</li>;
        })}
      </ul>
    </ContainerBlock>
  );
};
