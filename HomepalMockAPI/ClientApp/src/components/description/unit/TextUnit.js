import React from "react";
import handleViewport from "react-in-viewport";

import "./TextUnit.scss";

const TextUnitContent = (props) => {
  const { forwardedRef, inViewport, history } = props;

  if (inViewport) {
    console.log(history)
    //props.history.push("/#" + props.id);
  }

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
