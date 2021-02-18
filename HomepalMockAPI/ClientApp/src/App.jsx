import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./App.css";
import { RedocStandalone } from "redoc";

function App() {
  return (
    <div className="content">
      {/* <SwaggerUI url="http://localhost:5000/swagger/v1/swagger.json"></SwaggerUI> */}
      <RedocStandalone
        specUrl="http://localhost:5000/swagger/v1/swagger.json"
        options={{
          theme: { colors: { primary: { main: "#000000" } } },
        }}
      />
    </div>
  );
}

export default App;
