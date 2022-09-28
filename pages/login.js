import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/Login.module.scss";
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
      
      <Container className={styles.header} xs="auto">
        <Col className = {styles.donan}>
          DONAN
        </Col>
        <Col className={styles.left}>
          Home
        </Col>
        <Col className={styles.left}>
          Causes
        </Col>
        <Col className={styles.left}>
          About
        </Col>
        <Col md="auto">
        </Col>
        <Col className={styles.right}>
            <Button size="sm" className={styles.donateButton}>
            Donate Now
            </Button>
        </Col>
        
      </Container>
      <div></div>

      <Row className={styles.description}>
        <p className={styles.title}><span style={{color: "#1771C3"}} >Don</span>ate <span style={{color: "#1771C3"}}>An</span>onymously</p>
        <p className={styles.slogan}>Untraceable donations to the cause you care about most.</p>
      </Row>

      <Row>
      <Button className={styles.donateButton}>
            Donate Now
            </Button>
            <div style={{width: "40px"}}></div>
      <Button variant="outline-light" className={styles.learnMore}>
            Learn More
            </Button>
      </Row>
        

      
    </Stack>
    </div>
  );
    
}