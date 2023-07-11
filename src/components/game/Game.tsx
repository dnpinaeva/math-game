import {Col, Container, Row, Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Garbage from "./Garbage";
import Human from "./Human";
import Player from "./Player";
import {gameStore, ComputerType} from "./Game.store";
import WinnerDialog from "./WinnerDialog";
import { StartGameDialog } from "./StartGameDialog";

export const Game = () => {
    return (
        <div>
            {gameStore.game.winner != null ? (<WinnerDialog/>) : (null)}
            {gameStore.game.newGame ? (<StartGameDialog/>) : (null)}
            <Button variant="outline-primary" onClick={()=>gameStore.showNewGameDialog()}>Новая игра</Button>
            <Garbage count={gameStore.game.totalCount} />
            <Container>
                <Row>
                    <Col className={"text-center"}>
                        <Human/>
                    </Col>
                    <Col className={"text-center"}>
                        <Player name = "Компьютер" prevStep = {gameStore.game.prevStepComputer} />
                    </Col>
                </Row>
            </Container>            
        </div>
    );
};
  
export default observer(Game);
  