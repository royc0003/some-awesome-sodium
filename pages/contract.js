import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Contract.module.scss";
import ListGroup from "react-bootstrap/ListGroup";

export default function contract() {
  return (
    <Stack direction="vertical" className={styles.mainBody} gap={4}>
      <div className={styles.header}>
        <Row className={styles.header} xs="auto">
          <Col>
            <h3>Your balance</h3>
          </Col>
          <Col>
            <h3>xxxxx</h3>
          </Col>
        </Row>
        <div className={styles.divider}></div>
      </div>
      <Row className={styles.listing}>
        <Row className={styles.listingTitle}>Your allocation</Row>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Row>
    </Stack>
  );
}
