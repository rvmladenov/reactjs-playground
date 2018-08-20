import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
// import Person from './Person/Person.class';

class App extends Component {
  render() {
    var name = 'Rvm';
    return (
      <div className="App">
       <h3>Hi, I am a {name} app</h3>
       <Person name="rvm" age="31" />
       <Person name="marto" age="32">And I have a child</Person>
       <Person name="miro" age="40" />
      </div>
    );
  }
}

export default App;
