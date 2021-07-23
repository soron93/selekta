import React, { Component } from 'react'
import SliderMockUp from "./SliderMockUp";
import { Button} from '@material-ui/core';

class Selekta extends Component {


    render() {

        console.log('test this')

        return (

            <div >
                <h1>SELEKTA SPLASH PAGE COMPONENT SHOWING</h1>
                <p>
                    <SliderMockUp />
                </p>

                <p>
                <h4>
                    Generate your personalized playlist
                </h4>
                <Button type="submit" variant="contained" color="primary">
                    Start Selekting
                </Button>
                </p>

            </div>


        )
    }
}

export default Selekta