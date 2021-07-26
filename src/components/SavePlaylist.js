import React, { Component } from "react";

//MATERIAL UI IMPORTS
import { TextField } from "@material-ui/core";
import SliderTime from "./Individual/Slider";
import Container from "@material-ui/core/Container";
import Toggle from "./Individual/Toggle";
import SpotifyButton from "./Individual/SpotifyButton";

// SAVE PLAYLIST COMPONENT
// For logged in users only
// OPTIONS 
// - Save name 
// - Save Duration this can actually be the limit of songs ????
// - public or private 
// - Save to Spotity


class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <Container maxWidth="sm">
          <h1>SAVE PLAYLIST COMPONENT SHOWING</h1>
          <p>
            <h4>Results list of songs from generated playlist goes here</h4>
          </p>
          <p>
            <TextField
              onChange={onSearch}
              id="standard-basic"
              label="Name Your Playlist"
              name="Save"
            />
          </p>
          <p>
            <SliderTime />
          </p>
          <p>
            <Toggle />
          </p>

          <p>
            Save to <SpotifyButton />
          </p>
        </Container>
      </div>
    );
  }
}

export default Search;
