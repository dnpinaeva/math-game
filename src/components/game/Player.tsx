const Player = (props) => {
    return (
        <div>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                Предыдущий ход: {props.prevStep}
            </div>
        </div>
    );
};

export default Player;