import React, { useState, useEffect } from "react";

import "./TextUnit.scss";

export const TextUnit = ({ header, content }) => {
  return (
    <div className="unit-container">
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
};
