import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Slider from "./Individual/SliderSelekta";
import Container from "@material-ui/core/Container";


// SEARCH 
//GOAL - SEARCH FEATURE TRACKS 

//LINK IN API DOC - https://developer.spotify.com/documentation/web-api/reference/#category-search

//GET  -  https://api.spotify.com/v1/search

/*EXAMPLE GET REQUEST FOR SEVERAL TRACKS US MARKET  ????
curl -X "GET" "https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C3twNvmDtFQtAd5gMKedhLD&market=United%20States" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAAWHajQQSypwWw3xJiDppcxfJtW4izBeFoOJVvyVw6fvZq2PmxAgJhtigPo8xR_48AgWLO7LfCh_I5qAp5FWMQZJNjFDRUP2JqETpFzHRyo2sDk1BnvIjSAFRJj8FPzzfWS7mBHi3gteIeS-ECDpQ" */


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
