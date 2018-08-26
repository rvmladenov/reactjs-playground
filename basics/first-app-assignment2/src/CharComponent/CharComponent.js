import React from "react";

const CharComponent = (props) => {
    const styles = { display: "inline-block", padding: "16px", "text-align": "center", margin: "16px", border: "1px solid black" };
    return (
    <div styles={styles}>
        <p onClick={props.click}>{props.letter}</p>
    </div>
    )
};

export default CharComponent;