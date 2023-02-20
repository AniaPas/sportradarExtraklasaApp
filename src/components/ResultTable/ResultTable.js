import Table from "react-bootstrap/Table";

import uniqid from "uniqid";
import styles from "./ResultTable.module.scss";
import { GlobalState } from "../../Store/GlobalStore";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const ResultTable = ({
  homeNames,
  awayNames,
  homeResults,
  awayResults,
  halfTime,
  date,
  stadium,
}) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/matchtimeline");
  };
  const global = useContext(GlobalState);
  const Elements = [
    homeNames,
    awayNames,
    homeResults,
    awayResults,
    halfTime,
    date,
    stadium,
  ];

  const createThElement = (...thElements) =>
    thElements.map((item, index) => <th key={uniqid()}>{item}</th>);

  const column = homeResults?.map((col, index) => {
    const row = Elements?.map((row) => row[index]);
    return row;
  });
  //console.log(r);
  const cellColor = (array1, array2) =>
    array1.map((item, index) => {
      if (item > array2[index]) {
        return "green";
      } else if (item === array2[index]) {
        return "orange";
      } else {
        return "red";
      }
    });
  const fillBody = column?.map((e, i) => (
    <tr key={uniqid()} onClick={clickHandler} className={styles.tableRow}>
      <td style={{ backgroundColor: cellColor(homeResults, awayResults)[i] }}>
        {e[0]}
      </td>
      <td style={{ backgroundColor: cellColor(awayResults, homeResults)[i] }}>
        {e[1]}
      </td>
      <td>{e[2]}</td>
      <td>{e[3]}</td>
      <td>{e[4]}</td>
      <td>{e[5]}</td>
      <td>{e[6]}</td>
    </tr>
  ));
  //console.log(fillBody);
  return (
    <div className={styles.tableContainer}>
      <Table
        responsive
        hover
        borderless
        size='sm'
        className={styles.resultTable}
      >
        <thead>
          <tr>
            {createThElement(
              "Home team",
              "Away team",
              "Home results",
              "Away results",
              "Half-time",
              "Date",
              "Stadium"
            )}
          </tr>
        </thead>
        <tbody>{fillBody}</tbody>
      </Table>
    </div>
  );
};
