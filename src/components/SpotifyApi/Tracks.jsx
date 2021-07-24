import React, { Component } from 'react'
require('dotenv').config();
//const express = require('express');

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


export default tracks