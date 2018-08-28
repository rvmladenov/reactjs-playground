import React from "react";
import Radium from "radium";

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
    // <div style={style}>
    <div>
        <p onClick={props.click}>Hi, my name is {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} />
    </div>
    )
};

// export default Radium(person);
export default Radium(person);