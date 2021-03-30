import React from "react";
import ScrollableSection from "react-update-url-on-scroll";
import { configureAnchors } from "react-update-url-on-scroll";

import "./TextUnit.scss";

export const TextUnit = ({ header, content, id }) => {
  configureAnchors({ affectHistory: true, onSectionEnter: console.log("Hej"), keepLastAnchorHash: true });
  return (
    <div id={id} className="unit-container">
      <ScrollableSection hash={id} exact>
        <div>
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </ScrollableSection>
    </div>
  );
};
