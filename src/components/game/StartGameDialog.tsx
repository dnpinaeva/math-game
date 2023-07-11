import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {gameStore} from "./Game.store";
import { observer } from 'mobx-react-lite';
import Form from 'react-bootstrap/Form';

export const StartGameDialog = () => {
    return (
        <Modal
            size="lg"
            show={true}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Старт игры
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <h2>Количество спичек в куче</h2>
                    <Form.Control
                        as="input"
                        defaultValue={24}
                        onChange={null} 
                        //isValid={}
                    />                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>{ gameStore.clearWinner() }}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>

    );
};