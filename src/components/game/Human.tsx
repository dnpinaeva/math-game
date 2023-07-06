import Player from "./Player";
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";

const Human = (props) => {
    return (
        <div>
            <Player name = "Игрок" prevStep = {0}/>
            <ButtonGroup size="lg">
                <Button variant="outline-primary">1</Button>
                <Button variant="outline-primary">2</Button>
                <Button variant="outline-primary">3</Button>
                <Button variant="outline-primary">4</Button>
            </ButtonGroup>
        </div>
    );
};
  
export default Human;
  