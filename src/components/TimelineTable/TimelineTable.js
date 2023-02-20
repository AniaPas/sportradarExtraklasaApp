//Style
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./TimelineTable.module.scss";
//ID
import uniqid from "uniqid";
export const TimelineTable = ({ team, matchTime, actionType }) => {
  const createTeamCell = team.map((item) => {
    return (
      <div key={uniqid()} className={styles.divElement}>
        {item}
      </div>
    );
  });
  const createMatchTimeCell = matchTime.map((item) => {
    return (
      <div key={uniqid()} className={styles.divElement}>
        {item}
      </div>
    );
  });
  const createActionTypeCell = actionType.map((item) => {
    return (
      <div key={uniqid()} className={styles.divElement}>
        {item}
      </div>
    );
  });

  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col>2 of 2</Col>
        </Row>
        <Row className={styles.rowElement}>
          <Col className={styles.colElement}>{createMatchTimeCell}</Col>
          <Col className={styles.colElement}>{createTeamCell}</Col>
          <Col className={styles.colElement}>{createActionTypeCell}</Col>
        </Row>
      </Container>
    </div>
  );
};
