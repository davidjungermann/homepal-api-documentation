import React, { useState } from "react";
import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { routes } from "./components/content/Routes";
import { BrowserRouter as Route } from "react-router-dom";
import { Content } from "./components/content/Content";
import { Header } from "./components/header/Header";
//import { Footer } from "./components/footer/Footer";
import { useHistory } from "react-router";

import "./App.scss";

function App() {
  let history = useHistory();

  const [token, setToken] = useState("");
  const [valid, setValid] = useState(false);

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
        children={
          <route.main
            history={history}
            token={token}
            setToken={setToken}
            valid={valid}
            setValid={setValid}
          />
        }
      />
    ));
  };

  return (
    <div className="container">
      <Header></Header>
      <div className="body">
        <Navigation
          className="navigation"
          items={items}
          formatUrl={formatUrl}
          history={history}
        />
        <div className="content">
          <Content renderRoutes={renderRoutes}></Content>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}

export default App;
