import React from "react";
import handleViewport from "react-in-viewport";
import { useHistory } from "react-router-dom";

import "./TextUnit.scss";

const TextUnitContent = (props) => {
  const { forwardedRef, inViewport } = props;
  let history = useHistory();

  if (inViewport) {
    console.log(props.id);
    history.push("/#" + props.id);
    console.log(history);
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
