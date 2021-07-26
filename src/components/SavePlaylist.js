import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Slider from "./Individual/Slider";
import SliderTime from "./Individual/Slider";
import Container from "@material-ui/core/Container";
import Toggle from "./Individual/Toggle";
import SpotifyButton from "./Individual/SpotifyButton";

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
