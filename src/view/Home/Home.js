//Hooks
import { useEffect, useState, useContext } from "react";
import { GlobalState } from "../../Store/GlobalStore";
//Components
import { ResultTable } from "../../components/ResultTable/ResultTable";
import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu";
//Service
import { fetchResponse } from "../../services/services";

export const Home = () => {
  const global = useContext(GlobalState);

  const [data, setData] = useState([]);

  const getResults = async () => {
    try {
      const response = await fetchResponse(global.globalApi);
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, [global.globalApi]);
  console.log(data);

  const homeNames = data.map((item) => item.sport_event.competitors[0].name);
  const awayNames = data.map((item) => item.sport_event.competitors[1].name);
  const homeResults = data.map((item) =>
    item.sport_event_status.home_score >= 0
      ? item.sport_event_status.home_score
      : "no result"
  );
  const awayResults = data.map((item) =>
    item.sport_event_status.away_score >= 0
      ? item.sport_event_status.away_score
      : "no result"
  );
  const halfTime = data.map((item) =>
    item.sport_event_status.period_scores
      ? `${item.sport_event_status.period_scores[0].home_score} - ${item.sport_event_status.period_scores[0].away_score}`
      : "no result"
  );
  const date = data.map((item) => item.sport_event.start_time.slice(0, 10));
  const stadium = data.map((item) => item.sport_event.venue.name);

  return (
    <div>
      <DropdownMenu />
      <ResultTable
        homeNames={homeNames}
        homeResults={homeResults}
        awayResults={awayResults}
        awayNames={awayNames}
        halfTime={halfTime}
        date={date}
        stadium={stadium}
      />
    </div>
  );
};
