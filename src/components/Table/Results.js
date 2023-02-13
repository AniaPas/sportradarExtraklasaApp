import Table from "react-bootstrap/Table";
import uniqid from "uniqid";

export const Results = ({ names, results, date, halfTime }) => {
  const Elements = [names, results, date, halfTime];
  const createThElement = (...thElements) =>
    thElements.map((item, index) => <th key={uniqid()}>{item}</th>);

  const r = names?.map((col, index) => {
    const x = Elements?.map((row) => row[index]);
    return x;
  });
  console.log(typeof r);

  const fillBody = r?.map((e) => (
    <tr key={uniqid()}>
      <td>{e[0]}</td>
      <td>{e[1]}</td>
      <td>{e[2]}</td>
      <td>{e[3]}</td>
    </tr>
  ));
  console.log(fillBody);
  return (
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>{createThElement("Team", "Results", "Date", "Half time")}</tr>
      </thead>
      <tbody>{fillBody}</tbody>
    </Table>
  );
};
