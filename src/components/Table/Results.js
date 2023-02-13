import Table from "react-bootstrap/Table";
import { Home } from "../../view/Home";
import { useState } from "react";

export const Results = ({ names, results }) => {
  const Elements = [names, results];
  const createThElement = (...thElements) =>
    thElements.map((item, index) => <th>{item}</th>);

  const r = names?.map((col, index) => {
    const x = Elements?.map((row) => row[index]);
    return x;
  });
  console.log(typeof r);

  const fillBody = r?.map((e) => (
    <tr>
      <td>{e[0]}</td>
      <td>{e[1]}</td>
    </tr>
  ));
  console.log(fillBody);
  return (
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>{createThElement("Team", "Results")}</tr>
      </thead>
      <tbody>{fillBody}</tbody>
    </Table>
  );
};
