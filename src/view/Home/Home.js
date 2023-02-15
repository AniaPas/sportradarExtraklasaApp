import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Table } from "../../components/Table/Table";
import styles from "./Home.module.scss";
//import { fetchData } from "../services/services";

export const Home = () => {
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Teams",
        // First group columns
        columns: [
          {
            Header: "Home team",
            accessor: "sport_event.competitors[0].name",
          },
          {
            Header: "Away team",
            accessor: "sport_event.competitors[1].name",
          },
        ],
      },
      {
        // first group - TV Show
        Header: "Results",
        // First group columns
        columns: [
          {
            Header: "Home score",
            accessor: "sport_event_status.home_score",
          },
          {
            Header: "Away score",
            accessor: "sport_event_status.away_score",
          },
        ],
      },
      {
        // first group - TV Show
        Header: "Half time",
        // First group columns
        columns: [
          {
            Header: "Home score",
            accessor: "sport_event_status.period_scores[0].home_score",
          },
          {
            Header: "Away score",
            accessor: "sport_event_status.period_scores[0].away_score",
          },
        ],
      },
      {
        // first group - TV Show
        Header: "Details",
        // First group columns
        columns: [
          {
            Header: "Date",
            accessor: "sport_event.start_time",
          },
          {
            Header: "Stadium",
            accessor: "sport_event.venue.name",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);
  //const [names, setNames] = useState({})
  //const

  useEffect(() => {
    const API = "http://localhost:3007/schedules/";

    axios
      .get(API)
      .then((response) => {
        const responseItems = response.data;
        //console.log(responseItems);
        setData(responseItems);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};
