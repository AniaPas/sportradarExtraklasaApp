import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apii =
      "https://api.sportradar.us/soccer/trial/v4/en/sport_events/sr:sport_event:22926007/timeline.json?api_key=8v8n5smhh5pp23825sr7f2gw";

    axios
      .get(apii)
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
  return <div>test</div>;
};
