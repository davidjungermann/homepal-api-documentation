import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";

import "./BodyDescription.scss";

export const BodyDescription = ({ body, copy }) => {
  const [isArray] = useState(Array.isArray(body));

  const renderBody = () => {
    return Object.entries(body).map(([key, value]) => {
      return (
        <div>
          "{key}": {value}
        </div>
      );
    });
  };

  const renderArrayBody = () => {
    return body.map((object) => {
      return Object.entries(object).map(([key, value]) => {
        console.log(value);
        return (
          <div>
            "{key}": {value}
          </div>
        );
      });
    });
  };

  return (
    <div className="body-description-container">
      <ContainerBlock copy={copy} header="Building">
        {"{"}
        {isArray ? renderArrayBody() : renderBody()}
        {"}"}
      </ContainerBlock>
    </div>
  );
};
