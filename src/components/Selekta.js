import React, { Component } from "react";
import SliderSelekta from "./Individual/SliderSelekta";
import { Button, TextField } from "@material-ui/core";
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import Tracks from "./SpotifyApi/Tracks";
import axios from "axios";
import { API_URL } from "../config";
import Profile from './Profile';

//SPLASHSCREEN HOMEPAGE
// This screen holds the main feature available to non logged in users and
// To save the play list users will need to login

class Selekta extends Component {

state = {
  playlistName:''

}
  
handleSave = (event) => {
console.log(event.target.value)
this.setState({playlistName:event.target.value})
}

handleSaveButtonClick = () => {
  let data={
    playlistName:this.state.playlistName,
    tracks:this.props.tracks
  }
  axios.post(`${API_URL}/api/create-playlist`, data, {withCredentials: true})
    .then(()=>{

    })
    .catch(()=>{
      
    })

}


  render() {
    console.log("test this SPLASH SCREEN");

    //Here inside of the component is where we pass the prop down
    // "onChange1"  not a keyword, is the variable name we also give it in the APP.JS compenent returned
    return (
      <div>
        <Container maxWidth="sm">
          <h1>SELEKTA SPLASH PAGE COMPONENT SHOWING</h1>
          <p>
            <SliderSelekta
              onChange1={this.props.onChange1}
              onChange2={this.props.onChange2}
              onChange3={this.props.onChange3}
              onChange4={this.props.onChange4}
            />
          </p>
          
          <p>
            
           {
             this.props.user ? <Profile users={this.state.users}/> : "No user signed in"
           }

          </p>


          <p>
            <h4>Generate your personalized playlist</h4>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.onSelekting}
            >
              Start Selekting
            </Button>

            {/* is visible after start selekting is pressed  */}
            
            {
              this.props.tracks.length ? 
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSaveButtonClick}
              >
                Save Playlist 
              </Button> : " "
            }
  
             {/* name playlist after selekting   */}

              <p></p>
            {
              
              this.props.tracks.length ? <TextField onChange={this.handleSave} tracks={this.props.tracks} 
              id="standard-basic"
              label="Name Your Playlist"
              name="Save"/> : ""
              
            }
          </p>
           
          <p>
            {
              this.props.tracks.length ?  <Tracks tracks={this.props.tracks} /> : "No Playlist Created"
            }
          </p>
        </Container>
      </div>
    );
  }
}

export default Selekta;
