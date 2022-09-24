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
        <Stack direction="vertical" className={styles.mainBody} gap={2}>
        <Row className={styles.header} xs="auto">
            <Col>
            <h3>Your address</h3>
            </Col>
            <Col>
            <h3>xxxxx</h3>
            </Col>
        </Row>

        </Stack>


    );
    
}