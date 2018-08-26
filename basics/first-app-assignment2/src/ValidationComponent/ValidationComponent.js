import React from "react";

const ValidationComponent = (props) => {
    return (
        <div>
            {props.textLength <= 5 ? "Text too short" : "Text long enough"}
        </div>
    )
};

export default ValidationComponent;