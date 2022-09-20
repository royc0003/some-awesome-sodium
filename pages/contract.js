import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Contract.module.scss";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import copy from "copy-to-clipboard";
import Toast from "react-bootstrap/Toast";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function contract() {
  const [urlText, setUrlText] = useState("https://something...");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [toast, setToast] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleToast = () => {
    setToast(!toast);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const copyToClipBoard = () => {
    toggleToast();
    copy(urlText, {
      debug: true,
      message: "Press #{key} to copy",
    });
  };

  return (
    <Stack direction="vertical" className={styles.mainBody} gap={5}>
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
      <div className={styles.toggleDrawer} onClick={openDrawer}>
        <h1 className={styles.toggleFont}>≡</h1>
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
      <Row className={styles.withdrawButtonGroup}>
        <Button className={styles.withdrawButton}>Withdraw</Button>
      </Row>

      <Row className={styles.clipBoard} xs="auto">
        <Col>
          <Button onClick={copyToClipBoard}> Click to copy</Button>
        </Col>
        <Col className={styles.clipBoardUrl}>
          <p>{urlText ? urlText : "test"}</p>
        </Col>
      </Row>

      <Toast show={toast} onClose={toggleToast}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Awesome-Sodium</strong>
        </Toast.Header>
        <Toast.Body>Successfully copied!</Toast.Body>
      </Toast>

      <Offcanvas show={showDrawer} onHide={closeDrawer}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Configuration</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Select the currency you would like to use:
        </Offcanvas.Body>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item style={{ backgroundColor: "#ff9396" }}>
              Eth
            </ListGroup.Item>
            <ListGroup.Item>Something</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <Button className={styles.withdrawButton}>Destroy</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </Stack>
  );
}
