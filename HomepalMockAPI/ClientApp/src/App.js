import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Description } from "./components/description/Description";

import "./App.css";

function App() {
  let urls = [];

  const routes = [
    {
      path: "/introduction",
      exact: true,
      main: () => <Description tag="introduction"></Description>,
    },
    {
      path: "/about-the-api",
      exact: true,
      main: () => <Description tag="about-the-api"></Description>,
    },
  ];

  const formatUrl = (label) => {
    return label
      .replace(/\s/g, "-")
      .replace(/[A-Z][a-z]*/g, (str) => str.toLowerCase());
  };

  const generateRoutes = () => {
    return null;
  };

  return (
    <div className="App">
      <h1 onClick={() => console.log(urls)}>Klicka mig!</h1>
      <div className="container">
        <Switch>
          <Navigation
            items={items}
            formatUrl={formatUrl}
            urls={urls}
            generateRoutes={generateRoutes}
          />
          <div className="description-container">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
