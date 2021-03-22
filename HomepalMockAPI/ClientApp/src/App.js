import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Introduction } from "./components/description/unit/Introduction";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Introduction">
          <Introduction></Introduction>
        </Route>
      </Switch>

      <Navigation items={items} />
    </div>
  );
}

export default App;
