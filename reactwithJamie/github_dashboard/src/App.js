import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-materialize';
import Judging from './Components/Judging.js'
import PlayerProfile from './Components/PlayerProfile.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      player1: {}, player2: {}
    }
  }

  lookupPlayer(player_number){
    console.log(player_number);
    var searchUser;
    if (player_number === 1) {
    searchUser = this.player1input.value;
    }
    else {
      searchUser = this.player2input.value;
    }
    fetch(`https://api.github.com/users/${searchUser}`)
    .then(function(response){
        return response.json();
      })
    .then((response) => {
      if (player_number === 1) {
        this.setState({player1: response});
      }
      else {
        this.setState({player2: response});
      }
    })
    .catch(function(error) {
      console.log("Error!");
    })

  }

    render() {
      return (
        <div className="App">
          <h1>GitWars</h1>
          <Row>
            <Col s={12} m={6}>
              <input ref={(input) => {this.player1input = input;}}/>
              <button class="btn waves-effect waves-light" type="submit" name="action"
                        onClick={() => this.lookupPlayer(1)}>
                Lookup <i class="material-icons right">search</i> </button>
              <br/><br/>
              <PlayerProfile player_data={this.state.player1}/>
            </Col>

            <Col s={12} m={6}>
              <input ref={(input) => {this.player2input = input;}}/>
              <button class="btn waves-effect waves-light" type="submit" name="action"
                        onClick={() => this.lookupPlayer(2)}>
                Lookup <i class="material-icons right">search</i> </button>
              <br/><br/>
              <PlayerProfile player_data={this.state.player2}/>
            </Col>
          </Row>

          <Judging  player1={this.state.player1} player2={this.state.player1}/>

        </div>
      );
    }

}

export default App;
