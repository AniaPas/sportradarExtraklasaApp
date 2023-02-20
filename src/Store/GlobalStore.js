import { useState, createContext } from "react";
export const GlobalState = createContext({
  // globalData: [],
  globalTimelineApi: "http://localhost:3007/timeline",
  globalApi: "http://localhost:3007/schedules/",
  globalEventApi: "http://localhost:3007/sport_event_22926007",
  globalTimelineClickHandler: () => {},
  globalClickHandler: () => {},
});

export const GlobalStore = (props) => {
  // const [data, setData] = useState([]);
  const [api, setApi] = useState("http://localhost:3007/schedules/");
  const [eventApi, setEventApi] = useState(
    "http://localhost:3007/sport_event_22926007"
  );
  const [timelineApi, setTimelineApi] = useState(
    "http://localhost:3007/timeline"
  );
  // const fetchData = () => {
  //   setData(data);
  // };
  const clickHandler = (api) => {
    setApi(api);
  };
  const timelineClickHandler = (api) => {
    setTimelineApi(api);
  };
  const providerValue = {
    globalTimelineApi: timelineApi,
    globalEventApi: eventApi,
    globalApi: api,
    globalTimelineClickHandler: timelineClickHandler,
    globalClickHandler: clickHandler,
  };
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  );
};
