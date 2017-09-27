import React, { Component } from 'react';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    todos: ["Wash your makeup brushes", "Get new hand wraps and gloves", "Buy a cake for Bren"]
  }
  this.addNewTodo = this.addNewTodo.bind(this);
}

addNewTodo(todo){
  console.log(todo);
  this.setState({
    todos: this.state.todos.concat(todo)
  })
}

  render() {
    return (
      <div className="container">
      <h1>Stop being a lazy bum and get to work!</h1>
      <br/>
      < TodoForm addNewTodoFunc={this.addNewTodo}/>
      <hr/>
      < TodoList todos_data={this.state.todos}/>
      </div>
    );
  }
}

export default App;
