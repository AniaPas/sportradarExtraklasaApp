import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const TimelineTable = ({ team, matchTime, actionType }) => {
  const createTeamCell = team.map((item) => {
    return <div>{item}</div>;
  });
  const createMatchTimeCell = matchTime.map((item) => {
    return <div>{item}</div>;
  });
  const createActionTypeCell = actionType.map((item) => {
    return <div>{item}</div>;
  });
  return (
    <Container>
      <Row>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>{createMatchTimeCell}</Col>
        <Col>{createTeamCell}</Col>
        <Col>{createActionTypeCell}</Col>
      </Row>
    </Container>
  );
};
