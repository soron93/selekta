import React, { useEffect, useState } from 'react';
import axios from 'axios';

//API CALL  GET https://api.spotify.com/v1/browse/new-releases 


const NewReleases = () => {

	// Set up states for retrieving access token and top tracks
	const [token, setToken] = useState('');  //first get this
	const [tracks, setTracks] = useState([]);

	// Artist ID from Spotify
	const id = '06HL4z0CvFAxyc27GXpf02';
	const market = 'US';

	useEffect(()=>{

		// Api call for retrieving token
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
			axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,{
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

	// Transform track data 
	function PopularityByTrack(data){

		let plotData = [];

		let names = [];
		let popularity = [];

		data.map(each => {
			names.push(each.name);
			popularity.push(each.popularity);
		})

		plotData['names'] = names;
		plotData['popularity'] = popularity;

		return plotData;
	}

	return(
		<div>
			
		</div>
	)
}


export default NewReleases
