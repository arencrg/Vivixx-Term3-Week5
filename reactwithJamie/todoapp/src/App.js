import React, { Component } from 'react';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    tasklist: ["Wash your makeup brushes", "Get new hand wraps and gloves", "Buy a cake for Bren"]
  }

}

  render() {
    return (
      <div>
      <h1>My ToDos</h1>
      < TodoForm />
      < TodoList tasklist_data={this.state.tasklist}/>
      </div>
    );
  }
}

export default App;
