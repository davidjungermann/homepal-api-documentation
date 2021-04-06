import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Description.scss";

export const Description = ({ renderRoutes }) => {
  const location = useHistory();
  return (
    <div className="description-container">
      {renderRoutes()}
      <div onClick={() => console.log(location)}>Click me!</div>
    </div>
  );
};
