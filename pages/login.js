import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/Login.module.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { useRouter } from "next/router";
import Link from "next/link";


export default function login() {
    const router = useRouter();

    const goToMainPage = () => {
        router.push("/main");
    }
    return(
    <div className = {styles.background}>
    <Stack direction="vertical" className={styles.mainBody} gap={2}>
      <Row className={styles.header} xs="auto">
        <Col className={styles.left}>
          <p className = {styles.donan} >DONAN</p>
        </Col>
        <Col className={styles.left}>
          <p>Home</p>
        </Col>
        <Col className={styles.left}>
          <p>Causes</p>
        </Col>
        <Col className={styles.left}>
          <p>About</p>
        </Col>
        <Col className={styles.right}>
            <Button>
            <p>Donate Now</p>
            </Button>
        </Col>
        
      </Row>
      <div></div>

      <Row className={styles.description}>
        <p className={styles.title}>Donate Anonymously</p>
        <p className={styles.slogan}>Untraceable donations to the cause you care about most.</p>
      </Row>

      <Row>
      <Button>
            <p>Donate Now</p>
            </Button>
      </Row>
        

      
    </Stack>
    </div>
  );
    
}