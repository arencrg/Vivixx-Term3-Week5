import React, { Component } from 'react';

class TodoForm extends Component {
constructor(props){
  super(props);
  this.state = { text: ""}
}

updateText(event){
  this.setState({text: event.target.value})
}

addTodo(){
  this.props.addNewTodoFunc(this.state.text);
  this.setState({
    text: ""
  })
}

  render(){
    return(
      <div>
      <input onChange={(event) => this.updateText(event)} value={this.state.text} type="text" />
      <button onClick={()=> this.addTodo()}>Add a new task</button>
      </div>
    )
  }
}

export default TodoForm;
