import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import {Link} from  'react-router-dom'
import EditIcon from "@material-ui/icons/Edit";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//MATERIAL 

//USER PROFILE IN THE APP PRIVATE PAGE
//SHOULD SHOW A LIST OF SAVED PLAY LIST

class Profile extends Component {
  state = {
    playlists:[]
  }

  componentDidMount(){   // getting the db info from -> server -> db
    axios.get( `${API_URL}/api/profile`, { withCredentials: true } )
    .then((response) => {
      console.log(response.data)
      this.setState({ playlists:response.data})
    })
    .catch(() => {
      console.log("get fail");
    })


}

  render() {
    console.log("test this");

    return (

      <div>
        <Container maxWidth="sm">
        <Grid container spacing={2} xs={12}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item  xs={12}
            container
            direction="column"
            justifyContent="space-between"
           >
           <p>
           <h4>My Playlists</h4>
           </p>
          {
            
            this.state.playlists.map((playlist) => {
              return <p><Link to={`/playlist/${playlist._id}`}> <EditIcon /></Link> {playlist.name}</p>
            })
          }
          </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Profile;
