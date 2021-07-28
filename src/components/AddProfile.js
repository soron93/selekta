import React, { Component } from  'react'
import {Button} from  'react-bootstrap'
import {Redirect} from 'react-router-dom'

class AddProfile extends Component {

	render() {  

		if (!this.props.user) {
			//redirect to sigin page
			return <Redirect to={'/'}/>
		}



		return (
			<form onSubmit={this.props.onAdd}>
				<input  name="name"  type="text"  placeholder="Enter name"/>
				<input  name="description"  type="text"  placeholder="Enter playlist"/>
				<input type="file" name="myImage" accept="image/png, image/jpg" />
				<Button  type="submit"  >Submit</Button>
			</form>
		)
	}
}

export default AddProfile
