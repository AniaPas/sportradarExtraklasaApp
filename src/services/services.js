import axios from "axios";

const fetchResponse = (api) => {
  return axios.get(api);
};

export { fetchResponse };
