//Style
import styles from "./MatchTimeline.module.scss";
//Hooks
import { useEffect, useState, useContext } from "react";
//GlobalState
import { GlobalState } from "../../Store/GlobalStore";
//Services
import { fetchResponse } from "../../services/services";
//Components
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(eventData);
  // const homeTeam = eventData.competitors[0].name;

  // const awayTeam = eventData.competitors[1].name;
  // console.log(awayTeam);
  const actionType = timelineData.map((item) => item.type);

  // console.log(actionType);
  const matchTime = timelineData.map((item) =>
    item.match_clock ? item.match_clock : "-"
  );
  //console.log(matchTime);
  const team = timelineData.map((item) =>
    item.competitor ? item.competitor : "-"
  );
  //console.log(team);
  return (
    <div className={styles.titleDiv}>
      <h2>The match step by step</h2>
      <TimelineTable
        team={team}
        matchTime={matchTime}
        actionType={actionType}
      />
    </div>
  );
};
