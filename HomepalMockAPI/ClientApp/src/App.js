import { Navigation } from "./components/navigation/Navigation";
import { items } from "./components/navigation/items";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation items={items} />
    </div>
  );
}

export default App;
