import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      number:0
    }
    this.add = this.add.bind(this);
  }

add(e){
  e.preventDefault();
  this.setState({number: this.state.number + 1})
}

render(){
  return(
  <div>
    <h1>{this.state.number}</h1>
    <button onClick={this.add}>ADD</button>
  </div>
)
}
}

export default Counter;
