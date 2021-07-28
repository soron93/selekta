import React, { Component } from "react";
//import SliderMockUp from "./SliderMockUp";
import Slider from "./Individual/SliderSelekta";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import SpotifyButton from "./Individual/SpotifyButton";
//import Plotly from "./Plotly/Plotly";
const muiTheme = createMuiTheme({});
//import SearchTest from "./SearchTest";
//import CssBaseline from "@material-ui/core/CssBaseline";
//import Box from "@material-ui/core/Box";
//import Container from "@material-ui/core/Container";

class TestEmmy extends Component {
  render() {
    console.log("test emmy component");

    return (
      <div>
        {" "}
        <h1>EMMY COMPONENT SHOWING</h1>
        <p>
          <p>
            <Slider />
          </p>
        </p>
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <p>
          <SpotifyButton />
        </p>
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer
            elevation={1}
            width="20%"
            variation="default"
            download={true}
            autoplay={false}
            order="standart"
            preload="auto"
            loop={true}
            src={
              "https://p.scdn.co/mp3-preview/5da6e7730e5f7b5155f699309a851b80ceea4f55?cid=7ff64ba3320346b3be3b5977db49e2dd"
            }
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default TestEmmy;
