import logo from "./logo.svg";
import "./App.css";
import { Home } from "./view/Home";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello, world, let's start!</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Home />
      </header>
    </div>
  );
}

export default App;
