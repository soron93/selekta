import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {API_URL} from '../config'
import {Redirect} from 'react-router-dom'



class SpotifyDetail extends Component {

    state = {
        todoDetail: null
    }

    // Make your /api/todos/:id requst here
    // check your server side routes to know the right url

    // we're making the todo detail request so that we can show all the todo specific info in the detail page
    async componentDidMount(){
        try {
            //check the `<Routes>` in App.js. That's where the params `todoId` comes from
            let todoId = this.props.match.params.todoId
            let response = await axios.get(`${API_URL}/api/todos/${todoId}`)
            this.setState({
                todoDetail: response.data
            })
        }  
        catch(err){
            console.log('Todo fetch failed', err)
        }
    }

    render() {

        
		if (!this.props.user) {
			//redirect to signin page 
			return <Redirect to={'/signin'} />
		}


        if (!this.state.todoDetail) {
            return <Spinner animation="border" variant="primary" />
        } 

        const {todoDetail} = this.state
        return (
            <div>
                <h4>
                    Name: {todoDetail.name}
                </h4>
                <h6>
                    Description: {todoDetail.description}
                </h6>
                {
                    todoDetail.image && (
                        <img src={todoDetail.image} alt={todoDetail.name} />
                    )
                }
                
                <Link to={`/todo/${todoDetail._id}/edit`}>
                    <button  >
                        Edit 
                    </button>
                </Link>
                <button onClick={() => {  this.props.onDelete( todoDetail._id )   } }>
                    Delete
                </button>
            </div>
        )
    }
}

export default SpotifyDetail