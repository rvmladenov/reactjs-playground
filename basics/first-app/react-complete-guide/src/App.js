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
        ],
        showPersons: false
    };

    togglePersons = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    changeNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 69 },
                { name: "marto", age: 0 },
                { name: "miro", age: 40 }
            ]
        });
    }

    valueChanged = (event) => {
        this.setState({
            persons: [
                { name: "rvm", age: 69 },
                { name: event.target.value, age: 0 },
                { name: "miro", age: 40 }
            ]
        });
    }

    render() {
        var name = 'Rvm';

        var persons = '';
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.changeNameHandler.bind(this, 'Radoslav')} changed={this.valueChanged} />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And I have a child</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                </div>
            );
        }

        return (
            <div className="App">
                <h3>Hi, I am a {name} app</h3>
                <button onClick={this.togglePersons}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
