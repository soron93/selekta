import React, { Component } from 'react'
import SliderMockUp from "./SliderMockUp";
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class Selekta extends Component {


    render() {

        console.log('test this')

        return (

            <div >
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="sm">
                      
                        <h1>SELEKTA SPLASH PAGE COMPONENT SHOWING</h1>
                    </Container>
                </React.Fragment>
             
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