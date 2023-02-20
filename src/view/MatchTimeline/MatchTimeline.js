import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { GlobalState } from "../../Store/GlobalStore";
import { fetchResponse, fetchTimeline } from "../../services/services";
import { TimelineTable } from "../../components/TimelineTable/TimelineTable";
export const MatchTimeline = () => {
  const global = useContext(GlobalState);
  const [eventData, setEventData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const getEventData = async () => {
    try {
      const eventResponse = await fetchResponse(global.globalEventApi);

      setEventData(eventResponse.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getTimelineData = async () => {
    try {
      const timelineResponse = await fetchResponse(global.globalTimelineApi);
      setTimelineData(timelineResponse.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEventData();
    getTimelineData();
  }, []);
  // console.log(eventData);
  console.log(timelineData);

  const actionType = timelineData.map((item) => item.type);
  // console.log(actionType);
  const matchTime = timelineData.map((item) =>
    item.match_clock ? item.match_clock : "-"
  );
  //console.log(matchTime);
  const team = timelineData.map((item) =>
    item.competitor ? item.competitor : "-"
  );
  console.log(team);
  return (
    <div>
      MatchTimelie
      <TimelineTable
        team={team}
        matchTime={matchTime}
        actionType={actionType}
      />
    </div>
  );
};
