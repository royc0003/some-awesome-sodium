import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/Main.module.scss";

export default function main() {
  return (
    <Stack direction="vertical" className={styles.mainBody} gap={2}>
      <Row className={styles.header} xs="auto">
        <Col>
          <h3>Your address</h3>
        </Col>
        <Col>
          <h3>xxxxx</h3>
        </Col>
      </Row>
      <div className={styles.divider}></div>

      <Row className={styles.createContractButtonBox}>
        <Button className={styles.createContractButton}>
          Create New Contract
        </Button>
      </Row>
    </Stack>
  );
}
