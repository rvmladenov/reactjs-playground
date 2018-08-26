import React from "react";
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div>
            <h3>Paragraph id {Math.ceil(Math.random()*100000)}</h3>
            <p>Username: {props.username}</p>
            <p>P2</p>
        </div>
    );
};

export default UserOutput;