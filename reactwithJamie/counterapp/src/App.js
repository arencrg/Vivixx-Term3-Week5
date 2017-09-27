import React, { Component } from 'react';
import Welcome from './Welcome'
import Counter from './Counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Welcome name="Aren"/>
        < Counter />
      </div>
    );
  }
}

export default App;
