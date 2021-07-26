import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' id='title' name={this.state.name} onChange={this.handleChange} />
                {/* <input type="submit" value="Submit" /> */}
                <Button type="submit">Search for an artist</Button>
            </form>
        )
    }

}

export default Index

