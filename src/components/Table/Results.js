import Table from "react-bootstrap/Table";
import { Home } from "../../view/Home";
import { useState } from "react";

export const Results = ({
  homeNames,
  awayNames,
  homeResults,
  awayResults,
  halfTime,
  date,
  stadium,
}) => {
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
    thElements.map((item, index) => <th>{item}</th>);

  const r = homeResults?.map((col, index) => {
    const x = Elements?.map((row) => row[index]);
    return x;
  });
  console.log(r);

  const fillBody = r?.map((e) => (
    <tr>
      <td style={{ backgroundColor: "orange" }}>{e[0]}</td>
      <td>{e[1]}</td>
      <td>{e[2]}</td>
      <td>{e[3]}</td>
      <td>{e[4]}</td>
      <td>{e[5]}</td>
      <td>{e[6]}</td>
    </tr>
  ));
  console.log(fillBody);
  return (
    <Table striped bordered hover size='sm'>
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
  );
};
