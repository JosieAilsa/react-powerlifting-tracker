
import './App.scss';
import Nav from './components/Nav/Nav';
import Home from "./components/Home/Home"

function App() {
  return (
    <>
    <div className="App">
    <header className="App-header">
    </header>
    <main>
    <Nav/>
    <Home className = "Home"/>
    </main>
    </div>
    </>
  );
}

export default App;
