/*import React, { Component } from 'react'*/
import React, { useEffect, useState } from "react";
//import axios from "axios";

//GOAL - SEARCH FEATURE TRACKS 

/*EXAMPLE GET REQUEST FOR SEVERAL TRACKS US MARKET  ????
curl -X "GET" "https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C3twNvmDtFQtAd5gMKedhLD&market=United%20States" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAAWHajQQSypwWw3xJiDppcxfJtW4izBeFoOJVvyVw6fvZq2PmxAgJhtigPo8xR_48AgWLO7LfCh_I5qAp5FWMQZJNjFDRUP2JqETpFzHRyo2sDk1BnvIjSAFRJj8FPzzfWS7mBHi3gteIeS-ECDpQ" */

/*
EXAMPLE FROM MAGIC PLAYLIST 
 * 'use strict';

import React, {Component} from 'react';
import PlaylistActions from '../actions/PlaylistActions';
import Player from './Player';

class Track extends Component {

  constructor(props) {
    super(props);
  }

  _remove() {
    PlaylistActions.removeTrack(this.props.index);
    ga('send', 'event', 'button', 'click', 'playlist-remove-track');
  }

  _handleReSearch() {
    PlaylistActions.search(this.props.track, this.props.country);
    ga('send', 'event', 'event', 'new-re-search', this.props.track.name);
  }

  render() {
    let track = this.props.track;
    return <li>
              <div className='track-name'>{track.name}, {track.artists.first().name}</div>
              <div
                className='remove tooltip center'
                onClick={this._remove.bind(this)}
                data-tooltip='Remove this track'
              >
                <img src='img/remove.svg'/>
              </div>
              <div className='play tooltip center' data-tooltip='Preview this track'>
                <Player
                  source={track.preview_url}
                  ptag={this.props.ptag.bind(this)}
                  stopAll={this.props.stopAll.bind(this)}/>
              </div>
              <div
                className='re-search tooltip center'
                onClick={this._handleReSearch.bind(this)}
                data-tooltip='Make a new playlist!'
              >
                <img src='img/reload.svg'/>
              </div>
            </li>;
  }
}

export default Track;*/


const Tracks = () => {
  

    const [token, setToken] = useState("");
    const [data, setData] = useState({});
    const ENDPOINT = "https://api.spotify.com/v1/me/????????";  //end point not sure what the endpoint ofr this is

    useEffect(() => {
        if (localStorage.getItem("accessToken")) { // from get return params spotify auth
            setToken(localStorage.getItem("accessToken"));// gets the token from the local storage  
        }
    }, []);


    return (
        <>
          
        </>
    );
};

export default Tracks



//const express = require('express');
/*
ANOTHER EXAMPLE OF HOW TO ACESS THE API

const SpotifyWebApi = require('spotify-web-api-node');

//const app = express();

//app.set('view engine', 'hbs');
//pp.set('views', __dirname + '/views');
//app.use(express.static(__dirname + '/public'));

class tracks extends Component {

    CLIENT_ID = "7ff64ba3320346b3be3b5977db49e2dd";

    CLIENT_SECRET = "159e425980f746daa880cedcb8ab5e02";

    render() {
        return (
            <div>
                <h1>helloTracks</h1>

                <iframe src="https://open.spotify.com/embed?uri={{uri}} " width="300" height="380" frameborder="0"
        allowtransparency="true" allow="encrypted-media"></iframe>

            </div>
        )
    }
}


export default tracks*/