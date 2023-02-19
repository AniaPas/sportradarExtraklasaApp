import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { GlobalState } from "../../Store/GlobalStore";

export const MatchTimeline = () => {
  const global = useContext(GlobalState);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3007/sport_event_22926007")
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
  return <div>MatchTimelie</div>;
};
