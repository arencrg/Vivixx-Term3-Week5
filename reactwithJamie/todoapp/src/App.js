import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){

  }

  render() {
    return (
      <div className="App">
      <h1>My ToDos</h1>
      < TodoForm />
      < TodoList />
      </div>
    );
  }
}

export default App;
