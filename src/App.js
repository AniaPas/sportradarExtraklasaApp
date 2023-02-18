import "./App.scss";
import { Home } from "./view/Home";
import { Test } from "./view/Test";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>EKSTRAKLASA MATCH RESULTS</h1>

        <Home />
        <Test />
      </header>
    </div>
  );
}

export default App;
