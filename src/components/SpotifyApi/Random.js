import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";

//import SpotifyToken from '../SpotifyLogin/SpotifyLogin'

/*// EXAMPLE FROM STACK OVER FLOW

how to??? genre list can come from 3rd model in mongo
Combine a random genre with search ... pass the  random genre dynamically in the seach 

REFERENCE
https://developer.spotify.com/documentation/web-api/reference/#category-search

SEARCH 
curl -X "GET" "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAAWHajQQSypwWw3xJiDppcxfJtW4izBeFoOJVvyVw6fvZq2PmxAgJhtigPo8xR_48AgWLO7LfCh_I5qAp5FWMQZJNjFDRUP2JqETpFzHRyo2sDk1BnvIjSAFRJj8FPzzfWS7mBHi3gteIeS-ECDpQ"

EXAMPLE PARAMS
q=lil%20genre:%22southern%20hip%20hop%22&type=artist.

https://api.spotify.com/v1/search?q=bob%20year:2014&type=album


LIST OF GENRES   4367 lines 
https://everynoise.com/everynoise1d.cgi?scope=all&vector=popularity


make a variable with some search queries and put it in an array. (you can create more search queries.
$getRandomSongsArray = array('%25a%25', 'a%25', '%25e%25', 'e%25', '%25i%25', 'i%25', '%25o%25', 'o%25');

//This will get a random result out of the array above
$getRandomSongs = $getRandomSongsArray[array_rand($getRandomSongsArray)];

//This will get a random offset number between 1 and 1000. So you get a random track. (you can change the numbers btw)
$getRandomOffset = rand(1, 1000);

//This is the url that gets the results out of the Spotify API. You have to put in the variables you created above.
$url = "https://api.spotify.com/v1/search?query=$getRandomSongs&offset=$getRandomOffset&limit=1&type=track&market=NL";


PYTHON GIT HUB EXAMPLE
https://github.com/ZipBomb/spotify-song-suggestion/blob/master/random_song.py*/


// dynamically enter a genre from our model ??????
const ENDPOINT = "https://api.spotify.com/v1/search?q=Electronica&offset=0&limit=20&type=track";  //end point to get the playlist
//ANOTHER EXAMPLE 
//https://api.spotify.com/v1/search?q=genre:
const Random = () => {
  const [token, setToken] = useState(""); 
  const [data, setData] = useState({}); 

  useEffect(() => {
    if (localStorage.getItem("accessToken")) { // from get return params spotify auth
      setToken(localStorage.getItem("accessToken"));// gets the token from the local storage  
    }
  }, []); // locally storing the token from spotify here is the problem ??? IDK

  const handleGetPlaylists = () => {
    axios
      .get(ENDPOINT, {
        headers: { // an axios property 
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data); // use state function up there 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //button to handle getting the random track  option chain using data map below 
  return (  
    <>
  <Container maxWidth="sm">  <button onClick={handleGetPlaylists}>Get Random</button> 
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}</Container>
    
    </>
  );
};

export default Random
