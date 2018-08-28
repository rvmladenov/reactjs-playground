import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
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
        this.setState({ persons });
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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightblue',
                color: 'white'
            }
        };

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
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h3>Hi, I am a {name} app</h3>
                    <p className={classes.join(' ')}>This is really working ! :)</p>
                    <button
                        style={style}
                        onClick={this.togglePersons}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
