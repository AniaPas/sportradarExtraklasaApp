import React from "react";
import axios from "axios";

const API = "http://localhost:3007/schedules/";
const fetchData = () => {
  return axios.get(API);
};

export { fetchData };
