import React from "react";
import './UserInput.css';

const UserInput = (props) => {
    return (
    <div>
        <input type="text" onChange={props.eventHandler} value={props.username} />
    </div>
    )
};

export default UserInput;