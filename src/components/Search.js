import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Slider from "./Individual/Slider";
import Container from "@material-ui/core/Container";


// SEARCH 
class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <Container maxWidth="sm">
          <h1>SEARCH COMPONENT SHOWING</h1>

          <p>
            <Slider />
          </p>

 
          <TextField
            onChange={onSearch}
            id="standard-basic"
            label="Selekt your music"
            name="search"
          />

          <p>
            <h4>Results</h4>
          </p>
        </Container>
      </div>
    );
  }
}

export default Search;
