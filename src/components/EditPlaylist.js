import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import {Link} from  'react-router-dom'

class EditPlaylist extends Component {

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

    handleDelete=(trackId) =>{
        let playlistId = this.props.match.params.id
        axios.delete( `${API_URL}/api/playlist/${playlistId}/${trackId}`, { withCredentials: true } )
        .then((response) => {
            let newTracks = this.state.playlist.tracks.filter((track)=>{
                console.log(track._id, trackId)
                return track._id != trackId
            })
            let clone = JSON.parse(JSON.stringify(this.state.playlist)) 
            clone.tracks = newTracks
            console.log(clone.tracks)
          this.setState({ playlist:clone}) // we update the state here 
        })
        .catch((err) => {
          console.log("delete fail",err);
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
                
             
                {
            this.state.playlist.tracks.map((track) => {
              return <p>{track.name} <button onClick={() => {this.handleDelete(track._id)}}>
              Delete
              </button></p>
            })
          }
    </div>
        )
    }
}
export default EditPlaylist