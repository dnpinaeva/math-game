import FireView from "./FireView";

const Garbage = (props) => {
    return (
        <div className={"text-center"}>
            <h3>Сейчас в куче: {props.count}</h3>
            <FireView count = {props.count}/>
        </div>
    );
};
  
export default Garbage;
  