import { useState, createContext } from "react";
export const GlobalState = createContext({
  globalData: [],
  globalTimeline: [],
  globalApi: "http://localhost:3007/schedules/",
  globalGetData: () => {},
  globalGetTimelime: () => {},
});

export const GlobalStore = () => {
  return <div>GlobalStore</div>;
};
