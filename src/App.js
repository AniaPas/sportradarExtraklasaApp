//Style
import styles from "./App.module.scss";
//GlobalStore
import { GlobalStore } from "./Store/GlobalStore";
//Router
import { Routes, Route } from "react-router-dom";
//Components
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./view/Home/Home";
import { MatchTimeline } from "./view/MatchTimeline/MatchTimeline";

function App() {
  const navElements = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/matchtimeline",
      name: "MatchTimeline",
    },
  ];
  return (
    <GlobalStore>
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <h1 className={styles.title}>EKSTRAKLASA MATCH RESULTS</h1>
          <Navigation navElements={navElements} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/matchtimeline' element={<MatchTimeline />} />
            {/* <Route path='/*' element={<NoMatch />} /> */}
          </Routes>
        </header>
      </div>
    </GlobalStore>
  );
}

export default App;
