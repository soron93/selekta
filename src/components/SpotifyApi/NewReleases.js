import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SpotifyButton from "./Individual/SpotifyButton";
import AudioPlayer from "material-ui-audio-player";

export default class PlaylistDetail extends Component {
  state = {
    newRelease: null,
  };

  componentDidMount() {
    // getting the db info from -> server -> db
    let playlistId = this.props.match.params.id; 
	// from the ID in routes in App js keywords match.params.id
    axios
      .get(`${API_URL}/api/playlist/${playlistId}`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        this.setState({ playlist: response.data }); // we update the state here
      })
      .catch(() => {
        console.log("get fail");
      });
  }

  render() {
    if (!this.state.playlist) {
      return <p>Loading . . . </p>;
    }

    return (
      
        <Container maxWidth="sm">
          <Grid container spacing={2} xs={12}
            direction="column"
            justifyContent="space-between"
           
          >
            <Grid item  xs={6}
            container
            direction="column"
            justifyContent="space-between"
            
            >
            
        </Grid>
        </Grid>
      </Container>
   
    );
  }
}
