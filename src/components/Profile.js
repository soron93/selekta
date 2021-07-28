import React, { Component } from "react";
//import {Link} from 'react-router-dom'
import SpotifyGetPlaylists from "./SpotifyApi/SpotifyGetPlaylists";
import SavePlaylist from "./SavePlaylist";
import Container from "@material-ui/core/Container";
import SliderTime from "./Individual/SliderTime";
import {Button} from  'react-bootstrap'
import {Redirect} from 'react-router-dom'
import axios from "axios";
import { API_URL } from "../config";
import {Link} from  'react-router-dom'

//USER PROFILE IN THE APP PRIVATE PAGE
//SHOULD SHOW A LIST OF SAVED PLAY LIST

class Profile extends Component {
  state = {
    playlists:[]
  }

  componentDidMount(){   // getting the db info from -> server -> db
    axios.get( `${API_URL}/api/profile`, { withCredentials: true } )
    .then((response) => {
      console.log(response.data)
      this.setState({ playlists:response.data})
    })
    .catch(() => {
      console.log("get fail");
    })


}

  render() {
    console.log("test this");

    return (
      <div>
        <Container maxWidth="sm">
          {
            this.state.playlists.map((playlist) => {
              return <p><Link to={`/playlist/${playlist._id}`}>{playlist.name}</Link></p>
            })
          }
        </Container>
      </div>
    );
  }
}

export default Profile;
