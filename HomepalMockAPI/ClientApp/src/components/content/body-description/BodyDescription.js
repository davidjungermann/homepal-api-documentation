import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";

import "./BodyDescription.scss";

export const BodyDescription = ({ header, body, copy }) => {
  const [isArray] = useState(Array.isArray(body));
  const [content] = useState(body);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, " "));
  };

  const renderBody = () => {
    return Object.entries(body).map(([key, value], index) => {
      if (index === 0) {
        return (
          <div>
            {openingBrace()}"{key}": {value}
          </div>
        );
      } else if (index === Object.keys(body).length - 1) {
        return (
          <div>
            "{key}": {value}
            {closingBrace()}
          </div>
        );
      } else {
        return (
          <div>
            "{key}": {value}
          </div>
        );
      }
    });
  };

  const renderArrayBody = () => {
    return body.map((obj, arrayIndex) => {
      return Object.entries(obj).map(([key, value], objIndex) => {
        if (objIndex === 0 && arrayIndex === 0) {
          return (
            <div>
              {openingBracket()}
              {openingBrace()}"{key}": {value}
            </div>
          );
        } else if (
          objIndex === Object.keys(obj).length - 1 &&
          arrayIndex === body.length - 1
        ) {
          return (
            <div>
              "{key}": {value}
              {closingBrace()}
              {closingBracket()}
            </div>
          );
        } else if (objIndex === 0) {
          return (
            <div>
              {openingBrace()}"{key}": {value}
            </div>
          );
        } else if (objIndex === Object.keys(obj).length - 1) {
          return (
            <div>
              "{key}": {value}
              {continuingBrace()}
            </div>
          );
        } else {
          return (
            <div>
              "{key}": {value}
            </div>
          );
        }
      });
    });
  };

  const openingBrace = () => {
    return <p className="opening-brace">{"{"}</p>;
  };

  const closingBrace = () => {
    return <p className="closing-brace">{"}"}</p>;
  };

  const continuingBrace = () => {
    return <p className="closing-brace">{"},"}</p>;
  };

  const openingBracket = () => {
    return <p className="opening-bracket">{"["}</p>;
  };

  const closingBracket = () => {
    return <p className="closing-bracket">{"]"}</p>;
  };

  return (
    <ContainerBlock copy={copy} header={header} handleCopy={handleCopy}>
      {isArray ? renderArrayBody : renderBody}
    </ContainerBlock>
  );
};
