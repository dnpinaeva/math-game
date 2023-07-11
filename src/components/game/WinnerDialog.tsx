import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {gameStore} from "./Game.store";
import { observer } from 'mobx-react-lite';

const WinnerDialog = () => {
    return (
        <Modal
            size="lg"
            show={true}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Игра окончена
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Победа за {gameStore.game.winner == 1 ? "Игроком" : "Компьютером"}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>{ gameStore.showNewGameDialog() }}>
                    Начать новую игру
                </Button>
            </Modal.Footer>
        </Modal>

    );
};
  
export default observer(WinnerDialog);