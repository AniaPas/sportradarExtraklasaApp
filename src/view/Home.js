import React, { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../services/services";

export const Home = () => {
  const [data, setData] = useState("no data");
  const getAllData = async () => {
    const response = await fetchData();
    //console.log("the response", response);
    setData(response.data);
  };
  console.log(getAllData);
  useEffect(() => {
    getAllData();
  }, []);
  console.log(data);

  const getTeamNames = data.map((item) => item.sport_event.competitors);
  console.log(getTeamNames);
  return <div>Home</div>;
};
