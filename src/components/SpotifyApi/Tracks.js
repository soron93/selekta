/*import React, { Component } from 'react'*/
//import React, { useEffect, useState } from "react";
//import axios from "axios";

import React, { Component } from 'react';
//import Axios from 'axios';

//import { Link } from 'react-router-dom'


class Tracks extends Component {
   

render() {
    
    return (
      <div>
       <h1>Track List</h1>

         {this.props.tracks.map((track) => { 
          return (
            <div>
              <p>{track.name}</p>
              <p>{track.preview_url}</p>
              <p>{track.external_urls.spotify}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Tracks;

