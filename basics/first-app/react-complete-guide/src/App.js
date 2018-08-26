import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
// import Person from './Person/Person.class';

class App extends Component {

    state = {
        persons: [
            { id: 1, name: "rvm", age: 31 },
            { id: 2, name: "marto", age: 0 },
            { id: 3, name: "miro", age: 40 }
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

    deletePerson = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons});
    };

    valueChanged = (event, id) => {
        const cPersons = [...this.state.persons];

        const personIndex = cPersons.findIndex(p => p.id === id);
        cPersons[personIndex].name = event.target.value;

        this.setState({
            persons: cPersons
        });
    }

    render() {
        var name = 'Rvm';

        var persons = '';
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePerson(index)}
                            changed={(event) => this.valueChanged(event, person.id)}
                            key={person.id}></Person>
                    })}
                    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.changeNameHandler.bind(this, 'Radoslav')} changed={this.valueChanged} />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And I have a child</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
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
