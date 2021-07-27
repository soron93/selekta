import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {API_URL} from '../config'
import {Redirect} from 'react-router-dom'



class CrudDetail extends Component {

    state = {
        crudDetail: null
    }

    // Make your /api/todos/:id requst here
    // check your server side routes to know the right url

    // we're making the todo detail request so that we can show all the todo specific info in the detail page
    async componentDidMount(){
        try {
            //check the `<Routes>` in App.js. That's where the params `todoId` comes from
            let crudId = this.props.match.params.crudId
            let response = await axios.get(`${API_URL}/api/cruds/${crudId}`)
            this.setState({
                crudDetail: response.data
            })
        }  
        catch(err){
            console.log('Crud fetch failed', err)
        }
    }

    render() {

        
		if (!this.props.user) {
			//redirect to signin page 
			return <Redirect to={'/signin'} />
		}


        if (!this.state.crudDetail) {
            return <Spinner animation="border" variant="primary" />
        } 

        const {crudDetail} = this.state
        return (
            <div>
                <h4>
                    Name: {crudDetail.name}
                </h4>
                <h6>
                    Description: {crudDetail.description}
                </h6>
                {
                    crudDetail.image && (
                        <img src={crudDetail.image} alt={crudDetail.name} />
                    )
                }
                
                <Link to={`/crud/${crudDetail._id}/edit`}>
                    <button  >
                        Edit 
                    </button>
                </Link>
                <button onClick={() => {  this.props.onDelete( crudDetail._id )   } }>
                    Delete
                </button>
            </div>
        )
    }
}

export default CrudDetail