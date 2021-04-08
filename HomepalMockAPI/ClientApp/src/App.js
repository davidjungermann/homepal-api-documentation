import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { routes } from "./components/description/Routes";
import { BrowserRouter as Route } from "react-router-dom";
import { Description } from "./components/description/Description";
import { Usage } from "./components/usage/Usage";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ContainerBlock } from "./components/container-block/ContainerBlock";
import { useHistory } from "react-router";

import "./App.scss";

function App() {
  let history = useHistory();
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
        children={<route.main history={history} />}
      />
    ));
  };

  return (
    <div>
      <div className="container">
        <Header></Header>
        <div className="body">
          <Navigation items={items} formatUrl={formatUrl} history={history} />
          <div className="content">
            <Description renderRoutes={renderRoutes}></Description>
            <Usage>
              <ContainerBlock header="Example">curl http://localhost:5000/api/agents</ContainerBlock>
              <ContainerBlock header="Example">curl http://localhost:5000/api/agents</ContainerBlock>
              <ContainerBlock header="Example">curl http://localhost:5000/api/agents</ContainerBlock>
              <ContainerBlock header="Example">curl http://localhost:5000/api/agents</ContainerBlock>
            </Usage>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
