import React, { Component } from 'react';
import './App.css';

import Output from './UserOutput/UserOutput';
import Input from './UserInput/UserInput';

class App extends Component {

  state = {
      username: "rvm"
  };

  eventHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  styles = {
    color: "red !important"
  }

  render() {
    return (
      <div styles={this.styles} className="App">
        <Input username={this.state.username} eventHandler={this.eventHandler}></Input>
        <hr />
        <Output username={this.state.username}></Output>
        <Output username={this.state.username}></Output>
        <Output username={this.state.username}></Output>
      </div>
    );
  }
}

export default App;
