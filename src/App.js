import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component

class App extends Component {
  state = {
    inputObject:{
      user: '',
      city: ''
    },
    finalObject: {
      user: '',
      city: ''
    },
    numberArray: [1, 2, 3]
  }

  // handleUserChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({
  //     user: event.target.value
  //   });
  // }
  
  // handleCityChange = (event) => {
  //   this.setState({
  //     city: event.target.value
  //   });
  // }

  handleChange = (event, typeOf) => {
    console.log(event.target.value, typeOf);
    this.setState({
      [typeOf]: event.target.value
    }) 
  }

  handleSubmit = () => {
    this.setState({ 
      finalObject:{
        user: this.state.user,
        city: this.state.city
      }
    });
  }

  updateArray = () => {
    console.log(this.state.numberArray);
    let newNumber = 7;

    // this.state.numberArray.push(newNumber);
    // don't do this - directly mutates array

    this.setState({
      numberArray: [...this.state.numberArray, newNumber]
    })
  }


  render(){
    return (
      <div className="App">
        <h1>This is my app!</h1>
        <label htmlFor="userInput">Name: </label>
        <input id="userInput" onChange={(event) => this.handleChange(event, 'user')}/>
        <label htmlFor="cityInput">City: </label>
        <input id="cityInput" onChange={(event) => this.handleChange(event, 'city')}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.updateArray}>Update Array</button>
        {/* dont show values until i hit submit */}
        <h2>and this is my name: {this.state.finalObject.user} </h2>
        <h2>and I live in: {this.state.finalObject.city} </h2>

        <h3>{this.state.numberArray}</h3>

      </div>
    );
  }
}

export default App;
