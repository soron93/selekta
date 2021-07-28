import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import {Link} from  'react-router-dom'



export default class PlaylistDetail extends Component {

    state = {
        playlist:null,
      }
    
      componentDidMount(){   // getting the db info from -> server -> db
        let playlistId = this.props.match.params.id  // from the ID in routes in App js keywords match.params.id 
        axios.get( `${API_URL}/api/playlist/${playlistId}`, { withCredentials: true } )
        .then((response) => {
          console.log(response.data)
          this.setState({ playlist:response.data}) // we update the state here 
        })
        .catch(() => {
          console.log("get fail");
        })
    }
    render() {
        if (!this.state.playlist) {
            return <p>Loading . . . </p>;
          }
        return (
            <div>
                Playlist Detail
                {this.state.playlist.name}
                
                <Link to={`/playlist/${this.state.playlist._id}/edit`}><button>Edit Profile</button></Link>
                {
            this.state.playlist.tracks.map((track) => {
              return <p>{track.name}</p>
            })
          }
    </div>
        )
    }
}
