import React, { Component } from "react";
//import {Link} from 'react-router-dom'
import SpotifyGetPlaylists from "./SpotifyApi/SpotifyGetPlaylists";
import SavePlaylist from "./SavePlaylist";
import Container from "@material-ui/core/Container";
import SliderTime from "./Individual/SliderTime";
import {Button} from  'react-bootstrap'
import {Redirect} from 'react-router-dom'


//USER PROFILE IN THE APP PRIVATE PAGE
//SHOULD SHOW A LIST OF SAVED PLAY LIST

class Profile extends Component {
  render() {
    console.log("test this");

    if (!this.props.user) {
			//redirect to sigin page
			return <Redirect to={'/signin'}/>
		}

    return (
      <div>
        <Container maxWidth="sm">
          <h1>PROFILE COMPONENT SHOWING</h1>
          <form onSubmit={this.props.onAdd}>
				<input  name="name"  type="text"  placeholder="Enter name"/>
				<input  name="description"  type="text"  placeholder="Enter playlist"/>
				<input type="file" name="myImage" accept="image/png, image/jpg" />
				<Button  type="submit"  >Submit</Button>
			</form>
		)
          <SpotifyGetPlaylists />
          <SavePlaylist/>
          <SliderTime/>
        </Container>
      </div>
    );
  }
}

export default Profile;
