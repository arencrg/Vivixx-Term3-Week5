import React, { Component } from 'react';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    todos: ["Wash your makeup brushes", "Get new hand wraps and gloves",
    "Buy a cake for Bren", "Get ukulele checked + ask to get it restringed",
    "Visit the dermatologist for another laser session",
    "Get a medical check-up for readmission", "Buy more cat food",
    "Finish MFM Website"],
    newtodos: ["Wash your makeup brushes", "Get new hand wraps and gloves",
    "Buy a cake for Bren", "Get ukulele checked + ask to get it restringed",
    "Visit the dermatologist for another laser session",
    "Get a medical check-up for readmission", "Buy more cat food",
    "Finish MFM Website"]
    }
  this.addNewTodo = this.addNewTodo.bind(this);
  this.searchTodo = this.searchTodo.bind(this);
}

addNewTodo(todo){
  console.log(todo);
  this.setState({
    todos: this.state.todos.concat(todo),
    newtodos: this.state.todos.concat(todo)
  })
}

searchTodo(event){
    var searchforthis = event.target.value.toLowerCase();
    var updatedList = this.state.todos.filter(function(todo){
      return todo.toLowerCase().includes(searchforthis);
    });
    this.setState({newtodos: updatedList});
  }

  render() {
    return (
      <div className="container">
      <h1>Stop being a lazy bum and get to work!</h1>
      <br/>
        <input onChange={(event)=>this.searchTodo(event)} type="text" placeholder="Search"/>
      <br/><br/>
      <TodoForm addNewTodoFunc={this.addNewTodo}/>
      <hr/>
      <TodoList todos_data={this.state.newtodos}/>
      </div>
    );
  }
}

export default App;
