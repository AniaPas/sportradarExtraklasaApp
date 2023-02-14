import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Results } from "../components/Table/Results";
//import { fetchData } from "../services/services";

export const Home = () => {
  const [data, setData] = useState([]);
  //const [names, setNames] = useState({})
  //const

  useEffect(() => {
    const API = "http://localhost:3007/schedules/";

    axios
      .get(API)
      .then((response) => {
        const responseItems = response.data;
        console.log(responseItems);
        setData(responseItems);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  console.log(data);
  const getNames = data.map((item) => item.sport_event.competitors);
  //console.log(getNames);
  const names = getNames.map((item) => [item[0].name, item[1].name]).flat(1);
  //console.log(names);
  const getResults = data.map((item) =>
    item.sport_event_status.home_score || item.sport_event_status.away_score
      ? [item.sport_event_status.home_score, item.sport_event_status.away_score]
      : ["no result", "no result"]
  );
  const results = getResults.flat(1);
  const date = data.map((item) => item.sport_event.start_time.slice(0, 10));
  // console.log(date);
  const halfTime = data.map((item) =>
    item.sport_event_status.period_scores
      ? `${item.sport_event_status.period_scores[0].home_score} - ${item.sport_event_status.period_scores[0].away_score}`
      : "no result"
  );
  console.log(halfTime);
  const stadium = data.map((item) => item.sport_event.venue.name);
  console.log(stadium);
  return (
    <Results
      names={names}
      results={results}
      date={date}
      halfTime={halfTime}
      stadium={stadium}
    />
  );
};
