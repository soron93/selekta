/*import React, { Component } from 'react'*/
//import React, { useEffect, useState } from "react";
//import axios from "axios";

import React, { Component } from 'react';
//import Axios from 'axios';


//import { Link } from 'react-router-dom'
import SpotifyButton from "../Individual/SpotifyButton";
import { Link } from 'react-router-dom'
// import ReactAudioPlayer from 'react-audio-player';

//TRIED USING LINK DID NOT WORK, instead of a anchor tag

class Tracks extends Component {


  render() {

    return (
      <div>
        <h1>Track List</h1>

        {this.props.tracks.map((track) => {
          return (
            <div>
              <p>{track.name}</p>
              <p>
              {
              track.preview_url ? (
            <div>		
            {/* <ReactAudioPlayer
                  src={track.preview_url}
                  controls */}
                />
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

