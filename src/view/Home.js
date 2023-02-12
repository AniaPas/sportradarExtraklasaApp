import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { TableComponent } from "../components/Table/TableComponent";
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

  return <TableComponent names={names} results={results} />;
};
