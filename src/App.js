import "./App.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <main>
        <Router>
          <Home className="Home" />
        </Router>
      </main>
    </div>
  );
};

export default App;
