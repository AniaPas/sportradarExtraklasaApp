import React, { useEffect, useContext } from "react";
import { GlobalState } from "../../Store/GlobalStore";
import axios from "axios";
import { useState } from "react";
import { ResultTable } from "../../components/ResultTable/ResultTable";
import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu";

export const Home = () => {
  const global = useContext(GlobalState);
  // const getResults = async () => {
  //   try {
  //     const data = await  fetchData();
  //     await global.globalGetData(data.data);
  //   } catch {

  //   }
  // };

  const [data, setData] = useState([]);
  // const [api, setApi] = useState("http://localhost:3007/schedules/");
  //const [names, setNames] = useState({})
  //const

  useEffect(() => {
    //const API = "http://localhost:3007/schedules/";

    axios
      .get(global.globalApi)
      .then((response) => {
        const responseItems = response.data;
        console.log(responseItems);
        setData(responseItems);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [global.globalApi]);
  console.log(data);
  // const clickHandler = (someApi) => {
  //   setApi(someApi);
  // };
  //const getNames = data.map((item) => item.sport_event.competitors);
  //console.log(getNames);
  //const names = getNames.map((item) => [item[0].name, item[1].name]).flat(1);
  //console.log(names);
  const homeNames = data.map((item) => item.sport_event.competitors[0].name);
  const awayNames = data.map((item) => item.sport_event.competitors[1].name);
  // console.log(homeNames);
  // const getResults = data.map((item) =>
  //   item.sport_event_status.home_score || item.sport_event_status.away_score
  //     ? [item.sport_event_status.home_score, item.sport_event_status.away_score]
  //     : ["no result", "no result"]
  // );
  // const results = getResults.flat(1);
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
  // console.log(halfTime);
  const date = data.map((item) => item.sport_event.start_time.slice(0, 10));
  const stadium = data.map((item) => item.sport_event.venue.name);

  //console.log(results);
  //console.log(homeResults);
  return (
    <div>
      {/* <Navigation clickHandler={clickHandler} /> */}
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
