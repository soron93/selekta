import React, { Component } from "react";

import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { API_URL } from "../config";
import Grid from "@material-ui/core/Grid";


class Search extends Component {
  state = {
    searchState: "",
  };

  handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({ searchState: event.target.value });
  };

  handleSearchButtonClick = () => {
    let data = {
      playlistName: this.state.playlistName,
      tracks: this.props.tracks,
    };
    axios
      .post(`${API_URL}/api/create-playlist`, data, { withCredentials: true })
      .then(() => {})
      .catch(() => {});
  };

  render() {
   

    //Here inside of the component is where we pass the prop down
    // "onChange1"  not a keyword, is the variable name we also give it in the APP.JS compenent returned
    return (
     <div>
                  <TextField
                    onChange={this.handleSave}
                    tracks={this.props.tracks}
                    id="standard-basic"
                    label="Name Your Playlist"
                    name="Save"
                  />

                  <h4 >Search Results </h4>               
      </div>
    );
  }
}

export default Search;
