//Style
import styles from "./App.module.scss";
import player from "./media/player.png";
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
          <div className={styles.logoWrapper}>
            <div className={styles.logoWrapper}>
              <img className={styles.logo} src={player} alt='bookSketch'></img>
            </div>
            <h1 className={styles.title}>EKSTRAKLASA MATCH RESULTS</h1>
          </div>
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
