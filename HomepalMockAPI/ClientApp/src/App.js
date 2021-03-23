import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { routes } from "./components/description/Routes";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  const formatUrl = (label) => {
    return label
      .replace(/\s/g, "-")
      .replace(/[A-Z][a-z]*/g, (str) => str.toLowerCase());
  };

  const renderRoutes = () => {
    return routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        children={<route.main />}
      />
    ));
  };

  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Navigation items={items} formatUrl={formatUrl} />
          <div className="description-container">{renderRoutes()}</div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
