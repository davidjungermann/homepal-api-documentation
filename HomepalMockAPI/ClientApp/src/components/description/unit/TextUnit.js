import React, { useEffect, useState } from "react";
import handleViewport from "react-in-viewport";

import "./TextUnit.scss";

const TextUnitContent = (props) => {
  const { forwardedRef, inViewport, enterCount } = props;

  if (inViewport) {
    console.log("hej");
  }

  return (
    <div
      id={props.id}
      //style={getStyle()}
      className="unit-container"
      ref={forwardedRef}
    >
      <h1>{props.header}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export const TextUnit = handleViewport(TextUnitContent, {
  rootMargin: "400px",
  threshold: 0.25,
});
