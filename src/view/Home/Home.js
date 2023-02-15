import React, { useEffect, useState } from "react";
import axios from "axios";
import { Results } from "../../components/Table/Results";
import styles from "./Home.module.scss";
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
        //console.log(responseItems);
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
  const homeNames = getNames.map((item) => item[0].name);
  const awayNames = getNames.map((item) => item[1].name);
  console.log(homeNames);
  const getResults = data.map((item) =>
    item.sport_event_status.home_score || item.sport_event_status.away_score
      ? [item.sport_event_status.home_score, item.sport_event_status.away_score]
      : ["no result", "no result"]
  );
  console.log(getResults);
  const results = getResults.flat(1);
  const awayResults = data.map((item) =>
    item.sport_event_status.away_score || item.sport_event_status.home_score
      ? item.sport_event_status.away_score
      : "no result"
  );
  //console.log(awayResults);
  const homeResults = data.map((item) =>
    item.sport_event_status.away_score || item.sport_event_status.home_score
      ? item.sport_event_status.home_score
      : "no result"
  );
  //console.log(homeResults);
  const date = data.map((item) => item.sport_event.start_time.slice(0, 10));
  // console.log(date);
  const halfTime = data.map((item) =>
    item.sport_event_status.period_scores
      ? `${item.sport_event_status.period_scores[0].home_score} - ${item.sport_event_status.period_scores[0].away_score}`
      : "no result"
  );
  const stadium = data.map((item) => item.sport_event.venue.name);
  //console.log(stadium);
  // let cellColor = "";
  // const createCellColor = homeNames.map((item, index) => {
  //   if (item > awayResults[index]) {
  //     return (cellColor = "blue");
  //   }
  // });

  // const createColor = () =>
  //   data.map((item) => {
  //     if (
  //       item.sport_event.competitors[0].id === item.sport_event_status.winner_id
  //     ) {
  //       console.log("green");
  //       return "green";
  //     } else {
  //       if (item.sport_event_status.match_tie === true) {
  //         console.log("orange");
  //         return "orange";
  //       } else {
  //         console.log("red");
  //         return "red";
  //       }
  //     }
  //   });

  // createColor();
  // //console.log(createCellColor);
  return (
    <Results
      names={names}
      results={results}
      date={date}
      halfTime={halfTime}
      stadium={stadium}
      homeNames={homeNames}
      awayNames={awayNames}
      homeResults={homeResults}
      awayResults={awayResults}
      createColors={createColor}
    />
  );
};
