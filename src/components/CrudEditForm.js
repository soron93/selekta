import React, { Component } from 'react'
import {Button, Spinner} from  'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'



class CrudEditForm extends Component {

    state = {
        crudDetail: null
    }

    // Make your /api/todos/:id requst here
    // check your server side routes to know the right url
    async componentDidMount(){
        try {
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

    handleNameChange = (event) => {
        let newName = event.target.value
        this.setState({
            crusdDetail: {...this.state.crudDetail, name:newName }
        })
    }

    handlePlaylistChange = (event) => {
        let newPlaylist = event.target.value
        this.setState({
            crudDetail: {...this.state.crudDetail, description : newPlaylist }
        })
    }

    render() {

        if (!this.state.crudDetail) {
            return <Spinner animation="border" variant="primary" />
        } 

        const {crudDetail} = this.state
        const {onEdit} = this.props

        return (
            // passing the event and the updated todo to the onEdit function 
            // so that it can send the updated values of the todo to the DB
            <form onSubmit={ (event) => {onEdit(event, crudDetail ) } } >
				<input onChange={this.handleNameChange} value={crudDetail.name}  name="name"  type="text"  placeholder="Enter name"/>
				<input onChange={this.handlePlaylistChange} value={crudDetail.description} name="description"  type="text"  placeholder="Enter playlistname"/>
				<Button  type="submit"  >Submit</Button>
			</form>
        )
    }
}

export default CrudEditForm