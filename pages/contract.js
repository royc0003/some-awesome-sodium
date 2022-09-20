import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Contract.module.scss";
import ListGroup from "react-bootstrap/ListGroup";

export default function contract() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
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
        <div className={styles.toggleButtonGroup}>
          <ButtonGroup>
            <ToggleButton
              type="radio"
              name="radio"
              value={"1"}
              checked={radioValue === "1"}
              onClick={() => setRadioValue("1")}
            >
              Enable
            </ToggleButton>
            <ToggleButton
              type="radio"
              name="radio"
              value={"2"}
              checked={radioValue === "2"}
              onClick={() => setRadioValue("2")}
            >
              Disable
            </ToggleButton>
          </ButtonGroup>
        </div>
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
