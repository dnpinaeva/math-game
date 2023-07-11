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
                Выиграл {gameStore.game.winner == 1 ? "Игрок" : "Компьютер"}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>{ gameStore.clearWinner() }}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>

    );
};
  
export default observer(WinnerDialog);