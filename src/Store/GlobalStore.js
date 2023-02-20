import { useState, createContext } from "react";
export const GlobalState = createContext({
  globalTimelineApi: "http://localhost:3007/timeline",
  globalApi: "http://localhost:3007/schedules/",
  globalTimelineClickHandler: () => {},
  globalClickHandler: () => {},
});

export const GlobalStore = (props) => {
  const [api, setApi] = useState("http://localhost:3007/schedules/");

  const [timelineApi, setTimelineApi] = useState(
    "http://localhost:3007/timeline"
  );
  const clickHandler = (api) => {
    setApi(api);
  };
  const timelineClickHandler = (api) => {
    setTimelineApi(api);
  };
  const providerValue = {
    globalTimelineApi: timelineApi,

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
