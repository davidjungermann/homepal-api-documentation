import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Introduction } from "./components/description/unit/Introduction";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Navigation items={items} />
          <div className="description-container">
            <Route path="/introduction">
              <Introduction></Introduction>
            </Route>
            <Route path="/about-the-api">
              <h1>Hej!</h1>
            </Route>
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
