import Player from "./Player";
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import {gameStore} from "./Game.store";

const Human = (props) => {
    return (
        <div>
            <Player name = "Игрок" prevStep = {gameStore.game.prevStepUser}/>
            <ButtonGroup size="lg">
                <Button variant="outline-primary" onClick={() => {gameStore.nextStep(1)}}>1</Button>
                <Button variant="outline-primary" onClick={() => {gameStore.nextStep(2)}}>2</Button>
                <Button variant="outline-primary" onClick={() => {gameStore.nextStep(3)}}>3</Button>
                <Button variant="outline-primary" onClick={() => {gameStore.nextStep(4)}}>4</Button>
            </ButtonGroup>
        </div>
    );
};
  
export default Human;
  