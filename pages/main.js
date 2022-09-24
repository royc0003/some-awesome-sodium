import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/Main.module.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { useRouter } from "next/router";
import Link from "next/link";

export default function main() {
  const router = useRouter();

  const goToEditPage = () => {
    router.push("/contract");
  };
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

      <Row className={styles.listing}>
        <Row className={styles.listingTitle}>Your contracts</Row>
        <ListGroup>
          <ListGroup.Item>
            <Link href={`/contract?addr=Crasjustoodio`}>Crasjustoodio</Link>
          </ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Row>

      <Row className={styles.createContractButtonBox}>
        <Button className={styles.createContractButton} onClick={goToEditPage}>
          Create New Contract
        </Button>
      </Row>
    </Stack>
  );
}
