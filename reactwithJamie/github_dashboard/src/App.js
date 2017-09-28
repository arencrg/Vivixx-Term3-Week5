import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    data: []
  }
}

  componentDidMount(){
    console.log("Trying to fetch")
    fetch("https://api.github.com/users/octocat")
    .then(function(response){
        return response.json();
      })
    .then((response) => {
        this.setState({data: response});
    })
  }


  render() {
    return (
      <div className="App">
        <h1>GITHUB DASHBOARD API</h1>
        <h3>{this.state.data.name}</h3>
      </div>
    );
  }
}

export default App;
