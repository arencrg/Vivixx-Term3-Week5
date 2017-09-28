import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';

class PlayerProfile extends Component {
  render(){
    return(
			<CardPanel className="teal lighten-5 black-text">
				<h3>{this.props.player_data.name}</h3>
        <h5>{this.props.player_data.html_url}</h5>
        <img src={this.props.player_data.avatar_url} width="60%" alt=""/>
        <p>{this.props.player_data.bio}
        <hr/>
        Public Repos: {this.props.player_data.public_repos}
        <br/>
        Followers: {this.props.player_data.followers}
        <br/>
        Following: {this.props.player_data.following}
        </p>
			</CardPanel>
    )
  }
}

export default PlayerProfile;
