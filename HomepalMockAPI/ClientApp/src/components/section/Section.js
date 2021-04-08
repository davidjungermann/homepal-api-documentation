import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";

import "./Section.scss";

const SectionContent = (props) => {
  const { forwardedRef, inViewport } = props;
  var [height, setHeight] = useState(0);

  if (inViewport) {
    props.history.history.push("/#" + props.id);
    console.log("In!");
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

export const Section = handleViewport(SectionContent, {
  rootMargin: "100px 0px -20% 0px",
  threshold: 1,
});
