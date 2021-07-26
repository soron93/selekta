import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {API_URL} from '../config'
import {Redirect} from 'react-router-dom'




class SpotifyDetail extends Component {

    state = {
        spotifyDetail: null
    }

    // Make your /api/todos/:id requst here
    // check your server side routes to know the right url

    // we're making the todo detail request so that we can show all the todo specific info in the detail page
    async componentDidMount(){
        try {
            //check the `<Routes>` in App.js. That's where the params `todoId` comes from
            let spotifyId = this.props.match.params.spotifyId
            let response = await axios.get(`${API_URL}/api/spotify/${spotifyId}`)
            this.setState({
                spotifyDetail: response.data
            })
        }  
        catch(err){
            console.log('T fetch failed', err)
        }
    }

    render() {

        
		if (!this.props.user) {
			//redirect to signin page 
			return <Redirect to={'/signin'} />
		}


        if (!this.state.spotifyDetail) {
            return <Spinner animation="border" variant="primary" />
        } 

        const {spotifyDetail} = this.state
        return (
            <div>
                <h4>
                    Name: {spotifyDetail.name}
                </h4>
                <h6>
                    Description: {spotifyDetail.description}
                </h6>
                {
                    spotifyDetail.image && (
                        <img src={spotifyDetail.image} alt={spotifyDetail.name} />
                    )
                }
                
                <Link to={`/spotify/${spotifyDetail._id}/edit`}>
                    <button  >
                        Edit 
                    </button>
                </Link>
                <button onClick={() => {  this.props.onDelete( spotifyDetail._id )   } }>
                    Delete
                </button>
            </div>
        )
    }
}

export default SpotifyDetail