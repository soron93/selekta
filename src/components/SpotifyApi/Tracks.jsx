/*import React, { Component } from 'react'*/
import React, { useEffect, useState } from "react";
import axios from "axios";

/*EXAMPLE GET REQUEST FOR SEVERAL TRACKS US MARKET  ????
curl -X "GET" "https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C3twNvmDtFQtAd5gMKedhLD&market=United%20States" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAAWHajQQSypwWw3xJiDppcxfJtW4izBeFoOJVvyVw6fvZq2PmxAgJhtigPo8xR_48AgWLO7LfCh_I5qAp5FWMQZJNjFDRUP2JqETpFzHRyo2sDk1BnvIjSAFRJj8FPzzfWS7mBHi3gteIeS-ECDpQ" */




const Tracks = () => {
  

    const [token, setToken] = useState("");
    const [data, setData] = useState({});
    const ENDPOINT = "https://api.spotify.com/v1/me/playlists";  //end point to get the playlist

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