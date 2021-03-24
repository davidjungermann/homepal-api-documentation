import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { routes } from "./components/description/Routes";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Description } from "./components/description/Description";
import { Usage } from "./components/usage/Usage";

import "./App.scss";

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
    <div>
      <Switch>
        <div className="container">
          <div className="header"></div>
          <Navigation items={items} formatUrl={formatUrl} />
          <Description renderRoutes={renderRoutes}></Description>
          <Usage></Usage>
          <div className="footer"></div>
        </div>
      </Switch>
    </div>
  );
}

export default App;
