import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
// import Person from './Person/Person.class';

class App extends Component {

    state = {
        persons: [
            { name: "rvm", age: 31 },
            { name: "marto", age: 0 },
            { name: "miro", age: 40 }
        ]
    };

    changeNameHandler = () => {
        this.setState({
            persons: [
                { name: "rvm sexy", age: 69 },
                { name: "marto", age: 0 },
                { name: "miro", age: 40 }
            ]
        });
    }

    render() {
        var name = 'Rvm';
        return (
            <div className="App">
                <h3>Hi, I am a {name} app</h3>
                <button onClick={this.changeNameHandler}>Click me</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And I have a child</Person>
                <Person name={this.state.persons[2].age} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
