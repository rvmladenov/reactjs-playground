import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputValue: ''
  };

  onChangeHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  removeLetterAt = (index) => {
    const letters = this.state.inputValue.split("");
    letters.splice(index, 1);

    this.setState({
      inputValue: letters.join("")
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeHandler} />
        <div>Entered Value: <ValidationComponent textLength={this.state.inputValue.length}></ValidationComponent></div> 
        {
          this.state.inputValue.split("").map((letter, index) => {
            return <CharComponent letter={letter} click={() => this.removeLetterAt(index)} key={index}></CharComponent>;
          })
        }
      </div>
    );
  }
}

export default App;
