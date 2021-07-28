/*import React, { Component } from 'react'*/
//import React, { useEffect, useState } from "react";
//import axios from "axios";

import React, { Component } from 'react';
//import Axios from 'axios';


//import { Link } from 'react-router-dom'
import SpotifyButton from "../Individual/SpotifyButton";
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';

import {  ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
//TRIED USING LINK DID NOT WORK, instead of a anchor tag

class Tracks extends Component {
 

  render() {

    return (
      <div>
        {/* <h4>Track List</h4> */}
        <p></p>

        {this.props.tracks.map((track) => {
          return (
            <div>
              <p>{track.artists[0].name} - {track.name}</p>
              <p>
              {
              track.preview_url ? (
            <div>		
            {/*<ReactAudioPlayer
                  src={track.preview_url}
                  controls
                />*/}
               
              <AudioPlayer
               download={false}
               volume={true}
                width="auto"
                hieght="58px"
                variation="default"
                autoplay={false}
                preload="auto"
                loop={false}
                src={track.preview_url}/>
          
            </div>
					) : (
						<>
						Preview not available
					
					</>
					)
				}

              </p>

              <p>
                <span>Listen on
                <a href={track.external_urls.spotify} target="_blank" > <SpotifyButton /></a> 
                </span>

               



              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Tracks;

