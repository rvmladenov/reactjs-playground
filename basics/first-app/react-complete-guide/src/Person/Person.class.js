import React, { Component } from 'react'


class Person extends Component {
    render() {
        return (
            <p>Hi, my name is {this.props.name} and I am {this.props.age} years old</p>
        );
    }
}

export default Person;