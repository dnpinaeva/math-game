import fire from "./fire.png";

const FireView = (props) => {
    return(
        <span className={"align-top"} style={{fontSize:"4em"}}>
            &nbsp;
        { [...Array(props.count)].map(()=>
            <img height={"120em"} src={fire} alt="спичка"/>
        )
        }
        </span>
    )
}

export default FireView;