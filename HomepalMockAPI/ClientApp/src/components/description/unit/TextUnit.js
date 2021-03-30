import React from "react";
import ScrollableSection from "react-update-url-on-scroll";
import { configureAnchors } from "react-update-url-on-scroll";

import "./TextUnit.scss";

export const TextUnit = ({ header, content, id }) => {
  configureAnchors({
    offset: 100,
    affectHistory: true,
    debounce: 0,
    keepLastAnchorHash: true,
  });
  return (
    <div id={id} className="unit-container">
      <ScrollableSection hash={id} exact>
        <h1>{header}</h1>
        <p>{content}</p>
      </ScrollableSection>
    </div>
  );
};
