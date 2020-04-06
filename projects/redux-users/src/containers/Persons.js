import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import Actions from '../store/actions/actions';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }

        this.props.addPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
        this.props.deletePerson(personId);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const bindActionsToProps = dispatch => {
    return {
            deletePerson: (personId) => {
                dispatch({type: Actions.DELETE, value: personId})
            },
            addPerson: (newPerson) => {
                dispatch({type: Actions.ADD, value: newPerson})
            }
    }
}

const bindStateToProps = state => {
    return {
        persons: state.persons
    };
}

export default connect(bindStateToProps, bindActionsToProps)(Persons);