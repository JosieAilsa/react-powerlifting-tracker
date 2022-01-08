
import './App.scss';
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
    <header className="App-header">
    </header>
    <main>
    <Router>
    <Home className = "Home"/>
    </Router>
    </main>
    </div>
    </>
  );
}

export default App;
