import React, { Component } from 'react';

class TodoList extends Component {
  render(){
    return(
        <ul>
          {this.props.todos_data.map((task, i) => <li key={i}>{task}</li>)}
        </ul>
    )
  }
}


export default TodoList;
