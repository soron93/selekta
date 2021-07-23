import React, { Component } from 'react'
import SliderMockUp from "./SliderMockUp";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

class TestEmmy extends Component {


  render() {

    console.log('test emmy component')


    return (

      <div>

        <h1>EMMY COMPONENT SHOWING</h1>
        {/* */}
        <p>
          <SliderMockUp />
        </p>
        <ThemeProvider theme={muiTheme}>
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

  /> />
        </ThemeProvider>;


      </div>



    )
  }
}



export default TestEmmy

