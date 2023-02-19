import { GlobalStore } from "./Store/GlobalStore";
import { Home } from "./view/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import styles from "./App.module.scss";

import { useContext } from "react";

function App() {
  return (
    <GlobalStore>
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <h1 className={styles.title}>EKSTRAKLASA MATCH RESULTS</h1>

          <Navigation />

          <Home />
        </header>
      </div>
    </GlobalStore>
  );
}

export default App;
