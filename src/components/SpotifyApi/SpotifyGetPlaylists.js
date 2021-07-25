import React, { useEffect, useState } from "react";
import axios from "axios";

//GOAL -  GET USER PLAYLIST FROM SPOTIFY

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";  //end point to get the playlist

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState(""); 
  const [data, setData] = useState({}); 

  useEffect(() => {
    if (localStorage.getItem("accessToken")) { // from get return params spotify auth
      setToken(localStorage.getItem("accessToken"));// gets the token from the local storage  
    }
  }, []);

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <>
      <button onClick={handleGetPlaylists}>Get Playlists</button>
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
  );
};

export default SpotifyGetPlaylists;