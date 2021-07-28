import React, { Component } from "react";
//import {Link} from 'react-router-dom'
import SpotifyGetPlaylists from "./SpotifyApi/SpotifyGetPlaylists";
import SavePlaylist from "./SavePlaylist";
import Container from "@material-ui/core/Container";
import SliderTime from "./Individual/SliderTime";


//USER PROFILE IN THE APP PRIVATE PAGE
//SHOULD SHOW A LIST OF SAVED PLAY LIST

class Profile extends Component {
  render() {
    console.log("test this");

    return (
      <div>
        <Container maxWidth="sm">
          <h1>PROFILE COMPONENT SHOWING</h1>
          <SpotifyGetPlaylists />
          <SavePlaylist/>
          <SliderTime/>
        </Container>
      </div>
    );
  }
}

export default Profile;
