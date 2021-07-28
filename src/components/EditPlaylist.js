import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import {Link} from  'react-router-dom'
import { Button, TextField } from "@material-ui/core";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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


    handleChange=(event) =>{
        let newName = event.target.value
        let clone = JSON.parse(JSON.stringify(this.state.playlist)) 
        clone.name = newName
        this.setState({ playlist:clone})
    }


    handleSave=() =>{
        let playlistId = this.props.match.params.id 
        axios.patch( `${API_URL}/api/playlist/${playlistId}`, {name:this.state.playlist.name}, { withCredentials: true } )
        .then((response) => {
            this.props.history.push('/profile')
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
               <Container spacing={2}  maxWidth="sm">
                <TextField
                    onChange={this.handleChange}
                    tracks={this.props.tracks}
                    id="standard-basic"
                    name="Save"
                  value={this.state.playlist.name}/>
                  <button onClick={this.handleSave} > Save </button>
                  </Container>   
                {
            this.state.playlist.tracks.map((track) => {
              return  <Container maxWidth="sm">
        <Grid container spacing={2} xs={12}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item  xs={12}
            container
            direction="column"
            justifyContent="space-between"
           ><p> <Link onClick={() => {this.handleDelete(track._id)}}>
              <DeleteForeverRoundedIcon/>
              </Link>{track.name}</p>
              </Grid>
              </Grid></Container>   
                     })
          }
          
    </div>
        )
    }
}
export default EditPlaylist