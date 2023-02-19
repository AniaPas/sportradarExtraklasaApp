import { useState, createContext } from "react";
export const GlobalState = createContext({
  // globalData: [],
  // globalTimeline: [],
  globalApi: "http://localhost:3007/schedules/",
  // globalGetData: () => {},
  // globalGetTimelime: () => {},
  globalClickHandler: () => {},
});

export const GlobalStore = (props) => {
  // const [data, setData] = useState([]);
  const [api, setApi] = useState("http://localhost:3007/schedules/");
  const fetchData = () => {
    setData(data);
  };
  const clickHandler = (api) => {
    setApi(api);
  };
  const providerValue = {
    globalData: data,
    globalApi: api,
    globalGetData: fetchData,
    globalClickHandler: clickHandler,
  };
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  );
};
