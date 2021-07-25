import React, { Component } from "react";
//import {Link} from 'react-router-dom'
import SpotifyGetPlaylists from "./SpotifyApi/SpotifyGetPlaylists";
import SavePlaylist from "./SavePlaylist";
import Container from "@material-ui/core/Container";

//USER PROFILE IN THE APP PRIVATE PAGE

class Profile extends Component {
  render() {
    console.log("test this");

    return (
      <div>
        <Container maxWidth="sm">
          <h1>PROFILE COMPONENT SHOWING</h1>
          <SpotifyGetPlaylists />
          <SavePlaylist/>
        </Container>
      </div>
    );
  }
}

export default Profile;
