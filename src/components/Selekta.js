import React, { Component } from "react";
import Slider from "./Individual/Slider";
import { Button } from "@material-ui/core";
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";


class Selekta extends Component {
  render() {
    console.log("test this");

    return (
      <div>
        <Container maxWidth="sm">
          <h1>SELEKTA SPLASH PAGE COMPONENT SHOWING</h1>
          <p>
            <Slider />
          </p>
          <p>
            <h4>Generate your personalized playlist</h4>
            <a  href="/signin"><Button type="submit" variant="contained" color="primary">
              Start Selekting
            </Button></a>
          </p>
        </Container>
      </div>
    );
  }
}

export default Selekta;
