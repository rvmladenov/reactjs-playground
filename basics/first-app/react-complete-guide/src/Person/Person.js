import React from "react";

const person = (props) => {
    return (
    <div>
        <p>Hi, my name is {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person;