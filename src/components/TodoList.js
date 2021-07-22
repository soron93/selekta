import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class TodoList extends Component {

    
    render() {
        const {todos} = this.props
        
        return (
            <div>
                             {
                    todos.map((todo, i) => {
                        return <p key={i}>
                            <Link to={`/todo/${todo._id}`}> {todo.name} </Link></p>
                    })
                }
            </div>
        )
    }
}

export default TodoList

/*

import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
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

export default SpotifyGetPlaylists;*/