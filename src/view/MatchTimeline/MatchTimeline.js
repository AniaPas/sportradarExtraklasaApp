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
  const [timelineData, setTimelineData] = useState([]);

  const getTimelineData = async () => {
    try {
      const timelineResponse = await fetchResponse(global.globalTimelineApi);
      setTimelineData(timelineResponse.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTimelineData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const actionType = timelineData.map((item) => item.type);
  const matchTime = timelineData.map((item) =>
    item.match_clock ? item.match_clock : "-"
  );
  const team = timelineData.map((item) =>
    item.competitor ? item.competitor : "-"
  );
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
