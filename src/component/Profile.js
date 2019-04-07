import React, { Component } from 'react';
import axios from 'axios';

//uses component as the extends Component
class Profile extends Component {
	state = {
		artistname: null,
		songname: null,
		lyrics: null
	}

	handleClick = () => {
		// console.log(this.state.firstname);
		// const artistName = document.getElementById("artist").value;
		// const songName = document.getElementById("song").value;

		const url = "https://api.lyrics.ovh/v1/" + this.state.artistname + "/" + this.state.songname;

		// console.log(url);
		axios.get(url)

			.then(response => {
				// console.log(response);
				this.setState({
					lyrics: response.data.lyrics
				});
			});
	}

	setArtistName = e => {
		// e.target.value;
		// console.log(e.target.value);
		this.setState({
			artistname: e.target.value
		});
	}

	setSongName = e => {
		this.setState({
			songname: e.target.value
		});
	}

	render() {
		return (
			<div>
				<p> My App </p>
					<input onChange= {this.setArtistName} placeholder="Artist Name" />
					<input onChange= {this.setSongName} placeholder="Song Name" />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		);
	}
}

export default Profile;
