import React, { Component } from 'react';

class Judging extends Component {

  render(){

    // To check if the object if empty -- if empty, the players haven't been entered
    var isP1ready = !!Object.keys(this.props.player1).length;
    var isP2ready = !!Object.keys(this.props.player2).length;
    var allReady = isP1ready && isP2ready;

    // variables to hold the scores
    var p1score = 0;
    var p2score = 0;

    // comparing the number of followers
    if (this.props.player1.followers > this.props.player2.followers) {
      p1score =  p1score + 1;
      console.log(p1score);
    }
    else if (this.props.player1.followers == this.props.player2.followers) {
      p1score = p1score + 1;
      p2score = p2score + 1;
    }
    else {
      p2score = p2score + 1;
      console.log(p2score);
    }

    // comparing the number of following
    if (this.props.player1.followers > this.props.player2.following) {
      p1score =  p1score + 1;
      console.log(p1score);
    }
    else if (this.props.player1.followers == this.props.player2.following) {
      p1score = p1score + 1;
      p2score = p2score + 1;
    }
    else {
      p2score = p2score + 1;
      console.log(p2score);
    }

    // comparing the number of repositories
    if (this.props.player1.public_repos > this.props.player2.public_repos) {
      p1score =  p1score + 1;
      console.log(p1score);
    }
    else if (this.props.player1.public_repos == this.props.player2.public_repos) {
      p1score = p1score + 1;
      p2score = p2score + 1;
    }
    else {
      p2score = p2score + 1;
      console.log(p2score);
    }

    // variable to show the result
    var result;

    // to show which person won
    if (p1score > p2score) {
      result = "Player 1!";
    }
    else if (p1score == p2score && p1score > 0 && p2score > 0) {
      result = "it's a draw!";
    }
    else if (p2score > p1score){
      result = "Player 2!";
    }

    return(
        <div>
          // if both the players are ready, then this part will be displayed, if not, then this won't show up (I think)
          { allReady ? <h4>And the winner is... {result}</h4> : null}
        </div>
    )
  }
}

export default Judging;
