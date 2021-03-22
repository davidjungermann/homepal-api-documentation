import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Introduction } from "./components/description/unit/Introduction";

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

  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Navigation items={items} />
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
