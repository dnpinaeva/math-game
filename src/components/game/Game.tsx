import {Col, Container, Row, Button} from "react-bootstrap";
import Garbage from "./Garbage";
import Human from "./Human";
import Player from "./Player";

export const Game = () => {
    return (
        <div>
            <Button variant="outline-primary">Новая игра</Button>
            <Garbage count={21} />
            <Container>
                <Row>
                    <Col>
                        <Human/>
                    </Col>
                    <Col>
                        <Player name = "Компьютер" prevStep = {0} />
                    </Col>
                </Row>
            </Container>            
        </div>
    );
};
  
export default Game;
  