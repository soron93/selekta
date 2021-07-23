import React, { Component } from 'react'
import { TextField } from '@material-ui/core';

class Search extends Component {
    render() {

    const { onSearch } = this.props
    return(
        <div> <h1>SEARCH COMPONENT SHOWING</h1>
            <TextField onChange={onSearch}
                id="standard-basic"
                label="Selekt your music"
                name="search" /> 

            
        </div>
    )
}
}

export default Search