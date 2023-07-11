import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {ComputerType, gameStore} from "./Game.store";
import { useLocalObservable } from 'mobx-react-lite';
import Form from 'react-bootstrap/Form';

export const StartGameDialog = () => {
    const newGameStore = useLocalObservable(() => ({
        initCount: "24",
        initPlayer2Type: ComputerType.RandomStrategy,

    }))

    const onChange = (event) => {
        newGameStore.initCount = event.target.value;
    }
   
    const onSelectChange = (event) => {
        console.log("onSelectChange", event.target.value);
        newGameStore.initPlayer2Type = event.target.value;
    }

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
                <Form.Group className="mb-3" controlId="countControlID">
                    <h3>Количество спичек в куче</h3>
                    <Form.Control
                        as="input"
                        defaultValue={newGameStore.initCount}
                        onChange={onChange} 
                        //isValid={}
                    />        
                </Form.Group>
                <Form.Group className="mb-3" controlId="selectControlID">
                    <h3>Тип алгоритма</h3>
                    <Form.Select aria-label="Выбор типа игрока" onChange={onSelectChange} defaultValue={newGameStore.initPlayer2Type}>
                        <option value={ComputerType.RandomStrategy}>Алгоритм со случайным ходом</option>
                        <option value={ComputerType.StrongStrategy}>Оптимальный алгоритм</option>
                    </Form.Select>
                </Form.Group>
        
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>{ gameStore.startGame(parseInt(newGameStore.initCount, 10), newGameStore.initPlayer2Type) }}>
                    Начать
                </Button>
            </Modal.Footer>
        </Modal>

    );
};