import React from "react";
import ScrollableSection from 'react-update-url-on-scroll';

import "./TextUnit.scss";

export const TextUnit = ({ header, content, id }) => {
  return (
    <div>
      <ScrollableSection hash={id} exact>
        <div id={id} className="unit-container">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </ScrollableSection>
    </div>
  );
};
