import React, { useState } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import nextId from "react-id-generator";

import "./BodyDescription.scss";

export const BodyDescription = ({ header, body, copy }) => {
  const [isArray] = useState(Array.isArray(body));
  const [content] = useState(body);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, " "));
    setCopied(true);
  };

  const handleLeave = () => {
    setCopied(false);
  };

  const renderBody = () => {
    return Object.entries(body).map(([key, value], index) => {
      if (index === 0 && Object.keys(body).length !== 1) {
        return (
          <div key={nextId()} className="first-row">
            {openingBrace()}"{key}": {value}
          </div>
        );
      } else if (
        index === Object.keys(body).length - 1 &&
        Object.keys(body).length !== 1
      ) {
        return (
          <div key={nextId()} className="last-row">
            "{key}": {value}
            {closingBrace()}
          </div>
        );
      } else if (index === 0 && Object.keys(body).length === 1) {
        return (
          <div key={nextId()} className="first-and-last-row">
            {openingBrace()}"{key}": {value}
            {closingBrace()}
          </div>
        );
      } else {
        return (
          <div key={nextId()} className="middle-row">
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
            <div key={nextId()} className="first-object-row">
              {openingBracket()}
              {openingBrace()}"{key}": {value}
            </div>
          );
        } else if (
          objIndex === Object.keys(obj).length - 1 &&
          arrayIndex === body.length - 1
        ) {
          return (
            <div key={nextId()} className="last-object-row">
              "{key}": {value}
              {closingBrace()}
              {closingBracket()}
            </div>
          );
        } else if (objIndex === 0) {
          return (
            <div key={nextId()} className="first-row">
              {openingBrace()}"{key}": {value}
            </div>
          );
        } else if (objIndex === Object.keys(obj).length - 1) {
          return (
            <div key={nextId()} className="last-row">
              "{key}": {value}
              {continuingBrace()}
            </div>
          );
        } else {
          return (
            <div key={nextId()} className="middle-row">
              "{key}": {value}
            </div>
          );
        }
      });
    });
  };

  const openingBrace = () => {
    return <div className="opening-brace">{"{"}</div>;
  };

  const closingBrace = () => {
    return <div className="closing-brace">{"}"}</div>;
  };

  const continuingBrace = () => {
    return <div className="closing-brace">{"},"}</div>;
  };

  const openingBracket = () => {
    return <div className="opening-bracket">{"["}</div>;
  };

  const closingBracket = () => {
    return <div className="closing-bracket">{"]"}</div>;
  };

  return (
    <ContainerBlock
      copy={copy}
      header={header}
      handleCopy={handleCopy}
      copied={copied}
      handleLeave={handleLeave}
    >
      {isArray ? renderArrayBody : renderBody}
    </ContainerBlock>
  );
};
