import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SpotifyButton from "./Individual/SpotifyButton";
import AudioPlayer from "material-ui-audio-player";
import LottieControl from "./Loading/LottieControl";
import notFound from "../animation/notFound.json";

export default class PlaylistDetail extends Component {
  state = {
    playlist: null,
  };

  componentDidMount() {
    // getting the db info from -> server -> db
    let playlistId = this.props.match.params.id; // from the ID in routes in App js keywords match.params.id
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
      return 
      <LottieControl width={400} height={400} animation={notFound} /> 
     
      
      
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
            <p>
           <h4> Edit Playlist</h4>
           </p>
           <p><h5> {this.state.playlist.name}{" "}</h5>  <Link to={`/playlist/${this.state.playlist._id}/edit`}>
            <EditIcon />
          </Link></p>
         </Grid>
     
         
        
          
          <Grid item  xs={12}
            container
            direction="column"
            justifyContent="space-between"
            >
        {this.state.playlist.tracks.map((track) => {
          return (
            <div>
              <p>
                <b>
                {track.artists} - {track.name}
                </b>
              </p>
              <p>
                {track.preview_url ? (
                  <div>
                    <AudioPlayer
                      download={false}
                      volume={true}
                      width="auto"
                      hieght="58px"
                      variation="default"
                      autoplay={false}
                      preload="auto"
                      loop={false}
                      src={track.preview_url}
                    />
                  </div>
                ) : (
                  <>Preview not available</>
                )}
              </p>

              <p>
                <span>
                  Listen on
                  <a href={track.external_urls.spotify} target="_blank">
                    {" "}
                    <SpotifyButton />
                  </a>
                </span>
              </p>
            </div>
          );
        })}
        </Grid>
        </Grid>
      </Container>
   
    );
  }
}
