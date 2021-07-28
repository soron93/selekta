import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import SliderTime from "./Individual/SliderSelekta";
import Container from "@material-ui/core/Container";
import Toggle from "./Individual/Toggle";




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
