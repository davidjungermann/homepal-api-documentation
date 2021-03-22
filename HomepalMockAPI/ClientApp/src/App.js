import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "./App.css";
import { Description } from "./components/description/Description";

function App() {
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
  const urls = [];

  const formatUrl = (label) => {
    return label
      .replace(/\s/g, "-")
      .replace(/[A-Z][a-z]*/g, (str) => str.toLowerCase());
  };

  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Navigation items={items} formatUrl={formatUrl} urls={urls} />
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
