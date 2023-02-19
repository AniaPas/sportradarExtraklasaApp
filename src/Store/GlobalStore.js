import { useState, createContext } from "react";
export const GlobalState = createContext({
  // globalData: [],
  // globalTimeline: [],
  globalApi: "http://localhost:3007/schedules/",
  globalTimelineApi: "http://localhost:3007/sport_event_22926007",
  // globalGetTimelime: () => {},
  globalClickHandler: () => {},
});

export const GlobalStore = (props) => {
  // const [data, setData] = useState([]);
  const [api, setApi] = useState("http://localhost:3007/schedules/");
  const [timelineApi, setTimelineApi] = useState(
    "http://localhost:3007/sport_event_22926007"
  );
  // const fetchData = () => {
  //   setData(data);
  // };
  const clickHandler = (api) => {
    setApi(api);
  };
  const providerValue = {
    // globalData: data,
    globalApi: api,
    // globalGetData: fetchData,
    globalClickHandler: clickHandler,
  };
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  );
};
