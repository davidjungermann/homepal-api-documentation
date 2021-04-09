import React from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";

import "./BodyDescription.scss";

export const BodyDescription = ({ body, copy }) => {
  const renderBody = () => {
    return Object.entries(body).map(([key, value]) => {
      return (
        <div>
          "{key}": {value}
        </div>
      );
    });
  };
  return (
    <div className="body-description-container">
      <ContainerBlock copy={copy} header="Building">
        {"{"}
        {renderBody()}
        {"}"}
      </ContainerBlock>
    </div>
  );
};
