import React, { Component } from 'react'
import SliderMockUp from "./SliderMockUp";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import SpotifyButton from "./Individual/SpotifyButton";
//import Plotly from "./Plotly/Plotly";
// const muiTheme = createMuiTheme({});
import SearchTest from "./SearchTest"

class TestEmmy extends Component {


  render() {

    console.log('test emmy component')


    return (

      <div>

        <h1>EMMY COMPONENT SHOWING</h1>
        <p>
          <SearchTest />
        </p>

        {/* */}
        <p>
          <SliderMockUp />
        </p>

        <iframe src="https://open.spotify.com/embed?uri=spotify:album:1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <p><SpotifyButton/></p>
        
        {/* <ThemeProvider theme={muiTheme}>
          <AudioPlayer elevation={1}
    width="20%"
    variation="default"
    spacing={3}
    download={true}
    autoplay={ false}
    order="standart"
    preload="auto"
    loop={true}
    src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }

  /> 
        </ThemeProvider>; */}


      </div>



    )
  }
}



export default TestEmmy

