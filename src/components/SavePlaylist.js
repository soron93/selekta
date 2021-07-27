import React, { Component } from "react";

//MATERIAL UI IMPORTS
import { TextField } from "@material-ui/core";
import SliderTime from "./Individual/SliderSelekta";
import Container from "@material-ui/core/Container";
import Toggle from "./Individual/Toggle";
import SpotifyButton from "./Individual/SpotifyButton";

// SAVE PLAYLIST COMPONENT  SHOWING
//SHOUD DISPLY AFTER GENERATING LIST  
// For logged in users only
// OPTIONS 
// - Save name 
// - Save Duration this can actually be the limit of songs ????
// - public or private 
// - Save to Spotity

/*
LINK API DOC
https://developer.spotify.com/documentation/web-api/reference/#category-playlists
https://developer.spotify.com/documentation/web-api/reference/#category-browse 

GET a list of recommended based on audio features
Requires AUTH
Requires Genre  -> DB or GET https://api.spotify.com/v1/recommendations/available-genre-seeds
Requires artist ->  artist ID
Requires 
GET https://api.spotify.com/v1/recommendations ---  this might work alone with audio features need to test????


Get user playlist
Requires user ID
GET https://api.spotify.com/v1/users/{user_id}/playlists  


Create playlist
Requires user ID
POST https://api.spotify.com/v1/users/{user_id}/playlists  

*/ 


class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <Container maxWidth="sm">
          <h1>SAVE PLAYLIST COMPONENT SHOWING</h1>
        
          <p>
            <TextField
              onChange={onSearch}
              id="standard-basic"
              label="Name Your Playlist"
              name="Save"
            />
          </p>
         
        </Container>
      </div>
    );
  }
}

export default Search;
