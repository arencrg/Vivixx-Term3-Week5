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
    // player_number is set so that the info is passed to the right part
    // this will contain the value from the input
    var searchUser;

    if (player_number === 1) {
    searchUser = this.player1input.value;
    }
    else {
      searchUser = this.player2input.value;
    }

    // this will fetch the API
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
    // just in case the wrong username is entered?
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
                Lookup <i class="material-icons right">search</i>
              </button>
              <br/><br/>

              // this will pass the info from the API to the PlayerProfile component
              <PlayerProfile player_data={this.state.player1}/>
            </Col>

            <Col s={12} m={6}>
              <input ref={(input) => {this.player2input = input;}}/>
              <button class="btn waves-effect waves-light" type="submit" name="action"
                      onClick={() => this.lookupPlayer(2)}>
                Lookup <i class="material-icons right">search</i>
              </button>
              <br/><br/>

              // this will pass the info from the API to the PlayerProfile component
              <PlayerProfile player_data={this.state.player2}/>
            </Col>
          </Row>

          // this will pass the info from the API to the Judging component
          <Judging  player1={this.state.player1} player2={this.state.player1}/>

        </div>
      );
    }
}

export default App;
