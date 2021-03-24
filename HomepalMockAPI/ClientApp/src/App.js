import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { routes } from "./components/description/Routes";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "./App.css";
import { Description } from "./components/description/Description";

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
          <Description renderRoutes={renderRoutes}></Description>
        </Switch>
      </div>
    </div>
  );
}

export default App;
