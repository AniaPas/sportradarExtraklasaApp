import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./view/Home";
import { Results } from "./components/Table/Results";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>EKSTRAKLASA MATCH RESULTS</h1>

        <Home />
      </header>
    </div>
  );
}

export default App;
