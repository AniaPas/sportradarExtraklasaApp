import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./view/Home";
import { TableComponent } from "./components/Table/TableComponent";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello, world, let's start!</p>
        <TableComponent />
        <Home />
      </header>
    </div>
  );
}

export default App;
