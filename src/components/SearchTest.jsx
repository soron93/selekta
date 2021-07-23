import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import SliderMockUp from "./SliderMockUp";



class Search extends Component {
    render() {

        const { onSearch } = this.props
        return (
            <div> <h1>SEARCH COMPONENT SHOWING</h1>

                <p>
                    <SliderMockUp />
                </p>

                <TextField onChange={onSearch}
                    id="standard-basic"
                    label="Selekt your music"
                    name="search" />

                <p>
                    <h4>Results</h4>

                </p>

            </div>


        )
    }
}

export default Search