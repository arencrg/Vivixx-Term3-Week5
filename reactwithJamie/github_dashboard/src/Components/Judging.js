import React, { Component } from 'react';

class Judging extends Component {

  render(){
    var isP1ready = !!Object.keys(this.props.player1).length;
    var isP2ready = !!Object.keys(this.props.player2).length;
    var allReady = isP1ready && isP2ready;

    var p1score = 0;
    var p2score = 0;
    var result;

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

    if (p1score > p2score) {
      result = "Player 1!";
    }
    else if (p1score == p2score && p1score > 0 && p2score > 0) {
      result = "both/neither, it's a draw!";
    }
    else if (p2score > p1score){
      result = "Player 2!";
    }

    return(
        <div>
          { allReady ? <h4>And the winner is... {result}</h4> : null}
        </div>
    )
  }
}

export default Judging;
