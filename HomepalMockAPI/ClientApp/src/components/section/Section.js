import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";

import "./Section.scss";

const SectionContent = (props) => {
  const { forwardedRef, inViewport } = props;
  var [height, setHeight] = useState(0);

  if (inViewport) {
    //props.history.push("/#" + props.id);
  }

  useEffect(() => {
    setHeight(forwardedRef.current.clientHeight);
  }, [forwardedRef]);

  return (
    <div id={props.id} className="section-container" ref={forwardedRef}>
      {props.children}
    </div>
  );
};

export const Section = handleViewport(SectionContent, {});
