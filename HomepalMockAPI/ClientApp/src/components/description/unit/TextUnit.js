import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";

import "./TextUnit.scss";

const TextUnitContent = (props) => {
  const { forwardedRef, inViewport } = props;
  var [height, setHeight] = useState(0);

  if (inViewport) {
    props.history.history.push("/#" + props.id);
  }

  useEffect(() => {
    setHeight(forwardedRef.current.clientHeight);
  }, [forwardedRef]);

  return (
    <div id={props.id} className="unit-container" ref={forwardedRef}>
      <h1>{props.header}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export const TextUnit = handleViewport(TextUnitContent, {
  rootMargin: "400px",
  threshold: 1,
});
