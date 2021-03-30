import React from "react";
import ScrollableSection from "react-update-url-on-scroll";

import "./TextUnit.scss";

export const TextUnit = ({ header, content, id }) => {
  
  return (
    <div id={id} className="unit-container">
      <ScrollableSection hash={id}>
        <h1>{header}</h1>
        <p>{content}</p>
      </ScrollableSection>
    </div>
  );
};
