import React, { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../services/services";

export const Home = () => {
  const [data, setData] = useState("no data");
  const getAllData = async () => {
    const response = await fetchData();
    console.log("the response", response);
  };
  console.log(getAllData);
  useEffect(() => {
    getAllData();
  }, []);
  return <div>Home</div>;
};
