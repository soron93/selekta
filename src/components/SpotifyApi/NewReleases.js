import React, { useEffect, useState } from 'react';
import axios from 'axios';

//GOAL - SHOW NEW RELEASES ON THE PROFILE WITH THIS COMPONENT

//API CALL  GET https://api.spotify.com/v1/browse/new-releases 
//example axios request below  + with access
/*
  with limit added and offset ??? 
curl -X "GET" "https://api.spotify.com/v1/browse/new-releases?limit=10&offset=3" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer "


Select scopes
This endpoint requires authentication, but does not require a specific scope.

*/
let SpotifyWebApi = require('spotify-web-api-node');

spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'SE' })
  .then(function(data) {
    console.log(data.body);
      done();
    }, function(err) {
       console.log("Something went wrong!", err);
    });
  });


const NewReleases = () => {

	// Set up states for retrieving access token and top tracks
	const [token, setToken] = useState('');  //first get this
	const [tracks, setTracks] = useState([]);

	useEffect(()=>{

	
		axios('https://accounts.spotify.com/api/token', { // enpoint for access token send the post req  you need client id and secret 
        
			'method': 'POST',
			'headers': {
				 'Content-Type':'application/x-www-form-urlencoded',
				 'Authorization': 'Basic ' + (new Buffer('7ff64ba3320346b3be3b5977db49e2dd' + ':' + '159e425980f746daa880cedcb8ab5e02').toString('base64')),
			},
			data: 'grant_type=client_credentials'
		}).then(tokenresponse => {
			console.log(tokenresponse.data.access_token);
			setToken(tokenresponse.data.access_token);

			// Api call for retrieving tracks data
			axios(`https://api.spotify.com/v1/browse/new-releases?limit=10&offset=3`,{
				'method': 'GET',
				'headers': {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + tokenresponse.data.access_token
				}
			}).then(trackresponse=> {
				console.log(trackresponse.data.tracks);
				setTracks(trackresponse.data.tracks);
			}).catch(error=> console.log(error))
		}).catch(error => console.log(error));
	},[])


	return(
		<div>
			
		</div>
	)
}


export default NewReleases
