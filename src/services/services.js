import React from "react";
import axios from "axios";

//const api = "http://localhost:3007/schedules/";
const fetchData = () => {
  return axios.get(api);
};

export { fetchData };
