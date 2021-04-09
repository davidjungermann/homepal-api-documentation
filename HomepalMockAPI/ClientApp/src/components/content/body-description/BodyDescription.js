import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";

import "./BodyDescription.scss";

export const BodyDescription = ({ body, copy }) => {
  const [isArray] = useState(Array.isArray(body));

  const renderBody = () => {
    return Object.entries(body).map(([key, value], index) => {
      if (index === 0) {
        return (
          <React.Fragment>
            {openingBrace()}"{key}": {value}
          </React.Fragment>
        );
      } else if (index === Object.keys(body).length - 1) {
        return (
          <React.Fragment>
            "{key}": {value}
            {closingBrace()}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            "{key}": {value}
          </React.Fragment>
        );
      }
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

  const openingBrace = () => {
    return <p className="opening-brace">{"{ "}</p>;
  };

  const closingBrace = () => {
    return <p className="closing-brace">{" }"}</p>;
  };

  return (
      <ContainerBlock copy={copy} header="Building">
        {isArray ? renderArrayBody() : renderBody()}
      </ContainerBlock>
  );
};
