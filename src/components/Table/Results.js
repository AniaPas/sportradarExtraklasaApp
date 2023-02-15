import Table from "react-bootstrap/Table";
import uniqid from "uniqid";
import styles from "./Results.module.scss";
export const Results = ({
  homeNames,
  awayNames,
  homeResults,
  awayResults,
  date,
  halfTime,
  stadium,
  data,
}) => {
  const Elements = [
    homeNames,
    awayNames,
    homeResults,
    awayResults,
    date,
    halfTime,
    stadium,
  ];
  const createThElement = (...thElements) =>
    thElements.map((item, index) => <th key={uniqid()}>{item}</th>);

  const r = homeNames?.map((col, index) => {
    const x = Elements?.map((row) => row[index]);
    return x;
  });
  //console.log(typeof r);

  // } else {
  //   if (item.sport_event_status.match_tie === true) {
  //     console.log("orange");
  //     return "orange";
  //   } else {
  //     console.log("red");
  //     return "red";
  //   }

  const fillBody = r?.map((e, i) => (
    <tr key={uniqid()}>
      <td style={{ backgroundColor: "green" }}>{e[0]} </td>
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
            "Results",
            "Date",
            "Half time",
            "Stadium"
          )}
        </tr>
      </thead>
      <tbody>{fillBody}</tbody>
    </Table>
  );
};
