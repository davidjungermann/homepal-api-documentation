import React from "react";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import "./App.css";
function App() {
  return (
    <div className="content">
      <SwaggerUI url="http://localhost:5000/swagger/v1/swagger.json" />
    </div>
  );
}

export default App;
