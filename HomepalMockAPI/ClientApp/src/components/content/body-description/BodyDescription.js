import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";

import "./BodyDescription.scss";

export const BodyDescription = ({ body, copy }) => {
  const renderBody = () => {
    Object.entries(body).map(([key, value]) => {});
  };
  return (
    <div className="body-description-container">
      <ContainerBlock copy={copy} header="Building"></ContainerBlock>
    </div>
  );
};
