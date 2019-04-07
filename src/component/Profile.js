import React, { Component } from 'react';
import axios from 'axios';

//uses component as the extends Component
class Profile extends Component {
	 state = {

  }
  
  handleClick = () => {
  	// console.log(this.state.firstname);
  	// const artistName = document.getElementById("artist").value;
  	// const songName = document.getElementById("song").value;
  	
  	const url = "https://api.lyrics.ovh/v1/" + this.state.artistname + "/" + this.state.songname;
  	
  	// console.log(url);
  	axios.get(url)
  	
  	.then(response=>{
  	// console.log(response);
  		this.setState({
  			lyrics:response.data.lyrics
  		});
  	});
  }
  
  
	render() {
		return(
			<div>
				<p> My App </p>
			
			</div>
			);
	}
}

export default Profile;